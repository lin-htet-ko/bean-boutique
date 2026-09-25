const COFFEE_JSON = `
[
  {
    "id": "coffee-bean-item-1",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
    "title": "Ethiopia Yirgacheffe Aricha",
    "brandName": "Stumptown Coffee Roasters",
    "description": "A delicate and complex heirloom coffee processed using the traditional washed method, highlighting bright floral and sweet citrus characteristics.",
    "coffeeOrigins": "Ethiopia",
    "tastingNotes": "Jasmine, Lemon Bergamot, Peach Tea",
    "brewingMethods": "Pour Over, Chemex, Aeropress",
    "weight": [
      { "id": "w-250g", "name": "250g", "finalPrice": "$18.50", "originalPrice": "$22.00", "isSelected": true },
      { "id": "w-500g", "name": "500g", "finalPrice": "$34.00", "originalPrice": "$40.00", "isSelected": false },
      { "id": "w-1kg", "name": "1kg", "finalPrice": "$62.00", "originalPrice": "$72.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-2",
    "image": "https://images.unsplash.com/photo-1587734195503-904fca47e0e9",
    "title": "Colombia Huila Supremo",
    "brandName": "Blue Bottle Coffee",
    "description": "Classic Colombian single-origin coffee grown high in the Andes mountains, offering a beautifully balanced cup with medium body and rich sweetness.",
    "coffeeOrigins": "Colombia",
    "tastingNotes": "Milk Chocolate, Red Apple, Caramel",
    "brewingMethods": "Drip Machine, Pour Over, French Press",
    "weight": [
      { "id": "w-12oz", "name": "12 oz", "finalPrice": "$16.00", "originalPrice": "$16.00", "isSelected": true },
      { "id": "w-16oz", "name": "16 oz", "finalPrice": "$20.50", "originalPrice": "$20.50", "isSelected": false },
      { "id": "w-32oz", "name": "32 oz", "finalPrice": "$38.00", "originalPrice": "$38.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-3",
    "image": "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe",
    "title": "Kenya AA Nyeri Hill",
    "brandName": "Intelligentsia Coffee",
    "description": "Famous for its vibrant acidity and intense berry-forward profile, cultivated in nutrient-rich volcanic soil around Mt. Kenya.",
    "coffeeOrigins": "Kenya",
    "tastingNotes": "Blackcurrant, Grapefruit, Brown Sugar",
    "brewingMethods": "Pour Over, V60, Cold Brew",
    "weight": [
      { "id": "w-250g", "name": "250g", "finalPrice": "$16.00", "originalPrice": "$18.50", "isSelected": false },
      { "id": "w-340g", "name": "340g", "finalPrice": "$21.00", "originalPrice": "$24.50", "isSelected": true },
      { "id": "w-500g", "name": "500g", "finalPrice": "$38.00", "originalPrice": "$42.00", "isSelected": false },
      { "id": "w-1kg", "name": "1kg", "finalPrice": "$70.00", "originalPrice": "$78.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-4",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    "title": "Guatemala Antigua Volcán",
    "brandName": "Counter Culture Coffee",
    "description": "Shade-grown in soil enriched by surrounding volcanoes, producing a heavy-bodied coffee with distinctive cocoa undertones and subtle spice.",
    "coffeeOrigins": "Guatemala",
    "tastingNotes": "Dark Chocolate, Toasted Almond, Orange Zest",
    "brewingMethods": "Espresso, French Press, Pour Over",
    "weight": [
      { "id": "w-12oz", "name": "12 oz", "finalPrice": "$17.50", "originalPrice": "$17.50", "isSelected": true },
      { "id": "w-16oz", "name": "16 oz", "finalPrice": "$22.00", "originalPrice": "$22.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-5",
    "image": "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a",
    "title": "Sumatra Mandheling Reserve",
    "brandName": "Peet's Coffee",
    "description": "Wet-hulled single-origin coffee from northern Sumatra, known globally for its low acidity, heavy syrupy mouthfeel, and deep rustic flavors.",
    "coffeeOrigins": "Indonesia",
    "tastingNotes": "Earthy, Cedar, Dark Chocolate, Molasses",
    "brewingMethods": "French Press, Espresso, Moka Pot",
    "weight": [
      { "id": "w-250g", "name": "250g", "finalPrice": "$18.00", "originalPrice": "$20.00", "isSelected": true },
      { "id": "w-500g", "name": "500g", "finalPrice": "$33.00", "originalPrice": "$37.00", "isSelected": false },
      { "id": "w-1kg", "name": "1kg", "finalPrice": "$60.00", "originalPrice": "$68.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-6",
    "image": "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    "title": "Costa Rica Tarrazu La Minita",
    "brandName": "La Colombe Coffee Roasters",
    "description": "Strictly Hard Bean (SHB) coffee cultivated in high elevations, delivering a clean finish with bright acidity and smooth honey sweetness.",
    "coffeeOrigins": "Costa Rica",
    "tastingNotes": "Honey, Apricot, Milk Chocolate",
    "brewingMethods": "Pour Over, Aeropress, Drip Machine",
    "weight": [
      { "id": "w-200g", "name": "200g", "finalPrice": "$12.00", "originalPrice": "$12.00", "isSelected": false },
      { "id": "w-350g", "name": "350g", "finalPrice": "$19.00", "originalPrice": "$19.00", "isSelected": true },
      { "id": "w-500g", "name": "500g", "finalPrice": "$26.50", "originalPrice": "$26.50", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-7",
    "image": "https://images.unsplash.com/photo-1524350876685-274059332603",
    "title": "Brazil Cerrado Mineiro",
    "brandName": "Verve Coffee Roasters",
    "description": "Naturally processed coffee with soft acidity and dense hazelnut notes, making it an exceptional base for espresso and daily drinking.",
    "coffeeOrigins": "Brazil",
    "tastingNotes": "Roasted Hazelnut, Cocoa Powder, Creamy Vanilla",
    "brewingMethods": "Espresso, Cold Brew, Moka Pot",
    "weight": [
      { "id": "w-12oz", "name": "12 oz", "finalPrice": "$14.50", "originalPrice": "$16.50", "isSelected": true },
      { "id": "w-16oz", "name": "16 oz", "finalPrice": "$18.50", "originalPrice": "$21.00", "isSelected": false },
      { "id": "w-32oz", "name": "32 oz", "finalPrice": "$34.00", "originalPrice": "$39.00", "isSelected": false },
      { "id": "w-5lbs", "name": "5 lbs", "finalPrice": "$75.00", "originalPrice": "$85.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-8",
    "image": "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
    "title": "Rwanda Red Bourbon Nyamagabe",
    "brandName": "Onyx Coffee Lab",
    "description": "Fully washed Red Bourbon variety harvested by smallholder farmers, celebrated for its silky mouthfeel and vibrant fruit-forward flavor.",
    "coffeeOrigins": "Rwanda",
    "tastingNotes": "Black Tea, Orange Blossom, Red Plum",
    "brewingMethods": "Pour Over, Chemex, Aeropress",
    "weight": [
      { "id": "w-250g", "name": "250g", "finalPrice": "$20.00", "originalPrice": "$20.00", "isSelected": true },
      { "id": "w-500g", "name": "500g", "finalPrice": "$36.00", "originalPrice": "$36.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-9",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    "title": "Jamaica Blue Mountain No. 1",
    "brandName": "Volcanica Coffee",
    "description": "One of the world's most sought-after coffees, grown under cool misty conditions that yield an exceptionally smooth, mild, and non-bitter cup.",
    "coffeeOrigins": "Jamaica",
    "tastingNotes": "Sweet Cream, Mild Cocoa, Floral Spice",
    "brewingMethods": "Pour Over, French Press, Drip Machine",
    "weight": [
      { "id": "w-100g", "name": "100g", "finalPrice": "$20.00", "originalPrice": "$24.00", "isSelected": false },
      { "id": "w-250g", "name": "250g", "finalPrice": "$45.00", "originalPrice": "$52.00", "isSelected": true },
      { "id": "w-500g", "name": "500g", "finalPrice": "$85.00", "originalPrice": "$98.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-10",
    "image": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6",
    "title": "Panama Geisha Boquete Estate",
    "brandName": "Square Mile Coffee Roasters",
    "description": "Rare and exquisite Geisha variety boasting intense jasmine florals and complex tea-like features, harvested from volcanic slopes.",
    "coffeeOrigins": "Panama",
    "tastingNotes": "Jasmine, Bergamot, Passionfruit, Lemongrass",
    "brewingMethods": "Pour Over, V60",
    "weight": [
      { "id": "w-100g", "name": "100g", "finalPrice": "$38.00", "originalPrice": "$38.00", "isSelected": true },
      { "id": "w-200g", "name": "200g", "finalPrice": "$70.00", "originalPrice": "$70.00", "isSelected": false },
      { "id": "w-300g", "name": "300g", "finalPrice": "$100.00", "originalPrice": "$100.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-11",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "title": "Yemen Mokha Matari",
    "brandName": "Equator Coffees",
    "description": "An ancient heirloom coffee grown on terraced mountain tops, offering a distinctively wild, pungent, and complex spicy dark chocolate cup.",
    "coffeeOrigins": "Yemen",
    "tastingNotes": "Dark Chocolate, Cardamom, Dried Cherry",
    "brewingMethods": "Turkish Coffee, Ibrik, French Press, Espresso",
    "weight": [
      { "id": "w-250g", "name": "250g", "finalPrice": "$28.00", "originalPrice": "$32.00", "isSelected": true },
      { "id": "w-500g", "name": "500g", "finalPrice": "$52.00", "originalPrice": "$60.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-12",
    "image": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e",
    "title": "Honduras Marcala Organic",
    "brandName": "Peace Coffee",
    "description": "Fair-trade organic single-origin coffee with a delicate body, soft citrus brightness, and persistent stone fruit sweetness.",
    "coffeeOrigins": "Honduras",
    "tastingNotes": "Green Apple, Brown Sugar, Milk Chocolate",
    "brewingMethods": "Drip Machine, Aeropress, Pour Over",
    "weight": [
      { "id": "w-12oz", "name": "12 oz", "finalPrice": "$15.50", "originalPrice": "$15.50", "isSelected": true },
      { "id": "w-16oz", "name": "16 oz", "finalPrice": "$19.50", "originalPrice": "$19.50", "isSelected": false },
      { "id": "w-24oz", "name": "24 oz", "finalPrice": "$28.00", "originalPrice": "$28.00", "isSelected": false },
      { "id": "w-32oz", "name": "32 oz", "finalPrice": "$36.00", "originalPrice": "$36.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-13",
    "image": "https://images.unsplash.com/photo-1512568400610-62da28bc8a13",
    "title": "Ethiopia Guji Anaerobic Natural",
    "brandName": "Sey Coffee",
    "description": "Experimental anaerobic fermented coffee beans packed with intense tropical fruit flavors and wine-like sweetness.",
    "coffeeOrigins": "Ethiopia",
    "tastingNotes": "Blueberry Jam, Mango, Dark Rum, Vanilla",
    "brewingMethods": "Pour Over, V60, Cold Brew",
    "weight": [
      { "id": "w-250g", "name": "250g", "finalPrice": "$23.00", "originalPrice": "$26.00", "isSelected": true },
      { "id": "w-500g", "name": "500g", "finalPrice": "$42.00", "originalPrice": "$48.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-14",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "title": "Tanzania Peaberry Kilimanjaro",
    "brandName": "Fresh Roasted Coffee",
    "description": "Rare round single coffee beans harvested from Mount Kilimanjaro, delivering concentrated flavor with bright, snappy acidity.",
    "coffeeOrigins": "Tanzania",
    "tastingNotes": "Lemon, Black Tea, Black Pepper",
    "brewingMethods": "Pour Over, Aeropress, Chemex",
    "weight": [
      { "id": "w-250g", "name": "250g", "finalPrice": "$14.00", "originalPrice": "$14.00", "isSelected": false },
      { "id": "w-340g", "name": "340g", "finalPrice": "$18.50", "originalPrice": "$18.50", "isSelected": true },
      { "id": "w-500g", "name": "500g", "finalPrice": "$26.00", "originalPrice": "$26.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-15",
    "image": "https://images.unsplash.com/photo-1504630083234-14187a9df0f5",
    "title": "Peru Cajamarca Fair Trade",
    "brandName": "Mayorga Coffee",
    "description": "Organically grown high up in the Peruvian Andes, producing a clean, mellow, and universally enjoyable flavor profile.",
    "coffeeOrigins": "Peru",
    "tastingNotes": "Toffee, Red Apple, Milk Chocolate",
    "brewingMethods": "Drip Machine, French Press, Pour Over",
    "weight": [
      { "id": "w-12oz", "name": "12 oz", "finalPrice": "$15.00", "originalPrice": "$17.00", "isSelected": true },
      { "id": "w-16oz", "name": "16 oz", "finalPrice": "$19.00", "originalPrice": "$21.50", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-16",
    "image": "https://images.unsplash.com/photo-1507133750040-4a8f57021571",
    "title": "Papua New Guinea Sigri Estate",
    "brandName": "Klatch Coffee",
    "description": "Grown from Jamaica Blue Mountain slips planted in PNG, producing a delicate, complex cup with low acidity and warm earthy undertones.",
    "coffeeOrigins": "Papua New Guinea",
    "tastingNotes": "Mango, Walnuts, Dark Cocoa",
    "brewingMethods": "French Press, Aeropress, Pour Over",
    "weight": [
      { "id": "w-250g", "name": "250g", "finalPrice": "$17.00", "originalPrice": "$17.00", "isSelected": true },
      { "id": "w-500g", "name": "500g", "finalPrice": "$31.00", "originalPrice": "$31.00", "isSelected": false },
      { "id": "w-1kg", "name": "1kg", "finalPrice": "$58.00", "originalPrice": "$58.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-17",
    "image": "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    "title": "Dark Roast Espresso Blend",
    "brandName": "Kicking Horse Coffee",
    "description": "A robust house blend combining Latin American and Indonesian origins, roasted deep to produce thick crema and bold chocolate flavors.",
    "coffeeOrigins": "Brazil, Colombia, Indonesia",
    "tastingNotes": "Dark Cocoa, Smoked Cedar, Caramel",
    "brewingMethods": "Espresso, Moka Pot, French Press",
    "weight": [
      { "id": "w-12oz", "name": "12 oz", "finalPrice": "$11.50", "originalPrice": "$14.00", "isSelected": false },
      { "id": "w-16oz", "name": "16 oz", "finalPrice": "$15.00", "originalPrice": "$18.00", "isSelected": true },
      { "id": "w-32oz", "name": "32 oz", "finalPrice": "$27.00", "originalPrice": "$32.00", "isSelected": false },
      { "id": "w-5lbs", "name": "5 lbs", "finalPrice": "$60.00", "originalPrice": "$70.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-18",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    "title": "Equatorial Sunrise Breakfast Blend",
    "brandName": "Caribou Coffee",
    "description": "Lightly roasted African and South American coffees blended to create an uplifting morning cup filled with gentle citrus and toasted grain flavors.",
    "coffeeOrigins": "Ethiopia, Colombia",
    "tastingNotes": "Clementine, Honey, Toasted Almond",
    "brewingMethods": "Drip Machine, Pour Over",
    "weight": [
      { "id": "w-12oz", "name": "12 oz", "finalPrice": "$16.00", "originalPrice": "$16.00", "isSelected": true },
      { "id": "w-16oz", "name": "16 oz", "finalPrice": "$20.00", "originalPrice": "$20.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-19",
    "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
    "title": "Velvet Night Decaf Swiss Water Process",
    "brandName": "Gorilla Coffee",
    "description": "100% chemical-free decaffeinated blend that preserves full-bodied flavor without the caffeine buzz.",
    "coffeeOrigins": "Colombia, Peru",
    "tastingNotes": "Graham Cracker, Milk Chocolate, Molasses",
    "brewingMethods": "Drip Machine, French Press, Espresso",
    "weight": [
      { "id": "w-250g", "name": "250g", "finalPrice": "$17.50", "originalPrice": "$19.50", "isSelected": true },
      { "id": "w-500g", "name": "500g", "finalPrice": "$32.00", "originalPrice": "$35.00", "isSelected": false }
    ]
  },
  {
    "id": "coffee-bean-item-20",
    "image": "https://images.unsplash.com/photo-1561047029-3000c68339ca",
    "title": "Vietnam Da Lat Arabica",
    "brandName": "Nguyen Coffee Supply",
    "description": "High-altitude specialty Arabica cultivated in Central Highlands of Vietnam, bringing rich chocolate notes combined with delicate fruitiness.",
    "coffeeOrigins": "Vietnam",
    "tastingNotes": "Baker's Chocolate, Vanilla Bean, Lemongrass",
    "brewingMethods": "Phin Filter, Pour Over, Espresso",
    "weight": [
      { "id": "w-250g", "name": "250g", "finalPrice": "$16.50", "originalPrice": "$16.50", "isSelected": true },
      { "id": "w-500g", "name": "500g", "finalPrice": "$30.00", "originalPrice": "$30.00", "isSelected": false },
      { "id": "w-1kg", "name": "1kg", "finalPrice": "$55.00", "originalPrice": "$55.00", "isSelected": false }
    ]
  }
]
`;

