export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  price: string;
  notes: string[];
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  description: string;
  mood: string;
  size: string;
  image: string;
  gallery: string[];
  shopeeUrl: string;
  tiktokUrl: string;
};

export const products: Product[] = [
  {
    slug: "russian-bear",
    name: "VELIXIR RUSSIAN BEAR",
    subtitle: "Eau De Parfum for Men",
    price: "From 290.000₫",
    notes: ["Siberian Pine", "Black Leather", "Russian Birch Tar"],
    topNotes: ["Siberian Pine", "Coriander Seed", "Spiced Cardamom"],
    heartNotes: ["Birch Tar", "Black Tea Accord", "Turkish Rose"],
    baseNotes: ["Leather Accord", "Smoky Oud", "Atlas Cedarwood", "Amber"],
    description: "Inspired by the untamed Siberian wilderness, Russian Bear is a bold, powerful blend of dewy pine needle, smoky birch tar, and rich black leather. Made for the modern man who commands presence and leaves a trail of courage.",
    mood: "Commanding, bold, dark and magnetic",
    size: "15ml / 50ml / 100ml",
    image: "/images/product-russian-bear.png",
    gallery: ["/images/product-russian-bear.png"],
    shopeeUrl: "https://shopee.vn/",
    tiktokUrl: "https://www.tiktok.com/"
  },
  {
    slug: "french-roaster",
    name: "VELIXIR FRENCH ROASTER",
    subtitle: "Eau De Parfum for Men",
    price: "From 290.000₫",
    notes: ["Roasted Coffee", "Dark Chocolate", "Spiced Vanilla"],
    topNotes: ["French Espresso", "Bergamot", "Cocoa Powder"],
    heartNotes: ["Hazelnut", "Spiced Cardamom", "Dark Chocolate"],
    baseNotes: ["Bourbon Vanilla", "Atlas Cedarwood", "Amberwood", "Soft Musk"],
    description: "French Roaster captures the warm, sophisticated atmosphere of a Parisian cafe at dawn. A complex, intoxicating blend of freshly roasted coffee, dark cocoa, and creamy vanilla, balanced by clean cedarwood.",
    mood: "Sophisticated, warm, sweet and gourmand",
    size: "15ml / 50ml / 100ml",
    image: "/images/product-french-roaster.png",
    gallery: ["/images/product-french-roaster.png"],
    shopeeUrl: "https://shopee.vn/",
    tiktokUrl: "https://www.tiktok.com/"
  },
  {
    slug: "american-eagle",
    name: "VELIXIR AMERICAN EAGLE",
    subtitle: "Eau De Parfum for Men",
    price: "From 290.000₫",
    notes: ["Salty Marine", "Sage", "Fresh Amber"],
    topNotes: ["Grapefruit", "Sea Salt Accord", "Crushed Mint"],
    heartNotes: ["Sage Leaf", "Geranium Leaf", "Solar Amber"],
    baseNotes: ["Coastal Vetiver", "Driftwood", "Dry Sandalwood"],
    description: "Inspired by the spirit of freedom and soaring heights, American Eagle is a fresh, aquatic scent with a metallic shine. Combining sea salt breeze with herbal sage and deep coastal vetiver.",
    mood: "Fresh, energetic, free and clean",
    size: "15ml / 50ml / 100ml",
    image: "/images/product-american-eagle.png",
    gallery: ["/images/product-american-eagle.png"],
    shopeeUrl: "https://shopee.vn/",
    tiktokUrl: "https://www.tiktok.com/"
  },
  {
    slug: "dutch-lion",
    name: "VELIXIR DUTCH LION",
    subtitle: "Eau De Parfum for Men",
    price: "From 290.000₫",
    notes: ["Sweet Orange", "Noble Saffron", "Tuscan Leather"],
    topNotes: ["Sweet Orange Peel", "Saffron Spice", "Black Pepper"],
    heartNotes: ["Tuscan Leather", "Geranium Buds", "Royal Patchouli"],
    baseNotes: ["Sandalwood Oil", "Rich Oud", "Musk Accord"],
    description: "A majestic fragrance of royal orange and deep leather, Dutch Lion represents heritage, power, and solar courage. Vibrant orange top notes subside to reveal a commanding heart of saffron and black leather.",
    mood: "Majestic, royal, vibrant and courageous",
    size: "15ml / 50ml / 100ml",
    image: "/images/product-dutch-lion.png",
    gallery: ["/images/product-dutch-lion.png"],
    shopeeUrl: "https://shopee.vn/",
    tiktokUrl: "https://www.tiktok.com/"
  },
  {
    slug: "swan",
    name: "VELIXIR SWAN",
    subtitle: "Eau De Parfum for Women",
    price: "From 290.000₫",
    notes: ["White Rose", "Powdery Musk", "Sweet Peach"],
    topNotes: ["White Peach", "Dewy Greens", "Bergamot"],
    heartNotes: ["Royal White Rose", "Jasmine Petals", "Iris Powder"],
    baseNotes: ["Powdery Musk", "Warm Amber", "Sandalwood"],
    description: "Swan is an elegant, ethereal fragrance celebrating grace, purity, and quiet majesty. The delicate sweetness of white peach merges with a soft royal rose heart and a powdery, clean musk trail.",
    mood: "Graceful, pure, soft and ethereal",
    size: "15ml / 50ml / 100ml",
    image: "/images/product-swan.png",
    gallery: ["/images/product-swan.png"],
    shopeeUrl: "https://shopee.vn/",
    tiktokUrl: "https://www.tiktok.com/"
  },
  {
    slug: "demeter",
    name: "VELIXIR DEMETER",
    subtitle: "Eau De Parfum for Women",
    price: "From 790.000₫",
    notes: ["Wild Jasmine", "Sweet Peach", "Golden Amber"],
    topNotes: ["White Peach", "Crushed Ivy Leaves"],
    heartNotes: ["Atelier Jasmine Buds", "Ethereal Lily"],
    baseNotes: ["Sandalwood", "Sweet Amber", "Soft Musk"],
    description: "Demeter is an elegant, warm floral fragrance celebrating agriculture, abundance, and the golden summer heat.",
    mood: "Ethereal, warm, sweet and graceful",
    size: "15ml / 50ml / 100ml",
    image: "/images/product-demeter.png",
    gallery: ["/images/product-demeter.png"],
    shopeeUrl: "https://shopee.vn/",
    tiktokUrl: "https://www.tiktok.com/"
  },
  {
    slug: "athena",
    name: "VELIXIR ATHENA",
    subtitle: "Eau De Parfum for Unisex",
    price: "From 790.000₫",
    notes: ["Noble Olive Leaf", "Spiced Sage", "Sacred Cedar"],
    topNotes: ["Olive Leaf", "Bergamot"],
    heartNotes: ["Sage", "Geranium"],
    baseNotes: ["Cedarwood", "Amberwood"],
    description: "Athena embodies wisdom, strategy, and divine courage. A clean, herbal aromatic blend of olive leaf and warm cedar.",
    mood: "Wise, structured, clean and commanding",
    size: "15ml / 50ml / 100ml",
    image: "/images/product-athena.png",
    gallery: ["/images/product-athena.png"],
    shopeeUrl: "https://shopee.vn/",
    tiktokUrl: "https://www.tiktok.com/"
  },
  {
    slug: "icarus",
    name: "VELIXIR ICARUS",
    subtitle: "Eau De Parfum for Men",
    price: "From 790.000₫",
    notes: ["Sea Breeze Accord", "Bright Grapefruit", "Warm Sandalwood"],
    topNotes: ["Sea Salt", "Grapefruit"],
    heartNotes: ["Crushed Mint", "Sage"],
    baseNotes: ["Sandalwood", "Driftwood"],
    description: "Inspired by the flight towards the sun, Icarus is a soaring, fresh aquatic fragrance with notes of sea salt and warm woods.",
    mood: "Fresh, free, daring and bright",
    size: "15ml / 50ml / 100ml",
    image: "/images/product-icarus.png",
    gallery: ["/images/product-icarus.png"],
    shopeeUrl: "https://shopee.vn/",
    tiktokUrl: "https://www.tiktok.com/"
  },
  {
    slug: "orion",
    name: "VELIXIR ORION",
    subtitle: "Eau De Parfum for Men",
    price: "From 790.000₫",
    notes: ["Smoky Birch Tar", "Black Tea", "Atlas Cedarwood"],
    topNotes: ["Siberian Pine", "Cardamom"],
    heartNotes: ["Black Tea", "Birch Tar"],
    baseNotes: ["Leather Accord", "Cedarwood"],
    description: "Named after the mighty hunter of the stars, Orion is a dark, warm, and magnetic blend of black tea, cedar, and smoky leather.",
    mood: "Magnetic, dark, commanding and mysterious",
    size: "15ml / 50ml / 100ml",
    image: "/images/product-orion.png",
    gallery: ["/images/product-orion.png"],
    shopeeUrl: "https://shopee.vn/",
    tiktokUrl: "https://www.tiktok.com/"
  }
];
