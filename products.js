// Product catalog. SAMPLE DATA: photos are free CC0 stock images (sources in img/credits.json), not supplier listings.
// To link a real product: set supplier.name/sku/url/cost and replace its photos with the supplier's images.
window.CATEGORIES = [
 {
  "id": "lights",
  "name": "Christmas Lights",
  "blurb": "Fairy lights, C9 bulbs, outdoor twinkle lights and more to make your home glow.",
  "img": "img/cat-lights.jpg"
 },
 {
  "id": "ornaments",
  "name": "Ornaments",
  "blurb": "Baubles, glass keepsakes and full ornament sets for every tree.",
  "img": "img/cat-ornaments.jpg"
 },
 {
  "id": "mugs",
  "name": "Mugs & Drinkware",
  "blurb": "Cocoa mugs, gift sets and festive cups for cozy mornings.",
  "img": "img/cat-mugs.jpg"
 },
 {
  "id": "trees",
  "name": "Trees & Wreaths",
  "blurb": "Front door wreaths, garlands and decorated trees.",
  "img": "img/cat-trees.jpg"
 },
 {
  "id": "decor",
  "name": "Home Decor",
  "blurb": "Gnomes, nutcrackers, stockings, throws and holiday accents.",
  "img": "img/cat-decor.jpg"
 },
 {
  "id": "candles",
  "name": "Candles & Lanterns",
  "blurb": "Pillar candles, lanterns and glowing stars.",
  "img": "img/cat-candles.jpg"
 },
 {
  "id": "apparel",
  "name": "Sweaters & Cozy Wear",
  "blurb": "Christmas sweaters, family pajamas, scarves and socks.",
  "img": "img/cat-apparel.jpg"
 },
 {
  "id": "gifts",
  "name": "Gifts & Wrap",
  "blurb": "Gift wrap, treats, kits and stocking stuffers.",
  "img": "img/cat-gifts.jpg"
 }
];

