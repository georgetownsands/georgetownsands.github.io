export interface DirectoryItem {
  id: string;
  name: string;
  category: string;
  description: string;
  address?: string;
  phoneNumber?: string;
  webSite?: string;
  tags?: string[];
  coordinates?: { lat: number; lng: number };
  featured?: boolean;
}

export interface CommunityAmenity {
  title: string;
  description: string;
  icon: string;
}

export const COMMUNITY_INFO = {
  name: "Georgetown Sands",
  tagline: "Oceanside Townhome Community in Duck, North Carolina",
  description:
    "Georgetown Sands is a charming oceanside townhome community situated on the northern Outer Banks in Duck, NC. Just steps from the Atlantic beach and a short stroll along the Duck Trail to Currituck Sound boardwalk, fine dining, and boutique shops.",
  coordinates: { lat: 36.1618, lng: -75.7495 },
  ownersPortalUrl: "https://engage.goenumerate.com/s/GSP/",
  address: "Duck Road, Duck, NC 27949",
  amenities: [
    {
      title: "Direct Beach Access",
      description: "Private community walkway taking you straight over the dunes to the uncrowded Duck ocean beach.",
      icon: "waves"
    },
    {
      title: "Community Swimming Pool",
      description: "Private on-site swimming pool with sundeck and loungers for residents and guests.",
      icon: "pool"
    },
    {
      title: "Tennis & Pickleball Courts",
      description: "Private on-premise courts available exclusively for Georgetown Sands owners and renters.",
      icon: "activity"
    },
    {
      title: "Walk to Duck Village",
      description: "Directly on the paved Duck Trail — easily bike or walk to town park, sound boardwalk, dining, and shops.",
      icon: "map-pin"
    }
  ]
};