const EQUIPMENT_JSON = `[
  {
    "id": "brewing-equipment-item-1",
    "image": "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80",
    "title": "Classic Drip Coffee Maker 12-Cup",
    "brandName": "Mr. Coffee",
    "description": "Simple and efficient 12-cup drip coffee maker featuring an auto-pause feature and an easy-view water window.",
    "warranty": "1 Year Limited Warranty",
    "category": "Drip Coffee Maker",
    "material": "BPA-Free Plastic & Glass",
    "dimensions": "14.4 x 9.6 x 11.7 inches",
    "filterType": "Basket Paper Filter / Reusable Mesh",
    "modelNo": "BVMC-CG13-RB",
    "whatWillIncludeInTheBox": "Coffee Maker, 12-Cup Glass Carafe, Brew Basket, User Manual",
    "variant": [
      { "id": "v1-1", "name": "Black", "finalPrice": "$34.99", "originalPrice": "$34.99", "isSelected": true },
      { "id": "v1-2", "name": "White", "finalPrice": "$34.99", "originalPrice": "$34.99", "isSelected": false },
      { "id": "v1-3", "name": "Stainless Steel Trim", "finalPrice": "$39.99", "originalPrice": "$44.99", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-2",
    "image": "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80",
    "title": "Barista Touch Espresso Machine",
    "brandName": "Breville",
    "description": "Automated touch screen espresso machine with integrated precision conical burr grinder and automatic milk texturing.",
    "warranty": "2 Year Limited Warranty",
    "category": "Espresso Machine",
    "material": "Brushed Stainless Steel",
    "dimensions": "12.7 x 12.6 x 16 inches",
    "filterType": "Portafilter Single & Double Wall Basket",
    "modelNo": "BES880BSS",
    "whatWillIncludeInTheBox": "Espresso Machine, 54mm Portafilter, Single & Double Wall Filter Baskets, 480ml Stainless Steel Milk Jug, Water Filter & Holder, Cleaning Kit, Water Hardness Test Strip",
    "variant": [
      { "id": "v2-1", "name": "Brushed Stainless Steel", "finalPrice": "$899.95", "originalPrice": "$999.95", "isSelected": true },
      { "id": "v2-2", "name": "Black Truffle", "finalPrice": "$899.95", "originalPrice": "$999.95", "isSelected": false },
      { "id": "v2-3", "name": "Damson Blue", "finalPrice": "$949.95", "originalPrice": "$999.95", "isSelected": false },
      { "id": "v2-4", "name": "Sea Salt White", "finalPrice": "$899.95", "originalPrice": "$999.95", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-3",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    "title": "K-Classic Single Serve Coffee Maker",
    "brandName": "Keurig",
    "description": "Popular single-serve pod coffee maker brewing multiple cup sizes with simple button controls.",
    "warranty": "1 Year Limited Warranty",
    "category": "Single Serve Pod Brewer",
    "material": "Plastic",
    "dimensions": "13.0 x 9.8 x 13.3 inches",
    "filterType": "K-Cup Pod System",
    "modelNo": "K50",
    "whatWillIncludeInTheBox": "K-Classic Coffee Maker, 48 oz Water Reservoir, Removable Drip Tray, User Guide",
    "variant": [
      { "id": "v3-1", "name": "Black", "finalPrice": "$79.99", "originalPrice": "$109.99", "isSelected": true },
      { "id": "v3-2", "name": "Rhubarb Red", "finalPrice": "$84.99", "originalPrice": "$109.99", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-4",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "title": "Magnifica Automatic Espresso Machine",
    "brandName": "De'Longhi",
    "description": "Compact bean-to-cup espresso machine with a manual cappuccino system for custom froth creation.",
    "warranty": "2 Year Warranty",
    "category": "Super-Automatic Espresso Machine",
    "material": "Stainless Steel & ABS Plastic",
    "dimensions": "11.0 x 15.3 x 14.4 inches",
    "filterType": "Built-in Steel Burr Grinder / Mesh Filter",
    "modelNo": "ESAM3300",
    "whatWillIncludeInTheBox": "Magnifica Espresso Machine, Removable Water Tank, Drip Tray, Descaling Solution, Coffee Scoop, Manual",
    "variant": [
      { "id": "v4-1", "name": "Silver", "finalPrice": "$549.95", "originalPrice": "$699.95", "isSelected": true },
      { "id": "v4-2", "name": "Matte Black", "finalPrice": "$579.95", "originalPrice": "$699.95", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-5",
    "image": "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?auto=format&fit=crop&w=800&q=80",
    "title": "KBGV Select Coffee Maker",
    "brandName": "Moccamaster",
    "description": "Handmade Dutch drip coffee brewer certified by the SCA for precise temperature extraction and taste.",
    "warranty": "5 Year Limited Warranty",
    "category": "Drip Coffee Maker",
    "material": "Aluminum & Glass",
    "dimensions": "12.75 x 6.5 x 14.0 inches",
    "filterType": "#4 Paper Filter",
    "modelNo": "59611",
    "whatWillIncludeInTheBox": "KBGV Select Brewer, 1.25L Glass Carafe, Brew Basket, Sample Pack #4 Filters, Manual",
    "variant": [
      { "id": "v5-1", "name": "Polished Silver", "finalPrice": "$359.00", "originalPrice": "$359.00", "isSelected": true },
      { "id": "v5-2", "name": "Matte Black", "finalPrice": "$359.00", "originalPrice": "$359.00", "isSelected": false },
      { "id": "v5-3", "name": "Off-White", "finalPrice": "$359.00", "originalPrice": "$359.00", "isSelected": false },
      { "id": "v5-4", "name": "Pistachio", "finalPrice": "$369.00", "originalPrice": "$369.00", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-6",
    "image": "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80",
    "title": "AeroPress Original Coffee Press",
    "brandName": "AeroPress",
    "description": "Portable immersion coffee maker using gentle pressure to create smooth, non-bitter full-bodied coffee.",
    "warranty": "1 Year Limited Warranty",
    "category": "Manual Immersion Press",
    "material": "BPA-Free Polypropylene",
    "dimensions": "4.7 x 4.7 x 11.8 inches",
    "filterType": "Micro-Paper Filter",
    "modelNo": "80R11",
    "whatWillIncludeInTheBox": "AeroPress Chamber & Plunger, Filter Cap, Stirrer, Scoop, 350 Paper Micro-Filters, Filter Holder",
    "variant": [
      { "id": "v6-1", "name": "Standard Clear Gray", "finalPrice": "$39.95", "originalPrice": "$39.95", "isSelected": true },
      { "id": "v6-2", "name": "Clear Red Edition", "finalPrice": "$44.95", "originalPrice": "$49.95", "isSelected": false },
      { "id": "v6-3", "name": "Clear Blue Edition", "finalPrice": "$44.95", "originalPrice": "$49.95", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-7",
    "image": "https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&w=800&q=80",
    "title": "Chambord French Press Coffee Maker",
    "brandName": "Bodum",
    "description": "Iconic glass and stainless steel French press coffee maker designed to extract aromatic oils and flavor.",
    "warranty": "1 Year Limited Warranty",
    "category": "French Press",
    "material": "Borosilicate Glass & Chrome-Plated Steel",
    "dimensions": "6.8 x 4.1 x 9.6 inches",
    "filterType": "3-Part Stainless Steel Mesh Filter",
    "modelNo": "1928-16US4",
    "whatWillIncludeInTheBox": "Borosilicate Glass Beaker, Stainless Steel Frame & Handle, Plunger Assembly with Filter, Coffee Scoop",
    "variant": [
      { "id": "v7-1", "name": "Chrome - 34 oz (8 Cup)", "finalPrice": "$24.99", "originalPrice": "$35.00", "isSelected": true },
      { "id": "v7-2", "name": "Chrome - 12 oz (3 Cup)", "finalPrice": "$18.50", "originalPrice": "$22.00", "isSelected": false },
      { "id": "v7-3", "name": "Copper - 34 oz (8 Cup)", "finalPrice": "$29.99", "originalPrice": "$40.00", "isSelected": false },
      { "id": "v7-4", "name": "Matte Black - 34 oz (8 Cup)", "finalPrice": "$24.99", "originalPrice": "$35.00", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-8",
    "image": "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&w=800&q=80",
    "title": "Classic Stovetop Espresso Maker 6-Cup",
    "brandName": "Bialetti",
    "description": "Traditional octagonal aluminum Moka pot for brewing authentic, rich Italian espresso on the stovetop.",
    "warranty": "2 Year Limited Warranty",
    "category": "Stovetop Moka Pot",
    "material": "Food-Grade Aluminum",
    "dimensions": "4.0 x 5.5 x 8.5 inches",
    "filterType": "Integrated Aluminum Filter Plate",
    "modelNo": "06800",
    "whatWillIncludeInTheBox": "Moka Pot Upper Chamber, Funnel Filter Basket, Lower Water Boiler, Gasket & Filter Plate",
    "variant": [
      { "id": "v8-1", "name": "Silver Aluminum - 6 Cup", "finalPrice": "$37.99", "originalPrice": "$45.00", "isSelected": true },
      { "id": "v8-2", "name": "Silver Aluminum - 3 Cup", "finalPrice": "$29.99", "originalPrice": "$35.00", "isSelected": false },
      { "id": "v8-3", "name": "Silver Aluminum - 9 Cup", "finalPrice": "$49.99", "originalPrice": "$55.00", "isSelected": false },
      { "id": "v8-4", "name": "Black Italia - 6 Cup", "finalPrice": "$39.99", "originalPrice": "$45.00", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-9",
    "image": "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80",
    "title": "Virtuoso+ Conical Burr Coffee Grinder",
    "brandName": "Baratza",
    "description": "High-performance precision coffee grinder featuring a digital timer for consistent dosing.",
    "warranty": "1 Year Manufacturer Warranty",
    "category": "Coffee Grinder",
    "material": "Cast Zinc Body & Stainless Steel Burrs",
    "dimensions": "6.7 x 6.7 x 12.6 inches",
    "filterType": "N/A (Grinder)",
    "modelNo": "586",
    "whatWillIncludeInTheBox": "Virtuoso+ Grinder, Bean Hopper (8 oz capacity), Grounds Bin with LED, Cleaning Brush, Manual",
    "variant": [
      { "id": "v9-1", "name": "Black / Stainless", "finalPrice": "$249.95", "originalPrice": "$249.95", "isSelected": true },
      { "id": "v9-2", "name": "All-Black Special Edition", "finalPrice": "$259.95", "originalPrice": "$259.95", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-10",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    "title": "VertuoPlus Coffee and Espresso Machine",
    "brandName": "Nespresso",
    "description": "Single-serve brewing system using Centrifusion technology to brew both coffee and authentic espresso.",
    "warranty": "1 Year Warranty",
    "category": "Single Serve Pod Brewer",
    "material": "ABS Plastic",
    "dimensions": "8.7 x 16.7 x 12.8 inches",
    "filterType": "Nespresso Vertuo Pod System",
    "modelNo": "ENV150GY",
    "whatWillIncludeInTheBox": "VertuoPlus Machine, Removable Water Tank, Welcome Capsule Tasting Set (12 Pods), Instruction Booklet",
    "variant": [
      { "id": "v10-1", "name": "Matte Grey", "finalPrice": "$129.00", "originalPrice": "$169.00", "isSelected": true },
      { "id": "v10-2", "name": "Piano Black", "finalPrice": "$129.00", "originalPrice": "$169.00", "isSelected": false },
      { "id": "v10-3", "name": "Red Metallic", "finalPrice": "$139.00", "originalPrice": "$169.00", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-11",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "title": "Precision Brewer Thermal Coffee Maker",
    "brandName": "Breville",
    "description": "60-oz drip coffee maker with precise temperature control and customizable brew modes.",
    "warranty": "2 Year Limited Warranty",
    "category": "Drip Coffee Maker",
    "material": "Brushed Stainless Steel",
    "dimensions": "12.4 x 6.7 x 15.7 inches",
    "filterType": "Flat Bottom & Cone Filter Baskets",
    "modelNo": "BDC450BSS",
    "whatWillIncludeInTheBox": "Precision Brewer Unit, Thermal Stainless Steel Carafe, Flat Bottom Basket, Cone Filter Basket Insert, Water Hardness Test Strip, Measuring Spoon",
    "variant": [
      { "id": "v11-1", "name": "Brushed Stainless Steel (Thermal Carafe)", "finalPrice": "$299.95", "originalPrice": "$329.95", "isSelected": true },
      { "id": "v11-2", "name": "Brushed Stainless Steel (Glass Carafe)", "finalPrice": "$279.95", "originalPrice": "$299.95", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-12",
    "image": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    "title": "Cold Brew Coffee Maker 1-Quart",
    "brandName": "Takeya",
    "description": "Airtight pitcher with a fine-mesh coffee filter designed to produce smooth, low-acid cold brew extract.",
    "warranty": "1 Year Limited Warranty",
    "category": "Cold Brew Maker",
    "material": "BPA-Free Tritan Plastic & Silicone",
    "dimensions": "4.1 x 6.1 x 9.5 inches",
    "filterType": "Fine-Mesh Reusable Filter",
    "modelNo": "10310",
    "whatWillIncludeInTheBox": "1-Quart Tritan Pitcher, Reusable Fine-Mesh Coffee Filter, Airtight Lid, Silicone Handle Grip",
    "variant": [
      { "id": "v12-1", "name": "Black Lid - 1 Quart", "finalPrice": "$27.99", "originalPrice": "$27.99", "isSelected": true },
      { "id": "v12-2", "name": "White Lid - 1 Quart", "finalPrice": "$27.99", "originalPrice": "$27.99", "isSelected": false },
      { "id": "v12-3", "name": "Black Lid - 2 Quart", "finalPrice": "$34.99", "originalPrice": "$39.99", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-13",
    "image": "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=800&q=80",
    "title": "Pour-Over Glass Coffeemaker 8-Cup",
    "brandName": "Chemex",
    "description": "Non-porous Borosilicate glass brewer featuring an elegant hourglass shape and polished wood collar.",
    "warranty": "1 Year Limited Warranty",
    "category": "Pour-Over Brewer",
    "material": "Borosilicate Glass & Wood Collar with Leather Tie",
    "dimensions": "5.1 x 5.1 x 9.1 inches",
    "filterType": "Chemex Bonded Paper Filters (FC-100 / FS-100)",
    "modelNo": "CM-8A",
    "whatWillIncludeInTheBox": "Glass Carafe, Wood Collar, Leather Cord Tie, Usage Guide",
    "variant": [
      { "id": "v13-1", "name": "Classic Wood Collar - 8 Cup", "finalPrice": "$49.50", "originalPrice": "$49.50", "isSelected": true },
      { "id": "v13-2", "name": "Classic Wood Collar - 6 Cup", "finalPrice": "$46.50", "originalPrice": "$46.50", "isSelected": false },
      { "id": "v13-3", "name": "Glass Handle Series - 8 Cup", "finalPrice": "$51.50", "originalPrice": "$51.50", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-14",
    "image": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80",
    "title": "Specialty 10-Cup Coffee Maker",
    "brandName": "Ninja",
    "description": "SCA-certified coffee maker capable of brewing iced coffee, specialty concentrates, and custom cup sizes.",
    "warranty": "1 Year Limited Warranty",
    "category": "Specialty Drip Coffee Maker",
    "material": "Plastic & Stainless Steel Accents",
    "dimensions": "12.0 x 8.8 x 15.0 inches",
    "filterType": "Permanent Gold-Tone Mesh Filter",
    "modelNo": "CM401",
    "whatWillIncludeInTheBox": "Ninja Specialty Brewer, 50 oz Glass Carafe, Fold-Away Milk Frother, Permanent Filter, Smart Scoop, Water Reservoir",
    "variant": [
      { "id": "v14-1", "name": "Black / Stainless (Glass Carafe)", "finalPrice": "$159.99", "originalPrice": "$179.99", "isSelected": true },
      { "id": "v14-2", "name": "Black / Stainless (Thermal Carafe)", "finalPrice": "$189.99", "originalPrice": "$209.99", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-15",
    "image": "https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=800&q=80",
    "title": "Gaggia Classic Pro Espresso Machine",
    "brandName": "Gaggia",
    "description": "Entry-level professional espresso machine featuring a commercial-style portafilter and three-way solenoid valve.",
    "warranty": "2 Year Limited Warranty",
    "category": "Semi-Automatic Espresso Machine",
    "material": "Stainless Steel Housing",
    "dimensions": "9.5 x 8.0 x 14.2 inches",
    "filterType": "58mm Commercial Portafilter (Pressurized & Commercial Baskets)",
    "modelNo": "RI9380/46",
    "whatWillIncludeInTheBox": "Gaggia Classic Pro Machine, 58mm Chrome-Plated Brass Portafilter, Single & Double Baskets, Plastic Tamper, Coffee Scoop",
    "variant": [
      { "id": "v15-1", "name": "Thunder Black", "finalPrice": "$449.00", "originalPrice": "$499.00", "isSelected": true },
      { "id": "v15-2", "name": "Brushed Stainless Steel", "finalPrice": "$449.00", "originalPrice": "$499.00", "isSelected": false },
      { "id": "v15-3", "name": "Cherry Red", "finalPrice": "$469.00", "originalPrice": "$499.00", "isSelected": false },
      { "id": "v15-4", "name": "Polar White", "finalPrice": "$469.00", "originalPrice": "$499.00", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-16",
    "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    "title": "8-Cup Cold Brew Maker",
    "brandName": "OXO",
    "description": "Cold brew system featuring a rainmaker cap for even water distribution and a fine stainless-steel mesh filter.",
    "warranty": "2 Year Better Guarantee",
    "category": "Cold Brew Maker",
    "material": "BPA-Free Plastic & Glass Carafe",
    "dimensions": "9.5 x 9.5 x 14.7 inches",
    "filterType": "Fine Stainless Steel Mesh & Optional Paper Filters",
    "modelNo": "11237200",
    "whatWillIncludeInTheBox": "Brewing Container, Glass Carafe with Stopper, Rainmaker Top, Reusable Stainless Mesh Filter, Sample Paper Filters (10-pack)",
    "variant": [
      { "id": "v16-1", "name": "Standard Glass Carafe", "finalPrice": "$51.95", "originalPrice": "$51.95", "isSelected": true },
      { "id": "v16-2", "name": "Compact 32-oz Version", "finalPrice": "$34.95", "originalPrice": "$39.95", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-17",
    "image": "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
    "title": "Stagg EKG Electric Gooseneck Kettle",
    "brandName": "Fellow",
    "description": "Precision pour-over electric kettle with variable temperature control and a minimalist aesthetic.",
    "warranty": "1 Year Warranty (2 Year upon registration)",
    "category": "Electric Pour-Over Kettle",
    "material": "304 Stainless Steel Body & Lid",
    "dimensions": "11.1 x 6.7 x 7.7 inches",
    "filterType": "N/A (Kettle)",
    "modelNo": "STG-EKG-BK",
    "whatWillIncludeInTheBox": "Stagg EKG Kettle Body, Heating Base with LCD Display, Power Cord, Instruction Manual",
    "variant": [
      { "id": "v17-1", "name": "Matte Black (0.9 Liter)", "finalPrice": "$165.00", "originalPrice": "$195.00", "isSelected": true },
      { "id": "v17-2", "name": "Matte White (0.9 Liter)", "finalPrice": "$165.00", "originalPrice": "$195.00", "isSelected": false },
      { "id": "v17-3", "name": "Polished Copper (0.9 Liter)", "finalPrice": "$185.00", "originalPrice": "$215.00", "isSelected": false },
      { "id": "v17-4", "name": "Warm Pink (0.9 Liter)", "finalPrice": "$165.00", "originalPrice": "$195.00", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-18",
    "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    "title": "Programmable 14-Cup Coffeemaker",
    "brandName": "Cuisinart",
    "description": "Large capacity drip coffee machine equipped with fully automatic settings and brew strength control.",
    "warranty": "3 Year Limited Warranty",
    "category": "Drip Coffee Maker",
    "material": "Stainless Steel & Plastic",
    "dimensions": "7.75 x 9.0 x 14.0 inches",
    "filterType": "Gold-Tone Reusable Filter & Charcoal Water Filter",
    "modelNo": "DCC-3200P1",
    "whatWillIncludeInTheBox": "14-Cup Coffeemaker, Glass Carafe with Stainless Steel Handle, Gold-Tone Filter, Charcoal Water Filter & Holder, Measuring Scoop, Manual",
    "variant": [
      { "id": "v18-1", "name": "Stainless Steel", "finalPrice": "$99.95", "originalPrice": "$99.95", "isSelected": true },
      { "id": "v18-2", "name": "Copper Stainless", "finalPrice": "$109.95", "originalPrice": "$119.95", "isSelected": false },
      { "id": "v18-3", "name": "Black Stainless", "finalPrice": "$109.95", "originalPrice": "$119.95", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-19",
    "image": "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?auto=format&fit=crop&w=800&q=80",
    "title": "Silvia Espresso Machine",
    "brandName": "Rancilio",
    "description": "Semi-automatic commercial-grade espresso machine crafted with a heavy-duty brass boiler and steel housing.",
    "warranty": "2 Year Warranty",
    "category": "Semi-Automatic Espresso Machine",
    "material": "Iron Frame & Stainless Steel Side Panels",
    "dimensions": "9.2 x 11.4 x 13.3 inches",
    "filterType": "58mm Commercial Ergonomic Portafilter",
    "modelNo": "SILVIA-M",
    "whatWillIncludeInTheBox": "Rancilio Silvia Machine, 58mm Portafilter, Single Basket, Double Basket, Professional 58mm Coffee Tamper, Coffee Measuring Spoon",
    "variant": [
      { "id": "v19-1", "name": "Brushed Stainless", "finalPrice": "$865.00", "originalPrice": "$865.00", "isSelected": true },
      { "id": "v19-2", "name": "Black Edition", "finalPrice": "$895.00", "originalPrice": "$895.00", "isSelected": false }
    ]
  },
  {
    "id": "brewing-equipment-item-20",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    "title": "V60 Ceramic Coffee Dripper Size 02",
    "brandName": "Hario",
    "description": "Iconic Japanese pour-over cone dripper designed with spiral ribs for maximum coffee expansion.",
    "warranty": "1 Year Limited Warranty",
    "category": "Pour-Over Dripper",
    "material": "Arita-yaki Ceramic",
    "dimensions": "5.5 x 4.7 x 4.0 inches",
    "filterType": "Hario V60 Size 02 Paper Filters",
    "modelNo": "VDC-02-W",
    "whatWillIncludeInTheBox": "V60 Ceramic Dripper, Coffee Measuring Scoop",
    "variant": [
      { "id": "v20-1", "name": "White Ceramic", "finalPrice": "$22.00", "originalPrice": "$25.00", "isSelected": true },
      { "id": "v20-2", "name": "Red Ceramic", "finalPrice": "$22.00", "originalPrice": "$25.00", "isSelected": false },
      { "id": "v20-3", "name": "Matte Black Ceramic", "finalPrice": "$24.00", "originalPrice": "$27.00", "isSelected": false }
    ]
  }
]`;
const cartItemCount = document.getElementById("cart-item-count");
const cartItemCountText = document.getElementById("cart-item-count-text");

