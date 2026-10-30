import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/book.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="cart-page">
      <div class="container">
        <div class="cart-header">
          <h1 class="page-title">Your Shopping Cart</h1>
          <span class="items-count-text">
            {{ totalItems() }} {{ totalItems() === 1 ? 'item' : 'items' }} in cart
          </span>
        </div>

        @if (cartItems().length === 0) {
          <div class="empty-cart-card">
            <div class="empty-icon">📖</div>
            <h2>Your cart is empty</h2>
            <p>Your library is waiting for new additions. Explore our bestselling catalog today!</p>
            <a routerLink="/" class="btn-start-shopping">Explore Books</a>
          </div>
        } @else {
          <div class="cart-grid">
            <!-- Left: Items Table -->
            <div class="items-column">
              <div class="cart-table-wrapper">
                <table class="cart-table">
                  <thead>
                    <tr>
                      <th class="th-book">Book Details</th>
                      <th class="th-format">Format</th>
                      <th class="th-price">Price</th>
                      <th class="th-qty">Quantity</th>
                      <th class="th-subtotal">Subtotal</th>
                      <th class="th-action"></th>
                    </tr>
                  </thead>
                  <tbody>
                    @for (item of cartItems(); track item.book.id + item.format) {
                      <tr>
                        <!-- Book Details -->
                        <td>
                          <div class="book-cell">
                            <div class="table-cover-thumb" [style.background]="item.book.coverGradient"></div>
                            <div class="cell-info">
                              <a [routerLink]="['/book', item.book.id]" class="cell-title">
                                {{ item.book.title }}
                              </a>
                              <span class="cell-author">by {{ item.book.author }}</span>
                              <span class="cell-category">{{ item.book.category }}</span>
                            </div>
                          </div>
                        </td>

                        <!-- Format -->
                        <td>
                          <span class="format-badge">{{ item.format }}</span>
                        </td>

                        <!-- Price -->
                        <td>
                          <span class="unit-price">\${{ item.itemPrice | number: '1.2-2' }}</span>
                        </td>

                        <!-- Quantity -->
                        <td>
                          <div class="table-qty-control">
                            <button
                              type="button"
                              class="qty-btn"
                              (click)="decrement(item)"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span class="qty-val">{{ item.quantity }}</span>
                            <button
                              type="button"
                              class="qty-btn"
                              (click)="increment(item)"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </td>

                        <!-- Subtotal -->
                        <td>
                          <span class="line-subtotal">
                            \${{ (item.itemPrice * item.quantity) | number: '1.2-2' }}
                          </span>
                        </td>

                        <!-- Action -->
                        <td>
                          <button
                            type="button"
                            class="delete-btn"
                            (click)="removeItem(item)"
                            title="Remove from cart"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>

              <!-- Cart Table Bottom Actions -->
              <div class="cart-bottom-strip">
                <a routerLink="/" class="link-continue-shopping">← Continue Shopping</a>
                <button type="button" class="btn-clear-cart" (click)="clearCart()">
                  Clear Shopping Cart
                </button>
              </div>
            </div>

            <!-- Right: Order Summary Sidebar -->
            <div class="summary-column">
              <div class="summary-card">
                <h2 class="summary-title">Order Summary</h2>

                <!-- Promo Input -->
                <div class="promo-section">
                  <label class="promo-label">Have a promo code?</label>
                  @if (appliedPromo(); as promo) {
                    <div class="applied-promo-tag">
                      <div class="p-text">
                        <strong>{{ promo.code }}</strong> (-{{ promo.discountPercent }}%)
                      </div>
                      <button type="button" class="btn-remove-code" (click)="removePromo()">
                        Remove
                      </button>
                    </div>
                  } @else {
                    <div class="promo-input-flex">
                      <input
                        type="text"
                        placeholder="e.g. BOOKWORM15"
                        [(ngModel)]="promoInput"
                        (keyup.enter)="applyPromo()"
                        class="promo-input-field"
                      />
                      <button type="button" class="btn-apply-promo" (click)="applyPromo()">
                        Apply
                      </button>
                    </div>
                  }
                </div>

                <!-- Price Breakdown -->
                <div class="calc-breakdown">
                  <div class="calc-row">
                    <span>Subtotal</span>
                    <span>\${{ subtotal() | number: '1.2-2' }}</span>
                  </div>

                  @if (discountAmount() > 0) {
                    <div class="calc-row discount-row">
                      <span>Promo Discount</span>
                      <span>-\${{ discountAmount() | number: '1.2-2' }}</span>
                    </div>
                  }

                  <div class="calc-row">
                    <span>Estimated Shipping</span>
                    <span>{{ shippingFee() === 0 ? 'FREE' : ('$' + (shippingFee() | number: '1.2-2')) }}</span>
                  </div>

                  <div class="calc-row">
                    <span>Estimated Tax (8.25%)</span>
                    <span>\${{ taxAmount() | number: '1.2-2' }}</span>
                  </div>

                  <div class="calc-row total-row">
                    <span>Order Total</span>
                    <span>\${{ finalTotal() | number: '1.2-2' }}</span>
                  </div>
                </div>

                <!-- Checkout CTA -->
                <button type="button" class="btn-proceed-checkout" (click)="proceedToCheckout()">
                  Proceed to Checkout
                </button>

                <!-- Perks guarantee list -->
                <div class="trust-perks">
                  <div class="t-perk">🔒 Secure 256-bit encrypted checkout</div>
                  <div class="t-perk">📦 Free shipping on all orders over $45</div>
                  <div class="t-perk">⚡ Instant download for eBook & Audiobook</div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .cart-page {
        padding: 2.5rem 0 4rem;
      }

      .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }

      .cart-header {
        display: flex;
        align-items: baseline;
        gap: 1rem;
        margin-bottom: 2rem;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 1rem;
      }

      .page-title {
        font-size: 2rem;
        font-weight: 800;
        color: #0f172a;
        margin: 0;
      }

      .items-count-text {
        font-size: 1rem;
        color: #64748b;
        font-weight: 500;
      }

      .empty-cart-card {
        text-align: center;
        background: #ffffff;
        border: 1px dashed #cbd5e1;
        border-radius: 16px;
        padding: 4.5rem 1.5rem;
      }

      .empty-icon {
        font-size: 3.5rem;
        margin-bottom: 1rem;
      }

      .empty-cart-card h2 {
        font-size: 1.5rem;
        font-weight: 800;
        color: #1e293b;
        margin: 0 0 0.5rem 0;
      }

      .empty-cart-card p {
        font-size: 0.95rem;
        color: #64748b;
        margin: 0 0 1.5rem 0;
      }

      .btn-start-shopping {
        display: inline-block;
        background: #4f46e5;
        color: #ffffff;
        font-weight: 700;
        font-size: 0.95rem;
        padding: 0.8rem 1.75rem;
        border-radius: 10px;
        text-decoration: none;
        transition: background 0.15s ease;
      }

      .btn-start-shopping:hover {
        background: #4338ca;
      }

      .cart-grid {
        display: grid;
        grid-template-columns: 1fr 380px;
        gap: 2.5rem;
        align-items: flex-start;
      }

      .cart-table-wrapper {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        overflow: hidden;
      }

      .cart-table {
        width: 100%;
        border-collapse: collapse;
        text-align: left;
      }

      .cart-table th {
        background: #f8fafc;
        padding: 1rem 1.25rem;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 700;
        color: #475569;
        border-bottom: 1px solid #e2e8f0;
      }

      .cart-table td {
        padding: 1.25rem;
        border-bottom: 1px solid #f1f5f9;
        vertical-align: middle;
      }

      .book-cell {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .table-cover-thumb {
        width: 44px;
        height: 62px;
        border-radius: 4px;
        flex-shrink: 0;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      }

      .cell-info {
        display: flex;
        flex-direction: column;
      }

      .cell-title {
        font-size: 0.925rem;
        font-weight: 700;
        color: #0f172a;
        text-decoration: none;
        line-height: 1.3;
      }

      .cell-title:hover {
        color: #4f46e5;
      }

      .cell-author {
        font-size: 0.8rem;
        color: #64748b;
      }

      .cell-category {
        font-size: 0.7rem;
        color: #6366f1;
        font-weight: 600;
        margin-top: 0.15rem;
      }

      .format-badge {
        font-size: 0.75rem;
        font-weight: 600;
        background: #f1f5f9;
        color: #334155;
        padding: 0.25rem 0.55rem;
        border-radius: 6px;
      }

      .unit-price {
        font-size: 0.9rem;
        font-weight: 600;
        color: #334155;
      }

      .table-qty-control {
        display: inline-flex;
        align-items: center;
        border: 1px solid #cbd5e1;
        border-radius: 6px;
        background: #f8fafc;
      }

      .qty-btn {
        background: none;
        border: none;
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 700;
        color: #475569;
      }

      .qty-btn:hover {
        background: #e2e8f0;
      }

      .qty-val {
        font-size: 0.85rem;
        font-weight: 700;
        padding: 0 0.5rem;
        color: #0f172a;
      }

      .line-subtotal {
        font-size: 1rem;
        font-weight: 800;
        color: #0f172a;
      }

      .delete-btn {
        background: none;
        border: none;
        color: #94a3b8;
        cursor: pointer;
        padding: 0.35rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color 0.15s ease;
      }

      .delete-btn:hover {
        color: #ef4444;
      }

      .delete-btn svg {
        width: 18px;
        height: 18px;
      }

      .cart-bottom-strip {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1.25rem;
      }

      .link-continue-shopping {
        font-size: 0.875rem;
        font-weight: 600;
        color: #4f46e5;
        text-decoration: none;
      }

      .link-continue-shopping:hover {
        text-decoration: underline;
      }

      .btn-clear-cart {
        background: none;
        border: 1px solid #cbd5e1;
        font-size: 0.8rem;
        font-weight: 600;
        color: #64748b;
        padding: 0.4rem 0.85rem;
        border-radius: 6px;
        cursor: pointer;
      }

      .btn-clear-cart:hover {
        background: #fee2e2;
        border-color: #fca5a5;
        color: #dc2626;
      }

      .summary-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        padding: 1.5rem;
      }

      .summary-title {
        font-size: 1.2rem;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 1.25rem 0;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #f1f5f9;
      }

      .promo-section {
        margin-bottom: 1.5rem;
      }

      .promo-label {
        font-size: 0.8rem;
        font-weight: 700;
        color: #334155;
        margin-bottom: 0.4rem;
        display: block;
      }

      .promo-input-flex {
        display: flex;
        gap: 0.4rem;
      }

      .promo-input-field {
        flex: 1;
        padding: 0.55rem 0.75rem;
        border-radius: 8px;
        border: 1px solid #cbd5e1;
        font-size: 0.825rem;
        outline: none;
      }

      .promo-input-field:focus {
        border-color: #4f46e5;
      }

      .btn-apply-promo {
        background: #0f172a;
        color: #ffffff;
        border: none;
        padding: 0.55rem 1rem;
        border-radius: 8px;
        font-size: 0.825rem;
        font-weight: 700;
        cursor: pointer;
      }

      .applied-promo-tag {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #ecfdf5;
        border: 1px solid #a7f3d0;
        padding: 0.5rem 0.75rem;
        border-radius: 8px;
        font-size: 0.8rem;
        color: #065f46;
      }

      .btn-remove-code {
        background: none;
        border: none;
        color: #ef4444;
        font-size: 0.75rem;
        font-weight: 700;
        cursor: pointer;
      }

      .calc-breakdown {
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
        margin-bottom: 1.5rem;
        padding-bottom: 1.25rem;
        border-bottom: 1px solid #f1f5f9;
      }

      .calc-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.875rem;
        color: #475569;
      }

      .discount-row {
        color: #059669;
        font-weight: 600;
      }

      .total-row {
        font-size: 1.2rem;
        font-weight: 800;
        color: #0f172a;
        border-top: 1px solid #e2e8f0;
        padding-top: 0.75rem;
        margin-top: 0.25rem;
      }

      .btn-proceed-checkout {
        width: 100%;
        background: #4f46e5;
        color: #ffffff;
        font-weight: 700;
        font-size: 1rem;
        padding: 0.85rem;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        transition: background 0.15s ease;
      }

      .btn-proceed-checkout:hover {
        background: #4338ca;
      }

      .trust-perks {
        margin-top: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }

      .t-perk {
        font-size: 0.75rem;
        color: #64748b;
      }

      @media (max-width: 900px) {
        .cart-grid {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class CartComponent {
  private readonly router = inject(Router);
  private readonly cartService = inject(CartService);

  public readonly cartItems = this.cartService.cartItems;
  public readonly totalItems = this.cartService.totalItemsCount;
  public readonly subtotal = this.cartService.subtotal;
  public readonly discountAmount = this.cartService.discountAmount;
  public readonly shippingFee = this.cartService.shippingFee;
  public readonly taxAmount = this.cartService.taxAmount;
  public readonly finalTotal = this.cartService.finalTotal;
  public readonly appliedPromo = this.cartService.appliedPromo;

  public promoInput = '';

  public increment(item: CartItem): void {
    this.cartService.updateQuantity(item.book.id, item.format, item.quantity + 1);
  }

  public decrement(item: CartItem): void {
    this.cartService.updateQuantity(item.book.id, item.format, item.quantity - 1);
  }

  public removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item.book.id, item.format);
  }

  public clearCart(): void {
    this.cartService.clearCart();
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

  public proceedToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}
