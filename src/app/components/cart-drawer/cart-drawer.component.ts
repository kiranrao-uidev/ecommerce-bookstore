import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/book.model';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    @if (isOpen()) {
      <!-- Backdrop -->
      <div class="drawer-backdrop" (click)="closeDrawer()"></div>

      <!-- Drawer Panel -->
      <aside class="cart-drawer-panel" aria-labelledby="cart-drawer-title">
        <!-- Drawer Header -->
        <div class="drawer-header">
          <div class="header-title-box">
            <h2 id="cart-drawer-title" class="drawer-title">Shopping Cart</h2>
            <span class="items-count-badge">{{ totalItems() }} {{ totalItems() === 1 ? 'item' : 'items' }}</span>
          </div>

          <button type="button" class="close-btn" (click)="closeDrawer()" aria-label="Close cart drawer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Free Shipping Progress Meter -->
        <div class="shipping-meter-box">
          @if (subtotal() >= 45) {
            <div class="shipping-free-msg">
              <span>🎉 Congratulations! You unlocked <strong>FREE Standard Shipping</strong></span>
            </div>
            <div class="meter-bar"><div class="meter-fill full"></div></div>
          } @else {
            <div class="shipping-away-msg">
              <span>Add <strong>\${{ (45 - subtotal()) | number: '1.2-2' }}</strong> more to unlock <strong>FREE Shipping</strong></span>
            </div>
            <div class="meter-bar">
              <div class="meter-fill" [style.width.%]="(subtotal() / 45) * 100"></div>
            </div>
          }
        </div>

        <!-- Cart Items List -->
        <div class="drawer-items-list">
          @if (cartItems().length === 0) {
            <div class="empty-cart-state">
              <div class="empty-icon">🛒</div>
              <h3>Your cart is empty</h3>
              <p>Explore our vast collection of books and discover your next favorite read.</p>
              <button type="button" class="browse-books-btn" (click)="goToCatalog()">Browse Books</button>
            </div>
          } @else {
            @for (item of cartItems(); track item.book.id + item.format) {
              <div class="cart-item-row">
                <div class="item-cover-thumb" [style.background]="item.book.coverGradient">
                  <span class="format-tag">{{ item.format[0] }}</span>
                </div>

                <div class="item-details">
                  <a [routerLink]="['/book', item.book.id]" (click)="closeDrawer()" class="item-title">
                    {{ item.book.title }}
                  </a>
                  <span class="item-meta">{{ item.format }} • \${{ item.itemPrice | number: '1.2-2' }}</span>

                  <div class="qty-and-price">
                    <div class="qty-control">
                      <button
                        type="button"
                        class="qty-btn"
                        (click)="decrement(item)"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span class="qty-value">{{ item.quantity }}</span>
                      <button
                        type="button"
                        class="qty-btn"
                        (click)="increment(item)"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <div class="item-total-price">
                      \${{ (item.itemPrice * item.quantity) | number: '1.2-2' }}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  class="remove-item-btn"
                  (click)="removeItem(item)"
                  title="Remove item"
                  aria-label="Remove item"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>
            }
          }
        </div>

        <!-- Drawer Footer with Promo & Subtotals -->
        @if (cartItems().length > 0) {
          <div class="drawer-footer">
            <!-- Promo Code Input -->
            <div class="promo-box">
              @if (appliedPromo(); as promo) {
                <div class="applied-promo-chip">
                  <div class="promo-left">
                    <span class="tag-icon">🏷️</span>
                    <span class="promo-text"><strong>{{ promo.code }}</strong> ({{ promo.discountPercent }}% off)</span>
                  </div>
                  <button type="button" class="remove-promo-btn" (click)="removePromo()">Remove</button>
                </div>
              } @else {
                <div class="promo-input-row">
                  <input
                    type="text"
                    placeholder="Promo code (e.g. BOOKWORM15)"
                    [(ngModel)]="promoInput"
                    (keyup.enter)="applyPromo()"
                    class="promo-input"
                  />
                  <button type="button" class="apply-promo-btn" (click)="applyPromo()">Apply</button>
                </div>
              }
            </div>

            <!-- Price Breakdown -->
            <div class="summary-breakdown">
              <div class="summary-line">
                <span>Subtotal</span>
                <span>\${{ subtotal() | number: '1.2-2' }}</span>
              </div>

              @if (discountAmount() > 0) {
                <div class="summary-line discount-line">
                  <span>Discount</span>
                  <span>-\${{ discountAmount() | number: '1.2-2' }}</span>
                </div>
              }

              <div class="summary-line">
                <span>Shipping</span>
                <span>{{ shippingFee() === 0 ? 'FREE' : ('$' + (shippingFee() | number: '1.2-2')) }}</span>
              </div>

              <div class="summary-line total-line">
                <span>Total</span>
                <span>\${{ finalTotal() | number: '1.2-2' }}</span>
              </div>
            </div>

            <!-- Drawer Action Buttons -->
            <div class="drawer-actions-stack">
              <button type="button" class="checkout-btn" (click)="goToCheckout()">
                Proceed to Checkout • \${{ finalTotal() | number: '1.2-2' }}
              </button>

              <a routerLink="/cart" (click)="closeDrawer()" class="view-full-cart-link">
                View Full Cart & Summary
              </a>
            </div>
          </div>
        }
      </aside>
    }
  `,
  styles: [
    `
      .drawer-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(4px);
        z-index: 999;
        animation: fadeIn 0.2s ease-out;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .cart-drawer-panel {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        max-width: 440px;
        background: #ffffff;
        box-shadow: -10px 0 25px -5px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        animation: slideLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      }

      @keyframes slideLeft {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
      }

      .drawer-header {
        padding: 1.25rem 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .header-title-box {
        display: flex;
        align-items: center;
        gap: 0.6rem;
      }

      .drawer-title {
        font-size: 1.2rem;
        font-weight: 800;
        color: #0f172a;
        margin: 0;
      }

      .items-count-badge {
        font-size: 0.75rem;
        font-weight: 600;
        background: #f1f5f9;
        color: #475569;
        padding: 0.2rem 0.5rem;
        border-radius: 9999px;
      }

      .close-btn {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #64748b;
        transition: all 0.15s ease;
      }

      .close-btn:hover {
        background: #e2e8f0;
        color: #0f172a;
      }

      .close-btn svg {
        width: 16px;
        height: 16px;
      }

      .shipping-meter-box {
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
        padding: 0.75rem 1.5rem;
      }

      .shipping-free-msg {
        font-size: 0.775rem;
        color: #059669;
        font-weight: 500;
        margin-bottom: 0.4rem;
      }

      .shipping-away-msg {
        font-size: 0.775rem;
        color: #475569;
        margin-bottom: 0.4rem;
      }

      .meter-bar {
        height: 6px;
        background: #e2e8f0;
        border-radius: 9999px;
        overflow: hidden;
      }

      .meter-fill {
        height: 100%;
        background: linear-gradient(90deg, #6366f1, #4f46e5);
        border-radius: 9999px;
        transition: width 0.3s ease;
      }

      .meter-fill.full {
        background: #10b981;
        width: 100%;
      }

      .drawer-items-list {
        flex: 1;
        overflow-y: auto;
        padding: 1rem 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .empty-cart-state {
        margin: auto 0;
        text-align: center;
        padding: 2rem 1rem;
      }

      .empty-icon {
        font-size: 3rem;
        margin-bottom: 0.75rem;
      }

      .empty-cart-state h3 {
        font-size: 1.15rem;
        font-weight: 700;
        color: #1e293b;
        margin: 0 0 0.4rem 0;
      }

      .empty-cart-state p {
        font-size: 0.85rem;
        color: #64748b;
        margin: 0 0 1.25rem 0;
      }

      .browse-books-btn {
        background: #4f46e5;
        color: #ffffff;
        border: none;
        padding: 0.65rem 1.25rem;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.875rem;
        cursor: pointer;
      }

      .cart-item-row {
        display: flex;
        gap: 0.85rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #f1f5f9;
        position: relative;
      }

      .item-cover-thumb {
        width: 48px;
        height: 68px;
        border-radius: 4px;
        flex-shrink: 0;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 3px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      }

      .format-tag {
        font-size: 0.6rem;
        background: rgba(0, 0, 0, 0.4);
        color: #ffffff;
        font-weight: 700;
        padding: 1px 4px;
        border-radius: 3px;
      }

      .item-details {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .item-title {
        font-size: 0.875rem;
        font-weight: 700;
        color: #0f172a;
        text-decoration: none;
        line-height: 1.25;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .item-title:hover {
        color: #4f46e5;
      }

      .item-meta {
        font-size: 0.75rem;
        color: #64748b;
        margin-top: 0.2rem;
      }

      .qty-and-price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.5rem;
      }

      .qty-control {
        display: inline-flex;
        align-items: center;
        border: 1px solid #cbd5e1;
        border-radius: 6px;
        background: #f8fafc;
      }

      .qty-btn {
        background: none;
        border: none;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 0.85rem;
        font-weight: 700;
        color: #475569;
      }

      .qty-btn:hover {
        background: #e2e8f0;
      }

      .qty-value {
        font-size: 0.8rem;
        font-weight: 700;
        padding: 0 0.4rem;
        color: #0f172a;
      }

      .item-total-price {
        font-size: 0.9rem;
        font-weight: 800;
        color: #0f172a;
      }

      .remove-item-btn {
        background: none;
        border: none;
        color: #94a3b8;
        cursor: pointer;
        padding: 0.25rem;
        align-self: flex-start;
      }

      .remove-item-btn:hover {
        color: #ef4444;
      }

      .remove-item-btn svg {
        width: 16px;
        height: 16px;
      }

      .drawer-footer {
        padding: 1.25rem 1.5rem;
        background: #f8fafc;
        border-top: 1px solid #e2e8f0;
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
      }

      .promo-input-row {
        display: flex;
        gap: 0.4rem;
      }

      .promo-input {
        flex: 1;
        padding: 0.5rem 0.75rem;
        font-size: 0.8rem;
        border: 1px solid #cbd5e1;
        border-radius: 6px;
        outline: none;
      }

      .promo-input:focus {
        border-color: #4f46e5;
      }

      .apply-promo-btn {
        background: #0f172a;
        color: #ffffff;
        border: none;
        padding: 0.5rem 0.85rem;
        border-radius: 6px;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
      }

      .applied-promo-chip {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #ecfdf5;
        border: 1px solid #a7f3d0;
        padding: 0.4rem 0.75rem;
        border-radius: 6px;
        font-size: 0.75rem;
        color: #065f46;
      }

      .remove-promo-btn {
        background: none;
        border: none;
        color: #ef4444;
        font-size: 0.75rem;
        font-weight: 600;
        cursor: pointer;
      }

      .summary-breakdown {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }

      .summary-line {
        display: flex;
        justify-content: space-between;
        font-size: 0.825rem;
        color: #64748b;
      }

      .discount-line {
        color: #10b981;
        font-weight: 600;
      }

      .total-line {
        font-size: 1rem;
        font-weight: 800;
        color: #0f172a;
        border-top: 1px solid #e2e8f0;
        padding-top: 0.4rem;
        margin-top: 0.2rem;
      }

      .drawer-actions-stack {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .checkout-btn {
        background: #4f46e5;
        color: #ffffff;
        border: none;
        padding: 0.85rem 1rem;
        border-radius: 8px;
        font-size: 0.925rem;
        font-weight: 700;
        cursor: pointer;
        transition: background 0.15s ease;
      }

      .checkout-btn:hover {
        background: #4338ca;
      }

      .view-full-cart-link {
        text-align: center;
        font-size: 0.825rem;
        font-weight: 600;
        color: #4f46e5;
        text-decoration: none;
        padding: 0.35rem;
      }

      .view-full-cart-link:hover {
        text-decoration: underline;
      }
    `
  ]
})
export class CartDrawerComponent {
  private readonly router = inject(Router);
  private readonly cartService = inject(CartService);

  public readonly isOpen = this.cartService.isCartDrawerOpen;
  public readonly cartItems = this.cartService.cartItems;
  public readonly totalItems = this.cartService.totalItemsCount;
  public readonly subtotal = this.cartService.subtotal;
  public readonly discountAmount = this.cartService.discountAmount;
  public readonly shippingFee = this.cartService.shippingFee;
  public readonly finalTotal = this.cartService.finalTotal;
  public readonly appliedPromo = this.cartService.appliedPromo;

  public promoInput = '';

  public closeDrawer(): void {
    this.cartService.closeCartDrawer();
  }

  public increment(item: CartItem): void {
    this.cartService.updateQuantity(item.book.id, item.format, item.quantity + 1);
  }

  public decrement(item: CartItem): void {
    this.cartService.updateQuantity(item.book.id, item.format, item.quantity - 1);
  }

  public removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item.book.id, item.format);
  }

  public applyPromo(): void {
    if (this.promoInput.trim()) {
      this.cartService.applyPromoCode(this.promoInput);
      this.promoInput = '';
    }
  }

  public removePromo(): void {
    this.cartService.removePromoCode();
  }

  public goToCatalog(): void {
    this.closeDrawer();
    this.router.navigate(['/']);
  }

  public goToCheckout(): void {
    this.closeDrawer();
    this.router.navigate(['/checkout']);
  }

  @HostListener('document:keydown.escape')
  public onEscape(): void {
    if (this.isOpen()) {
      this.closeDrawer();
    }
  }
}
