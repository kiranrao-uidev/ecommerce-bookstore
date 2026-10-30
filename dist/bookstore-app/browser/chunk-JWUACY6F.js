import {
  BookCardComponent
} from "./chunk-CPYKWMP6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RangeValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-ATB4PIY5.js";
import {
  BookCoverComponent,
  RatingStarsComponent
} from "./chunk-GNXI5LSB.js";
import {
  BookService,
  WishlistService
} from "./chunk-O4SUIOAB.js";
import {
  CartService,
  CommonModule,
  Component,
  DecimalPipe,
  HostListener,
  Input,
  Output,
  RouterLink,
  computed,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LANLAHU6.js";

// src/app/components/quick-view-modal/quick-view-modal.component.ts
var _c0 = (a0) => ["/book", a0];
function QuickViewModalComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r3.subtitle);
  }
}
function QuickViewModalComponent_Conditional_0_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function QuickViewModalComponent_Conditional_0_For_29_Template_button_click_0_listener() {
      const format_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedFormat.set(format_r5));
    });
    \u0275\u0275elementStart(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const format_r5 = ctx.$implicit;
    const b_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.selectedFormat() === format_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(format_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(5, 4, ctx_r1.computeFormatPrice(b_r3, format_r5), "1.2-2"));
  }
}
function QuickViewModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("click", function QuickViewModalComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function QuickViewModalComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 3);
    \u0275\u0275element(4, "path", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
    \u0275\u0275element(7, "app-book-cover", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8)(9, "span", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h2", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, QuickViewModalComponent_Conditional_0_Conditional_13_Template, 2, 1, "p", 11);
    \u0275\u0275elementStart(14, "p", 12);
    \u0275\u0275text(15, "by ");
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13);
    \u0275\u0275element(19, "app-rating-stars", 14);
    \u0275\u0275elementStart(20, "span", 15);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "p", 16);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 17)(25, "label", 18);
    \u0275\u0275text(26, "Select Format:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 19);
    \u0275\u0275repeaterCreate(28, QuickViewModalComponent_Conditional_0_For_29_Template, 6, 7, "button", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 21)(31, "div", 22)(32, "button", 23);
    \u0275\u0275listener("click", function QuickViewModalComponent_Conditional_0_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.decrementQty());
    });
    \u0275\u0275text(33, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 24);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 23);
    \u0275\u0275listener("click", function QuickViewModalComponent_Conditional_0_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.incrementQty());
    });
    \u0275\u0275text(37, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 25);
    \u0275\u0275listener("click", function QuickViewModalComponent_Conditional_0_Template_button_click_38_listener() {
      const b_r3 = \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToCart(b_r3));
    });
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 26);
    \u0275\u0275listener("click", function QuickViewModalComponent_Conditional_0_Template_button_click_41_listener() {
      const b_r3 = \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleWishlist(b_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 27);
    \u0275\u0275element(43, "path", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "div", 29)(45, "a", 30);
    \u0275\u0275listener("click", function QuickViewModalComponent_Conditional_0_Template_a_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(46, " View full specifications & customer reviews \u2192 ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const b_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", b_r3.title);
    \u0275\u0275advance(6);
    \u0275\u0275property("book", b_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r3.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r3.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(b_r3.subtitle ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(b_r3.author);
    \u0275\u0275advance(2);
    \u0275\u0275property("rating", b_r3.rating)("reviewCount", b_r3.reviewCount);
    \u0275\u0275advance();
    \u0275\u0275classProp("in-stock", b_r3.inStock);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r3.inStock ? "\u25CF In Stock (" + b_r3.stockCount + " available)" : "\u25CB Out of Stock", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r3.shortDescription);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(b_r3.formats);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.quantity());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !b_r3.inStock);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Add to Cart \u2022 $", \u0275\u0275pipeBind2(40, 19, ctx_r1.computeFormatPrice(b_r3, ctx_r1.selectedFormat()) * ctx_r1.quantity(), "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.isWishlisted(b_r3.id));
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", ctx_r1.isWishlisted(b_r3.id) ? "#ef4444" : "none");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c0, b_r3.id));
  }
}
var QuickViewModalComponent = class _QuickViewModalComponent {
  cartService = inject(CartService);
  wishlistService = inject(WishlistService);
  book = input(null, ...ngDevMode ? [{ debugName: "book" }] : (
    /* istanbul ignore next */
    []
  ));
  close = output();
  selectedFormat = signal("Paperback", ...ngDevMode ? [{ debugName: "selectedFormat" }] : (
    /* istanbul ignore next */
    []
  ));
  quantity = signal(1, ...ngDevMode ? [{ debugName: "quantity" }] : (
    /* istanbul ignore next */
    []
  ));
  computeFormatPrice(book, format) {
    if (format === "Hardcover")
      return Number((book.price * 1.25).toFixed(2));
    if (format === "eBook")
      return Number((book.price * 0.75).toFixed(2));
    if (format === "Audiobook")
      return Number((book.price * 0.9).toFixed(2));
    return book.price;
  }
  isWishlisted(bookId) {
    return this.wishlistService.isInWishlist(bookId);
  }
  toggleWishlist(book) {
    this.wishlistService.toggleWishlist(book);
  }
  incrementQty() {
    this.quantity.update((q) => q + 1);
  }
  decrementQty() {
    this.quantity.update((q) => Math.max(1, q - 1));
  }
  addToCart(book) {
    this.cartService.addToCart(book, this.quantity(), this.selectedFormat());
    this.onClose();
  }
  onClose() {
    this.close.emit();
    this.quantity.set(1);
  }
  onEscape() {
    this.onClose();
  }
  static \u0275fac = function QuickViewModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuickViewModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuickViewModalComponent, selectors: [["app-quick-view-modal"]], hostBindings: function QuickViewModalComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function QuickViewModalComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { book: [1, "book"] }, outputs: { close: "close" }, decls: 1, vars: 1, consts: [[1, "modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "modal-dialog"], ["type", "button", "aria-label", "Close modal", 1, "close-modal-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "modal-body-grid"], [1, "modal-cover-side"], ["size", "md", 3, "book"], [1, "modal-info-side"], [1, "category-pill"], [1, "book-modal-title"], [1, "book-modal-subtitle"], [1, "book-modal-author"], [1, "rating-box"], [3, "rating", "reviewCount"], [1, "stock-status"], [1, "book-desc"], [1, "format-section"], [1, "section-label"], [1, "format-buttons"], ["type", "button", 1, "format-btn", 3, "active"], [1, "action-section"], [1, "qty-picker"], ["type", "button", 1, "qty-btn", 3, "click"], [1, "qty-num"], ["type", "button", 1, "add-cart-large-btn", 3, "click", "disabled"], ["type", "button", "title", "Wishlist", 1, "wishlist-icon-btn", 3, "click"], ["viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"], [1, "modal-footer-link"], [3, "click", "routerLink"], ["type", "button", 1, "format-btn", 3, "click"], [1, "fmt-name"], [1, "fmt-price"]], template: function QuickViewModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, QuickViewModalComponent_Conditional_0_Template, 47, 24);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.book()) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [CommonModule, RouterLink, BookCoverComponent, RatingStarsComponent, DecimalPipe], styles: ["\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.65);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 1100;\n  animation: fadeIn 0.2s ease-out;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  max-width: 820px;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  z-index: 1101;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n@keyframes _ngcontent-%COMP%_scaleUp {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -46%) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n.close-modal-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #f1f5f9;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #64748b;\n  z-index: 10;\n  transition: all 0.15s ease;\n}\n.close-modal-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.close-modal-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.modal-body-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 2rem;\n  padding: 2rem;\n  overflow-y: auto;\n}\n.modal-cover-side[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 1.5rem;\n}\n.modal-info-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.category-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #4f46e5;\n  background: #eef2ff;\n  padding: 0.2rem 0.6rem;\n  border-radius: 9999px;\n  align-self: flex-start;\n  margin-bottom: 0.5rem;\n}\n.book-modal-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.25;\n  margin: 0 0 0.35rem 0;\n}\n.book-modal-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  margin: 0 0 0.5rem 0;\n}\n.book-modal-author[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #475569;\n  margin: 0 0 0.75rem 0;\n}\n.rating-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.stock-status[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #ef4444;\n}\n.stock-status.in-stock[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.book-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.55;\n  color: #475569;\n  margin: 0 0 1.25rem 0;\n}\n.format-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #1e293b;\n  display: block;\n  margin-bottom: 0.4rem;\n}\n.format-buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));\n  gap: 0.5rem;\n}\n.format-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.45rem 0.6rem;\n  border-radius: 8px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.format-btn[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n}\n.format-btn.active[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  border-color: #4f46e5;\n}\n.fmt-name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.fmt-price[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #64748b;\n}\n.format-btn.active[_ngcontent-%COMP%]   .fmt-name[_ngcontent-%COMP%], \n.format-btn.active[_ngcontent-%COMP%]   .fmt-price[_ngcontent-%COMP%] {\n  color: #4338ca;\n  font-weight: 700;\n}\n.action-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: auto;\n  padding-top: 1rem;\n}\n.qty-picker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  background: #f8fafc;\n}\n.qty-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  width: 32px;\n  height: 36px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #334155;\n  cursor: pointer;\n}\n.qty-num[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  padding: 0 0.5rem;\n  color: #0f172a;\n}\n.add-cart-large-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #4f46e5;\n  color: #ffffff;\n  border: none;\n  padding: 0.75rem 1.25rem;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.add-cart-large-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4338ca;\n}\n.add-cart-large-btn[_ngcontent-%COMP%]:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.wishlist-icon-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.15s ease;\n}\n.wishlist-icon-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #ef4444;\n}\n.wishlist-icon-btn.active[_ngcontent-%COMP%] {\n  color: #ef4444;\n  border-color: #fca5a5;\n  background: #fef2f2;\n}\n.wishlist-icon-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.modal-footer-link[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  text-align: right;\n}\n.modal-footer-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #4f46e5;\n  text-decoration: none;\n}\n.modal-footer-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 700px) {\n  .modal-body-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 1.25rem;\n    gap: 1.25rem;\n  }\n  .modal-cover-side[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=quick-view-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickViewModalComponent, [{
    type: Component,
    args: [{ selector: "app-quick-view-modal", standalone: true, imports: [CommonModule, RouterLink, BookCoverComponent, RatingStarsComponent], template: `
    @if (book(); as b) {
      <div class="modal-backdrop" (click)="onClose()"></div>

      <div class="modal-dialog" role="dialog" aria-modal="true" [attr.aria-label]="b.title">
        <button type="button" class="close-modal-btn" (click)="onClose()" aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="modal-body-grid">
          <!-- Cover Column -->
          <div class="modal-cover-side">
            <app-book-cover [book]="b" size="md" />
          </div>

          <!-- Info Column -->
          <div class="modal-info-side">
            <span class="category-pill">{{ b.category }}</span>

            <h2 class="book-modal-title">{{ b.title }}</h2>
            @if (b.subtitle) {
              <p class="book-modal-subtitle">{{ b.subtitle }}</p>
            }

            <p class="book-modal-author">by <strong>{{ b.author }}</strong></p>

            <div class="rating-box">
              <app-rating-stars [rating]="b.rating" [reviewCount]="b.reviewCount" />
              <span class="stock-status" [class.in-stock]="b.inStock">
                {{ b.inStock ? '\u25CF In Stock (' + b.stockCount + ' available)' : '\u25CB Out of Stock' }}
              </span>
            </div>

            <p class="book-desc">{{ b.shortDescription }}</p>

            <!-- Format selection -->
            <div class="format-section">
              <label class="section-label">Select Format:</label>
              <div class="format-buttons">
                @for (format of b.formats; track format) {
                  <button
                    type="button"
                    class="format-btn"
                    [class.active]="selectedFormat() === format"
                    (click)="selectedFormat.set(format)"
                  >
                    <span class="fmt-name">{{ format }}</span>
                    <span class="fmt-price">\${{ computeFormatPrice(b, format) | number: '1.2-2' }}</span>
                  </button>
                }
              </div>
            </div>

            <!-- Quantity & Actions -->
            <div class="action-section">
              <div class="qty-picker">
                <button type="button" (click)="decrementQty()" class="qty-btn">-</button>
                <span class="qty-num">{{ quantity() }}</span>
                <button type="button" (click)="incrementQty()" class="qty-btn">+</button>
              </div>

              <button
                type="button"
                class="add-cart-large-btn"
                [disabled]="!b.inStock"
                (click)="addToCart(b)"
              >
                Add to Cart \u2022 \${{ (computeFormatPrice(b, selectedFormat()) * quantity()) | number: '1.2-2' }}
              </button>

              <button
                type="button"
                class="wishlist-icon-btn"
                [class.active]="isWishlisted(b.id)"
                (click)="toggleWishlist(b)"
                title="Wishlist"
              >
                <svg viewBox="0 0 24 24" [attr.fill]="isWishlisted(b.id) ? '#ef4444' : 'none'" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>

            <!-- View full details link -->
            <div class="modal-footer-link">
              <a [routerLink]="['/book', b.id]" (click)="onClose()">
                View full specifications & customer reviews \u2192
              </a>
            </div>
          </div>
        </div>
      </div>
    }
  `, styles: ["/* angular:styles/component:css;0ce4908a967b8a275e425fa2f8ecf6b45a02ab9975c5b7f680217421d64dfb58;C:/Users/0038EU744/.bob/playground/bookstore-app/src/app/components/quick-view-modal/quick-view-modal.component.ts */\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.65);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 1100;\n  animation: fadeIn 0.2s ease-out;\n}\n.modal-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  max-width: 820px;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  z-index: 1101;\n  overflow: hidden;\n  animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n@keyframes scaleUp {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -46%) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n.close-modal-btn {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #f1f5f9;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #64748b;\n  z-index: 10;\n  transition: all 0.15s ease;\n}\n.close-modal-btn:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.close-modal-btn svg {\n  width: 18px;\n  height: 18px;\n}\n.modal-body-grid {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 2rem;\n  padding: 2rem;\n  overflow-y: auto;\n}\n.modal-cover-side {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 1.5rem;\n}\n.modal-info-side {\n  display: flex;\n  flex-direction: column;\n}\n.category-pill {\n  display: inline-block;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #4f46e5;\n  background: #eef2ff;\n  padding: 0.2rem 0.6rem;\n  border-radius: 9999px;\n  align-self: flex-start;\n  margin-bottom: 0.5rem;\n}\n.book-modal-title {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.25;\n  margin: 0 0 0.35rem 0;\n}\n.book-modal-subtitle {\n  font-size: 0.85rem;\n  color: #64748b;\n  margin: 0 0 0.5rem 0;\n}\n.book-modal-author {\n  font-size: 0.875rem;\n  color: #475569;\n  margin: 0 0 0.75rem 0;\n}\n.rating-box {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.stock-status {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #ef4444;\n}\n.stock-status.in-stock {\n  color: #10b981;\n}\n.book-desc {\n  font-size: 0.875rem;\n  line-height: 1.55;\n  color: #475569;\n  margin: 0 0 1.25rem 0;\n}\n.format-section {\n  margin-bottom: 1.25rem;\n}\n.section-label {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #1e293b;\n  display: block;\n  margin-bottom: 0.4rem;\n}\n.format-buttons {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));\n  gap: 0.5rem;\n}\n.format-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.45rem 0.6rem;\n  border-radius: 8px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.format-btn:hover {\n  border-color: #cbd5e1;\n}\n.format-btn.active {\n  background: #eef2ff;\n  border-color: #4f46e5;\n}\n.fmt-name {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.fmt-price {\n  font-size: 0.7rem;\n  color: #64748b;\n}\n.format-btn.active .fmt-name,\n.format-btn.active .fmt-price {\n  color: #4338ca;\n  font-weight: 700;\n}\n.action-section {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: auto;\n  padding-top: 1rem;\n}\n.qty-picker {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  background: #f8fafc;\n}\n.qty-btn {\n  background: none;\n  border: none;\n  width: 32px;\n  height: 36px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #334155;\n  cursor: pointer;\n}\n.qty-num {\n  font-size: 0.875rem;\n  font-weight: 700;\n  padding: 0 0.5rem;\n  color: #0f172a;\n}\n.add-cart-large-btn {\n  flex: 1;\n  background: #4f46e5;\n  color: #ffffff;\n  border: none;\n  padding: 0.75rem 1.25rem;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.add-cart-large-btn:hover:not(:disabled) {\n  background: #4338ca;\n}\n.add-cart-large-btn:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.wishlist-icon-btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.15s ease;\n}\n.wishlist-icon-btn:hover {\n  background: #f1f5f9;\n  color: #ef4444;\n}\n.wishlist-icon-btn.active {\n  color: #ef4444;\n  border-color: #fca5a5;\n  background: #fef2f2;\n}\n.wishlist-icon-btn svg {\n  width: 20px;\n  height: 20px;\n}\n.modal-footer-link {\n  margin-top: 1rem;\n  text-align: right;\n}\n.modal-footer-link a {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #4f46e5;\n  text-decoration: none;\n}\n.modal-footer-link a:hover {\n  text-decoration: underline;\n}\n@media (max-width: 700px) {\n  .modal-body-grid {\n    grid-template-columns: 1fr;\n    padding: 1.25rem;\n    gap: 1.25rem;\n  }\n  .modal-cover-side {\n    display: none;\n  }\n}\n/*# sourceMappingURL=quick-view-modal.component.css.map */\n"] }]
  }], null, { book: [{ type: Input, args: [{ isSignal: true, alias: "book", required: false }] }], close: [{ type: Output, args: ["close"] }], onEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuickViewModalComponent, { className: "QuickViewModalComponent", filePath: "src/app/components/quick-view-modal/quick-view-modal.component.ts", lineNumber: 431 });
})();