let coffees = [];
coffees = JSON.parse(COFFEE_JSON);
bindCoffeeBeanItemClickListener();
// fetch("./assests/json/equipment.json")
//     .then((response) => response.json())
//     .then((response) => {

//     });

let equipments = [];
equipments = JSON.parse(EQUIPMENT_JSON);
bindBrewingMachineItemClickListener();

// fetch("./assests/json/equipment.json")
//     .then((response) => response.json())
//     .then((response) => {
//         equipments = response;
//         bindBrewingMachineItemClickListener()
//     });

function retrieveSelectedCoffeeWeight(id) {
  return coffees
    .filter((value) => value.id == id)[0]
    ?.weight.filter((value) => value.isSelected)[0].name;
}

function retrieveSelectedBrewingVariant(id) {
  return equipments
    .filter((value) => value.id == id)[0]
    ?.variant.filter((value) => value.isSelected)[0].name;
}

function onDomLoaded() {
  document.addEventListener("DOMContentLoaded", () => {
    let total = getCartItemSize();
    if (total > 0) {
      cartItemCount.textContent = total;
      cartItemCount.style.display = "inline-block";
      cartItemCountText.textContent = total;
    } else {
      cartItemCount.style.display = "none";
      cartItemCountText.textContent = 0;
    }
  });
}
onDomLoaded();

