(() => {
"use strict";
const S = window.STORE, P = window.PRODUCTS, C = window.CATEGORIES;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const app = $("#app");
const byId = Object.fromEntries(P.map(p => [p.id, p]));
const catById = Object.fromEntries(C.map(c => [c.id, c]));
// Ratings and reviews are demo filler: they only show while sampleMode is on. Never publish made-up reviews on a live store.
const DEMO = !!S.sampleMode;
const HAS_SALE = P.some(p => p.compare);
const money = n => "$" + n.toFixed(2);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const store = {
  get(k, d) { try { const v = localStorage.getItem("el_" + k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem("el_" + k, JSON.stringify(v)); } catch {} }
};
const COLORS = {
  "Warm White": "#f6e7b8", "Cool White": "#eef4ff", "Multicolor": "conic-gradient(#e53935,#fbc02d,#43a047,#1e88e5,#e53935)",
  Red: "#b3222f", Green: "#1f5c45", Gold: "#c8a04a", Silver: "#c7c9cc", White: "#ffffff", Cream: "#efe4cf",
  Blue: "#2d4f8b", Pink: "#e7a3b5", Black: "#222", Natural: "#c9a77c", Plaid: "repeating-linear-gradient(45deg,#b3222f 0 6px,#1f5c45 6px 12px)",
  Navy: "#1f2d4d", Burgundy: "#6d1a2a", Champagne: "#e8d6b0", Grey: "#9a9a9a"
};
const sw = name => COLORS[name] || "#ccc";

/* ---------- state ---------- */
let cart = store.get("cart", []);
let wish = store.get("wish", []);
let coupon = store.get("coupon", null);
const saveCart = () => { store.set("cart", cart); renderCartUI(); };
const saveWish = () => { store.set("wish", wish); renderWishCount(); };

const optOf = (p, opt) => p.options && opt ? p.options.values.find(v => v.v === opt) : null;
const unitPrice = (p, opt) => p.price + (p.options && opt ? (p.options.values.find(v => v.v === opt)?.add || 0) : 0);
const lineKey = (id, color, opt) => [id, color || "", opt || ""].join("|");
function addToCart(id, color, opt, qty = 1) {
  const p = byId[id];
  color = color ?? (p.colors ? p.colors[0] : null);
  opt = opt ?? (p.options ? p.options.values[0].v : null);
  const key = lineKey(id, color, opt);
  const ex = cart.find(l => l.key === key);
  if (ex) ex.qty = Math.min(20, ex.qty + qty); else cart.push({ key, id, color, opt, qty });
  saveCart();
  bump("#cartCount");
  toast(`Added to cart: ${p.name}`);
  openCart();
}
function totals() {
  const sub = cart.reduce((s, l) => s + unitPrice(byId[l.id], l.opt) * l.qty, 0);
  const pct = coupon && S.coupons?.[coupon] ? S.coupons[coupon] : 0;
  const disc = +(sub * pct / 100).toFixed(2);
  const after = sub - disc;
  const ship = cart.length === 0 || after >= S.freeShippingOver ? 0 : S.shippingFee;
  return { sub, disc, ship, total: +(after + ship).toFixed(2), count: cart.reduce((s, l) => s + l.qty, 0), pct };
}

/* ---------- small UI helpers ---------- */
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("on"), 2200); }
function bump(sel) { const b = $(sel); b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump"); }
const stars = r => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));
const pctOff = p => p.compare ? Math.round((1 - p.price / p.compare) * 100) : 0;
const heart = '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-9.2-8.6C1.2 8.2 3 4.5 6.6 4.5c2.1 0 3.4 1.2 4.1 2.3h2.6c.7-1.1 2-2.3 4.1-2.3 3.6 0 5.4 3.7 3.8 6.9C19 15.6 12 20 12 20z"/></svg>';

function card(p) {
  const off = pctOff(p);
  return `<article class="card reveal">
    <a href="#/p/${p.id}" class="card-media" aria-label="${esc(p.name)}"${p.video ? ` data-video="${p.video}"` : ""}>
      <img src="${p.thumb || p.img[0]}" alt="${esc(p.name)}" loading="lazy">
      ${p.video ? `<span class="vid-badge" aria-hidden="true">▶ Video</span>` : ""}
      <div class="tags">
        ${off ? `<span class="tag sale">-${off}%</span>` : ""}
        ${p.tags?.includes("new") ? '<span class="tag new">New</span>' : ""}
        ${p.tags?.includes("trending") ? '<span class="tag">Trending</span>' : ""}
        ${S.sampleMode ? '<span class="tag sample">Sample</span>' : ""}
      </div>
    </a>
    <button class="wish ${wish.includes(p.id) ? "on" : ""}" data-wish="${p.id}" aria-label="Save to wishlist">${heart}</button>
    <div class="quick"><button class="btn btn-sm btn-block" data-add="${p.id}">Quick add</button></div>
    <div class="card-body">
      <span class="card-cat">${esc(catById[p.cat].name)}</span>
      <a href="#/p/${p.id}" class="card-name">${esc(p.name)}</a>
      ${DEMO ? `<div class="rating"><span class="stars">${stars(p.rating)}</span>${p.rating.toFixed(1)} (${p.reviews})</div>` : ""}
      ${p.colors ? `<div class="swatches">${p.colors.slice(0, 6).map(c => `<i style="background:${sw(c)}" title="${esc(c)}"></i>`).join("")}</div>` : ""}
      <div class="price"><b>${money(p.price)}</b>${p.compare ? `<s>${money(p.compare)}</s>` : ""}</div>
    </div>
  </article>`;
}

/* ---------- header / chrome ---------- */
function renderChrome() {
  const logo = `<span class="mark">✦</span><span>${esc(S.name)}<small>${esc(S.tagline)}</small></span>`;
  $("#logo").innerHTML = logo;
  $("#footLogo").innerHTML = logo;
  document.title = `${S.name} | ${S.tagline}`;
  $("#announce").innerHTML = `Free US shipping on orders over <b>$${S.freeShippingOver}</b> &nbsp;·&nbsp; ${S.couponBanner || ""}`;
  const links = C.map(c => `<a href="#/shop?cat=${c.id}" data-cat="${c.id}">${esc(c.name)}</a>`).join("");
  $("#catnav").innerHTML = `<a href="#/shop">Shop all</a>${links}${HAS_SALE ? '<a href="#/shop?sale=1" class="sale">Sale</a>' : ""}`;
  $("#mobileMenu").innerHTML = `<div class="logo" style="margin-bottom:14px">${logo}</div><a href="#/">Home</a><a href="#/shop">Shop all</a>${links}${HAS_SALE ? '<a href="#/shop?sale=1">Sale</a>' : ""}<a href="#/wishlist">Wishlist</a><a href="#/page/contact">Contact</a>`;
  $("#footCats").innerHTML = C.map(c => `<li><a href="#/shop?cat=${c.id}">${esc(c.name)}</a></li>`).join("");
  $("#copy").textContent = `© ${new Date().getFullYear()} ${S.name}. All rights reserved.`;
}
function renderWishCount() { const b = $("#wishCount"); b.textContent = wish.length; b.hidden = !wish.length; }

