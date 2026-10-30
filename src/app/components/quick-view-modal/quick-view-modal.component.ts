import { Component, HostListener, inject, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Book, BookFormat } from '../../models/book.model';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { BookCoverComponent } from '../book-cover/book-cover.component';
import { RatingStarsComponent } from '../rating-stars/rating-stars.component';

@Component({
  selector: 'app-quick-view-modal',
  standalone: true,
  imports: [CommonModule, RouterLink, BookCoverComponent, RatingStarsComponent],
  template: `
    @if (book(); as b) {
      <div class="modal-backdrop" (click)="onClose()"></div>

      <div class="modal-dialog" role="dialog" aria-modal="true" [attr.aria-label]="b.title">
        <button type="button" class="close-modal-btn" (click)="onClose()" aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="modal-body-grid">
          <!-- Cover Column -->
          <div class="modal-cover-side">
            <app-book-cover [book]="b" size="md" />
          </div>

          <!-- Info Column -->
          <div class="modal-info-side">
            <span class="category-pill">{{ b.category }}</span>

            <h2 class="book-modal-title">{{ b.title }}</h2>
            @if (b.subtitle) {
              <p class="book-modal-subtitle">{{ b.subtitle }}</p>
            }

            <p class="book-modal-author">by <strong>{{ b.author }}</strong></p>

            <div class="rating-box">
              <app-rating-stars [rating]="b.rating" [reviewCount]="b.reviewCount" />
              <span class="stock-status" [class.in-stock]="b.inStock">
                {{ b.inStock ? '● In Stock (' + b.stockCount + ' available)' : '○ Out of Stock' }}
              </span>
            </div>

            <p class="book-desc">{{ b.shortDescription }}</p>

            <!-- Format selection -->
            <div class="format-section">
              <label class="section-label">Select Format:</label>
              <div class="format-buttons">
                @for (format of b.formats; track format) {
                  <button
                    type="button"
                    class="format-btn"
                    [class.active]="selectedFormat() === format"
                    (click)="selectedFormat.set(format)"
                  >
                    <span class="fmt-name">{{ format }}</span>
                    <span class="fmt-price">\${{ computeFormatPrice(b, format) | number: '1.2-2' }}</span>
                  </button>
                }
              </div>
            </div>

            <!-- Quantity & Actions -->
            <div class="action-section">
              <div class="qty-picker">
                <button type="button" (click)="decrementQty()" class="qty-btn">-</button>
                <span class="qty-num">{{ quantity() }}</span>
                <button type="button" (click)="incrementQty()" class="qty-btn">+</button>
              </div>

              <button
                type="button"
                class="add-cart-large-btn"
                [disabled]="!b.inStock"
                (click)="addToCart(b)"
              >
                Add to Cart • \${{ (computeFormatPrice(b, selectedFormat()) * quantity()) | number: '1.2-2' }}
              </button>

              <button
                type="button"
                class="wishlist-icon-btn"
                [class.active]="isWishlisted(b.id)"
                (click)="toggleWishlist(b)"
                title="Wishlist"
              >
                <svg viewBox="0 0 24 24" [attr.fill]="isWishlisted(b.id) ? '#ef4444' : 'none'" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>

            <!-- View full details link -->
            <div class="modal-footer-link">
              <a [routerLink]="['/book', b.id]" (click)="onClose()">
                View full specifications & customer reviews →
              </a>
            </div>
          </div>
        </div>
      </div>
    }
  `,
  styles: [
    `
      .modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.65);
        backdrop-filter: blur(4px);
        z-index: 1100;
        animation: fadeIn 0.2s ease-out;
      }

      .modal-dialog {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        max-width: 820px;
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        z-index: 1101;
        overflow: hidden;
        animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        max-height: 90vh;
        display: flex;
        flex-direction: column;
      }

      @keyframes scaleUp {
        from {
          opacity: 0;
          transform: translate(-50%, -46%) scale(0.96);
        }
        to {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
      }

      .close-modal-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: #f1f5f9;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #64748b;
        z-index: 10;
        transition: all 0.15s ease;
      }

      .close-modal-btn:hover {
        background: #e2e8f0;
        color: #0f172a;
      }

      .close-modal-btn svg {
        width: 18px;
        height: 18px;
      }

      .modal-body-grid {
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: 2rem;
        padding: 2rem;
        overflow-y: auto;
      }

      .modal-cover-side {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f8fafc;
        border-radius: 12px;
        padding: 1.5rem;
      }

      .modal-info-side {
        display: flex;
        flex-direction: column;
      }

      .category-pill {
        display: inline-block;
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #4f46e5;
        background: #eef2ff;
        padding: 0.2rem 0.6rem;
        border-radius: 9999px;
        align-self: flex-start;
        margin-bottom: 0.5rem;
      }

      .book-modal-title {
        font-size: 1.4rem;
        font-weight: 800;
        color: #0f172a;
        line-height: 1.25;
        margin: 0 0 0.35rem 0;
      }

      .book-modal-subtitle {
        font-size: 0.85rem;
        color: #64748b;
        margin: 0 0 0.5rem 0;
      }

      .book-modal-author {
        font-size: 0.875rem;
        color: #475569;
        margin: 0 0 0.75rem 0;
      }

      .rating-box {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        margin-bottom: 1rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #f1f5f9;
      }

      .stock-status {
        font-size: 0.8rem;
        font-weight: 600;
        color: #ef4444;
      }

      .stock-status.in-stock {
        color: #10b981;
      }

      .book-desc {
        font-size: 0.875rem;
        line-height: 1.55;
        color: #475569;
        margin: 0 0 1.25rem 0;
      }

      .format-section {
        margin-bottom: 1.25rem;
      }

      .section-label {
        font-size: 0.8rem;
        font-weight: 700;
        color: #1e293b;
        display: block;
        margin-bottom: 0.4rem;
      }

      .format-buttons {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
        gap: 0.5rem;
      }

      .format-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.45rem 0.6rem;
        border-radius: 8px;
        background: #f8fafc;
        border: 1.5px solid #e2e8f0;
        cursor: pointer;
        transition: all 0.15s ease;
      }

      .format-btn:hover {
        border-color: #cbd5e1;
      }

      .format-btn.active {
        background: #eef2ff;
        border-color: #4f46e5;
      }

      .fmt-name {
        font-size: 0.75rem;
        font-weight: 600;
        color: #1e293b;
      }

      .fmt-price {
        font-size: 0.7rem;
        color: #64748b;
      }

      .format-btn.active .fmt-name,
      .format-btn.active .fmt-price {
        color: #4338ca;
        font-weight: 700;
      }

      .action-section {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-top: auto;
        padding-top: 1rem;
      }

      .qty-picker {
        display: inline-flex;
        align-items: center;
        border: 1px solid #cbd5e1;
        border-radius: 8px;
        background: #f8fafc;
      }

      .qty-btn {
        background: none;
        border: none;
        width: 32px;
        height: 36px;
        font-size: 1rem;
        font-weight: 700;
        color: #334155;
        cursor: pointer;
      }

      .qty-num {
        font-size: 0.875rem;
        font-weight: 700;
        padding: 0 0.5rem;
        color: #0f172a;
      }

      .add-cart-large-btn {
        flex: 1;
        background: #4f46e5;
        color: #ffffff;
        border: none;
        padding: 0.75rem 1.25rem;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 700;
        cursor: pointer;
        transition: background 0.15s ease;
      }

      .add-cart-large-btn:hover:not(:disabled) {
        background: #4338ca;
      }

      .add-cart-large-btn:disabled {
        background: #94a3b8;
        cursor: not-allowed;
      }

      .wishlist-icon-btn {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #64748b;
        transition: all 0.15s ease;
      }

      .wishlist-icon-btn:hover {
        background: #f1f5f9;
        color: #ef4444;
      }

      .wishlist-icon-btn.active {
        color: #ef4444;
        border-color: #fca5a5;
        background: #fef2f2;
      }

      .wishlist-icon-btn svg {
        width: 20px;
        height: 20px;
      }

      .modal-footer-link {
        margin-top: 1rem;
        text-align: right;
      }

      .modal-footer-link a {
        font-size: 0.8rem;
        font-weight: 600;
        color: #4f46e5;
        text-decoration: none;
      }

      .modal-footer-link a:hover {
        text-decoration: underline;
      }

      @media (max-width: 700px) {
        .modal-body-grid {
          grid-template-columns: 1fr;
          padding: 1.25rem;
          gap: 1.25rem;
        }
        .modal-cover-side {
          display: none;
        }
      }
    `
  ]
})
export class QuickViewModalComponent {
  private readonly cartService = inject(CartService);
  private readonly wishlistService = inject(WishlistService);

  public readonly book = input<Book | null>(null);
  public readonly close = output<void>();

  public readonly selectedFormat = signal<BookFormat>('Paperback');
  public readonly quantity = signal<number>(1);

  public computeFormatPrice(book: Book, format: BookFormat): number {
    if (format === 'Hardcover') return Number((book.price * 1.25).toFixed(2));
    if (format === 'eBook') return Number((book.price * 0.75).toFixed(2));
    if (format === 'Audiobook') return Number((book.price * 0.9).toFixed(2));
    return book.price;
  }

  public isWishlisted(bookId: string): boolean {
    return this.wishlistService.isInWishlist(bookId);
  }

  public toggleWishlist(book: Book): void {
    this.wishlistService.toggleWishlist(book);
  }

  public incrementQty(): void {
    this.quantity.update((q) => q + 1);
  }

  public decrementQty(): void {
    this.quantity.update((q) => Math.max(1, q - 1));
  }

  public addToCart(book: Book): void {
    this.cartService.addToCart(book, this.quantity(), this.selectedFormat());
    this.onClose();
  }

  public onClose(): void {
    this.close.emit();
    this.quantity.set(1);
  }

  @HostListener('document:keydown.escape')
  public onEscape(): void {
    this.onClose();
  }
}
