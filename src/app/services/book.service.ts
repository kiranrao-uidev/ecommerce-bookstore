import { Injectable, computed, signal } from '@angular/core';
import { Book, BookCategory, BookFilterState, BookReview } from '../models/book.model';
import { CATEGORIES_LIST, MOCK_BOOKS, MOCK_REVIEWS } from '../data/mock-books.data';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly _books = signal<Book[]>(MOCK_BOOKS);
  private readonly _reviews = signal<BookReview[]>(MOCK_REVIEWS);

  public readonly filterState = signal<BookFilterState>({
    searchQuery: '',
    category: 'All',
    minPrice: 0,
    maxPrice: 100,
    minRating: 0,
    format: 'All',
    sortBy: 'featured',
    inStockOnly: false
  });

  public readonly allBooks = this._books.asReadonly();
  public readonly allCategories = CATEGORIES_LIST;

  public readonly featuredBooks = computed(() => {
    return this._books().filter((b) => b.featured);
  });

  public readonly bestsellerBooks = computed(() => {
    return this._books().filter((b) => b.bestseller);
  });

  public readonly newReleases = computed(() => {
    return this._books().filter((b) => b.newRelease);
  });

  public readonly categoryCounts = computed(() => {
    const counts: Record<string, number> = { All: this._books().length };
    for (const b of this._books()) {
      counts[b.category] = (counts[b.category] || 0) + 1;
    }
    return counts;
  });

  public readonly filteredBooks = computed(() => {
    const books = this._books();
    const filter = this.filterState();

    return books
      .filter((book) => {
        // Category Filter
        if (filter.category !== 'All' && book.category !== filter.category) {
          return false;
        }

        // Search Query (title, author, subtitle, tags, isbn)
        if (filter.searchQuery.trim()) {
          const q = filter.searchQuery.toLowerCase().trim();
          const matchTitle = book.title.toLowerCase().includes(q);
          const matchAuthor = book.author.toLowerCase().includes(q);
          const matchSubtitle = book.subtitle?.toLowerCase().includes(q) ?? false;
          const matchTags = book.tags.some((tag) => tag.toLowerCase().includes(q));
          const matchIsbn = book.isbn.includes(q);

          if (!matchTitle && !matchAuthor && !matchSubtitle && !matchTags && !matchIsbn) {
            return false;
          }
        }

        // Price Range
        if (book.price < filter.minPrice || book.price > filter.maxPrice) {
          return false;
        }

        // Min Rating
        if (book.rating < filter.minRating) {
          return false;
        }

        // Format
        if (filter.format && filter.format !== 'All') {
          if (!book.formats.includes(filter.format)) {
            return false;
          }
        }

        // In Stock
        if (filter.inStockOnly && !book.inStock) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        switch (filter.sortBy) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'rating':
            return b.rating - a.rating || b.reviewCount - a.reviewCount;
          case 'newest':
            return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
          case 'title':
            return a.title.localeCompare(b.title);
          case 'featured':
          default:
            return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        }
      });
  });

  public getBookById(id: string): Book | undefined {
    return this._books().find((b) => b.id === id);
  }

  public getRelatedBooks(currentBook: Book, limit = 4): Book[] {
    return this._books()
      .filter((b) => b.id !== currentBook.id && (b.category === currentBook.category || b.tags.some((t) => currentBook.tags.includes(t))))
      .slice(0, limit);
  }

  public getReviewsForBook(bookId: string): BookReview[] {
    return this._reviews().filter((r) => r.bookId === bookId);
  }

  public addReview(bookId: string, userName: string, rating: number, comment: string): void {
    const newReview: BookReview = {
      id: `rev-${Date.now()}`,
      bookId,
      userName: userName.trim() || 'Anonymous Reader',
      rating,
      comment: comment.trim(),
      date: new Date().toISOString().split('T')[0],
      verifiedPurchase: true
    };

    this._reviews.update((current) => [newReview, ...current]);

    // Recalculate book rating
    const bookReviews = this._reviews().filter((r) => r.bookId === bookId);
    const avg = bookReviews.reduce((sum, r) => sum + r.rating, 0) / bookReviews.length;

    this._books.update((list) =>
      list.map((b) => {
        if (b.id === bookId) {
          return {
            ...b,
            rating: Number(avg.toFixed(1)),
            reviewCount: bookReviews.length
          };
        }
        return b;
      })
    );
  }

  public setSearchQuery(query: string): void {
    this.filterState.update((s) => ({ ...s, searchQuery: query }));
  }

  public setCategory(category: BookCategory): void {
    this.filterState.update((s) => ({ ...s, category }));
  }

  public setPriceRange(min: number, max: number): void {
    this.filterState.update((s) => ({ ...s, minPrice: min, maxPrice: max }));
  }

  public setMinRating(rating: number): void {
    this.filterState.update((s) => ({ ...s, minRating: rating }));
  }

  public setSortBy(sortBy: BookFilterState['sortBy']): void {
    this.filterState.update((s) => ({ ...s, sortBy }));
  }

  public setInStockOnly(inStockOnly: boolean): void {
    this.filterState.update((s) => ({ ...s, inStockOnly }));
  }

  public resetFilters(): void {
    this.filterState.set({
      searchQuery: '',
      category: 'All',
      minPrice: 0,
      maxPrice: 100,
      minRating: 0,
      format: 'All',
      sortBy: 'featured',
      inStockOnly: false
    });
  }
}