document.querySelector("nav h3").addEventListener("click", () => {
  if (!window.location.href.includes("index.html")) {
    window.location.href = "../index.html";
  } else {
    window.location.href = "index.html";
  }
});

function bindCoffeeBeanItemClickListener() {
  for (
    let coffeeBeanItemIndex = 1;
    coffeeBeanItemIndex <= 20;
    coffeeBeanItemIndex++
  ) {
    const coffeeId = `coffee-bean-item-${coffeeBeanItemIndex}`;
    const coffeeBeanItem = document.getElementById(coffeeId);

    if (coffeeBeanItem) {
      const navigateToCoffeeDetail = (event) => {
        event.preventDefault();
        let location = "";
        if (!window.location.href.includes("index.html")) {
          location = `./coffee_detail.html?item=coffee-bean-item-${coffeeBeanItemIndex}`;
        } else {
            location = `./pages/coffee_detail.html?item=coffee-bean-item-${coffeeBeanItemIndex}`;
        }
        window.location.href = location;
        
      };

      const getItemKey = (index) => `#coffee-bean-item-${index}`;
      const itemKey = getItemKey(coffeeBeanItemIndex);

      const cartQuantityDisplay = coffeeBeanItem.querySelector(
        `#coffee-bean-item-${coffeeBeanItemIndex} #cart-quantity`,
      );
      const updateCartUI = (itemKey) => {
        const totalCount = getCartItemSize();

        cartItemCount.style.display = totalCount > 0 ? "inline-block" : "none";
        cartItemCount.textContent = totalCount;
        cartItemCountText.textContent = totalCount;

        cartQuantityDisplay.textContent = getQuantity(
          `${itemKey}$${retrieveSelectedCoffeeWeight(coffeeId)}`,
        );
      };

      updateCartUI(itemKey);

      coffeeBeanItem
        .querySelector("#coffee-bean-item-img")
        .addEventListener("click", navigateToCoffeeDetail);

      const addToCartButton = coffeeBeanItem.querySelector(
        `#coffee-bean-item-${coffeeBeanItemIndex} #btn-add-to-cart`,
      );
      const reduceFromCartButton = coffeeBeanItem.querySelector(
        `#coffee-bean-item-${coffeeBeanItemIndex} #btn-reduce-from-cart`,
      );

      addToCartButton.addEventListener("click", () => {
        addCoffeeItemToCart(itemKey, retrieveSelectedCoffeeWeight(coffeeId));
        updateCartUI(itemKey);
      });

      reduceFromCartButton.addEventListener("click", () => {
        reduceCoffeeItemFromCart(
          itemKey,
          retrieveSelectedCoffeeWeight(coffeeId),
        );
        updateCartUI(itemKey);
      });
    }
  }
}

