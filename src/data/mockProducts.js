const products = [
{
  id: 842,
  name: "Asko Professional Dishwasher",
  price: 1399.99,
  category: "appliances",
  description: "44 dBA | 3rd Rack | TopFlex Spray Arm | Stainless Steel Interior | Super Dry | Used | Excellent Condition | Scandinavian Design ",
  images: [
    "/images/app842_1.jpg",
    "/images/app842_2.jpg",
    "/images/app842_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ASKO-DW24-842",
  brand: "Asko",
  rating: {
    value: 4.7,
    count: 63
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 843,
  name: "Fisher & Paykel French Door Refrigerator",
  price: 3899.99,
  category: "appliances",
  description: "ActiveSmart Food Care | Dual Cooling | External Water Dispenser | Glass Shelves | Stainless Steel | Used | Excellent Condition ",
  images: [
    "/images/app843_1.jpg",
    "/images/app843_2.jpg",
    "/images/app843_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "FP-FRENCH36-843",
  brand: "Fisher & Paykel",
  rating: {
    value: 4.6,
    count: 29
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 844,
  name: "Viking 5 Series Gas Range",
  price: 4499.99,
  category: "appliances",
  description: "Professional Grade | 4 Sealed Burners | Convection Oven | Cast Iron Grates | Stainless Steel | Used | Excellent Condition ",
  images: [
    "/images/app844_1.jpg",
    "/images/app844_2.jpg",
    "/images/app844_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "VIKING-5GS-844",
  brand: "Viking",
  rating: {
    value: 4.7,
    count: 77
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 845,
  name: "Jenn-Air Down-Draft Ventilation Range",
  price: 3299.99,
  category: "appliances",
  description: "Gas Cooktop | Electric Oven | Downdraft Vent | Satin Black Finish | Pro-Style | Used | Excellent Condition ",
  images: [
    "/images/app845_1.jpg",
    "/images/app845_2.jpg",
    "/images/app845_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "JENN-DOWNDRAFT-845",
  brand: "Jenn-Air",
  rating: {
    value: 4.5,
    count: 44
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 846,
  name: "GE Profile Opal 2.0 Nugget Ice Maker",
  price: 579.99,
  category: "appliances",
  description: "Countertop | Chewable Nugget Ice | Wi-Fi Enabled | 3 Water Fills | Works with Alexa | Stainless Steel | Used | Excellent Condition ",
  images: [
    "/images/app846_1.jpg",
    "/images/app846_2.jpg",
    "/images/app846_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "GE-OPAL2-846",
  brand: "GE Profile",
  rating: {
    value: 4.4,
    count: 312
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 847,
  name: "Samsung BESPOKE Jet Stick Vacuum",
  price: 449.99,
  category: "appliances",
  description: "Cordless | 280 AW Suction | 5-Layer Filtration | 120 Min Runtime | 2 Batteries | Various Colors | Used | Excellent Condition ",
  images: [
    "/images/app847_1.jpg",
    "/images/app847_2.jpg",
    "/images/app847_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "SAM-JETVAC-847",
  brand: "Samsung",
  rating: {
    value: 4.6,
    count: 189
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 848,
  name: "LG Styler Steam Clothing Care System",
  price: 1299.99,
  category: "appliances",
  description: "Garment Steamer | Sanitize & Refresh | Wrinkle Removal | Shoe Care | TrueSteam Technology | White | Used | Excellent Condition ",
  images: [
    "/images/app848_1.jpg",
    "/images/app848_2.jpg",
    "/images/app848_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "LG-STYLER-848",
  brand: "LG",
  rating: {
    value: 4.3,
    count: 96
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 849,
  name: "Whynter 84 Bottle Dual Zone Wine Cooler",
  price: 1599.99,
  category: "appliances",
  description: "Dual Temperature Zones | UV-Resistant Glass Door | Reversible Door | Slide-Out Shelves | Stainless Steel | Used | Excellent Condition ",
  images: [
    "/images/app849_1.jpg",
    "/images/app849_2.jpg",
    "/images/app849_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "WHYN-WINE84-849",
  brand: "Whynter",
  rating: {
    value: 4.5,
    count: 67
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
    id: 850,
    name: "Mountain Bike",
    price: 599.99,
    category: "bicycles",
    description: "Durable mountain bike with suspension and multiple gears for all terrains.",
    images: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    highDemand: true,
    sold: true,
    quantity: 0,
    sku: "BIC-MT-001",
    brand: "Multicapital",
    rating: {
      value: 4.7,
      count: 32
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 851,
    name: "Gaming Console",
    price: 499.99,
    category: "game consoles",
    description: "Next-gen gaming console with immersive gameplay and stunning graphics.",
    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80"
    ],
    highDemand: true,
    sold: false,
    quantity: 3,
    sku: "CON-GM-001",
    brand: "Multicapital",
    rating: {
      value: 4.9,
      count: 45
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 852,
    name: "Professional Camera",
    price: 1299.99,
    category: "cameras",
    description: "Professional DSLR camera with multiple lenses and 4K video capability.",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    ],
    highDemand: false,
    sold: false,
    quantity: 7,
    sku: "CAM-PR-001",
    brand: "Multicapital",
    rating: {
      value: 4.6,
      count: 29
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 853,
    name: "Refrigerator",
    price: 899.99,
    category: "appliances",
    description: "Energy-efficient refrigerator with smart features and ample storage.",
    images: [
      "https://images.unsplash.com/--1599623560574-39c485ba5605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    highDemand: false,
    sold: false,
    quantity: 4,
    sku: "APP-RF-001",
    brand: "Multicapital",
    rating: {
      value: 4.4,
      count: 16
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 854,
    name: "Wireless Headphones",
    price: 199.99,
    category: "accessories",
    description: "Noise-cancelling wireless headphones with premium sound quality.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    highDemand: true,
    sold: false,
    quantity: 12,
    sku: "AUD-HP-001",
    brand: "Multicapital",
    rating: {
      value: 4.8,
      count: 37
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 856,
    name: "Smart Watch",
    price: 299.99,
    category: "accessories",
    description: "Feature-rich smartwatch with health monitoring and notification support.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80"
    ],
    highDemand: false,
    sold: false,
    quantity: 6,
    sku: "ACC-SW-001",
    brand: "Multicapital",
    rating: {
      value: 4.3,
      count: 22
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 857,
    name: "Electric Scooter",
    price: 399.99,
    category: "accessories",
    description: "Portable electric scooter with long battery life and compact design.",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    highDemand: true,
    sold: false,
    quantity: 2,
    sku: "TRN-ES-001",
    brand: "Multicapital",
    rating: {
      value: 4.5,
      count: 19
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 859,
    name: "Desktop Computer",
    price: 999.99,
    category: "desktops",
    description: "Powerful desktop computer for work and entertainment with fast processing.",
    images: [
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=842&q=80"
    ],
    highDemand: false,
    sold: false,
    quantity: 5,
    sku: "COM-DT-001",
    brand: "Multicapital",
    rating: {
      value: 4.7,
      count: 28
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 860,
    name: "Coffee Maker",
    price: 129.99,
    category: "appliances",
    description: "Programmable coffee maker with thermal carafe and built-in grinder.",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    highDemand: false,
    sold: false,
    quantity: 10,
    sku: "APP-CM-001",
    brand: "Multicapital",
    rating: {
      value: 4.2,
      count: 14
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 861,
    name: "Action Camera",
    price: 249.99,
    category: "cameras",
    description: "Waterproof action camera for capturing adventures in 4K resolution.",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    ],
    highDemand: true,
    sold: false,
    quantity: 3,
    sku: "CAM-AC-001",
    brand: "Multicapital",
    rating: {
      value: 4.9,
      count: 41
    },
    reviews: [
      {
        rating: 5
      }
    ]
  }
]

export const getProducts = (filter = 'all', sort = 'random', searchQuery = '') => {
  let filteredProducts = [...products]
  
  // Filter by category
  if (filter !== 'all') {
    filteredProducts = filteredProducts.filter(product => 
      product.category === filter
    )
  }
  
  // Filter by search query
  if (searchQuery) {
    const query = searchQuery.toLowerCase()
    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    )
  }
  
  // Sort products
  switch(sort) {
    case 'price-asc':
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case 'name-asc':
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'name-desc':
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name))
      break
    case 'random':
    default:
      // Shuffle array for random order
      filteredProducts = filteredProducts.sort(() => Math.random() - 0.5)
      break
  }
  
  return filteredProducts
}

export const getProductById = (id) => {
  return products.find(product => product.id === id)
}
