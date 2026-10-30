import { Injectable, computed, inject, signal } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from './book.service';
import { NotificationService } from './notification.service';

const WISHLIST_STORAGE_KEY = 'bookstore_wishlist_ids';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private readonly bookService = inject(BookService);
  private readonly notificationService = inject(NotificationService);

  private readonly _wishlistIds = signal<string[]>(this.loadWishlistFromStorage());
  public readonly wishlistIds = this._wishlistIds.asReadonly();

  public readonly wishlistCount = computed(() => this._wishlistIds().length);

  public readonly wishlistBooks = computed(() => {
    const ids = new Set(this._wishlistIds());
    return this.bookService.allBooks().filter((b) => ids.has(b.id));
  });

  public isInWishlist(bookId: string): boolean {
    return this._wishlistIds().includes(bookId);
  }

  public toggleWishlist(book: Book): void {
    if (this.isInWishlist(book.id)) {
      this.removeFromWishlist(book.id, book.title);
    } else {
      this.addToWishlist(book);
    }
  }

  public addToWishlist(book: Book): void {
    if (!this.isInWishlist(book.id)) {
      this._wishlistIds.update((ids) => [...ids, book.id]);
      this.saveWishlistToStorage();
      this.notificationService.success(`Added "${book.title}" to your Wishlist`, 'Saved');
    }
  }

  public removeFromWishlist(bookId: string, title?: string): void {
    this._wishlistIds.update((ids) => ids.filter((id) => id !== bookId));
    this.saveWishlistToStorage();
    if (title) {
      this.notificationService.info(`Removed "${title}" from Wishlist`);
    }
  }

  public clearWishlist(): void {
    this._wishlistIds.set([]);
    this.saveWishlistToStorage();
  }

  private saveWishlistToStorage(): void {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(this._wishlistIds()));
    } catch {
      // ignore
    }
  }

  private loadWishlistFromStorage(): string[] {
    try {
      const data = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }
}
