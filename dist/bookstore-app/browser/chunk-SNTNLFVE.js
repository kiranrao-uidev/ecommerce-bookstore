import {
  BookCardComponent
} from "./chunk-CPYKWMP6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
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
  ActivatedRoute,
  CartService,
  CommonModule,
  Component,
  DecimalPipe,
  NotificationService,
  RouterLink,
  computed,
  inject,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LANLAHU6.js";

// src/app/views/book-detail/book-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function BookDetailComponent_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Bestseller");
    \u0275\u0275elementEnd();
  }
}
function BookDetailComponent_Conditional_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "New Release");
    \u0275\u0275elementEnd();
  }
}
function BookDetailComponent_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r2.subtitle);
  }
}
function BookDetailComponent_Conditional_0_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 58);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r2 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(2, 2, b_r2.originalPrice, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Save $", \u0275\u0275pipeBind2(5, 5, b_r2.originalPrice - ctx_r2.currentPrice(), "1.2-2"));
  }
}
function BookDetailComponent_Conditional_0_For_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function BookDetailComponent_Conditional_0_For_58_Template_button_click_0_listener() {
      const fmt_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectedFormat.set(fmt_r5));
    });
    \u0275\u0275elementStart(1, "span", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 61);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fmt_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.selectedFormat() === fmt_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fmt_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(5, 4, ctx_r2.getFormatPrice(fmt_r5), "1.2-2"));
  }
}
function BookDetailComponent_Conditional_0_For_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r6);
  }
}
function BookDetailComponent_Conditional_0_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "h3", 62);
    \u0275\u0275text(2, "About this Edition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 63);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(b_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r2.shortDescription);
  }
}
function BookDetailComponent_Conditional_0_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "table", 64)(2, "tbody")(3, "tr")(4, "th");
    \u0275\u0275text(5, "ISBN-13");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "tr")(9, "th");
    \u0275\u0275text(10, "Page Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tr")(14, "th");
    \u0275\u0275text(15, "Publisher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "tr")(19, "th");
    \u0275\u0275text(20, "Publication Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "tr")(24, "th");
    \u0275\u0275text(25, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "tr")(29, "th");
    \u0275\u0275text(30, "Available Formats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const b_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(b_r2.isbn);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", b_r2.pages, " pages");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(b_r2.publisher);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(b_r2.publishedDate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(b_r2.language);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(b_r2.formats.join(", "));
  }
}
function BookDetailComponent_Conditional_0_Conditional_92_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 67);
    \u0275\u0275text(1, "No customer reviews yet. Be the first to share your thoughts!");
    \u0275\u0275elementEnd();
  }
}
function BookDetailComponent_Conditional_0_Conditional_92_Conditional_6_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86);
    \u0275\u0275text(1, "\u2713 Verified Reader");
    \u0275\u0275elementEnd();
  }
}
function BookDetailComponent_Conditional_0_Conditional_92_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "div", 83)(3, "div", 84);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "span", 85);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, BookDetailComponent_Conditional_0_Conditional_92_Conditional_6_For_2_Conditional_8_Template, 2, 0, "span", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 87);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 88);
    \u0275\u0275element(12, "app-rating-stars", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 90);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rev_r8 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(rev_r8.userName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(rev_r8.userName);
    \u0275\u0275advance();
    \u0275\u0275conditional(rev_r8.verifiedPurchase ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rev_r8.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("rating", rev_r8.rating)("showScore", false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rev_r8.comment);
  }
}
function BookDetailComponent_Conditional_0_Conditional_92_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275repeaterCreate(1, BookDetailComponent_Conditional_0_Conditional_92_Conditional_6_For_2_Template, 15, 7, "div", 81, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.reviews());
  }
}
function BookDetailComponent_Conditional_0_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 65)(2, "div", 66)(3, "h3", 62);
    \u0275\u0275text(4, "Reader Reviews");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, BookDetailComponent_Conditional_0_Conditional_92_Conditional_5_Template, 2, 0, "p", 67)(6, BookDetailComponent_Conditional_0_Conditional_92_Conditional_6_Template, 3, 0, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 69)(8, "div", 70)(9, "h4", 71);
    \u0275\u0275text(10, "Write a Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 72);
    \u0275\u0275text(12, "Share your feedback with fellow book lovers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "form", 73);
    \u0275\u0275listener("submit", function BookDetailComponent_Conditional_0_Conditional_92_Template_form_submit_13_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSubmitReview($event));
    });
    \u0275\u0275elementStart(14, "div", 74)(15, "label");
    \u0275\u0275text(16, "Your Rating:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "app-rating-stars", 75);
    \u0275\u0275listener("ratingChange", function BookDetailComponent_Conditional_0_Conditional_92_Template_app_rating_stars_ratingChange_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.newRating = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 74)(19, "label", 76);
    \u0275\u0275text(20, "Your Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function BookDetailComponent_Conditional_0_Conditional_92_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newAuthor, $event) || (ctx_r2.newAuthor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 74)(23, "label", 78);
    \u0275\u0275text(24, "Review Content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "textarea", 79);
    \u0275\u0275twoWayListener("ngModelChange", function BookDetailComponent_Conditional_0_Conditional_92_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newComment, $event) || (ctx_r2.newComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 80);
    \u0275\u0275text(27, " Publish Review ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.reviews().length === 0 ? 5 : 6);
    \u0275\u0275advance(12);
    \u0275\u0275property("rating", ctx_r2.newRating)("interactive", true)("showScore", false);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newAuthor);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newComment);
  }
}
function BookDetailComponent_Conditional_0_Conditional_93_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-book-card", 93);
  }
  if (rf & 2) {
    const rel_r9 = ctx.$implicit;
    \u0275\u0275property("book", rel_r9);
  }
}
function BookDetailComponent_Conditional_0_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 56)(1, "h2", 91);
    \u0275\u0275text(2, "You May Also Like");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 92);
    \u0275\u0275repeaterCreate(4, BookDetailComponent_Conditional_0_Conditional_93_For_5_Template, 1, 1, "app-book-card", 93, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.relatedBooks());
  }
}
function BookDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 2)(2, "div", 3)(3, "a", 4);
    \u0275\u0275text(4, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 6);
    \u0275\u0275listener("click", function BookDetailComponent_Conditional_0_Template_a_click_7_listener() {
      const b_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByCategory(b_r2.category));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 5);
    \u0275\u0275text(10, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "div", 11);
    \u0275\u0275element(17, "app-book-cover", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13)(19, "span", 14);
    \u0275\u0275text(20, "\u2713 Guaranteed Authentic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 14);
    \u0275\u0275text(22, "\u2713 Fast Dispatch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 14);
    \u0275\u0275text(24, "\u2713 30-Day Easy Returns");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "span", 17);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, BookDetailComponent_Conditional_0_Conditional_29_Template, 2, 0, "span", 18);
    \u0275\u0275conditionalCreate(30, BookDetailComponent_Conditional_0_Conditional_30_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "h1", 20);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, BookDetailComponent_Conditional_0_Conditional_33_Template, 2, 1, "p", 21);
    \u0275\u0275elementStart(34, "div", 22)(35, "span");
    \u0275\u0275text(36, "By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "strong", 23);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 24);
    \u0275\u0275text(40, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 25);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 26);
    \u0275\u0275element(44, "app-rating-stars", 27);
    \u0275\u0275elementStart(45, "span", 28);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 29)(48, "div", 30)(49, "span", 31);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(52, BookDetailComponent_Conditional_0_Conditional_52_Template, 6, 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 32)(54, "label", 33);
    \u0275\u0275text(55, "Choose Format:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 34);
    \u0275\u0275repeaterCreate(57, BookDetailComponent_Conditional_0_For_58_Template, 6, 7, "button", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 36)(60, "div", 37)(61, "button", 38);
    \u0275\u0275listener("click", function BookDetailComponent_Conditional_0_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.decrementQty());
    });
    \u0275\u0275text(62, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 39);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 38);
    \u0275\u0275listener("click", function BookDetailComponent_Conditional_0_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.incrementQty());
    });
    \u0275\u0275text(66, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "button", 40);
    \u0275\u0275listener("click", function BookDetailComponent_Conditional_0_Template_button_click_67_listener() {
      const b_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addToCart(b_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(68, "svg", 41);
    \u0275\u0275element(69, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(70, "span");
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "button", 43);
    \u0275\u0275listener("click", function BookDetailComponent_Conditional_0_Template_button_click_73_listener() {
      const b_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleWishlist(b_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(74, "svg", 44);
    \u0275\u0275element(75, "path", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(76, "div", 46)(77, "span", 47);
    \u0275\u0275text(78, "Topics:");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(79, BookDetailComponent_Conditional_0_For_80_Template, 2, 1, "span", 48, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 49)(82, "div", 50)(83, "button", 51);
    \u0275\u0275listener("click", function BookDetailComponent_Conditional_0_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeTab.set("overview"));
    });
    \u0275\u0275text(84, " Overview & Description ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "button", 51);
    \u0275\u0275listener("click", function BookDetailComponent_Conditional_0_Template_button_click_85_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeTab.set("specs"));
    });
    \u0275\u0275text(86, " Book Specifications ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "button", 51);
    \u0275\u0275listener("click", function BookDetailComponent_Conditional_0_Template_button_click_87_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeTab.set("reviews"));
    });
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 52);
    \u0275\u0275conditionalCreate(90, BookDetailComponent_Conditional_0_Conditional_90_Template, 7, 2, "div", 53);
    \u0275\u0275conditionalCreate(91, BookDetailComponent_Conditional_0_Conditional_91_Template, 33, 6, "div", 54);
    \u0275\u0275conditionalCreate(92, BookDetailComponent_Conditional_0_Conditional_92_Template, 28, 6, "div", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(93, BookDetailComponent_Conditional_0_Conditional_93_Template, 6, 0, "section", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(b_r2.category);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(b_r2.title);
    \u0275\u0275advance(5);
    \u0275\u0275property("book", b_r2);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(b_r2.category);
    \u0275\u0275advance();
    \u0275\u0275conditional(b_r2.bestseller ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(b_r2.newRelease ? 30 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r2.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(b_r2.subtitle ? 33 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(b_r2.author);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Published by ", b_r2.publisher);
    \u0275\u0275advance(2);
    \u0275\u0275property("rating", b_r2.rating)("reviewCount", b_r2.reviewCount);
    \u0275\u0275advance();
    \u0275\u0275classProp("in-stock", b_r2.inStock);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r2.inStock ? "\u25CF In Stock (" + b_r2.stockCount + " copies available)" : "\u25CB Out of Stock", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(51, 35, ctx_r2.currentPrice(), "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(b_r2.originalPrice ? 52 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(b_r2.formats);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.quantity());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !b_r2.inStock);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Add to Cart \u2022 $", \u0275\u0275pipeBind2(72, 38, ctx_r2.currentPrice() * ctx_r2.quantity(), "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.isWishlisted());
    \u0275\u0275property("title", ctx_r2.isWishlisted() ? "Remove from wishlist" : "Add to wishlist");
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", ctx_r2.isWishlisted() ? "#ef4444" : "none");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(b_r2.tags);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r2.activeTab() === "overview");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab() === "specs");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab() === "reviews");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Customer Reviews (", ctx_r2.reviews().length, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.activeTab() === "overview" ? 90 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.activeTab() === "specs" ? 91 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.activeTab() === "reviews" ? 92 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.relatedBooks().length > 0 ? 93 : -1);
  }
}
function BookDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h2");
    \u0275\u0275text(2, "Book Not Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "The book you are looking for does not exist in our catalog.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 94);
    \u0275\u0275text(6, "Return to Home Catalog");
    \u0275\u0275elementEnd()();
  }
}
var BookDetailComponent = class _BookDetailComponent {
  route = inject(ActivatedRoute);
  bookService = inject(BookService);
  cartService = inject(CartService);
  wishlistService = inject(WishlistService);
  notificationService = inject(NotificationService);
  bookId = signal("", ...ngDevMode ? [{ debugName: "bookId" }] : (
    /* istanbul ignore next */
    []
  ));
  book = computed(() => {
    return this.bookService.getBookById(this.bookId());
  }, ...ngDevMode ? [{ debugName: "book" }] : (
    /* istanbul ignore next */
    []
  ));
  reviews = computed(() => {
    return this.bookService.getReviewsForBook(this.bookId());
  }, ...ngDevMode ? [{ debugName: "reviews" }] : (
    /* istanbul ignore next */
    []
  ));
  relatedBooks = computed(() => {
    const b = this.book();
    return b ? this.bookService.getRelatedBooks(b, 4) : [];
  }, ...ngDevMode ? [{ debugName: "relatedBooks" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedFormat = signal("Paperback", ...ngDevMode ? [{ debugName: "selectedFormat" }] : (
    /* istanbul ignore next */
    []
  ));
  quantity = signal(1, ...ngDevMode ? [{ debugName: "quantity" }] : (
    /* istanbul ignore next */
    []
  ));
  activeTab = signal("overview", ...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  newRating = 5;
  newAuthor = "";
  newComment = "";
  constructor() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id") || "";
      this.bookId.set(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  currentPrice() {
    const b = this.book();
    if (!b)
      return 0;
    return this.getFormatPrice(this.selectedFormat());
  }
  getFormatPrice(format) {
    const b = this.book();
    if (!b)
      return 0;
    if (format === "Hardcover")
      return Number((b.price * 1.25).toFixed(2));
    if (format === "eBook")
      return Number((b.price * 0.75).toFixed(2));
    if (format === "Audiobook")
      return Number((b.price * 0.9).toFixed(2));
    return b.price;
  }
  isWishlisted() {
    const b = this.book();
    return b ? this.wishlistService.isInWishlist(b.id) : false;
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
  }
  filterByCategory(cat) {
    this.bookService.setCategory(cat);
  }
  onSubmitReview(event) {
    event.preventDefault();
    if (!this.newComment.trim())
      return;
    this.bookService.addReview(this.bookId(), this.newAuthor, this.newRating, this.newComment);
    this.notificationService.success("Your review has been published!", "Review Posted");
    this.newComment = "";
    this.newAuthor = "";
    this.newRating = 5;
  }
  static \u0275fac = function BookDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookDetailComponent, selectors: [["app-book-detail"]], decls: 2, vars: 1, consts: [[1, "book-detail-page"], [1, "container", "not-found-box"], [1, "breadcrumb-nav"], [1, "container"], ["routerLink", "/"], [1, "sep"], ["routerLink", "/", 3, "click"], [1, "current-title"], [1, "container", "main-content-wrap"], [1, "top-product-grid"], [1, "cover-showcase"], [1, "cover-wrapper"], ["size", "lg", 3, "book"], [1, "guarantee-tags"], [1, "gtag"], [1, "product-info-panel"], [1, "category-meta-row"], [1, "category-badge"], [1, "badge-pill", "bestseller"], [1, "badge-pill", "new"], [1, "main-title"], [1, "subtitle"], [1, "author-row"], [1, "author-name"], [1, "dot"], [1, "publisher-name"], [1, "rating-review-strip"], [3, "rating", "reviewCount"], [1, "stock-pill"], [1, "price-presentation-box"], [1, "price-left"], [1, "active-price"], [1, "format-choice-section"], [1, "choice-label"], [1, "format-grid"], ["type", "button", 1, "format-card-btn", 3, "active"], [1, "purchase-action-group"], [1, "qty-selector"], ["type", "button", 1, "qty-btn", 3, "click"], [1, "qty-display"], ["type", "button", 1, "btn-add-to-cart", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "cart-svg"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"], ["type", "button", 1, "btn-wishlist-toggle", 3, "click", "title"], ["viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"], [1, "tags-row"], [1, "tag-title"], [1, "topic-tag"], [1, "product-tabs-section"], [1, "tab-headers"], ["type", "button", 1, "tab-btn", 3, "click"], [1, "tab-content-body"], [1, "overview-pane"], [1, "specs-pane"], [1, "reviews-pane"], [1, "related-books-section"], [1, "original-price"], [1, "save-badge"], ["type", "button", 1, "format-card-btn", 3, "click"], [1, "f-type"], [1, "f-price"], [1, "pane-title"], [1, "description-text"], [1, "specs-table"], [1, "reviews-grid"], [1, "reviews-list-col"], [1, "no-reviews-msg"], [1, "reviews-stack"], [1, "write-review-col"], [1, "write-review-card"], [1, "form-title"], [1, "form-sub"], [3, "submit"], [1, "form-field"], [3, "ratingChange", "rating", "interactive", "showScore"], ["for", "rev-author"], ["id", "rev-author", "type", "text", "placeholder", "e.g. Alexis Jordan", "name", "reviewAuthor", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "rev-comment"], ["id", "rev-comment", "rows", "4", "placeholder", "What did you love about this book?", "name", "reviewComment", "required", "", 1, "form-input", "textarea", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "submit-review-btn"], [1, "review-card"], [1, "rev-header"], [1, "rev-user-box"], [1, "rev-avatar"], [1, "rev-user-name"], [1, "verified-badge"], [1, "rev-date"], [1, "rev-rating"], [3, "rating", "showScore"], [1, "rev-comment"], [1, "section-title"], [1, "related-grid"], [3, "book"], ["routerLink", "/", 1, "back-link"]], template: function BookDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, BookDetailComponent_Conditional_0_Template, 94, 41, "div", 0)(1, BookDetailComponent_Conditional_1_Template, 7, 0, "div", 1);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.book()) ? 0 : 1, tmp_0_0);
    }
  }, dependencies: [CommonModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, BookCoverComponent, RatingStarsComponent, BookCardComponent, DecimalPipe], styles: ["\n.book-detail-page[_ngcontent-%COMP%] {\n  padding-bottom: 4rem;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.breadcrumb-nav[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 0.85rem 0;\n  font-size: 0.825rem;\n  color: #64748b;\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  text-decoration: none;\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n  color: #cbd5e1;\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   .current-title[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-weight: 600;\n}\n.main-content-wrap[_ngcontent-%COMP%] {\n  padding-top: 2.5rem;\n}\n.top-product-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 360px 1fr;\n  gap: 3.5rem;\n  align-items: flex-start;\n  margin-bottom: 3.5rem;\n}\n.cover-showcase[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #f8fafc;\n  border-radius: 16px;\n  padding: 2.5rem 1.5rem;\n  border: 1px solid #e2e8f0;\n}\n.cover-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n}\n.guarantee-tags[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  width: 100%;\n}\n.gtag[_ngcontent-%COMP%] {\n  font-size: 0.775rem;\n  color: #059669;\n  font-weight: 600;\n  background: #ecfdf5;\n  padding: 0.35rem 0.75rem;\n  border-radius: 6px;\n}\n.product-info-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.category-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.6rem;\n}\n.category-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #4f46e5;\n  background: #eef2ff;\n  padding: 0.25rem 0.65rem;\n  border-radius: 9999px;\n}\n.badge-pill[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 0.2rem 0.55rem;\n  border-radius: 6px;\n  text-transform: uppercase;\n  color: #ffffff;\n}\n.badge-pill.bestseller[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.badge-pill.new[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.main-title[_ngcontent-%COMP%] {\n  font-family: Georgia, serif;\n  font-size: 2.25rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.2;\n  margin: 0 0 0.4rem 0;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: #64748b;\n  margin: 0 0 1rem 0;\n  line-height: 1.4;\n}\n.author-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.9rem;\n  color: #475569;\n  margin-bottom: 1.25rem;\n}\n.author-name[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.dot[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.rating-review-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 1.5rem;\n}\n.stock-pill[_ngcontent-%COMP%] {\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: #ef4444;\n}\n.stock-pill.in-stock[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.price-presentation-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.price-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.75rem;\n}\n.active-price[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.original-price[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n.save-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 0.2rem 0.5rem;\n  border-radius: 4px;\n}\n.format-choice-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n.choice-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.format-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));\n  gap: 0.6rem;\n}\n.format-card-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.6rem 0.75rem;\n  border-radius: 10px;\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.format-card-btn[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n}\n.format-card-btn.active[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  border-color: #4f46e5;\n}\n.f-type[_ngcontent-%COMP%] {\n  font-size: 0.825rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.f-price[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.format-card-btn.active[_ngcontent-%COMP%]   .f-type[_ngcontent-%COMP%], \n.format-card-btn.active[_ngcontent-%COMP%]   .f-price[_ngcontent-%COMP%] {\n  color: #4338ca;\n}\n.purchase-action-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  margin-bottom: 1.75rem;\n}\n.qty-selector[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border: 1.5px solid #cbd5e1;\n  border-radius: 10px;\n  background: #f8fafc;\n}\n.qty-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  width: 38px;\n  height: 44px;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #334155;\n  cursor: pointer;\n}\n.qty-display[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  padding: 0 0.75rem;\n  color: #0f172a;\n}\n.btn-add-to-cart[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background: #4f46e5;\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 700;\n  padding: 0.8rem 1.5rem;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.15s ease, transform 0.15s ease;\n}\n.btn-add-to-cart[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4338ca;\n  transform: translateY(-1px);\n}\n.btn-add-to-cart[_ngcontent-%COMP%]:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.cart-svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.btn-wishlist-toggle[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 10px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.15s ease;\n}\n.btn-wishlist-toggle[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #ef4444;\n}\n.btn-wishlist-toggle.active[_ngcontent-%COMP%] {\n  color: #ef4444;\n  border-color: #fca5a5;\n  background: #fef2f2;\n}\n.btn-wishlist-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.tags-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.tag-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #64748b;\n}\n.topic-tag[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  background: #f1f5f9;\n  color: #475569;\n  padding: 0.2rem 0.55rem;\n  border-radius: 6px;\n}\n.product-tabs-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  overflow: hidden;\n  margin-bottom: 4rem;\n}\n.tab-headers[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  overflow-x: auto;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background: none;\n  border: none;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #64748b;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  white-space: nowrap;\n  transition: all 0.15s ease;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #1e293b;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  border-bottom-color: #4f46e5;\n  background: #ffffff;\n}\n.tab-content-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.pane-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 1rem 0;\n}\n.description-text[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.7;\n  color: #334155;\n  margin-bottom: 1rem;\n}\n.specs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  border-collapse: collapse;\n}\n.specs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.specs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 0.875rem;\n}\n.specs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #64748b;\n  width: 35%;\n  font-weight: 600;\n}\n.specs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 500;\n}\n.reviews-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 3rem;\n}\n.no-reviews-msg[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.9rem;\n}\n.reviews-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.review-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.25rem;\n}\n.rev-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.rev-user-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n}\n.rev-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #4f46e5;\n  color: #ffffff;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n}\n.rev-user-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.85rem;\n  color: #0f172a;\n  display: block;\n}\n.verified-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #10b981;\n  font-weight: 600;\n}\n.rev-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.rev-rating[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.rev-comment[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #334155;\n  line-height: 1.5;\n  margin: 0;\n}\n.write-review-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.5rem;\n}\n.form-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.form-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0 0 1.25rem 0;\n}\n.form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #334155;\n  margin-bottom: 0.35rem;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.6rem 0.75rem;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  font-size: 0.85rem;\n  outline: none;\n  background: #ffffff;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #4f46e5;\n}\n.form-input.textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.submit-review-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #0f172a;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.875rem;\n  padding: 0.75rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.submit-review-btn[_ngcontent-%COMP%]:hover {\n  background: #1e293b;\n}\n.related-books-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 1.5rem;\n}\n.related-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 1.5rem;\n}\n.not-found-box[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5rem 1.5rem;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 1rem;\n  color: #4f46e5;\n  font-weight: 600;\n}\n@media (max-width: 900px) {\n  .top-product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cover-showcase[_ngcontent-%COMP%] {\n    max-width: 320px;\n    margin: 0 auto;\n  }\n  .reviews-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=book-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookDetailComponent, [{
    type: Component,
    args: [{ selector: "app-book-detail", standalone: true, imports: [CommonModule, RouterLink, FormsModule, BookCoverComponent, RatingStarsComponent, BookCardComponent], template: `
    @if (book(); as b) {
      <div class="book-detail-page">
        <!-- Breadcrumb navigation -->
        <nav class="breadcrumb-nav">
          <div class="container">
            <a routerLink="/">Home</a>
            <span class="sep">/</span>
            <a routerLink="/" (click)="filterByCategory(b.category)">{{ b.category }}</a>
            <span class="sep">/</span>
            <span class="current-title">{{ b.title }}</span>
          </div>
        </nav>

        <div class="container main-content-wrap">
          <!-- Top Grid: Cover & Purchase Section -->
          <div class="top-product-grid">
            <!-- Left: Cover Presentation -->
            <div class="cover-showcase">
              <div class="cover-wrapper">
                <app-book-cover [book]="b" size="lg" />
              </div>
              <div class="guarantee-tags">
                <span class="gtag">\u2713 Guaranteed Authentic</span>
                <span class="gtag">\u2713 Fast Dispatch</span>
                <span class="gtag">\u2713 30-Day Easy Returns</span>
              </div>
            </div>

            <!-- Right: Details & Purchase Options -->
            <div class="product-info-panel">
              <div class="category-meta-row">
                <span class="category-badge">{{ b.category }}</span>
                @if (b.bestseller) {
                  <span class="badge-pill bestseller">Bestseller</span>
                }
                @if (b.newRelease) {
                  <span class="badge-pill new">New Release</span>
                }
              </div>

              <h1 class="main-title">{{ b.title }}</h1>
              @if (b.subtitle) {
                <p class="subtitle">{{ b.subtitle }}</p>
              }

              <div class="author-row">
                <span>By</span>
                <strong class="author-name">{{ b.author }}</strong>
                <span class="dot">\u2022</span>
                <span class="publisher-name">Published by {{ b.publisher }}</span>
              </div>

              <!-- Rating Row -->
              <div class="rating-review-strip">
                <app-rating-stars [rating]="b.rating" [reviewCount]="b.reviewCount" />
                <span class="stock-pill" [class.in-stock]="b.inStock">
                  {{ b.inStock ? '\u25CF In Stock (' + b.stockCount + ' copies available)' : '\u25CB Out of Stock' }}
                </span>
              </div>

              <!-- Price Box -->
              <div class="price-presentation-box">
                <div class="price-left">
                  <span class="active-price">\${{ currentPrice() | number: '1.2-2' }}</span>
                  @if (b.originalPrice) {
                    <span class="original-price">\${{ b.originalPrice | number: '1.2-2' }}</span>
                    <span class="save-badge">Save \${{ (b.originalPrice - currentPrice()) | number: '1.2-2' }}</span>
                  }
                </div>
              </div>

              <!-- Format Picker -->
              <div class="format-choice-section">
                <label class="choice-label">Choose Format:</label>
                <div class="format-grid">
                  @for (fmt of b.formats; track fmt) {
                    <button
                      type="button"
                      class="format-card-btn"
                      [class.active]="selectedFormat() === fmt"
                      (click)="selectedFormat.set(fmt)"
                    >
                      <span class="f-type">{{ fmt }}</span>
                      <span class="f-price">\${{ getFormatPrice(fmt) | number: '1.2-2' }}</span>
                    </button>
                  }
                </div>
              </div>

              <!-- Quantity and Add to Cart -->
              <div class="purchase-action-group">
                <div class="qty-selector">
                  <button type="button" class="qty-btn" (click)="decrementQty()">-</button>
                  <span class="qty-display">{{ quantity() }}</span>
                  <button type="button" class="qty-btn" (click)="incrementQty()">+</button>
                </div>

                <button
                  type="button"
                  class="btn-add-to-cart"
                  [disabled]="!b.inStock"
                  (click)="addToCart(b)"
                >
                  <svg class="cart-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <span>Add to Cart \u2022 \${{ (currentPrice() * quantity()) | number: '1.2-2' }}</span>
                </button>

                <button
                  type="button"
                  class="btn-wishlist-toggle"
                  [class.active]="isWishlisted()"
                  (click)="toggleWishlist(b)"
                  [title]="isWishlisted() ? 'Remove from wishlist' : 'Add to wishlist'"
                >
                  <svg viewBox="0 0 24 24" [attr.fill]="isWishlisted() ? '#ef4444' : 'none'" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>
              </div>

              <!-- Tags list -->
              <div class="tags-row">
                <span class="tag-title">Topics:</span>
                @for (tag of b.tags; track tag) {
                  <span class="topic-tag">{{ tag }}</span>
                }
              </div>
            </div>
          </div>

          <!-- Tabs: Description & Specifications -->
          <div class="product-tabs-section">
            <div class="tab-headers">
              <button
                type="button"
                class="tab-btn"
                [class.active]="activeTab() === 'overview'"
                (click)="activeTab.set('overview')"
              >
                Overview & Description
              </button>
              <button
                type="button"
                class="tab-btn"
                [class.active]="activeTab() === 'specs'"
                (click)="activeTab.set('specs')"
              >
                Book Specifications
              </button>
              <button
                type="button"
                class="tab-btn"
                [class.active]="activeTab() === 'reviews'"
                (click)="activeTab.set('reviews')"
              >
                Customer Reviews ({{ reviews().length }})
              </button>
            </div>

            <div class="tab-content-body">
              @if (activeTab() === 'overview') {
                <div class="overview-pane">
                  <h3 class="pane-title">About this Edition</h3>
                  <p class="description-text">{{ b.description }}</p>
                  <p class="description-text">{{ b.shortDescription }}</p>
                </div>
              }

              @if (activeTab() === 'specs') {
                <div class="specs-pane">
                  <table class="specs-table">
                    <tbody>
                      <tr>
                        <th>ISBN-13</th>
                        <td>{{ b.isbn }}</td>
                      </tr>
                      <tr>
                        <th>Page Count</th>
                        <td>{{ b.pages }} pages</td>
                      </tr>
                      <tr>
                        <th>Publisher</th>
                        <td>{{ b.publisher }}</td>
                      </tr>
                      <tr>
                        <th>Publication Date</th>
                        <td>{{ b.publishedDate }}</td>
                      </tr>
                      <tr>
                        <th>Language</th>
                        <td>{{ b.language }}</td>
                      </tr>
                      <tr>
                        <th>Available Formats</th>
                        <td>{{ b.formats.join(', ') }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              }

              @if (activeTab() === 'reviews') {
                <div class="reviews-pane">
                  <!-- Reviews Summary & Write Form -->
                  <div class="reviews-grid">
                    <div class="reviews-list-col">
                      <h3 class="pane-title">Reader Reviews</h3>

                      @if (reviews().length === 0) {
                        <p class="no-reviews-msg">No customer reviews yet. Be the first to share your thoughts!</p>
                      } @else {
                        <div class="reviews-stack">
                          @for (rev of reviews(); track rev.id) {
                            <div class="review-card">
                              <div class="rev-header">
                                <div class="rev-user-box">
                                  <div class="rev-avatar">{{ rev.userName.charAt(0) }}</div>
                                  <div>
                                    <span class="rev-user-name">{{ rev.userName }}</span>
                                    @if (rev.verifiedPurchase) {
                                      <span class="verified-badge">\u2713 Verified Reader</span>
                                    }
                                  </div>
                                </div>
                                <span class="rev-date">{{ rev.date }}</span>
                              </div>

                              <div class="rev-rating">
                                <app-rating-stars [rating]="rev.rating" [showScore]="false" />
                              </div>

                              <p class="rev-comment">{{ rev.comment }}</p>
                            </div>
                          }
                        </div>
                      }
                    </div>

                    <!-- Write a review form -->
                    <div class="write-review-col">
                      <div class="write-review-card">
                        <h4 class="form-title">Write a Review</h4>
                        <p class="form-sub">Share your feedback with fellow book lovers</p>

                        <form (submit)="onSubmitReview($event)">
                          <div class="form-field">
                            <label>Your Rating:</label>
                            <app-rating-stars
                              [rating]="newRating"
                              [interactive]="true"
                              [showScore]="false"
                              (ratingChange)="newRating = $event"
                            />
                          </div>

                          <div class="form-field">
                            <label for="rev-author">Your Name</label>
                            <input
                              id="rev-author"
                              type="text"
                              placeholder="e.g. Alexis Jordan"
                              [(ngModel)]="newAuthor"
                              name="reviewAuthor"
                              required
                              class="form-input"
                            />
                          </div>

                          <div class="form-field">
                            <label for="rev-comment">Review Content</label>
                            <textarea
                              id="rev-comment"
                              rows="4"
                              placeholder="What did you love about this book?"
                              [(ngModel)]="newComment"
                              name="reviewComment"
                              required
                              class="form-input textarea"
                            ></textarea>
                          </div>

                          <button type="submit" class="submit-review-btn">
                            Publish Review
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Related Books Section -->
          @if (relatedBooks().length > 0) {
            <section class="related-books-section">
              <h2 class="section-title">You May Also Like</h2>
              <div class="related-grid">
                @for (rel of relatedBooks(); track rel.id) {
                  <app-book-card [book]="rel" />
                }
              </div>
            </section>
          }
        </div>
      </div>
    } @else {
      <div class="container not-found-box">
        <h2>Book Not Found</h2>
        <p>The book you are looking for does not exist in our catalog.</p>
        <a routerLink="/" class="back-link">Return to Home Catalog</a>
      </div>
    }
  `, styles: ["/* angular:styles/component:css;2e73a303ab0056e29731ae27f64acc69cf34e87c5ca6b564141fc1c9bbfe3a38;C:/Users/0038EU744/.bob/playground/bookstore-app/src/app/views/book-detail/book-detail.component.ts */\n.book-detail-page {\n  padding-bottom: 4rem;\n}\n.container {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.breadcrumb-nav {\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 0.85rem 0;\n  font-size: 0.825rem;\n  color: #64748b;\n}\n.breadcrumb-nav a {\n  color: #4f46e5;\n  text-decoration: none;\n}\n.breadcrumb-nav a:hover {\n  text-decoration: underline;\n}\n.breadcrumb-nav .sep {\n  margin: 0 0.5rem;\n  color: #cbd5e1;\n}\n.breadcrumb-nav .current-title {\n  color: #1e293b;\n  font-weight: 600;\n}\n.main-content-wrap {\n  padding-top: 2.5rem;\n}\n.top-product-grid {\n  display: grid;\n  grid-template-columns: 360px 1fr;\n  gap: 3.5rem;\n  align-items: flex-start;\n  margin-bottom: 3.5rem;\n}\n.cover-showcase {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #f8fafc;\n  border-radius: 16px;\n  padding: 2.5rem 1.5rem;\n  border: 1px solid #e2e8f0;\n}\n.cover-wrapper {\n  width: 100%;\n  max-width: 260px;\n}\n.guarantee-tags {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  width: 100%;\n}\n.gtag {\n  font-size: 0.775rem;\n  color: #059669;\n  font-weight: 600;\n  background: #ecfdf5;\n  padding: 0.35rem 0.75rem;\n  border-radius: 6px;\n}\n.product-info-panel {\n  display: flex;\n  flex-direction: column;\n}\n.category-meta-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.6rem;\n}\n.category-badge {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #4f46e5;\n  background: #eef2ff;\n  padding: 0.25rem 0.65rem;\n  border-radius: 9999px;\n}\n.badge-pill {\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 0.2rem 0.55rem;\n  border-radius: 6px;\n  text-transform: uppercase;\n  color: #ffffff;\n}\n.badge-pill.bestseller {\n  background: #f59e0b;\n}\n.badge-pill.new {\n  background: #10b981;\n}\n.main-title {\n  font-family: Georgia, serif;\n  font-size: 2.25rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.2;\n  margin: 0 0 0.4rem 0;\n}\n.subtitle {\n  font-size: 1.05rem;\n  color: #64748b;\n  margin: 0 0 1rem 0;\n  line-height: 1.4;\n}\n.author-row {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.9rem;\n  color: #475569;\n  margin-bottom: 1.25rem;\n}\n.author-name {\n  color: #0f172a;\n}\n.dot {\n  color: #cbd5e1;\n}\n.rating-review-strip {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 1.5rem;\n}\n.stock-pill {\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: #ef4444;\n}\n.stock-pill.in-stock {\n  color: #10b981;\n}\n.price-presentation-box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.price-left {\n  display: flex;\n  align-items: baseline;\n  gap: 0.75rem;\n}\n.active-price {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.original-price {\n  font-size: 1.15rem;\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n.save-badge {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #dc2626;\n  background: #fee2e2;\n  padding: 0.2rem 0.5rem;\n  border-radius: 4px;\n}\n.format-choice-section {\n  margin-bottom: 1.75rem;\n}\n.choice-label {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.format-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));\n  gap: 0.6rem;\n}\n.format-card-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.6rem 0.75rem;\n  border-radius: 10px;\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.format-card-btn:hover {\n  border-color: #cbd5e1;\n}\n.format-card-btn.active {\n  background: #eef2ff;\n  border-color: #4f46e5;\n}\n.f-type {\n  font-size: 0.825rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.f-price {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.format-card-btn.active .f-type,\n.format-card-btn.active .f-price {\n  color: #4338ca;\n}\n.purchase-action-group {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  margin-bottom: 1.75rem;\n}\n.qty-selector {\n  display: inline-flex;\n  align-items: center;\n  border: 1.5px solid #cbd5e1;\n  border-radius: 10px;\n  background: #f8fafc;\n}\n.qty-btn {\n  background: none;\n  border: none;\n  width: 38px;\n  height: 44px;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #334155;\n  cursor: pointer;\n}\n.qty-display {\n  font-size: 0.95rem;\n  font-weight: 700;\n  padding: 0 0.75rem;\n  color: #0f172a;\n}\n.btn-add-to-cart {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background: #4f46e5;\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 700;\n  padding: 0.8rem 1.5rem;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.15s ease, transform 0.15s ease;\n}\n.btn-add-to-cart:hover:not(:disabled) {\n  background: #4338ca;\n  transform: translateY(-1px);\n}\n.btn-add-to-cart:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.cart-svg {\n  width: 20px;\n  height: 20px;\n}\n.btn-wishlist-toggle {\n  width: 46px;\n  height: 46px;\n  border-radius: 10px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #64748b;\n  transition: all 0.15s ease;\n}\n.btn-wishlist-toggle:hover {\n  background: #f1f5f9;\n  color: #ef4444;\n}\n.btn-wishlist-toggle.active {\n  color: #ef4444;\n  border-color: #fca5a5;\n  background: #fef2f2;\n}\n.btn-wishlist-toggle svg {\n  width: 22px;\n  height: 22px;\n}\n.tags-row {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.tag-title {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #64748b;\n}\n.topic-tag {\n  font-size: 0.75rem;\n  background: #f1f5f9;\n  color: #475569;\n  padding: 0.2rem 0.55rem;\n  border-radius: 6px;\n}\n.product-tabs-section {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  overflow: hidden;\n  margin-bottom: 4rem;\n}\n.tab-headers {\n  display: flex;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  overflow-x: auto;\n}\n.tab-btn {\n  padding: 1rem 1.5rem;\n  background: none;\n  border: none;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #64748b;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  white-space: nowrap;\n  transition: all 0.15s ease;\n}\n.tab-btn:hover {\n  color: #1e293b;\n}\n.tab-btn.active {\n  color: #4f46e5;\n  border-bottom-color: #4f46e5;\n  background: #ffffff;\n}\n.tab-content-body {\n  padding: 2rem;\n}\n.pane-title {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 1rem 0;\n}\n.description-text {\n  font-size: 0.95rem;\n  line-height: 1.7;\n  color: #334155;\n  margin-bottom: 1rem;\n}\n.specs-table {\n  width: 100%;\n  max-width: 600px;\n  border-collapse: collapse;\n}\n.specs-table th,\n.specs-table td {\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 0.875rem;\n}\n.specs-table th {\n  text-align: left;\n  color: #64748b;\n  width: 35%;\n  font-weight: 600;\n}\n.specs-table td {\n  color: #0f172a;\n  font-weight: 500;\n}\n.reviews-grid {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 3rem;\n}\n.no-reviews-msg {\n  color: #64748b;\n  font-size: 0.9rem;\n}\n.reviews-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.review-card {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.25rem;\n}\n.rev-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.rev-user-box {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n}\n.rev-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #4f46e5;\n  color: #ffffff;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n}\n.rev-user-name {\n  font-weight: 700;\n  font-size: 0.85rem;\n  color: #0f172a;\n  display: block;\n}\n.verified-badge {\n  font-size: 0.7rem;\n  color: #10b981;\n  font-weight: 600;\n}\n.rev-date {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.rev-rating {\n  margin-bottom: 0.5rem;\n}\n.rev-comment {\n  font-size: 0.875rem;\n  color: #334155;\n  line-height: 1.5;\n  margin: 0;\n}\n.write-review-card {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.5rem;\n}\n.form-title {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.25rem 0;\n}\n.form-sub {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0 0 1.25rem 0;\n}\n.form-field {\n  margin-bottom: 1rem;\n}\n.form-field label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #334155;\n  margin-bottom: 0.35rem;\n}\n.form-input {\n  width: 100%;\n  padding: 0.6rem 0.75rem;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  font-size: 0.85rem;\n  outline: none;\n  background: #ffffff;\n}\n.form-input:focus {\n  border-color: #4f46e5;\n}\n.form-input.textarea {\n  resize: vertical;\n}\n.submit-review-btn {\n  width: 100%;\n  background: #0f172a;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.875rem;\n  padding: 0.75rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.submit-review-btn:hover {\n  background: #1e293b;\n}\n.related-books-section {\n  margin-top: 2rem;\n}\n.section-title {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 1.5rem;\n}\n.related-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 1.5rem;\n}\n.not-found-box {\n  text-align: center;\n  padding: 5rem 1.5rem;\n}\n.back-link {\n  display: inline-block;\n  margin-top: 1rem;\n  color: #4f46e5;\n  font-weight: 600;\n}\n@media (max-width: 900px) {\n  .top-product-grid {\n    grid-template-columns: 1fr;\n  }\n  .cover-showcase {\n    max-width: 320px;\n    margin: 0 auto;\n  }\n  .reviews-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=book-detail.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookDetailComponent, { className: "BookDetailComponent", filePath: "src/app/views/book-detail/book-detail.component.ts", lineNumber: 986 });
})();
export {
  BookDetailComponent
};
//# sourceMappingURL=chunk-SNTNLFVE.js.map
