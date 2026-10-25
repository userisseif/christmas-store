// ===== STORE SETTINGS: edit these, nothing else needs to change =====
window.STORE = {
  name: "Evergreen Lane",
  tagline: "The Christmas Shop",
  email: "hello@example.com",          // your support email (shown on Contact page)
  currency: "USD",
  freeShippingOver: 50,                 // free US shipping threshold in $
  shippingFee: 5.99,                    // flat shipping under the threshold
  coupons: { XMAS10: 10 },             // promo codes: CODE: percent off
  couponBanner: "Use code <b>XMAS10</b> for 10% off",
  shipsTo: "the United States",
  deliveryText: "Arrives in 7 to 12 business days",

  // PayPal checkout. Leave empty to keep the store in PREVIEW MODE (no real payments).
  // To go live: create a free PayPal Business account, open developer.paypal.com,
  // make an app, and paste its LIVE "Client ID" here.
  paypalClientId: "",

  // While true, every product shows a small "Sample" label so nobody mistakes
  // placeholder items for real stock. Set to false once products are linked to a supplier.
  sampleMode: true
};
