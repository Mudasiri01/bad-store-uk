/**
 * Kensington & Devon - Fine British Beds & Mattresses
 * Product Catalog Data
 * Demo Store Data for United Kingdom Market
 */

const PRODUCTS = [
  {
    id: 1,
    name: "Luxury Chesterfield Divan Bed",
    slug: "luxury-chesterfield-divan-bed",
    category: "Divan Beds",
    categorySlug: "divan-beds",
    basePrice: 1199,
    oldPrice: 1450,
    rating: 4.9,
    reviewCount: 148,
    badge: "BESTSELLER",
    badgeType: "gold",
    description: "The quintessence of British bedroom heritage. Hand-crafted in Yorkshire using traditional deep button capitonné tufting, solid Scandinavian pine timber framing, and upholstered in our signature tactile brushed velvet. Features dual reinforced ottoman or slide-drawer storage options.",
    shortDesc: "Hand-tufted deep buttoned Chesterfield divan with reinforced base and optional continental drawers.",
    inStock: true,
    leadTime: "Crafted to order • 7-14 day UK mainland delivery",
    sku: "KD-DIV-001",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80"
    ],
    sizes: [
      { name: "Single (3'0\" x 6'3\")", key: "single", priceMultiplier: 0.75, price: 899 },
      { name: "Small Double (4'0\" x 6'3\")", key: "small-double", priceMultiplier: 0.88, price: 1049 },
      { name: "Double (4'6\" x 6'3\")", key: "double", priceMultiplier: 0.94, price: 1129 },
      { name: "King (5'0\" x 6'6\")", key: "king", priceMultiplier: 1.0, price: 1199, isDefault: true },
      { name: "Super King (6'0\" x 6'6\")", key: "super-king", priceMultiplier: 1.17, price: 1399 }
    ],
    colours: [
      { name: "Royal Oatmeal", hex: "#EAE3D9", isDefault: true },
      { name: "Charcoal Slate", hex: "#2E3033" },
      { name: "Champagne Silk", hex: "#C7B299" },
      { name: "Forest Velvet", hex: "#263B30" },
      { name: "Midnight Navy", hex: "#1C2735" }
    ],
    materials: ["Velvet", "Scandinavian Pine", "Brushed Brass Glides"],
    storageOptions: [
      { name: "No Drawers", priceAdd: 0 },
      { name: "2 Drawers (Foot End)", priceAdd: 80 },
      { name: "4 Drawers (Continental)", priceAdd: 140, isDefault: true },
      { name: "End-Lift Ottoman", priceAdd: 220 }
    ],
    specs: {
      "Headboard Height": "138 cm floor-standing",
      "Base Height": "38 cm (excluding castors)",
      "Frame Material": "Sustainably sourced FSC® certified Scandinavian Pine",
      "Fabric Composition": "100% Cotton-blend luxury brushed velvet",
      "Country of Origin": "Handcrafted in West Yorkshire, UK",
      "Warranty": "10-Year Craftsmanship Guarantee"
    },
    features: [
      "Traditional hand-pulled deep button tufting",
      "Reinforced platform top base for superior mattress support",
      "Heavy-duty chrome or brushed brass glide feet",
      "Available in 20+ bespoke British fabrics",
      "White-glove 2-person room-of-choice delivery available"
    ]
  },
  {
    id: 2,
    name: "Modern Ottoman Storage Bed",
    slug: "modern-ottoman-storage-bed",
    category: "Ottoman Beds",
    categorySlug: "ottoman-beds",
    basePrice: 899,
    oldPrice: 1050,
    rating: 4.8,
    reviewCount: 94,
    badge: "SAVE £150",
    badgeType: "sale",
    description: "Effortless decluttering meets refined architectural proportions. Powered by dual German-engineered hydraulic gas-lift pistons that effortlessly raise your mattress to reveal up to 4x more storage capacity than standard drawer divans. Upholstered in tactile heavyweight textured boucle.",
    shortDesc: "German hydraulic gas-lift storage bed with heavy-duty internal floor and fluted architectural headboard.",
    inStock: true,
    leadTime: "In stock • Dispatched within 48 hours for UK delivery",
    sku: "KD-OTT-002",
    images: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80"
    ],
    sizes: [
      { name: "Single (3'0\" x 6'3\")", key: "single", price: 699 },
      { name: "Small Double (4'0\" x 6'3\")", key: "small-double", price: 799 },
      { name: "Double (4'6\" x 6'3\")", key: "double", price: 849 },
      { name: "King (5'0\" x 6'6\")", key: "king", price: 899, isDefault: true },
      { name: "Super King (6'0\" x 6'6\")", key: "super-king", price: 1049 }
    ],
    colours: [
      { name: "Chalk Bouclé", hex: "#F3EFEA", isDefault: true },
      { name: "Warm Taupe", hex: "#A99B8C" },
      { name: "Anthracite", hex: "#323336" }
    ],
    materials: ["Bouclé", "Aluminium Frame", "German Gas Struts"],
    specs: {
      "Storage Depth": "29 cm usable internal cavity",
      "Headboard Height": "122 cm",
      "Lifting Mechanism": "Dual 800N German gas struts",
      "Base Construction": "Solid boarding base - dust-free sealed storage",
      "Country of Origin": "Manufactured in Wiltshire, UK"
    },
    features: [
      "Smooth hydraulic lift with safety lockdown catch",
      "Full internal fabric-lined base to protect linens",
      "Sprung beech slats for responsive mattress cushioning",
      "Clean low-profile contemporary silhouette"
    ]
  },
  {
    id: 3,
    name: "Premium Velvet Upholstered Bed",
    slug: "premium-velvet-upholstered-bed",
    category: "Upholstered Beds",
    categorySlug: "upholstered-beds",
    basePrice: 1249,
    oldPrice: null,
    rating: 5.0,
    reviewCount: 62,
    badge: "NEW ARRIVAL",
    badgeType: "new",
    description: "An understated statement of quiet luxury. Featuring gently curved winged profiles, vertical channel fluting, and slender tapered solid oak legs with brushed champagne brass ferrules. Draped in stain-resistant Italian matte velvet that catches the light with refined luminescence.",
    shortDesc: "Curved winged luxury bedstead with channel fluting, Italian matte velvet and brass-tipped oak legs.",
    inStock: true,
    leadTime: "Crafted to order • 2-3 weeks",
    sku: "KD-UPH-003",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80"
    ],
    sizes: [
      { name: "Double (4'6\" x 6'3\")", key: "double", price: 1149 },
      { name: "King (5'0\" x 6'6\")", key: "king", price: 1249, isDefault: true },
      { name: "Super King (6'0\" x 6'6\")", key: "super-king", price: 1449 }
    ],
    colours: [
      { name: "Champagne Gold", hex: "#B99A68", isDefault: true },
      { name: "Soft Ivory", hex: "#F7F4EF" },
      { name: "Olive Velvet", hex: "#3D4433" },
      { name: "Midnight Navy", hex: "#1D2A3A" }
    ],
    materials: ["Italian Velvet", "Solid English Oak", "Brass Ferrules"],
    specs: {
      "Headboard Height": "135 cm",
      "Clearance Under Bed": "16 cm (easy robot vacuum access)",
      "Slat Type": "Solid Swedish pine sprung slats",
      "Guarantee": "10 Years Structural Frame Guarantee"
    },
    features: [
      "Gentle wrap-around wingback cocooning contour",
      "Stain-resistant AquaClean® velvet treatment",
      "Solid turned oak legs with champagne gold accents",
      "Mortise and tenon joinery for lifetime silent stability"
    ]
  },
  {
    id: 4,
    name: "Orthopaedic Pocket Sprung Mattress",
    slug: "orthopaedic-pocket-sprung-mattress",
    category: "Mattresses",
    categorySlug: "mattresses",
    basePrice: 649,
    oldPrice: 799,
    rating: 4.9,
    reviewCount: 215,
    badge: "BESTSELLER",
    badgeType: "gold",
    description: "Endorsed by spinal wellness experts. Built with 2,000 individually responsive calico-wrapped pocket springs that pinpoint and support posture zones, relieving strain on the lower lumbar, shoulders, and hips. Layered with natural Yorkshire wool and breathable organic damask.",
    shortDesc: "2,000 zoned pocket springs with natural wool comfort layers, firm posture support and hand-tufted finish.",
    inStock: true,
    leadTime: "Next day delivery available across mainland UK",
    sku: "KD-MAT-004",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ],
    sizes: [
      { name: "Single (3'0\" x 6'3\")", key: "single", price: 449 },
      { name: "Small Double (4'0\" x 6'3\")", key: "small-double", price: 569 },
      { name: "Double (4'6\" x 6'3\")", key: "double", price: 599 },
      { name: "King (5'0\" x 6'6\")", key: "king", price: 649, isDefault: true },
      { name: "Super King (6'0\" x 6'6\")", key: "super-king", price: 799 }
    ],
    firmnessOptions: [
      { name: "Medium-Firm (Comfort Support)", key: "medium-firm", isDefault: true },
      { name: "Firm (Orthopaedic Alignment)", key: "firm" },
      { name: "Extra Firm (Spinal Care)", key: "extra-firm" }
    ],
    materials: ["2,000 Pocket Springs", "British Wool", "Belgian Damask"],
    specs: {
      "Mattress Depth": "28 cm",
      "Spring Count": "2,000 individually nested pocket springs (5'0\" King)",
      "Ticking": "100% Belgian Viscose Damask with wool tufts",
      "Border": "Hand side-stitched with brass air vents & flag-stitched handles",
      "Trial": "100-Night Risk-Free Sleep Trial"
    },
    features: [
      "Zero roll-together technology for uninterrupted sleep",
      "Naturally hypoallergenic, anti-dustmite British wool",
      "Traditional hand-tufting keeps internal layers permanently locked",
      "Solid double-stitched reinforced border walls preventing edge sag"
    ]
  },
  {
    id: 5,
    name: "Luxury Memory Foam Mattress",
    slug: "luxury-memory-foam-mattress",
    category: "Mattresses",
    categorySlug: "mattresses",
    basePrice: 749,
    oldPrice: null,
    rating: 4.7,
    reviewCount: 88,
    badge: "CLIMATE REGULATION",
    badgeType: "info",
    description: "Advanced thermal equilibrium for deep restorative sleep. Features a top layer of graphite-infused open-cell memory foam that actively conducts body heat away, atop high-density orthopaedic transition foam. Finished with a washable organic cooling bamboo cover.",
    shortDesc: "Triple-layer thermo-regulating graphite memory foam with zoned pressure relief and removable bamboo cover.",
    inStock: true,
    leadTime: "In stock • Dispatched in 24 hours",
    sku: "KD-MAT-005",
    images: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80"
    ],
    sizes: [
      { name: "Single (3'0\" x 6'3\")", key: "single", price: 549 },
      { name: "Small Double (4'0\" x 6'3\")", key: "small-double", price: 669 },
      { name: "Double (4'6\" x 6'3\")", key: "double", price: 699 },
      { name: "King (5'0\" x 6'6\")", key: "king", price: 749, isDefault: true },
      { name: "Super King (6'0\" x 6'6\")", key: "super-king", price: 899 }
    ],
    firmnessOptions: [
      { name: "Medium Soft (Plush Cloud)", key: "medium-soft" },
      { name: "Medium (Balanced Sink & Support)", key: "medium", isDefault: true },
      { name: "Medium Firm (Adaptive Contour)", key: "medium-firm" }
    ],
    materials: ["Graphite Memory Foam", "High Density Base Foam", "Cooling Bamboo Fibre"],
    specs: {
      "Mattress Depth": "25 cm",
      "Layers": "3 Advanced Ergonomic Foam Layers",
      "Cover": "Removable 40°C machine washable cooling bamboo yarn",
      "Trial": "100-Night Sleep Trial included"
    },
    features: [
      "Infused with heat-dissipating graphite micro-particles",
      "Zero motion transfer across couples",
      "Certified CertiPUR-US® non-toxic foam production",
      "Delivered vacuum-packed & rolled for easy room navigation"
    ]
  },
  {
    id: 6,
    name: "Contemporary Wingback Headboard",
    slug: "contemporary-wingback-headboard",
    category: "Headboards",
    categorySlug: "headboards",
    basePrice: 389,
    oldPrice: 450,
    rating: 4.8,
    reviewCount: 53,
    badge: "HANDCRAFTED",
    badgeType: "accent",
    description: "Transform your existing divan into a boutique hotel centerpiece. Handcrafted with sculpted architectural wings, deep padded cushioning, and premium piped borders. Mounts effortlessly to any standard British divan base or directly to the wall via included heavy-duty French cleat fittings.",
    shortDesc: "Sculpted hotel-height wingback headboard with piped trim and universal British divan fixings.",
    inStock: true,
    leadTime: "Crafted in 5-7 business days",
    sku: "KD-HBD-006",
    images: [
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    sizes: [
      { name: "Single (3'0\")", key: "single", price: 289 },
      { name: "Small Double (4'0\")", key: "small-double", price: 349 },
      { name: "Double (4'6\")", key: "double", price: 369 },
      { name: "King (5'0\")", key: "king", price: 389, isDefault: true },
      { name: "Super King (6'0\")", key: "super-king", price: 479 }
    ],
    colours: [
      { name: "Ivory Bouclé", hex: "#F7F4EF", isDefault: true },
      { name: "Muted Taupe", hex: "#A99B8C" },
      { name: "Midnight Charcoal", hex: "#252525" },
      { name: "Blush Champagne", hex: "#D6C2B4" }
    ],
    materials: ["Woven Linen Bouclé", "Solid Birch Struts", "High-Density Foam"],
    specs: {
      "Total Height": "140 cm floor-standing option / 70 cm strutted",
      "Wing Depth": "18 cm",
      "Fixings": "Universal solid hardwood struts included",
      "Crafted": "Wiltshire, United Kingdom"
    },
    features: [
      "Generous 8cm high-resilience foam padding for comfortable reading",
      "Hand-finished piped piping edges",
      "Fits all standard UK divan bed mounting bolts",
      "Floor-standing option requires no drilling"
    ]
  },
  {
    id: 7,
    name: "Premium Storage Divan Bed",
    slug: "premium-storage-divan-bed",
    category: "Divan Beds",
    categorySlug: "divan-beds",
    basePrice: 1099,
    oldPrice: null,
    rating: 4.9,
    reviewCount: 112,
    badge: "POPULAR",
    badgeType: "accent",
    description: "Sophisticated minimalism paired with generous practicality. Features four smooth ball-bearing continental drawers upholstered to match the frame, paired with a contemporary padded headboard. Crafted from sustainable timber with whisper-quiet soft glide runners.",
    shortDesc: "Continental 4-drawer upholstered divan bed with soft-close ball-bearing runners and clean lines.",
    inStock: true,
    leadTime: "Crafted to order • 1-2 weeks",
    sku: "KD-DIV-007",
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80"
    ],
    sizes: [
      { name: "Double (4'6\" x 6'3\")", key: "double", price: 999 },
      { name: "King (5'0\" x 6'6\")", key: "king", price: 1099, isDefault: true },
      { name: "Super King (6'0\" x 6'6\")", key: "super-king", price: 1299 }
    ],
    colours: [
      { name: "Stone Grey", hex: "#7D8285", isDefault: true },
      { name: "Warm Cream", hex: "#EAE3D9" },
      { name: "Rich Charcoal", hex: "#292929" }
    ],
    materials: ["Belgian Textured Linen", "Solid Pine", "Steel Ball-Bearing Runners"],
    specs: {
      "Drawer Configuration": "2 standard foot drawers + 2 continental head drawers (clears bedside tables)",
      "Headboard Height": "128 cm",
      "Base Construction": "Reinforced solid platform top",
      "Guarantee": "10-Year Craftsmanship Guarantee"
    },
    features: [
      "Continental cut drawers allow nightstands to sit flush beside the bed",
      "Heavy-duty ball bearing runners tested to 25kg per drawer",
      "Includes matching upholstered padded headboard",
      "Anti-slip platform fabric keeps mattress firmly seated"
    ]
  },
  {
    id: 8,
    name: "Hybrid Comfort Mattress",
    slug: "hybrid-comfort-mattress",
    category: "Mattresses",
    categorySlug: "mattresses",
    basePrice: 829,
    oldPrice: 980,
    rating: 4.9,
    reviewCount: 176,
    badge: "AWARD WINNER",
    badgeType: "gold",
    description: "The apex of sleep engineering: combining the responsive bounce of 3,000 zoned pocket micro-springs with the contouring relief of gel-infused cooling memory foam. Eliminates pressure points along the spine while maintaining optimal airflow through perforated aerofoam borders.",
    shortDesc: "3,000 pocket micro-springs merged with cooling gel memory foam for adaptive spinal alignment.",
    inStock: true,
    leadTime: "In stock • Dispatched in 24 hours",
    sku: "KD-MAT-008",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    sizes: [
      { name: "Single (3'0\" x 6'3\")", key: "single", price: 599 },
      { name: "Small Double (4'0\" x 6'3\")", key: "small-double", price: 729 },
      { name: "Double (4'6\" x 6'3\")", key: "double", price: 769 },
      { name: "King (5'0\" x 6'6\")", key: "king", price: 829, isDefault: true },
      { name: "Super King (6'0\" x 6'6\")", key: "super-king", price: 999 }
    ],
    firmnessOptions: [
      { name: "Medium (Gentle Hug & Lift)", key: "medium", isDefault: true },
      { name: "Medium Firm (Optimal Spine Alignment)", key: "medium-firm" }
    ],
    materials: ["3,000 Micro-Springs", "ThermoGel® Memory Foam", "Tencel® Natural Lyocell"],
    specs: {
      "Mattress Depth": "30 cm luxury hotel depth",
      "Internal Matrix": "3,000 micro & full-height pocket coils",
      "Cover": "Naturally hypoallergenic Tencel® eucalyptus yarn",
      "Trial": "100-Night Risk-Free In-Home Sleep Trial"
    },
    features: [
      "Voted Best Hybrid Mattress by British Sleep Guild",
      "Targeted lumbar support reduces morning aches",
      "Reinforced high-density foam perimeter wall",
      "Removable washable top cover with 360-degree brass zip"
    ]
  },
  {
    id: 9,
    name: "The Belgravia Floating Bed Frame",
    slug: "the-belgravia-floating-bed-frame",
    category: "Upholstered Beds",
    categorySlug: "upholstered-beds",
    basePrice: 1450,
    oldPrice: null,
    rating: 5.0,
    reviewCount: 41,
    badge: "LUXURY EDITION",
    badgeType: "gold",
    description: "An architectural tour-de-force inspired by London's most exclusive residences. An inset recessed platform base creates a dramatic floating cantilever illusion, accented by an extra-wide padded headboard panel that extends behind bedside tables for a seamless penthouse look.",
    shortDesc: "Architectural floating cantilever bedframe with extended horizontal upholstered headboard wall.",
    inStock: true,
    leadTime: "Bespoke handcrafted • 3-4 weeks",
    sku: "KD-UPH-009",
    images: [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80"
    ],
    sizes: [
      { name: "King (5'0\" x 6'6\")", key: "king", price: 1450, isDefault: true },
      { name: "Super King (6'0\" x 6'6\")", key: "super-king", price: 1690 }
    ],
    colours: [
      { name: "Sandstone Linen", hex: "#E3DAC9", isDefault: true },
      { name: "Graphite Bouclé", hex: "#3A3B3C" },
      { name: "Warm Taupe", hex: "#A99B8C" }
    ],
    materials: ["Belgian Textured Linen", "Heavy-Gauge Steel Chassis", "Solid Beech"],
    specs: {
      "Total Headboard Width": "King: 240cm / Super King: 270cm",
      "Headboard Height": "115 cm low-slung modern profile",
      "Platform Elevation": "22 cm above ground",
      "Frame Guarantee": "15-Year Structural Frame Guarantee"
    },
    features: [
      "Recessed cantilever base creates dramatic floating appearance",
      "Integrated discreet warm LED under-bed ambiance strip",
      "Extra wide headboard accommodates bedside lamps & tables",
      "Hand-upholstered in premium textured linen weave"
    ]
  },
  {
    id: 10,
    name: "Natural Cashmere 4,000 Mattress",
    slug: "natural-cashmere-4000-mattress",
    category: "Mattresses",
    categorySlug: "mattresses",
    basePrice: 1199,
    oldPrice: 1399,
    rating: 5.0,
    reviewCount: 38,
    badge: "ARTISAN CRAFTED",
    badgeType: "gold",
    description: "The pinnacle of British natural craftsmanship. Handcrafted in Yorkshire using pure Mongolian cashmere, Yorkshire Dales fleece wool, hand-teased horsetail hair, and organic Egyptian cotton, balanced over 4,000 dual-tier pocket springs. 100% foam-free and naturally flame retardant.",
    shortDesc: "Pure Yorkshire wool, Mongolian cashmere, horsetail and 4,000 pocket springs. 100% natural and chemical-free.",
    inStock: true,
    leadTime: "Handcrafted to order • 10-14 days",
    sku: "KD-MAT-010",
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    sizes: [
      { name: "Double (4'6\" x 6'3\")", key: "double", price: 1049 },
      { name: "King (5'0\" x 6'6\")", key: "king", price: 1199, isDefault: true },
      { name: "Super King (6'0\" x 6'6\")", key: "super-king", price: 1449 }
    ],
    firmnessOptions: [
      { name: "Medium (Gentle Natural Yield)", key: "medium", isDefault: true },
      { name: "Firm (Robust Posture Cushioning)", key: "firm" }
    ],
    materials: ["Cashmere", "Yorkshire Wool", "Horsetail", "4,000 Pocket Springs"],
    specs: {
      "Mattress Depth": "32 cm opulent pillow profile",
      "Fillings": "Pure Cashmere, Silk, Yorkshire Wool, Hand-teased Horsetail",
      "Border": "4 rows of genuine hand side-stitching",
      "Chemicals": "100% chemical-free FR (natural wool flame barrier)"
    },
    features: [
      "Four rows of genuine master hand side-stitching",
      "Natural thermo-regulation cools in summer, warms in winter",
      "100-Night In-Home Trial + 15-Year Manufacturer Guarantee",
      "Biodegradable natural materials with zero off-gassing"
    ]
  },
  {
    id: 11,
    name: "Mayfair Grand Bedside Table",
    slug: "mayfair-grand-bedside-table",
    category: "Bedroom Furniture",
    categorySlug: "bedroom-furniture",
    basePrice: 349,
    oldPrice: null,
    rating: 4.7,
    reviewCount: 29,
    badge: "FURNITURE",
    badgeType: "accent",
    description: "Architectural bedside luxury designed to harmonise with our upholstered beds. Hand-crafted with fluted reeded oak drawer fronts, brushed champagne brass handles, and soft-closing under-mount runners. Finished in a soft taupe matte satin lacquer.",
    shortDesc: "Fluted solid oak 2-drawer nightstand with brushed champagne brass hardware and soft-close drawers.",
    inStock: true,
    leadTime: "Dispatched in 3-5 days",
    sku: "KD-FURN-011",
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    sizes: [
      { name: "Standard (W 50 x D 42 x H 55 cm)", key: "standard", price: 349, isDefault: true },
      { name: "Grand (W 65 x D 45 x H 60 cm)", key: "grand", price: 419 }
    ],
    colours: [
      { name: "Soft Taupe Lacquer", hex: "#A99B8C", isDefault: true },
      { name: "Ivory Cream", hex: "#EAE3D9" },
      { name: "Charcoal Oak", hex: "#292929" }
    ],
    materials: ["Solid European Oak", "Champagne Brass", "MDF Core"],
    specs: {
      "Dimensions": "W: 50cm x D: 42cm x H: 55cm",
      "Drawers": "2 soft-close felt-lined drawers",
      "Assembly": "Delivered fully assembled",
      "Finish": "Durable UV-cured water-resistant satin lacquer"
    },
    features: [
      "Tactile reeded solid oak detail on drawer fronts",
      "Felt-lined top drawer for jewellery and watches",
      "Discrete rear cutout for neat device charging cable pass-through",
      "Brushed solid champagne brass pulls"
    ]
  },
  {
    id: 12,
    name: "Kensington Linen Storage Ottoman Bench",
    slug: "kensington-linen-storage-ottoman-bench",
    category: "Bedroom Furniture",
    categorySlug: "bedroom-furniture",
    basePrice: 429,
    oldPrice: null,
    rating: 4.8,
    reviewCount: 47,
    badge: "STORAGE",
    badgeType: "accent",
    description: "The quintessential end-of-bed accent piece. Combining deep capitonné buttoned seating with expansive concealed storage for surplus pillows, cashmere throws, and seasonal linens. Equipped with smooth gas-stay hinges that safely hold the lid open at any angle.",
    shortDesc: "End-of-bed tufted storage bench in Belgian linen with safety gas-stay hinges and oak bun feet.",
    inStock: true,
    leadTime: "Dispatched in 3-5 business days",
    sku: "KD-FURN-012",
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80"
    ],
    sizes: [
      { name: "Medium (W 120 x D 45 x H 48 cm)", key: "medium", price: 429, isDefault: true },
      { name: "Large (W 145 x D 48 x H 48 cm)", key: "large", price: 499 }
    ],
    colours: [
      { name: "Warm Ivory Linen", hex: "#F7F4EF", isDefault: true },
      { name: "Charcoal Slate", hex: "#2E3033" },
      { name: "Champagne Velvet", hex: "#B99A68" }
    ],
    materials: ["Belgian Heavyweight Linen", "Solid Beech Frame", "Gas Strut Hinges"],
    specs: {
      "Dimensions": "W: 120cm x D: 45cm x H: 48cm",
      "Internal Capacity": "140 Litres sealed storage",
      "Hinges": "Dual pneumatic gas struts with soft-close anti-slam",
      "Weight Capacity": "Tested for seating up to 200 kg"
    },
    features: [
      "Deep hand-pulled button tufted comfortable seat cushion",
      "Dual soft-close hydraulic dampers prevent finger pinching",
      "Fabric-lined dust-resistant interior for pristine bed linen storage",
      "Solid turned oak legs with hidden non-marking felt floor pads"
    ]
  }
];

