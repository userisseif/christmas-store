"""Build static, crawlable product pages (shop/<id>/index.html), a product index (shop/index.html) and sitemap.xml.
The live store is a hash-routed app that search engines can't index page by page; these pages give Google real URLs.
Run from the repo root after products.js changes: python3 tools/seo_pages.py"""
import html, json, os, subprocess

BASE = "https://userisseif.github.io/christmas-store/"
data = json.loads(subprocess.run(["node", "-e", 'global.window={STORE:{}};require("./products.js");'
    'console.log(JSON.stringify({p:window.PRODUCTS,c:window.CATEGORIES}))'], capture_output=True, text=True, check=True).stdout)
P, C = data["p"], {c["id"]: c for c in data["c"]}
e = html.escape

STYLE = """<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Inter:wght@400;600&display=swap" rel="stylesheet">
<style>
:root{--pine:#123a2e;--berry:#a8213a;--gold:#c8a04a;--cream:#fbf7ef;--ink:#1d2a24;--mut:#5d6b63}
*{box-sizing:border-box}body{margin:0;background:var(--cream);color:var(--ink);font:16px/1.6 Inter,system-ui,sans-serif}
a{color:var(--pine)}header{background:var(--pine);padding:14px 16px}header a{color:#fff;text-decoration:none;font:600 22px Fraunces,serif}
main{max-width:1000px;margin:0 auto;padding:24px 16px 60px}h1,h2{font-family:Fraunces,serif;line-height:1.2}
.prod{display:grid;gap:28px;grid-template-columns:1fr}@media(min-width:760px){.prod{grid-template-columns:1fr 1fr}}
.prod img{width:100%;border-radius:14px;display:block}.thumbs{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:8px}
.price{font-size:26px;font-weight:600;color:var(--berry)}.btn{display:inline-block;background:var(--berry);color:#fff;padding:14px 26px;border-radius:999px;text-decoration:none;font-weight:600}
.muted{color:var(--mut)}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:16px}
.grid a{text-decoration:none;color:var(--ink)}.grid img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:10px}
footer{text-align:center;padding:24px;color:var(--mut);font-size:14px}
</style>"""

def page(title, desc, canon, img, body, ld):
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{e(title)}</title><meta name="description" content="{e(desc)}"><link rel="canonical" href="{canon}">
<meta property="og:type" content="website"><meta property="og:site_name" content="Evergreen Lane"><meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(desc)}"><meta property="og:url" content="{canon}"><meta property="og:image" content="{img}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎄</text></svg>">
<script type="application/ld+json">{json.dumps(ld)}</script>{STYLE}</head><body>
<header><a href="{BASE}">🎄 Evergreen Lane</a></header><main>{body}</main>
<footer>Evergreen Lane · Christmas decor, lights &amp; gifts · Ships to the US · <a href="{BASE}shop/">All products</a></footer></body></html>"""

def card(p, prefix):
    return f'<a href="{prefix}{p["id"]}/"><img src="{BASE}{p["thumb"]}" alt="{e(p["name"])}" loading="lazy"><div>{e(p["name"])}</div><div class="muted">${p["price"]:.2f}</div></a>'

urls = [BASE, BASE + "shop/"]
for p in P:
    url = f"{BASE}shop/{p['id']}/"; urls.append(url)
    cat = C.get(p["cat"], {"name": p["cat"]})
    imgs = [BASE + i for i in p["img"]]
    buy = f"{BASE}#/p/{p['id']}"
    opts = p.get("options", {}).get("values", [])
    optline = f'<p class="muted">{e(p["options"]["name"])}: {e(", ".join(o["v"] for o in opts))}</p>' if len(opts) > 1 else ""
    days = p.get("days") or [7, 14]
    related = [q for q in P if q["cat"] == p["cat"] and q["id"] != p["id"]][:8]
    body = f"""<p class="muted"><a href="{BASE}shop/">Shop</a> › {e(cat["name"])}</p>
<div class="prod"><div><img src="{imgs[0]}" alt="{e(p["name"])}"><div class="thumbs">{"".join(f'<img src="{i}" alt="{e(p["name"])} photo {k + 2}" loading="lazy">' for k, i in enumerate(imgs[1:5]))}</div></div>
<div><h1>{e(p["name"])}</h1><div class="price">${p["price"]:.2f}</div><p>{e(p["desc"])}</p>
<ul>{"".join(f"<li>{e(b)}</li>" for b in p["bullets"])}</ul>{optline}
<p class="muted">Ships to the US in about {days[0]} to {days[1]} days.{" Try it in a room photo on the product page." if p.get("room") else ""}</p>
<p><a class="btn" href="{buy}">View options &amp; buy</a></p></div></div>
<h2>More {e(cat["name"].lower())}</h2><div class="grid">{"".join(card(q, BASE + "shop/") for q in related)}</div>"""
    ld = {"@context": "https://schema.org", "@type": "Product", "name": p["name"], "image": imgs, "description": p["desc"],
          "category": cat["name"], "brand": {"@type": "Brand", "name": "Evergreen Lane"},
          "offers": {"@type": "Offer", "url": url, "priceCurrency": "USD", "price": f'{p["price"]:.2f}',
                     "availability": "https://schema.org/InStock", "itemCondition": "https://schema.org/NewCondition"}}
    desc = f'{p["name"]} for ${p["price"]:.2f}. {p["desc"]}'[:300]
    os.makedirs(f"shop/{p['id']}", exist_ok=True)
    open(f"shop/{p['id']}/index.html", "w").write(page(f'{p["name"]} | Evergreen Lane Christmas Shop', desc, url, imgs[0], body, ld))

sections = ""
for cid, c in C.items():
    items = [p for p in P if p["cat"] == cid]
    if items:
        sections += f'<h2>{e(c["name"])}</h2><p class="muted">{e(c.get("blurb", ""))}</p><div class="grid">{"".join(card(p, BASE + "shop/") for p in items)}</div>'
body = f'<h1>All Christmas decor, lights &amp; gifts</h1><p>{len(P)} cozy Christmas finds, most under $30. <a href="{BASE}">Go to the full store</a> to see items in a room before you buy.</p>{sections}'
ld = {"@context": "https://schema.org", "@type": "CollectionPage", "name": "Evergreen Lane: all products", "url": BASE + "shop/"}
open("shop/index.html", "w").write(page("All Products | Evergreen Lane Christmas Shop",
     "Shop Christmas lights, ornaments, mugs, wreaths, trees, candles, sweaters and gifts from Evergreen Lane. Most under $30, ships to the US.",
     BASE + "shop/", BASE + P[0]["img"][0], body, ld))

open("sitemap.xml", "w").write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + "".join(f"  <url><loc>{u}</loc></url>\n" for u in urls) + "</urlset>\n")
print(len(P), "product pages,", len(urls), "sitemap urls")
