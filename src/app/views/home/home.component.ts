import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // kept for future use; suppress with explicit import
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { CartService } from '../../services/cart.service';
import { Book, BookCategory, BookFilterState } from '../../models/book.model';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { QuickViewModalComponent } from '../../components/quick-view-modal/quick-view-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, BookCardComponent, QuickViewModalComponent],
  template: `
    <!-- Hero Banner -->
    <section class="hero-banner">
      <div class="hero-container">
        <div class="hero-text-content">
          <div class="hero-badge">Curated Book Collection</div>
          <h1 class="hero-title">Expand Your Horizons with Every Page</h1>
          <p class="hero-desc">
            Discover bestselling computer science architectural patterns, epic science fiction tales, transformative mindset literature, and high-impact business leadership books.
          </p>

          <div class="hero-actions">
            <button type="button" class="btn-primary-hero" (click)="scrollToCatalog()">
              Explore Catalog
            </button>
            <div class="hero-perks">
              <span class="perk-item">✓ Free Shipping Over $45</span>
              <span class="perk-item">✓ 100% Original Editions</span>
            </div>
          </div>
        </div>

        <div class="hero-featured-card">
          @if (featuredHeroBook(); as heroBook) {
            <div class="spotlight-card" [style.background]="heroBook.coverGradient">
              <div class="spotlight-tag">Book of the Week</div>
              <h2 class="spotlight-title">{{ heroBook.title }}</h2>
              <p class="spotlight-author">by {{ heroBook.author }}</p>
              <div class="spotlight-price-row">
                <div class="spotlight-price">\${{ heroBook.price | number: '1.2-2' }}</div>
                <button type="button" class="spotlight-btn" (click)="openQuickView(heroBook)">
                  Quick Preview
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Category Pills Strip -->
    <section class="categories-strip">
      <div class="catalog-container">
        <div class="category-pills">
          @for (cat of categories; track cat) {
            <button
              type="button"
              class="pill-btn"
              [class.active]="filterState().category === cat"
              (click)="selectCategory(cat)"
            >
              {{ cat }}
              <span class="pill-count">{{ categoryCounts()[cat] || 0 }}</span>
            </button>
          }
        </div>
      </div>
    </section>

    <!-- Main Catalog Grid & Filters Layout -->
    <main id="catalog-section" class="catalog-section">
      <div class="catalog-container layout-grid">
        <!-- Sidebar Filters -->
        <aside class="filter-sidebar">
          <div class="filter-box">
            <div class="filter-box-header">
              <h2 class="filter-main-title">Filter Books</h2>
              @if (isFiltered()) {
                <button type="button" class="reset-btn" (click)="resetFilters()">Reset All</button>
              }
            </div>

            <!-- Search Filter -->
            <div class="filter-group">
              <label class="filter-label" for="search-input">Search Keywords</label>
              <input
                id="search-input"
                type="text"
                class="filter-text-input"
                placeholder="Title, author, tags..."
                [ngModel]="filterState().searchQuery"
                (ngModelChange)="onSearchChange($event)"
              />
            </div>

            <!-- Price Range Filter -->
            <div class="filter-group">
              <div class="filter-label-row">
                <label class="filter-label">Max Price</label>
                <span class="price-val">\${{ filterState().maxPrice }}</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                [ngModel]="filterState().maxPrice"
                (ngModelChange)="onMaxPriceChange($event)"
                class="range-slider"
              />
              <div class="range-labels">
                <span>$10</span>
                <span>$100</span>
              </div>
            </div>

            <!-- Minimum Rating Filter -->
            <div class="filter-group">
              <label class="filter-label">Minimum Rating</label>
              <div class="rating-filter-options">
                @for (rate of [0, 4.5, 4.8]; track rate) {
                  <button
                    type="button"
                    class="rating-opt-btn"
                    [class.active]="filterState().minRating === rate"
                    (click)="setMinRating(rate)"
                  >
                    {{ rate === 0 ? 'All Ratings' : rate + '★ & above' }}
                  </button>
                }
              </div>
            </div>

            <!-- In Stock Only Toggle -->
            <div class="filter-group checkbox-group">
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  [checked]="filterState().inStockOnly"
                  (change)="toggleInStock($event)"
                />
                <span>In Stock Only</span>
              </label>
            </div>
          </div>

          <!-- Promo Banner Card -->
          <div class="sidebar-promo-card">
            <div class="promo-badge">Limited Time</div>
            <h3>Save 20% on Orders $50+</h3>
            <p>Use code <strong>READMORE20</strong> at checkout.</p>
          </div>
        </aside>

        <!-- Catalog Content Area -->
        <section class="catalog-content">
          <!-- Top Sort & Results Bar -->
          <div class="catalog-top-bar">
            <div class="results-count">
              Showing <strong>{{ books().length }}</strong> {{ books().length === 1 ? 'book' : 'books' }}
              @if (filterState().category !== 'All') {
                in <em>{{ filterState().category }}</em>
              }
            </div>

            <div class="sort-wrapper">
              <label for="sort-select" class="sort-label">Sort by:</label>
              <select
                id="sort-select"
                class="sort-dropdown"
                [ngModel]="filterState().sortBy"
                (ngModelChange)="onSortChange($event)"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest Releases</option>
                <option value="title">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>

          <!-- Books Grid -->
          @if (books().length === 0) {
            <div class="no-books-found">
              <div class="no-results-icon">📚</div>
              <h3>No books match your criteria</h3>
              <p>Try clearing some filters or searching for different keywords.</p>
              <button type="button" class="btn-reset-filters" (click)="resetFilters()">
                Reset Filters
              </button>
            </div>
          } @else {
            <div class="books-grid">
              @for (book of books(); track book.id) {
                <app-book-card [book]="book" (quickView)="openQuickView($event)" />
              }
            </div>
          }
        </section>
      </div>
    </main>

    <!-- Quick View Modal -->
    @if (selectedQuickViewBook(); as bookToView) {
      <app-quick-view-modal [book]="bookToView" (close)="closeQuickView()" />
    }
  `,
  styles: [
    `
      .hero-banner {
        background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #312e81 100%);
        color: #ffffff;
        padding: 3.5rem 1.5rem;
        position: relative;
        overflow: hidden;
      }

      .hero-container {
        max-width: 1280px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1.3fr 1fr;
        gap: 3rem;
        align-items: center;
      }

      .hero-badge {
        display: inline-block;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        background: rgba(99, 102, 241, 0.25);
        color: #a5b4fc;
        padding: 0.3rem 0.8rem;
        border-radius: 9999px;
        border: 1px solid rgba(165, 180, 252, 0.3);
        margin-bottom: 1rem;
      }

      .hero-title {
        font-size: 2.75rem;
        font-weight: 800;
        line-height: 1.15;
        letter-spacing: -0.03em;
        margin: 0 0 1rem 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }

      .hero-desc {
        font-size: 1.05rem;
        color: #cbd5e1;
        line-height: 1.6;
        margin: 0 0 1.75rem 0;
        max-width: 580px;
      }

      .hero-actions {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        flex-wrap: wrap;
      }

      .btn-primary-hero {
        background: #4f46e5;
        color: #ffffff;
        font-size: 0.95rem;
        font-weight: 700;
        padding: 0.85rem 1.75rem;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 14px rgba(79, 70, 229, 0.4);
        transition: all 0.2s ease;
      }

      .btn-primary-hero:hover {
        background: #4338ca;
        transform: translateY(-2px);
      }

      .hero-perks {
        display: flex;
        gap: 1rem;
        font-size: 0.825rem;
        color: #a5b4fc;
      }

      .spotlight-card {
        padding: 2rem;
        border-radius: 16px;
        color: #ffffff;
        box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.4);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 240px;
        border: 1px solid rgba(255, 255, 255, 0.15);
      }

      .spotlight-tag {
        font-size: 0.7rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        background: rgba(0, 0, 0, 0.3);
        padding: 0.25rem 0.6rem;
        border-radius: 6px;
        align-self: flex-start;
      }

      .spotlight-title {
        font-family: Georgia, serif;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0.85rem 0 0.25rem 0;
        line-height: 1.25;
      }

      .spotlight-author {
        font-size: 0.85rem;
        opacity: 0.9;
        margin: 0 0 1.25rem 0;
      }

      .spotlight-price-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
      }

      .spotlight-price {
        font-size: 1.35rem;
        font-weight: 800;
      }

      .spotlight-btn {
        background: rgba(255, 255, 255, 0.95);
        color: #0f172a;
        font-size: 0.825rem;
        font-weight: 700;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        transition: all 0.15s ease;
      }

      .spotlight-btn:hover {
        background: #ffffff;
        transform: scale(1.05);
      }

      .categories-strip {
        background: #ffffff;
        border-bottom: 1px solid #e2e8f0;
        padding: 1rem 0;
      }

      .catalog-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }

      .category-pills {
        display: flex;
        gap: 0.5rem;
        overflow-x: auto;
        padding-bottom: 0.25rem;
      }

      .pill-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.45rem 0.9rem;
        border-radius: 9999px;
        background: #f1f5f9;
        border: 1px solid #e2e8f0;
        font-size: 0.825rem;
        font-weight: 600;
        color: #475569;
        cursor: pointer;
        white-space: nowrap;
        transition: all 0.15s ease;
      }

      .pill-btn:hover {
        background: #e2e8f0;
        color: #1e293b;
      }

      .pill-btn.active {
        background: #4f46e5;
        border-color: #4f46e5;
        color: #ffffff;
      }

      .pill-count {
        font-size: 0.7rem;
        background: rgba(0, 0, 0, 0.08);
        padding: 0.1rem 0.4rem;
        border-radius: 9999px;
      }

      .pill-btn.active .pill-count {
        background: rgba(255, 255, 255, 0.25);
      }

      .catalog-section {
        padding: 2.5rem 0;
      }

      .layout-grid {
        display: grid;
        grid-template-columns: 260px 1fr;
        gap: 2rem;
        align-items: flex-start;
      }

      .filter-box {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 1.25rem;
      }

      .filter-box-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.25rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #f1f5f9;
      }

      .filter-main-title {
        font-size: 1rem;
        font-weight: 800;
        color: #0f172a;
        margin: 0;
      }

      .reset-btn {
        background: none;
        border: none;
        font-size: 0.75rem;
        font-weight: 600;
        color: #ef4444;
        cursor: pointer;
      }

      .filter-group {
        margin-bottom: 1.25rem;
      }

      .filter-label {
        font-size: 0.8rem;
        font-weight: 700;
        color: #334155;
        margin-bottom: 0.4rem;
        display: block;
      }

      .filter-label-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .price-val {
        font-size: 0.8rem;
        font-weight: 700;
        color: #4f46e5;
      }

      .filter-text-input {
        width: 100%;
        padding: 0.5rem 0.75rem;
        border-radius: 6px;
        border: 1px solid #cbd5e1;
        font-size: 0.825rem;
        outline: none;
      }

      .filter-text-input:focus {
        border-color: #4f46e5;
      }

      .range-slider {
        width: 100%;
        accent-color: #4f46e5;
        cursor: pointer;
      }

      .range-labels {
        display: flex;
        justify-content: space-between;
        font-size: 0.7rem;
        color: #94a3b8;
      }

      .rating-filter-options {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
      }

      .rating-opt-btn {
        text-align: left;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        padding: 0.4rem 0.6rem;
        border-radius: 6px;
        font-size: 0.775rem;
        font-weight: 500;
        color: #475569;
        cursor: pointer;
        transition: all 0.15s ease;
      }

      .rating-opt-btn:hover {
        background: #f1f5f9;
      }

      .rating-opt-btn.active {
        background: #eef2ff;
        border-color: #4f46e5;
        color: #4338ca;
        font-weight: 700;
      }

      .checkbox-group {
        margin-bottom: 0;
      }

      .checkbox-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.825rem;
        font-weight: 600;
        color: #334155;
        cursor: pointer;
      }

      .checkbox-label input {
        accent-color: #4f46e5;
      }

      .sidebar-promo-card {
        background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
        color: #ffffff;
        padding: 1.25rem;
        border-radius: 12px;
        margin-top: 1.5rem;
      }

      .promo-badge {
        font-size: 0.65rem;
        font-weight: 800;
        text-transform: uppercase;
        background: #f59e0b;
        color: #0f172a;
        padding: 0.15rem 0.45rem;
        border-radius: 4px;
        display: inline-block;
        margin-bottom: 0.5rem;
      }

      .sidebar-promo-card h3 {
        font-size: 0.95rem;
        font-weight: 700;
        margin: 0 0 0.35rem 0;
      }

      .sidebar-promo-card p {
        font-size: 0.8rem;
        color: #c7d2fe;
        margin: 0;
      }

      .catalog-top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
        background: #ffffff;
        padding: 0.75rem 1.25rem;
        border-radius: 10px;
        border: 1px solid #e2e8f0;
      }

      .results-count {
        font-size: 0.875rem;
        color: #475569;
      }

      .sort-wrapper {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .sort-label {
        font-size: 0.825rem;
        color: #64748b;
        font-weight: 500;
      }

      .sort-dropdown {
        padding: 0.4rem 0.75rem;
        border-radius: 6px;
        border: 1px solid #cbd5e1;
        font-size: 0.825rem;
        background: #ffffff;
        outline: none;
        cursor: pointer;
      }

      .books-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 1.5rem;
      }

      .no-books-found {
        text-align: center;
        background: #ffffff;
        border: 1px dashed #cbd5e1;
        border-radius: 12px;
        padding: 3.5rem 1.5rem;
      }

      .no-results-icon {
        font-size: 3rem;
        margin-bottom: 0.75rem;
      }

      .no-books-found h3 {
        font-size: 1.2rem;
        font-weight: 700;
        color: #1e293b;
        margin: 0 0 0.4rem 0;
      }

      .no-books-found p {
        font-size: 0.875rem;
        color: #64748b;
        margin: 0 0 1.25rem 0;
      }

      .btn-reset-filters {
        background: #4f46e5;
        color: #ffffff;
        font-size: 0.85rem;
        font-weight: 600;
        padding: 0.6rem 1.25rem;
        border-radius: 8px;
        border: none;
        cursor: pointer;
      }

      @media (max-width: 900px) {
        .layout-grid {
          grid-template-columns: 1fr;
        }
        .hero-container {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .hero-title {
          font-size: 2.1rem;
        }
      }
    `
  ]
})
export class HomeComponent {
  private readonly bookService = inject(BookService);

