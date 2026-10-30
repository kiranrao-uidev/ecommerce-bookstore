import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { NotificationService } from '../../services/notification.service';
import { Book, BookFormat } from '../../models/book.model';
import { BookCoverComponent } from '../../components/book-cover/book-cover.component';
import { RatingStarsComponent } from '../../components/rating-stars/rating-stars.component';
import { BookCardComponent } from '../../components/book-card/book-card.component';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, BookCoverComponent, RatingStarsComponent, BookCardComponent],
  template: `
    @if (book(); as b) {
      <div class="book-detail-page">
        <!-- Breadcrumb navigation -->
        <nav class="breadcrumb-nav">
          <div class="container">
            <a routerLink="/">Home</a>
            <span class="sep">/</span>
            <a routerLink="/" (click)="filterByCategory(b.category)">{{ b.category }}</a>
            <span class="sep">/</span>
            <span class="current-title">{{ b.title }}</span>
          </div>
        </nav>

        <div class="container main-content-wrap">
          <!-- Top Grid: Cover & Purchase Section -->
          <div class="top-product-grid">
            <!-- Left: Cover Presentation -->
            <div class="cover-showcase">
              <div class="cover-wrapper">
                <app-book-cover [book]="b" size="lg" />
              </div>
              <div class="guarantee-tags">
                <span class="gtag">✓ Guaranteed Authentic</span>
                <span class="gtag">✓ Fast Dispatch</span>
                <span class="gtag">✓ 30-Day Easy Returns</span>
              </div>
            </div>

            <!-- Right: Details & Purchase Options -->
            <div class="product-info-panel">
              <div class="category-meta-row">
                <span class="category-badge">{{ b.category }}</span>
                @if (b.bestseller) {
                  <span class="badge-pill bestseller">Bestseller</span>
                }
                @if (b.newRelease) {
                  <span class="badge-pill new">New Release</span>
                }
              </div>

              <h1 class="main-title">{{ b.title }}</h1>
              @if (b.subtitle) {
                <p class="subtitle">{{ b.subtitle }}</p>
              }

              <div class="author-row">
                <span>By</span>
                <strong class="author-name">{{ b.author }}</strong>
                <span class="dot">•</span>
                <span class="publisher-name">Published by {{ b.publisher }}</span>
              </div>

              <!-- Rating Row -->
              <div class="rating-review-strip">
                <app-rating-stars [rating]="b.rating" [reviewCount]="b.reviewCount" />
                <span class="stock-pill" [class.in-stock]="b.inStock">
                  {{ b.inStock ? '● In Stock (' + b.stockCount + ' copies available)' : '○ Out of Stock' }}
                </span>
              </div>

              <!-- Price Box -->
              <div class="price-presentation-box">
                <div class="price-left">
                  <span class="active-price">\${{ currentPrice() | number: '1.2-2' }}</span>
                  @if (b.originalPrice) {
                    <span class="original-price">\${{ b.originalPrice | number: '1.2-2' }}</span>
                    <span class="save-badge">Save \${{ (b.originalPrice - currentPrice()) | number: '1.2-2' }}</span>
                  }
                </div>
              </div>

              <!-- Format Picker -->
              <div class="format-choice-section">
                <label class="choice-label">Choose Format:</label>
                <div class="format-grid">
                  @for (fmt of b.formats; track fmt) {
                    <button
                      type="button"
                      class="format-card-btn"
                      [class.active]="selectedFormat() === fmt"
                      (click)="selectedFormat.set(fmt)"
                    >
                      <span class="f-type">{{ fmt }}</span>
                      <span class="f-price">\${{ getFormatPrice(fmt) | number: '1.2-2' }}</span>
                    </button>
                  }
                </div>
              </div>

              <!-- Quantity and Add to Cart -->
              <div class="purchase-action-group">
                <div class="qty-selector">
                  <button type="button" class="qty-btn" (click)="decrementQty()">-</button>
                  <span class="qty-display">{{ quantity() }}</span>
                  <button type="button" class="qty-btn" (click)="incrementQty()">+</button>
                </div>

                <button
                  type="button"
                  class="btn-add-to-cart"
                  [disabled]="!b.inStock"
                  (click)="addToCart(b)"
                >
                  <svg class="cart-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <span>Add to Cart • \${{ (currentPrice() * quantity()) | number: '1.2-2' }}</span>
                </button>

                <button
                  type="button"
                  class="btn-wishlist-toggle"
                  [class.active]="isWishlisted()"
                  (click)="toggleWishlist(b)"
                  [title]="isWishlisted() ? 'Remove from wishlist' : 'Add to wishlist'"
                >
                  <svg viewBox="0 0 24 24" [attr.fill]="isWishlisted() ? '#ef4444' : 'none'" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>
              </div>

              <!-- Tags list -->
              <div class="tags-row">
                <span class="tag-title">Topics:</span>
                @for (tag of b.tags; track tag) {
                  <span class="topic-tag">{{ tag }}</span>
                }
              </div>
            </div>
          </div>

          <!-- Tabs: Description & Specifications -->
          <div class="product-tabs-section">
            <div class="tab-headers">
              <button
                type="button"
                class="tab-btn"
                [class.active]="activeTab() === 'overview'"
                (click)="activeTab.set('overview')"
              >
                Overview & Description
              </button>
              <button
                type="button"
                class="tab-btn"
                [class.active]="activeTab() === 'specs'"
                (click)="activeTab.set('specs')"
              >
                Book Specifications
              </button>
              <button
                type="button"
                class="tab-btn"
                [class.active]="activeTab() === 'reviews'"
                (click)="activeTab.set('reviews')"
              >
                Customer Reviews ({{ reviews().length }})
              </button>
            </div>

            <div class="tab-content-body">
              @if (activeTab() === 'overview') {
                <div class="overview-pane">
                  <h3 class="pane-title">About this Edition</h3>
                  <p class="description-text">{{ b.description }}</p>
                  <p class="description-text">{{ b.shortDescription }}</p>
                </div>
              }

              @if (activeTab() === 'specs') {
                <div class="specs-pane">
                  <table class="specs-table">
                    <tbody>
                      <tr>
                        <th>ISBN-13</th>
                        <td>{{ b.isbn }}</td>
                      </tr>
                      <tr>
                        <th>Page Count</th>
                        <td>{{ b.pages }} pages</td>
                      </tr>
                      <tr>
                        <th>Publisher</th>
                        <td>{{ b.publisher }}</td>
                      </tr>
                      <tr>
                        <th>Publication Date</th>
                        <td>{{ b.publishedDate }}</td>
                      </tr>
                      <tr>
                        <th>Language</th>
                        <td>{{ b.language }}</td>
                      </tr>
                      <tr>
                        <th>Available Formats</th>
                        <td>{{ b.formats.join(', ') }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              }

              @if (activeTab() === 'reviews') {
                <div class="reviews-pane">
                  <!-- Reviews Summary & Write Form -->
                  <div class="reviews-grid">
                    <div class="reviews-list-col">
                      <h3 class="pane-title">Reader Reviews</h3>

                      @if (reviews().length === 0) {
                        <p class="no-reviews-msg">No customer reviews yet. Be the first to share your thoughts!</p>
                      } @else {
                        <div class="reviews-stack">
                          @for (rev of reviews(); track rev.id) {
                            <div class="review-card">
                              <div class="rev-header">
                                <div class="rev-user-box">
                                  <div class="rev-avatar">{{ rev.userName.charAt(0) }}</div>
                                  <div>
                                    <span class="rev-user-name">{{ rev.userName }}</span>
                                    @if (rev.verifiedPurchase) {
                                      <span class="verified-badge">✓ Verified Reader</span>
                                    }
                                  </div>
                                </div>
                                <span class="rev-date">{{ rev.date }}</span>
                              </div>

                              <div class="rev-rating">
                                <app-rating-stars [rating]="rev.rating" [showScore]="false" />
                              </div>

                              <p class="rev-comment">{{ rev.comment }}</p>
                            </div>
                          }
                        </div>
                      }
                    </div>

                    <!-- Write a review form -->
                    <div class="write-review-col">
                      <div class="write-review-card">
                        <h4 class="form-title">Write a Review</h4>
                        <p class="form-sub">Share your feedback with fellow book lovers</p>

                        <form (submit)="onSubmitReview($event)">
                          <div class="form-field">
                            <label>Your Rating:</label>
                            <app-rating-stars
                              [rating]="newRating"
                              [interactive]="true"
                              [showScore]="false"
                              (ratingChange)="newRating = $event"
                            />
                          </div>

                          <div class="form-field">
                            <label for="rev-author">Your Name</label>
                            <input
                              id="rev-author"
                              type="text"
                              placeholder="e.g. Alexis Jordan"
                              [(ngModel)]="newAuthor"
                              name="reviewAuthor"
                              required
                              class="form-input"
                            />
                          </div>

                          <div class="form-field">
                            <label for="rev-comment">Review Content</label>
                            <textarea
                              id="rev-comment"
                              rows="4"
                              placeholder="What did you love about this book?"
                              [(ngModel)]="newComment"
                              name="reviewComment"
                              required
                              class="form-input textarea"
                            ></textarea>
                          </div>

                          <button type="submit" class="submit-review-btn">
                            Publish Review
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Related Books Section -->
          @if (relatedBooks().length > 0) {
            <section class="related-books-section">
              <h2 class="section-title">You May Also Like</h2>
              <div class="related-grid">
                @for (rel of relatedBooks(); track rel.id) {
                  <app-book-card [book]="rel" />
                }
              </div>
            </section>
          }
        </div>
      </div>
    } @else {
      <div class="container not-found-box">
        <h2>Book Not Found</h2>
        <p>The book you are looking for does not exist in our catalog.</p>
        <a routerLink="/" class="back-link">Return to Home Catalog</a>
      </div>
    }
  `,
  styles: [
    `
      .book-detail-page {
        padding-bottom: 4rem;
      }

      .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }

      .breadcrumb-nav {
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
        padding: 0.85rem 0;
        font-size: 0.825rem;
        color: #64748b;
      }

      .breadcrumb-nav a {
        color: #4f46e5;
        text-decoration: none;
      }

      .breadcrumb-nav a:hover {
        text-decoration: underline;
      }

      .breadcrumb-nav .sep {
        margin: 0 0.5rem;
        color: #cbd5e1;
      }

      .breadcrumb-nav .current-title {
        color: #1e293b;
        font-weight: 600;
      }

      .main-content-wrap {
        padding-top: 2.5rem;
      }

      .top-product-grid {
        display: grid;
        grid-template-columns: 360px 1fr;
        gap: 3.5rem;
        align-items: flex-start;
        margin-bottom: 3.5rem;
      }

      .cover-showcase {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #f8fafc;
        border-radius: 16px;
        padding: 2.5rem 1.5rem;
        border: 1px solid #e2e8f0;
      }

      .cover-wrapper {
        width: 100%;
        max-width: 260px;
      }

      .guarantee-tags {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        width: 100%;
      }

      .gtag {
        font-size: 0.775rem;
        color: #059669;
        font-weight: 600;
        background: #ecfdf5;
        padding: 0.35rem 0.75rem;
        border-radius: 6px;
      }

      .product-info-panel {
        display: flex;
        flex-direction: column;
      }

      .category-meta-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.6rem;
      }

      .category-badge {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #4f46e5;
        background: #eef2ff;
        padding: 0.25rem 0.65rem;
        border-radius: 9999px;
      }

      .badge-pill {
        font-size: 0.7rem;
        font-weight: 700;
        padding: 0.2rem 0.55rem;
        border-radius: 6px;
        text-transform: uppercase;
        color: #ffffff;
      }

      .badge-pill.bestseller {
        background: #f59e0b;
      }

      .badge-pill.new {
        background: #10b981;
      }

      .main-title {
        font-family: Georgia, serif;
        font-size: 2.25rem;
        font-weight: 800;
        color: #0f172a;
        line-height: 1.2;
        margin: 0 0 0.4rem 0;
      }

      .subtitle {
        font-size: 1.05rem;
        color: #64748b;
        margin: 0 0 1rem 0;
        line-height: 1.4;
      }

      .author-row {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.9rem;
        color: #475569;
        margin-bottom: 1.25rem;
      }

      .author-name {
        color: #0f172a;
      }

      .dot {
        color: #cbd5e1;
      }

      .rating-review-strip {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding-bottom: 1.25rem;
        border-bottom: 1px solid #e2e8f0;
        margin-bottom: 1.5rem;
      }

      .stock-pill {
        font-size: 0.825rem;
        font-weight: 600;
        color: #ef4444;
      }

      .stock-pill.in-stock {
        color: #10b981;
      }

      .price-presentation-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
      }

      .price-left {
        display: flex;
        align-items: baseline;
        gap: 0.75rem;
      }

      .active-price {
        font-size: 2rem;
        font-weight: 800;
        color: #0f172a;
      }

      .original-price {
        font-size: 1.15rem;
        color: #94a3b8;
        text-decoration: line-through;
      }

      .save-badge {
        font-size: 0.75rem;
        font-weight: 700;
        color: #dc2626;
        background: #fee2e2;
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
      }

      .format-choice-section {
        margin-bottom: 1.75rem;
      }

      .choice-label {
        font-size: 0.85rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 0.5rem;
        display: block;
      }

      .format-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
        gap: 0.6rem;
      }

      .format-card-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.6rem 0.75rem;
        border-radius: 10px;
        background: #f8fafc;
        border: 2px solid #e2e8f0;
        cursor: pointer;
        transition: all 0.15s ease;
      }

      .format-card-btn:hover {
        border-color: #cbd5e1;
      }

      .format-card-btn.active {
        background: #eef2ff;
        border-color: #4f46e5;
      }

      .f-type {
        font-size: 0.825rem;
        font-weight: 700;
        color: #1e293b;
      }

      .f-price {
        font-size: 0.75rem;
        color: #64748b;
      }

      .format-card-btn.active .f-type,
      .format-card-btn.active .f-price {
        color: #4338ca;
      }

      .purchase-action-group {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        margin-bottom: 1.75rem;
      }

      .qty-selector {
        display: inline-flex;
        align-items: center;
        border: 1.5px solid #cbd5e1;
        border-radius: 10px;
        background: #f8fafc;
      }

      .qty-btn {
        background: none;
        border: none;
        width: 38px;
        height: 44px;
        font-size: 1.1rem;
        font-weight: 700;
        color: #334155;
        cursor: pointer;
      }

      .qty-display {
        font-size: 0.95rem;
        font-weight: 700;
        padding: 0 0.75rem;
        color: #0f172a;
      }

      .btn-add-to-cart {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        background: #4f46e5;
        color: #ffffff;
        font-size: 1rem;
        font-weight: 700;
        padding: 0.8rem 1.5rem;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        transition: background 0.15s ease, transform 0.15s ease;
      }

      .btn-add-to-cart:hover:not(:disabled) {
        background: #4338ca;
        transform: translateY(-1px);
      }

      .btn-add-to-cart:disabled {
        background: #94a3b8;
        cursor: not-allowed;
      }

      .cart-svg {
        width: 20px;
        height: 20px;
      }

      .btn-wishlist-toggle {
        width: 46px;
        height: 46px;
        border-radius: 10px;
        background: #f8fafc;
        border: 1.5px solid #e2e8f0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #64748b;
        transition: all 0.15s ease;
      }

      .btn-wishlist-toggle:hover {
        background: #f1f5f9;
        color: #ef4444;
      }

      .btn-wishlist-toggle.active {
        color: #ef4444;
        border-color: #fca5a5;
        background: #fef2f2;
      }

      .btn-wishlist-toggle svg {
        width: 22px;
        height: 22px;
      }

      .tags-row {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.4rem;
      }

      .tag-title {
        font-size: 0.8rem;
        font-weight: 700;
        color: #64748b;
      }

      .topic-tag {
        font-size: 0.75rem;
        background: #f1f5f9;
        color: #475569;
        padding: 0.2rem 0.55rem;
        border-radius: 6px;
      }

      .product-tabs-section {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 4rem;
      }

      .tab-headers {
        display: flex;
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
        overflow-x: auto;
      }

      .tab-btn {
        padding: 1rem 1.5rem;
        background: none;
        border: none;
        font-size: 0.9rem;
        font-weight: 600;
        color: #64748b;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        white-space: nowrap;
        transition: all 0.15s ease;
      }

      .tab-btn:hover {
        color: #1e293b;
      }

      .tab-btn.active {
        color: #4f46e5;
        border-bottom-color: #4f46e5;
        background: #ffffff;
      }

      .tab-content-body {
        padding: 2rem;
      }

      .pane-title {
        font-size: 1.2rem;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 1rem 0;
      }

      .description-text {
        font-size: 0.95rem;
        line-height: 1.7;
        color: #334155;
        margin-bottom: 1rem;
      }

      .specs-table {
        width: 100%;
        max-width: 600px;
        border-collapse: collapse;
      }

      .specs-table th,
      .specs-table td {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid #f1f5f9;
        font-size: 0.875rem;
      }

      .specs-table th {
        text-align: left;
        color: #64748b;
        width: 35%;
        font-weight: 600;
      }

      .specs-table td {
        color: #0f172a;
        font-weight: 500;
      }

      .reviews-grid {
        display: grid;
        grid-template-columns: 1.3fr 1fr;
        gap: 3rem;
      }

      .no-reviews-msg {
        color: #64748b;
        font-size: 0.9rem;
      }

      .reviews-stack {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
      }

      .review-card {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 1.25rem;
      }

      .rev-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;
      }

      .rev-user-box {
        display: flex;
        align-items: center;
        gap: 0.6rem;
      }

      .rev-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #4f46e5;
        color: #ffffff;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.85rem;
      }

      .rev-user-name {
        font-weight: 700;
        font-size: 0.85rem;
        color: #0f172a;
        display: block;
      }

      .verified-badge {
        font-size: 0.7rem;
        color: #10b981;
        font-weight: 600;
      }

      .rev-date {
        font-size: 0.75rem;
        color: #94a3b8;
      }

      .rev-rating {
        margin-bottom: 0.5rem;
      }

      .rev-comment {
        font-size: 0.875rem;
        color: #334155;
        line-height: 1.5;
        margin: 0;
      }

      .write-review-card {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 1.5rem;
      }

      .form-title {
        font-size: 1.1rem;
        font-weight: 700;
        color: #0f172a;
        margin: 0 0 0.25rem 0;
      }

      .form-sub {
        font-size: 0.8rem;
        color: #64748b;
        margin: 0 0 1.25rem 0;
      }

      .form-field {
        margin-bottom: 1rem;
      }

      .form-field label {
        display: block;
        font-size: 0.8rem;
        font-weight: 700;
        color: #334155;
        margin-bottom: 0.35rem;
      }

      .form-input {
        width: 100%;
        padding: 0.6rem 0.75rem;
        border-radius: 8px;
        border: 1px solid #cbd5e1;
        font-size: 0.85rem;
        outline: none;
        background: #ffffff;
      }

      .form-input:focus {
        border-color: #4f46e5;
      }

      .form-input.textarea {
        resize: vertical;
      }

      .submit-review-btn {
        width: 100%;
        background: #0f172a;
        color: #ffffff;
        font-weight: 700;
        font-size: 0.875rem;
        padding: 0.75rem;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        transition: background 0.15s ease;
      }

      .submit-review-btn:hover {
        background: #1e293b;
      }

      .related-books-section {
        margin-top: 2rem;
      }

      .section-title {
        font-size: 1.5rem;
        font-weight: 800;
        color: #0f172a;
        margin-bottom: 1.5rem;
      }

      .related-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 1.5rem;
      }

      .not-found-box {
        text-align: center;
        padding: 5rem 1.5rem;
      }

      .back-link {
        display: inline-block;
        margin-top: 1rem;
        color: #4f46e5;
        font-weight: 600;
      }

      @media (max-width: 900px) {
        .top-product-grid {
          grid-template-columns: 1fr;
        }
        .cover-showcase {
          max-width: 320px;
          margin: 0 auto;
        }
        .reviews-grid {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class BookDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly bookService = inject(BookService);
  private readonly cartService = inject(CartService);
  private readonly wishlistService = inject(WishlistService);
  private readonly notificationService = inject(NotificationService);

  public readonly bookId = signal<string>('');

  public readonly book = computed(() => {
    return this.bookService.getBookById(this.bookId());
  });

  public readonly reviews = computed(() => {
    return this.bookService.getReviewsForBook(this.bookId());
  });

  public readonly relatedBooks = computed(() => {
    const b = this.book();
    return b ? this.bookService.getRelatedBooks(b, 4) : [];
  });

  public readonly selectedFormat = signal<BookFormat>('Paperback');
  public readonly quantity = signal<number>(1);
  public readonly activeTab = signal<'overview' | 'specs' | 'reviews'>('overview');

  public newRating = 5;
  public newAuthor = '';
  public newComment = '';

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id') || '';
      this.bookId.set(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  public currentPrice(): number {
    const b = this.book();
    if (!b) return 0;
    return this.getFormatPrice(this.selectedFormat());
  }

  public getFormatPrice(format: BookFormat): number {
    const b = this.book();
    if (!b) return 0;
    if (format === 'Hardcover') return Number((b.price * 1.25).toFixed(2));
    if (format === 'eBook') return Number((b.price * 0.75).toFixed(2));
    if (format === 'Audiobook') return Number((b.price * 0.9).toFixed(2));
    return b.price;
  }

  public isWishlisted(): boolean {
    const b = this.book();
    return b ? this.wishlistService.isInWishlist(b.id) : false;
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
  }

  public filterByCategory(cat: any): void {
    this.bookService.setCategory(cat);
  }

  public onSubmitReview(event: Event): void {
    event.preventDefault();
    if (!this.newComment.trim()) return;

    this.bookService.addReview(
      this.bookId(),
      this.newAuthor,
      this.newRating,
      this.newComment
    );

    this.notificationService.success('Your review has been published!', 'Review Posted');
    this.newComment = '';
    this.newAuthor = '';
    this.newRating = 5;
  }
}