// Product Category definitions for navigation and filtering
const CATEGORIES = [
  {
    name: "Divan Beds",
    slug: "divan-beds",
    description: "Classic British upholstered bases with customizable storage drawers and headboard pairings.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    itemCount: 4
  },
  {
    name: "Ottoman Beds",
    slug: "ottoman-beds",
    description: "Effortless hydraulic gas-lift mechanisms delivering generous, dust-free under-bed storage.",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
    itemCount: 3
  },
  {
    name: "Upholstered Beds",
    slug: "upholstered-beds",
    description: "Architectural bedsteads wrapped in opulent Italian velvets, linens and tactile bouclés.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    itemCount: 5
  },
  {
    name: "Mattresses",
    slug: "mattresses",
    description: "Master-crafted pocket sprung, orthopaedic and cooling hybrid mattresses with 100-night trials.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    itemCount: 4
  },
  {
    name: "Headboards",
    slug: "headboards",
    description: "Hotel-height statement headboards crafted to mount to any standard British divan.",
    image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=800&q=80",
    itemCount: 3
  },
  {
    name: "Bedroom Furniture",
    slug: "bedroom-furniture",
    description: "Fluted reeded oak nightstands, upholstered storage benches and heirloom dressing pieces.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
    itemCount: 3
  }
];

// Helper functions for data access
function getProductById(id) {
  const numericId = parseInt(id, 10);
  return PRODUCTS.find(p => p.id === numericId) || PRODUCTS[0];
}

function getProductBySlug(slug) {
  return PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];
}

function getBestsellers() {
  return PRODUCTS.filter(p => p.badge === "BESTSELLER" || p.rating >= 4.9).slice(0, 8);
}

function getRelatedProducts(currentId, limit = 4) {
  const current = getProductById(currentId);
  return PRODUCTS
    .filter(p => p.id !== current.id && (p.categorySlug === current.categorySlug || p.category === current.category))
    .concat(PRODUCTS.filter(p => p.id !== current.id))
    .slice(0, limit);
}
