import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';
import { Book } from '../../models/book.model';
import { BookCoverComponent } from '../../components/book-cover/book-cover.component';
import { RatingStarsComponent } from '../../components/rating-stars/rating-stars.component';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink, BookCoverComponent, RatingStarsComponent],
  template: `
    <div class="wishlist-page">
      <div class="container">
        <div class="wishlist-header">
          <div>
            <h1 class="page-title">My Wishlist</h1>
            <p class="page-sub">Keep track of the books you want to read next</p>
          </div>

          @if (wishlistBooks().length > 0) {
            <button type="button" class="btn-clear" (click)="clearAll()">
              Clear Wishlist
            </button>
          }
        </div>

        @if (wishlistBooks().length === 0) {
          <div class="empty-wishlist-card">
            <div class="empty-heart-icon">💖</div>
            <h2>Your wishlist is empty</h2>
            <p>Save books you love by clicking the heart icon on any book card.</p>
            <a routerLink="/" class="btn-explore">Explore Books</a>
          </div>
        } @else {
          <div class="wishlist-grid">
            @for (book of wishlistBooks(); track book.id) {
              <div class="wishlist-card">
                <div class="card-cover-wrap">
                  <a [routerLink]="['/book', book.id]">
                    <app-book-cover [book]="book" size="md" />
                  </a>
                </div>

                <div class="card-body">
                  <span class="category-tag">{{ book.category }}</span>
                  <h3 class="book-title">
                    <a [routerLink]="['/book', book.id]">{{ book.title }}</a>
                  </h3>
                  <p class="book-author">by {{ book.author }}</p>

                  <div class="rating-box">
                    <app-rating-stars [rating]="book.rating" [reviewCount]="book.reviewCount" />
                  </div>

                  <div class="price-row">
                    <span class="price-val">\${{ book.price | number: '1.2-2' }}</span>
                    @if (book.originalPrice) {
                      <span class="orig-val">\${{ book.originalPrice | number: '1.2-2' }}</span>
                    }
                  </div>

                  <div class="card-actions">
                    <button
                      type="button"
                      class="btn-move-cart"
                      (click)="moveToCart(book)"
                    >
                      Move to Cart
                    </button>

                    <button
                      type="button"
                      class="btn-remove"
                      (click)="remove(book.id, book.title)"
                      title="Remove from wishlist"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            }
          </div>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .wishlist-page {
        padding: 2.5rem 0 4rem;
      }

      .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }

      .wishlist-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #e2e8f0;
      }

      .page-title {
        font-size: 2rem;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 0.25rem 0;
      }

      .page-sub {
        font-size: 0.9rem;
        color: #64748b;
        margin: 0;
      }

      .btn-clear {
        background: none;
        border: 1px solid #cbd5e1;
        font-size: 0.825rem;
        font-weight: 600;
        color: #64748b;
        padding: 0.45rem 0.85rem;
        border-radius: 8px;
        cursor: pointer;
      }

      .btn-clear:hover {
        background: #fee2e2;
        border-color: #fca5a5;
        color: #dc2626;
      }

      .empty-wishlist-card {
        text-align: center;
        background: #ffffff;
        border: 1px dashed #cbd5e1;
        border-radius: 16px;
        padding: 4.5rem 1.5rem;
      }

      .empty-heart-icon {
        font-size: 3.5rem;
        margin-bottom: 1rem;
      }

      .empty-wishlist-card h2 {
        font-size: 1.5rem;
        font-weight: 800;
        color: #1e293b;
        margin: 0 0 0.5rem 0;
      }

      .empty-wishlist-card p {
        font-size: 0.95rem;
        color: #64748b;
        margin: 0 0 1.5rem 0;
      }

      .btn-explore {
        display: inline-block;
        background: #4f46e5;
        color: #ffffff;
        font-weight: 700;
        font-size: 0.95rem;
        padding: 0.8rem 1.75rem;
        border-radius: 10px;
        text-decoration: none;
      }

      .wishlist-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 1.75rem;
      }

      .wishlist-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .wishlist-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
      }

      .card-cover-wrap {
        background: #f8fafc;
        padding: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .card-body {
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

      .category-tag {
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        color: #6366f1;
        margin-bottom: 0.25rem;
      }

      .book-title {
        font-size: 1rem;
        font-weight: 700;
        margin: 0 0 0.25rem 0;
        line-height: 1.3;
      }

      .book-title a {
        color: #0f172a;
        text-decoration: none;
      }

      .book-title a:hover {
        color: #4f46e5;
      }

      .book-author {
        font-size: 0.825rem;
        color: #64748b;
        margin: 0 0 0.6rem 0;
      }

      .rating-box {
        margin-bottom: 0.75rem;
      }

      .price-row {
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
        margin-top: auto;
        margin-bottom: 1rem;
      }

      .price-val {
        font-size: 1.15rem;
        font-weight: 800;
        color: #0f172a;
      }

      .orig-val {
        font-size: 0.8rem;
        color: #94a3b8;
        text-decoration: line-through;
      }

      .card-actions {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 0.5rem;
      }

      .btn-move-cart {
        background: #4f46e5;
        color: #ffffff;
        font-size: 0.825rem;
        font-weight: 700;
        padding: 0.55rem 0.85rem;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        transition: background 0.15s ease;
      }

      .btn-move-cart:hover {
        background: #4338ca;
      }

      .btn-remove {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        color: #ef4444;
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0.55rem 0.75rem;
        border-radius: 8px;
        cursor: pointer;
      }

      .btn-remove:hover {
        background: #fee2e2;
      }
    `
  ]
})
export class WishlistComponent {
  private readonly wishlistService = inject(WishlistService);
  private readonly cartService = inject(CartService);

  public readonly wishlistBooks = this.wishlistService.wishlistBooks;

  public remove(id: string, title: string): void {
    this.wishlistService.removeFromWishlist(id, title);
  }

  public clearAll(): void {
    this.wishlistService.clearWishlist();
  }

  public moveToCart(book: Book): void {
    this.cartService.addToCart(book, 1, 'Paperback');
    this.wishlistService.removeFromWishlist(book.id);
  }
}
