import {
  Component,
  DecimalPipe,
  Input,
  Output,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LANLAHU6.js";

// src/app/components/book-cover/book-cover.component.ts
function BookCoverComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", ctx_r0.book().discountPercent, "%");
  }
}
function BookCoverComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.book().subtitle);
  }
}
var BookCoverComponent = class _BookCoverComponent {
  book = input.required(...ngDevMode ? [{ debugName: "book" }] : (
    /* istanbul ignore next */
    []
  ));
  size = input("md", ...ngDevMode ? [{ debugName: "size" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function BookCoverComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookCoverComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookCoverComponent, selectors: [["app-book-cover"]], inputs: { book: [1, "book"], size: [1, "size"] }, decls: 17, vars: 16, consts: [[1, "book-cover-wrapper"], [1, "book-spine"], [1, "book-gloss"], [1, "cover-inner"], [1, "cover-header"], [1, "category-badge"], [1, "discount-pill"], [1, "cover-body"], [1, "book-title"], [1, "book-subtitle"], [1, "cover-footer"], [1, "author-name"], [1, "format-pill"]], template: function BookCoverComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domElement(1, "div", 1)(2, "div", 2);
      \u0275\u0275domElementStart(3, "div", 3)(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(7, BookCoverComponent_Conditional_7_Template, 2, 1, "span", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 7)(9, "h3", 8);
      \u0275\u0275text(10);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(11, BookCoverComponent_Conditional_11_Template, 2, 1, "p", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "div", 10)(13, "span", 11);
      \u0275\u0275text(14);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "span", 12);
      \u0275\u0275text(16);
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("background", ctx.book().coverGradient)("color", ctx.book().coverTextColor);
      \u0275\u0275classProp("size-sm", ctx.size() === "sm")("size-md", ctx.size() === "md")("size-lg", ctx.size() === "lg");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.book().category);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.book().discountPercent ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.book().title);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.book().subtitle && ctx.size() !== "sm" ? 11 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.book().author);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.book().formats[0]);
    }
  }, styles: ["\n.book-cover-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 6px 12px 12px 6px;\n  box-shadow:\n    0 10px 25px -5px rgba(0, 0, 0, 0.25),\n    0 8px 10px -6px rgba(0, 0, 0, 0.15),\n    inset -2px 0 6px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  aspect-ratio: 1 / 1.45;\n}\n.size-sm[_ngcontent-%COMP%] {\n  width: 100px;\n  padding: 0.5rem;\n}\n.size-md[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 260px;\n  padding: 1.1rem;\n}\n.size-lg[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 340px;\n  padding: 1.5rem;\n}\n.book-spine[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 14px;\n  background:\n    linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0.25) 0%,\n      rgba(0, 0, 0, 0.2) 60%,\n      rgba(0, 0, 0, 0.4) 100%);\n  z-index: 2;\n}\n.book-gloss[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      125deg,\n      rgba(255, 255, 255, 0.2) 0%,\n      rgba(255, 255, 255, 0.05) 40%,\n      transparent 60%);\n  pointer-events: none;\n  z-index: 1;\n}\n.cover-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  padding-left: 0.5rem;\n}\n.cover-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.4rem;\n}\n.category-badge[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 700;\n  opacity: 0.85;\n}\n.discount-pill[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #ffffff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 0.15rem 0.4rem;\n  border-radius: 9999px;\n}\n.cover-body[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n.book-title[_ngcontent-%COMP%] {\n  font-family: Georgia, serif;\n  font-weight: 700;\n  line-height: 1.2;\n  margin: 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n}\n.size-sm[_ngcontent-%COMP%]   .book-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.size-md[_ngcontent-%COMP%]   .book-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n.size-lg[_ngcontent-%COMP%]   .book-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.book-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.85;\n  margin-top: 0.35rem;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.cover-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n  padding-top: 0.4rem;\n}\n.author-name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 70%;\n}\n.format-pill[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0.1rem 0.35rem;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=book-cover.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookCoverComponent, [{
    type: Component,
    args: [{ selector: "app-book-cover", standalone: true, template: `
    <div
      class="book-cover-wrapper"
      [class.size-sm]="size() === 'sm'"
      [class.size-md]="size() === 'md'"
      [class.size-lg]="size() === 'lg'"
      [style.background]="book().coverGradient"
      [style.color]="book().coverTextColor"
    >
      <!-- Spine shadow effect -->
      <div class="book-spine"></div>
      <div class="book-gloss"></div>

      <!-- Book content -->
      <div class="cover-inner">
        <div class="cover-header">
          <span class="category-badge">{{ book().category }}</span>
          @if (book().discountPercent) {
            <span class="discount-pill">-{{ book().discountPercent }}%</span>
          }
        </div>

        <div class="cover-body">
          <h3 class="book-title">{{ book().title }}</h3>
          @if (book().subtitle && size() !== 'sm') {
            <p class="book-subtitle">{{ book().subtitle }}</p>
          }
        </div>

        <div class="cover-footer">
          <span class="author-name">{{ book().author }}</span>
          <span class="format-pill">{{ book().formats[0] }}</span>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;ea212209f586800429ad86da4a0d626fc8b63a5f6d081ce36eb73ab303834f3f;C:/Users/0038EU744/.bob/playground/bookstore-app/src/app/components/book-cover/book-cover.component.ts */\n.book-cover-wrapper {\n  position: relative;\n  border-radius: 6px 12px 12px 6px;\n  box-shadow:\n    0 10px 25px -5px rgba(0, 0, 0, 0.25),\n    0 8px 10px -6px rgba(0, 0, 0, 0.15),\n    inset -2px 0 6px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  aspect-ratio: 1 / 1.45;\n}\n.size-sm {\n  width: 100px;\n  padding: 0.5rem;\n}\n.size-md {\n  width: 100%;\n  max-width: 260px;\n  padding: 1.1rem;\n}\n.size-lg {\n  width: 100%;\n  max-width: 340px;\n  padding: 1.5rem;\n}\n.book-spine {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 14px;\n  background:\n    linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0.25) 0%,\n      rgba(0, 0, 0, 0.2) 60%,\n      rgba(0, 0, 0, 0.4) 100%);\n  z-index: 2;\n}\n.book-gloss {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      125deg,\n      rgba(255, 255, 255, 0.2) 0%,\n      rgba(255, 255, 255, 0.05) 40%,\n      transparent 60%);\n  pointer-events: none;\n  z-index: 1;\n}\n.cover-inner {\n  position: relative;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  padding-left: 0.5rem;\n}\n.cover-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.4rem;\n}\n.category-badge {\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 700;\n  opacity: 0.85;\n}\n.discount-pill {\n  background: #ef4444;\n  color: #ffffff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 0.15rem 0.4rem;\n  border-radius: 9999px;\n}\n.cover-body {\n  margin: auto 0;\n}\n.book-title {\n  font-family: Georgia, serif;\n  font-weight: 700;\n  line-height: 1.2;\n  margin: 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n}\n.size-sm .book-title {\n  font-size: 0.75rem;\n}\n.size-md .book-title {\n  font-size: 1.15rem;\n}\n.size-lg .book-title {\n  font-size: 1.5rem;\n}\n.book-subtitle {\n  font-size: 0.75rem;\n  opacity: 0.85;\n  margin-top: 0.35rem;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.cover-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n  padding-top: 0.4rem;\n}\n.author-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 70%;\n}\n.format-pill {\n  font-size: 0.65rem;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0.1rem 0.35rem;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=book-cover.component.css.map */\n"] }]
  }], null, { book: [{ type: Input, args: [{ isSignal: true, alias: "book", required: true }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookCoverComponent, { className: "BookCoverComponent", filePath: "src/app/components/book-cover/book-cover.component.ts", lineNumber: 194 });
})();

// src/app/components/rating-stars/rating-stars.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
function RatingStarsComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 5);
    \u0275\u0275domListener("click", function RatingStarsComponent_For_3_Template_button_click_0_listener() {
      const star_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStarClick(star_r2));
    })("mouseenter", function RatingStarsComponent_For_3_Template_button_mouseenter_0_listener() {
      const star_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHover(star_r2));
    })("mouseleave", function RatingStarsComponent_For_3_Template_button_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHoverLeave());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 6);
    \u0275\u0275domElement(2, "path", 7);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const star_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("disabled", !ctx_r2.interactive());
    \u0275\u0275attribute("aria-label", "Rate " + star_r2 + " stars");
    \u0275\u0275advance();
    \u0275\u0275classProp("filled", ctx_r2.isFilled(star_r2))("half", ctx_r2.isHalf(star_r2));
  }
}
function RatingStarsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ctx_r2.rating(), "1.1-1"));
  }
}
function RatingStarsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r2.reviewCount(), ")");
  }
}
var RatingStarsComponent = class _RatingStarsComponent {
  rating = input(0, ...ngDevMode ? [{ debugName: "rating" }] : (
    /* istanbul ignore next */
    []
  ));
  reviewCount = input(void 0, ...ngDevMode ? [{ debugName: "reviewCount" }] : (
    /* istanbul ignore next */
    []
  ));
  showScore = input(true, ...ngDevMode ? [{ debugName: "showScore" }] : (
    /* istanbul ignore next */
    []
  ));
  interactive = input(false, ...ngDevMode ? [{ debugName: "interactive" }] : (
    /* istanbul ignore next */
    []
  ));
  ratingChange = output();
  hoveredStar = null;
  isFilled(starIndex) {
    const current = this.hoveredStar ?? this.rating();
    return current >= starIndex;
  }
  isHalf(starIndex) {
    const current = this.hoveredStar ?? this.rating();
    return current >= starIndex - 0.5 && current < starIndex;
  }
  onHover(star) {
    if (this.interactive()) {
      this.hoveredStar = star;
    }
  }
  onHoverLeave() {
    if (this.interactive()) {
      this.hoveredStar = null;
    }
  }
  onStarClick(star) {
    if (this.interactive()) {
      this.ratingChange.emit(star);
    }
  }
  static \u0275fac = function RatingStarsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RatingStarsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RatingStarsComponent, selectors: [["app-rating-stars"]], inputs: { rating: [1, "rating"], reviewCount: [1, "reviewCount"], showScore: [1, "showScore"], interactive: [1, "interactive"] }, outputs: { ratingChange: "ratingChange" }, decls: 6, vars: 5, consts: [[1, "rating-container"], [1, "stars-row"], ["type", "button", 1, "star-btn", 3, "disabled"], [1, "rating-score"], [1, "review-count"], ["type", "button", 1, "star-btn", 3, "click", "mouseenter", "mouseleave", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "star-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"]], template: function RatingStarsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, RatingStarsComponent_For_3_Template, 3, 6, "button", 2, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(4, RatingStarsComponent_Conditional_4_Template, 3, 4, "span", 3);
      \u0275\u0275conditionalCreate(5, RatingStarsComponent_Conditional_5_Template, 2, 1, "span", 4);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("interactive", ctx.interactive());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(4, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showScore() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.reviewCount() !== void 0 ? 5 : -1);
    }
  }, dependencies: [DecimalPipe], styles: ["\n.rating-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.stars-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1px;\n}\n.star-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n  cursor: default;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #d1d5db;\n  transition: transform 0.15s ease, color 0.15s ease;\n}\n.interactive[_ngcontent-%COMP%]   .star-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.interactive[_ngcontent-%COMP%]   .star-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n}\n.star-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  transition: fill 0.15s ease, color 0.15s ease;\n}\n.star-icon.filled[_ngcontent-%COMP%] {\n  fill: #f59e0b;\n  color: #f59e0b;\n}\n.star-icon.half[_ngcontent-%COMP%] {\n  fill: url(#half-grad);\n  color: #f59e0b;\n}\n.rating-score[_ngcontent-%COMP%] {\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.review-count[_ngcontent-%COMP%] {\n  font-size: 0.775rem;\n  color: #6b7280;\n}\n/*# sourceMappingURL=rating-stars.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingStarsComponent, [{
    type: Component,
    args: [{ selector: "app-rating-stars", standalone: true, imports: [DecimalPipe], template: `
    <div class="rating-container" [class.interactive]="interactive()">
      <div class="stars-row">
        @for (star of [1, 2, 3, 4, 5]; track star) {
          <button
            type="button"
            class="star-btn"
            [disabled]="!interactive()"
            (click)="onStarClick(star)"
            (mouseenter)="onHover(star)"
            (mouseleave)="onHoverLeave()"
            [attr.aria-label]="'Rate ' + star + ' stars'"
          >
            <svg
              class="star-icon"
              [class.filled]="isFilled(star)"
              [class.half]="isHalf(star)"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </button>
        }
      </div>

      @if (showScore()) {
        <span class="rating-score">{{ rating() | number: '1.1-1' }}</span>
      }
      @if (reviewCount() !== undefined) {
        <span class="review-count">({{ reviewCount() }})</span>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;33e3ab60734140f7d3eb76c49e968eda81257407e76f30ad87997f6fbcc9d76e;C:/Users/0038EU744/.bob/playground/bookstore-app/src/app/components/rating-stars/rating-stars.component.ts */\n.rating-container {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.stars-row {\n  display: flex;\n  align-items: center;\n  gap: 1px;\n}\n.star-btn {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n  cursor: default;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #d1d5db;\n  transition: transform 0.15s ease, color 0.15s ease;\n}\n.interactive .star-btn {\n  cursor: pointer;\n}\n.interactive .star-btn:hover {\n  transform: scale(1.15);\n}\n.star-icon {\n  width: 1rem;\n  height: 1rem;\n  transition: fill 0.15s ease, color 0.15s ease;\n}\n.star-icon.filled {\n  fill: #f59e0b;\n  color: #f59e0b;\n}\n.star-icon.half {\n  fill: url(#half-grad);\n  color: #f59e0b;\n}\n.rating-score {\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.review-count {\n  font-size: 0.775rem;\n  color: #6b7280;\n}\n/*# sourceMappingURL=rating-stars.component.css.map */\n"] }]
  }], null, { rating: [{ type: Input, args: [{ isSignal: true, alias: "rating", required: false }] }], reviewCount: [{ type: Input, args: [{ isSignal: true, alias: "reviewCount", required: false }] }], showScore: [{ type: Input, args: [{ isSignal: true, alias: "showScore", required: false }] }], interactive: [{ type: Input, args: [{ isSignal: true, alias: "interactive", required: false }] }], ratingChange: [{ type: Output, args: ["ratingChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RatingStarsComponent, { className: "RatingStarsComponent", filePath: "src/app/components/rating-stars/rating-stars.component.ts", lineNumber: 103 });
})();

export {
  BookCoverComponent,
  RatingStarsComponent
};
//# sourceMappingURL=chunk-GNXI5LSB.js.map
