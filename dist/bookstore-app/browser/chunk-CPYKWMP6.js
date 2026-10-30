import {
  BookCoverComponent,
  RatingStarsComponent
} from "./chunk-GNXI5LSB.js";
import {
  WishlistService
} from "./chunk-O4SUIOAB.js";
import {
  CartService,
  CommonModule,
  Component,
  DecimalPipe,
  Input,
  Output,
  RouterLink,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LANLAHU6.js";

// src/app/components/book-card/book-card.component.ts
var _c0 = (a0) => ["/book", a0];
function BookCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "Bestseller");
    \u0275\u0275elementEnd();
  }
}
function BookCardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "New");
    \u0275\u0275elementEnd();
  }
}
function BookCardComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function BookCardComponent_For_29_Template_button_click_0_listener() {
      const format_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectFormat(format_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const format_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedFormat() === format_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", format_r2, " ");
  }
}
function BookCardComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(2, 1, ctx_r2.book().originalPrice, "1.2-2"));
  }
}
function BookCardComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 29);
    \u0275\u0275element(1, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Add");
    \u0275\u0275elementEnd();
  }
}
function BookCardComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Out of Stock");
    \u0275\u0275elementEnd();
  }
}
var BookCardComponent = class _BookCardComponent {
  cartService = inject(CartService);
  wishlistService = inject(WishlistService);
  book = input.required(...ngDevMode ? [{ debugName: "book" }] : (
    /* istanbul ignore next */
    []
  ));
  quickView = output();
  selectedFormat = signal("Paperback", ...ngDevMode ? [{ debugName: "selectedFormat" }] : (
    /* istanbul ignore next */
    []
  ));
  currentPrice() {
    const format = this.selectedFormat();
    const base = this.book().price;
    if (format === "Hardcover")
      return Number((base * 1.25).toFixed(2));
    if (format === "eBook")
      return Number((base * 0.75).toFixed(2));
    if (format === "Audiobook")
      return Number((base * 0.9).toFixed(2));
    return base;
  }
  isWishlisted() {
    return this.wishlistService.isInWishlist(this.book().id);
  }
  selectFormat(format) {
    this.selectedFormat.set(format);
  }
  onToggleWishlist(event) {
    event.preventDefault();
    event.stopPropagation();
    this.wishlistService.toggleWishlist(this.book());
  }
  onQuickViewClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.quickView.emit(this.book());
  }
  onAddToCart() {
    this.cartService.addToCart(this.book(), 1, this.selectedFormat());
  }
  static \u0275fac = function BookCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookCardComponent, selectors: [["app-book-card"]], inputs: { book: [1, "book"] }, outputs: { quickView: "quickView" }, decls: 39, vars: 26, consts: [[1, "book-card"], [1, "card-cover-section"], [1, "badge-group"], [1, "badge", "bestseller-badge"], [1, "badge", "new-badge"], ["type", "button", 1, "wishlist-btn", 3, "click"], ["viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "heart-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"], [1, "cover-link", 3, "routerLink"], ["size", "md", 3, "book"], ["type", "button", 1, "quick-view-overlay-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "icon-sm"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "card-info"], [1, "category-tag"], [1, "card-title"], [1, "title-link", 3, "routerLink"], [1, "card-author"], [1, "rating-row"], [3, "rating", "reviewCount"], [1, "format-chips"], ["type", "button", 1, "chip-btn", 3, "active"], [1, "price-action-row"], [1, "price-box"], [1, "current-price"], [1, "original-price"], ["type", "button", 1, "add-cart-btn", 3, "click", "disabled"], ["type", "button", 1, "chip-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "cart-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"]], template: function BookCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "article", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275conditionalCreate(3, BookCardComponent_Conditional_3_Template, 2, 0, "span", 3);
      \u0275\u0275conditionalCreate(4, BookCardComponent_Conditional_4_Template, 2, 0, "span", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 5);
      \u0275\u0275listener("click", function BookCardComponent_Template_button_click_5_listener($event) {
        return ctx.onToggleWishlist($event);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 6);
      \u0275\u0275element(7, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "a", 8);
      \u0275\u0275element(9, "app-book-cover", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 10);
      \u0275\u0275listener("click", function BookCardComponent_Template_button_click_10_listener($event) {
        return ctx.onQuickViewClick($event);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 11);
      \u0275\u0275element(12, "path", 12)(13, "path", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Quick View ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "div", 14)(16, "span", 15);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "h3", 16)(19, "a", 17);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "p", 18);
      \u0275\u0275text(22, "by ");
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 19);
      \u0275\u0275element(26, "app-rating-stars", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 21);
      \u0275\u0275repeaterCreate(28, BookCardComponent_For_29_Template, 2, 3, "button", 22, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 23)(31, "div", 24)(32, "span", 25);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(35, BookCardComponent_Conditional_35_Template, 3, 4, "span", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 27);
      \u0275\u0275listener("click", function BookCardComponent_Template_button_click_36_listener() {
        return ctx.onAddToCart();
      });
      \u0275\u0275conditionalCreate(37, BookCardComponent_Conditional_37_Template, 4, 0)(38, BookCardComponent_Conditional_38_Template, 2, 0, "span");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.book().bestseller ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.book().newRelease ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.isWishlisted());
      \u0275\u0275attribute("aria-label", ctx.isWishlisted() ? "Remove from wishlist" : "Add to wishlist");
      \u0275\u0275advance();
      \u0275\u0275attribute("fill", ctx.isWishlisted() ? "#ef4444" : "none");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c0, ctx.book().id));
      \u0275\u0275advance();
      \u0275\u0275property("book", ctx.book());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.book().category);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c0, ctx.book().id));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.book().title);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.book().author);
      \u0275\u0275advance(2);
      \u0275\u0275property("rating", ctx.book().rating)("reviewCount", ctx.book().reviewCount);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.book().formats);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(34, 19, ctx.currentPrice(), "1.2-2"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.book().originalPrice ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.book().inStock);
      \u0275\u0275attribute("aria-label", "Add " + ctx.book().title + " to cart");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.book().inStock ? 37 : 38);
    }
  }, dependencies: [CommonModule, RouterLink, BookCoverComponent, RatingStarsComponent, DecimalPipe], styles: ["\n.book-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 14px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n  position: relative;\n  height: 100%;\n}\n.book-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.12);\n  border-color: #cbd5e1;\n}\n.card-cover-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f8fafc;\n  padding: 1.5rem 1.25rem 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.badge-group[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  left: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  z-index: 5;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 0.2rem 0.55rem;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.bestseller-badge[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  color: #ffffff;\n}\n.new-badge[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #ffffff;\n}\n.wishlist-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 5;\n  transition:\n    background 0.15s ease,\n    transform 0.15s ease,\n    border-color 0.15s ease;\n  color: #64748b;\n}\n.wishlist-btn[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  transform: scale(1.1);\n  color: #ef4444;\n}\n.wishlist-btn.active[_ngcontent-%COMP%] {\n  color: #ef4444;\n  border-color: #fca5a5;\n  background: #fef2f2;\n}\n.heart-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.cover-link[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 180px;\n  text-decoration: none;\n}\n.quick-view-overlay-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.75rem;\n  left: 50%;\n  transform: translateX(-50%) translateY(20px);\n  opacity: 0;\n  background: rgba(15, 23, 42, 0.85);\n  color: #ffffff;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border: none;\n  border-radius: 9999px;\n  padding: 0.35rem 0.85rem;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  cursor: pointer;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  transition: opacity 0.2s ease, transform 0.2s ease;\n  z-index: 5;\n}\n.card-cover-section[_ngcontent-%COMP%]:hover   .quick-view-overlay-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.quick-view-overlay-btn[_ngcontent-%COMP%]:hover {\n  background: #0f172a;\n}\n.icon-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.card-info[_ngcontent-%COMP%] {\n  padding: 1.1rem;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.category-tag[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6366f1;\n  margin-bottom: 0.25rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.35;\n  margin: 0 0 0.25rem 0;\n}\n.title-link[_ngcontent-%COMP%] {\n  color: #0f172a;\n  text-decoration: none;\n  transition: color 0.15s ease;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.title-link[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n}\n.card-author[_ngcontent-%COMP%] {\n  font-size: 0.825rem;\n  color: #64748b;\n  margin: 0 0 0.5rem 0;\n}\n.card-author[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #334155;\n  font-weight: 500;\n}\n.rating-row[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.format-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  margin-bottom: 0.85rem;\n}\n.chip-btn[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 500;\n  padding: 0.2rem 0.5rem;\n  border-radius: 6px;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.chip-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.chip-btn.active[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  border-color: #6366f1;\n  color: #4f46e5;\n  font-weight: 600;\n}\n.price-action-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: auto;\n  padding-top: 0.75rem;\n  border-top: 1px solid #f1f5f9;\n}\n.price-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.current-price[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.original-price[_ngcontent-%COMP%] {\n  font-size: 0.775rem;\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n.add-cart-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: #4f46e5;\n  color: #ffffff;\n  font-size: 0.825rem;\n  font-weight: 600;\n  padding: 0.5rem 0.9rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.15s ease, transform 0.15s ease;\n}\n.add-cart-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4338ca;\n  transform: translateY(-1px);\n}\n.add-cart-btn[_ngcontent-%COMP%]:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.cart-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n/*# sourceMappingURL=book-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookCardComponent, [{
    type: Component,
    args: [{ selector: "app-book-card", standalone: true, imports: [CommonModule, RouterLink, BookCoverComponent, RatingStarsComponent], template: `
    <article class="book-card">
      <div class="card-cover-section">
        <!-- Floating badges -->
        <div class="badge-group">
          @if (book().bestseller) {
            <span class="badge bestseller-badge">Bestseller</span>
          }
          @if (book().newRelease) {
            <span class="badge new-badge">New</span>
          }
        </div>

        <!-- Wishlist toggle button -->
        <button
          type="button"
          class="wishlist-btn"
          [class.active]="isWishlisted()"
          (click)="onToggleWishlist($event)"
          [attr.aria-label]="isWishlisted() ? 'Remove from wishlist' : 'Add to wishlist'"
        >
          <svg
            class="heart-icon"
            viewBox="0 0 24 24"
            [attr.fill]="isWishlisted() ? '#ef4444' : 'none'"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <!-- Book Cover Link -->
        <a [routerLink]="['/book', book().id]" class="cover-link">
          <app-book-cover [book]="book()" size="md" />
        </a>

        <!-- Quick View Overlay Button -->
        <button
          type="button"
          class="quick-view-overlay-btn"
          (click)="onQuickViewClick($event)"
        >
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Quick View
        </button>
      </div>

      <!-- Card Content Info -->
      <div class="card-info">
        <span class="category-tag">{{ book().category }}</span>

        <h3 class="card-title">
          <a [routerLink]="['/book', book().id]" class="title-link">{{ book().title }}</a>
        </h3>

        <p class="card-author">by <span>{{ book().author }}</span></p>

        <div class="rating-row">
          <app-rating-stars
            [rating]="book().rating"
            [reviewCount]="book().reviewCount"
          />
        </div>

        <!-- Format Selector Chips -->
        <div class="format-chips">
          @for (format of book().formats; track format) {
            <button
              type="button"
              class="chip-btn"
              [class.active]="selectedFormat() === format"
              (click)="selectFormat(format)"
            >
              {{ format }}
            </button>
          }
        </div>

        <!-- Price & Action Row -->
        <div class="price-action-row">
          <div class="price-box">
            <span class="current-price">\${{ currentPrice() | number: '1.2-2' }}</span>
            @if (book().originalPrice) {
              <span class="original-price">\${{ book().originalPrice | number: '1.2-2' }}</span>
            }
          </div>

          <button
            type="button"
            class="add-cart-btn"
            [disabled]="!book().inStock"
            (click)="onAddToCart()"
            [attr.aria-label]="'Add ' + book().title + ' to cart'"
          >
            @if (book().inStock) {
              <svg class="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <span>Add</span>
            } @else {
              <span>Out of Stock</span>
            }
          </button>
        </div>
      </div>
    </article>
  `, styles: ["/* angular:styles/component:css;0b6c572e7407e8e99a27be1d3f69b418ef14cdf46ec06989f3af4afe2cd56d45;C:/Users/0038EU744/.bob/playground/bookstore-app/src/app/components/book-card/book-card.component.ts */\n.book-card {\n  background: #ffffff;\n  border-radius: 14px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n  position: relative;\n  height: 100%;\n}\n.book-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.12);\n  border-color: #cbd5e1;\n}\n.card-cover-section {\n  position: relative;\n  background: #f8fafc;\n  padding: 1.5rem 1.25rem 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.badge-group {\n  position: absolute;\n  top: 0.75rem;\n  left: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  z-index: 5;\n}\n.badge {\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 0.2rem 0.55rem;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.bestseller-badge {\n  background: #f59e0b;\n  color: #ffffff;\n}\n.new-badge {\n  background: #10b981;\n  color: #ffffff;\n}\n.wishlist-btn {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 5;\n  transition:\n    background 0.15s ease,\n    transform 0.15s ease,\n    border-color 0.15s ease;\n  color: #64748b;\n}\n.wishlist-btn:hover {\n  background: #ffffff;\n  transform: scale(1.1);\n  color: #ef4444;\n}\n.wishlist-btn.active {\n  color: #ef4444;\n  border-color: #fca5a5;\n  background: #fef2f2;\n}\n.heart-icon {\n  width: 18px;\n  height: 18px;\n}\n.cover-link {\n  display: block;\n  width: 100%;\n  max-width: 180px;\n  text-decoration: none;\n}\n.quick-view-overlay-btn {\n  position: absolute;\n  bottom: 0.75rem;\n  left: 50%;\n  transform: translateX(-50%) translateY(20px);\n  opacity: 0;\n  background: rgba(15, 23, 42, 0.85);\n  color: #ffffff;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border: none;\n  border-radius: 9999px;\n  padding: 0.35rem 0.85rem;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  cursor: pointer;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  transition: opacity 0.2s ease, transform 0.2s ease;\n  z-index: 5;\n}\n.card-cover-section:hover .quick-view-overlay-btn {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.quick-view-overlay-btn:hover {\n  background: #0f172a;\n}\n.icon-sm {\n  width: 14px;\n  height: 14px;\n}\n.card-info {\n  padding: 1.1rem;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.category-tag {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6366f1;\n  margin-bottom: 0.25rem;\n}\n.card-title {\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.35;\n  margin: 0 0 0.25rem 0;\n}\n.title-link {\n  color: #0f172a;\n  text-decoration: none;\n  transition: color 0.15s ease;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.title-link:hover {\n  color: #4f46e5;\n}\n.card-author {\n  font-size: 0.825rem;\n  color: #64748b;\n  margin: 0 0 0.5rem 0;\n}\n.card-author span {\n  color: #334155;\n  font-weight: 500;\n}\n.rating-row {\n  margin-bottom: 0.75rem;\n}\n.format-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  margin-bottom: 0.85rem;\n}\n.chip-btn {\n  font-size: 0.7rem;\n  font-weight: 500;\n  padding: 0.2rem 0.5rem;\n  border-radius: 6px;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.chip-btn:hover {\n  background: #e2e8f0;\n}\n.chip-btn.active {\n  background: #eef2ff;\n  border-color: #6366f1;\n  color: #4f46e5;\n  font-weight: 600;\n}\n.price-action-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: auto;\n  padding-top: 0.75rem;\n  border-top: 1px solid #f1f5f9;\n}\n.price-box {\n  display: flex;\n  flex-direction: column;\n}\n.current-price {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.original-price {\n  font-size: 0.775rem;\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n.add-cart-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: #4f46e5;\n  color: #ffffff;\n  font-size: 0.825rem;\n  font-weight: 600;\n  padding: 0.5rem 0.9rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.15s ease, transform 0.15s ease;\n}\n.add-cart-btn:hover:not(:disabled) {\n  background: #4338ca;\n  transform: translateY(-1px);\n}\n.add-cart-btn:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.cart-icon {\n  width: 15px;\n  height: 15px;\n}\n/*# sourceMappingURL=book-card.component.css.map */\n"] }]
  }], null, { book: [{ type: Input, args: [{ isSignal: true, alias: "book", required: true }] }], quickView: [{ type: Output, args: ["quickView"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookCardComponent, { className: "BookCardComponent", filePath: "src/app/components/book-card/book-card.component.ts", lineNumber: 406 });
})();

export {
  BookCardComponent
};
//# sourceMappingURL=chunk-CPYKWMP6.js.map