window.PRODUCTS = [
 {
  "id": "fairy-string-lights",
  "cat": "lights",
  "name": "Warm Glow LED Fairy String Lights",
  "price": 19.99,
  "img": [
   "img/fairy-string-lights-1.jpg",
   "img/fairy-string-lights-2.jpg",
   "img/fairy-string-lights-3.jpg"
  ],
  "rating": 4.8,
  "reviews": 1284,
  "stock": 120,
  "desc": "Hundreds of tiny LEDs on a flexible copper wire. Wrap the tree, the mantel or a mason jar for an instant cozy glow.",
  "bullets": [
   "Plug-in with 8 lighting modes and timer",
   "Bendable copper wire holds any shape",
   "Safe to touch, stays cool all night",
   "Indoor and covered outdoor use"
  ],
  "keywords": [
   "fairy",
   "string",
   "led",
   "copper"
  ],
  "tags": [
   "bestseller"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 29.99,
  "colors": [
   "Warm White",
   "Cool White",
   "Multicolor"
  ],
  "options": {
   "name": "Length",
   "values": [
    {
     "v": "33 ft",
     "add": 0
    },
    {
     "v": "66 ft",
     "add": 8
    },
    {
     "v": "100 ft",
     "add": 15
    }
   ]
  },
  "added": 0
 },
 {
  "id": "c9-retro-bulb-lights",
  "cat": "lights",
  "name": "Classic C9 Retro Bulb String Lights",
  "price": 34.99,
  "img": [
   "img/c9-retro-bulb-lights-1.jpg",
   "img/c9-retro-bulb-lights-2.jpg"
  ],
  "rating": 4.7,
  "reviews": 812,
  "stock": 64,
  "desc": "The big, bold bulbs of a classic American Christmas. Line the roof, porch or fence just like the old days, with modern LED efficiency.",
  "bullets": [
   "Shatterproof LED bulbs",
   "Connect up to 10 strands end to end",
   "Weatherproof for outdoor use",
   "Spare bulbs included"
  ],
  "keywords": [
   "c9",
   "roof",
   "outdoor",
   "bulb",
   "house"
  ],
  "tags": [
   "bestseller"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 44.99,
  "colors": [
   "Multicolor",
   "Warm White"
  ],
  "options": {
   "name": "Length",
   "values": [
    {
     "v": "25 ft",
     "add": 0
    },
    {
     "v": "50 ft",
     "add": 14
    }
   ]
  },
  "added": 1
 },
 {
  "id": "rope-light-remote",
  "cat": "lights",
  "name": "Color-Changing Rope Light with Remote",
  "price": 29.99,
  "img": [
   "img/rope-light-remote-1.jpg"
  ],
  "rating": 4.6,
  "reviews": 233,
  "stock": 40,
  "desc": "A bright, flexible tube of color you can run along stairs, railings and windows. Switch colors and effects from the couch.",
  "bullets": [
   "Remote with 16 colors and 4 effects",
   "USB powered",
   "Cut-to-fit flexible tube",
   "Timer function"
  ],
  "keywords": [
   "rope",
   "remote",
   "usb",
   "color changing"
  ],
  "tags": [
   "new"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Multicolor"
  ],
  "options": {
   "name": "Length",
   "values": [
    {
     "v": "33 ft",
     "add": 0
    },
    {
     "v": "66 ft",
     "add": 12
    }
   ]
  },
  "added": 2
 },
 {
  "id": "firefly-stake-lights",
  "cat": "lights",
  "name": "Firefly Garden Stake Lights",
  "price": 24.99,
  "img": [
   "img/firefly-stake-lights-1.jpg"
  ],
  "rating": 4.5,
  "reviews": 174,
  "stock": 35,
  "desc": "Swaying globe lights on slender stakes that look like a field of fireflies. Solar powered, so there are no cords in your yard.",
  "bullets": [
   "Solar powered, auto on at dusk",
   "8 stakes per set",
   "Sways gently in the breeze",
   "Weatherproof"
  ],
  "keywords": [
   "solar",
   "garden",
   "yard",
   "outdoor",
   "stake"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 32.99,
  "colors": [
   "Multicolor",
   "Warm White"
  ],
  "added": 3
 },
 {
  "id": "tree-wrap-twinkle-lights",
  "cat": "lights",
  "name": "Outdoor Twinkle Tree Wrap Lights",
  "price": 39.99,
  "img": [
   "img/tree-wrap-twinkle-lights-1.jpg",
   "img/tree-wrap-twinkle-lights-2.jpg"
  ],
  "rating": 4.7,
  "reviews": 402,
  "stock": 58,
  "desc": "Dense, twinkling LEDs made to spiral around tree trunks and bushes. Turn your yard into a winter wonderland.",
  "bullets": [
   "Twinkle and steady modes",
   "Green wire blends into branches",
   "Waterproof plug and controller",
   "Low energy LEDs"
  ],
  "keywords": [
   "tree",
   "outdoor",
   "yard",
   "twinkle",
   "bush"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 54.99,
  "colors": [
   "Cool White",
   "Warm White"
  ],
  "options": {
   "name": "Size",
   "values": [
    {
     "v": "200 LEDs",
     "add": 0
    },
    {
     "v": "400 LEDs",
     "add": 18
    }
   ]
  },
  "added": 4
 },
 {
  "id": "hanging-star-curtain-lights",
  "cat": "lights",
  "name": "Hanging Star Curtain Lights",
  "price": 27.99,
  "img": [
   "img/hanging-star-curtain-lights-1.jpg",
   "img/hanging-star-curtain-lights-2.jpg"
  ],
  "rating": 4.6,
  "reviews": 198,
  "stock": 44,
  "desc": "A shimmering curtain of glowing stars for windows, walls and bedroom headboards.",
  "bullets": [
   "12 hanging stars",
   "8 lighting modes",
   "USB plug with remote",
   "Hooks included"
  ],
  "keywords": [
   "star",
   "curtain",
   "window",
   "bedroom"
  ],
  "tags": [
   "new"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Cool White",
   "Warm White"
  ],
  "added": 5
 },
 {
  "id": "globe-bistro-lights",
  "cat": "lights",
  "name": "Patio Globe Bistro Lights",
  "price": 32.99,
  "img": [
   "img/globe-bistro-lights-1.jpg",
   "img/globe-bistro-lights-2.jpg"
  ],
  "rating": 4.7,
  "reviews": 356,
  "stock": 70,
  "desc": "Warm globe bulbs for patios, porches and holiday parties that last long after Christmas.",
  "bullets": [
   "Shatterproof globe bulbs",
   "Commercial grade, all weather",
   "Linkable",
   "Hanging loops every bulb"
  ],
  "keywords": [
   "patio",
   "bistro",
   "globe",
   "party",
   "outdoor"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Warm White"
  ],
  "options": {
   "name": "Length",
   "values": [
    {
     "v": "25 ft",
     "add": 0
    },
    {
     "v": "48 ft",
     "add": 16
    }
   ]
  },
  "added": 6
 },
 {
  "id": "window-curtain-lights",
  "cat": "lights",
  "name": "Window Glow Curtain Lights",
  "price": 22.99,
  "img": [
   "img/window-curtain-lights-1.jpg"
  ],
  "rating": 4.5,
  "reviews": 287,
  "stock": 90,
  "desc": "Frame your windows with a soft, warm glow your neighbors will notice from the street.",
  "bullets": [
   "300 LEDs, 10 ft x 10 ft",
   "8 modes with memory",
   "Indoor and outdoor",
   "Low voltage plug"
  ],
  "keywords": [
   "window",
   "curtain",
   "icicle"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 29.99,
  "colors": [
   "Warm White",
   "Multicolor"
  ],
  "added": 7
 },
 {
  "id": "copper-micro-lights",
  "cat": "lights",
  "name": "Copper Wire Micro Lights, 3 Pack",
  "price": 14.99,
  "img": [
   "img/copper-micro-lights-1.jpg",
   "img/copper-micro-lights-2.jpg"
  ],
  "rating": 4.6,
  "reviews": 640,
  "stock": 150,
  "desc": "Battery-powered micro lights for wreaths, centerpieces, jars and gift baskets.",
  "bullets": [
   "3 strands of 20 LEDs",
   "Battery box with timer",
   "Tiny and flexible",
   "Great for crafts and centerpieces"
  ],
  "keywords": [
   "battery",
   "micro",
   "jar",
   "wreath",
   "craft"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 19.99,
  "colors": [
   "Warm White",
   "Multicolor"
  ],
  "added": 8
 },
 {
  "id": "glitter-bauble-set",
  "cat": "ornaments",
  "name": "Glitter Bauble Ornament Set, 24 Pieces",
  "price": 24.99,
  "img": [
   "img/glitter-bauble-set-1.jpg",
   "img/glitter-bauble-set-2.jpg"
  ],
  "rating": 4.8,
  "reviews": 1033,
  "stock": 110,
  "desc": "A full set of shatterproof glitter and gloss baubles to fill your tree with sparkle in minutes.",
  "bullets": [
   "24 shatterproof baubles",
   "Mix of glitter, matte and shine",
   "Pre-strung with hanging loops",
   "Kid and pet friendly"
  ],
  "keywords": [
   "bauble",
   "ball",
   "shatterproof",
   "glitter"
  ],
  "tags": [
   "bestseller"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 34.99,
  "colors": [
   "Red",
   "Gold",
   "Silver"
  ],
  "added": 9
 },
 {
  "id": "champagne-glass-ornaments",
  "cat": "ornaments",
  "name": "Champagne Gold Glass Ornaments, 6 Pack",
  "price": 29.99,
  "img": [
   "img/champagne-glass-ornaments-1.jpg",
   "img/champagne-glass-ornaments-2.jpg"
  ],
  "rating": 4.7,
  "reviews": 288,
  "stock": 46,
  "desc": "Elegant blown-glass baubles with a soft champagne finish for a designer-look tree.",
  "bullets": [
   "Hand-blown glass",
   "3 in diameter",
   "Gift box included",
   "Satin and gloss finishes"
  ],
  "keywords": [
   "glass",
   "gold",
   "elegant",
   "bauble"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Champagne",
   "Gold"
  ],
  "added": 10
 },
 {
  "id": "blue-painted-ornament-trio",
  "cat": "ornaments",
  "name": "Hand-Painted Blue Ornament Trio",
  "price": 22.99,
  "img": [
   "img/blue-painted-ornament-trio-1.jpg",
   "img/blue-painted-ornament-trio-2.jpg"
  ],
  "rating": 4.8,
  "reviews": 96,
  "stock": 22,
  "desc": "Deep blue glass ornaments with hand-painted gold swirls. A frosty, sophisticated look.",
  "bullets": [
   "Set of 3",
   "Hand-painted details",
   "Ribbon hangers",
   "Gift boxed"
  ],
  "keywords": [
   "blue",
   "glass",
   "painted"
  ],
  "tags": [
   "new"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Blue",
   "Silver"
  ],
  "added": 11
 },
 {
  "id": "candy-stripe-ornament",
  "cat": "ornaments",
  "name": "Candy Stripe Glass Ornament",
  "price": 12.99,
  "img": [
   "img/candy-stripe-ornament-1.jpg"
  ],
  "rating": 4.6,
  "reviews": 141,
  "stock": 80,
  "desc": "A peppermint-swirl glass ball that brings a bit of candy shop fun to the tree.",
  "bullets": [
   "4 in glass ball",
   "Swirl stripe pattern",
   "Gold cap and loop",
   "Pairs with our candy cane collection"
  ],
  "keywords": [
   "peppermint",
   "candy",
   "stripe"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Red",
   "White"
  ],
  "added": 12
 },
 {
  "id": "silver-heart-ornament",
  "cat": "ornaments",
  "name": "Silver Heart Hanging Ornament",
  "price": 9.99,
  "img": [
   "img/silver-heart-ornament-1.jpg"
  ],
  "rating": 4.7,
  "reviews": 212,
  "stock": 95,
  "desc": "A delicate cut-out heart that catches the tree lights. A lovely first-Christmas keepsake.",
  "bullets": [
   "Metal with glitter finish",
   "3.5 in",
   "Ribbon hanger",
   "Ready to gift"
  ],
  "keywords": [
   "heart",
   "keepsake",
   "first christmas",
   "couple"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 14.99,
  "colors": [
   "Silver"
  ],
  "added": 13
 },
 {
  "id": "gingerbread-cottage-ornament",
  "cat": "ornaments",
  "name": "Gingerbread Cottage Ornament",
  "price": 11.99,
  "img": [
   "img/gingerbread-cottage-ornament-1.jpg",
   "img/gingerbread-cottage-ornament-2.jpg"
  ],
  "rating": 4.9,
  "reviews": 77,
  "stock": 30,
  "desc": "A sweet little gingerbread house with frosting details, made to last for years.",
  "bullets": [
   "Resin, looks like real gingerbread",
   "3 in tall",
   "Gold hanging cord",
   "Collectible"
  ],
  "keywords": [
   "gingerbread",
   "house",
   "cottage"
  ],
  "tags": [
   "new"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "added": 14
 },
 {
  "id": "classic-ornament-collection",
  "cat": "ornaments",
  "name": "Classic Ornament Collection, 36 Pieces",
  "price": 39.99,
  "img": [
   "img/classic-ornament-collection-1.jpg",
   "img/classic-ornament-collection-2.jpg"
  ],
  "rating": 4.7,
  "reviews": 568,
  "stock": 52,
  "desc": "Everything you need to decorate a full-size tree, in one box. Balls, finials and shapes in coordinated colors.",
  "bullets": [
   "36 shatterproof pieces",
   "Sizes from 1.5 in to 4 in",
   "Pre-strung",
   "Storage box included"
  ],
  "keywords": [
   "bauble",
   "set",
   "tree",
   "shatterproof"
  ],
  "tags": [
   "bestseller"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 59.99,
  "colors": [
   "Red",
   "Gold",
   "Multicolor"
  ],
  "added": 15
 },
 {
  "id": "red-star-ornaments",
  "cat": "ornaments",
  "name": "Red Star Tree Ornaments, 12 Pack",
  "price": 14.99,
  "img": [
   "img/red-star-ornaments-1.jpg"
  ],
  "rating": 4.6,
  "reviews": 154,
  "stock": 75,
  "desc": "Glossy stars that add color and shape between your baubles.",
  "bullets": [
   "12 stars, 3 in",
   "Shatterproof",
   "Ribbon loops",
   "Mix with any theme"
  ],
  "keywords": [
   "star"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Red",
   "Gold"
  ],
  "added": 16
 },
 {
  "id": "snowman-glass-ornament",
  "cat": "ornaments",
  "name": "Jolly Snowman Ornament",
  "price": 12.99,
  "img": [
   "img/snowman-glass-ornament-1.jpg"
  ],
  "rating": 4.8,
  "reviews": 88,
  "stock": 40,
  "desc": "A cheerful snowman in a top hat and scarf, ready to make every guest smile.",
  "bullets": [
   "Hand-painted",
   "3.5 in tall",
   "Ribbon hanger",
   "Keepsake gift box"
  ],
  "keywords": [
   "snowman",
   "kids"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "added": 17
 },
 {
  "id": "reindeer-feed-mug",
  "cat": "mugs",
  "name": "Reindeer Feed Enamel Mug",
  "price": 18.99,
  "img": [
   "img/reindeer-feed-mug-1.jpg",
   "img/reindeer-feed-mug-2.jpg",
   "img/reindeer-feed-mug-3.jpg"
  ],
  "rating": 4.9,
  "reviews": 1520,
  "stock": 140,
  "desc": "A vintage-style enamel mug that says it all. Fill it with cocoa, candy canes or use it as a festive pencil holder.",
  "bullets": [
   "16 oz enamel steel",
   "Rolled rim",
   "Hand wash",
   "Gift ready"
  ],
  "keywords": [
   "reindeer",
   "enamel",
   "vintage",
   "cocoa"
  ],
  "tags": [
   "bestseller"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Blue",
   "Red",
   "White"
  ],
  "added": 18
 },
 {
  "id": "peppermint-stripe-mug",
  "cat": "mugs",
  "name": "Peppermint Stripe Cocoa Mug",
  "price": 16.99,
  "img": [
   "img/peppermint-stripe-mug-1.jpg",
   "img/peppermint-stripe-mug-2.jpg",
   "img/peppermint-stripe-mug-3.jpg"
  ],
  "rating": 4.8,
  "reviews": 936,
  "stock": 120,
  "desc": "A candy-stripe ceramic mug made for whipped cream mountains and marshmallows.",
  "bullets": [
   "14 oz ceramic",
   "Microwave and dishwasher safe",
   "Comfortable wide handle",
   "Glossy glaze"
  ],
  "keywords": [
   "peppermint",
   "cocoa",
   "stripe",
   "ceramic"
  ],
  "tags": [
   "bestseller"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 22.99,
  "colors": [
   "Red",
   "Green"
  ],
  "added": 19
 },
 {
  "id": "snowflake-mug-set",
  "cat": "mugs",
  "name": "Snowflake Blue Mug Set of 2",
  "price": 26.99,
  "img": [
   "img/snowflake-mug-set-1.jpg"
  ],
  "rating": 4.7,
  "reviews": 312,
  "stock": 60,
  "desc": "A matching pair of frosty blue mugs for cocoa dates by the fire.",
  "bullets": [
   "Set of 2, 12 oz each",
   "Stoneware",
   "Microwave safe",
   "Gift box"
  ],
  "keywords": [
   "snowflake",
   "set",
   "couple"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 34.99,
  "colors": [
   "Blue",
   "White"
  ],
  "added": 20
 },
 {
  "id": "forest-camp-mug",
  "cat": "mugs",
  "name": "Evergreen Forest Camp Mug",
  "price": 17.99,
  "img": [
   "img/forest-camp-mug-1.jpg"
  ],
  "rating": 4.7,
  "reviews": 410,
  "stock": 85,
  "desc": "A rugged enamel camp mug with a pine tree print for cabin mornings and winter walks.",
  "bullets": [
   "12 oz enamel",
   "Lightweight and chip resistant",
   "Great for camping",
   "Hand wash"
  ],
  "keywords": [
   "camp",
   "pine",
   "tree",
   "cabin"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Black",
   "Green",
   "Red"
  ],
  "added": 21
 },
 {
  "id": "holiday-pine-mug",
  "cat": "mugs",
  "name": "Holiday Pine Ceramic Mug",
  "price": 15.99,
  "img": [
   "img/holiday-pine-mug-1.jpg"
  ],
  "rating": 4.6,
  "reviews": 98,
  "stock": 70,
  "desc": "A clean white mug with tiny red pines. Simple, modern and very Christmassy.",
  "bullets": [
   "12 oz ceramic",
   "Dishwasher safe",
   "Minimal design",
   "Pairs with our cocoa set"
  ],
  "keywords": [
   "minimal",
   "white",
   "ceramic"
  ],
  "tags": [
   "new"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "White"
  ],
  "added": 22
 },
 {
  "id": "nordic-latte-mug",
  "cat": "mugs",
  "name": "Cozy Nordic Latte Cup",
  "price": 19.99,
  "img": [
   "img/nordic-latte-mug-1.jpg",
   "img/nordic-latte-mug-2.jpg"
  ],
  "rating": 4.7,
  "reviews": 205,
  "stock": 48,
  "desc": "A Nordic-pattern cup that feels like a warm sweater in your hands.",
  "bullets": [
   "10 oz porcelain",
   "Fair Isle pattern",
   "Microwave safe",
   "Matching saucer available"
  ],
  "keywords": [
   "nordic",
   "latte",
   "fair isle"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Cream",
   "Red"
  ],
  "added": 23
 },
 {
  "id": "hot-cocoa-gift-set",
  "cat": "mugs",
  "name": "Hot Cocoa Gift Set",
  "price": 29.99,
  "img": [
   "img/hot-cocoa-gift-set-1.jpg",
   "img/hot-cocoa-gift-set-2.jpg"
  ],
  "rating": 4.8,
  "reviews": 143,
  "stock": 36,
  "desc": "A ready-to-give box with a mug, rich cocoa mix, marshmallows and a peppermint stirrer.",
  "bullets": [
   "Includes 12 oz mug",
   "4 cocoa packets and marshmallows",
   "Peppermint stirring spoon",
   "Gift wrapped"
  ],
  "keywords": [
   "gift",
   "cocoa",
   "set",
   "hot chocolate"
  ],
  "tags": [
   "new"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 39.99,
  "added": 24
 },
 {
  "id": "red-plaid-mug",
  "cat": "mugs",
  "name": "Classic Red Plaid Mug",
  "price": 16.99,
  "img": [
   "img/red-plaid-mug-1.jpg"
  ],
  "rating": 4.6,
  "reviews": 177,
  "stock": 66,
  "desc": "Buffalo plaid and a steaming cup of coffee. The cabin Christmas look.",
  "bullets": [
   "14 oz ceramic",
   "Dishwasher safe",
   "Buffalo check pattern",
   "Gift ready"
  ],
  "keywords": [
   "plaid",
   "buffalo",
   "coffee"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Red",
   "Green"
  ],
  "added": 25
 },
 {
  "id": "frosted-pine-wreath",
  "cat": "trees",
  "name": "Frosted Pine Front Door Wreath",
  "price": 49.99,
  "img": [
   "img/frosted-pine-wreath-1.jpg",
   "img/frosted-pine-wreath-2.jpg"
  ],
  "rating": 4.8,
  "reviews": 687,
  "stock": 40,
  "desc": "A full, lush wreath with frosted tips, pinecones and berries. Looks real, lasts for years.",
  "bullets": [
   "Realistic PE and PVC tips",
   "Natural pinecones and berries",
   "Optional battery lights",
   "Reusable every year"
  ],
  "keywords": [
   "wreath",
   "door",
   "front door",
   "pine"
  ],
  "tags": [
   "bestseller"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 69.99,
  "options": {
   "name": "Size",
   "values": [
    {
     "v": "24 in",
     "add": 0
    },
    {
     "v": "30 in",
     "add": 15
    }
   ]
  },
  "added": 26
 },
 {
  "id": "snowy-pinecone-wreath",
  "cat": "trees",
  "name": "Snow-Dusted Pinecone Wreath",
  "price": 44.99,
  "img": [
   "img/snowy-pinecone-wreath-1.jpg"
  ],
  "rating": 4.7,
  "reviews": 233,
  "stock": 26,
  "desc": "A frosty white wreath packed with pinecones for a winter cabin look.",
  "bullets": [
   "Flocked snowy finish",
   "Real pinecones",
   "Hanging loop",
   "Indoor or covered porch"
  ],
  "keywords": [
   "wreath",
   "snow",
   "pinecone"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "options": {
   "name": "Size",
   "values": [
    {
     "v": "20 in",
     "add": 0
    },
    {
     "v": "24 in",
     "add": 10
    }
   ]
  },
  "added": 27
 },
 {
  "id": "ornament-ball-wreath",
  "cat": "trees",
  "name": "Ornament Ball Wreath",
  "price": 39.99,
  "img": [
   "img/ornament-ball-wreath-1.jpg"
  ],
  "rating": 4.7,
  "reviews": 301,
  "stock": 34,
  "desc": "A wreath made entirely from shiny shatterproof ornaments. Bold, bright and joyful.",
  "bullets": [
   "18 in diameter",
   "Shatterproof balls",
   "Ribbon hanger",
   "Indoor use"
  ],
  "keywords": [
   "wreath",
   "ornament",
   "bauble"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 54.99,
  "colors": [
   "Red",
   "Gold"
  ],
  "added": 28
 },
 {
  "id": "bottle-brush-tree-set",
  "cat": "trees",
  "name": "Bottle Brush Mini Tree Set",
  "price": 24.99,
  "img": [
   "img/bottle-brush-tree-set-1.jpg"
  ],
  "rating": 4.8,
  "reviews": 264,
  "stock": 50,
  "desc": "A little forest of snowy mini trees with tiny baubles for mantels, shelves and tables.",
  "bullets": [
   "Set of 5, 6 to 12 in",
   "Wooden bases",
   "Snowy tips with mini ornaments",
   "Perfect for village displays"
  ],
  "keywords": [
   "mini tree",
   "bottle brush",
   "mantel",
   "tabletop"
  ],
  "tags": [
   "new"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Green",
   "White"
  ],
  "added": 29
 },
 {
  "id": "berry-door-wreath",
  "cat": "trees",
  "name": "Classic Berry Door Wreath",
  "price": 54.99,
  "img": [
   "img/berry-door-wreath-1.jpg"
  ],
  "rating": 4.8,
  "reviews": 129,
  "stock": 18,
  "desc": "A rich, traditional wreath with berries, cones and seasonal foliage.",
  "bullets": [
   "Mixed natural-look foliage",
   "Fade resistant",
   "Wire frame",
   "Hanging loop"
  ],
  "keywords": [
   "wreath",
   "berry",
   "traditional"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "options": {
   "name": "Size",
   "values": [
    {
     "v": "24 in",
     "add": 0
    },
    {
     "v": "30 in",
     "add": 15
    }
   ]
  },
  "added": 30
 },
 {
  "id": "mini-pinecone-wreath",
  "cat": "trees",
  "name": "Mini Pinecone Accent Wreath",
  "price": 19.99,
  "img": [
   "img/mini-pinecone-wreath-1.jpg"
  ],
  "rating": 4.6,
  "reviews": 88,
  "stock": 60,
  "desc": "A petite wreath for cabinets, windows and interior doors.",
  "bullets": [
   "12 in diameter",
   "Natural pinecones",
   "Red bow",
   "Hanging loop"
  ],
  "keywords": [
   "wreath",
   "small",
   "mini"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "added": 31
 },
 {
  "id": "pine-garland",
  "cat": "trees",
  "name": "Fresh-Look Pine Garland, 9 ft",
  "price": 29.99,
  "img": [
   "img/pine-garland-1.jpg",
   "img/pine-garland-2.jpg"
  ],
  "rating": 4.6,
  "reviews": 356,
  "stock": 75,
  "desc": "Full, bendable garland for banisters, mantels and doorways.",
  "bullets": [
   "Realistic pine tips",
   "Bendable wire core",
   "Add lights and ribbon",
   "Reusable"
  ],
  "keywords": [
   "garland",
   "mantel",
   "banister",
   "stairs"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 39.99,
  "options": {
   "name": "Length",
   "values": [
    {
     "v": "9 ft",
     "add": 0
    },
    {
     "v": "18 ft",
     "add": 22
    }
   ]
  },
  "added": 32
 },
 {
  "id": "gold-decorated-tree",
  "cat": "trees",
  "name": "Gold Leaf Decorated Christmas Tree",
  "price": 99.99,
  "img": [
   "img/gold-decorated-tree-1.jpg"
  ],
  "rating": 4.7,
  "reviews": 412,
  "stock": 14,
  "desc": "A fully decorated artificial tree with gold leaves and ornaments. Unfold, fluff and it's Christmas.",
  "bullets": [
   "Hinged branches, sets up in minutes",
   "Pre-decorated in gold",
   "Sturdy metal stand",
   "Fire resistant"
  ],
  "keywords": [
   "tree",
   "artificial",
   "christmas tree",
   "decorated"
  ],
  "tags": [
   "bestseller"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 149.99,
  "options": {
   "name": "Height",
   "values": [
    {
     "v": "4 ft",
     "add": 0
    },
    {
     "v": "6 ft",
     "add": 50
    },
    {
     "v": "7.5 ft",
     "add": 90
    }
   ]
  },
  "added": 33
 },
 {
  "id": "nordic-gnome-trio",
  "cat": "decor",
  "name": "Nordic Gnome Trio",
  "price": 29.99,
  "img": [
   "img/nordic-gnome-trio-1.jpg",
   "img/nordic-gnome-trio-2.jpg",
   "img/nordic-gnome-trio-3.jpg"
  ],
  "rating": 4.9,
  "reviews": 1102,
  "stock": 64,
  "desc": "Three plush Scandinavian gnomes with long beards and knit hats. The cutest decor of the season.",
  "bullets": [
   "Set of 3, 10 to 14 in",
   "Weighted bases",
   "Soft faux fur beards",
   "Display year after year"
  ],
  "keywords": [
   "gnome",
   "tomte",
   "scandinavian",
   "plush"
  ],
  "tags": [
   "bestseller"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 39.99,
  "colors": [
   "Red",
   "White"
  ],
  "added": 34
 },
 {
  "id": "wooden-nutcracker",
  "cat": "decor",
  "name": "Classic Wooden Nutcracker, 15 in",
  "price": 34.99,
  "img": [
   "img/wooden-nutcracker-1.jpg"
  ],
  "rating": 4.8,
  "reviews": 276,
  "stock": 28,
  "desc": "A handsome soldier nutcracker in the timeless German style.",
  "bullets": [
   "Hand-painted wood",
   "15 in tall",
   "Working jaw",
   "Collectible"
  ],
  "keywords": [
   "nutcracker",
   "soldier",
   "wood"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Red",
   "Blue"
  ],
  "added": 35
 },
 {
  "id": "cottage-snow-globe",
  "cat": "decor",
  "name": "Snowy Cottage Snow Globe",
  "price": 27.99,
  "img": [
   "img/cottage-snow-globe-1.jpg",
   "img/cottage-snow-globe-2.jpg"
  ],
  "rating": 4.8,
  "reviews": 190,
  "stock": 32,
  "desc": "A glass dome with a tiny house and pine tree. Shake it and watch the snow fall.",
  "bullets": [
   "Glass dome",
   "Wooden base",
   "4.5 in tall",
   "Gift boxed"
  ],
  "keywords": [
   "snow globe",
   "cottage",
   "glass",
   "house"
  ],
  "tags": [
   "new"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "added": 36
 },
 {
  "id": "knit-stockings-set",
  "cat": "decor",
  "name": "Knit Christmas Stockings, Set of 5",
  "price": 39.99,
  "img": [
   "img/knit-stockings-set-1.jpg"
  ],
  "rating": 4.7,
  "reviews": 388,
  "stock": 30,
  "desc": "A whole family's worth of chunky knit stockings in classic holiday patterns.",
  "bullets": [
   "Set of 5, 18 in",
   "Soft knit",
   "Hanging loops",
   "Room for big gifts"
  ],
  "keywords": [
   "stocking",
   "knit",
   "family",
   "fireplace",
   "mantel"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 49.99,
  "colors": [
   "Red",
   "Multicolor"
  ],
  "added": 37
 },
 {
  "id": "advent-stocking-garland",
  "cat": "decor",
  "name": "Felt Advent Stocking Garland",
  "price": 32.99,
  "img": [
   "img/advent-stocking-garland-1.jpg",
   "img/advent-stocking-garland-2.jpg",
   "img/advent-stocking-garland-3.jpg"
  ],
  "rating": 4.8,
  "reviews": 154,
  "stock": 25,
  "desc": "24 tiny numbered stockings to fill with treats for the countdown to Christmas.",
  "bullets": [
   "24 felt stockings and bags",
   "Numbered 1 to 24",
   "Includes clips and twine",
   "Reusable every year"
  ],
  "keywords": [
   "advent",
   "countdown",
   "kids",
   "stocking"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "added": 38
 },
 {
  "id": "woodland-santa-figurine",
  "cat": "decor",
  "name": "Woodland Santa Figurine",
  "price": 24.99,
  "img": [
   "img/woodland-santa-figurine-1.jpg"
  ],
  "rating": 4.7,
  "reviews": 96,
  "stock": 20,
  "desc": "Old-world Santa in a blue coat among snowy pines. A charming mantel piece.",
  "bullets": [
   "Hand-painted resin",
   "9 in tall",
   "Detailed finish",
   "Collectible"
  ],
  "keywords": [
   "santa",
   "figurine"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "added": 39
 },
 {
  "id": "faux-poinsettia",
  "cat": "decor",
  "name": "Potted Faux Poinsettia",
  "price": 29.99,
  "img": [
   "img/faux-poinsettia-1.jpg",
   "img/faux-poinsettia-2.jpg"
  ],
  "rating": 4.6,
  "reviews": 134,
  "stock": 45,
  "desc": "The classic Christmas flower that never wilts. Real-touch petals in a festive pot.",
  "bullets": [
   "14 in tall",
   "Real-touch petals",
   "Weighted pot",
   "No watering needed"
  ],
  "keywords": [
   "poinsettia",
   "flower",
   "plant"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Red",
   "Pink"
  ],
  "added": 40
 },
 {
  "id": "plaid-throw-blanket",
  "cat": "decor",
  "name": "Buffalo Plaid Throw Blanket",
  "price": 39.99,
  "img": [
   "img/plaid-throw-blanket-1.jpg",
   "img/plaid-throw-blanket-2.jpg"
  ],
  "rating": 4.8,
  "reviews": 722,
  "stock": 55,
  "desc": "A soft, warm throw for movie nights, cocoa and naps by the tree.",
  "bullets": [
   "50 x 60 in",
   "Ultra-soft flannel",
   "Machine washable",
   "Gift ready"
  ],
  "keywords": [
   "blanket",
   "throw",
   "plaid",
   "cozy"
  ],
  "tags": [
   "bestseller"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 54.99,
  "colors": [
   "Red",
   "Green",
   "Grey"
  ],
  "added": 41
 },
 {
  "id": "light-up-village",
  "cat": "decor",
  "name": "Light-Up Christmas Village, 4 Houses",
  "price": 59.99,
  "img": [
   "img/light-up-village-1.jpg",
   "img/light-up-village-2.jpg"
  ],
  "rating": 4.7,
  "reviews": 215,
  "stock": 18,
  "desc": "Glowing ceramic houses that make a magical scene on a shelf or mantel.",
  "bullets": [
   "4 lit houses",
   "Battery LEDs with timer",
   "Hand-painted porcelain",
   "Collectible"
  ],
  "keywords": [
   "village",
   "houses",
   "light up",
   "mantel"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 79.99,
  "added": 42
 },
 {
  "id": "holly-table-set",
  "cat": "decor",
  "name": "Holly Table Runner and Napkin Set",
  "price": 34.99,
  "img": [
   "img/holly-table-set-1.jpg",
   "img/holly-table-set-2.jpg"
  ],
  "rating": 4.6,
  "reviews": 103,
  "stock": 40,
  "desc": "Set a showstopper Christmas dinner table with a matching runner and napkins.",
  "bullets": [
   "Runner 14 x 72 in",
   "6 cloth napkins",
   "Machine washable",
   "Holly pattern"
  ],
  "keywords": [
   "table",
   "runner",
   "napkin",
   "dinner"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Red",
   "Green"
  ],
  "added": 43
 },
 {
  "id": "black-advent-calendar",
  "cat": "decor",
  "name": "Starry Night Advent Calendar Box",
  "price": 44.99,
  "img": [
   "img/black-advent-calendar-1.jpg"
  ],
  "rating": 4.7,
  "reviews": 64,
  "stock": 20,
  "desc": "24 little drawers to fill with treats, notes and surprises. Reuse it every December.",
  "bullets": [
   "24 numbered boxes",
   "Sturdy wood fiber",
   "Fill with your own gifts",
   "Keeps flat for storage"
  ],
  "keywords": [
   "advent",
   "calendar",
   "countdown"
  ],
  "tags": [
   "new"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "added": 44
 },
 {
  "id": "red-pillar-candles",
  "cat": "candles",
  "name": "Red Pillar Candle Trio",
  "price": 24.99,
  "img": [
   "img/red-pillar-candles-1.jpg",
   "img/red-pillar-candles-2.jpg"
  ],
  "rating": 4.8,
  "reviews": 402,
  "stock": 90,
  "desc": "Three unscented pillar candles in deep Christmas red for mantels and centerpieces.",
  "bullets": [
   "Set of 3: 4, 6 and 8 in",
   "Long 60 hour burn",
   "Dripless",
   "Unscented"
  ],
  "keywords": [
   "candle",
   "pillar"
  ],
  "tags": [
   "bestseller"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Red",
   "White"
  ],
  "added": 45
 },
 {
  "id": "snowy-candle-lantern",
  "cat": "candles",
  "name": "Snowy Candle Lantern",
  "price": 34.99,
  "img": [
   "img/snowy-candle-lantern-1.jpg"
  ],
  "rating": 4.7,
  "reviews": 140,
  "stock": 30,
  "desc": "A classic metal lantern with glass panes, perfect for porches and tables.",
  "bullets": [
   "12 in tall",
   "Glass panels",
   "Fits pillar or LED candle",
   "Carry handle"
  ],
  "keywords": [
   "lantern",
   "porch"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Red",
   "Black"
  ],
  "added": 46
 },
 {
  "id": "paper-star-lantern",
  "cat": "candles",
  "name": "Moravian Paper Star Lantern",
  "price": 29.99,
  "img": [
   "img/paper-star-lantern-1.jpg",
   "img/paper-star-lantern-2.jpg",
   "img/paper-star-lantern-3.jpg"
  ],
  "rating": 4.8,
  "reviews": 121,
  "stock": 35,
  "desc": "A glowing paper star with cut-out patterns that throws beautiful light across the room.",
  "bullets": [
   "24 in across",
   "Bulb cord included",
   "Folds flat for storage",
   "Hang in windows"
  ],
  "keywords": [
   "star",
   "lantern",
   "paper",
   "window"
  ],
  "tags": [
   "new"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Red",
   "Gold",
   "Multicolor"
  ],
  "added": 47
 },
 {
  "id": "tea-light-pack",
  "cat": "candles",
  "name": "Tea Light Candles, 50 Pack",
  "price": 12.99,
  "img": [
   "img/tea-light-pack-1.jpg"
  ],
  "rating": 4.6,
  "reviews": 505,
  "stock": 200,
  "desc": "Everyday tea lights for lanterns, holders and cozy evenings.",
  "bullets": [
   "50 tea lights",
   "4 hour burn",
   "Unscented",
   "Smokeless"
  ],
  "keywords": [
   "tea light",
   "candle"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "White",
   "Red"
  ],
  "added": 48
 },
 {
  "id": "brass-star-light",
  "cat": "candles",
  "name": "Brass Star Wall Light",
  "price": 39.99,
  "img": [
   "img/brass-star-light-1.jpg"
  ],
  "rating": 4.8,
  "reviews": 72,
  "stock": 20,
  "desc": "A pierced brass star that casts a beautiful pattern on your wall.",
  "bullets": [
   "10 in metal star",
   "Warm LED included",
   "Battery with timer",
   "Wall or table"
  ],
  "keywords": [
   "star",
   "wall",
   "gold"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Gold"
  ],
  "added": 49
 },
 {
  "id": "vintage-hanging-lantern",
  "cat": "candles",
  "name": "Vintage Hanging Lantern",
  "price": 27.99,
  "img": [
   "img/vintage-hanging-lantern-1.jpg",
   "img/vintage-hanging-lantern-2.jpg"
  ],
  "rating": 4.6,
  "reviews": 90,
  "stock": 30,
  "desc": "An old-fashioned lantern with a warm LED flicker to hang in trees and doorways.",
  "bullets": [
   "LED flicker candle",
   "Battery with timer",
   "Weatherproof",
   "Hanging ring"
  ],
  "keywords": [
   "lantern",
   "hanging",
   "outdoor"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Gold",
   "Black"
  ],
  "added": 50
 },
 {
  "id": "advent-candle-centerpiece",
  "cat": "candles",
  "name": "Evergreen Candle Centerpiece",
  "price": 32.99,
  "img": [
   "img/advent-candle-centerpiece-1.jpg"
  ],
  "rating": 4.7,
  "reviews": 84,
  "stock": 24,
  "desc": "A ready-made evergreen centerpiece with candles for your Christmas table.",
  "bullets": [
   "Faux evergreen base",
   "3 candles included",
   "18 in long",
   "Reusable"
  ],
  "keywords": [
   "centerpiece",
   "table",
   "candle"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 44.99,
  "added": 51
 },
 {
  "id": "fair-isle-sweater",
  "cat": "apparel",
  "name": "Fair Isle Christmas Sweater",
  "price": 44.99,
  "img": [
   "img/fair-isle-sweater-1.jpg"
  ],
  "rating": 4.7,
  "reviews": 644,
  "stock": 48,
  "desc": "A soft knit sweater with a classic Fair Isle pattern. Festive without being too loud.",
  "bullets": [
   "Soft acrylic knit",
   "Relaxed unisex fit",
   "Machine washable",
   "Ribbed cuffs"
  ],
  "keywords": [
   "sweater",
   "ugly sweater",
   "knit",
   "jumper"
  ],
  "tags": [
   "bestseller"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 59.99,
  "colors": [
   "Red",
   "Green",
   "Navy"
  ],
  "options": {
   "name": "Size",
   "values": [
    {
     "v": "S",
     "add": 0
    },
    {
     "v": "M",
     "add": 0
    },
    {
     "v": "L",
     "add": 0
    },
    {
     "v": "XL",
     "add": 0
    },
    {
     "v": "XXL",
     "add": 3
    }
   ]
  },
  "added": 52
 },
 {
  "id": "family-pajamas",
  "cat": "apparel",
  "name": "Matching Family Christmas Pajamas",
  "price": 34.99,
  "img": [
   "img/family-pajamas-1.jpg"
  ],
  "rating": 4.7,
  "reviews": 388,
  "stock": 80,
  "desc": "Striped holiday pajamas for the whole family. Christmas morning photos, sorted.",
  "bullets": [
   "Soft cotton blend",
   "Sizes for kids and adults",
   "Long sleeve and pants",
   "Machine washable"
  ],
  "keywords": [
   "pajamas",
   "pjs",
   "family",
   "matching",
   "kids"
  ],
  "tags": [
   "new"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Red",
   "Grey"
  ],
  "options": {
   "name": "Size",
   "values": [
    {
     "v": "Kids 4-6",
     "add": 0
    },
    {
     "v": "Kids 8-12",
     "add": 0
    },
    {
     "v": "Adult S",
     "add": 5
    },
    {
     "v": "Adult M",
     "add": 5
    },
    {
     "v": "Adult L",
     "add": 5
    },
    {
     "v": "Adult XL",
     "add": 5
    }
   ]
  },
  "added": 53
 },
 {
  "id": "chunky-knit-scarf",
  "cat": "apparel",
  "name": "Chunky Knit Winter Scarf",
  "price": 24.99,
  "img": [
   "img/chunky-knit-scarf-1.jpg",
   "img/chunky-knit-scarf-2.jpg"
  ],
  "rating": 4.7,
  "reviews": 215,
  "stock": 60,
  "desc": "An oversized, ultra-soft scarf for snowy days and holiday markets.",
  "bullets": [
   "70 x 12 in",
   "Soft chenille knit",
   "Fringed ends",
   "Gift ready"
  ],
  "keywords": [
   "scarf",
   "knit",
   "winter"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Grey",
   "Burgundy",
   "Cream"
  ],
  "added": 54
 },
 {
  "id": "rainbow-wool-socks",
  "cat": "apparel",
  "name": "Cozy Wool Blend Socks",
  "price": 12.99,
  "img": [
   "img/rainbow-wool-socks-1.jpg"
  ],
  "rating": 4.6,
  "reviews": 310,
  "stock": 120,
  "desc": "Thick, colorful socks for lazy mornings by the tree.",
  "bullets": [
   "Wool blend",
   "Cushioned sole",
   "Unisex",
   "Perfect stocking stuffer"
  ],
  "keywords": [
   "socks",
   "wool",
   "stocking stuffer"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Multicolor"
  ],
  "options": {
   "name": "Size",
   "values": [
    {
     "v": "S/M",
     "add": 0
    },
    {
     "v": "L/XL",
     "add": 0
    }
   ]
  },
  "added": 55
 },
 {
  "id": "nordic-knit-sweater",
  "cat": "apparel",
  "name": "Nordic Snowflake Knit Sweater",
  "price": 49.99,
  "img": [
   "img/nordic-knit-sweater-1.jpg"
  ],
  "rating": 4.7,
  "reviews": 152,
  "stock": 30,
  "desc": "A classic snowflake knit that's cozy enough for Christmas and stylish all winter.",
  "bullets": [
   "Soft acrylic wool blend",
   "Crew neck",
   "Machine washable",
   "Unisex fit"
  ],
  "keywords": [
   "sweater",
   "snowflake",
   "nordic",
   "knit"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 64.99,
  "colors": [
   "Navy",
   "Cream"
  ],
  "options": {
   "name": "Size",
   "values": [
    {
     "v": "S",
     "add": 0
    },
    {
     "v": "M",
     "add": 0
    },
    {
     "v": "L",
     "add": 0
    },
    {
     "v": "XL",
     "add": 0
    }
   ]
  },
  "added": 56
 },
 {
  "id": "holiday-crew-socks",
  "cat": "apparel",
  "name": "Holiday Crew Socks, 3 Pack",
  "price": 9.99,
  "img": [
   "img/holiday-crew-socks-1.jpg"
  ],
  "rating": 4.5,
  "reviews": 410,
  "stock": 150,
  "desc": "Bright red holiday socks to wear on Christmas morning, or stuff into a stocking.",
  "bullets": [
   "3 pairs",
   "Cotton blend",
   "One size fits most",
   "Gift ready"
  ],
  "keywords": [
   "socks",
   "stocking stuffer",
   "red"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 14.99,
  "colors": [
   "Red",
   "Multicolor"
  ],
  "added": 57
 },
 {
  "id": "kraft-gift-wrap-kit",
  "cat": "gifts",
  "name": "Kraft Gift Wrap Kit",
  "price": 19.99,
  "img": [
   "img/kraft-gift-wrap-kit-1.jpg",
   "img/kraft-gift-wrap-kit-2.jpg"
  ],
  "rating": 4.8,
  "reviews": 402,
  "stock": 80,
  "desc": "Kraft paper, red twine and tags for that effortlessly beautiful wrapped gift look.",
  "bullets": [
   "3 rolls kraft paper",
   "Red and white twine",
   "24 gift tags",
   "Paper is recyclable"
  ],
  "keywords": [
   "wrapping",
   "kraft",
   "paper",
   "twine",
   "tags"
  ],
  "tags": [
   "bestseller"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "added": 58
 },
 {
  "id": "red-gift-box-set",
  "cat": "gifts",
  "name": "Red Gift Box Set of 3",
  "price": 24.99,
  "img": [
   "img/red-gift-box-set-1.jpg"
  ],
  "rating": 4.7,
  "reviews": 140,
  "stock": 50,
  "desc": "Nesting gift boxes with white ribbon bows. Just add the present.",
  "bullets": [
   "3 nesting sizes",
   "Lids with ribbon",
   "Sturdy card",
   "Reusable"
  ],
  "keywords": [
   "box",
   "gift box",
   "ribbon"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "colors": [
   "Red",
   "Green"
  ],
  "added": 59
 },
 {
  "id": "festive-wrapping-paper",
  "cat": "gifts",
  "name": "Festive Wrapping Paper, 4 Rolls",
  "price": 16.99,
  "img": [
   "img/festive-wrapping-paper-1.jpg",
   "img/festive-wrapping-paper-2.jpg"
  ],
  "rating": 4.6,
  "reviews": 275,
  "stock": 100,
  "desc": "Four coordinated rolls of holiday wrapping paper with cut lines on the back.",
  "bullets": [
   "4 rolls, 30 in x 10 ft",
   "Grid lines for easy cutting",
   "Thick, tear resistant",
   "Matching ribbons sold separately"
  ],
  "keywords": [
   "wrapping",
   "paper",
   "gift wrap"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 22.99,
  "added": 60
 },
 {
  "id": "cookie-decorating-kit",
  "cat": "gifts",
  "name": "Christmas Cookie Decorating Kit",
  "price": 22.99,
  "img": [
   "img/cookie-decorating-kit-1.jpg",
   "img/cookie-decorating-kit-2.jpg"
  ],
  "rating": 4.8,
  "reviews": 188,
  "stock": 40,
  "desc": "Cutters, icing bags and sprinkles for a family afternoon of cookie making.",
  "bullets": [
   "8 holiday cookie cutters",
   "Piping bags and tips",
   "Sprinkles",
   "Recipe card"
  ],
  "keywords": [
   "cookie",
   "baking",
   "kids",
   "gingerbread"
  ],
  "tags": [
   "new"
  ],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "added": 61
 },
 {
  "id": "candy-cane-bundle",
  "cat": "gifts",
  "name": "Candy Cane Treat Bundle",
  "price": 14.99,
  "img": [
   "img/candy-cane-bundle-1.jpg",
   "img/candy-cane-bundle-2.jpg"
  ],
  "rating": 4.6,
  "reviews": 120,
  "stock": 150,
  "desc": "A big bundle of classic peppermint candy canes for stockings, trees and treat bags.",
  "bullets": [
   "48 candy canes",
   "Classic peppermint",
   "Individually wrapped",
   "Hang on the tree"
  ],
  "keywords": [
   "candy cane",
   "peppermint",
   "stocking stuffer"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "added": 62
 },
 {
  "id": "santa-hat-teddy",
  "cat": "gifts",
  "name": "Teddy Bear in Santa Hat",
  "price": 19.99,
  "img": [
   "img/santa-hat-teddy-1.jpg"
  ],
  "rating": 4.9,
  "reviews": 233,
  "stock": 40,
  "desc": "A huggable teddy with a little Santa hat. A first-Christmas favorite.",
  "bullets": [
   "12 in plush",
   "Super soft",
   "Embroidered eyes, safe for kids",
   "Gift ready"
  ],
  "keywords": [
   "teddy",
   "bear",
   "plush",
   "kids",
   "toy"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "added": 63
 },
 {
  "id": "kraft-gift-bags",
  "cat": "gifts",
  "name": "Kraft Gift Bag Set, 12 Pack",
  "price": 14.99,
  "img": [
   "img/kraft-gift-bags-1.jpg",
   "img/kraft-gift-bags-2.jpg"
  ],
  "rating": 4.5,
  "reviews": 96,
  "stock": 90,
  "desc": "Simple kraft gift bags with handles. Tie on a ribbon and you're done.",
  "bullets": [
   "12 bags in 3 sizes",
   "Strong rope handles",
   "Tissue paper included",
   "Recyclable"
  ],
  "keywords": [
   "gift bag",
   "bag",
   "kraft"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "added": 64
 },
 {
  "id": "gingerbread-house-kit",
  "cat": "gifts",
  "name": "Gingerbread House Kit",
  "price": 27.99,
  "img": [
   "img/gingerbread-house-kit-1.jpg",
   "img/gingerbread-house-kit-2.jpg"
  ],
  "rating": 4.7,
  "reviews": 312,
  "stock": 35,
  "desc": "Everything to build and decorate a gingerbread house, pre-baked and ready to assemble.",
  "bullets": [
   "Pre-baked panels",
   "Icing and candies included",
   "Makes a 7 in house",
   "Fun for all ages"
  ],
  "keywords": [
   "gingerbread",
   "house",
   "kids",
   "baking"
  ],
  "tags": [],
  "supplier": {
   "name": "",
   "sku": "",
   "url": "",
   "cost": null
  },
  "compare": 34.99,
  "added": 65
 }
];

window.STORE.hero = ["img/hero-1.jpg", "img/hero-2.jpg", "img/hero-3.jpg"];
window.STORE.bandImg = "img/band.jpg";
