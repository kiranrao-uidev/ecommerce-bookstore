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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LANLAHU6.js";

// src/app/views/wishlist/wishlist.component.ts
var _c0 = (a0) => ["/book", a0];
var _forTrack0 = ($index, $item) => $item.id;
function WishlistComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function WishlistComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearAll());
    });
    \u0275\u0275text(1, " Clear Wishlist ");
    \u0275\u0275elementEnd();
  }
}
function WishlistComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 9);
    \u0275\u0275text(2, "\u{1F496}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Your wishlist is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Save books you love by clicking the heart icon on any book card.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 10);
    \u0275\u0275text(8, "Explore Books");
    \u0275\u0275elementEnd()();
  }
}
function WishlistComponent_Conditional_10_For_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const book_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(2, 1, book_r4.originalPrice, "1.2-2"));
  }
}
function WishlistComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "a", 13);
    \u0275\u0275element(3, "app-book-cover", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 15)(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 17)(8, "a", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 19);
    \u0275\u0275element(13, "app-rating-stars", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 21)(15, "span", 22);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, WishlistComponent_Conditional_10_For_2_Conditional_18_Template, 3, 4, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 24)(20, "button", 25);
    \u0275\u0275listener("click", function WishlistComponent_Conditional_10_For_2_Template_button_click_20_listener() {
      const book_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveToCart(book_r4));
    });
    \u0275\u0275text(21, " Move to Cart ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 26);
    \u0275\u0275listener("click", function WishlistComponent_Conditional_10_For_2_Template_button_click_22_listener() {
      const book_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(book_r4.id, book_r4.title));
    });
    \u0275\u0275text(23, " Remove ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const book_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, book_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("book", book_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(book_r4.category);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, book_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(book_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("by ", book_r4.author);
    \u0275\u0275advance(2);
    \u0275\u0275property("rating", book_r4.rating)("reviewCount", book_r4.reviewCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(17, 10, book_r4.price, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(book_r4.originalPrice ? 18 : -1);
  }
}
function WishlistComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, WishlistComponent_Conditional_10_For_2_Template, 24, 17, "div", 11, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.wishlistBooks());
  }
}
var WishlistComponent = class _WishlistComponent {
  wishlistService = inject(WishlistService);
  cartService = inject(CartService);
  wishlistBooks = this.wishlistService.wishlistBooks;
  remove(id, title) {
    this.wishlistService.removeFromWishlist(id, title);
  }
  clearAll() {
    this.wishlistService.clearWishlist();
  }
  moveToCart(book) {
    this.cartService.addToCart(book, 1, "Paperback");
    this.wishlistService.removeFromWishlist(book.id);
  }
  static \u0275fac = function WishlistComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WishlistComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WishlistComponent, selectors: [["app-wishlist"]], decls: 11, vars: 2, consts: [[1, "wishlist-page"], [1, "container"], [1, "wishlist-header"], [1, "page-title"], [1, "page-sub"], ["type", "button", 1, "btn-clear"], [1, "empty-wishlist-card"], [1, "wishlist-grid"], ["type", "button", 1, "btn-clear", 3, "click"], [1, "empty-heart-icon"], ["routerLink", "/", 1, "btn-explore"], [1, "wishlist-card"], [1, "card-cover-wrap"], [3, "routerLink"], ["size", "md", 3, "book"], [1, "card-body"], [1, "category-tag"], [1, "book-title"], [1, "book-author"], [1, "rating-box"], [3, "rating", "reviewCount"], [1, "price-row"], [1, "price-val"], [1, "orig-val"], [1, "card-actions"], ["type", "button", 1, "btn-move-cart", 3, "click"], ["type", "button", "title", "Remove from wishlist", 1, "btn-remove", 3, "click"]], template: function WishlistComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "My Wishlist");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Keep track of the books you want to read next");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, WishlistComponent_Conditional_8_Template, 2, 0, "button", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, WishlistComponent_Conditional_9_Template, 9, 0, "div", 6)(10, WishlistComponent_Conditional_10_Template, 3, 0, "div", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.wishlistBooks().length > 0 ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.wishlistBooks().length === 0 ? 9 : 10);
    }
  }, dependencies: [CommonModule, RouterLink, BookCoverComponent, RatingStarsComponent, DecimalPipe], styles: ["\n.wishlist-page[_ngcontent-%COMP%] {\n  padding: 2.5rem 0 4rem;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.wishlist-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.page-sub[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #64748b;\n  margin: 0;\n}\n.btn-clear[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #cbd5e1;\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: #64748b;\n  padding: 0.45rem 0.85rem;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #fca5a5;\n  color: #dc2626;\n}\n.empty-wishlist-card[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #ffffff;\n  border: 1px dashed #cbd5e1;\n  border-radius: 16px;\n  padding: 4.5rem 1.5rem;\n}\n.empty-heart-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  margin-bottom: 1rem;\n}\n.empty-wishlist-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.empty-wishlist-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n}\n.btn-explore[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #4f46e5;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.95rem;\n  padding: 0.8rem 1.75rem;\n  border-radius: 10px;\n  text-decoration: none;\n}\n.wishlist-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1.75rem;\n}\n.wishlist-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.wishlist-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);\n}\n.card-cover-wrap[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.category-tag[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #6366f1;\n  margin-bottom: 0.25rem;\n}\n.book-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem 0;\n  line-height: 1.3;\n}\n.book-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0f172a;\n  text-decoration: none;\n}\n.book-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n}\n.book-author[_ngcontent-%COMP%] {\n  font-size: 0.825rem;\n  color: #64748b;\n  margin: 0 0 0.6rem 0;\n}\n.rating-box[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.price-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.5rem;\n  margin-top: auto;\n  margin-bottom: 1rem;\n}\n.price-val[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.orig-val[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 0.5rem;\n}\n.btn-move-cart[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  color: #ffffff;\n  font-size: 0.825rem;\n  font-weight: 700;\n  padding: 0.55rem 0.85rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.btn-move-cart[_ngcontent-%COMP%]:hover {\n  background: #4338ca;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #ef4444;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.55rem 0.75rem;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n/*# sourceMappingURL=wishlist.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishlistComponent, [{
    type: Component,
    args: [{ selector: "app-wishlist", standalone: true, imports: [CommonModule, RouterLink, BookCoverComponent, RatingStarsComponent], template: `
    <div class="wishlist-page">
      <div class="container">
        <div class="wishlist-header">
          <div>
            <h1 class="page-title">My Wishlist</h1>
            <p class="page-sub">Keep track of the books you want to read next</p>
          </div>

          @if (wishlistBooks().length > 0) {
            <button type="button" class="btn-clear" (click)="clearAll()">
              Clear Wishlist
            </button>
          }
        </div>

        @if (wishlistBooks().length === 0) {
          <div class="empty-wishlist-card">
            <div class="empty-heart-icon">\u{1F496}</div>
            <h2>Your wishlist is empty</h2>
            <p>Save books you love by clicking the heart icon on any book card.</p>
            <a routerLink="/" class="btn-explore">Explore Books</a>
          </div>
        } @else {
          <div class="wishlist-grid">
            @for (book of wishlistBooks(); track book.id) {
              <div class="wishlist-card">
                <div class="card-cover-wrap">
                  <a [routerLink]="['/book', book.id]">
                    <app-book-cover [book]="book" size="md" />
                  </a>
                </div>

                <div class="card-body">
                  <span class="category-tag">{{ book.category }}</span>
                  <h3 class="book-title">
                    <a [routerLink]="['/book', book.id]">{{ book.title }}</a>
                  </h3>
                  <p class="book-author">by {{ book.author }}</p>

                  <div class="rating-box">
                    <app-rating-stars [rating]="book.rating" [reviewCount]="book.reviewCount" />
                  </div>

                  <div class="price-row">
                    <span class="price-val">\${{ book.price | number: '1.2-2' }}</span>
                    @if (book.originalPrice) {
                      <span class="orig-val">\${{ book.originalPrice | number: '1.2-2' }}</span>
                    }
                  </div>

                  <div class="card-actions">
                    <button
                      type="button"
                      class="btn-move-cart"
                      (click)="moveToCart(book)"
                    >
                      Move to Cart
                    </button>

                    <button
                      type="button"
                      class="btn-remove"
                      (click)="remove(book.id, book.title)"
                      title="Remove from wishlist"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            }
          </div>
        }
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;f013ccc20accf2b1f6cd5d24d47a908274777a9e7926a4e3e7ebb319a26c8483;C:/Users/0038EU744/.bob/playground/bookstore-app/src/app/views/wishlist/wishlist.component.ts */\n.wishlist-page {\n  padding: 2.5rem 0 4rem;\n}\n.container {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.wishlist-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.page-title {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.page-sub {\n  font-size: 0.9rem;\n  color: #64748b;\n  margin: 0;\n}\n.btn-clear {\n  background: none;\n  border: 1px solid #cbd5e1;\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: #64748b;\n  padding: 0.45rem 0.85rem;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.btn-clear:hover {\n  background: #fee2e2;\n  border-color: #fca5a5;\n  color: #dc2626;\n}\n.empty-wishlist-card {\n  text-align: center;\n  background: #ffffff;\n  border: 1px dashed #cbd5e1;\n  border-radius: 16px;\n  padding: 4.5rem 1.5rem;\n}\n.empty-heart-icon {\n  font-size: 3.5rem;\n  margin-bottom: 1rem;\n}\n.empty-wishlist-card h2 {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.empty-wishlist-card p {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n}\n.btn-explore {\n  display: inline-block;\n  background: #4f46e5;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.95rem;\n  padding: 0.8rem 1.75rem;\n  border-radius: 10px;\n  text-decoration: none;\n}\n.wishlist-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1.75rem;\n}\n.wishlist-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.wishlist-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);\n}\n.card-cover-wrap {\n  background: #f8fafc;\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-body {\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.category-tag {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #6366f1;\n  margin-bottom: 0.25rem;\n}\n.book-title {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem 0;\n  line-height: 1.3;\n}\n.book-title a {\n  color: #0f172a;\n  text-decoration: none;\n}\n.book-title a:hover {\n  color: #4f46e5;\n}\n.book-author {\n  font-size: 0.825rem;\n  color: #64748b;\n  margin: 0 0 0.6rem 0;\n}\n.rating-box {\n  margin-bottom: 0.75rem;\n}\n.price-row {\n  display: flex;\n  align-items: baseline;\n  gap: 0.5rem;\n  margin-top: auto;\n  margin-bottom: 1rem;\n}\n.price-val {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.orig-val {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n.card-actions {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 0.5rem;\n}\n.btn-move-cart {\n  background: #4f46e5;\n  color: #ffffff;\n  font-size: 0.825rem;\n  font-weight: 700;\n  padding: 0.55rem 0.85rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.btn-move-cart:hover {\n  background: #4338ca;\n}\n.btn-remove {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #ef4444;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.55rem 0.75rem;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.btn-remove:hover {\n  background: #fee2e2;\n}\n/*# sourceMappingURL=wishlist.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WishlistComponent, { className: "WishlistComponent", filePath: "src/app/views/wishlist/wishlist.component.ts", lineNumber: 308 });
})();
export {
  WishlistComponent
};
//# sourceMappingURL=chunk-2IWNOORA.js.map