  public readonly categories = this.bookService.allCategories;
  public readonly categoryCounts = this.bookService.categoryCounts;
  public readonly filterState = this.bookService.filterState;
  public readonly books = this.bookService.filteredBooks;

  public readonly featuredHeroBook = computed(() => {
    return this.bookService.featuredBooks()[0] || this.bookService.allBooks()[0];
  });

  public readonly selectedQuickViewBook = signal<Book | null>(null);

  public isFiltered = computed(() => {
    const s = this.filterState();
    return s.category !== 'All' || s.searchQuery !== '' || s.maxPrice < 100 || s.minRating > 0 || s.inStockOnly;
  });

  public selectCategory(cat: BookCategory): void {
    this.bookService.setCategory(cat);
  }

  public onSearchChange(val: string): void {
    this.bookService.setSearchQuery(val);
  }

  public onMaxPriceChange(val: number): void {
    this.bookService.setPriceRange(0, Number(val));
  }

  public setMinRating(rate: number): void {
    this.bookService.setMinRating(rate);
  }

  public toggleInStock(e: Event): void {
    const input = e.target as HTMLInputElement;
    this.bookService.setInStockOnly(input.checked);
  }

  public onSortChange(sortBy: BookFilterState['sortBy']): void {
    this.bookService.setSortBy(sortBy);
  }

  public resetFilters(): void {
    this.bookService.resetFilters();
  }

  public scrollToCatalog(): void {
    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
  }

  public openQuickView(book: Book): void {
    this.selectedQuickViewBook.set(book);
  }

  public closeQuickView(): void {
    this.selectedQuickViewBook.set(null);
  }
}