// src/app/views/home/home.component.ts
var _c02 = () => [0, 4.5, 4.8];
var _forTrack0 = ($index, $item) => $item.id;
function HomeComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275text(2, "Book of the Week");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 56);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 57)(8, "div", 58);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 59);
    \u0275\u0275listener("click", function HomeComponent_Conditional_18_Template_button_click_11_listener() {
      const heroBook_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openQuickView(heroBook_r2));
    });
    \u0275\u0275text(12, " Quick Preview ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const heroBook_r2 = ctx;
    \u0275\u0275styleProp("background", heroBook_r2.coverGradient);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(heroBook_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("by ", heroBook_r2.author);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(10, 5, heroBook_r2.price, "1.2-2"));
  }
}
function HomeComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function HomeComponent_For_23_Template_button_click_0_listener() {
      const cat_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCategory(cat_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.filterState().category === cat_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r5, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.categoryCounts()[cat_r5] || 0);
  }
}
function HomeComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function HomeComponent_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetFilters());
    });
    \u0275\u0275text(1, "Reset All");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function HomeComponent_For_53_Template_button_click_0_listener() {
      const rate_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setMinRating(rate_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rate_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.filterState().minRating === rate_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rate_r8 === 0 ? "All Ratings" : rate_r8 + "\u2605 & above", " ");
  }
}
function HomeComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " in ");
    \u0275\u0275elementStart(1, "em");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.filterState().category);
  }
}
function HomeComponent_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 64);
    \u0275\u0275text(2, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No books match your criteria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Try clearing some filters or searching for different keywords.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 65);
    \u0275\u0275listener("click", function HomeComponent_Conditional_93_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetFilters());
    });
    \u0275\u0275text(8, " Reset Filters ");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_94_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-book-card", 66);
    \u0275\u0275listener("quickView", function HomeComponent_Conditional_94_For_2_Template_app_book_card_quickView_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openQuickView($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const book_r11 = ctx.$implicit;
    \u0275\u0275property("book", book_r11);
  }
}
function HomeComponent_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_94_For_2_Template, 1, 1, "app-book-card", 52, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.books());
  }
}
function HomeComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-quick-view-modal", 67);
    \u0275\u0275listener("close", function HomeComponent_Conditional_95_Template_app_quick_view_modal_close_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeQuickView());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("book", ctx);
  }
}
var HomeComponent = class _HomeComponent {
  bookService = inject(BookService);
  categories = this.bookService.allCategories;
  categoryCounts = this.bookService.categoryCounts;
  filterState = this.bookService.filterState;
  books = this.bookService.filteredBooks;
  featuredHeroBook = computed(() => {
    return this.bookService.featuredBooks()[0] || this.bookService.allBooks()[0];
  }, ...ngDevMode ? [{ debugName: "featuredHeroBook" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedQuickViewBook = signal(null, ...ngDevMode ? [{ debugName: "selectedQuickViewBook" }] : (
    /* istanbul ignore next */
    []
  ));
  isFiltered = computed(() => {
    const s = this.filterState();
    return s.category !== "All" || s.searchQuery !== "" || s.maxPrice < 100 || s.minRating > 0 || s.inStockOnly;
  }, ...ngDevMode ? [{ debugName: "isFiltered" }] : (
    /* istanbul ignore next */
    []
  ));
  selectCategory(cat) {
    this.bookService.setCategory(cat);
  }
  onSearchChange(val) {
    this.bookService.setSearchQuery(val);
  }
  onMaxPriceChange(val) {
    this.bookService.setPriceRange(0, Number(val));
  }
  setMinRating(rate) {
    this.bookService.setMinRating(rate);
  }
  toggleInStock(e) {
    const input2 = e.target;
    this.bookService.setInStockOnly(input2.checked);
  }
  onSortChange(sortBy) {
    this.bookService.setSortBy(sortBy);
  }
  resetFilters() {
    this.bookService.resetFilters();
  }
  scrollToCatalog() {
    document.getElementById("catalog-section")?.scrollIntoView({ behavior: "smooth" });
  }
  openQuickView(book) {
    this.selectedQuickViewBook.set(book);
  }
  closeQuickView() {
    this.selectedQuickViewBook.set(null);
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 96, vars: 13, consts: [[1, "hero-banner"], [1, "hero-container"], [1, "hero-text-content"], [1, "hero-badge"], [1, "hero-title"], [1, "hero-desc"], [1, "hero-actions"], ["type", "button", 1, "btn-primary-hero", 3, "click"], [1, "hero-perks"], [1, "perk-item"], [1, "hero-featured-card"], [1, "spotlight-card", 3, "background"], [1, "categories-strip"], [1, "catalog-container"], [1, "category-pills"], ["type", "button", 1, "pill-btn", 3, "active"], ["id", "catalog-section", 1, "catalog-section"], [1, "catalog-container", "layout-grid"], [1, "filter-sidebar"], [1, "filter-box"], [1, "filter-box-header"], [1, "filter-main-title"], ["type", "button", 1, "reset-btn"], [1, "filter-group"], ["for", "search-input", 1, "filter-label"], ["id", "search-input", "type", "text", "placeholder", "Title, author, tags...", 1, "filter-text-input", 3, "ngModelChange", "ngModel"], [1, "filter-label-row"], [1, "filter-label"], [1, "price-val"], ["type", "range", "min", "10", "max", "100", "step", "5", 1, "range-slider", 3, "ngModelChange", "ngModel"], [1, "range-labels"], [1, "rating-filter-options"], ["type", "button", 1, "rating-opt-btn", 3, "active"], [1, "filter-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", 3, "change", "checked"], [1, "sidebar-promo-card"], [1, "promo-badge"], [1, "catalog-content"], [1, "catalog-top-bar"], [1, "results-count"], [1, "sort-wrapper"], ["for", "sort-select", 1, "sort-label"], ["id", "sort-select", 1, "sort-dropdown", 3, "ngModelChange", "ngModel"], ["value", "featured"], ["value", "price-asc"], ["value", "price-desc"], ["value", "rating"], ["value", "newest"], ["value", "title"], [1, "no-books-found"], [1, "books-grid"], [3, "book"], [1, "spotlight-card"], [1, "spotlight-tag"], [1, "spotlight-title"], [1, "spotlight-author"], [1, "spotlight-price-row"], [1, "spotlight-price"], ["type", "button", 1, "spotlight-btn", 3, "click"], ["type", "button", 1, "pill-btn", 3, "click"], [1, "pill-count"], ["type", "button", 1, "reset-btn", 3, "click"], ["type", "button", 1, "rating-opt-btn", 3, "click"], [1, "no-results-icon"], ["type", "button", 1, "btn-reset-filters", 3, "click"], [3, "quickView", "book"], [3, "close", "book"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "Curated Book Collection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6, "Expand Your Horizons with Every Page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " Discover bestselling computer science architectural patterns, epic science fiction tales, transformative mindset literature, and high-impact business leadership books. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6)(10, "button", 7);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_10_listener() {
        return ctx.scrollToCatalog();
      });
      \u0275\u0275text(11, " Explore Catalog ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8)(13, "span", 9);
      \u0275\u0275text(14, "\u2713 Free Shipping Over $45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 9);
      \u0275\u0275text(16, "\u2713 100% Original Editions");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 10);
      \u0275\u0275conditionalCreate(18, HomeComponent_Conditional_18_Template, 13, 8, "div", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "section", 12)(20, "div", 13)(21, "div", 14);
      \u0275\u0275repeaterCreate(22, HomeComponent_For_23_Template, 4, 4, "button", 15, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "main", 16)(25, "div", 17)(26, "aside", 18)(27, "div", 19)(28, "div", 20)(29, "h2", 21);
      \u0275\u0275text(30, "Filter Books");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(31, HomeComponent_Conditional_31_Template, 2, 0, "button", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 23)(33, "label", 24);
      \u0275\u0275text(34, "Search Keywords");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "input", 25);
      \u0275\u0275listener("ngModelChange", function HomeComponent_Template_input_ngModelChange_35_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 23)(37, "div", 26)(38, "label", 27);
      \u0275\u0275text(39, "Max Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 28);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "input", 29);
      \u0275\u0275listener("ngModelChange", function HomeComponent_Template_input_ngModelChange_42_listener($event) {
        return ctx.onMaxPriceChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 30)(44, "span");
      \u0275\u0275text(45, "$10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span");
      \u0275\u0275text(47, "$100");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 23)(49, "label", 27);
      \u0275\u0275text(50, "Minimum Rating");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 31);
      \u0275\u0275repeaterCreate(52, HomeComponent_For_53_Template, 2, 3, "button", 32, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 33)(55, "label", 34)(56, "input", 35);
      \u0275\u0275listener("change", function HomeComponent_Template_input_change_56_listener($event) {
        return ctx.toggleInStock($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "In Stock Only");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(59, "div", 36)(60, "div", 37);
      \u0275\u0275text(61, "Limited Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "h3");
      \u0275\u0275text(63, "Save 20% on Orders $50+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p");
      \u0275\u0275text(65, "Use code ");
      \u0275\u0275elementStart(66, "strong");
      \u0275\u0275text(67, "READMORE20");
      \u0275\u0275elementEnd();
      \u0275\u0275text(68, " at checkout.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "section", 38)(70, "div", 39)(71, "div", 40);
      \u0275\u0275text(72, " Showing ");
      \u0275\u0275elementStart(73, "strong");
      \u0275\u0275text(74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(75);
      \u0275\u0275conditionalCreate(76, HomeComponent_Conditional_76_Template, 3, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 41)(78, "label", 42);
      \u0275\u0275text(79, "Sort by:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "select", 43);
      \u0275\u0275listener("ngModelChange", function HomeComponent_Template_select_ngModelChange_80_listener($event) {
        return ctx.onSortChange($event);
      });
      \u0275\u0275elementStart(81, "option", 44);
      \u0275\u0275text(82, "Featured First");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "option", 45);
      \u0275\u0275text(84, "Price: Low to High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "option", 46);
      \u0275\u0275text(86, "Price: High to Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "option", 47);
      \u0275\u0275text(88, "Highest Rated");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "option", 48);
      \u0275\u0275text(90, "Newest Releases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "option", 49);
      \u0275\u0275text(92, "Alphabetical (A-Z)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(93, HomeComponent_Conditional_93_Template, 9, 0, "div", 50)(94, HomeComponent_Conditional_94_Template, 3, 0, "div", 51);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(95, HomeComponent_Conditional_95_Template, 1, 1, "app-quick-view-modal", 52);
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_13_0;
      \u0275\u0275advance(18);
      \u0275\u0275conditional((tmp_0_0 = ctx.featuredHeroBook()) ? 18 : -1, tmp_0_0);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.isFiltered() ? 31 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.filterState().searchQuery);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("$", ctx.filterState().maxPrice);
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.filterState().maxPrice);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(12, _c02));
      \u0275\u0275advance(4);
      \u0275\u0275property("checked", ctx.filterState().inStockOnly);
      \u0275\u0275advance(18);
      \u0275\u0275textInterpolate(ctx.books().length);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.books().length === 1 ? "book" : "books", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.filterState().category !== "All" ? 76 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.filterState().sortBy);
      \u0275\u0275advance(13);
      \u0275\u0275conditional(ctx.books().length === 0 ? 93 : 94);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_13_0 = ctx.selectedQuickViewBook()) ? 95 : -1, tmp_13_0);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, RangeValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, BookCardComponent, QuickViewModalComponent, DecimalPipe], styles: ['\n.hero-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e1b4b 60%,\n      #312e81 100%);\n  color: #ffffff;\n  padding: 3.5rem 1.5rem;\n  position: relative;\n  overflow: hidden;\n}\n.hero-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 3rem;\n  align-items: center;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  background: rgba(99, 102, 241, 0.25);\n  color: #a5b4fc;\n  padding: 0.3rem 0.8rem;\n  border-radius: 9999px;\n  border: 1px solid rgba(165, 180, 252, 0.3);\n  margin-bottom: 1rem;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n  font-weight: 800;\n  line-height: 1.15;\n  letter-spacing: -0.03em;\n  margin: 0 0 1rem 0;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.hero-desc[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: #cbd5e1;\n  line-height: 1.6;\n  margin: 0 0 1.75rem 0;\n  max-width: 580px;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.btn-primary-hero[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  color: #ffffff;\n  font-size: 0.95rem;\n  font-weight: 700;\n  padding: 0.85rem 1.75rem;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.4);\n  transition: all 0.2s ease;\n}\n.btn-primary-hero[_ngcontent-%COMP%]:hover {\n  background: #4338ca;\n  transform: translateY(-2px);\n}\n.hero-perks[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.825rem;\n  color: #a5b4fc;\n}\n.spotlight-card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-radius: 16px;\n  color: #ffffff;\n  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.4);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 240px;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n}\n.spotlight-tag[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 0.25rem 0.6rem;\n  border-radius: 6px;\n  align-self: flex-start;\n}\n.spotlight-title[_ngcontent-%COMP%] {\n  font-family: Georgia, serif;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0.85rem 0 0.25rem 0;\n  line-height: 1.25;\n}\n.spotlight-author[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  opacity: 0.9;\n  margin: 0 0 1.25rem 0;\n}\n.spotlight-price-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: auto;\n}\n.spotlight-price[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 800;\n}\n.spotlight-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  color: #0f172a;\n  font-size: 0.825rem;\n  font-weight: 700;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.spotlight-btn[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  transform: scale(1.05);\n}\n.categories-strip[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 1rem 0;\n}\n.catalog-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.category-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  overflow-x: auto;\n  padding-bottom: 0.25rem;\n}\n.pill-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.45rem 0.9rem;\n  border-radius: 9999px;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.15s ease;\n}\n.pill-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #1e293b;\n}\n.pill-btn.active[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  border-color: #4f46e5;\n  color: #ffffff;\n}\n.pill-count[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  background: rgba(0, 0, 0, 0.08);\n  padding: 0.1rem 0.4rem;\n  border-radius: 9999px;\n}\n.pill-btn.active[_ngcontent-%COMP%]   .pill-count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n}\n.catalog-section[_ngcontent-%COMP%] {\n  padding: 2.5rem 0;\n}\n.layout-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 2rem;\n  align-items: flex-start;\n}\n.filter-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.25rem;\n}\n.filter-box-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.filter-main-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.reset-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #ef4444;\n  cursor: pointer;\n}\n.filter-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #334155;\n  margin-bottom: 0.4rem;\n  display: block;\n}\n.filter-label-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.price-val[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #4f46e5;\n}\n.filter-text-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  border-radius: 6px;\n  border: 1px solid #cbd5e1;\n  font-size: 0.825rem;\n  outline: none;\n}\n.filter-text-input[_ngcontent-%COMP%]:focus {\n  border-color: #4f46e5;\n}\n.range-slider[_ngcontent-%COMP%] {\n  width: 100%;\n  accent-color: #4f46e5;\n  cursor: pointer;\n}\n.range-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.7rem;\n  color: #94a3b8;\n}\n.rating-filter-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.rating-opt-btn[_ngcontent-%COMP%] {\n  text-align: left;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 0.4rem 0.6rem;\n  border-radius: 6px;\n  font-size: 0.775rem;\n  font-weight: 500;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.rating-opt-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.rating-opt-btn.active[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  border-color: #4f46e5;\n  color: #4338ca;\n  font-weight: 700;\n}\n.checkbox-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: #334155;\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #4f46e5;\n}\n.sidebar-promo-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e1b4b 0%,\n      #312e81 100%);\n  color: #ffffff;\n  padding: 1.25rem;\n  border-radius: 12px;\n  margin-top: 1.5rem;\n}\n.promo-badge[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  background: #f59e0b;\n  color: #0f172a;\n  padding: 0.15rem 0.45rem;\n  border-radius: 4px;\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n.sidebar-promo-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  margin: 0 0 0.35rem 0;\n}\n.sidebar-promo-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #c7d2fe;\n  margin: 0;\n}\n.catalog-top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  background: #ffffff;\n  padding: 0.75rem 1.25rem;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n}\n.results-count[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #475569;\n}\n.sort-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.sort-label[_ngcontent-%COMP%] {\n  font-size: 0.825rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.sort-dropdown[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.75rem;\n  border-radius: 6px;\n  border: 1px solid #cbd5e1;\n  font-size: 0.825rem;\n  background: #ffffff;\n  outline: none;\n  cursor: pointer;\n}\n.books-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 1.5rem;\n}\n.no-books-found[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #ffffff;\n  border: 1px dashed #cbd5e1;\n  border-radius: 12px;\n  padding: 3.5rem 1.5rem;\n}\n.no-results-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 0.75rem;\n}\n.no-books-found[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.4rem 0;\n}\n.no-books-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0 0 1.25rem 0;\n}\n.btn-reset-filters[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  color: #ffffff;\n  font-size: 0.85rem;\n  font-weight: 600;\n  padding: 0.6rem 1.25rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n}\n@media (max-width: 900px) {\n  .layout-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, FormsModule, BookCardComponent, QuickViewModalComponent], template: `
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
              <span class="perk-item">\u2713 Free Shipping Over $45</span>
              <span class="perk-item">\u2713 100% Original Editions</span>
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
                    {{ rate === 0 ? 'All Ratings' : rate + '\u2605 & above' }}
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
              <div class="no-results-icon">\u{1F4DA}</div>
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
  `, styles: ['/* angular:styles/component:css;39a2839a9d2a440e646f6384f8b2e94ace40fcec2163c0e455bdbee1c33af64c;C:/Users/0038EU744/.bob/playground/bookstore-app/src/app/views/home/home.component.ts */\n.hero-banner {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e1b4b 60%,\n      #312e81 100%);\n  color: #ffffff;\n  padding: 3.5rem 1.5rem;\n  position: relative;\n  overflow: hidden;\n}\n.hero-container {\n  max-width: 1280px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 3rem;\n  align-items: center;\n}\n.hero-badge {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  background: rgba(99, 102, 241, 0.25);\n  color: #a5b4fc;\n  padding: 0.3rem 0.8rem;\n  border-radius: 9999px;\n  border: 1px solid rgba(165, 180, 252, 0.3);\n  margin-bottom: 1rem;\n}\n.hero-title {\n  font-size: 2.75rem;\n  font-weight: 800;\n  line-height: 1.15;\n  letter-spacing: -0.03em;\n  margin: 0 0 1rem 0;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.hero-desc {\n  font-size: 1.05rem;\n  color: #cbd5e1;\n  line-height: 1.6;\n  margin: 0 0 1.75rem 0;\n  max-width: 580px;\n}\n.hero-actions {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.btn-primary-hero {\n  background: #4f46e5;\n  color: #ffffff;\n  font-size: 0.95rem;\n  font-weight: 700;\n  padding: 0.85rem 1.75rem;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.4);\n  transition: all 0.2s ease;\n}\n.btn-primary-hero:hover {\n  background: #4338ca;\n  transform: translateY(-2px);\n}\n.hero-perks {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.825rem;\n  color: #a5b4fc;\n}\n.spotlight-card {\n  padding: 2rem;\n  border-radius: 16px;\n  color: #ffffff;\n  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.4);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 240px;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n}\n.spotlight-tag {\n  font-size: 0.7rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 0.25rem 0.6rem;\n  border-radius: 6px;\n  align-self: flex-start;\n}\n.spotlight-title {\n  font-family: Georgia, serif;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0.85rem 0 0.25rem 0;\n  line-height: 1.25;\n}\n.spotlight-author {\n  font-size: 0.85rem;\n  opacity: 0.9;\n  margin: 0 0 1.25rem 0;\n}\n.spotlight-price-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: auto;\n}\n.spotlight-price {\n  font-size: 1.35rem;\n  font-weight: 800;\n}\n.spotlight-btn {\n  background: rgba(255, 255, 255, 0.95);\n  color: #0f172a;\n  font-size: 0.825rem;\n  font-weight: 700;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.spotlight-btn:hover {\n  background: #ffffff;\n  transform: scale(1.05);\n}\n.categories-strip {\n  background: #ffffff;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 1rem 0;\n}\n.catalog-container {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.category-pills {\n  display: flex;\n  gap: 0.5rem;\n  overflow-x: auto;\n  padding-bottom: 0.25rem;\n}\n.pill-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.45rem 0.9rem;\n  border-radius: 9999px;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.15s ease;\n}\n.pill-btn:hover {\n  background: #e2e8f0;\n  color: #1e293b;\n}\n.pill-btn.active {\n  background: #4f46e5;\n  border-color: #4f46e5;\n  color: #ffffff;\n}\n.pill-count {\n  font-size: 0.7rem;\n  background: rgba(0, 0, 0, 0.08);\n  padding: 0.1rem 0.4rem;\n  border-radius: 9999px;\n}\n.pill-btn.active .pill-count {\n  background: rgba(255, 255, 255, 0.25);\n}\n.catalog-section {\n  padding: 2.5rem 0;\n}\n.layout-grid {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 2rem;\n  align-items: flex-start;\n}\n.filter-box {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.25rem;\n}\n.filter-box-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.filter-main-title {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.reset-btn {\n  background: none;\n  border: none;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #ef4444;\n  cursor: pointer;\n}\n.filter-group {\n  margin-bottom: 1.25rem;\n}\n.filter-label {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #334155;\n  margin-bottom: 0.4rem;\n  display: block;\n}\n.filter-label-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.price-val {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #4f46e5;\n}\n.filter-text-input {\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  border-radius: 6px;\n  border: 1px solid #cbd5e1;\n  font-size: 0.825rem;\n  outline: none;\n}\n.filter-text-input:focus {\n  border-color: #4f46e5;\n}\n.range-slider {\n  width: 100%;\n  accent-color: #4f46e5;\n  cursor: pointer;\n}\n.range-labels {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.7rem;\n  color: #94a3b8;\n}\n.rating-filter-options {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.rating-opt-btn {\n  text-align: left;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 0.4rem 0.6rem;\n  border-radius: 6px;\n  font-size: 0.775rem;\n  font-weight: 500;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.rating-opt-btn:hover {\n  background: #f1f5f9;\n}\n.rating-opt-btn.active {\n  background: #eef2ff;\n  border-color: #4f46e5;\n  color: #4338ca;\n  font-weight: 700;\n}\n.checkbox-group {\n  margin-bottom: 0;\n}\n.checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: #334155;\n  cursor: pointer;\n}\n.checkbox-label input {\n  accent-color: #4f46e5;\n}\n.sidebar-promo-card {\n  background:\n    linear-gradient(\n      135deg,\n      #1e1b4b 0%,\n      #312e81 100%);\n  color: #ffffff;\n  padding: 1.25rem;\n  border-radius: 12px;\n  margin-top: 1.5rem;\n}\n.promo-badge {\n  font-size: 0.65rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  background: #f59e0b;\n  color: #0f172a;\n  padding: 0.15rem 0.45rem;\n  border-radius: 4px;\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n.sidebar-promo-card h3 {\n  font-size: 0.95rem;\n  font-weight: 700;\n  margin: 0 0 0.35rem 0;\n}\n.sidebar-promo-card p {\n  font-size: 0.8rem;\n  color: #c7d2fe;\n  margin: 0;\n}\n.catalog-top-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  background: #ffffff;\n  padding: 0.75rem 1.25rem;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n}\n.results-count {\n  font-size: 0.875rem;\n  color: #475569;\n}\n.sort-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.sort-label {\n  font-size: 0.825rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.sort-dropdown {\n  padding: 0.4rem 0.75rem;\n  border-radius: 6px;\n  border: 1px solid #cbd5e1;\n  font-size: 0.825rem;\n  background: #ffffff;\n  outline: none;\n  cursor: pointer;\n}\n.books-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 1.5rem;\n}\n.no-books-found {\n  text-align: center;\n  background: #ffffff;\n  border: 1px dashed #cbd5e1;\n  border-radius: 12px;\n  padding: 3.5rem 1.5rem;\n}\n.no-results-icon {\n  font-size: 3rem;\n  margin-bottom: 0.75rem;\n}\n.no-books-found h3 {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.4rem 0;\n}\n.no-books-found p {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0 0 1.25rem 0;\n}\n.btn-reset-filters {\n  background: #4f46e5;\n  color: #ffffff;\n  font-size: 0.85rem;\n  font-weight: 600;\n  padding: 0.6rem 1.25rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n}\n@media (max-width: 900px) {\n  .layout-grid {\n    grid-template-columns: 1fr;\n  }\n  .hero-container {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .hero-title {\n    font-size: 2.1rem;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/views/home/home.component.ts", lineNumber: 688 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-JWUACY6F.js.map