export const RESTAURANTS: DirectoryItem[] = [
  {
    
    id: "the-blue-point",
    coordinates: { lat: 36.168, lng: -75.7552},
    name: "The Blue Point",
    category: "Fine Dining",
    tags: ["Waterfront", "Sunset Views", "Seafood", "Boardwalk"],
    address: "1240 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-8090",
    webSite: "https://thebluepoint.com",
    description: "An iconic soundfront dining institution since 1989. Locally sourced high-end seafood, southern-inspired fare, an acclaimed wine list, and panoramic Currituck Sound sunset views.",
    featured: true
  },
  {
    
    id: "aqua-restaurant",
    coordinates: { lat: 36.1647, lng: -75.7533 },
    name: "AQUA Restaurant & Spa",
    category: "Fine Dining",
    tags: ["Waterfront", "Sunset Views", "Seafood", "Spa"],
    address: "1174 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-9700",
    webSite: "https://aquarestaurantobx.com/",
    description: "Upscale waterfront dining with indoor and outdoor soundside deck seating. Serves fresh regional seafood, seasonal organic produce, craft cocktails, and sunset views.",
    featured: true
  },
  {
    
    id: "nc-coast-grill",
    coordinates: { lat: 36.1658, lng: -75.7538 },
    name: "NC Coast Grill & Bar",
    category: "Fine Dining",
    tags: ["Waterfront", "Seafood", "Creative", "Boardwalk"],
    address: "1184 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-8666",
    webSite: "https://nccoastobx.com/",
    description: "Chef-driven eclectic dining overlooking Currituck Sound. Bold flavors blending coastal Carolina ingredients with global culinary traditions.",
    featured: true
  },
  {
    
    id: "roadside-bar-grill",
    coordinates: { lat: 36.1664, lng: -75.7523 },
    name: "The Roadside Bar & Grill",
    category: "Casual Dining",
    tags: ["Raw Bar", "Outdoor Patio", "Local Favorite", "Live Music"],
    address: "1193 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-5729",
    webSite: "https://duckroadside.com/",
    description: "Charming converted beach cottage featuring creative seafood dishes, oysters, an outdoor bar patio garden, and a lively, relaxed Outer Banks vibe."
  },
  {
    
    id: "coastal-cantina",
    coordinates: { lat: 36.1677, lng: -75.7547 },
    name: "Coastal Cantina",
    category: "Casual Dining",
    tags: ["Waterfront", "Mexican", "Boardwalk", "Outdoor Deck"],
    address: "1236 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-480-0024",
    webSite: "https://coastalcantina.com/",
    description: "Open-air soundfront cantina at The Waterfront Shops serving ice-cold craft beers, fresh fish tacos, duck/crab quesadillas, and frozen margaritas over the water."
  },
  {
    
    id: "cravings-raw-bar",
    coordinates: { lat: 36.1668, lng: -75.7526 },
    name: "Cravings Steamer & Raw Bar",
    category: "Casual Dining",
    tags: ["Seafood Steamer", "Diners Drive-Ins & Dives", "Raw Bar"],
    address: "1209 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-480-0032",
    webSite: "https://cravingsobx.com/",
    description: "Featured on Guy Fieri's 'Diners, Drive-Ins & Dives'. Known for hearty seafood pots, steam bags, fresh oysters, po-boys, and casual indoor/outdoor patio dining."
  },
  {
    
    id: "duck-deli",
    coordinates: { lat: 36.1672, lng: -75.753 },
    name: "Duck Deli & 5 O'Clock Bar",
    category: "Casual Dining",
    tags: ["BBQ", "Outdoor Bar", "Sandwiches", "Family-Friendly", "Lunch"],
    address: "1223 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-3354",
    webSite: "https://www.duckdeli.com/",
    description: "One of Duck's oldest and most loved casual spots, serving authentic North Carolina hickory-smoked pork BBQ, ribs, smoked chicken, subs, and deli salads. Features the new outdoor '5 O'Clock Bar' patio for cold craft beer, cocktails, and music."
  },
  {
    
    id: "red-sky-cafe",
    coordinates: { lat: 36.1665, lng: -75.7524 },
    name: "Red Sky Cafe",
    category: "Casual Dining",
    tags: ["Seafood", "Catering", "Southern"],
    address: "1197 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-8646",
    webSite: "https://redskycafe.com/",
    description: "For over 20 years Chef Wes Stepp has delivered creative casual-upscale dining with local Outer Banks seafood, beef, duck, and their famous 'Chefs on Call' service."
  },
  {
    
    id: "theodosia-sanderling",
    coordinates: { lat: 36.1988, lng: -75.7672},
    name: "Theodosia (Sanderling Resort)",
    category: "Fine Dining",
    tags: ["Waterfront", "Celebrity Chef", "Elevated Southern", "New Addition"],
    address: "1461 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-449-6654",
    webSite: "https://www.thesanderling.com/dine/theodosia",
    description: "Celebrated new soundfront dining destination at Sanderling Resort, helmed in partnership with James Beard Award-winning celebrity chef Vivian Howard. Features an elevated Southern menu rooted in Eastern North Carolina coastal traditions.",
    featured: true
  },
  {
    
    id: "paper-canoe",
    coordinates: { lat: 36.1825, lng: -75.7602 },
    name: "The Paper Canoe",
    category: "Fine Dining",
    tags: ["Waterfront", "Sunset Views", "Wood-Fired", "Handmade Pasta"],
    address: "1564 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-715-2220",
    webSite: "https://papercanoeobx.com/",
    description: "Intimate, reservation-recommended soundfront restaurant boasting stunning Currituck Sound sunsets. Specialties include rustic wood-oven specialties, fresh daily local catch, handmade pastas, and curated boutique wines & craft brews.",
    featured: true
  },
  {
    
    id: "sunset-grille",
    coordinates: { lat: 36.1702, lng: -75.7558 },
    name: "Sunset Grille & Raw Bar",
    category: "Casual Dining",
    tags: ["Waterfront", "Tiki Bars", "Live Music", "Sushi & Raw Bar"],
    address: "1264 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-3901",
    webSite: "https://fishbonessunsetgrille.com/",
    description: "High-energy soundfront staple with 3 outdoor tiki bars, multi-level dining decks over the water, full raw bar, sushi bar, Caribbean-American dishes, and seasonal live entertainment."
  },
  {
    
    id: "eventide",
    coordinates: { lat: 36.1663, lng: -75.7537},
    name: "Eventide",
    category: "Casual Dining",
    tags: ["Waterfront", "Wine & Charcuterie", "Sunset Views", "Small Plates"],
    address: "1190 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-715-1216",
    webSite: "https://eventideduck.com/",
    description: "Relaxed soundside wine and tapas bar perched directly on the Duck boardwalk. Artisanal charcuterie boards, gourmet grilled cheese, craft tinned fish, boutique wines, and front-row sunset views."
  },
  {
    
    id: "vine-and-board",
    coordinates: { lat: 36.165, lng: -75.7514},
    name: "Vine & Board",
    category: "Casual Dining",
    tags: ["Wine Bar", "Charcuterie", "Scarborough Faire", "Outdoor Seating", "Newer Addition"],
    address: "1177 Duck Rd, Suite #23, Scarborough Faire, Duck, NC 27949",
    phoneNumber: "252-715-2300",
    webSite: "https://vineandboardducknc.com/",
    description: "Charming wine bar and gourmet boutique in Scarborough Faire. Specializes in customized artisan cheese & charcuterie boards, curated wines by the glass or bottle, craft beers, mimosas, and relaxing outdoor seating beneath the live oaks."
  },
  {
    
    id: "swells-a-brewing",
    coordinates: { lat: 36.1642, lng: -75.7523 },
    name: "Swells'a Brewing Duck Dive Bar",
    category: "Casual Dining",
    tags: ["Craft Brewery", "Beer Garden", "Outdoor Patio", "Dog Friendly", "Live Music", "Newer Addition"],
    address: "106 Scarborough Lane, Duck, NC 27949",
    webSite: "https://www.swellsabrewing.com/duck-dive-bar",
    description: "Laid-back, pet-friendly outdoor craft beer garden and dive bar under the shade of mature live oak trees. Features a rotating tap of locally brewed Swells'a craft beers, specialty cocktails, wine, mocktails, par-3 disc golf, and frequent live music."
  },
  {
    
    id: "bangkok-thai-sushi",
    coordinates: { lat: 36.1648, lng: -75.7518},
    name: "Bangkok Thai & Sushi",
    category: "Casual Dining",
    tags: ["Thai", "Sushi", "Scarborough Faire"],
    address: "1177 Duck Rd, Scarborough Faire, Duck, NC 27949",
    phoneNumber: "252-441-1188",
    webSite: "https://www.bangkokthaisushiobx.com/",
    description: "Authentic Thai curries, pad Thai, noodle soups, and fresh handcrafted sushi rolls nestled in the shaded live oaks of Scarborough Faire Shopping Village."
  },
  {
    
    id: "lifesaving-station",
    coordinates: { lat: 36.1985, lng: -75.7675 },
    name: "Lifesaving Station Restaurant",
    category: "Casual Dining",
    tags: ["Historic", "Breakfast & Dinner", "Southern Coastal"],
    address: "1461 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-449-6654",
    webSite: "https://www.thesanderling.com/dine/lifesaving-station",
    description: "Housed inside the historic 1874 Caffey's Inlet Lifesaving Station at Sanderling. Famous for hearty coastal breakfasts, fresh local seafood, and warm Southern hospitality."
  },
  {
    
    id: "fishbones-raw-bar",
    coordinates: { lat: 36.1646, lng: -75.7527},
    name: "Fishbones Raw Bar & Restaurant",
    category: "Casual Dining",
    tags: ["Seafood", "Raw Bar", "Caribbean"],
    address: "1171 Duck Rd, Scarborough Lane, Duck, NC 27949",
    phoneNumber: "252-261-6991",
    webSite: "https://fishbonesrawbar.com/",
    description: "Lively, upbeat Caribbean-style cuisine paired with fresh Outer Banks seafood, po-boys, clam chowder, and a full raw bar in Scarborough Lane Shoppes."
  },
  {
    
    id: "village-table-tavern",
    coordinates: { lat: 36.1733, lng: -75.7567},
    name: "Village Table & Tavern",
    category: "Casual Dining",
    tags: ["Waterfront", "Sound Views", "Craft Beer", "Outdoor Seating"],
    address: "1314 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-715-1414",
    webSite: "https://villagetableandtavern.com/",
    description: "Beautiful soundfront setting with expansive water views, lawn games, scratch-made tavern fare, fresh seafood, and an extensive craft beer list."
  },
  {
    
    id: "duck-donuts",
    coordinates: { lat: 36.1661, lng: -75.7533},
    name: "Duck Donuts (The Original)",
    category: "Coffee & Sweets",
    tags: ["Donuts", "Breakfast", "Famous", "Original Location"],
    address: "1190 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-1406",
    webSite: "https://www.duckdonuts.com/duck-nc/",
    description: "The very first location that started a national sensation. Warm, delicious, made-to-order vanilla cake donuts customized with warm glazes, toppings, and drizzles."
  },
  {
    
    id: "big-bucks-ice-cream",
    coordinates: { lat: 36.1652, lng: -75.7521 },
    name: "Big Buck's Homemade Ice Cream",
    category: "Coffee & Sweets",
    tags: ["Ice Cream", "Homemade", "Dessert", "Fudge"],
    address: "1180 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-715-1079",
    webSite: "https://www.bigbucksobx.com/",
    description: "Artisan small-batch homemade ice cream made from scratch with over 50 rotating flavors, Belgian waffle cones, handmade fudge, and chocolates in Duck."
  },
  {
    
    id: "ducks-cottage",
    coordinates: { lat: 36.1651, lng: -75.7517},
    name: "Duck's Cottage Coffee & Books",
    category: "Coffee & Sweets",
    tags: ["Coffee", "Bookstore", "Historic Cottage", "Local Landmark"],
    address: "1240 Duck Rd, Scarborough Faire, Duck, NC 27949",
    phoneNumber: "252-261-5510",
    webSite: "https://duckscottage.com/",
    description: "A beloved Outer Banks institution housed in a 200-year-old historic powder shack. Famous for their signature Coconut Crunch coffee, specialty drinks, pastries, and curated bookstore."
  },
  {
    
    id: "treehouse-coffee",
    coordinates: { lat: 36.1647, lng: -75.7515},
    name: "Treehouse Coffee Co.",
    category: "Coffee & Sweets",
    tags: ["Artisan Coffee", "Espresso", "Biscuits", "Breakfast"],
    address: "1177 Duck Rd, Scarborough Faire, Duck, NC 27949",
    phoneNumber: "252-722-3606",
    webSite: "https://treehousecoffeenc.com/",
    description: "Artisanal specialty coffee shop located in the leafy shade of Scarborough Faire. Hand-crafted espresso beverages, fresh house-baked sourdough biscuits, and pastries."
  },
  {
    
    id: "sweet-ts",
    coordinates: { lat: 36.1669, lng: -75.7527 },
    name: "Sweet T's Coffee, Beer & Wine",
    category: "Coffee & Sweets",
    tags: ["Coffee", "Craft Beer", "Wine Tasting", "Outdoor Patio"],
    address: "1211 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-480-2326",
    webSite: "https://sweettsobx.com/",
    description: "A welcoming gathering place with an inviting porch. Morning espresso and local cold brew, shifting to dozens of rotating craft beers on tap and curated boutique wines by the glass."
  },
  {
    
    id: "tullios-bakery",
    coordinates: { lat: 36.1656, lng: -75.7519},
    name: "Tullio's Bakery",
    category: "Coffee & Sweets",
    tags: ["Bakery", "Pastries", "Bagels", "Breakfast"],
    address: "1187 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-7112",
    webSite: "https://www.tulliosbakery.com/",
    description: "Traditional coastal bakery offering freshly baked NY-style bagels, croissants, Danish, apple fritters, custom cakes, and Italian pastries baked daily."
  },
  {
    
    id: "duck-pizza-company",
    coordinates: { lat: 36.1644, lng: -75.7523},
    name: "Duck Pizza Company",
    category: "Pizza & Casual",
    tags: ["Pizza", "Takeout", "Family Favorite"],
    address: "1171 Duck Rd, Scarborough Lane Shoppes, Duck, NC 27949",
    phoneNumber: "252-255-0099",
    webSite: "https://www.duckpizza.com/",
    description: "Hand-tossed craft pizzas, calzones, strombolis, wings, and subs made with fresh dough and quality ingredients. Convenient pickup and delivery."
  },
  {
    
    id: "pizzazz-pizza",
    coordinates: { lat: 36.1654, lng: -75.7521},
    name: "Pizzazz Pizza",
    category: "Pizza & Casual",
    tags: ["Pizza", "Delivery", "Late Night"],
    address: "1187 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-1114",
    webSite: "https://pizzazzpizza.net/",
    description: "Outer Banks favorite serving classic and gourmet specialty pizzas, baked pastas, chicken tenders, and salads with prompt delivery throughout Duck."
  },
  {
    
    id: "cookshak-chicken",
    coordinates: { lat: 36.1649, lng: -75.7519},
    name: "The Cookshak Fried Chicken",
    category: "Casual Dining",
    tags: ["Fried Chicken", "Southern Comfort", "Takeout & Delivery", "Loblolly Pines"],
    address: "1187 Duck Rd, Loblolly Pines, Duck, NC 27949",
    phoneNumber: "252-261-1156",
    webSite: "https://thecookshakfriedchicken.com/",
    description: "Crispy, juicy Southern-style bone-in fried chicken, hand-breaded tenders, crispy chicken sandwiches, white cheddar mac & cheese, coleslaw, and fresh-cut fries with fast takeout and delivery."
  },
  {
    
    id: "island-smoothie-cafe",
    coordinates: { lat: 36.1643, lng: -75.7526},
    name: "Island Smoothie Cafe",
    category: "Coffee & Sweets",
    tags: ["Acai Bowls", "Smoothies", "Healthy Bites", "Breakfast", "Scarborough Lane"],
    address: "1171 Duck Rd, Suite C4, Scarborough Lane, Duck, NC 27949",
    phoneNumber: "252-261-0097",
    webSite: "https://islandsmoothie.com/",
    description: "Vibrant island-style cafe in Scarborough Lane serving organic açai bowls, pitaya bowls, fresh fruit superfood smoothies, avocado toast, chicken salad wraps, and cold-pressed juices."
  },
  {
    
    id: "hawaiian-island-coffee",
    coordinates: { lat: 36.1659, lng: -75.7535},
    name: "Hawaiian Island Coffee & Ice Cream",
    category: "Coffee & Sweets",
    tags: ["Shaved Ice", "Gelato", "Coffee", "Waterfront Deck", "Osprey Landing"],
    address: "1190 Duck Rd, Osprey Landing, Duck, NC 27949",
    phoneNumber: "252-255-0818",
    webSite: "https://hawaiianislandgelato.com/",
    description: "Osprey Landing soundfront shop featuring traditional Hawaiian shave ice, rich Italian gelato, smoothies, cold brew, and espresso drinks with seating on the Currituck Sound boardwalk deck."
  },
  {
    
    id: "chill-spot",
    coordinates: { lat: 36.1655, lng: -75.7523},
    name: "The Chill Spot",
    category: "Coffee & Sweets",
    tags: ["Ice Cream", "Dessert", "Milkshakes", "Loblolly Pines"],
    address: "1187 Duck Rd, Loblolly Pines, Duck, NC 27949",
    phoneNumber: "252-715-1033",
    webSite: "https://thechillspotobx.com/",
    description: "Family favorite ice cream parlor serving dozens of premium hand-dipped ice cream flavors, custom milkshakes, waffle cones, and sundae toppings."
  },
  {
    
    id: "the-fudgery",
    coordinates: { lat: 36.1646, lng: -75.7523},
    name: "The Fudgery",
    category: "Coffee & Sweets",
    tags: ["Fudge", "Candy", "Interactive", "Scarborough Lane"],
    address: "1171 Duck Rd, Scarborough Lane, Duck, NC 27949",
    phoneNumber: "252-261-7147",
    webSite: "https://fudgeryfudge.com/",
    description: "Entertaining confectionary experience featuring singing fudge makers hand-turning copper-kettle fudge on massive marble slabs, plus pralines, candy apples, and ice cream."
  }
];