/* ---------- cart drawer ---------- */
const mask = $("#mask"), drawer = $("#cartDrawer"), mmenu = $("#mobileMenu");
function openCart() { drawer.classList.add("on"); mask.classList.add("on"); }
function closeAll() { [drawer, mmenu, mask, $(".filters")].forEach(e => e && e.classList.remove("on")); }
mask.onclick = closeAll;
$("#cartClose").onclick = closeAll;
$("#cartBtn").onclick = openCart;
$("#menuBtn").onclick = () => { mmenu.classList.add("on"); mask.classList.add("on"); };
mmenu.addEventListener("click", e => { if (e.target.closest("a")) closeAll(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeAll(); $(".zoom")?.remove(); } });

function cartLines(editable = true) {
  return cart.map(l => {
    const p = byId[l.id]; if (!p) return "";
    const variant = [l.color, l.opt].filter(Boolean).join(" · ");
    return `<div class="line">
      <a href="#/p/${p.id}"><img src="${p.img[0]}" alt=""></a>
      <div><a href="#/p/${p.id}" class="ln">${esc(p.name)}</a><div class="lv">${esc(variant)}</div>
        ${editable ? `<div class="qty"><button data-q="-1" data-k="${esc(l.key)}" aria-label="Less">−</button><input value="${l.qty}" readonly aria-label="Quantity"><button data-q="1" data-k="${esc(l.key)}" aria-label="More">+</button></div>
        <button class="rm" data-rm="${esc(l.key)}">Remove</button>` : `<div class="lv">Qty ${l.qty}</div>`}
      </div>
      <div class="lp">${money(unitPrice(p, l.opt) * l.qty)}</div>
    </div>`;
  }).join("");
}
function shipMsg(t) {
  const left = S.freeShippingOver - (t.sub - t.disc);
  const pct = Math.min(100, ((t.sub - t.disc) / S.freeShippingOver) * 100);
  return (left > 0 ? `You're <b>${money(left)}</b> away from free shipping 🎁` : `You've unlocked <b>free shipping</b> 🎉`) + `<div class="bar"><i style="width:${pct}%"></i></div>`;
}
function summaryRows(t) {
  return `<div class="sumrow"><span>Subtotal (${t.count} item${t.count === 1 ? "" : "s"})</span><span>${money(t.sub)}</span></div>
    ${t.disc ? `<div class="sumrow" style="color:var(--berry)"><span>Discount (${esc(coupon)} −${t.pct}%)</span><span>−${money(t.disc)}</span></div>` : ""}
    <div class="sumrow"><span>Shipping</span><span>${t.ship ? money(t.ship) : "Free"}</span></div>
    <div class="sumrow total"><span>Total</span><span>${money(t.total)}</span></div>`;
}
function renderCartUI() {
  const t = totals(), b = $("#cartCount");
  b.textContent = t.count; b.hidden = !t.count;
  if (!cart.length) {
    $("#cdShip").innerHTML = "";
    $("#cdBody").innerHTML = `<div class="cart-empty"><div style="font-size:44px">🛷</div><h3>Your sleigh is empty</h3><p class="muted">Find something festive to fill it.</p><a href="#/shop" class="btn btn-sm" onclick="">Start shopping</a></div>`;
    $("#cdFoot").innerHTML = "";
    return;
  }
  $("#cdShip").innerHTML = shipMsg(t);
  $("#cdBody").innerHTML = cartLines();
  $("#cdFoot").innerHTML = summaryRows(t) + `<a href="#/checkout" class="btn btn-berry btn-block">Checkout</a><a href="#/cart" class="btn btn-ghost btn-block btn-sm" style="margin-top:8px">View cart</a>`;
}
document.addEventListener("click", e => {
  const q = e.target.closest("[data-q]"), rm = e.target.closest("[data-rm]");
  if (q) { const l = cart.find(x => x.key === q.dataset.k); l.qty = Math.max(1, Math.min(20, l.qty + +q.dataset.q)); saveCart(); rerenderIfCartPage(); }
  if (rm) { cart = cart.filter(x => x.key !== rm.dataset.rm); saveCart(); rerenderIfCartPage(); }
  const add = e.target.closest("[data-add]");
  if (add) { e.preventDefault(); addToCart(add.dataset.add); }
  const w = e.target.closest("[data-wish]");
  if (w) {
    e.preventDefault();
    const id = w.dataset.wish;
    wish = wish.includes(id) ? wish.filter(x => x !== id) : [...wish, id];
    saveWish();
    $$(`[data-wish="${id}"]`).forEach(b => b.classList.toggle("on", wish.includes(id)));
    toast(wish.includes(id) ? "Saved to your wishlist" : "Removed from wishlist");
    if (location.hash.startsWith("#/wishlist")) route();
  }
  if (e.target.closest(".cd-body a, .cd-foot a, .cart-empty a")) closeAll();
});
function rerenderIfCartPage() { if (/^#\/(cart|checkout)/.test(location.hash)) route(); }

/* ---------- search with suggestions ---------- */
const norm = s => s.toLowerCase().normalize("NFKD").replace(/[^\w\s]/g, " ");
function searchProducts(q) {
  const words = norm(q).split(/\s+/).filter(Boolean);
  if (!words.length) return P;
  return P.map(p => {
    const hay = norm([p.name, catById[p.cat].name, p.desc, (p.keywords || []).join(" "), (p.colors || []).join(" ")].join(" "));
    const name = norm(p.name);
    let score = 0;
    for (const w of words) {
      const stem = w.replace(/s$/, "");
      if (!hay.includes(stem)) return null;
      score += name.includes(stem) ? 3 : 1;
    }
    return { p, score };
  }).filter(Boolean).sort((a, b) => b.score - a.score).map(x => x.p);
}
const sInput = $("#search"), sBox = $("#suggest");
let sIdx = -1;
sInput.addEventListener("input", () => {
  const q = sInput.value.trim();
  if (q.length < 2) { sBox.hidden = true; return; }
  const res = searchProducts(q).slice(0, 5);
  sIdx = -1;
  sBox.innerHTML = res.length
    ? res.map(p => `<a href="#/p/${p.id}"><img src="${p.img[0]}" alt=""><div><div class="s-name">${esc(p.name)}</div><div class="small muted">${money(p.price)}</div></div></a>`).join("") + `<a class="s-all" href="#/shop?q=${encodeURIComponent(q)}">See all results for “${esc(q)}”</a>`
    : `<a class="s-all" href="#/shop?q=${encodeURIComponent(q)}">No quick matches. Search anyway</a>`;
  sBox.hidden = false;
});
sInput.addEventListener("keydown", e => {
  const items = $$("a", sBox);
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    sIdx = (sIdx + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
    items.forEach((a, i) => a.classList.toggle("active", i === sIdx));
  } else if (e.key === "Enter") {
    e.preventDefault();
    if (sIdx >= 0 && items[sIdx]) location.hash = items[sIdx].getAttribute("href");
    else location.hash = `#/shop?q=${encodeURIComponent(sInput.value.trim())}`;
    sBox.hidden = true; sInput.blur();
  }
});
document.addEventListener("click", e => { if (!e.target.closest("#searchWrap")) sBox.hidden = true; else if (e.target.closest(".suggest a")) sBox.hidden = true; });

/* ---------- pages ---------- */
function daysToXmas() {
  const now = new Date(); let x = new Date(now.getFullYear(), 11, 25);
  if (now > new Date(now.getFullYear(), 11, 26)) x = new Date(now.getFullYear() + 1, 11, 25);
  return Math.max(0, x - now);
}
function home() {
  const best = P.filter(p => p.tags?.includes("trending")).slice(0, 8);
  const fresh = P.filter(p => p.tags?.includes("new")).slice(0, 4);
  const vids = P.filter(p => p.video).slice(0, 4);
  const under = P.filter(p => p.price < 25).sort((a, b) => a.price - b.price).slice(0, 4);
  const h = S.hero;
  app.innerHTML = `
  <section class="hero">
    <div class="hero-in">
      <div class="hero-copy">
        <span class="eyebrow">The 2026 Holiday Collection</span>
        <h1>Make this Christmas <em>glow</em>.</h1>
        <p>Twinkling lights, heirloom ornaments, cozy mugs and everything in between. Hand-picked holiday cheer, shipped to your door.</p>
        <div class="hero-ctas"><a href="#/shop" class="btn btn-berry">Shop the collection</a><a href="#/shop?cat=lights" class="btn btn-light">Shop lights</a></div>
        <div class="cd-label">Christmas is coming in</div>
        <div class="countdown" id="countdown"></div>
      </div>
      <div class="hero-media">
        <div class="tile t1"><img src="${h[0]}" alt=""></div>
        <div class="tile t2"><img src="${h[1]}" alt=""></div>
        <div class="tile t3"><img src="${h[2]}" alt=""></div>
      </div>
    </div>
  </section>
  <section class="perks"><div class="perks-in">
    <div class="perk"><svg viewBox="0 0 24 24"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg><span><b>Free shipping</b>On US orders over $${S.freeShippingOver}</span></div>
    <div class="perk"><svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.3-5.6M4 4v4h4"/></svg><span><b>Easy returns</b>30-day happiness promise</span></div>
    <div class="perk"><svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg><span><b>Secure checkout</b>Pay with PayPal or card</span></div>
    <div class="perk"><svg viewBox="0 0 24 24"><path d="M20 12v9H4v-9M2 7h20v5H2zM12 21V7M12 7S10.5 3 8 3a2 2 0 0 0 0 4M12 7s1.5-4 4-4a2 2 0 0 1 0 4"/></svg><span><b>Gift ready</b>Add a note at checkout</span></div>
  </div></section>
  <section class="section"><div class="wrap">
    <div class="sec-head"><h2>Shop by category</h2><a href="#/shop">View all →</a></div>
    <div class="cats">${C.map(c => `<a href="#/shop?cat=${c.id}" class="cat reveal"><img src="${c.img}" alt="" loading="lazy"><div class="cat-label"><h3>${esc(c.name)}</h3><span>${P.filter(p => p.cat === c.id).length} products</span></div></a>`).join("")}</div>
  </div></section>
  <section class="section" style="padding-top:0"><div class="wrap">
    <div class="sec-head"><h2>Trending this season</h2><a href="#/shop?sort=popular">Shop trending →</a></div>
    <div class="grid">${best.map(card).join("")}</div>
  </div></section>
  <section class="section" style="padding-top:0"><div class="wrap">
    <div class="band reveal">
      <div><span class="eyebrow" style="color:#ffd9a0">Holiday offer</span><h2>10% off everything with code XMAS10</h2><p>Stock up on lights, ornaments and gifts before the big day. Enter the code at checkout, and orders over $${S.freeShippingOver} ship free.</p><a href="#/shop" class="btn btn-light">Start shopping</a></div>
      <img src="${S.bandImg}" alt="" loading="lazy">
    </div>
  </div></section>
  <section class="section" style="padding-top:0"><div class="wrap">
    <div class="sec-head"><h2>See them in action</h2><a href="#/shop">Shop all →</a></div>
    <div class="grid">${vids.map(card).join("")}</div>
  </div></section>
  <section class="section" style="padding-top:0"><div class="wrap">
    <div class="sec-head"><h2>Stocking stuffers under $25</h2><a href="#/shop?sort=price-asc">Shop by price →</a></div>
    <div class="grid">${under.map(card).join("")}</div>
  </div></section>
  <section class="section" style="padding-top:0"><div class="wrap">
    <div class="sec-head"><h2>New this season</h2><a href="#/shop?sort=new">See what's new →</a></div>
    <div class="grid">${fresh.map(card).join("")}</div>
  </div></section>`;
  tickCountdown();
}
function tickCountdown() {
  const el = $("#countdown"); if (!el) return;
  const ms = daysToXmas();
  const d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24, m = Math.floor(ms / 6e4) % 60, s = Math.floor(ms / 1e3) % 60;
  el.innerHTML = [[d, "Days"], [h, "Hours"], [m, "Mins"], [s, "Secs"]].map(([n, l]) => `<div><b>${String(n).padStart(2, "0")}</b><span>${l}</span></div>`).join("");
}
setInterval(tickCountdown, 1000);

/* shop listing with filters */
function shop(params) {
  const cat = params.get("cat") || "", q = params.get("q") || "", sale = params.get("sale") === "1";
  const sort = params.get("sort") || (q ? "relevance" : "featured");
  const colorSel = (params.get("color") || "").split(",").filter(Boolean);
  const min = parseFloat(params.get("min")) || 0, max = parseFloat(params.get("max")) || Infinity;
  const minRating = parseFloat(params.get("rating")) || 0;

  let base = q ? searchProducts(q) : P.slice();
  const inCat = cat ? base.filter(p => p.cat === cat) : base;
  let list = inCat.filter(p => (!sale || p.compare) && p.price >= min && p.price <= max && (!DEMO || p.rating >= minRating) && (!colorSel.length || (p.colors || []).some(c => colorSel.includes(c))));
  const sorters = {
    featured: (a, b) => (b.tags?.includes("trending") - a.tags?.includes("trending")) || (b.pop || 0) - (a.pop || 0),
    popular: (a, b) => (b.pop || 0) - (a.pop || 0),
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    rating: (a, b) => b.rating - a.rating,
    new: (a, b) => (b.tags?.includes("new") - a.tags?.includes("new")) || (b.pop || 0) - (a.pop || 0),
    discount: (a, b) => pctOff(b) - pctOff(a)
  };
  if (sorters[sort]) list.sort(sorters[sort]);

  const allColors = [...new Set(inCat.flatMap(p => p.colors || []))];
  const title = q ? `Results for “${esc(q)}”` : sale ? "Holiday Sale" : cat ? esc(catById[cat].name) : "Shop all";
  const sub = cat && !q ? esc(catById[cat].blurb) : `${list.length} product${list.length === 1 ? "" : "s"}`;
  const link = mod => { const n = new URLSearchParams(params); Object.entries(mod).forEach(([k, v]) => v === null || v === "" ? n.delete(k) : n.set(k, v)); return "#/shop?" + n.toString(); };

  const chips = [];
  if (cat) chips.push([catById[cat].name, link({ cat: null })]);
  if (q) chips.push([`“${q}”`, link({ q: null })]);
  if (sale) chips.push(["On sale", link({ sale: null })]);
  colorSel.forEach(c => chips.push([c, link({ color: colorSel.filter(x => x !== c).join(",") })]));
  if (min || max !== Infinity) chips.push([`$${min} to ${max === Infinity ? "any" : "$" + max}`, link({ min: null, max: null })]);
  if (minRating) chips.push([`${minRating}★ & up`, link({ rating: null })]);

  app.innerHTML = `<div class="wrap">
    <div class="shop-head">
      <div class="crumbs"><a href="#/">Home</a> / <a href="#/shop">Shop</a>${cat ? ` / ${esc(catById[cat].name)}` : ""}</div>
      <h1 style="font-size:clamp(30px,4vw,44px);margin:0">${title}</h1>
      <p class="muted" style="margin:6px 0 0">${sub}</p>
    </div>
    <div class="shop">
      <aside class="filters" id="filters">
        <div class="fgroup"><h4>Category</h4>
          <label><input type="radio" name="cat" value="" ${!cat ? "checked" : ""}> All <span class="n">${base.length}</span></label>
          ${C.map(c => `<label><input type="radio" name="cat" value="${c.id}" ${cat === c.id ? "checked" : ""}> ${esc(c.name)} <span class="n">${base.filter(p => p.cat === c.id).length}</span></label>`).join("")}
        </div>
        <div class="fgroup"><h4>Price</h4>
          <div class="price-inputs"><input type="number" min="0" placeholder="$ Min" id="fmin" value="${min || ""}"><span>to</span><input type="number" min="0" placeholder="$ Max" id="fmax" value="${max === Infinity ? "" : max}"></div>
          ${[[0, 15], [15, 30], [30, 60], [60, null]].map(([a, b]) => `<label><input type="radio" name="pr" data-min="${a}" data-max="${b ?? ""}" ${min === a && (b ? max === b : max === Infinity) && (a || b) ? "checked" : ""}> ${b ? `$${a} to $${b}` : `$${a}+`}</label>`).join("")}
        </div>
        ${allColors.length ? `<div class="fgroup"><h4>Color</h4><div class="color-filter">${allColors.map(c => `<button data-color="${esc(c)}" class="${colorSel.includes(c) ? "on" : ""}" style="background:${sw(c)}" title="${esc(c)}" aria-label="${esc(c)}"></button>`).join("")}</div></div>` : ""}
        ${DEMO ? `<div class="fgroup"><h4>Rating</h4>
          ${[4.5, 4, 0].map(r => `<label><input type="radio" name="rt" value="${r}" ${minRating === r ? "checked" : ""}> ${r ? `${r}★ & up` : "Any rating"}</label>`).join("")}
        </div>` : ""}
        ${HAS_SALE ? "" : "<!--"}<div class="fgroup"><h4>Deals</h4><label><input type="checkbox" id="fsale" ${sale ? "checked" : ""}> On sale only</label></div>${HAS_SALE ? "" : "-->"}
        <a href="#/shop${q ? "?q=" + encodeURIComponent(q) : ""}" class="btn btn-ghost btn-sm btn-block" style="margin-top:16px">Clear filters</a>
      </aside>
      <section>
        <div class="toolbar">
          <div class="chips">
            <button class="btn btn-ghost btn-sm filter-toggle" id="ftoggle">Filters</button>
            ${chips.map(([l, h]) => `<span class="chip">${esc(l)} <a href="${h}" aria-label="Remove filter"><button tabindex="-1">×</button></a></span>`).join("")}
          </div>
          <label class="small muted">Sort by
            <select id="sort">
              ${[["featured", "Featured"], ...(q ? [["relevance", "Best match"]] : []), ["popular", "Most popular"], ["new", "Newest"], ["price-asc", "Price: low to high"], ["price-desc", "Price: high to low"], ...(DEMO ? [["rating", "Top rated"]] : []), ...(HAS_SALE ? [["discount", "Biggest discount"]] : [])].map(([v, l]) => `<option value="${v}" ${sort === v ? "selected" : ""}>${l}</option>`).join("")}
            </select>
          </label>
        </div>
        ${list.length ? `<div class="grid">${list.map(card).join("")}</div>` : `<div class="empty"><div style="font-size:40px">❄️</div><h3>No matches</h3><p class="muted">Try another search or clear some filters.</p><a href="#/shop" class="btn btn-sm">See everything</a></div>`}
      </section>
    </div></div>`;

  const go = mod => { location.hash = link(mod); };
  $$('input[name="cat"]').forEach(i => i.onchange = () => go({ cat: i.value, color: null }));
  $$('input[name="pr"]').forEach(i => i.onchange = () => go({ min: i.dataset.min === "0" ? null : i.dataset.min, max: i.dataset.max || null }));
  $$('input[name="rt"]').forEach(i => i.onchange = () => go({ rating: i.value === "0" ? null : i.value }));
  if ($("#fsale")) $("#fsale").onchange = e => go({ sale: e.target.checked ? "1" : null });
  const priceGo = () => go({ min: $("#fmin").value || null, max: $("#fmax").value || null });
  $("#fmin").onchange = priceGo; $("#fmax").onchange = priceGo;
  $$("[data-color]").forEach(b => b.onclick = () => {
    const c = b.dataset.color, n = colorSel.includes(c) ? colorSel.filter(x => x !== c) : [...colorSel, c];
    go({ color: n.join(",") || null });
  });
  $("#sort").onchange = e => go({ sort: e.target.value });
  $("#ftoggle").onclick = () => { $("#filters").classList.add("on"); mask.classList.add("on"); };
}

/* product page */
function product(id) {
  const p = byId[id];
  if (!p) return notFound();
  let color = p.colors ? p.colors[0] : null, opt = p.options ? p.options.values[0].v : null, qty = 1, imgI = 0;
  const viewed = store.get("viewed", []).filter(x => x !== id); viewed.unshift(id); store.set("viewed", viewed.slice(0, 12));
  const related = P.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  const recent = viewed.slice(1, 5).map(i => byId[i]).filter(Boolean);
  const off = pctOff(p);
  const [dMin, dMax] = p.days || [7, 12];
  const d1 = new Date(Date.now() + dMin * 864e5), d2 = new Date(Date.now() + dMax * 864e5);
  const fmt = d => d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  app.innerHTML = `<div class="wrap">
    <div class="crumbs" style="padding-top:24px"><a href="#/">Home</a> / <a href="#/shop?cat=${p.cat}">${esc(catById[p.cat].name)}</a> / ${esc(p.name)}</div>
    <div class="pdp">
      <div class="gallery">
        <div class="thumbs">${p.img.map((src, i) => `<button data-img="${i}" class="${i ? "" : "on"}" aria-label="Image ${i + 1}"><img src="${src}" alt=""></button>`).join("")}${p.video ? `<button data-media="video" class="th-vid" aria-label="Watch video"><img src="${p.poster || p.img[0]}" alt=""><span>▶</span></button>` : ""}${p.room ? `<button data-media="room" class="th-room" aria-label="See it in a room"><img src="${ROOMS[p.room.scene].img}" alt=""><span>In your<br>home</span></button>` : ""}</div>
        <div class="main-img" id="mainImg"><img src="${p.img[0]}" alt="${esc(p.name)}"><div class="tags">${off ? `<span class="tag sale">Save ${off}%</span>` : ""}${S.sampleMode ? '<span class="tag sample">Sample</span>' : ""}</div></div>
      </div>
      <div>
        <span class="card-cat">${esc(catById[p.cat].name)}</span>
        <h1>${esc(p.name)}</h1>
        ${DEMO ? `<div class="rating"><span class="stars">${stars(p.rating)}</span> ${p.rating.toFixed(1)} · <a href="#reviews" style="text-decoration:underline">${p.reviews} sample reviews</a></div>` : ""}
        <div class="price" id="pPrice"></div>
        <p style="margin:16px 0 0">${esc(p.desc)}</p>
        ${p.colors ? `<div class="opt"><div class="opt-label">Color: <span id="colorName">${esc(color)}</span></div><div class="opts colors">${p.colors.map((c, i) => `<button data-color="${esc(c)}" class="${i ? "" : "on"}" style="background:${sw(c)}" aria-label="${esc(c)}" title="${esc(c)}"></button>`).join("")}</div></div>` : ""}
        ${p.options ? `<div class="opt"><div class="opt-label">${esc(p.options.name)}: <span id="optName">${esc(opt)}</span></div><div class="opts">${p.options.values.map((o, i) => `<button data-opt="${esc(o.v)}" class="${i ? "" : "on"}">${esc(o.v)}</button>`).join("")}</div></div>` : ""}
        <div class="buy-row">
          <div class="qty"><button id="qm" aria-label="Less">−</button><input id="qv" value="1" readonly aria-label="Quantity"><button id="qp" aria-label="More">+</button></div>
          <button class="btn btn-berry" id="addBtn">Add to cart</button>
          <button class="icon-btn wish ${wish.includes(p.id) ? "on" : ""}" data-wish="${p.id}" style="position:static;width:48px;height:48px;border:1.5px solid var(--line-2)" aria-label="Save to wishlist">${heart}</button>
        </div>
        ${p.room ? `<button class="btn btn-ghost btn-sm room-cta" id="roomCta">✨ See it in your home</button>` : ""}
        <div class="stock"><span class="dot"></span>In stock, ready to ship</div>
        <div class="assure">
          <div><svg viewBox="0 0 24 24"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>Estimated delivery ${fmt(d1)} to ${fmt(d2)}</div>
          <div><svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.3-5.6M4 4v4h4"/></svg>30-day returns</div>
          <div><svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>Secure PayPal checkout</div>
          <div><svg viewBox="0 0 24 24"><path d="M20 12v9H4v-9M2 7h20v5H2zM12 21V7"/></svg>Gift note at checkout</div>
        </div>
        <div style="margin-top:24px">
          <details class="acc" open><summary>Details</summary><ul>${p.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul></details>
          <details class="acc"><summary>Shipping</summary><p>Ships to ${esc(S.shipsTo)}. Arrives in about ${dMin} to ${dMax} days. Free shipping on orders over $${S.freeShippingOver}, otherwise ${money(S.shippingFee)} flat. You'll get a tracking number by email once your order ships.</p></details>
          <details class="acc"><summary>Returns</summary><p>Not in love with it? Contact us within 30 days of delivery for a refund or replacement. Items arriving damaged are replaced free.</p></details>
        </div>
        ${S.sampleMode ? `<div class="sample-note"><b>Sample product.</b> This item is a placeholder to show how the store works. Its photo is a free stock image and it is not linked to a supplier yet.</div>` : ""}
      </div>
    </div>
    ${DEMO ? `<section class="section" id="reviews" style="padding-top:10px">
      <div class="sec-head"><h2>What shoppers say</h2><span class="muted">${p.rating.toFixed(1)} out of 5</span></div>
      <div class="reviews">${reviewsFor(p).map(r => `<div class="review"><span class="stars">${stars(r.s)}</span><p>“${esc(r.t)}”</p><span class="small muted">${esc(r.n)} · sample review</span></div>`).join("")}</div>
    </section>` : ""}
    ${related.length ? `<section class="section" style="padding-top:0"><div class="sec-head"><h2>You may also like</h2><a href="#/shop?cat=${p.cat}">More ${esc(catById[p.cat].name)} →</a></div><div class="grid">${related.map(card).join("")}</div></section>` : ""}
    ${recent.length ? `<section class="section" style="padding-top:0"><div class="sec-head"><h2>Recently viewed</h2></div><div class="grid">${recent.map(card).join("")}</div></section>` : ""}
  </div>`;

  const setPrice = () => {
    const u = unitPrice(p, opt);
    $("#pPrice").innerHTML = `<b>${money(u)}</b>${p.compare ? `<s>${money(p.compare + (u - p.price))}</s><span class="off">Save ${off}%</span>` : ""}`;
  };
  setPrice();
  const mi = $("#mainImg");
  const mark = b => $$(".thumbs button").forEach(x => x.classList.toggle("on", x === b));
  const showImg = () => { mi.classList.remove("is-media"); mi.innerHTML = `<img src="${p.img[imgI]}" alt="${esc(p.name)}">`; };
  $$("[data-img]").forEach(b => b.onclick = () => { imgI = +b.dataset.img; showImg(); mark(b); });
  const showVideo = b => {
    mi.classList.add("is-media");
    mi.innerHTML = `<video src="${p.video}" poster="${p.poster || p.img[0]}" autoplay muted loop playsinline controls></video>`;
    mark(b);
  };
  const showRoom = b => { mi.classList.add("is-media"); roomView(mi, p); mark(b); };
  const vb = $('[data-media="video"]'), rb = $('[data-media="room"]');
  if (vb) vb.onclick = () => showVideo(vb);
  if (rb) rb.onclick = () => showRoom(rb);
  if ($("#roomCta")) $("#roomCta").onclick = () => { showRoom(rb); mi.scrollIntoView({ behavior: "smooth", block: "center" }); };
  $$(".opts.colors [data-color]").forEach(b => b.onclick = () => {
    color = b.dataset.color; $("#colorName").textContent = color;
    $$(".opts.colors [data-color]").forEach(x => x.classList.toggle("on", x === b));
  });
  $$("[data-opt]").forEach(b => b.onclick = () => {
    opt = b.dataset.opt; $("#optName").textContent = opt;
    $$("[data-opt]").forEach(x => x.classList.toggle("on", x === b)); setPrice();
  });
  $("#qm").onclick = () => { qty = Math.max(1, qty - 1); $("#qv").value = qty; };
  $("#qp").onclick = () => { qty = Math.min(20, qty + 1); $("#qv").value = qty; };
  $("#addBtn").onclick = () => addToCart(p.id, color, opt, qty);
  mi.onclick = () => { if (mi.classList.contains("is-media")) return; const z = document.createElement("div"); z.className = "zoom"; z.innerHTML = `<img src="${p.img[imgI]}" alt="">`; z.onclick = () => z.remove(); document.body.appendChild(z); };
  if (matchMedia("(hover:hover)").matches) {
    mi.onmousemove = e => { if (mi.classList.contains("is-media")) return; const r = mi.getBoundingClientRect(), img = $("img", mi); img.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`; img.style.transform = "scale(1.6)"; };
    mi.onmouseleave = () => { if (!mi.classList.contains("is-media")) $("img", mi).style.transform = ""; };
  }
}
/* "See it in your home": the product cut-out placed in a real room photo. Drag to move, slider to resize. */
const ROOMS = {
  mantel: { img: "img/rooms/mantel.jpg", name: "Fireplace" },
  tree: { img: "img/rooms/tree.jpg", name: "By the tree" },
  gifts: { img: "img/rooms/gifts.jpg", name: "Christmas morning" },
  modern: { img: "img/rooms/modern.jpg", name: "Living room" },
  door: { img: "img/rooms/door.jpg", name: "Front door" },
  bright: { img: "img/rooms/bright.jpg", name: "Sunroom" },
  bedroom: { img: "img/rooms/bedroom.jpg", name: "Bedroom" },
  kitchen: { img: "img/rooms/kitchen.jpg", name: "Kitchen" }
};
function roomView(host, p) {
  const r = p.room;
  const scenes = [r.scene, ...Object.keys(ROOMS).filter(k => k !== r.scene)].slice(0, 4);
  let scene = r.scene, x = r.x, y = r.y, w = r.w;
  host.innerHTML = `<div class="room" id="room">
      <img class="room-bg" src="${ROOMS[scene].img}" alt="">
      <img class="room-item" src="${r.cut}" alt="${esc(p.name)} shown in a room" draggable="false">
      <span class="room-hint">Drag to move it</span>
    </div>
    <div class="room-bar">
      <div class="room-scenes">${scenes.map(k => `<button data-scene="${k}" class="${k === scene ? "on" : ""}">${ROOMS[k].name}</button>`).join("")}</div>
      <label class="room-size">Size <input type="range" min="5" max="60" value="${w}" id="roomSize"></label>
    </div>`;
  const room = $("#room", host), item = $(".room-item", host), bg = $(".room-bg", host);
  const place = () => { item.style.left = x + "%"; item.style.top = y + "%"; item.style.width = w + "%"; };
  place();
  $$("[data-scene]", host).forEach(b => b.onclick = () => {
    scene = b.dataset.scene; bg.src = ROOMS[scene].img;
    $$("[data-scene]", host).forEach(o => o.classList.toggle("on", o === b));
  });
  $("#roomSize", host).oninput = e => { w = +e.target.value; place(); };
  item.onpointerdown = e => {
    e.preventDefault(); item.setPointerCapture(e.pointerId); room.classList.add("moved");
    const rect = room.getBoundingClientRect(), sx = e.clientX, sy = e.clientY, ox = x, oy = y;
    item.onpointermove = m => {
      x = Math.min(95, Math.max(5, ox + (m.clientX - sx) / rect.width * 100));
      y = Math.min(100, Math.max(12, oy + (m.clientY - sy) / rect.height * 100));
      place();
    };
    item.onpointerup = () => { item.onpointermove = null; };
  };
}
function reviewsFor(p) {
  const pool = [
    ["Even prettier in person. Our whole family loves it.", "Jessica M., Ohio"],
    ["Arrived well packed and right on time for the holidays.", "Mark T., Texas"],
    ["Great quality for the price. Ordering a second one as a gift.", "Linda R., Florida"],
    ["Exactly as pictured. Makes the house feel so cozy.", "Chris P., Oregon"],
    ["Bought three for my sisters and they were thrilled.", "Amanda K., New York"],
    ["Solid and well made. Will last for many Christmases.", "David L., Arizona"]
  ];
  const seed = [...p.id].reduce((s, c) => s + c.charCodeAt(0), 0);
  return [0, 1, 2].map(i => { const r = pool[(seed + i * 2) % pool.length]; return { t: r[0], n: r[1], s: i === 2 && p.rating < 4.7 ? 4 : 5 }; });
}

function cartPage() {
  if (!cart.length) { app.innerHTML = `<div class="ok-box"><div class="big">🛷</div><h1>Your cart is empty</h1><p class="muted">Lights, ornaments, mugs and more are waiting.</p><a href="#/shop" class="btn">Start shopping</a></div>`; return; }
  const t = totals();
  app.innerHTML = `<div class="wrap"><div class="checkout">
    <div class="panel"><h3>Shopping cart</h3><div class="cd-ship" style="padding:0 0 14px;border:0">${shipMsg(t)}</div>${cartLines()}</div>
    <div><div class="panel"><h3>Order summary</h3>
      <form class="coupon" id="couponForm"><input id="couponIn" placeholder="Promo code" value="${coupon ? esc(coupon) : ""}"><button class="btn btn-ghost btn-sm">Apply</button></form>
      ${summaryRows(t)}<a href="#/checkout" class="btn btn-berry btn-block">Checkout</a>
      <p class="small muted" style="text-align:center;margin:12px 0 0">Secure checkout with PayPal or any credit/debit card</p>
    </div></div>
  </div></div>`;
  bindCoupon();
}
function bindCoupon() {
  const f = $("#couponForm"); if (!f) return;
  f.onsubmit = e => {
    e.preventDefault();
    const code = $("#couponIn").value.trim().toUpperCase();
    if (!code) { coupon = null; store.set("coupon", null); saveCart(); route(); return; }
    if (S.coupons?.[code]) { coupon = code; store.set("coupon", code); toast(`${code} applied: ${S.coupons[code]}% off`); saveCart(); route(); }
    else toast("That code isn't valid");
  };
}

function checkout() {
  if (!cart.length) return cartPage();
  const t = totals();
  const live = !!S.paypalClientId && !S.sampleMode;
  app.innerHTML = `<div class="wrap"><div class="crumbs" style="padding-top:24px"><a href="#/cart">Cart</a> / Checkout</div><div class="checkout">
    <div class="panel">
      <h3>Checkout</h3>
      <p class="muted" style="margin-top:0">Pay securely with PayPal, or with any credit or debit card (no PayPal account needed). Your shipping address is entered in the secure payment window.</p>
      <div class="form-grid">
        <div class="field full"><label for="gift">Gift note (optional)</label><input id="gift" maxlength="120" placeholder="Merry Christmas, love from..."></div>
      </div>
      <div style="margin-top:20px" id="payArea">
        ${live ? `<div id="paypal-buttons"></div>` : `<button class="btn btn-berry btn-block" id="testOrder">Place test order</button>
        <div class="preview-box"><b>Preview mode.</b> Payments are switched off, so no money is taken. Real checkout opens once the store's products are live.</div>`}
      </div>
    </div>
    <div><div class="panel"><h3>Your order</h3>${cartLines(false)}
      <form class="coupon" id="couponForm"><input id="couponIn" placeholder="Promo code" value="${coupon ? esc(coupon) : ""}"><button class="btn btn-ghost btn-sm">Apply</button></form>
      ${summaryRows(t)}</div></div>
  </div></div>`;
  bindCoupon();
  if (live) loadPayPal(); else $("#testOrder").onclick = () => finishOrder("TEST-" + Date.now().toString(36).toUpperCase());
}
function orderPayload() {
  const t = totals();
  const items = cart.map(l => {
    const p = byId[l.id];
    const variant = [l.color, l.opt].filter(Boolean).join(" / ");
    return {
      name: (p.name + (variant ? " (" + variant + ")" : "")).slice(0, 127),
      sku: (optOf(p, l.opt)?.sku || [p.supplier?.sku || p.id, l.color, l.opt].filter(Boolean).join("|")).slice(0, 127),
      quantity: String(l.qty),
      unit_amount: { currency_code: S.currency, value: unitPrice(p, l.opt).toFixed(2) },
      category: "PHYSICAL_GOODS"
    };
  });
  return {
    intent: "CAPTURE",
    purchase_units: [{
      description: `${S.name} order`,
      custom_id: ($("#gift")?.value || "").slice(0, 120),
      items,
      amount: {
        currency_code: S.currency, value: t.total.toFixed(2),
        breakdown: {
          item_total: { currency_code: S.currency, value: t.sub.toFixed(2) },
          shipping: { currency_code: S.currency, value: t.ship.toFixed(2) },
          discount: { currency_code: S.currency, value: t.disc.toFixed(2) }
        }
      }
    }],
    application_context: { shipping_preference: "GET_FROM_FILE", brand_name: S.name }
  };
}
function loadPayPal() {
  const render = () => window.paypal.Buttons({
    style: { shape: "pill", color: "gold", layout: "vertical", label: "checkout" },
    createOrder: (d, actions) => actions.order.create(orderPayload()),
    onApprove: (d, actions) => actions.order.capture().then(o => finishOrder(o.id)),
    onError: () => toast("Payment could not be completed. Please try again.")
  }).render("#paypal-buttons");
  if (window.paypal) return render();
  const s = document.createElement("script");
  s.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(S.paypalClientId)}&currency=${S.currency}&intent=capture&enable-funding=card`;
  s.onload = render;
  s.onerror = () => { $("#paypal-buttons").innerHTML = '<p class="muted">Payment buttons failed to load. Please refresh the page.</p>'; };
  document.head.appendChild(s);
}
function finishOrder(id) {
  const t = totals();
  store.set("lastOrder", { id, total: t.total, count: t.count });
  cart = []; coupon = null; store.set("coupon", null); saveCart();
  location.hash = "#/thanks";
}
function thanks() {
  const o = store.get("lastOrder", null);
  app.innerHTML = `<div class="ok-box"><div class="big">🎄</div><h1>Thank you!</h1>
    ${o ? `<p>Your order <b>${esc(o.id)}</b> for <b>${money(o.total)}</b> is confirmed.</p>` : ""}
    <p class="muted">You'll get an email receipt from PayPal now and a tracking number as soon as your order ships. ${esc(S.deliveryText)}.</p>
    <a href="#/shop" class="btn">Keep shopping</a></div>`;
}
function wishlist() {
  const list = wish.map(i => byId[i]).filter(Boolean);
  app.innerHTML = `<div class="wrap"><div class="shop-head"><h1 style="font-size:40px;margin:0">Your wishlist</h1><p class="muted">${list.length} saved item${list.length === 1 ? "" : "s"}</p></div>
    ${list.length ? `<div class="grid" style="padding-bottom:60px">${list.map(card).join("")}</div>` : `<div class="empty" style="margin-bottom:60px"><div style="font-size:40px">💝</div><h3>Nothing saved yet</h3><p class="muted">Tap the heart on any product to save it here.</p><a href="#/shop" class="btn btn-sm">Browse products</a></div>`}</div>`;
}
const PAGES = {
  shipping: ["Shipping", `<p>We ship to ${S.shipsTo}. Orders are processed within 1 to 3 business days. Items from our US warehouse usually arrive in 5 to 8 days; items from our international warehouse usually arrive in 7 to 14 days. Each product page shows its own delivery estimate. Shipping is free on orders over $${S.freeShippingOver}; smaller orders ship for a flat ${money(S.shippingFee)}.</p><p>Some items ship separately from different warehouses, so they may arrive in more than one package. Every order gets a tracking number.</p><h3>Christmas delivery</h3><p>To receive your order before Christmas, we recommend ordering by <b>December 5</b>.</p>`],
  returns: ["Returns &amp; refunds", `<p>We want you to love your order. If something isn't right, email us within 30 days of delivery with your order number and a photo, and we'll make it right with a replacement or a refund.</p><p>Items that arrive damaged or faulty are replaced or refunded at no cost to you.</p>`],
  faq: ["FAQ", `<h3>How do I pay?</h3><p>With PayPal or any major credit or debit card through PayPal's secure checkout. You don't need a PayPal account.</p><h3>Can I track my order?</h3><p>Yes, you'll receive tracking by email as soon as your order ships.</p><h3>Do you ship outside the US?</h3><p>Not right now. We currently ship to ${S.shipsTo} only.</p><h3>Can I add a gift note?</h3><p>Yes, there's a gift note box at checkout.</p>`],
  contact: ["Contact us", `<p>Questions about an order or a product? We reply within 24 hours.</p><p>Email: <a href="mailto:${S.email}" style="color:var(--berry);font-weight:600">${S.email}</a></p>`]
};
function page(k) { const pg = PAGES[k]; if (!pg) return notFound(); app.innerHTML = `<div class="page"><h1>${pg[0]}</h1>${pg[1]}</div>`; }
function notFound() { app.innerHTML = `<div class="ok-box"><div class="big">☃️</div><h1>Page not found</h1><a href="#/" class="btn">Back to home</a></div>`; }

/* ---------- router ---------- */
function route() {
  const h = location.hash.slice(1) || "/";
  const [path, qs] = h.split("?");
  const params = new URLSearchParams(qs || "");
  const parts = path.split("/").filter(Boolean);
  closeAll();
  if (!parts.length) home();
  else if (parts[0] === "shop") shop(params);
  else if (parts[0] === "p") product(parts[1]);
  else if (parts[0] === "cart") cartPage();
  else if (parts[0] === "checkout") checkout();
  else if (parts[0] === "thanks") thanks();
  else if (parts[0] === "wishlist") wishlist();
  else if (parts[0] === "page") page(parts[1]);
  else notFound();
  $$("#catnav a").forEach(a => a.classList.toggle("on", parts[0] === "shop" && (a.dataset.cat ? params.get("cat") === a.dataset.cat : (!params.get("cat") && !params.get("sale") && a.getAttribute("href") === "#/shop"))));
  if (parts[0] !== "shop" || !route.wasShop) window.scrollTo(0, 0);
  route.wasShop = parts[0] === "shop";
  if (parts[0] !== "shop") sInput.value = ""; else sInput.value = params.get("q") || "";
  observeReveal();
}
window.addEventListener("hashchange", route);

const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -40px" }) : null;
// Product cards with a video play it silently on hover (desktop only; nothing loads until then).
if (matchMedia("(hover:hover)").matches) {
  document.addEventListener("mouseover", e => {
    const m = e.target.closest?.(".card-media[data-video]");
    if (!m || m.querySelector("video")) return;
    const v = document.createElement("video");
    Object.assign(v, { src: m.dataset.video, muted: true, loop: true, playsInline: true, autoplay: true });
    v.className = "card-vid"; m.appendChild(v);
    m.addEventListener("mouseleave", () => v.remove(), { once: true });
  });
}
function observeReveal() { $$(".reveal:not(.in)").forEach(el => io ? io.observe(el) : el.classList.add("in")); }

$("#newsForm").onsubmit = e => { e.preventDefault(); $("#newsMsg").textContent = "You're on the list! Watch your inbox for holiday deals."; e.target.reset(); };

/* ---------- gentle snowfall ---------- */
(function snow() {
  const cv = $("#snow"), ctx = cv.getContext("2d");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let w, h, flakes;
  const size = () => { w = cv.width = innerWidth; h = cv.height = innerHeight; flakes = Array.from({ length: Math.min(70, Math.floor(w / 18)) }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 2 + .6, s: Math.random() * .5 + .25, d: Math.random() * Math.PI * 2 })); };
  size(); addEventListener("resize", size);
  (function tick() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(255,255,255,.9)";
    ctx.shadowColor = "rgba(120,140,130,.5)"; ctx.shadowBlur = 2;
    for (const f of flakes) {
      f.y += f.s; f.d += .01; f.x += Math.sin(f.d) * .3;
      if (f.y > h) { f.y = -5; f.x = Math.random() * w; }
      ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, 7); ctx.fill();
    }
    requestAnimationFrame(tick);
  })();
})();

renderChrome(); renderWishCount(); renderCartUI(); route();
})();
