import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-ATB4PIY5.js";
import {
  CartService,
  CommonModule,
  Component,
  DecimalPipe,
  Router,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LANLAHU6.js";

// src/app/views/cart/cart.component.ts
var _c0 = (a0) => ["/book", a0];
var _forTrack0 = ($index, $item) => $item.book.id + $item.format;
function CartComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 7);
    \u0275\u0275text(2, "\u{1F4D6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Your cart is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your library is waiting for new additions. Explore our bestselling catalog today!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 8);
    \u0275\u0275text(8, "Explore Books");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_Conditional_8_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 35);
    \u0275\u0275element(3, "div", 36);
    \u0275\u0275elementStart(4, "div", 37)(5, "a", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "span", 41);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "span", 42);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 43)(20, "button", 44);
    \u0275\u0275listener("click", function CartComponent_Conditional_8_For_19_Template_button_click_20_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.decrement(item_r3));
    });
    \u0275\u0275text(21, " - ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 45);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 46);
    \u0275\u0275listener("click", function CartComponent_Conditional_8_For_19_Template_button_click_24_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.increment(item_r3));
    });
    \u0275\u0275text(25, " + ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "td")(27, "span", 47);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td")(31, "button", 48);
    \u0275\u0275listener("click", function CartComponent_Conditional_8_For_19_Template_button_click_31_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeItem(item_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 49);
    \u0275\u0275element(33, "path", 50);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", item_r3.book.coverGradient);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, item_r3.book.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.book.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("by ", item_r3.book.author);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.book.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.format);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(17, 10, item_r3.itemPrice, "1.2-2"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r3.quantity);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" $", \u0275\u0275pipeBind2(29, 13, item_r3.itemPrice * item_r3.quantity, "1.2-2"), " ");
  }
}
function CartComponent_Conditional_8_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 51)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 52);
    \u0275\u0275listener("click", function CartComponent_Conditional_8_Conditional_32_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removePromo());
    });
    \u0275\u0275text(6, " Remove ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const promo_r6 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(promo_r6.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (-", promo_r6.discountPercent, "%) ");
  }
}
function CartComponent_Conditional_8_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_Conditional_8_Conditional_33_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.promoInput, $event) || (ctx_r3.promoInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function CartComponent_Conditional_8_Conditional_33_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.applyPromo());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 54);
    \u0275\u0275listener("click", function CartComponent_Conditional_8_Conditional_33_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.applyPromo());
    });
    \u0275\u0275text(3, " Apply ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.promoInput);
  }
}
function CartComponent_Conditional_8_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "Promo Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("-$", \u0275\u0275pipeBind2(5, 1, ctx_r3.discountAmount(), "1.2-2"));
  }
}
function CartComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 9)(2, "div", 10)(3, "table", 11)(4, "thead")(5, "tr")(6, "th", 12);
    \u0275\u0275text(7, "Book Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 13);
    \u0275\u0275text(9, "Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 14);
    \u0275\u0275text(11, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 15);
    \u0275\u0275text(13, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 16);
    \u0275\u0275text(15, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "th", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, CartComponent_Conditional_8_For_19_Template, 34, 18, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 18)(21, "a", 19);
    \u0275\u0275text(22, "\u2190 Continue Shopping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 20);
    \u0275\u0275listener("click", function CartComponent_Conditional_8_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearCart());
    });
    \u0275\u0275text(24, " Clear Shopping Cart ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 21)(26, "div", 22)(27, "h2", 23);
    \u0275\u0275text(28, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 24)(30, "label", 25);
    \u0275\u0275text(31, "Have a promo code?");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(32, CartComponent_Conditional_8_Conditional_32_Template, 7, 2, "div", 26)(33, CartComponent_Conditional_8_Conditional_33_Template, 4, 1, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 28)(35, "div", 29)(36, "span");
    \u0275\u0275text(37, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(41, CartComponent_Conditional_8_Conditional_41_Template, 6, 4, "div", 30);
    \u0275\u0275elementStart(42, "div", 29)(43, "span");
    \u0275\u0275text(44, "Estimated Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 29)(49, "span");
    \u0275\u0275text(50, "Estimated Tax (8.25%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 31)(55, "span");
    \u0275\u0275text(56, "Order Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "button", 32);
    \u0275\u0275listener("click", function CartComponent_Conditional_8_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.proceedToCheckout());
    });
    \u0275\u0275text(61, " Proceed to Checkout ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 33)(63, "div", 34);
    \u0275\u0275text(64, "\u{1F512} Secure 256-bit encrypted checkout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 34);
    \u0275\u0275text(66, "\u{1F4E6} Free shipping on all orders over $45");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 34);
    \u0275\u0275text(68, "\u26A1 Instant download for eBook & Audiobook");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r3.cartItems());
    \u0275\u0275advance(14);
    \u0275\u0275conditional((tmp_2_0 = ctx_r3.appliedPromo()) ? 32 : 33, tmp_2_0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(40, 6, ctx_r3.subtotal(), "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.discountAmount() > 0 ? 41 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.shippingFee() === 0 ? "FREE" : "$" + \u0275\u0275pipeBind2(47, 9, ctx_r3.shippingFee(), "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(53, 12, ctx_r3.taxAmount(), "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(59, 15, ctx_r3.finalTotal(), "1.2-2"));
  }
}
var CartComponent = class _CartComponent {
  router = inject(Router);
  cartService = inject(CartService);
  cartItems = this.cartService.cartItems;
  totalItems = this.cartService.totalItemsCount;
  subtotal = this.cartService.subtotal;
  discountAmount = this.cartService.discountAmount;
  shippingFee = this.cartService.shippingFee;
  taxAmount = this.cartService.taxAmount;
  finalTotal = this.cartService.finalTotal;
  appliedPromo = this.cartService.appliedPromo;
  promoInput = "";
  increment(item) {
    this.cartService.updateQuantity(item.book.id, item.format, item.quantity + 1);
  }
  decrement(item) {
    this.cartService.updateQuantity(item.book.id, item.format, item.quantity - 1);
  }
  removeItem(item) {
    this.cartService.removeFromCart(item.book.id, item.format);
  }
  clearCart() {
    this.cartService.clearCart();
  }
  applyPromo() {
    if (this.promoInput.trim()) {
      this.cartService.applyPromoCode(this.promoInput);
      this.promoInput = "";
    }
  }
  removePromo() {
    this.cartService.removePromoCode();
  }
  proceedToCheckout() {
    this.router.navigate(["/checkout"]);
  }
  static \u0275fac = function CartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], decls: 9, vars: 3, consts: [[1, "cart-page"], [1, "container"], [1, "cart-header"], [1, "page-title"], [1, "items-count-text"], [1, "empty-cart-card"], [1, "cart-grid"], [1, "empty-icon"], ["routerLink", "/", 1, "btn-start-shopping"], [1, "items-column"], [1, "cart-table-wrapper"], [1, "cart-table"], [1, "th-book"], [1, "th-format"], [1, "th-price"], [1, "th-qty"], [1, "th-subtotal"], [1, "th-action"], [1, "cart-bottom-strip"], ["routerLink", "/", 1, "link-continue-shopping"], ["type", "button", 1, "btn-clear-cart", 3, "click"], [1, "summary-column"], [1, "summary-card"], [1, "summary-title"], [1, "promo-section"], [1, "promo-label"], [1, "applied-promo-tag"], [1, "promo-input-flex"], [1, "calc-breakdown"], [1, "calc-row"], [1, "calc-row", "discount-row"], [1, "calc-row", "total-row"], ["type", "button", 1, "btn-proceed-checkout", 3, "click"], [1, "trust-perks"], [1, "t-perk"], [1, "book-cell"], [1, "table-cover-thumb"], [1, "cell-info"], [1, "cell-title", 3, "routerLink"], [1, "cell-author"], [1, "cell-category"], [1, "format-badge"], [1, "unit-price"], [1, "table-qty-control"], ["type", "button", "aria-label", "Decrease quantity", 1, "qty-btn", 3, "click"], [1, "qty-val"], ["type", "button", "aria-label", "Increase quantity", 1, "qty-btn", 3, "click"], [1, "line-subtotal"], ["type", "button", "title", "Remove from cart", 1, "delete-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"], [1, "p-text"], ["type", "button", 1, "btn-remove-code", 3, "click"], ["type", "text", "placeholder", "e.g. BOOKWORM15", 1, "promo-input-field", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 1, "btn-apply-promo", 3, "click"]], template: function CartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Your Shopping Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, CartComponent_Conditional_7_Template, 9, 0, "div", 5)(8, CartComponent_Conditional_8_Template, 69, 18, "div", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2(" ", ctx.totalItems(), " ", ctx.totalItems() === 1 ? "item" : "items", " in cart ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.cartItems().length === 0 ? 7 : 8);
    }
  }, dependencies: [CommonModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ["\n.cart-page[_ngcontent-%COMP%] {\n  padding: 2.5rem 0 4rem;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.cart-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  border-bottom: 1px solid #e2e8f0;\n  padding-bottom: 1rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.items-count-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.empty-cart-card[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #ffffff;\n  border: 1px dashed #cbd5e1;\n  border-radius: 16px;\n  padding: 4.5rem 1.5rem;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  margin-bottom: 1rem;\n}\n.empty-cart-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.empty-cart-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n}\n.btn-start-shopping[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #4f46e5;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.95rem;\n  padding: 0.8rem 1.75rem;\n  border-radius: 10px;\n  text-decoration: none;\n  transition: background 0.15s ease;\n}\n.btn-start-shopping[_ngcontent-%COMP%]:hover {\n  background: #4338ca;\n}\n.cart-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 2.5rem;\n  align-items: flex-start;\n}\n.cart-table-wrapper[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n}\n.cart-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n}\n.cart-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 1rem 1.25rem;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-weight: 700;\n  color: #475569;\n  border-bottom: 1px solid #e2e8f0;\n}\n.cart-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.book-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.table-cover-thumb[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 62px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.cell-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.cell-title[_ngcontent-%COMP%] {\n  font-size: 0.925rem;\n  font-weight: 700;\n  color: #0f172a;\n  text-decoration: none;\n  line-height: 1.3;\n}\n.cell-title[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n}\n.cell-author[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.cell-category[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #6366f1;\n  font-weight: 600;\n  margin-top: 0.15rem;\n}\n.format-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #f1f5f9;\n  color: #334155;\n  padding: 0.25rem 0.55rem;\n  border-radius: 6px;\n}\n.unit-price[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #334155;\n}\n.table-qty-control[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  background: #f8fafc;\n}\n.qty-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #475569;\n}\n.qty-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.qty-val[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  padding: 0 0.5rem;\n  color: #0f172a;\n}\n.line-subtotal[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0.35rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.15s ease;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n.delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.cart-bottom-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 1.25rem;\n}\n.link-continue-shopping[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #4f46e5;\n  text-decoration: none;\n}\n.link-continue-shopping[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.btn-clear-cart[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #cbd5e1;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n  padding: 0.4rem 0.85rem;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.btn-clear-cart[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #fca5a5;\n  color: #dc2626;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 1.5rem;\n}\n.summary-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 1.25rem 0;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.promo-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.promo-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #334155;\n  margin-bottom: 0.4rem;\n  display: block;\n}\n.promo-input-flex[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n}\n.promo-input-field[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.55rem 0.75rem;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  font-size: 0.825rem;\n  outline: none;\n}\n.promo-input-field[_ngcontent-%COMP%]:focus {\n  border-color: #4f46e5;\n}\n.btn-apply-promo[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #ffffff;\n  border: none;\n  padding: 0.55rem 1rem;\n  border-radius: 8px;\n  font-size: 0.825rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.applied-promo-tag[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  color: #065f46;\n}\n.btn-remove-code[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #ef4444;\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.calc-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.calc-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.875rem;\n  color: #475569;\n}\n.discount-row[_ngcontent-%COMP%] {\n  color: #059669;\n  font-weight: 600;\n}\n.total-row[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #0f172a;\n  border-top: 1px solid #e2e8f0;\n  padding-top: 0.75rem;\n  margin-top: 0.25rem;\n}\n.btn-proceed-checkout[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #4f46e5;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 1rem;\n  padding: 0.85rem;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.btn-proceed-checkout[_ngcontent-%COMP%]:hover {\n  background: #4338ca;\n}\n.trust-perks[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.t-perk[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n@media (max-width: 900px) {\n  .cart-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=cart.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartComponent, [{
    type: Component,
    args: [{ selector: "app-cart", standalone: true, imports: [CommonModule, RouterLink, FormsModule], template: `
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
            <div class="empty-icon">\u{1F4D6}</div>
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
                <a routerLink="/" class="link-continue-shopping">\u2190 Continue Shopping</a>
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
                  <div class="t-perk">\u{1F512} Secure 256-bit encrypted checkout</div>
                  <div class="t-perk">\u{1F4E6} Free shipping on all orders over $45</div>
                  <div class="t-perk">\u26A1 Instant download for eBook & Audiobook</div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;b88a489daf974dde83ff3b920cc68fda629dfe4fa3a9bb89442a512098f1f21c;C:/Users/0038EU744/.bob/playground/bookstore-app/src/app/views/cart/cart.component.ts */\n.cart-page {\n  padding: 2.5rem 0 4rem;\n}\n.container {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.cart-header {\n  display: flex;\n  align-items: baseline;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  border-bottom: 1px solid #e2e8f0;\n  padding-bottom: 1rem;\n}\n.page-title {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.items-count-text {\n  font-size: 1rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.empty-cart-card {\n  text-align: center;\n  background: #ffffff;\n  border: 1px dashed #cbd5e1;\n  border-radius: 16px;\n  padding: 4.5rem 1.5rem;\n}\n.empty-icon {\n  font-size: 3.5rem;\n  margin-bottom: 1rem;\n}\n.empty-cart-card h2 {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.empty-cart-card p {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n}\n.btn-start-shopping {\n  display: inline-block;\n  background: #4f46e5;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.95rem;\n  padding: 0.8rem 1.75rem;\n  border-radius: 10px;\n  text-decoration: none;\n  transition: background 0.15s ease;\n}\n.btn-start-shopping:hover {\n  background: #4338ca;\n}\n.cart-grid {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 2.5rem;\n  align-items: flex-start;\n}\n.cart-table-wrapper {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n}\n.cart-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n}\n.cart-table th {\n  background: #f8fafc;\n  padding: 1rem 1.25rem;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-weight: 700;\n  color: #475569;\n  border-bottom: 1px solid #e2e8f0;\n}\n.cart-table td {\n  padding: 1.25rem;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.book-cell {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.table-cover-thumb {\n  width: 44px;\n  height: 62px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.cell-info {\n  display: flex;\n  flex-direction: column;\n}\n.cell-title {\n  font-size: 0.925rem;\n  font-weight: 700;\n  color: #0f172a;\n  text-decoration: none;\n  line-height: 1.3;\n}\n.cell-title:hover {\n  color: #4f46e5;\n}\n.cell-author {\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.cell-category {\n  font-size: 0.7rem;\n  color: #6366f1;\n  font-weight: 600;\n  margin-top: 0.15rem;\n}\n.format-badge {\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #f1f5f9;\n  color: #334155;\n  padding: 0.25rem 0.55rem;\n  border-radius: 6px;\n}\n.unit-price {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #334155;\n}\n.table-qty-control {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  background: #f8fafc;\n}\n.qty-btn {\n  background: none;\n  border: none;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #475569;\n}\n.qty-btn:hover {\n  background: #e2e8f0;\n}\n.qty-val {\n  font-size: 0.85rem;\n  font-weight: 700;\n  padding: 0 0.5rem;\n  color: #0f172a;\n}\n.line-subtotal {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.delete-btn {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0.35rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.15s ease;\n}\n.delete-btn:hover {\n  color: #ef4444;\n}\n.delete-btn svg {\n  width: 18px;\n  height: 18px;\n}\n.cart-bottom-strip {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 1.25rem;\n}\n.link-continue-shopping {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #4f46e5;\n  text-decoration: none;\n}\n.link-continue-shopping:hover {\n  text-decoration: underline;\n}\n.btn-clear-cart {\n  background: none;\n  border: 1px solid #cbd5e1;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n  padding: 0.4rem 0.85rem;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.btn-clear-cart:hover {\n  background: #fee2e2;\n  border-color: #fca5a5;\n  color: #dc2626;\n}\n.summary-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 1.5rem;\n}\n.summary-title {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 1.25rem 0;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.promo-section {\n  margin-bottom: 1.5rem;\n}\n.promo-label {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #334155;\n  margin-bottom: 0.4rem;\n  display: block;\n}\n.promo-input-flex {\n  display: flex;\n  gap: 0.4rem;\n}\n.promo-input-field {\n  flex: 1;\n  padding: 0.55rem 0.75rem;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  font-size: 0.825rem;\n  outline: none;\n}\n.promo-input-field:focus {\n  border-color: #4f46e5;\n}\n.btn-apply-promo {\n  background: #0f172a;\n  color: #ffffff;\n  border: none;\n  padding: 0.55rem 1rem;\n  border-radius: 8px;\n  font-size: 0.825rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.applied-promo-tag {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  color: #065f46;\n}\n.btn-remove-code {\n  background: none;\n  border: none;\n  color: #ef4444;\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.calc-breakdown {\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.calc-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.875rem;\n  color: #475569;\n}\n.discount-row {\n  color: #059669;\n  font-weight: 600;\n}\n.total-row {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #0f172a;\n  border-top: 1px solid #e2e8f0;\n  padding-top: 0.75rem;\n  margin-top: 0.25rem;\n}\n.btn-proceed-checkout {\n  width: 100%;\n  background: #4f46e5;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 1rem;\n  padding: 0.85rem;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.btn-proceed-checkout:hover {\n  background: #4338ca;\n}\n.trust-perks {\n  margin-top: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.t-perk {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n@media (max-width: 900px) {\n  .cart-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=cart.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/views/cart/cart.component.ts", lineNumber: 623 });
})();
export {
  CartComponent
};
//# sourceMappingURL=chunk-OW6NSYQD.js.map
