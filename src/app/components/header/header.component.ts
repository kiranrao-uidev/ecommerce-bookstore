import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  template: `
    <!-- Top Announcement Bar -->
    <div class="announcement-bar">
      <div class="announcement-content">
        <span>✨ Special Offer: Use code <strong class="code-tag">BOOKWORM15</strong> for 15% off orders over $25 | Free shipping on orders over $45!</span>
      </div>
    </div>

    <!-- Main Header -->
    <header class="main-header">
      <div class="header-container">
        <!-- Logo -->
        <a routerLink="/" class="brand-logo">
          <div class="logo-icon-box">
            <svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <div class="logo-text">
            <span class="logo-main">AuraBooks</span>
            <span class="logo-sub">eCommerce Bookstore</span>
          </div>
        </a>

        <!-- Global Search Bar with Live Suggestions -->
        <div class="search-wrapper">
          <div class="search-input-box">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            <input
              type="text"
              class="search-input"
              placeholder="Search by title, author, keyword, or ISBN..."
              [ngModel]="searchQuery()"
              (ngModelChange)="onSearchInput($event)"
              (focus)="showSuggestions.set(true)"
              (keyup.enter)="executeSearch()"
            />

            @if (searchQuery()) {
              <button type="button" class="clear-search-btn" (click)="clearSearch()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            }
          </div>

          <!-- Live Search Suggestions Dropdown -->
          @if (showSuggestions() && suggestions().length > 0) {
            <div class="suggestions-dropdown">
              <div class="suggestions-header">Matching Books</div>
              @for (item of suggestions(); track item.id) {
                <div class="suggestion-item" (click)="selectSuggestion(item)">
                  <div class="suggestion-thumb" [style.background]="item.coverGradient"></div>
                  <div class="suggestion-info">
                    <span class="suggestion-title">{{ item.title }}</span>
                    <span class="suggestion-author">{{ item.author }} • <strong class="suggestion-price">\${{ item.price | number: '1.2-2' }}</strong></span>
                  </div>
                </div>
              }
            </div>
          }
        </div>

        <!-- Action Buttons (Wishlist, Cart) -->
        <div class="header-actions">
          <!-- Wishlist -->
          <a routerLink="/wishlist" class="action-btn" title="View Wishlist">
            <div class="icon-relative">
              <svg class="action-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              @if (wishlistCount() > 0) {
                <span class="badge-count wishlist-badge">{{ wishlistCount() }}</span>
              }
            </div>
            <span class="action-label">Wishlist</span>
          </a>

          <!-- Cart Trigger -->
          <button type="button" class="action-btn cart-action" (click)="openCart()" title="View Shopping Cart">
            <div class="icon-relative">
              <svg class="action-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              @if (cartCount() > 0) {
                <span class="badge-count cart-badge">{{ cartCount() }}</span>
              }
            </div>
            <div class="cart-text-group">
              <span class="action-label">Cart</span>
              <span class="cart-total-preview">\${{ cartSubtotal() | number: '1.2-2' }}</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Navigation Bar -->
      <nav class="sub-nav">
        <div class="nav-container">
          <ul class="nav-links">
            <li>
              <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
                Home Catalog
              </a>
            </li>
            <li>
              <button
                type="button"
                class="category-nav-btn"
                [class.active]="activeCategory() === 'Technology & AI'"
                (click)="selectCategory('Technology & AI')"
              >
                Technology & AI
              </button>
            </li>
            <li>
              <button
                type="button"
                class="category-nav-btn"
                [class.active]="activeCategory() === 'Science Fiction'"
                (click)="selectCategory('Science Fiction')"
              >
                Sci-Fi
              </button>
            </li>
            <li>
              <button
                type="button"
                class="category-nav-btn"
                [class.active]="activeCategory() === 'Fiction & Literature'"
                (click)="selectCategory('Fiction & Literature')"
              >
                Fiction
              </button>
            </li>
            <li>
              <button
                type="button"
                class="category-nav-btn"
                [class.active]="activeCategory() === 'Business & Leadership'"
                (click)="selectCategory('Business & Leadership')"
              >
                Business
              </button>
            </li>
            <li>
              <button
                type="button"
                class="category-nav-btn"
                [class.active]="activeCategory() === 'Psychology & Mind'"
                (click)="selectCategory('Psychology & Mind')"
              >
                Psychology
              </button>
            </li>
          </ul>

          <div class="nav-right-links">
            <a routerLink="/cart" class="nav-link-secondary">Cart Overview</a>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [
    `
      .announcement-bar {
        background: #1e1b4b;
        color: #e0e7ff;
        font-size: 0.8rem;
        padding: 0.45rem 1rem;
        text-align: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .announcement-content {
        max-width: 1200px;
        margin: 0 auto;
      }

      .code-tag {
        background: #f59e0b;
        color: #0f172a;
        padding: 0.1rem 0.4rem;
        border-radius: 4px;
        font-weight: 800;
        letter-spacing: 0.05em;
      }

      .main-header {
        background: #ffffff;
        border-bottom: 1px solid #e2e8f0;
        position: sticky;
        top: 0;
        z-index: 40;
        box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.05);
      }

      .header-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0.9rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
      }

      .brand-logo {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        text-decoration: none;
        color: inherit;
        flex-shrink: 0;
      }

      .logo-icon-box {
        width: 42px;
        height: 42px;
        background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        box-shadow: 0 4px 10px rgba(79, 70, 229, 0.35);
      }

      .logo-icon {
        width: 24px;
        height: 24px;
      }

      .logo-text {
        display: flex;
        flex-direction: column;
      }

      .logo-main {
        font-size: 1.25rem;
        font-weight: 800;
        color: #0f172a;
        letter-spacing: -0.02em;
        line-height: 1.1;
      }

      .logo-sub {
        font-size: 0.7rem;
        color: #64748b;
        font-weight: 500;
      }

      .search-wrapper {
        position: relative;
        flex: 1;
        max-width: 600px;
      }

      .search-input-box {
        position: relative;
        display: flex;
        align-items: center;
      }

      .search-icon {
        position: absolute;
        left: 0.9rem;
        width: 18px;
        height: 18px;
        color: #94a3b8;
        pointer-events: none;
      }

      .search-input {
        width: 100%;
        padding: 0.65rem 2.2rem 0.65rem 2.6rem;
        border-radius: 9999px;
        border: 1.5px solid #cbd5e1;
        background: #f8fafc;
        font-size: 0.875rem;
        color: #1e293b;
        outline: none;
        transition: all 0.2s ease;
      }

      .search-input:focus {
        background: #ffffff;
        border-color: #4f46e5;
        box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
      }

      .clear-search-btn {
        position: absolute;
        right: 0.75rem;
        background: none;
        border: none;
        color: #94a3b8;
        cursor: pointer;
        padding: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .clear-search-btn svg {
        width: 16px;
        height: 16px;
      }

      .suggestions-dropdown {
        position: absolute;
        top: calc(100% + 6px);
        left: 0;
        right: 0;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        border: 1px solid #e2e8f0;
        overflow: hidden;
        z-index: 50;
      }

      .suggestions-header {
        padding: 0.5rem 0.9rem;
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 700;
        color: #64748b;
        background: #f8fafc;
        border-bottom: 1px solid #f1f5f9;
      }

      .suggestion-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.6rem 0.9rem;
        cursor: pointer;
        transition: background 0.15s ease;
        border-bottom: 1px solid #f8fafc;
      }

      .suggestion-item:hover {
        background: #f1f5f9;
      }

      .suggestion-thumb {
        width: 24px;
        height: 34px;
        border-radius: 3px;
        flex-shrink: 0;
      }

      .suggestion-info {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .suggestion-title {
        font-size: 0.85rem;
        font-weight: 600;
        color: #1e293b;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .suggestion-author {
        font-size: 0.75rem;
        color: #64748b;
      }

      .suggestion-price {
        color: #4f46e5;
      }

      .header-actions {
        display: flex;
        align-items: center;
        gap: 0.85rem;
      }

      .action-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 0.85rem;
        border-radius: 10px;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        color: #334155;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.15s ease;
      }

      .action-btn:hover {
        background: #f1f5f9;
        border-color: #cbd5e1;
      }

      .cart-action {
        background: #eef2ff;
        border-color: #c7d2fe;
        color: #4f46e5;
      }

      .cart-action:hover {
        background: #e0e7ff;
      }

      .icon-relative {
        position: relative;
        display: flex;
        align-items: center;
      }

      .action-svg {
        width: 20px;
        height: 20px;
      }

      .badge-count {
        position: absolute;
        top: -7px;
        right: -8px;
        font-size: 0.65rem;
        font-weight: 700;
        color: #ffffff;
        min-width: 17px;
        height: 17px;
        padding: 0 3px;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .wishlist-badge {
        background: #ef4444;
      }

      .cart-badge {
        background: #4f46e5;
      }

      .action-label {
        font-size: 0.825rem;
        font-weight: 600;
      }

      .cart-text-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        line-height: 1.1;
      }

      .cart-total-preview {
        font-size: 0.75rem;
        font-weight: 700;
        color: #4338ca;
      }

      .sub-nav {
        background: #f8fafc;
        border-top: 1px solid #f1f5f9;
        padding: 0 1.5rem;
      }

      .nav-container {
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .nav-links {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        list-style: none;
        margin: 0;
        padding: 0;
        overflow-x: auto;
      }

      .nav-links a,
      .category-nav-btn {
        display: block;
        padding: 0.65rem 0.85rem;
        font-size: 0.825rem;
        font-weight: 600;
        color: #475569;
        text-decoration: none;
        background: none;
        border: none;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        transition: all 0.15s ease;
        white-space: nowrap;
      }

      .nav-links a:hover,
      .category-nav-btn:hover {
        color: #4f46e5;
      }

      .nav-links a.active,
      .category-nav-btn.active {
        color: #4f46e5;
        border-bottom-color: #4f46e5;
        background: rgba(79, 70, 229, 0.04);
      }

      .nav-link-secondary {
        font-size: 0.825rem;
        color: #64748b;
        text-decoration: none;
        font-weight: 500;
      }

      .nav-link-secondary:hover {
        color: #0f172a;
      }

      @media (max-width: 768px) {
        .header-container {
          flex-wrap: wrap;
          padding: 0.75rem 1rem;
        }
        .search-wrapper {
          order: 3;
          max-width: 100%;
          width: 100%;
        }
        .action-label,
        .cart-text-group {
          display: none;
        }
      }
    `
  ]
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly bookService = inject(BookService);
  private readonly cartService = inject(CartService);
  private readonly wishlistService = inject(WishlistService);
  private readonly elementRef = inject(ElementRef);

  public readonly searchQuery = signal<string>('');
  public readonly showSuggestions = signal<boolean>(false);

  public readonly wishlistCount = this.wishlistService.wishlistCount;
  public readonly cartCount = this.cartService.totalItemsCount;
  public readonly cartSubtotal = this.cartService.subtotal;
  public readonly activeCategory = () => this.bookService.filterState().category;

  public readonly suggestions = signal<Book[]>([]);

  public onSearchInput(query: string): void {
    this.searchQuery.set(query);
    if (query.trim().length > 1) {
      const q = query.toLowerCase().trim();
      const matches = this.bookService
        .allBooks()
        .filter(
          (b) =>
            b.title.toLowerCase().includes(q) ||
            b.author.toLowerCase().includes(q) ||
            b.category.toLowerCase().includes(q)
        )
        .slice(0, 5);
      this.suggestions.set(matches);
      this.showSuggestions.set(true);
    } else {
      this.suggestions.set([]);
    }
  }

  public executeSearch(): void {
    this.bookService.setSearchQuery(this.searchQuery());
    this.showSuggestions.set(false);
    this.router.navigate(['/']);
  }

  public clearSearch(): void {
    this.searchQuery.set('');
    this.bookService.setSearchQuery('');
    this.suggestions.set([]);
    this.showSuggestions.set(false);
  }

  public selectSuggestion(book: Book): void {
    this.showSuggestions.set(false);
    this.router.navigate(['/book', book.id]);
  }

  public selectCategory(category: any): void {
    this.bookService.setCategory(category);
    this.router.navigate(['/']);
  }

  public openCart(): void {
    this.cartService.openCartDrawer();
  }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showSuggestions.set(false);
    }
  }
}
