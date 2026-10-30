import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-ATB4PIY5.js";
import {
  CartService,
  CommonModule,
  Component,
  DecimalPipe,
  Injectable,
  NotificationService,
  Router,
  RouterLink,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
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

// src/app/services/order.service.ts
var ORDERS_STORAGE_KEY = "bookstore_orders_history";
var OrderService = class _OrderService {
  _orders = signal(this.loadOrdersFromStorage(), ...ngDevMode ? [{ debugName: "_orders" }] : (
    /* istanbul ignore next */
    []
  ));
  _latestOrder = signal(null, ...ngDevMode ? [{ debugName: "_latestOrder" }] : (
    /* istanbul ignore next */
    []
  ));
  orders = this._orders.asReadonly();
  latestOrder = this._latestOrder.asReadonly();
  createOrder(shipping, paymentMethod, items, subtotal, discount, shippingCost, tax, total, appliedPromo) {
    const randomSuffix = Math.floor(1e5 + Math.random() * 9e5);
    const orderNumber = `BK-${(/* @__PURE__ */ new Date()).getFullYear()}-${randomSuffix}`;
    const now = /* @__PURE__ */ new Date();
    const deliveryDays = shipping.deliveryMethod === "overnight" ? 1 : shipping.deliveryMethod === "express" ? 2 : 4;
    const estDate = new Date(now.getTime() + deliveryDays * 24 * 60 * 60 * 1e3);
    const newOrder = {
      id: `ord-${Date.now()}`,
      orderNumber,
      orderDate: now.toISOString(),
      items: [...items],
      shipping,
      paymentMethod,
      subtotal,
      discount,
      shippingCost,
      tax,
      total,
      appliedPromo,
      status: "Confirmed",
      estimatedDelivery: estDate.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric"
      })
    };
    this._orders.update((list) => [newOrder, ...list]);
    this._latestOrder.set(newOrder);
    this.saveOrdersToStorage();
    return newOrder;
  }
  getOrderById(id) {
    return this._orders().find((o) => o.id === id || o.orderNumber === id);
  }
  saveOrdersToStorage() {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(this._orders()));
    } catch (e) {
    }
  }
  loadOrdersFromStorage() {
    try {
      const data = localStorage.getItem(ORDERS_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }
  static \u0275fac = function OrderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/views/checkout/checkout.component.ts
var _forTrack0 = ($index, $item) => $item.book.id + $item.format;
function CheckoutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2, "Your cart is currently empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Please add books to your shopping cart before proceeding to checkout.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 8);
    \u0275\u0275text(6, "Return to Catalog");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_Conditional_11_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 16)(2, "label", 63);
    \u0275\u0275text(3, "Card Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_11_Conditional_100_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.cardNumber, $event) || (ctx_r1.cardNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 15)(6, "div", 16)(7, "label", 65);
    \u0275\u0275text(8, "Expiration (MM/YY)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_11_Conditional_100_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.cardExpiry, $event) || (ctx_r1.cardExpiry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 16)(11, "label", 67);
    \u0275\u0275text(12, "Security Code (CVV)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_11_Conditional_100_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.cardCvv, $event) || (ctx_r1.cardCvv = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cardNumber);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cardExpiry);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cardCvv);
  }
}
function CheckoutComponent_Conditional_11_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "p");
    \u0275\u0275text(2, "You will be securely redirected to PayPal to complete your bookstore purchase.");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_Conditional_11_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "p");
    \u0275\u0275text(2, "Authenticate with Face ID or Touch ID using Apple Pay on your device.");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_Conditional_11_For_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "div", 69);
    \u0275\u0275elementStart(2, "div", 70)(3, "span", 71);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 72);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 73);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", item_r4.book.coverGradient);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.book.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r4.format, " \xD7 ", item_r4.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(9, 6, item_r4.itemPrice * item_r4.quantity, "1.2-2"));
  }
}
function CheckoutComponent_Conditional_11_Conditional_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Promo Discount (", (tmp_2_0 = ctx_r1.appliedPromo()) == null ? null : tmp_2_0.code, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("-$", \u0275\u0275pipeBind2(5, 2, ctx_r1.discountAmount(), "1.2-2"));
  }
}
function CheckoutComponent_Conditional_11_Conditional_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Processing Order...");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_11_Conditional_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Place Order \u2022 $", \u0275\u0275pipeBind2(2, 1, ctx_r1.calculateGrandTotal(), "1.2-2"));
  }
}
function CheckoutComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 9);
    \u0275\u0275listener("submit", function CheckoutComponent_Conditional_11_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPlaceOrder($event));
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "section", 11)(3, "div", 12)(4, "div", 13);
    \u0275\u0275text(5, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 14);
    \u0275\u0275text(7, "Shipping & Contact Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 15)(9, "div", 16)(10, "label", 17);
    \u0275\u0275text(11, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_11_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shipping.fullName, $event) || (ctx_r1.shipping.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 16)(14, "label", 19);
    \u0275\u0275text(15, "Email Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_11_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shipping.email, $event) || (ctx_r1.shipping.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 15)(18, "div", 16)(19, "label", 21);
    \u0275\u0275text(20, "Phone Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_11_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shipping.phone, $event) || (ctx_r1.shipping.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 16)(23, "label", 23);
    \u0275\u0275text(24, "Country / Region *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_11_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shipping.country, $event) || (ctx_r1.shipping.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(26, "option", 25);
    \u0275\u0275text(27, "United States");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 26);
    \u0275\u0275text(29, "Canada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 27);
    \u0275\u0275text(31, "United Kingdom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 28);
    \u0275\u0275text(33, "Germany");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 29);
    \u0275\u0275text(35, "Australia");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 16)(37, "label", 30);
    \u0275\u0275text(38, "Street Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_11_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shipping.addressLine1, $event) || (ctx_r1.shipping.addressLine1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 32)(41, "div", 16)(42, "label", 33);
    \u0275\u0275text(43, "City *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_11_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shipping.city, $event) || (ctx_r1.shipping.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 16)(46, "label", 35);
    \u0275\u0275text(47, "State / Province *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_11_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shipping.state, $event) || (ctx_r1.shipping.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 16)(50, "label", 37);
    \u0275\u0275text(51, "Postal Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_11_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shipping.postalCode, $event) || (ctx_r1.shipping.postalCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "section", 11)(54, "div", 12)(55, "div", 13);
    \u0275\u0275text(56, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "h2", 14);
    \u0275\u0275text(58, "Delivery Option");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 39)(60, "label", 40)(61, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_11_Template_input_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shipping.deliveryMethod, $event) || (ctx_r1.shipping.deliveryMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 42)(63, "span", 43);
    \u0275\u0275text(64, "Standard Delivery (3-5 business days)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 44);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "span", 45);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "label", 40)(70, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_11_Template_input_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shipping.deliveryMethod, $event) || (ctx_r1.shipping.deliveryMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 42)(72, "span", 43);
    \u0275\u0275text(73, "Express Priority (2 business days)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 44);
    \u0275\u0275text(75, "Tracked and insured priority parcel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "span", 45);
    \u0275\u0275text(77, "$9.99");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "label", 40)(79, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Conditional_11_Template_input_ngModelChange_79_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shipping.deliveryMethod, $event) || (ctx_r1.shipping.deliveryMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 42)(81, "span", 43);
    \u0275\u0275text(82, "Next-Day Air Delivery (1 business day)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span", 44);
    \u0275\u0275text(84, "Guaranteed delivery by 10:30 AM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "span", 45);
    \u0275\u0275text(86, "$19.99");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(87, "section", 11)(88, "div", 12)(89, "div", 13);
    \u0275\u0275text(90, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "h2", 14);
    \u0275\u0275text(92, "Payment Method");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 48)(94, "button", 49);
    \u0275\u0275listener("click", function CheckoutComponent_Conditional_11_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.paymentMethod.set("credit-card"));
    });
    \u0275\u0275text(95, " \u{1F4B3} Credit / Debit Card ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "button", 49);
    \u0275\u0275listener("click", function CheckoutComponent_Conditional_11_Template_button_click_96_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.paymentMethod.set("paypal"));
    });
    \u0275\u0275text(97, " \u{1F17F}\uFE0F PayPal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "button", 49);
    \u0275\u0275listener("click", function CheckoutComponent_Conditional_11_Template_button_click_98_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.paymentMethod.set("apple-pay"));
    });
    \u0275\u0275text(99, " \uF8FF Apple Pay ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(100, CheckoutComponent_Conditional_11_Conditional_100_Template, 14, 3, "div", 50)(101, CheckoutComponent_Conditional_11_Conditional_101_Template, 3, 0, "div", 51)(102, CheckoutComponent_Conditional_11_Conditional_102_Template, 3, 0, "div", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "aside", 52)(104, "div", 53)(105, "h2", 54);
    \u0275\u0275text(106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 55);
    \u0275\u0275repeaterCreate(108, CheckoutComponent_Conditional_11_For_109_Template, 10, 9, "div", 56, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 57)(111, "div", 58)(112, "span");
    \u0275\u0275text(113, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "span");
    \u0275\u0275text(115);
    \u0275\u0275pipe(116, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(117, CheckoutComponent_Conditional_11_Conditional_117_Template, 6, 5, "div", 59);
    \u0275\u0275elementStart(118, "div", 58)(119, "span");
    \u0275\u0275text(120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "span");
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "div", 58)(125, "span");
    \u0275\u0275text(126, "Estimated Tax (8.25%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "span");
    \u0275\u0275text(128);
    \u0275\u0275pipe(129, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(130, "div", 60)(131, "span");
    \u0275\u0275text(132, "Total Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "span");
    \u0275\u0275text(134);
    \u0275\u0275pipe(135, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(136, "button", 61);
    \u0275\u0275conditionalCreate(137, CheckoutComponent_Conditional_11_Conditional_137_Template, 2, 0, "span")(138, CheckoutComponent_Conditional_11_Conditional_138_Template, 3, 4, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "div", 62)(140, "span");
    \u0275\u0275text(141, "\u{1F512} Guaranteed Safe & Secure Checkout");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shipping.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shipping.email);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shipping.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shipping.country);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shipping.addressLine1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shipping.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shipping.state);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shipping.postalCode);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("selected", ctx_r1.shipping.deliveryMethod === "standard");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shipping.deliveryMethod);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.subtotal() >= 45 ? "FREE for orders over $45" : "$4.99");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.subtotal() >= 45 ? "FREE" : "$4.99");
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r1.shipping.deliveryMethod === "express");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shipping.deliveryMethod);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("selected", ctx_r1.shipping.deliveryMethod === "overnight");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shipping.deliveryMethod);
    \u0275\u0275advance(15);
    \u0275\u0275classProp("active", ctx_r1.paymentMethod() === "credit-card");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.paymentMethod() === "paypal");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.paymentMethod() === "apple-pay");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.paymentMethod() === "credit-card" ? 100 : ctx_r1.paymentMethod() === "paypal" ? 101 : 102);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("In Your Bag (", ctx_r1.totalItems(), ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.cartItems());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(116, 35, ctx_r1.subtotal(), "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.discountAmount() > 0 ? 117 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Shipping (", ctx_r1.shipping.deliveryMethod, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.calculateShippingCost() === 0 ? "FREE" : "$" + \u0275\u0275pipeBind2(123, 38, ctx_r1.calculateShippingCost(), "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(129, 41, ctx_r1.taxAmount(), "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(135, 44, ctx_r1.calculateGrandTotal(), "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.submitting() ? 137 : 138);
  }
}
var CheckoutComponent = class _CheckoutComponent {
  router = inject(Router);
  cartService = inject(CartService);
  orderService = inject(OrderService);
  notificationService = inject(NotificationService);
  cartItems = this.cartService.cartItems;
  totalItems = this.cartService.totalItemsCount;
  subtotal = this.cartService.subtotal;
  discountAmount = this.cartService.discountAmount;
  taxAmount = this.cartService.taxAmount;
  appliedPromo = this.cartService.appliedPromo;
  paymentMethod = signal("credit-card", ...ngDevMode ? [{ debugName: "paymentMethod" }] : (
    /* istanbul ignore next */
    []
  ));
  submitting = signal(false, ...ngDevMode ? [{ debugName: "submitting" }] : (
    /* istanbul ignore next */
    []
  ));
  shipping = {
    fullName: "Jane Reader",
    email: "reader@example.com",
    phone: "+1 (555) 234-5678",
    addressLine1: "456 Bookworm Lane",
    city: "Seattle",
    state: "WA",
    postalCode: "98101",
    country: "United States",
    deliveryMethod: "standard"
  };
  cardNumber = "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4242";
  cardExpiry = "08/29";
  cardCvv = "123";
  calculateShippingCost() {
    if (this.shipping.deliveryMethod === "overnight")
      return 19.99;
    if (this.shipping.deliveryMethod === "express")
      return 9.99;
    return this.subtotal() >= 45 ? 0 : 4.99;
  }
  calculateGrandTotal() {
    const sub = this.subtotal();
    const discount = this.discountAmount();
    const shippingCost = this.calculateShippingCost();
    const tax = this.taxAmount();
    return Number((sub - discount + shippingCost + tax).toFixed(2));
  }
  onPlaceOrder(event) {
    event.preventDefault();
    if (!this.shipping.fullName || !this.shipping.email || !this.shipping.addressLine1) {
      this.notificationService.error("Please fill in all required shipping fields");
      return;
    }
    this.submitting.set(true);
    setTimeout(() => {
      const order = this.orderService.createOrder(this.shipping, this.paymentMethod(), this.cartItems(), this.subtotal(), this.discountAmount(), this.calculateShippingCost(), this.taxAmount(), this.calculateGrandTotal(), this.appliedPromo()?.code);
      this.cartService.clearCart();
      this.submitting.set(false);
      this.notificationService.success("Order placed successfully!", "Order Confirmed");
      this.router.navigate(["/order-confirmation", order.id]);
    }, 800);
  }
  static \u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], decls: 12, vars: 1, consts: [[1, "checkout-page"], [1, "container"], [1, "checkout-header"], [1, "page-title"], [1, "secure-badge"], [1, "lock-icon"], [1, "empty-state-box"], [1, "checkout-grid"], ["routerLink", "/", 1, "btn-primary"], [1, "checkout-grid", 3, "submit"], [1, "forms-column"], [1, "checkout-section"], [1, "section-header"], [1, "step-num"], [1, "section-title"], [1, "fields-grid-2"], [1, "form-field"], ["for", "fullName"], ["id", "fullName", "type", "text", "name", "fullName", "required", "", "placeholder", "Jane Doe", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "required", "", "placeholder", "jane@example.com", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "phone"], ["id", "phone", "type", "tel", "name", "phone", "required", "", "placeholder", "+1 (555) 019-2834", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "country"], ["id", "country", "name", "country", 1, "form-input", "select", 3, "ngModelChange", "ngModel"], ["value", "United States"], ["value", "Canada"], ["value", "United Kingdom"], ["value", "Germany"], ["value", "Australia"], ["for", "addressLine1"], ["id", "addressLine1", "type", "text", "name", "addressLine1", "required", "", "placeholder", "123 Library Way, Apt 4B", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "fields-grid-3"], ["for", "city"], ["id", "city", "type", "text", "name", "city", "required", "", "placeholder", "San Francisco", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "state"], ["id", "state", "type", "text", "name", "state", "required", "", "placeholder", "CA", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "postalCode"], ["id", "postalCode", "type", "text", "name", "postalCode", "required", "", "placeholder", "94105", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "delivery-options-stack"], [1, "delivery-opt-card"], ["type", "radio", "name", "deliveryMethod", "value", "standard", 3, "ngModelChange", "ngModel"], [1, "opt-text"], [1, "opt-name"], [1, "opt-sub"], [1, "opt-price"], ["type", "radio", "name", "deliveryMethod", "value", "express", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "deliveryMethod", "value", "overnight", 3, "ngModelChange", "ngModel"], [1, "payment-tabs"], ["type", "button", 1, "pay-tab", 3, "click"], [1, "card-inputs-box"], [1, "payment-note-box"], [1, "sidebar-review-column"], [1, "review-card"], [1, "review-title"], [1, "review-items-stack"], [1, "mini-item-row"], [1, "review-breakdown"], [1, "r-row"], [1, "r-row", "discount"], [1, "r-row", "total"], ["type", "submit", 1, "btn-submit-order", 3, "disabled"], [1, "trust-footer"], ["for", "cardNumber"], ["id", "cardNumber", "type", "text", "placeholder", "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4242", "name", "cardNumber", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "cardExpiry"], ["id", "cardExpiry", "type", "text", "placeholder", "12/28", "name", "cardExpiry", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "cardCvv"], ["id", "cardCvv", "type", "password", "maxlength", "4", "placeholder", "\u2022\u2022\u2022", "name", "cardCvv", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "mini-cover"], [1, "mini-info"], [1, "mini-title"], [1, "mini-meta"], [1, "mini-price"]], template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Checkout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "span", 5);
      \u0275\u0275text(7, "\u{1F512}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "256-Bit SSL Encrypted Secure Checkout");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, CheckoutComponent_Conditional_10_Template, 7, 0, "div", 6)(11, CheckoutComponent_Conditional_11_Template, 142, 47, "form", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.cartItems().length === 0 ? 10 : 11);
    }
  }, dependencies: [CommonModule, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MaxLengthValidator, NgModel, NgForm, DecimalPipe], styles: ["\n.checkout-page[_ngcontent-%COMP%] {\n  padding: 2.5rem 0 4rem;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.checkout-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.secure-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  color: #059669;\n  background: #ecfdf5;\n  padding: 0.4rem 0.8rem;\n  border-radius: 9999px;\n  border: 1px solid #a7f3d0;\n  font-weight: 600;\n}\n.empty-state-box[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #ffffff;\n  border: 1px dashed #cbd5e1;\n  border-radius: 14px;\n  padding: 4rem 1.5rem;\n}\n.checkout-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr;\n  gap: 2.5rem;\n  align-items: flex-start;\n}\n.checkout-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 1.75rem;\n  margin-bottom: 1.75rem;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.step-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #4f46e5;\n  color: #ffffff;\n  font-weight: 800;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.fields-grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.fields-grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr 1fr;\n  gap: 1rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #334155;\n  margin-bottom: 0.35rem;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 0.85rem;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  font-size: 0.875rem;\n  outline: none;\n  background: #f8fafc;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: #4f46e5;\n}\n.form-input.select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.delivery-options-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.delivery-opt-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0.85rem 1rem;\n  border-radius: 10px;\n  border: 1.5px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.delivery-opt-card.selected[_ngcontent-%COMP%] {\n  border-color: #4f46e5;\n  background: #eef2ff;\n}\n.opt-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.opt-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.opt-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.opt-price[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.payment-tabs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.5rem;\n  margin-bottom: 1.25rem;\n}\n.pay-tab[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.5rem;\n  border-radius: 8px;\n  border: 1.5px solid #e2e8f0;\n  background: #f8fafc;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #334155;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.pay-tab.active[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  border-color: #4f46e5;\n  color: #4338ca;\n}\n.payment-note-box[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px dashed #cbd5e1;\n  padding: 1.25rem;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 0.85rem;\n  color: #475569;\n}\n.review-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 1.5rem;\n  position: sticky;\n  top: 90px;\n}\n.review-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 1rem 0;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.review-items-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n  max-height: 240px;\n  overflow-y: auto;\n  margin-bottom: 1.25rem;\n  padding-right: 0.25rem;\n}\n.mini-item-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n}\n.mini-cover[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 44px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.mini-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.mini-title[_ngcontent-%COMP%] {\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mini-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.mini-price[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.review-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 1rem;\n  margin-bottom: 1.25rem;\n}\n.r-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.825rem;\n  color: #64748b;\n}\n.r-row.discount[_ngcontent-%COMP%] {\n  color: #059669;\n  font-weight: 600;\n}\n.r-row.total[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n  border-top: 1px solid #e2e8f0;\n  padding-top: 0.65rem;\n  margin-top: 0.25rem;\n}\n.btn-submit-order[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #4f46e5;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 1rem;\n  padding: 0.85rem;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.btn-submit-order[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4338ca;\n}\n.btn-submit-order[_ngcontent-%COMP%]:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.trust-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n  font-size: 0.75rem;\n  color: #059669;\n  font-weight: 600;\n}\n@media (max-width: 900px) {\n  .checkout-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fields-grid-2[_ngcontent-%COMP%], \n   .fields-grid-3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=checkout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutComponent, [{
    type: Component,
    args: [{ selector: "app-checkout", standalone: true, imports: [CommonModule, RouterLink, FormsModule], template: `
    <div class="checkout-page">
      <div class="container">
        <!-- Breadcrumb / Header -->
        <div class="checkout-header">
          <h1 class="page-title">Checkout</h1>
          <div class="secure-badge">
            <span class="lock-icon">\u{1F512}</span>
            <span>256-Bit SSL Encrypted Secure Checkout</span>
          </div>
        </div>

        @if (cartItems().length === 0) {
          <div class="empty-state-box">
            <h2>Your cart is currently empty</h2>
            <p>Please add books to your shopping cart before proceeding to checkout.</p>
            <a routerLink="/" class="btn-primary">Return to Catalog</a>
          </div>
        } @else {
          <form (submit)="onPlaceOrder($event)" class="checkout-grid">
            <!-- Left: Form Sections -->
            <div class="forms-column">
              <!-- Step 1: Contact & Shipping Address -->
              <section class="checkout-section">
                <div class="section-header">
                  <div class="step-num">1</div>
                  <h2 class="section-title">Shipping & Contact Information</h2>
                </div>

                <div class="fields-grid-2">
                  <div class="form-field">
                    <label for="fullName">Full Name *</label>
                    <input
                      id="fullName"
                      type="text"
                      [(ngModel)]="shipping.fullName"
                      name="fullName"
                      required
                      placeholder="Jane Doe"
                      class="form-input"
                    />
                  </div>

                  <div class="form-field">
                    <label for="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      [(ngModel)]="shipping.email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      class="form-input"
                    />
                  </div>
                </div>

                <div class="fields-grid-2">
                  <div class="form-field">
                    <label for="phone">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      [(ngModel)]="shipping.phone"
                      name="phone"
                      required
                      placeholder="+1 (555) 019-2834"
                      class="form-input"
                    />
                  </div>

                  <div class="form-field">
                    <label for="country">Country / Region *</label>
                    <select
                      id="country"
                      [(ngModel)]="shipping.country"
                      name="country"
                      class="form-input select"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Germany">Germany</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                </div>

                <div class="form-field">
                  <label for="addressLine1">Street Address *</label>
                  <input
                    id="addressLine1"
                    type="text"
                    [(ngModel)]="shipping.addressLine1"
                    name="addressLine1"
                    required
                    placeholder="123 Library Way, Apt 4B"
                    class="form-input"
                  />
                </div>

                <div class="fields-grid-3">
                  <div class="form-field">
                    <label for="city">City *</label>
                    <input
                      id="city"
                      type="text"
                      [(ngModel)]="shipping.city"
                      name="city"
                      required
                      placeholder="San Francisco"
                      class="form-input"
                    />
                  </div>

                  <div class="form-field">
                    <label for="state">State / Province *</label>
                    <input
                      id="state"
                      type="text"
                      [(ngModel)]="shipping.state"
                      name="state"
                      required
                      placeholder="CA"
                      class="form-input"
                    />
                  </div>

                  <div class="form-field">
                    <label for="postalCode">Postal Code *</label>
                    <input
                      id="postalCode"
                      type="text"
                      [(ngModel)]="shipping.postalCode"
                      name="postalCode"
                      required
                      placeholder="94105"
                      class="form-input"
                    />
                  </div>
                </div>
              </section>

              <!-- Step 2: Shipping Method -->
              <section class="checkout-section">
                <div class="section-header">
                  <div class="step-num">2</div>
                  <h2 class="section-title">Delivery Option</h2>
                </div>

                <div class="delivery-options-stack">
                  <label class="delivery-opt-card" [class.selected]="shipping.deliveryMethod === 'standard'">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="standard"
                      [(ngModel)]="shipping.deliveryMethod"
                    />
                    <div class="opt-text">
                      <span class="opt-name">Standard Delivery (3-5 business days)</span>
                      <span class="opt-sub">{{ subtotal() >= 45 ? 'FREE for orders over $45' : '$4.99' }}</span>
                    </div>
                    <span class="opt-price">{{ subtotal() >= 45 ? 'FREE' : '$4.99' }}</span>
                  </label>

                  <label class="delivery-opt-card" [class.selected]="shipping.deliveryMethod === 'express'">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="express"
                      [(ngModel)]="shipping.deliveryMethod"
                    />
                    <div class="opt-text">
                      <span class="opt-name">Express Priority (2 business days)</span>
                      <span class="opt-sub">Tracked and insured priority parcel</span>
                    </div>
                    <span class="opt-price">$9.99</span>
                  </label>

                  <label class="delivery-opt-card" [class.selected]="shipping.deliveryMethod === 'overnight'">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="overnight"
                      [(ngModel)]="shipping.deliveryMethod"
                    />
                    <div class="opt-text">
                      <span class="opt-name">Next-Day Air Delivery (1 business day)</span>
                      <span class="opt-sub">Guaranteed delivery by 10:30 AM</span>
                    </div>
                    <span class="opt-price">$19.99</span>
                  </label>
                </div>
              </section>

              <!-- Step 3: Payment Method -->
              <section class="checkout-section">
                <div class="section-header">
                  <div class="step-num">3</div>
                  <h2 class="section-title">Payment Method</h2>
                </div>

                <div class="payment-tabs">
                  <button
                    type="button"
                    class="pay-tab"
                    [class.active]="paymentMethod() === 'credit-card'"
                    (click)="paymentMethod.set('credit-card')"
                  >
                    \u{1F4B3} Credit / Debit Card
                  </button>
                  <button
                    type="button"
                    class="pay-tab"
                    [class.active]="paymentMethod() === 'paypal'"
                    (click)="paymentMethod.set('paypal')"
                  >
                    \u{1F17F}\uFE0F PayPal
                  </button>
                  <button
                    type="button"
                    class="pay-tab"
                    [class.active]="paymentMethod() === 'apple-pay'"
                    (click)="paymentMethod.set('apple-pay')"
                  >
                    \uF8FF Apple Pay
                  </button>
                </div>

                @if (paymentMethod() === 'credit-card') {
                  <div class="card-inputs-box">
                    <div class="form-field">
                      <label for="cardNumber">Card Number</label>
                      <input
                        id="cardNumber"
                        type="text"
                        placeholder="\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4242"
                        [(ngModel)]="cardNumber"
                        name="cardNumber"
                        class="form-input"
                      />
                    </div>

                    <div class="fields-grid-2">
                      <div class="form-field">
                        <label for="cardExpiry">Expiration (MM/YY)</label>
                        <input
                          id="cardExpiry"
                          type="text"
                          placeholder="12/28"
                          [(ngModel)]="cardExpiry"
                          name="cardExpiry"
                          class="form-input"
                        />
                      </div>

                      <div class="form-field">
                        <label for="cardCvv">Security Code (CVV)</label>
                        <input
                          id="cardCvv"
                          type="password"
                          maxlength="4"
                          placeholder="\u2022\u2022\u2022"
                          [(ngModel)]="cardCvv"
                          name="cardCvv"
                          class="form-input"
                        />
                      </div>
                    </div>
                  </div>
                } @else if (paymentMethod() === 'paypal') {
                  <div class="payment-note-box">
                    <p>You will be securely redirected to PayPal to complete your bookstore purchase.</p>
                  </div>
                } @else {
                  <div class="payment-note-box">
                    <p>Authenticate with Face ID or Touch ID using Apple Pay on your device.</p>
                  </div>
                }
              </section>
            </div>

            <!-- Right: Order Review Sidebar -->
            <aside class="sidebar-review-column">
              <div class="review-card">
                <h2 class="review-title">In Your Bag ({{ totalItems() }})</h2>

                <!-- Items list summary -->
                <div class="review-items-stack">
                  @for (item of cartItems(); track item.book.id + item.format) {
                    <div class="mini-item-row">
                      <div class="mini-cover" [style.background]="item.book.coverGradient"></div>
                      <div class="mini-info">
                        <span class="mini-title">{{ item.book.title }}</span>
                        <span class="mini-meta">{{ item.format }} \xD7 {{ item.quantity }}</span>
                      </div>
                      <span class="mini-price">\${{ (item.itemPrice * item.quantity) | number: '1.2-2' }}</span>
                    </div>
                  }
                </div>

                <!-- Price summary table -->
                <div class="review-breakdown">
                  <div class="r-row">
                    <span>Subtotal</span>
                    <span>\${{ subtotal() | number: '1.2-2' }}</span>
                  </div>

                  @if (discountAmount() > 0) {
                    <div class="r-row discount">
                      <span>Promo Discount ({{ appliedPromo()?.code }})</span>
                      <span>-\${{ discountAmount() | number: '1.2-2' }}</span>
                    </div>
                  }

                  <div class="r-row">
                    <span>Shipping ({{ shipping.deliveryMethod }})</span>
                    <span>{{ calculateShippingCost() === 0 ? 'FREE' : ('$' + (calculateShippingCost() | number: '1.2-2')) }}</span>
                  </div>

                  <div class="r-row">
                    <span>Estimated Tax (8.25%)</span>
                    <span>\${{ taxAmount() | number: '1.2-2' }}</span>
                  </div>

                  <div class="r-row total">
                    <span>Total Amount</span>
                    <span>\${{ calculateGrandTotal() | number: '1.2-2' }}</span>
                  </div>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="btn-submit-order" [disabled]="submitting()">
                  @if (submitting()) {
                    <span>Processing Order...</span>
                  } @else {
                    <span>Place Order \u2022 \${{ calculateGrandTotal() | number: '1.2-2' }}</span>
                  }
                </button>

                <div class="trust-footer">
                  <span>\u{1F512} Guaranteed Safe & Secure Checkout</span>
                </div>
              </div>
            </aside>
          </form>
        }
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;0d4e613a91fe5d4f4606e2453f2a0133e71d3e9becbc97551b75d5ac717d918a;C:/Users/0038EU744/.bob/playground/bookstore-app/src/app/views/checkout/checkout.component.ts */\n.checkout-page {\n  padding: 2.5rem 0 4rem;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.checkout-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.page-title {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.secure-badge {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  color: #059669;\n  background: #ecfdf5;\n  padding: 0.4rem 0.8rem;\n  border-radius: 9999px;\n  border: 1px solid #a7f3d0;\n  font-weight: 600;\n}\n.empty-state-box {\n  text-align: center;\n  background: #ffffff;\n  border: 1px dashed #cbd5e1;\n  border-radius: 14px;\n  padding: 4rem 1.5rem;\n}\n.checkout-grid {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr;\n  gap: 2.5rem;\n  align-items: flex-start;\n}\n.checkout-section {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 1.75rem;\n  margin-bottom: 1.75rem;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.step-num {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #4f46e5;\n  color: #ffffff;\n  font-weight: 800;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.section-title {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.fields-grid-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.fields-grid-3 {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr 1fr;\n  gap: 1rem;\n}\n.form-field {\n  margin-bottom: 1rem;\n}\n.form-field label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #334155;\n  margin-bottom: 0.35rem;\n}\n.form-input {\n  width: 100%;\n  padding: 0.65rem 0.85rem;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  font-size: 0.875rem;\n  outline: none;\n  background: #f8fafc;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.form-input:focus {\n  background: #ffffff;\n  border-color: #4f46e5;\n}\n.form-input.select {\n  cursor: pointer;\n}\n.delivery-options-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.delivery-opt-card {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0.85rem 1rem;\n  border-radius: 10px;\n  border: 1.5px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.delivery-opt-card.selected {\n  border-color: #4f46e5;\n  background: #eef2ff;\n}\n.opt-text {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.opt-name {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.opt-sub {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.opt-price {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.payment-tabs {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.5rem;\n  margin-bottom: 1.25rem;\n}\n.pay-tab {\n  padding: 0.6rem 0.5rem;\n  border-radius: 8px;\n  border: 1.5px solid #e2e8f0;\n  background: #f8fafc;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #334155;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.pay-tab.active {\n  background: #eef2ff;\n  border-color: #4f46e5;\n  color: #4338ca;\n}\n.payment-note-box {\n  background: #f8fafc;\n  border: 1px dashed #cbd5e1;\n  padding: 1.25rem;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 0.85rem;\n  color: #475569;\n}\n.review-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 1.5rem;\n  position: sticky;\n  top: 90px;\n}\n.review-title {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 1rem 0;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.review-items-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n  max-height: 240px;\n  overflow-y: auto;\n  margin-bottom: 1.25rem;\n  padding-right: 0.25rem;\n}\n.mini-item-row {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n}\n.mini-cover {\n  width: 32px;\n  height: 44px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.mini-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.mini-title {\n  font-size: 0.825rem;\n  font-weight: 600;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mini-meta {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.mini-price {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.review-breakdown {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 1rem;\n  margin-bottom: 1.25rem;\n}\n.r-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.825rem;\n  color: #64748b;\n}\n.r-row.discount {\n  color: #059669;\n  font-weight: 600;\n}\n.r-row.total {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n  border-top: 1px solid #e2e8f0;\n  padding-top: 0.65rem;\n  margin-top: 0.25rem;\n}\n.btn-submit-order {\n  width: 100%;\n  background: #4f46e5;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 1rem;\n  padding: 0.85rem;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.btn-submit-order:hover:not(:disabled) {\n  background: #4338ca;\n}\n.btn-submit-order:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.trust-footer {\n  text-align: center;\n  margin-top: 1rem;\n  font-size: 0.75rem;\n  color: #059669;\n  font-weight: 600;\n}\n@media (max-width: 900px) {\n  .checkout-grid {\n    grid-template-columns: 1fr;\n  }\n  .fields-grid-2,\n  .fields-grid-3 {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=checkout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/views/checkout/checkout.component.ts", lineNumber: 721 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=chunk-RDRABI7U.js.map