export const SHOPPING: DirectoryItem[] = [
  {
    
    id: "waterfront-shops",
    coordinates: { lat: 36.1678, lng: -75.7548 },
    name: "The Waterfront Shops",
    category: "Shopping Village",
    tags: ["Boardwalk", "Boutiques", "Soundfront", "Dining"],
    address: "1240 Duck Rd, Duck, NC 27949",
    webSite: "https://waterfrontshopsduck.com/",
    description: "A beautiful soundfront shopping village connected by a wooden boardwalk. Features over a dozen distinctive specialty shops, apparel boutiques, art galleries, candy shops, and waterfront restaurants.",
    featured: true
  },
  {
    
    id: "scarborough-faire",
    coordinates: { lat: 36.1649, lng: -75.7516 },
    name: "Scarborough Faire Shopping Village",
    category: "Shopping Village",
    tags: ["Tree Canopy", "Artisan", "Coffee & Books", "Boutiques"],
    address: "1177 Duck Rd, Duck, NC 27949",
    webSite: "https://scarboroughfairevillage.com/",
    description: "Tucked beneath towering live oak trees, this serene village complex offers a picturesque courtyard, Duck's Cottage Books, Treehouse Coffee, fine art, handcrafted gifts, and women's clothing.",
    featured: true
  },
  {
    
    id: "scarborough-lane",
    coordinates: { lat: 36.1645, lng: -75.7525 },
    name: "Scarborough Lane Shoppes",
    category: "Shopping Village",
    tags: ["Shopping Center", "Covered Porches", "Boutiques", "Food"],
    address: "1171 Duck Rd, Duck, NC 27949",
    webSite: "https://scarboroughlaneshoppes.com/",
    description: "Covered boardwalks and comfortable porch rockers connect an array of shops featuring resort wear, beach souvenirs, Duck Donuts, Fishbones Raw Bar, jewelry, and children's toys.",
    featured: true
  },
  {
    
    id: "dockside-n-duck",
    coordinates: { lat: 36.167, lng: -75.753},
    name: "Dockside 'N Duck Seafood Market",
    category: "Markets & Specialty",
    tags: ["Fresh Seafood", "Steamed Shrimp", "Local Catch"],
    address: "1216 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-8687",
    webSite: "http://docksidenduckseafood.com/",
    description: "Serving Duck since 1987. Outstanding fresh local seafood market with wild NC shrimp, yellowfin tuna, flounder, live/cooked crabs, house-made crab cakes, and spices."
  },
  {
    
    id: "green-acres-farm-market",
    coordinates: { lat: 36.1672, lng: -75.7533 },
    name: "Green Acres Farm Market",
    category: "Markets & Specialty",
    tags: ["Local Produce", "NC Peaches", "Baked Goods", "Jams"],
    address: "1216 Duck Rd, Duck, NC 27949",
    webSite: "https://greenacresobx.com/",
    description: "Open-air farm stand offering fresh North Carolina peaches, vine-ripened tomatoes, sweet corn, melons, homemade pies, jams, jellies, and local honey."
  },
  {
    
    id: "wee-winks-market",
    coordinates: { lat: 36.1671, lng: -75.7528 },
    name: "Wee Winks Deli & Market",
    category: "Markets & Specialty",
    tags: ["Deli", "Convenience", "Beach Supplies"],
    address: "1213 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-2937",
    webSite: "http://weewinksmarket.com/",
    description: "Historic neighborhood market and deli serving breakfast sandwiches, subs, cold beverages, grocery staples, beach ice, and beer in the center of town."
  },
  {
    
    id: "nags-head-hammocks",
    coordinates: { lat: 36.167, lng: -75.7531 },
    name: "Nags Head Hammocks",
    category: "Home & Coastal Goods",
    tags: ["Handcrafted", "Hammocks", "Outdoor Furniture"],
    address: "1212 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-1062",
    webSite: "https://nagsheadhammocks.com/",
    description: "World-famous handcrafted rope hammocks, swing chairs, and weather-resistant Durawood outdoor porch furniture made right here in North Carolina."
  },
  {
    
    id: "kellogg-supply-cottage-shop",
    coordinates: { lat: 36.1667, lng: -75.7523},
    name: "Kellogg Supply Co. & The Cottage Shop",
    category: "Home & Coastal Goods",
    tags: ["Hardware", "Coastal Decor", "Beach Chairs", "Gifts"],
    address: "1201 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-8121",
    webSite: "https://kelloggsupplyco.com/",
    description: "Comprehensive home improvement and lifestyle shop. Everything from beach chairs, umbrellas, and grills to coastal home decor, kitchenware, and gifts."
  },
  {
    
    id: "sound-feet-shoes",
    coordinates: { lat: 36.1663, lng: -75.7523 },
    name: "Sound Feet Shoes",
    category: "Apparel & Shoes",
    tags: ["Sandals", "Water Shoes", "Name Brands"],
    address: "1194 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-0490",
    webSite: "https://soundfeet.com/",
    description: "Huge selection of beach footwear, sandals (Olukai, Birkenstock, Rainbow, Teva), running shoes, boat shoes, and accessories for the entire family."
  },
  {
    
    id: "abc-store-duck",
    coordinates: { lat: 36.1671, lng: -75.7534},
    name: "Duck ABC Store",
    category: "Markets & Specialty",
    tags: ["Spirits", "Liquor"],
    address: "1216 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-6981",
    webSite: "https://abc.nc.gov/",
    description: "State-operated ABC spirits store stocked with an extensive selection of distilled spirits, mixers, and specialty liquors."
  }
];

