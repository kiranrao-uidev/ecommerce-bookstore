import {
  CATEGORIES_LIST,
  Injectable,
  MOCK_BOOKS,
  MOCK_REVIEWS,
  NotificationService,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-LANLAHU6.js";

// src/app/services/book.service.ts
var BookService = class _BookService {
  _books = signal(MOCK_BOOKS, ...ngDevMode ? [{ debugName: "_books" }] : (
    /* istanbul ignore next */
    []
  ));
  _reviews = signal(MOCK_REVIEWS, ...ngDevMode ? [{ debugName: "_reviews" }] : (
    /* istanbul ignore next */
    []
  ));
  filterState = signal({
    searchQuery: "",
    category: "All",
    minPrice: 0,
    maxPrice: 100,
    minRating: 0,
    format: "All",
    sortBy: "featured",
    inStockOnly: false
  }, ...ngDevMode ? [{ debugName: "filterState" }] : (
    /* istanbul ignore next */
    []
  ));
  allBooks = this._books.asReadonly();
  allCategories = CATEGORIES_LIST;
  featuredBooks = computed(() => {
    return this._books().filter((b) => b.featured);
  }, ...ngDevMode ? [{ debugName: "featuredBooks" }] : (
    /* istanbul ignore next */
    []
  ));
  bestsellerBooks = computed(() => {
    return this._books().filter((b) => b.bestseller);
  }, ...ngDevMode ? [{ debugName: "bestsellerBooks" }] : (
    /* istanbul ignore next */
    []
  ));
  newReleases = computed(() => {
    return this._books().filter((b) => b.newRelease);
  }, ...ngDevMode ? [{ debugName: "newReleases" }] : (
    /* istanbul ignore next */
    []
  ));
  categoryCounts = computed(() => {
    const counts = { All: this._books().length };
    for (const b of this._books()) {
      counts[b.category] = (counts[b.category] || 0) + 1;
    }
    return counts;
  }, ...ngDevMode ? [{ debugName: "categoryCounts" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredBooks = computed(() => {
    const books = this._books();
    const filter = this.filterState();
    return books.filter((book) => {
      if (filter.category !== "All" && book.category !== filter.category) {
        return false;
      }
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
      if (book.price < filter.minPrice || book.price > filter.maxPrice) {
        return false;
      }
      if (book.rating < filter.minRating) {
        return false;
      }
      if (filter.format && filter.format !== "All") {
        if (!book.formats.includes(filter.format)) {
          return false;
        }
      }
      if (filter.inStockOnly && !book.inStock) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      switch (filter.sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating || b.reviewCount - a.reviewCount;
        case "newest":
          return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
        case "title":
          return a.title.localeCompare(b.title);
        case "featured":
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });
  }, ...ngDevMode ? [{ debugName: "filteredBooks" }] : (
    /* istanbul ignore next */
    []
  ));
  getBookById(id) {
    return this._books().find((b) => b.id === id);
  }
  getRelatedBooks(currentBook, limit = 4) {
    return this._books().filter((b) => b.id !== currentBook.id && (b.category === currentBook.category || b.tags.some((t) => currentBook.tags.includes(t)))).slice(0, limit);
  }
  getReviewsForBook(bookId) {
    return this._reviews().filter((r) => r.bookId === bookId);
  }
  addReview(bookId, userName, rating, comment) {
    const newReview = {
      id: `rev-${Date.now()}`,
      bookId,
      userName: userName.trim() || "Anonymous Reader",
      rating,
      comment: comment.trim(),
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      verifiedPurchase: true
    };
    this._reviews.update((current) => [newReview, ...current]);
    const bookReviews = this._reviews().filter((r) => r.bookId === bookId);
    const avg = bookReviews.reduce((sum, r) => sum + r.rating, 0) / bookReviews.length;
    this._books.update((list) => list.map((b) => {
      if (b.id === bookId) {
        return __spreadProps(__spreadValues({}, b), {
          rating: Number(avg.toFixed(1)),
          reviewCount: bookReviews.length
        });
      }
      return b;
    }));
  }
  setSearchQuery(query) {
    this.filterState.update((s) => __spreadProps(__spreadValues({}, s), { searchQuery: query }));
  }
  setCategory(category) {
    this.filterState.update((s) => __spreadProps(__spreadValues({}, s), { category }));
  }
  setPriceRange(min, max) {
    this.filterState.update((s) => __spreadProps(__spreadValues({}, s), { minPrice: min, maxPrice: max }));
  }
  setMinRating(rating) {
    this.filterState.update((s) => __spreadProps(__spreadValues({}, s), { minRating: rating }));
  }
  setSortBy(sortBy) {
    this.filterState.update((s) => __spreadProps(__spreadValues({}, s), { sortBy }));
  }
  setInStockOnly(inStockOnly) {
    this.filterState.update((s) => __spreadProps(__spreadValues({}, s), { inStockOnly }));
  }
  resetFilters() {
    this.filterState.set({
      searchQuery: "",
      category: "All",
      minPrice: 0,
      maxPrice: 100,
      minRating: 0,
      format: "All",
      sortBy: "featured",
      inStockOnly: false
    });
  }
  static \u0275fac = function BookService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookService, factory: _BookService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/services/wishlist.service.ts
var WISHLIST_STORAGE_KEY = "bookstore_wishlist_ids";
var WishlistService = class _WishlistService {
  bookService = inject(BookService);
  notificationService = inject(NotificationService);
  _wishlistIds = signal(this.loadWishlistFromStorage(), ...ngDevMode ? [{ debugName: "_wishlistIds" }] : (
    /* istanbul ignore next */
    []
  ));
  wishlistIds = this._wishlistIds.asReadonly();
  wishlistCount = computed(() => this._wishlistIds().length, ...ngDevMode ? [{ debugName: "wishlistCount" }] : (
    /* istanbul ignore next */
    []
  ));
  wishlistBooks = computed(() => {
    const ids = new Set(this._wishlistIds());
    return this.bookService.allBooks().filter((b) => ids.has(b.id));
  }, ...ngDevMode ? [{ debugName: "wishlistBooks" }] : (
    /* istanbul ignore next */
    []
  ));
  isInWishlist(bookId) {
    return this._wishlistIds().includes(bookId);
  }
  toggleWishlist(book) {
    if (this.isInWishlist(book.id)) {
      this.removeFromWishlist(book.id, book.title);
    } else {
      this.addToWishlist(book);
    }
  }
  addToWishlist(book) {
    if (!this.isInWishlist(book.id)) {
      this._wishlistIds.update((ids) => [...ids, book.id]);
      this.saveWishlistToStorage();
      this.notificationService.success(`Added "${book.title}" to your Wishlist`, "Saved");
    }
  }
  removeFromWishlist(bookId, title) {
    this._wishlistIds.update((ids) => ids.filter((id) => id !== bookId));
    this.saveWishlistToStorage();
    if (title) {
      this.notificationService.info(`Removed "${title}" from Wishlist`);
    }
  }
  clearWishlist() {
    this._wishlistIds.set([]);
    this.saveWishlistToStorage();
  }
  saveWishlistToStorage() {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(this._wishlistIds()));
    } catch (e) {
    }
  }
  loadWishlistFromStorage() {
    try {
      const data = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }
  static \u0275fac = function WishlistService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WishlistService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WishlistService, factory: _WishlistService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishlistService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  BookService,
  WishlistService
};
//# sourceMappingURL=chunk-O4SUIOAB.js.map
