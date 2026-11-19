// ===== STORE SETTINGS: edit these, nothing else needs to change =====
window.STORE = {
  name: "Evergreen Lane",
  tagline: "The Christmas Shop",
  email: "evergreenlaneshop@gmail.com",         // your support email (shown on Contact page)
  currency: "USD",
  freeShippingOver: 50,                 // free US shipping threshold in $
  shippingFee: 5.99,                    // flat shipping under the threshold
  coupons: { XMAS10: 10, LAURIE10: 10, MIRANDA10: 10, GOBBLE15: 15 },  // promo codes: CODE: percent off
  couponBanner: "🦃 <b>Thanksgiving Sale</b> &nbsp;·&nbsp; Buy 1 Get 1 <b>50% off</b> &nbsp;·&nbsp; code <b>GOBBLE15</b> for 15% off",

  // ===== Automatic holiday deals (applied in the cart, no code needed) =====
  // The store always gives the shopper the single BEST deal — auto deals and any
  // code never stack, so your margin is safe. Set enabled:false to turn a deal off.
  deals: {
    bogo:   { enabled: true, pct: 50, label: "Buy 1 Get 1 50% off" },      // cheapest item of each pair, 50% off
    bundle: { enabled: true, minItems: 2, pct: 15, label: "Buy 2+ items, 15% off" }, // whole-order % at 2+ items
    pitch:  "🦃 Thanksgiving Sale — Buy 1 Get 1 50% off, or 15% off any 2 items"
  },
  shipsTo: "the United States",
  deliveryText: "Most orders arrive in 7 to 14 days",

  // PayPal checkout. Leave empty to keep the store in PREVIEW MODE (no real payments).
  // To go live: create a free PayPal Business account, open developer.paypal.com,
  // make an app, and paste its LIVE "Client ID" here.
  paypalClientId: "BAAM9KOuLblSl5VMK8jgVR5mG3rLFCSsZ1FrRnJHTYBLIKzwnj8hegbYoGtx_pW7NA7sb5_l_BHHCT-eq4",

  // Real payments only switch on when sampleMode is false (sample items can't be bought).
  // While true, every product shows a small "Sample" label so nobody mistakes
  // placeholder items for real stock. Set to false once products are linked to a supplier.
  sampleMode: false
};
