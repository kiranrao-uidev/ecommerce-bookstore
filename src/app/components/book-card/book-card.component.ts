import { Component, inject, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Book, BookFormat } from '../../models/book.model';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { BookCoverComponent } from '../book-cover/book-cover.component';
import { RatingStarsComponent } from '../rating-stars/rating-stars.component';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, RouterLink, BookCoverComponent, RatingStarsComponent],
  template: `
    <article class="book-card">
      <div class="card-cover-section">
        <!-- Floating badges -->
        <div class="badge-group">
          @if (book().bestseller) {
            <span class="badge bestseller-badge">Bestseller</span>
          }
          @if (book().newRelease) {
            <span class="badge new-badge">New</span>
          }
        </div>

        <!-- Wishlist toggle button -->
        <button
          type="button"
          class="wishlist-btn"
          [class.active]="isWishlisted()"
          (click)="onToggleWishlist($event)"
          [attr.aria-label]="isWishlisted() ? 'Remove from wishlist' : 'Add to wishlist'"
        >
          <svg
            class="heart-icon"
            viewBox="0 0 24 24"
            [attr.fill]="isWishlisted() ? '#ef4444' : 'none'"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <!-- Book Cover Link -->
        <a [routerLink]="['/book', book().id]" class="cover-link">
          <app-book-cover [book]="book()" size="md" />
        </a>

        <!-- Quick View Overlay Button -->
        <button
          type="button"
          class="quick-view-overlay-btn"
          (click)="onQuickViewClick($event)"
        >
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Quick View
        </button>
      </div>

      <!-- Card Content Info -->
      <div class="card-info">
        <span class="category-tag">{{ book().category }}</span>

        <h3 class="card-title">
          <a [routerLink]="['/book', book().id]" class="title-link">{{ book().title }}</a>
        </h3>

        <p class="card-author">by <span>{{ book().author }}</span></p>

        <div class="rating-row">
          <app-rating-stars
            [rating]="book().rating"
            [reviewCount]="book().reviewCount"
          />
        </div>

        <!-- Format Selector Chips -->
        <div class="format-chips">
          @for (format of book().formats; track format) {
            <button
              type="button"
              class="chip-btn"
              [class.active]="selectedFormat() === format"
              (click)="selectFormat(format)"
            >
              {{ format }}
            </button>
          }
        </div>

        <!-- Price & Action Row -->
        <div class="price-action-row">
          <div class="price-box">
            <span class="current-price">\${{ currentPrice() | number: '1.2-2' }}</span>
            @if (book().originalPrice) {
              <span class="original-price">\${{ book().originalPrice | number: '1.2-2' }}</span>
            }
          </div>

          <button
            type="button"
            class="add-cart-btn"
            [disabled]="!book().inStock"
            (click)="onAddToCart()"
            [attr.aria-label]="'Add ' + book().title + ' to cart'"
          >
            @if (book().inStock) {
              <svg class="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <span>Add</span>
            } @else {
              <span>Out of Stock</span>
            }
          </button>
        </div>
      </div>
    </article>
  `,
  styles: [
    `
      .book-card {
        background: #ffffff;
        border-radius: 14px;
        border: 1px solid #e5e7eb;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        position: relative;
        height: 100%;
      }

      .book-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.12);
        border-color: #cbd5e1;
      }

      .card-cover-section {
        position: relative;
        background: #f8fafc;
        padding: 1.5rem 1.25rem 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .badge-group {
        position: absolute;
        top: 0.75rem;
        left: 0.75rem;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        z-index: 5;
      }

      .badge {
        font-size: 0.7rem;
        font-weight: 700;
        padding: 0.2rem 0.55rem;
        border-radius: 6px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .bestseller-badge {
        background: #f59e0b;
        color: #ffffff;
      }

      .new-badge {
        background: #10b981;
        color: #ffffff;
      }

      .wishlist-btn {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid #e5e7eb;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 5;
        transition: background 0.15s ease, transform 0.15s ease, border-color 0.15s ease;
        color: #64748b;
      }

      .wishlist-btn:hover {
        background: #ffffff;
        transform: scale(1.1);
        color: #ef4444;
      }

      .wishlist-btn.active {
        color: #ef4444;
        border-color: #fca5a5;
        background: #fef2f2;
      }

      .heart-icon {
        width: 18px;
        height: 18px;
      }

      .cover-link {
        display: block;
        width: 100%;
        max-width: 180px;
        text-decoration: none;
      }

      .quick-view-overlay-btn {
        position: absolute;
        bottom: 0.75rem;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        opacity: 0;
        background: rgba(15, 23, 42, 0.85);
        color: #ffffff;
        font-size: 0.75rem;
        font-weight: 600;
        border: none;
        border-radius: 9999px;
        padding: 0.35rem 0.85rem;
        display: flex;
        align-items: center;
        gap: 0.35rem;
        cursor: pointer;
        backdrop-filter: blur(4px);
        transition: opacity 0.2s ease, transform 0.2s ease;
        z-index: 5;
      }

      .card-cover-section:hover .quick-view-overlay-btn {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }

      .quick-view-overlay-btn:hover {
        background: #0f172a;
      }

      .icon-sm {
        width: 14px;
        height: 14px;
      }

      .card-info {
        padding: 1.1rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

      .category-tag {
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #6366f1;
        margin-bottom: 0.25rem;
      }

      .card-title {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.35;
        margin: 0 0 0.25rem 0;
      }

      .title-link {
        color: #0f172a;
        text-decoration: none;
        transition: color 0.15s ease;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .title-link:hover {
        color: #4f46e5;
      }

      .card-author {
        font-size: 0.825rem;
        color: #64748b;
        margin: 0 0 0.5rem 0;
      }

      .card-author span {
        color: #334155;
        font-weight: 500;
      }

      .rating-row {
        margin-bottom: 0.75rem;
      }

      .format-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem;
        margin-bottom: 0.85rem;
      }

      .chip-btn {
        font-size: 0.7rem;
        font-weight: 500;
        padding: 0.2rem 0.5rem;
        border-radius: 6px;
        background: #f1f5f9;
        border: 1px solid #e2e8f0;
        color: #475569;
        cursor: pointer;
        transition: all 0.15s ease;
      }

      .chip-btn:hover {
        background: #e2e8f0;
      }

      .chip-btn.active {
        background: #eef2ff;
        border-color: #6366f1;
        color: #4f46e5;
        font-weight: 600;
      }

      .price-action-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
        padding-top: 0.75rem;
        border-top: 1px solid #f1f5f9;
      }

      .price-box {
        display: flex;
        flex-direction: column;
      }

      .current-price {
        font-size: 1.15rem;
        font-weight: 800;
        color: #0f172a;
      }

      .original-price {
        font-size: 0.775rem;
        color: #94a3b8;
        text-decoration: line-through;
      }

      .add-cart-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        background: #4f46e5;
        color: #ffffff;
        font-size: 0.825rem;
        font-weight: 600;
        padding: 0.5rem 0.9rem;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        transition: background 0.15s ease, transform 0.15s ease;
      }

      .add-cart-btn:hover:not(:disabled) {
        background: #4338ca;
        transform: translateY(-1px);
      }

      .add-cart-btn:disabled {
        background: #94a3b8;
        cursor: not-allowed;
      }

      .cart-icon {
        width: 15px;
        height: 15px;
      }
    `
  ]
})
export class BookCardComponent {
  private readonly cartService = inject(CartService);
  private readonly wishlistService = inject(WishlistService);

  public readonly book = input.required<Book>();
  public readonly quickView = output<Book>();

  public readonly selectedFormat = signal<BookFormat>('Paperback');

  public currentPrice(): number {
    const format = this.selectedFormat();
    const base = this.book().price;
    if (format === 'Hardcover') return Number((base * 1.25).toFixed(2));
    if (format === 'eBook') return Number((base * 0.75).toFixed(2));
    if (format === 'Audiobook') return Number((base * 0.9).toFixed(2));
    return base;
  }

  public isWishlisted(): boolean {
    return this.wishlistService.isInWishlist(this.book().id);
  }

  public selectFormat(format: BookFormat): void {
    this.selectedFormat.set(format);
  }

  public onToggleWishlist(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.wishlistService.toggleWishlist(this.book());
  }

  public onQuickViewClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.quickView.emit(this.book());
  }

  public onAddToCart(): void {
    this.cartService.addToCart(this.book(), 1, this.selectedFormat());
  }
}
