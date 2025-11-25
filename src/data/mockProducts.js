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
      count: 44
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 2,
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
      count: 13
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
   {
    id: 3,
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
      count: 14
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 4,
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
      count: 11
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
  id: 5,
  name: "LG 55-Inch Smart TV 4K UHD",
  price: 339.99,
  category: "tv",
  description: "2024 LG 55-Inch 4K UHD Smart TV | HDR10 & Dolby Vision | webOS with Built-in Apps | Magic Remote with Voice Control | TruMotion 120Hz | Dolby Atmos Sound | HDMI 2.1, USB & Wi-Fi | Warranty: 12 Months",
  images: [
    "/lg_tv_1.jpg",
    "/images/lg_tv_2.jpg",
    "/images/lg_tv_3.jpg",
    "/images/lg_tv_4.jpg",
    "/images/lg_tv_5.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 3,
  sku: "LG-55UHD-24",
  brand: "LG",
  rating: {
    value: 4.7,
    count: 58
      },
    reviews: [
    {
      rating: 5
    }
  ]
},
 {
      id: 6,
      name: "Ford Mustang 5.0 GT",
      price: 28999.99,
      category: "cars",
      description: "5.0 GT Cervini Performance / unique | Blue Metallic Color | Used | Single Owner | Petrol | 10-Speed Automatic | 8 Cylinders | Performance Package | Heated/Cooled Leather Seats | Apple CarPlay/Android Auto | Rear View Camera | combustion engine | Warranty: 12 months included",
      images: [
        "/images/ford_mustang_1.jpg", 
        "/images/ford_mustang_2.jpg", 
        "/images/ford_mustang_3.jpg", 
        "/images/ford_mustang_4.jpg",
         "/images/ford_mustang_5.jpg", 
        "/images/ford_mustang_6.jpg", 
        "/images/ford_mustang_7.jpg", 
        "/images/ford_mustang_8.jpg",
         "/images/ford_mustang_9.jpg", 
        "/images/ford_mustang_10.jpg", 
        "/images/ford_mustang_11.jpg", 
        "/images/ford_mustang_12.jpg",
         "/images/ford_mustang_13.jpg", 
        "/images/ford_mustang_14.jpg", 
        "/images/ford_mustang_15.jpg", 
        "/images/ford_mustang_16.jpg",
         "/images/ford_mustang_17.jpg", 
        "/images/ford_mustang_18.jpg"
        ],
      highDemand: true,
      sold: false,
      quantity: 1,
      sku: "FRD-MST-2022",
      brand: "Ford",
      rating: {
        value: 4.8,
        count: 32
      },
      reviews: [
      {
        rating: 4
      }
    ]
    },
    {
      id: 7,
      name: "Honda Civic",
      price: 14899.99,
      category: "cars",
      description: "Lim. 5-door 1.0 Elegance | Gray Color | Used | Accident-free | Petrol | CVT Automatic | 1.5L Turbocharged Engine | Heated Front Seats | Leather-Trimmed Interior | Navigation System | Adaptive Cruise Control | combustion engine | Warranty: 12 months limited",
      images: [
        "/images/honda_civic_1.jpg", 
        "/images/honda_civic_2.jpg", 
        "/images/honda_civic_3.jpg", 
        "/images/honda_civic_4.jpg",
        "/images/honda_civic_5.jpg", 
        "/images/honda_civic_6.jpg", 
        "/images/honda_civic_7.jpg", 
        "/images/honda_civic_8.jpg",
        "/images/honda_civic_9.jpg", 
        "/images/honda_civic_10.jpg", 
        "/images/honda_civic_11.jpg", 
        "/images/honda_civic_12.jpg",
        "/images/honda_civic_13.jpg", 
        "/images/honda_civic_14.jpg", 
        "/images/honda_civic_15.jpg",
        "/images/honda_civic_16.jpg"
        
        ],
      highDemand: false,
      sold: false,
      quantity: 1,
      sku: "HND-CVC-2019",
      brand: "Honda",
      rating: {
        value: 4.6,
        count: 9
      },
      reviews: [
      {
        rating: 5
      }
    ]
    },
    {
      id: 8,
      name: "Tesla Model 3 Performance",
      price: 35699.99,
      category: "cars",
      description: "Performance Dual AWD | Grey Metallic Color | Used | Single Owner | Electric | Single-Speed Automatic | Dual Motor All-Wheel Drive | Autopilot | Premium Interior | Glass Roof | All-Season Tires | electric engine | Warranty: Balance of original 4-year/50,000-mile",
      images: [
        "/images/tesla_model3_1.jpg", 
        "/images/tesla_model3_2.jpg", 
        "/images/tesla_model3_3.jpg", 
        "/images/tesla_model3_4.jpg",
        "/images/tesla_model3_5.jpg", 
        "/images/tesla_model3_6.jpg", 
        "/images/tesla_model3_7.jpg", 
        "/images/tesla_model3_8.jpg",
        "/images/tesla_model3_9.jpg", 
        "/images/tesla_model3_10.jpg", 
        "/images/tesla_model3_11.jpg", 
        "/images/tesla_model3_12.jpg",
        "/images/tesla_model3_13.jpg", 
        "/images/tesla_model3_14.jpg", 
        "/images/tesla_model3_15.jpg", 
        "/images/tesla_model3_16.jpg",
        "/images/tesla_model3_17.jpg", 
        "/images/tesla_model3_18.jpg", 
        "/images/tesla_model3_19.jpg", 
        "/images/tesla_model3_20.jpg",
        "/images/tesla_model3_21.jpg", 
        "/images/tesla_model3_22.jpg", 
        "/images/tesla_model3_23.jpg", 
        "/images/tesla_model3_24.jpg",
        "/images/tesla_model3_25.jpg"
        ],
      highDemand: true,
      sold: false,
      quantity: 1,
      sku: "TSL-MD3-2022",
      brand: "Tesla",
      rating: {
        value: 4.9,
        count: 58
      },
     reviews: [
      {
        rating: 4
      }
    ]
    },
    {
      id: 9,
      name: "Toyota RAV4 Hybrid Navi",
      price: 21399.99,
      category: "cars",
      description: "RAV4 Hybrid Navi | Magnetic Gray Metallic Color | Used | Accident-free | Petrol | 8-Speed Automatic | 2.5L 4-Cylinder Engine | Moonroof | Power Liftgate | SofTex Trimmed Seats | Apple CarPlay/Android Auto | combustion engine | Warranty: 12 months comprehensive",
      images: [
        "/images/toyota_rav4_1.jpg", 
        "/images/toyota_rav4_2.jpg", 
        "/images/toyota_rav4_3.jpg", 
        "/images/toyota_rav4_4.jpg",
        "/images/toyota_rav4_5.jpg", 
        "/images/toyota_rav4_6.jpg", 
        "/images/toyota_rav4_7.jpg", 
        "/images/toyota_rav4_8.jpg",
        "/images/toyota_rav4_9.jpg", 
        "/images/toyota_rav4_10.jpg", 
        "/images/toyota_rav4_11.jpg", 
        "/images/toyota_rav4_12.jpg",
        "/images/toyota_rav4_13.jpg", 
        "/images/toyota_rav4_14.jpg", 
        "/images/toyota_rav4_15.jpg", 
        "/images/toyota_rav4_16.jpg",
        "/images/toyota_rav4_17.jpg", 
        "/images/toyota_rav4_18.jpg", 
        "/images/toyota_rav4_19.jpg", 
        "/images/toyota_rav4_20.jpg",
        "/images/toyota_rav4_21.jpg"
        ],
        
      highDemand: false,
      sold: false,
      quantity: 1,
      sku: "TYT-RAV-2021",
      brand: "Toyota",
      rating: {
        value: 4.7,
        count: 11
      },
       reviews: [
      {
        rating: 4
      }
    ]
    },
    {
      id: 10,
      name: "Chevrolet Camaro",
      price: 45999.99,
      category: "cars",
      description: "6.2 V8 50th Anniversary Ed. | Grey Metallic Color | Used | Keyless central locking | Petrol | 8-Speed Dual-Clutch | 6.2L V8 Engine | Z51 Performance Package | GT2 Seats | Front Lift Adjustment | Bose Premium Audio | combustion engine | Warranty: Contact for more info",
      images: [
"/images/chevrolet_corvette_1.jpg", 
"/images/chevrolet_corvette_2.jpg", 
"/images/chevrolet_corvette_3.jpg", 
"/images/chevrolet_corvette_4.jpg",
"/images/chevrolet_corvette_5.jpg",
"/images/chevrolet_corvette_6.jpg",
"/images/chevrolet_corvette_7.jpg",
"/images/chevrolet_corvette_8.jpg",
"/images/chevrolet_corvette_9.jpg",
"/images/chevrolet_corvette_10.jpg",
"/images/chevrolet_corvette_11.jpg",
"/images/chevrolet_corvette_12.jpg",
"/images/chevrolet_corvette_13.jpg",
"/images/chevrolet_corvette_14.jpg",
"/images/chevrolet_corvette_15.jpg",
"/images/chevrolet_corvette_16.jpg",
"/images/chevrolet_corvette_17.jpg",
"/images/chevrolet_corvette_18.jpg",
"/images/chevrolet_corvette_19.jpg",
"/images/chevrolet_corvette_20.jpg",
"/images/chevrolet_corvette_21.jpg",
"/images/chevrolet_corvette_22.jpg",
"/images/chevrolet_corvette_23.jpg",
"/images/chevrolet_corvette_24.jpg",
"/images/chevrolet_corvette_25.jpg",
"/images/chevrolet_corvette_26.jpg",
"/images/chevrolet_corvette_27.jpg"
        ],
      highDemand: false,
      sold: false,
      quantity: 1,
      sku: "CHV-CVT-2017",
      brand: "Chevrolet",
      rating: {
        value: 4.9,
        count: 7
      },
      reviews: [
      {
        rating: 4
      }
    ]
    },
    {
      id: 11,
      name: "Subaru Outback",
      price: 34999.99,
      category: "cars",
      description: "2.5i Platinum Lineartronic | Silver Metallic Color | Used | One Owner | Petrol | Blind spot assist | 2.4L Turbocharged Engine | Symmetrical All-Wheel Drive | Nappa Leather Seats | Harman Kardon Audio | Heated steering wheel | combustion engine | Warranty: 12 months limited",
      images: [
        "/images/subaru_outback_1.jpg", 
"/images/subaru_outback_2.jpg", 
"/images/subaru_outback_3.jpg", 
"/images/subaru_outback_4.jpg",
"/images/subaru_outback_5.jpg",
"/images/subaru_outback_6.jpg",
"/images/subaru_outback_7.jpg",
"/images/subaru_outback_8.jpg",
"/images/subaru_outback_9.jpg",
"/images/subaru_outback_10.jpg",
"/images/subaru_outback_11.jpg",
"/images/subaru_outback_12.jpg",
"/images/subaru_outback_13.jpg",
"/images/subaru_outback_14.jpg",
"/images/subaru_outback_15.jpg"
        ],
      highDemand: false,
      sold: false,
      quantity: 1,
      sku: "SBR-OUT-2024",
      brand: "Subaru",
      rating: {
        value: 4.5,
        count: 8
      },
      reviews: [
      {
        rating: 4
      }
    ]
    },
    {
      id: 12,
      name: "Jeep Wrangler",
      price: 16999.99,
      category: "cars",
      description: "Unlimited Sport | Black Color | Used | No Accidents | Diesel | Manual gearbox | 4 Cylinders | Body-Color Fender Flares | LED Lighting Group | Cold Weather Group | 8.4-Inch Radio | combustion engine | Warranty: 12 months comprehensive",
      images: [
        "/images/jeep_wrangler_1.jpg", 
"/images/jeep_wrangler_2.jpg", 
"/images/jeep_wrangler_3.jpg", 
"/images/jeep_wrangler_4.jpg",
"/images/jeep_wrangler_5.jpg",
"/images/jeep_wrangler_6.jpg",
"/images/jeep_wrangler_7.jpg",
"/images/jeep_wrangler_8.jpg",
"/images/jeep_wrangler_9.jpg",
"/images/jeep_wrangler_10.jpg",
"/images/jeep_wrangler_11.jpg",
"/images/jeep_wrangler_12.jpg",
"/images/jeep_wrangler_13.jpg",
"/images/jeep_wrangler_14.jpg",
"/images/jeep_wrangler_15.jpg",
"/images/jeep_wrangler_16.jpg",
"/images/jeep_wrangler_17.jpg",
"/images/jeep_wrangler_18.jpg",
"/images/jeep_wrangler_19.jpg",
"/images/jeep_wrangler_20.jpg",
"/images/jeep_wrangler_21.jpg",
"/images/jeep_wrangler_22.jpg",
"/images/jeep_wrangler_23.jpg",
"/images/jeep_wrangler_24.jpg",
"/images/jeep_wrangler_25.jpg",
"/images/jeep_wrangler_26.jpg",
"/images/jeep_wrangler_27.jpg",
"/images/jeep_wrangler_28.jpg"
        ],
      highDemand: false,
      sold: false,
      quantity: 1,
      sku: "JEP-WRN-2011",
      brand: "Jeep",
      rating: {
        value: 4.4,
        count: 10
      },
      reviews: [
      {
        rating: 4
      }
    ]
    },
    {
      id: 13,
      name: "Audi A4 Avant 2.0",
      price: 26299.99,
      category: "cars",
      description: "Avant 2.0 TDI quattro | Grey Metallic Color | Used | Clean History | Petrol | 7-Speed Automatic | 2.0L Turbocharged Engine | Virtual Cockpit | Bang & Olufsen Sound System | Heated Seats | Navigation | combustion engine | Warranty: 12 months limited",
      images: [
      "/images/audi_a4_1.jpg", 
"/images/audi_a4_2.jpg", 
"/images/audi_a4_3.jpg", 
"/images/audi_a4_4.jpg",
"/images/audi_a4_5.jpg",
"/images/audi_a4_6.jpg",
"/images/audi_a4_7.jpg",
"/images/audi_a4_8.jpg",
"/images/audi_a4_9.jpg",
"/images/audi_a4_10.jpg",
"/images/audi_a4_11.jpg",
"/images/audi_a4_12.jpg",
"/images/audi_a4_13.jpg",
"/images/audi_a4_14.jpg",
"/images/audi_a4_15.jpg",
"/images/audi_a4_16.jpg",
"/images/audi_a4_17.jpg",
"/images/audi_a4_18.jpg",
"/images/audi_a4_19.jpg",
"/images/audi_a4_20.jpg",
"/images/audi_a4_21.jpg",
"/images/audi_a4_22.jpg"
      ],
      highDemand: false,
      sold: false,
      quantity: 1,
      sku: "AUD-A4-2017",
      brand: "Audi",
      rating: {
        value: 4.6,
        count: 6
      },
      reviews: [
      {
        rating: 4
      }
    ]
    },
    {
      id: 14,
      name: "Hyundai Tucson",
      price: 17199.99,
      category: "cars",
      description: "Tucson Premium 2.0Ltr-136kW | White Color | Used | No Damage | Petrol | 8-Speed Automatic | 2.5L 4-Cylinder Engine | Leather Seats | Panoramic Sunroof | Wireless Charging | Highway Driving Assist | combustion engine | Warranty: 12 months comprehensive",
      images: [
        "/images/hyundai_tucson_1.jpg",
"/images/hyundai_tucson_2.jpg", 
"/images/hyundai_tucson_3.jpg", 
"/images/hyundai_tucson_4.jpg",
"/images/hyundai_tucson_5.jpg",
"/images/hyundai_tucson_6.jpg",
"/images/hyundai_tucson_7.jpg",
"/images/hyundai_tucson_8.jpg",
"/images/hyundai_tucson_9.jpg",
"/images/hyundai_tucson_10.jpg",
"/images/hyundai_tucson_11.jpg",
"/images/hyundai_tucson_12.jpg",
"/images/hyundai_tucson_13.jpg",
"/images/hyundai_tucson_14.jpg"
      ],
      highDemand: false,
      sold: false,
      quantity: 1,
      sku: "HYN-TUC-2017",
      brand: "Hyundai",
      rating: {
        value: 4.7,
        count: 9
      },
      reviews: [
      {
        rating: 4
      }
    ]
    },
    {
      id: 15,
      name: "Nissan Pathfinder",
      price: 41699.99,
      category: "cars",
      description: " | Black Metallic Color | Used | Well Maintained | Petrol | CVT Automatic | Ambient lighting | 6 Cylinders Engine | ProPILOT Assist | Leather-Appointed Seats | Motion-Activated Liftgate | Bose Premium Audio | combustion engine | Warranty: 12 months comprehensive",
      images: [
        "/images/nissan_rogue_1.jpg", 
"/images/nissan_rogue_2.jpg", 
"/images/nissan_rogue_3.jpg", 
"/images/nissan_rogue_4.jpg",
"/images/nissan_rogue_5.jpg",
"/images/nissan_rogue_6.jpg",
"/images/nissan_rogue_7.jpg",
"/images/nissan_rogue_8.jpg",
"/images/nissan_rogue_9.jpg",
"/images/nissan_rogue_10.jpg",
"/images/nissan_rogue_11.jpg",
"/images/nissan_rogue_12.jpg",
"/images/nissan_rogue_13.jpg",
"/images/nissan_rogue_14.jpg",
"/images/nissan_rogue_15.jpg",
"/images/nissan_rogue_16.jpg",
"/images/nissan_rogue_17.jpg"
        ],
      highDemand: false,
      sold: false,
      quantity: 1,
      sku: "NIS-ROG-2022",
      brand: "Nissan",
      rating: {
        value: 4.3,
        count: 17
      },
      reviews: [
      {
        rating: 4
      }
    ]
    },
    {
    id: 16,
    name: "Ford F-150 Lariat",
    price: 44999.99,
    category: "trucks",
    description: "F-150 LARIAT DIESEL 3.0 AWD | 3.5L EcoBoost V6 | White Metallic Color | Highly Maintained | Diesel | Crew Cab | Leather Interior | Tow Package | Apple CarPlay/Android Auto | One owner | Clean title | Financing available.",
    images: [
      "/images/truck_1.jpg",
"/images/truck_2.jpg",
"/images/truck_3.jpg",
"/images/truck_4.jpg",
"/images/truck_5.jpg",
"/images/truck_6.jpg",
"/images/truck_7.jpg",
"/images/truck_8.jpg",
"/images/truck_9.jpg",
"/images/truck_10.jpg",
"/images/truck_11.jpg",
"/images/truck_12.jpg",
"/images/truck_13.jpg",
"/images/truck_14.jpg",
"/images/truck_15.jpg",
"/images/truck_16.jpg",
"/images/truck_17.jpg",
"/images/truck_18.jpg",
"/images/truck_19.jpg",
"/images/truck_20.jpg",
"/images/truck_21.jpg",
"/images/truck_22.jpg",
"/images/truck_23.jpg",
"/images/truck_24.jpg",
"/images/truck_25.jpg",
"/images/truck_26.jpg",
"/images/truck_27.jpg",
"/images/truck_28.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "FRD-F150-023",
    brand: "Ford",
    rating: {
      value: 4.7,
      count: 42
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
 {
    id: 17,
    name: "Honda CR-V Executive",
    price: 22499.99,
    category: "cars",
    description: "2021 Honda CR-V Executive | Silver Metallic | Used | Well Maintained | 1.5L Turbocharged Petrol Engine | Intelligent All-Wheel Drive (AWD) | CVT Automatic Transmission | Panoramic Sunroof | Head-Up Display (HUD) | Heated Front Seats | Honda Sensing Safety Suite | Leather-Appointed Interior | Dual-Zone Climate Control | Motion-Activated Power Tailgate | Premium Audio System | Low Mileage | Accident-Free | Warranty: 12 Months Comprehensive",
    images: [
      "/images/suv_1.jpg",
      "/images/suv_2.jpg",
      "/images/suv_3.jpg",
      "/images/suv_4.jpg",
      "/images/suv_5.jpg",
      "/images/suv_6.jpg",
      "/images/suv_7.jpg",
      "/images/suv_8.jpg",
      "/images/suv_9.jpg",
      "/images/suv_10.jpg",
      "/images/suv_11.jpg",
      "/images/suv_12.jpg",
      "/images/suv_13.jpg",
      "/images/suv_14.jpg",
      "/images/suv_15.jpg",
      "/images/suv_16.jpg",
      "/images/suv_17.jpg",
      "/images/suv_18.jpg",
      "/images/suv_19.jpg",
      "/images/suv_20.jpg",
      "/images/suv_21.jpg",
      "/images/suv_22.jpg",
      "/images/suv_23.jpg",
      "/images/suv_24.jpg",
      "/images/suv_25.jpg",
      "/images/suv_26.jpg",
      "/images/suv_27.jpg",
      "/images/suv_28.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "HND-CRV-21X",
    brand: "Honda",
    rating: {
      value: 4.5,
      count: 9
    },
    reviews: [
      {
        rating: 4
      }
    ]
},
{
    id: 18,
    name: "Tesla Model Y AWD",
    price: 39499.99,
    category: "cars",
    description: "2022 Tesla Model Y Long Range | White Metallic | Used | Excellent Condition | Dual Motor All-Wheel Drive | Fully Electric SUV | ~358 Mile EPA Range | Single-Speed Automatic | Autopilot with Full Self-Driving Capability (optional) | All-Glass Panoramic Roof | Premium Vegan Leather Interior | Heated Front & Rear Seats | 15-Inch Touchscreen with Navigation | Premium Audio | Supercharging Capability | Zero Emissions | Warranty: 12 Months Comprehensive",
    images: [
      "/images/tsy_1.jpg",
      "/images/tsy_2.jpg",
      "/images/tsy_3.jpg",
      "/images/tsy_4.jpg",
      "/images/tsy_5.jpg",
      "/images/tsy_6.jpg",
      "/images/tsy_7.jpg",
      "/images/tsy_8.jpg",
      "/images/tsy_9.jpg",
      "/images/tsy_10.jpg",
      "/images/tsy_11.jpg",
      "/images/tsy_12.jpg",
      "/images/tsy_13.jpg",
      "/images/tsy_14.jpg",
      "/images/tsy_15.jpg",
      "/images/tsy_16.jpg",
      "/images/tsy_17.jpg",
      "/images/tsy_18.jpg",
      "/images/tsy_19.jpg",
      "/images/tsy_20.jpg",
      "/images/tsy_21.jpg",
      "/images/tsy_22.jpg",
      "/images/tsy_23.jpg",
      "/images/tsy_24.jpg",
      "/images/tsy_25.jpg",
      "/images/tsy_26.jpg",
      "/images/tsy_27.jpg",
      "/images/tsy_28.jpg",
      "/images/tsy_29.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "TSL-MY-22LR",
    brand: "Tesla",
    rating: {
      value: 4.8,
      count: 53
    },
    reviews: [
      {
        rating: 4
      }
    ]
},
  {
    id: 19,
    name: "Toyota RAV4 Hybrid 4x4",
    price: 33999.99,
    category: "cars",
    description: "2022 Toyota RAV4 Hybrid 4x4 Style Selection | White Metallic | Used | Well Maintained | Hybrid Powertrain for Excellent Fuel Economy | Intelligent All-Wheel Drive (AWD) | CVT Automatic Transmission | 360° Surround View Camera | Apple CarPlay & Android Auto | Toyota Safety Sense Package | Adaptive Cruise Control | Lane Keeping Assist | Leather-Appointed Interior | Heated Front Seats | Dual-Zone Climate Control | Power Tailgate | Certified Pre-Owned | Warranty: 12 Months Comprehensive",
    images: [
      "/images/toy_rav4_1.jpg",
      "/images/toy_rav4_2.jpg",
      "/images/toy_rav4_3.jpg",
      "/images/toy_rav4_4.jpg",
      "/images/toy_rav4_5.jpg",
      "/images/toy_rav4_6.jpg",
      "/images/toy_rav4_7.jpg",
      "/images/toy_rav4_8.jpg",
      "/images/toy_rav4_9.jpg",
      "/images/toy_rav4_10.jpg",
      "/images/toy_rav4_11.jpg",
      "/images/toy_rav4_12.jpg",
      "/images/toy_rav4_13.jpg",
      "/images/toy_rav4_14.jpg",
      "/images/toy_rav4_15.jpg",
      "/images/toy_rav4_16.jpg",
      "/images/toy_rav4_17.jpg",
      "/images/toy_rav4_18.jpg",
      "/images/toy_rav4_19.jpg",
      "/images/toy_rav4_20.jpg",
      "/images/toy_rav4_21.jpg",
      "/images/toy_rav4_22.jpg",
      "/images/toy_rav4_23.jpg",
      "/images/toy_rav4_24.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "TYT-RAV4H-22",
    brand: "Toyota",
    rating: {
      value: 4.6,
      count: 18
    },
    reviews: [
      {
        rating: 4
      }
    ]
},
{
    id: 20,
    name: "Chevrolet Silverado ZR2",
    price: 83999.99,
    category: "trucks",
    description: "2025 Chevrolet Silverado ZR2 3LT | Black Metallic | Used | Powerful 6.2L V8 Engine | 10-Speed Automatic Transmission | 4x4 Off-Road Capability | ZR2 Off-Road Suspension Package | Tow/Haul Mode with 3.5t Trailering Capacity | Double Cab | Spray-On Bedliner | Skid Plates & Off-Road Protection | Premium Leather-Appointed Interior | Heated & Ventilated Front Seats | Dual-Zone Climate Control | Bose Premium Audio | Apple CarPlay & Android Auto | Advanced Safety Features | Local Trade-In | Well Maintained | Warranty: 12 Months Comprehensive",
    images: [
      "/images/chevy_1.jpg",
      "/images/chevy_2.jpg",
      "/images/chevy_3.jpg",
      "/images/chevy_4.jpg",
      "/images/chevy_5.jpg",
      "/images/chevy_6.jpg",
      "/images/chevy_7.jpg",
      "/images/chevy_8.jpg",
      "/images/chevy_9.jpg",
      "/images/chevy_10.jpg",
      "/images/chevy_11.jpg",
      "/images/chevy_12.jpg",
      "/images/chevy_13.jpg",
      "/images/chevy_14.jpg",
      "/images/chevy_15.jpg",
      "/images/chevy_16.jpg",
      "/images/chevy_17.jpg",
      "/images/chevy_18.jpg",
      "/images/chevy_19.jpg",
      "/images/chevy_20.jpg",
      "/images/chevy_21.jpg",
      "/images/chevy_22.jpg",
      "/images/chevy_23.jpg",
      "/images/chevy_24.jpg",
      "/images/chevy_25.jpg",
      "/images/chevy_26.jpg",
      "/images/chevy_27.jpg",
      "/images/chevy_28.jpg",
      "/images/chevy_29.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "CHV-SLV-ZR2-25",
    brand: "Chevrolet",
    rating: {
      value: 4.3,
      count: 67
    },
    reviews: [
      {
        rating: 4
      }
    ]
},
{
    id: 21,
    name: "Jeep Wrangler Sky One-Touch",
    price: 38999.99,
    category: "cars",
    description: "2021 Jeep Wrangler Unlimited Sahara | Grey Metallic | Used | Well Maintained | 3.6L V6 Engine | 8-Speed Automatic Transmission | Legendary 4x4 Off-Road Capability | Sky One-Touch Power Top | Leather-Trimmed Seating | Cold Weather Group with Heated Seats & Steering Wheel | Uconnect Infotainment with Apple CarPlay & Android Auto | Dual-Zone Climate Control | Premium Alpine Audio System | Trail-Rated Durability | Iconic Jeep Style | Warranty: 12 Months Comprehensive",
    images: [
      "/images/jeep_1.jpg",
      "/images/jeep_2.jpg",
      "/images/jeep_3.jpg",
      "/images/jeep_4.jpg",
      "/images/jeep_5.jpg",
      "/images/jeep_6.jpg",
      "/images/jeep_7.jpg",
      "/images/jeep_8.jpg",
      "/images/jeep_9.jpg",
      "/images/jeep_10.jpg",
      "/images/jeep_11.jpg",
      "/images/jeep_12.jpg",
      "/images/jeep_13.jpg",
      "/images/jeep_14.jpg",
      "/images/jeep_15.jpg",
      "/images/jeep_16.jpg",
      "/images/jeep_17.jpg",
      "/images/jeep_18.jpg",
      "/images/jeep_19.jpg",
      "/images/jeep_20.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "JEP-WRN-21SH",
    brand: "Jeep",
    rating: {
      value: 4.4,
      count: 9
    },
    reviews: [
      {
        rating: 4
      }
    ]
},
{
    id: 22,
    name: "Porsche Boxster S",
    price: 23499.99,
    category: "cars",
    description: "2004 Porsche Boxster S | Grey Metallic | Used | Well Maintained | 2.5L Turbocharged 4-Cylinder Boxer Engine | Rear-Wheel Drive (RWD) | 7-Speed PDK Automatic Transmission | Convertible Soft-Top | Leather Sport Seats | Heated Front Seats | Porsche Navigation | BOSE Surround Sound System | Sport Chrono Package | Dual-Zone Climate Control | Premium Interior in Leather | Iconic Roadster Design | Warranty: 12 Months Comprehensive",
    images: [
      "/images/s_out_1.jpg",
      "/images/s_out_2.jpg",
      "/images/s_out_3.jpg",
      "/images/s_out_4.jpg",
      "/images/s_out_5.jpg",
      "/images/s_out_6.jpg",
      "/images/s_out_7.jpg",
      "/images/s_out_8.jpg",
      "/images/s_out_9.jpg",
      "/images/s_out_10.jpg",
      "/images/s_out_11.jpg",
      "/images/s_out_12.jpg",
      "/images/s_out_13.jpg",
      "/images/s_out_14.jpg",
      "/images/s_out_15.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "POR-BOX-18S",
    brand: "Porsche",
    rating: {
      value: 4.7,
      count: 27
    },
    reviews: [
      {
        rating: 4
      }
    ]
},
{
id: 23,
name: "Toyota Tundra Hybrid TRD",
price: 71999.99,
category: "trucks",
description: "2026 Toyota Tundra Hybrid TRD Pro | White Exterior | Brand New | Built for B2B Export | 3.5L Twin-Turbo V6 Hybrid Engine | Intelligent 4x4 System | 10-Speed Automatic Transmission | TRD Pro Off-Road Suspension | Fox Performance Shocks | Aggressive Black Grille | Premium Leather-Trimmed Interior | Heated & Ventilated Seats | Panoramic Moonroof | Toyota Safety Sense 3.0 | JBL Premium Audio | Tow Package | Advanced Trail Cameras | Warranty: 3 Years/36,000 Miles Comprehensive",
images: [
"/images/tundra_1.jpg",
"/images/tundra_2.jpg",
"/images/tundra_3.jpg",
"/images/tundra_4.jpg",
"/images/tundra_5.jpg",
"/images/tundra_6.jpg",
"/images/tundra_7.jpg",
"/images/tundra_8.jpg",
"/images/tundra_9.jpg",
"/images/tundra_10.jpg",
"/images/tundra_11.jpg",
"/images/tundra_12.jpg",
"/images/tundra_13.jpg",
"/images/tundra_14.jpg"
],
highDemand: false,
sold: false,
quantity: 1,
sku: "TOY-TUN-26TRD",
brand: "Toyota",
rating: {
value: 4.9,
count: 32
},
reviews: [
{
rating: 5
}
]
},
{
id: 24,
name: "Chevrolet Camaro Coupe Schmidt Drago",
price: 29999.99,
category: "cars",
description: "2024 Chevrolet Camaro Coupe Schmidt Drago | Black Metallic | Used | Performance-Oriented | 6.2L V8 Engine | 10-Speed Automatic | Rear-Wheel Drive | 20-Inch Schmidt Drago Wheels | GRAIL Performance Exhaust (Abgasanlage) | Aerodynamic Widebody Styling | Leather-Appointed Sports Seats | Dual-Zone Climate Control | Brembo High-Performance Brakes | Advanced Infotainment with Apple CarPlay & Android Auto | Custom Drive Modes | Premium Audio System | Warranty: Balance of Factory Coverage",
images: [
"/images/camaro_1.jpg",
"/images/camaro_2.jpg",
"/images/camaro_3.jpg",
"/images/camaro_4.jpg",
"/images/camaro_5.jpg",
"/images/camaro_6.jpg",
"/images/camaro_7.jpg",
"/images/camaro_8.jpg",
"/images/camaro_9.jpg",
"/images/camaro_10.jpg",
"/images/camaro_11.jpg",
"/images/camaro_12.jpg",
"/images/camaro_13.jpg",
"/images/camaro_14.jpg",
"/images/camaro_15.jpg",
"/images/camaro_16.jpg",
"/images/camaro_17.jpg",
"/images/camaro_18.jpg",
"/images/camaro_19.jpg",
"/images/camaro_20.jpg",
"/images/camaro_21.jpg",
"/images/camaro_22.jpg",
"/images/camaro_23.jpg",
"/images/camaro_24.jpg",
"/images/camaro_25.jpg",
"/images/camaro_26.jpg",
"/images/camaro_27.jpg",
"/images/camaro_28.jpg",
"/images/camaro_29.jpg",
"/images/camaro_30.jpg",
"/images/camaro_31.jpg",
"/images/camaro_32.jpg",
"/images/camaro_33.jpg"
],
highDemand: false,
sold: false,
quantity: 1,
sku: "CHV-CAM-25SD",
brand: "Chevrolet",
rating: {
value: 4.7,
count: 93
},
reviews: [
{
rating: 5
}
]
},
{
id: 25,
name: "Dodge RAM 1500 Crew Cab Limited Night",
price: 87999.99,
category: "trucks",
description: "2025 Dodge RAM 1500 Limited Night Edition | Black Metallic | Used | Crew Cab 4x4 | 3.0L EcoDiesel V6 Engine | 8-Speed Automatic Transmission | Premium Blacked-Out Styling Package | LED Adaptive Headlights | Panoramic Sunroof | 12-Inch Uconnect Touchscreen | Harman Kardon Premium Audio | Ventilated Leather Seats | Heated Rear Seats | Adaptive Cruise Control | Active Park Assist | Multi-Function Tailgate | Class-Leading Towing Capacity | Warranty: Balance of Factory Coverage",
images: [
"/images/ram_limited_1.jpg",
"/images/ram_limited_2.jpg",
"/images/ram_limited_3.jpg",
"/images/ram_limited_4.jpg",
"/images/ram_limited_5.jpg",
"/images/ram_limited_6.jpg",
"/images/ram_limited_7.jpg",
"/images/ram_limited_8.jpg",
"/images/ram_limited_9.jpg",
"/images/ram_limited_10.jpg",
"/images/ram_limited_11.jpg",
"/images/ram_limited_12.jpg",
"/images/ram_limited_13.jpg",
"/images/ram_limited_14.jpg",
"/images/ram_limited_15.jpg",
"/images/ram_limited_16.jpg",
"/images/ram_limited_17.jpg",
"/images/ram_limited_18.jpg",
"/images/ram_limited_19.jpg",
"/images/ram_limited_20.jpg",
"/images/ram_limited_21.jpg",
"/images/ram_limited_22.jpg",
"/images/ram_limited_23.jpg",
"/images/ram_limited_24.jpg",
"/images/ram_limited_25.jpg",
"/images/ram_limited_26.jpg",
"/images/ram_limited_27.jpg"
],
highDemand: false,
sold: false,
quantity: 1,
sku: "DOD-RAM-24LN",
brand: "Dodge",
rating: {
value: 4.8,
count: 16
},
reviews: [
{
rating: 5
}
]
},
{
id: 26,
name: "Ford Mustang Mach-E AWD",
price: 27999.99,
category: "cars",
description: "2023 Ford Mustang Mach-E | AWD 75 kWh Battery | Used | 273kW (365 HP) Electric Performance | Grey Metallic Exterior | Premium Leather LE Package | Extended Range ~290 Miles | BlueCruise Hands-Free Driving | 15.5-Inch Touchscreen with SYNC 4A | Panoramic Glass Roof | Heated & Ventilated Front Seats | Bang & Olufsen Premium Audio | Wireless Apple CarPlay & Android Auto | Fast-Charging Capability | Advanced Driver Assistance | Warranty: Balance of Factory Coverage",
images: [
"/images/mustang_mach_e_1.jpg",
"/images/mustang_mach_e_2.jpg",
"/images/mustang_mach_e_3.jpg",
"/images/mustang_mach_e_4.jpg",
"/images/mustang_mach_e_5.jpg",
"/images/mustang_mach_e_6.jpg",
"/images/mustang_mach_e_7.jpg",
"/images/mustang_mach_e_8.jpg",
"/images/mustang_mach_e_9.jpg",
"/images/mustang_mach_e_10.jpg",
"/images/mustang_mach_e_11.jpg",
"/images/mustang_mach_e_12.jpg",
"/images/mustang_mach_e_13.jpg",
"/images/mustang_mach_e_14.jpg",
"/images/mustang_mach_e_15.jpg",
"/images/mustang_mach_e_16.jpg",
"/images/mustang_mach_e_17.jpg",
"/images/mustang_mach_e_18.jpg",
"/images/mustang_mach_e_19.jpg",
"/images/mustang_mach_e_20.jpg",
"/images/mustang_mach_e_21.jpg",
"/images/mustang_mach_e_22.jpg",
"/images/mustang_mach_e_23.jpg",
"/images/mustang_mach_e_24.jpg"
],
highDemand: true,
sold: false,
quantity: 1,
sku: "FRD-MACH-E-23",
brand: "Ford",
rating: {
value: 4.6,
count: 44
},
reviews: [
{
rating: 4
}
]
},
{
  id: 27,
  name: "Chevrolet Malibu SS",
  price: 52799.99,
  category: "cars",
  description: "1965 Chevrolet Malibu SS | Vintage Classic | Creme de la Chrome Exterior | Well-Maintained & Slightly Used | Original V8 Engine | Automatic Transmission | Iconic Sport Styling | Clean Interior | Timeless Design | Collector’s Choice | Excellent Condition for Age | Runs Smoothly & Ready to Drive",
images: [
"/images/malibu_1.jpg",
"/images/malibu_2.jpg",
"/images/malibu_3.jpg",
"/images/malibu_4.jpg",
"/images/malibu_5.jpg",
"/images/malibu_6.jpg",
"/images/malibu_7.jpg",
"/images/malibu_8.jpg",
"/images/malibu_9.jpg",
"/images/malibu_10.jpg",
"/images/malibu_11.jpg",
"/images/malibu_12.jpg",
"/images/malibu_13.jpg",
"/images/malibu_14.jpg",
"/images/malibu_15.jpg",
"/images/malibu_16.jpg",
"/images/malibu_17.jpg",
"/images/malibu_18.jpg"
],
highDemand: true,
sold: false,
quantity: 1,
sku: "CHV-MLB-65SS",
brand: "Chevrolet",
rating: {
value: 4.8,
count: 49
},
reviews: [
{
rating: 4
}
]
},
{
id: 28,
name: "Dodge Challenger R/T",
price: 56999.99,
category: "cars",
description: "2023 Dodge Challenger R/T Scat Pack | 6.4L HEMI V8 | Used | Widebody Last Call Edition | Purple Metallic Exterior | 485 HP | Tremec 6-Speed Manual or 8-Speed Automatic | Launch Control | Performance Hood with Air Intakes | Premium Alcantara & Leather Seats | Uconnect Performance Pages | Brembo High-Performance Brakes | Widebody Fender Flares | Dual Exhaust | Iconic Muscle Car Styling | Warranty: Balance of Factory Coverage",
images: [
"/images/challenger_1.jpg",
"/images/challenger_2.jpg",
"/images/challenger_3.jpg",
"/images/challenger_4.jpg",
"/images/challenger_5.jpg",
"/images/challenger_6.jpg",
"/images/challenger_7.jpg",
"/images/challenger_8.jpg",
"/images/challenger_9.jpg",
"/images/challenger_10.jpg",
"/images/challenger_11.jpg",
"/images/challenger_12.jpg",
"/images/challenger_13.jpg",
"/images/challenger_14.jpg",
"/images/challenger_15.jpg",
"/images/challenger_17.jpg"
],
highDemand: true,
sold: false,
quantity: 1,
sku: "DOD-CHL-23RT",
brand: "Dodge",
rating: {
value: 4.9,
count: 58
},
reviews: [
{
rating: 5
}
]
},
{
  id: 29,
  name: "Volkswagen Jetta",
  price: 6799.99,
  category: "cars",
  description: "2007 Volkswagen Jetta Comfortline | Silver Metallic Exterior | 1.6L Engine | 6-Speed Automatic | Comfortable Cloth Seats | Classic Interior Design | Premium Factory Sound System | Air Conditioning | Power Windows & Mirrors | Reliable & Fuel Efficient | Accident-Free | Well-Maintained",
images: [
"/images/jetta_1.jpg",
"/images/jetta_2.jpg",
"/images/jetta_3.jpg",
"/images/jetta_4.jpg",
"/images/jetta_5.jpg",
"/images/jetta_6.jpg",
"/images/jetta_7.jpg",
"/images/jetta_8.jpg",
"/images/jetta_9.jpg",
"/images/jetta_10.jpg",
"/images/jetta_11.jpg",
"/images/jetta_12.jpg",
"/images/jetta_13.jpg",
"/images/jetta_14.jpg",
"/images/jetta_15.jpg",
"/images/jetta_16.jpg",
"/images/jetta_17.jpg",
"/images/jetta_18.jpg",
"/images/jetta_19.jpg",
"/images/jetta_20.jpg"
],
highDemand: false,
sold: false,
quantity: 1,
sku: "VW-JET-07CF",
brand: "Volkswagen",
rating: {
value: 4.4,
count: 5
},
reviews: [
{
rating: 4
}
]
},
{
id: 30,
name: "Lexus LM 350h Luxury",
price: 141199.99,
category: "cars",
description: "2024 Lexus LM 350h Luxury | Black Exterior | Hybrid Luxury Minivan | 2.5L Hybrid Engine | E-CVT Automatic Transmission | Semi-Aniline Leather Captain Seats | Mark Levinson Premium Surround Sound | Adaptive Variable Suspension | Panoramic View Monitor | Lexus Safety System+ | Executive Rear Lounge Seating | Fold-Out Ottoman & Touchscreen Controls | Ultra-Quiet Ride | Warranty: 8 Months Remaining",
images: [
"/images/lexus_lm_1.jpg",
"/images/lexus_lm_2.jpg",
"/images/lexus_lm_3.jpg",
"/images/lexus_lm_4.jpg",
"/images/lexus_lm_5.jpg",
"/images/lexus_lm_6.jpg",
"/images/lexus_lm_7.jpg",
"/images/lexus_lm_8.jpg",
"/images/lexus_lm_9.jpg",
"/images/lexus_lm_10.jpg",
"/images/lexus_lm_11.jpg",
"/images/lexus_lm_12.jpg",
"/images/lexus_lm_13.jpg",
"/images/lexus_lm_14.jpg",
"/images/lexus_lm_15.jpg",
"/images/lexus_lm_16.jpg",
"/images/lexus_lm_17.jpg",
"/images/lexus_lm_18.jpg",
"/images/lexus_lm_19.jpg",
"/images/lexus_lm_20.jpg",
"/images/lexus_lm_21.jpg",
"/images/lexus_lm_22.jpg",
"/images/lexus_lm_23.jpg",
"/images/lexus_lm_24.jpg",
"/images/lexus_lm_25.jpg",
"/images/lexus_lm_26.jpg",
"/images/lexus_lm_27.jpg",
"/images/lexus_lm_28.jpg"
],
highDemand: false,
sold: false,
quantity: 1,
sku: "LEX-LM-24LX",
brand: "Lexus",
rating: {
value: 4.7,
count: 9
},
reviews: [
{
rating: 4
}
]
},
{
id: 31,
name: "Dodge Charger AWD",
price: 31499.99,
category: "cars",
description: "2023 Dodge Charger AWD | Green Metallic | Sport-Enhanced with K&N Filter & Alpina Sound Upgrade (+18 HP) | Used | 5.7L HEMI V8 Engine | 8-Speed Automatic Transmission | All-Wheel Drive Performance | Dual Exhaust | Performance Suspension | Apple CarPlay & Android Auto | Premium Cloth Interior | Classic Muscle Car DNA | Warranty: Contact for Details",
images: [
"/images/charger_1.jpg",
"/images/charger_2.jpg",
"/images/charger_3.jpg",
"/images/charger_4.jpg",
"/images/charger_5.jpg",
"/images/charger_6.jpg",
"/images/charger_7.jpg",
"/images/charger_8.jpg",
"/images/charger_9.jpg",
"/images/charger_10.jpg",
"/images/charger_11.jpg",
"/images/charger_12.jpg",
"/images/charger_13.jpg",
"/images/charger_14.jpg",
"/images/charger_15.jpg",
"/images/charger_16.jpg",
"/images/charger_17.jpg",
"/images/charger_18.jpg",
"/images/charger_19.jpg",
"/images/charger_20.jpg",
"/images/charger_21.jpg",
"/images/charger_22.jpg",
"/images/charger_23.jpg",
"/images/charger_24.jpg",
"/images/charger_25.jpg",
"/images/charger_26.jpg"
],
highDemand: true,
sold: false,
quantity: 1,
sku: "DOD-CHG-23AWD",
brand: "Dodge",
rating: {
value: 4.5,
count: 31
},
reviews: [
{
rating: 4
}
]
},
{
id: 32,
name: "Mazda CX-5 Exclusive-Line",
price: 22899.99,
category: "cars",
description: "2023 Mazda CX-5 Exclusive-Line | Black Exterior | Premium Compact SUV | Used | 2.5L Turbocharged Petrol Engine | 6-Speed Automatic Transmission | Front-Wheel Drive | Deep Crystal Blue Mica Finish | Nappa Leather Seats | Bose 10-Speaker Premium Audio | Heated Steering Wheel | 360-Degree View Monitor | Adaptive Cruise Control | Accident-Free | Warranty: 10 Months Comprehensive",
images: [
"/images/cx5_1.jpg",
"/images/cx5_2.jpg",
"/images/cx5_3.jpg",
"/images/cx5_4.jpg",
"/images/cx5_5.jpg",
"/images/cx5_6.jpg",
"/images/cx5_7.jpg",
"/images/cx5_8.jpg",
"/images/cx5_9.jpg",
"/images/cx5_10.jpg",
"/images/cx5_11.jpg",
"/images/cx5_12.jpg",
"/images/cx5_13.jpg",
"/images/cx5_14.jpg",
"/images/cx5_15.jpg",
"/images/cx5_16.jpg",
"/images/cx5_17.jpg",
"/images/cx5_18.jpg",
"/images/cx5_19.jpg",
"/images/cx5_20.jpg",
"/images/cx5_21.jpg",
"/images/cx5_22.jpg",
"/images/cx5_23.jpg",
"/images/cx5_24.jpg",
"/images/cx5_25.jpg",
"/images/cx5_26.jpg",
"/images/cx5_27.jpg",
"/images/cx5_28.jpg"
],
highDemand: false,
sold: false,
quantity: 1,
sku: "MAZ-CX5-23EX",
brand: "Mazda",
rating: {
value: 4.6,
count: 13
},
reviews: [
{
rating: 4
}
]
},
 {
  id: 33,
  name: "GMC Sierra 1500 Denali",
  price: 93399.99,
  category: "trucks",
  description: "2023 GMC Sierra 1500 Denali | Black Exterior | 6.2L V8 LPG Conversion | 10-Speed Automatic Transmission | Denali Premium Trim | Magnetic Ride Control | MultiPro Tailgate | Full 360° Surround View Camera | Bose Premium Audio System | Head-Up Display | Heated & Ventilated Leather Seats | Advanced Safety Assist Package | Power Sunroof | Strong Towing Capacity | Warranty: 12 Months Powertrain",
  images: [
    "/images/gmc_sierra_1.jpg",
    "/images/gmc_sierra_2.jpg",
    "/images/gmc_sierra_3.jpg",
    "/images/gmc_sierra_4.jpg",
    "/images/gmc_sierra_5.jpg",
    "/images/gmc_sierra_6.jpg",
    "/images/gmc_sierra_7.jpg",
    "/images/gmc_sierra_8.jpg",
    "/images/gmc_sierra_9.jpg",
    "/images/gmc_sierra_10.jpg",
    "/images/gmc_sierra_11.jpg",
    "/images/gmc_sierra_12.jpg",
    "/images/gmc_sierra_13.jpg",
    "/images/gmc_sierra_14.jpg",
    "/images/gmc_sierra_15.jpg",
    "/images/gmc_sierra_16.jpg",
    "/images/gmc_sierra_17.jpg",
    "/images/gmc_sierra_18.jpg",
    "/images/gmc_sierra_19.jpg",
    "/images/gmc_sierra_20.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "GMC-SIE-23DN",
  brand: "GMC",
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
  id: 34,
  name: "Volvo XC60 R-Design T8 AWD",
  price: 38959.99,
  category: "cars",
  description: "2022 Volvo XC60 R-Design T8 AWD | White Exterior | Plug-In Hybrid | 2.0L Turbo + Electric Motor | 8-Speed Automatic | All-Wheel Drive | Premium Nappa Leather Interior | Panoramic Sunroof | Head-Up Display | Adaptive Cruise Control (ACC) | Pilot Assist Semi-Autonomous Driving | Bowers & Wilkins Surround Audio | Navigation System | Advanced Safety Suite | Warranty: 7 Months Remaining",
  images: [
    "/images/volvo_xc60_1.jpg",
    "/images/volvo_xc60_2.jpg",
    "/images/volvo_xc60_3.jpg",
    "/images/volvo_xc60_4.jpg",
    "/images/volvo_xc60_5.jpg",
    "/images/volvo_xc60_6.jpg",
    "/images/volvo_xc60_7.jpg",
    "/images/volvo_xc60_8.jpg",
    "/images/volvo_xc60_9.jpg",
    "/images/volvo_xc60_10.jpg",
    "/images/volvo_xc60_11.jpg",
    "/images/volvo_xc60_12.jpg",
    "/images/volvo_xc60_13.jpg",
    "/images/volvo_xc60_14.jpg",
    "/images/volvo_xc60_15.jpg",
    "/images/volvo_xc60_16.jpg",
    "/images/volvo_xc60_17.jpg",
    "/images/volvo_xc60_18.jpg",
    "/images/volvo_xc60_19.jpg",
    "/images/volvo_xc60_20.jpg",
    "/images/volvo_xc60_21.jpg",
    "/images/volvo_xc60_22.jpg",
    "/images/volvo_xc60_23.jpg",
    "/images/volvo_xc60_24.jpg",
    "/images/volvo_xc60_25.jpg",
    "/images/volvo_xc60_26.jpg",
    "/images/volvo_xc60_27.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "VOL-XC60-22RD",
  brand: "Volvo",
  rating: {
    value: 4.6,
    count: 8
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 35,
  name: "Chrysler Pacifica Plug-in Hybrid",
  price: 51999.99,
  category: "cars",
  description: "2023 Chrysler Pacifica Plug-in Hybrid | Grey Metallic Exterior | Used | 3.6L V6 Hybrid Engine | 9-Speed Automatic | Family Minivan | 7-Passenger Seating | Tri-Zone Climate Control | Uconnect Theater System with Dual Rear TVs | Full 360° Camera | Advanced Adaptive Cruise Control (ACC) | Leather Upholstery | Heated & Ventilated Front Seats | Hands-Free Power Sliding Doors | Warranty: 9 Months Comprehensive",
  images: [
    "/images/chrysler_pacifica_1.jpg",
    "/images/chrysler_pacifica_2.jpg",
    "/images/chrysler_pacifica_3.jpg",
    "/images/chrysler_pacifica_4.jpg",
    "/images/chrysler_pacifica_5.jpg",
    "/images/chrysler_pacifica_6.jpg",
    "/images/chrysler_pacifica_7.jpg",
    "/images/chrysler_pacifica_8.jpg",
    "/images/chrysler_pacifica_9.jpg",
    "/images/chrysler_pacifica_10.jpg",
    "/images/chrysler_pacifica_11.jpg",
    "/images/chrysler_pacifica_12.jpg",
    "/images/chrysler_pacifica_13.jpg",
    "/images/chrysler_pacifica_14.jpg",
    "/images/chrysler_pacifica_15.jpg",
    "/images/chrysler_pacifica_16.jpg",
    "/images/chrysler_pacifica_17.jpg",
    "/images/chrysler_pacifica_18.jpg",
    "/images/chrysler_pacifica_19.jpg",
    "/images/chrysler_pacifica_20.jpg",
    "/images/chrysler_pacifica_21.jpg",
    "/images/chrysler_pacifica_22.jpg",
    "/images/chrysler_pacifica_23.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CHR-PAC-23PH",
  brand: "Chrysler",
  rating: {
    value: 4.3,
    count: 10
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 36,
  name: "Acura RDX A-Spec",
  price: 29299.99,
  category: "cars",
  description: "2022 Acura RDX A-Spec | Dark Silver Exterior | Used | 2.0L Turbocharged 4-Cylinder | 10-Speed Automatic Transmission | All-Wheel Drive | Sport-Inspired Design | Alcantara & Leather-Trimmed Seats | ELS Studio Premium Audio | Panoramic Sunroof | Adaptive Dampers | Jewel Eye LED Headlights | Hands-Free Power Tailgate | Warranty: Balance of 4-Year/50,000-Mile Factory Coverage",
  images: [
    "/images/acura_rdx_1.jpg",
    "/images/acura_rdx_2.jpg",
    "/images/acura_rdx_3.jpg",
    "/images/acura_rdx_4.jpg",
    "/images/acura_rdx_5.jpg",
    "/images/acura_rdx_6.jpg",
    "/images/acura_rdx_7.jpg",
    "/images/acura_rdx_8.jpg",
    "/images/acura_rdx_9.jpg",
    "/images/acura_rdx_10.jpg",
    "/images/acura_rdx_11.jpg",
    "/images/acura_rdx_12.jpg",
    "/images/acura_rdx_13.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ACU-RDX-22AS",
  brand: "Acura",
  rating: {
    value: 4.7,
    count: 12
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 37,
  name: "Ford Bronco Badlands",
  price: 54799.99,
  category: "cars",
  description: "2023 Ford Bronco Badlands First Edition | Well-Maintained | Light Blue Exterior | 2.7L EcoBoost V6 | 10-Speed Automatic | e-4WD Advanced Off-Road System | Sasquatch Package with 35-Inch Tires | Removable Doors & Roof | Leather-Trimmed Interior | Trail Turn Assist | Off-Road Navigation | First Edition Badging | Heavy-Duty Suspension | Warranty: 12 Months Coverage",
  images: [
    "/images/ford_bronco_1.jpg",
    "/images/ford_bronco_2.jpg",
    "/images/ford_bronco_3.jpg",
    "/images/ford_bronco_4.jpg",
    "/images/ford_bronco_5.jpg",
    "/images/ford_bronco_6.jpg",
    "/images/ford_bronco_7.jpg",
    "/images/ford_bronco_8.jpg",
    "/images/ford_bronco_9.jpg",
    "/images/ford_bronco_10.jpg",
    "/images/ford_bronco_11.jpg",
    "/images/ford_bronco_12.jpg",
    "/images/ford_bronco_13.jpg",
    "/images/ford_bronco_14.jpg",
    "/images/ford_bronco_15.jpg",
    "/images/ford_bronco_16.jpg",
    "/images/ford_bronco_17.jpg",
    "/images/ford_bronco_18.jpg",
    "/images/ford_bronco_19.jpg",
    "/images/ford_bronco_20.jpg",
    "/images/ford_bronco_21.jpg",
    "/images/ford_bronco_22.jpg",
    "/images/ford_bronco_23.jpg",
    "/images/ford_bronco_24.jpg",
    "/images/ford_bronco_25.jpg",
    "/images/ford_bronco_26.jpg",
    "/images/ford_bronco_27.jpg",
    "/images/ford_bronco_28.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "FRD-BRN-23FE",
  brand: "Ford",
  rating: {
    value: 4.8,
    count: 45
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 38,
  name: "Hyundai Sonata",
  price: 6159.99,
  category: "cars",
  description: "2006 Hyundai Sonata Comfort | Black Exterior | Used | 3.3L Petrol V6 Engine | 5-Speed Automatic Transmission | Comfortable Cloth Seating | Air Conditioning | Power Windows & Mirrors | Premium Factory Audio System | Spacious Interior | Reliable Daily Driver | Accident-Free",
  images: [
    "/images/hyundai_sonata_1.jpg",
    "/images/hyundai_sonata_2.jpg",
    "/images/hyundai_sonata_3.jpg",
    "/images/hyundai_sonata_4.jpg",
    "/images/hyundai_sonata_5.jpg",
    "/images/hyundai_sonata_6.jpg",
    "/images/hyundai_sonata_7.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "HYN-SON-21CF",
  brand: "Hyundai",
  rating: {
    value: 4.4,
    count: 9
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 39,
  name: "Jeep Grand Cherokee 4xe",
  price: 66199.99,
  category: "cars",
  description: "2024 Jeep Grand Cherokee Summit 4xe Plug-in Hybrid | Grey Metallic Exterior | 2.0L Turbocharged Hybrid Engine | 8-Speed Automatic | Luxury Summit Trim | Quadra-Lift Air Suspension | 380 PS Combined Power | Well-Maintained | Panoramic Sunroof | McIntosh Premium Audio | Ventilated Nappa Leather Seats | Full 360° Camera System | Adaptive Cruise Control | Warranty: 11 Months Remaining",
  images: [
    "/images/jeep_grand_cherokee_1.jpg",
    "/images/jeep_grand_cherokee_2.jpg",
    "/images/jeep_grand_cherokee_3.jpg",
    "/images/jeep_grand_cherokee_4.jpg",
    "/images/jeep_grand_cherokee_5.jpg",
    "/images/jeep_grand_cherokee_6.jpg",
    "/images/jeep_grand_cherokee_7.jpg",
    "/images/jeep_grand_cherokee_8.jpg",
    "/images/jeep_grand_cherokee_9.jpg",
    "/images/jeep_grand_cherokee_10.jpg",
    "/images/jeep_grand_cherokee_11.jpg",
    "/images/jeep_grand_cherokee_12.jpg",
    "/images/jeep_grand_cherokee_13.jpg",
    "/images/jeep_grand_cherokee_14.jpg",
    "/images/jeep_grand_cherokee_15.jpg",
    "/images/jeep_grand_cherokee_16.jpg",
    "/images/jeep_grand_cherokee_17.jpg",
    "/images/jeep_grand_cherokee_18.jpg",
    "/images/jeep_grand_cherokee_19.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "JEP-GCH-24SM",
  brand: "Jeep",
  rating: {
    value: 4.5,
    count: 10
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 40,
  name: "Toyota Camry Hybrid",
  price: 28999.99,
  category: "cars",
  description: "2022 Toyota Camry Hybrid Executive | White Exterior | Used | 2.5L VVT-i Hybrid Engine | CVT Automatic Transmission | Luxury Executive Trim | Full Leather Interior | Heated & Ventilated Seats | Panoramic Roof | Head-Up Display | Adaptive Cruise Control | Premium JBL Audio | Bird’s Eye View Camera | Accident-Free | Warranty: 7 Months Limited",
  images: [
    "/images/toyota_camry_1.jpg",
    "/images/toyota_camry_2.jpg",
    "/images/toyota_camry_3.jpg",
    "/images/toyota_camry_4.jpg",
    "/images/toyota_camry_5.jpg",
    "/images/toyota_camry_6.jpg",
    "/images/toyota_camry_7.jpg",
    "/images/toyota_camry_8.jpg",
    "/images/toyota_camry_9.jpg",
    "/images/toyota_camry_10.jpg",
    "/images/toyota_camry_11.jpg",
    "/images/toyota_camry_12.jpg",
    "/images/toyota_camry_13.jpg",
    "/images/toyota_camry_14.jpg",
    "/images/toyota_camry_15.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "TYT-CAM-22HE",
  brand: "Toyota",
  rating: {
    value: 4.6,
    count: 11
  },
  reviews: [
    {
      rating: 4
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