function bindBrewingMachineItemClickListener() {
  for (
    let brewingMethodIndex = 1;
    brewingMethodIndex <= 20;
    brewingMethodIndex++
  ) {
    let brewingId = `brewing-equipment-item-${brewingMethodIndex}`;
    const brewingMethodItem = document.getElementById(brewingId);

    if (brewingMethodItem) {
      const navigateToBrewingDetail = (event) => {
        event.preventDefault();

        let location = "";
        if (!window.location.href.includes("index.html")) {
          location = `./equipment_detail.html?item=brewing-equipment-item-${brewingMethodIndex}`;
        } else {
            location = `./pages/equipment_detail.html?item=brewing-equipment-item-${brewingMethodIndex}`;
        }
        window.location.href = location;
      };

      const cartQuantityDisplay = brewingMethodItem.querySelector(
        `#brewing-equipment-item-${brewingMethodIndex} #cart-quantity`,
      );

      const getItemKey = (index) => `#brewing-equipment-item-${index}`;
      const itemKey = getItemKey(brewingMethodIndex);

      const updateCartUI = (itemKey) => {
        const totalCount = getCartItemSize();
        cartItemCount.style.display = totalCount > 0 ? "inline-block" : "none";
        cartItemCount.textContent = totalCount;
        cartItemCountText.textContent = totalCount;

        cartQuantityDisplay.textContent = getQuantity(
          `${itemKey}$${retrieveSelectedBrewingVariant(brewingId)}`,
        );
      };

      updateCartUI(itemKey);

      brewingMethodItem
        .querySelector("#equipment-item-img")
        .addEventListener("click", navigateToBrewingDetail);

      const addToCartButton = brewingMethodItem.querySelector(
        `#brewing-equipment-item-${brewingMethodIndex} #btn-add-to-cart`,
      );
      const reduceFromCartButton = brewingMethodItem.querySelector(
        `#brewing-equipment-item-${brewingMethodIndex} #btn-reduce-from-cart`,
      );

      addToCartButton.addEventListener("click", () => {
        addBrewingItemToCart(
          itemKey,
          retrieveSelectedBrewingVariant(brewingId),
        );
        updateCartUI(itemKey);
      });

      reduceFromCartButton.addEventListener("click", () => {
        reduceBrewingItemFromCart(
          itemKey,
          retrieveSelectedBrewingVariant(brewingId),
        );
        updateCartUI(itemKey);
      });
    }
  }
}

document.querySelectorAll(".home-cart").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    if (getCartItemSize() <= 0) {
      let status = document.getElementById("site-status");
      if (!status) {
        status = document.createElement("div");
        status.id = "site-status";
        status.className = "visually-hidden";
        status.setAttribute("role", "status");
        status.setAttribute("aria-live", "polite");
        document.body.append(status);
      }
      status.textContent =
        "Your cart is empty. Add an item before placing an order.";
    } else {
      if(window.location.href.includes("index.html")){
        window.location.replace("./pages/checkout.html");
      } else {
        window.location.replace("checkout.html");
      }
    }
  });
});
