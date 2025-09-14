// Mock product data
const products = [
  {
    id: 1,
    name: "Premium Gaming Laptop",
    price: 1499.99,
    category: "laptops",
    description: "High-performance gaming laptop with RTX graphics and fast processor.",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=842&q=80"
    ],
    highDemand: true,
    sold: false,
    quantity: 5,
    sku: "LAP-GM-001"
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
    sku: "TV-SM-055"
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
    sku: "BIC-MT-001"
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
    sku: "CON-GM-001"
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
    sku: "CAM-PR-001"
  },
  {
    id: 6,
    name: "Refrigerator",
    price: 899.99,
    category: "home appliances",
    description: "Energy-efficient refrigerator with smart features and ample storage.",
    images: [
      "https://images.unsplash.com/photo-1599623560574-39c485ba5605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    highDemand: false,
    sold: false,
    quantity: 4,
    sku: "APP-RF-001"
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
    sku: "AUD-HP-001"
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
    sku: "ACC-SW-001"
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
    sku: "TRN-ES-001"
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
    sku: "COM-DT-001"
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
    sku: "APP-CM-001"
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
    sku: "CAM-AC-001"
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