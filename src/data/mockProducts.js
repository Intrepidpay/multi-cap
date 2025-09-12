// Mock product data with enhanced SEO properties
const products = [
  {
    id: 1,
    name: "Ferrari Roma Spider",
    price: 215599.99,
    category: "cars",
    description: "Ferrari Roma Spider Karbon | Purple Metallic Color | Used | Accident-free | Petrol | Automatic | Emission Class: Euro6d-4(Green) | 8 Cylinders | Heated seats/steering wheel | On-board computer | Warranty: Contact for more info ",
    images: [
      "/images/Vk1.jpg",
      "/images/Vk2.jpg",
      "/images/Vk3.jpg",
      "/images/Vk4.jpg",
      "/images/Vk5.jpg",
      "/images/Vk6.jpg",
      "/images/Vk7.jpg",
      "/images/Vk8.jpg",
      "/images/Vk9.jpg",
      "/images/Vk10.jpg",
      "/images/Vk11.jpg",
      "/images/Vk12.jpg",
      "/images/Vk13.jpg",
      "/images/Vk14.jpg",
      "/images/Vk15.jpg",
      "/images/Vk16.jpg",
      "/images/Vk17.jpg"
      
    ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "FR-RM-051",
    brand: "Ferrari",
    rating: {
      value: 4.8,
      count: 14
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 15,
    name: "BMW 535",
    price: 16999.99,
    category: "cars",
    description: "i xDrive M Sport Performance Exclusive Edition | Black Metallic Color | Used | Accident-free | Petrol | Automatic | Emission Class: Euro6d-4(Green) | 6 Cylinders | Heated seats/steering wheel | combustion engine | Warranty: Contact for more info ",
    images: [
      "/images/Bm1.jpg",
      "/images/Bm2.jpg",
      "/images/Bm3.jpg",
      "/images/Bm4.jpg",
      "/images/Bm5.jpg",
      "/images/Bm6.jpg",
      "/images/Bm7.jpg",
      "/images/Bm8.jpg",
      "/images/Bm9.jpg",
      "/images/Bm10.jpg",
      "/images/Bm11.jpg",
      "/images/Bm12.jpg",
      "/images/Bm13.jpg",
      "/images/Bm14.jpg",
      "/images/Bm15.jpg",
      "/images/Bm16.jpg",
      "/images/Bm17.jpg",
      "/images/Bm18.jpg"
      
    ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "BW-SPT-014",
    brand: "BMW",
    rating: {
      value: 4.2,
      count: 4
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
   {
    id: 14,
    name: "Mercedes-Benz S 560",
    price: 49899.99,
    category: "cars",
    description: "4Matic AMG-Plus | Obsidian Black Metallic Color | Used | Accident-free | Petrol | Automatic | Emission Class: Euro6d-4(Green) | combustion engine | Heated seats/steering wheel | On-board computer | Winter package | Warranty: Contact for more info ",
    images: [
      "/images/Mb1.jpg",
      "/images/Mb2.jpg",
      "/images/Mb3.jpg",
      "/images/Mb4.jpg",
      "/images/Mb5.jpg",
      "/images/Mb6.jpg",
      "/images/Mb7.jpg",
      "/images/Mb8.jpg",
      "/images/Mb9.jpg",
      "/images/Mb10.jpg",
      "/images/Mb11.jpg",
      "/images/Mb12.jpg",
      "/images/Mb13.jpg",
      "/images/Mb14.jpg",
      "/images/Mb15.jpg",
      "/images/Mb16.jpg"
      
    ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "MB-SS-090",
    brand: "Mercedes-Benz",
    rating: {
      value: 4.5,
      count: 11
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 13,
    name: "Nissan Primastar",
    price: 19089.99,
    category: "cars",
    description: "Kombi L1H1 2,8t dCi170 Tekna Auto | Black Metallic Color | Used | Accident-free | Diesel | Automatic | Emission Class: Euro6d-4(Green) | Internal combustion engine | Heated seats/steering wheel | On-board computer | 4 Cylinders | Warranty: Contact for more info ",
    images: [
      "/images/Np1.jpg",
      "/images/Np2.jpg",
      "/images/Np3.jpg",
      "/images/Np4.jpg",
      "/images/Np5.jpg",
      "/images/Np6.jpg",
      "/images/Np7.jpg",
      "/images/Np8.jpg",
      "/images/Np9.jpg",
      "/images/Np10.jpg",
      "/images/Np11.jpg",
      "/images/Np12.jpg",
      "/images/Np13.jpg"
      
    ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "NP-PS-190",
    brand: "Nissan",
    rating: {
      value: 4.9,
      count: 19
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 2,
    name: "Smart TV 55 inch",
    price: 799.99,
    category: "tvs",
    description: "4K Ultra HD Smart TV with HDR and built-in streaming apps.",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    highDemand: false,
    sold: false,
    quantity: 8,
    sku: "TV-SM-055",
    brand: "Multicapital",
    rating: {
      value: 4.5,
      count: 18
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
    name: "Professional Camera",
    price: 1299.99,
    category: "special devices",
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
    id: 6,
    name: "Refrigerator",
    price: 899.99,
    category: "home appliances",
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
    id: 7,
    name: "Wireless Headphones",
    price: 199.99,
    category: "special devices",
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
    id: 8,
    name: "Smart Watch",
    price: 299.99,
    category: "special devices",
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
    id: 9,
    name: "Electric Scooter",
    price: 399.99,
    category: "special devices",
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
    id: 10,
    name: "Desktop Computer",
    price: 999.99,
    category: "computers",
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
    id: 11,
    name: "Coffee Maker",
    price: 129.99,
    category: "home appliances",
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
    id: 12,
    name: "Action Camera",
    price: 249.99,
    category: "special devices",
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