export const ACTIVITIES: DirectoryItem[] = [
  {
    
    id: "duck-town-park",
    coordinates: { lat: 36.1652, lng: -75.7538 },
    name: "Duck Town Park & Sound Boardwalk",
    category: "Parks & Trails",
    tags: ["Boardwalk", "Sunset", "Free", "Kayak Launch", "Playground"],
    address: "1200 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-255-1234",
    webSite: "https://www.townofduck.com/parks-and-recreation/town-park-boardwalk/",
    description: "Duck's crown jewel. 11 pristine acres featuring maritime forest walking trails, an amphitheater, playground, picnic shelters, public kayak/SUP launch, and a nearly 1-mile wooden boardwalk stretching over Currituck Sound with world-class sunsets.",
    featured: true
  },
  {
    
    id: "the-duck-trail",
    coordinates: { lat: 36.164, lng: -75.751 },
    name: "The Duck Trail",
    category: "Parks & Trails",
    tags: ["Biking", "Walking", "Jogging", "Paved Path"],
    address: "Runs along Duck Road (NC 12) from Southern Shores to Sanderling",
    webSite: "https://www.townofduck.com/parks-and-recreation/duck-trail/",
    description: "A paved 6-mile multi-use path running the entire length of the town right in front of Georgetown Sands. Perfect for morning jogs, family bike rides, or walking into the village without ever needing your car.",
    featured: true
  },
  {
    
    id: "kitty-hawk-kites",
    coordinates: { lat: 36.1675, lng: -75.7545 },
    name: "Kitty Hawk Kites - Duck",
    category: "Watersports & Adventures",
    tags: ["Kayak Tours", "Paddleboarding", "Parasailing", "Rentals"],
    address: "1226 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-4450",
    webSite: "https://www.kittyhawk.com/location/duck-kitty-hawk-kites/",
    description: "Located right on the sound boardwalk. Book parasailing flights, jet ski rentals, sound kayak tours, stand-up paddleboards, and kite store."
  },
  {
    
    id: "norbanks-watersports",
    coordinates: { lat: 36.1735, lng: -75.757 },
    name: "Nor'Banks Sailing & Watersports",
    category: "Watersports & Adventures",
    tags: ["Boat Rentals", "WaveRunners", "Parasailing", "Tubing"],
    address: "1314 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-2900",
    webSite: "https://norbanks.com/",
    description: "Duck's premier watersports center on Currituck Sound. Rent Yamaha WaveRunners, pontoon boats, sailboats, kayaks, and book parasailing and wakeboarding adventures."
  },
  {
    
    id: "duck-cycle",
    coordinates: { lat: 36.182, lng: -75.76 },
    name: "Duck Cycle",
    category: "Bike & Beach Rentals",
    tags: ["Bike Rental", "Beach Gear", "Free Delivery"],
    address: "1566 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-0356",
    webSite: "http://duckcycle.com/",
    description: "Cruiser bikes, tandem bikes, kiddie carts, beach chairs, umbrellas, and watersports gear delivered directly to your Georgetown Sands rental unit with free pickup and dropoff."
  },
  {
    
    id: "duck-village-outfitters",
    coordinates: { lat: 36.1667, lng: -75.7527},
    name: "Duck Village Outfitters (DVO)",
    category: "Bike & Beach Rentals",
    tags: ["Surfboards", "Paddleboards", "Bikes", "Beach Gear"],
    address: "1207 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-261-7222",
    webSite: "http://www.mydvo.com/",
    description: "Full-service outfitter located in the heart of Duck. Top quality rental bikes, surfboards, stand-up paddleboards, wetsuits, bodyboards, beach carts, and gear delivery."
  },
  {
    
    id: "corolla-wild-horses",
    coordinates: { lat: 36.378, lng: -75.83 },
    name: "Corolla Wild Horse Tours",
    category: "Tours & Excursions",
    tags: ["Wild Mustangs", "4x4 Excursion", "Family Friendly"],
    address: "1210 Ocean Trail, Corolla, NC 27927",
    phoneNumber: "252-207-0511",
    webSite: "https://seecorollawildhorses.com/",
    description: "Take an open-air 4WD safari north of Corolla onto the Carova beaches to observe the legendary wild Spanish colonial mustangs roaming freely along the dunes and surf."
  },
  {
    
    id: "wild-horse-adventure-tours",
    coordinates: { lat: 36.375, lng: -75.828 },
    name: "Wild Horse Adventure Tours",
    category: "Tours & Excursions",
    tags: ["Wild Mustangs", "Custom 4x4", "Award Winning"],
    address: "610 Currituck Clubhouse Dr, Corolla, NC 27927",
    phoneNumber: "252-489-2020",
    webSite: "https://wildhorsetour.com/",
    description: "Consistently rated the #1 tour activity in the Outer Banks. Experience customized open-top safari trucks led by expert naturalists into the wild horse sanctuary."
  },
  {
    
    id: "village-yoga",
    coordinates: { lat: 36.1676, lng: -75.7545},
    name: "Village Yoga",
    category: "Fitness & Wellness",
    tags: ["Yoga", "Soundside Yoga", "Drop-ins Welcome"],
    address: "1240 Duck Rd, Duck, NC 27949",
    phoneNumber: "252-564-2219",
    webSite: "https://duckvillageyoga.com/",
    description: "Welcoming Outer Banks studio for all fitness levels. Offers heated and gentle flow, yin yoga, soundside outdoor deck classes, private group sessions, and mat rentals."
  },
  {
    
    id: "yoga-on-the-green",
    coordinates: { lat: 36.165, lng: -75.7535},
    name: "Yoga on the Green (Duck Town Park)",
    category: "Fitness & Wellness",
    tags: ["Free Community Class", "Outdoor Park", "Summer"],
    address: "1200 Duck Rd, Duck Town Park, Duck, NC 27949",
    phoneNumber: "252-255-1234",
    webSite: "https://www.townofduck.com/parks-and-recreation/town-park-boardwalk/",
    description: "Seasonal outdoor community yoga hosted on the lawn at the Duck Town Park Amphitheater. Bring your towel or mat and enjoy gentle morning movement surrounded by trees and fresh sound breezes."
  }
];

