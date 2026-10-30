import { Injectable, computed, inject, signal } from '@angular/core';
import { Book, BookFormat, CartItem, PromoCode } from '../models/book.model';
import { MOCK_PROMO_CODES } from '../data/mock-books.data';
import { NotificationService } from './notification.service';

const CART_STORAGE_KEY = 'bookstore_cart_items';
const PROMO_STORAGE_KEY = 'bookstore_promo_code';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly notificationService = inject(NotificationService);

  private readonly _cartItems = signal<CartItem[]>(this.loadCartFromStorage());
  private readonly _appliedPromo = signal<PromoCode | null>(this.loadPromoFromStorage());
  private readonly _isCartDrawerOpen = signal<boolean>(false);

  public readonly cartItems = this._cartItems.asReadonly();
  public readonly appliedPromo = this._appliedPromo.asReadonly();
  public readonly isCartDrawerOpen = this._isCartDrawerOpen.asReadonly();

  public readonly totalItemsCount = computed(() => {
    return this._cartItems().reduce((total, item) => total + item.quantity, 0);
  });

  public readonly subtotal = computed(() => {
    return this._cartItems().reduce((total, item) => total + item.itemPrice * item.quantity, 0);
  });

  public readonly discountAmount = computed(() => {
    const promo = this._appliedPromo();
    const sub = this.subtotal();
    if (!promo || sub < promo.minSpend) {
      return 0;
    }
    return Number(((sub * promo.discountPercent) / 100).toFixed(2));
  });

  public readonly shippingFee = computed(() => {
    const sub = this.subtotal();
    if (sub === 0) return 0;
    // Free shipping on orders over $45 or if special condition
    return sub >= 45 ? 0 : 4.99;
  });

  public readonly taxAmount = computed(() => {
    const taxableAmount = Math.max(0, this.subtotal() - this.discountAmount());
    return Number((taxableAmount * 0.0825).toFixed(2)); // 8.25% standard tax
  });

  public readonly finalTotal = computed(() => {
    const sub = this.subtotal();
    if (sub === 0) return 0;
    return Number((sub - this.discountAmount() + this.shippingFee() + this.taxAmount()).toFixed(2));
  });

  public openCartDrawer(): void {
    this._isCartDrawerOpen.set(true);
  }

  public closeCartDrawer(): void {
    this._isCartDrawerOpen.set(false);
  }

  public toggleCartDrawer(): void {
    this._isCartDrawerOpen.update((open) => !open);
  }

  public addToCart(book: Book, quantity = 1, format: BookFormat = 'Paperback'): void {
    let itemPrice = book.price;
    if (format === 'Hardcover') itemPrice = Number((book.price * 1.25).toFixed(2));
    if (format === 'eBook') itemPrice = Number((book.price * 0.75).toFixed(2));
    if (format === 'Audiobook') itemPrice = Number((book.price * 0.9).toFixed(2));

    this._cartItems.update((items) => {
      const existingIndex = items.findIndex(
        (item) => item.book.id === book.id && item.format === format
      );

      if (existingIndex > -1) {
        const updated = [...items];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }

      return [...items, { book, quantity, format, itemPrice }];
    });

    this.saveCartToStorage();
    this.notificationService.success(`Added "${book.title}" (${format}) to cart`);
  }

  public updateQuantity(bookId: string, format: BookFormat, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(bookId, format);
      return;
    }

    this._cartItems.update((items) =>
      items.map((item) =>
        item.book.id === bookId && item.format === format ? { ...item, quantity } : item
      )
    );

    this.saveCartToStorage();
  }

  public removeFromCart(bookId: string, format: BookFormat): void {
    const itemToRemove = this._cartItems().find((i) => i.book.id === bookId && i.format === format);

    this._cartItems.update((items) =>
      items.filter((item) => !(item.book.id === bookId && item.format === format))
    );

    this.saveCartToStorage();
    if (itemToRemove) {
      this.notificationService.info(`Removed "${itemToRemove.book.title}" from cart`);
    }
  }

  public clearCart(): void {
    this._cartItems.set([]);
    this._appliedPromo.set(null);
    this.saveCartToStorage();
    this.savePromoToStorage();
  }

  public applyPromoCode(code: string): { success: boolean; message: string } {
    const cleanCode = code.trim().toUpperCase();
    const promo = MOCK_PROMO_CODES.find((p) => p.code === cleanCode);

    if (!promo) {
      return { success: false, message: 'Invalid promo code. Try BOOKWORM15 or READMORE20' };
    }

    if (this.subtotal() < promo.minSpend) {
      return {
        success: false,
        message: `Minimum order amount for code ${promo.code} is $${promo.minSpend.toFixed(2)}`
      };
    }

    this._appliedPromo.set(promo);
    this.savePromoToStorage();
    this.notificationService.success(
      `Promo code applied! You saved ${promo.discountPercent}%`,
      'Promo Applied'
    );
    return { success: true, message: `Promo code ${promo.code} applied successfully!` };
  }

  public removePromoCode(): void {
    this._appliedPromo.set(null);
    this.savePromoToStorage();
    this.notificationService.info('Promo code removed');
  }

  public isItemInCart(bookId: string): boolean {
    return this._cartItems().some((i) => i.book.id === bookId);
  }

  private saveCartToStorage(): void {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this._cartItems()));
    } catch {
      // ignore in environments without localStorage
    }
  }

  private loadCartFromStorage(): CartItem[] {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private savePromoToStorage(): void {
    try {
      if (this._appliedPromo()) {
        localStorage.setItem(PROMO_STORAGE_KEY, JSON.stringify(this._appliedPromo()));
      } else {
        localStorage.removeItem(PROMO_STORAGE_KEY);
      }
    } catch {
      // ignore
    }
  }

  private loadPromoFromStorage(): PromoCode | null {
    try {
      const data = localStorage.getItem(PROMO_STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }
}