export const RENTAL_AGENCIES = [
  {
    name: "Brindley Beach Vacations",
    tagline: "Service First... Fun Always",
    description: "One of the Outer Banks' premiere property management companies with numerous oceanfront and oceanside townhome rentals in Georgetown Sands.",
    webSite: "https://www.brindleybeach.com/georgetown-sands",
    phoneNumber: "877-642-3224"
  },
  {
    name: "Twiddy & Company",
    tagline: "Connecting Families to the Outer Banks since 1978",
    description: "Trusted local family-owned agency representing top Duck vacation rentals and townhomes with exceptional guest services.",
    webSite: "https://www.twiddy.com/outer-banks/duck/",
    phoneNumber: "800-489-4339"
  },
  {
    name: "Resort Realty",
    tagline: "Find Your Outer Banks Vacation Rental by the Sea",
    description: "Decades of experience hosting families in Georgetown Sands with easy online booking and local guest assistance.",
    webSite: "https://www.resortrealty.com/outer-banks/duck/georgetown-sands-condos/?neighborhood_area_id=11447&home_type_id=4616",
    phoneNumber: "800-458-3830"
  },
  {
    name: "Sun Realty",
    tagline: "The Best in Outer Banks Vacation Rentals",
    description: "Extensive portfolio of Outer Banks vacation homes and townhomes with convenient check-in and beach equipment credits on select homes.",
    webSite: "https://www.sunrealtync.com/georgetown-sands",
    phoneNumber: "800-334-4745"
  },
  {
    name: "Seaside Vacations",
    tagline: "Hassle-Free Outer Banks Vacations",
    description: "Providing quality vacation rental homes and condos across Duck, NC with complimentary linen packages and personalized guest care.",
    webSite: "https://www.outerbanksvacations.com/outer-banks-rentals/duck",
    phoneNumber: "866-884-0555"
  }
];

