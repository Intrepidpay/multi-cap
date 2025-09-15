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
      count: 4
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
      count: 11
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
      count: 19
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 5,
    name: "Smart TV 55 inch",
    price: 799.99,
    category: "tv",
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
      id: 6,
      name: "Ford Mustang GT Premium",
      price: 38999.99,
      category: "cars",
      description: "GT Premium Fastback | Race Red Color | Used | Single Owner | Petrol | 10-Speed Automatic | 5.0L V8 Engine | Performance Package | Heated/Cooled Leather Seats | Apple CarPlay/Android Auto | Rear View Camera | combustion engine | Warranty: 12 months included",
      images: [
        "/images/ford_mustang_1.jpg", 
        "/images/ford_mustang_2.jpg", 
        "/images/ford_mustang_3.jpg", 
        "/images/ford_mustang_4.jpg"
        ],
      highDemand: true,
      sold: false,
      quantity: 1,
      sku: "FRD-MST-2022",
      brand: "Ford",
      rating: {
        value: 4.8,
        count: 12
      },
      reviews: [
      {
        rating: 4
      }
    ]
    },
    {
      id: 7,
      name: "Honda Civic Touring",
      price: 24999.99,
      category: "cars",
      description: "Touring Sedan | Aegean Blue Metallic Color | Used | Accident-free | Petrol | CVT Automatic | 1.5L Turbocharged Engine | Heated Front Seats | Leather-Trimmed Interior | Navigation System | Adaptive Cruise Control | combustion engine | Warranty: 6 months limited",
      images: [
        "/images/honda_civic_1.jpg", 
        "/images/honda_civic_2.jpg", 
        "/images/honda_civic_3.jpg", 
        "/images/honda_civic_4.jpg"
        ],
      highDemand: true,
      sold: false,
      quantity: 1,
      sku: "HND-CVC-2021",
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
      name: "Tesla Model 3 Long Range",
      price: 48999.99,
      category: "cars",
      description: "Long Range AWD | Deep Blue Metallic Color | Used | Single Owner | Electric | Single-Speed Automatic | Dual Motor All-Wheel Drive | Autopilot | Premium Interior | Glass Roof | All-Season Tires | electric engine | Warranty: Balance of original 4-year/50,000-mile",
      images: [
        "/images/tesla_model3_1.jpg", 
        "/images/tesla_model3_2.jpg", 
        "/images/tesla_model3_3.jpg", 
        "/images/tesla_model3_4.jpg"
        ],
      highDemand: true,
      sold: false,
      quantity: 1,
      sku: "TSL-MD3-2022",
      brand: "Tesla",
      rating: {
        value: 4.9,
        count: 15
      },
     reviews: [
      {
        rating: 4
      }
    ]
    },
    {
      id: 9,
      name: "Toyota RAV4 XLE Premium",
      price: 28999.99,
      category: "cars",
      description: "XLE Premium AWD | Magnetic Gray Metallic Color | Used | Accident-free | Petrol | 8-Speed Automatic | 2.5L 4-Cylinder Engine | Moonroof | Power Liftgate | SofTex Trimmed Seats | Apple CarPlay/Android Auto | combustion engine | Warranty: 12 months comprehensive",
      images: [
        "/images/toyota_rav4_1.jpg", 
        "/images/toyota_rav4_2.jpg", 
        "/images/toyota_rav4_3.jpg", 
        "/images/toyota_rav4_4.jpg"
        ],
      highDemand: true,
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
      name: "Chevrolet Corvette Stingray",
      price: 67999.99,
      category: "cars",
      description: "Stingray Coupe | Arctic White Color | Used | Low Mileage | Petrol | 8-Speed Dual-Clutch | 6.2L V8 Engine | Z51 Performance Package | GT2 Seats | Front Lift Adjustment | Bose Premium Audio | combustion engine | Warranty: Contact for more info",
      images: [
        "/images/chevrolet_corvette_1.jpg", 
        "/images/chevrolet_corvette_2.jpg", 
        "/images/chevrolet_corvette_3.jpg", 
        "/images/chevrolet_corvette_4.jpg"
        ],
      highDemand: false,
      sold: false,
      quantity: 1,
      sku: "CHV-CVT-2022",
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
      name: "Subaru Outback Touring",
      price: 34999.99,
      category: "cars",
      description: "Touring Trim | Crimson Red Pearl Color | Used | One Owner | Petrol | Lineartronic CVT | 2.4L Turbocharged Engine | Symmetrical All-Wheel Drive | Nappa Leather Seats | Harman Kardon Audio | EyeSight Driver Assist | combustion engine | Warranty: 8 months remaining",
      images: [
        "/images/subaru_outback_1.jpg", 
        "/images/subaru_outback_2.jpg", 
        "/images/subaru_outback_3.jpg", 
        "/images/subaru_outback_4.jpg"
        ],
      highDemand: true,
      sold: false,
      quantity: 1,
      sku: "SBR-OUT-2021",
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
      name: "Jeep Wrangler Sahara",
      price: 41999.99,
      category: "cars",
      description: "Sahara 4WD | Sting-Gray Color | Used | No Accidents | Petrol | 8-Speed Automatic | 3.6L V6 Engine | Body-Color Fender Flares | LED Lighting Group | Cold Weather Group | 8.4-Inch Radio | combustion engine | Warranty: 12 months powertrain",
      images: [
        "/images/jeep_wrangler_1.jpg", 
        "/images/jeep_wrangler_2.jpg", 
        "/images/jeep_wrangler_3.jpg", 
        "/images/jeep_wrangler_4.jpg"
        ],
      highDemand: true,
      sold: false,
      quantity: 1,
      sku: "JEP-WRN-2022",
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
      name: "Audi A4 Premium Plus",
      price: 36999.99,
      category: "cars",
      description: "Premium Plus Quattro | Mythos Black Metallic Color | Used | Clean History | Petrol | 7-Speed Automatic | 2.0L Turbocharged Engine | Virtual Cockpit | Bang & Olufsen Sound System | Heated Seats | Navigation | combustion engine | Warranty: 6 months limited",
      images: ["/images/audi_a4_1.jpg", 
      "/images/audi_a4_2.jpg", 
      "/images/audi_a4_3.jpg", 
      "/images/audi_a4_4.jpg"
      ],
      highDemand: false,
      sold: false,
      quantity: 1,
      sku: "AUD-A4-2021",
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
      name: "Hyundai Tucson Limited",
      price: 31999.99,
      category: "cars",
      description: "Limited AWD | Phantom Black Color | Used | No Damage | Petrol | 8-Speed Automatic | 2.5L 4-Cylinder Engine | Leather Seats | Panoramic Sunroof | Wireless Charging | Highway Driving Assist | combustion engine | Warranty: Balance of 5-year/60,000-mile",
      images: ["/images/hyundai_tucson_1.jpg", "/images/hyundai_tucson_2.jpg", 
      "/images/hyundai_tucson_3.jpg", 
      "/images/hyundai_tucson_4.jpg"
      ],
      highDemand: true,
      sold: false,
      quantity: 1,
      sku: "HYN-TUC-2022",
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
      name: "Nissan Rogue SL",
      price: 29999.99,
      category: "cars",
      description: "SL AWD | Boulder Gray Pearl Color | Used | Well Maintained | Petrol | CVT Automatic | 1.5L Turbocharged Engine | ProPILOT Assist | Leather-Appointed Seats | Motion-Activated Liftgate | Bose Premium Audio | combustion engine | Warranty: 10 months comprehensive",
      images: [
        "/images/nissan_rogue_1.jpg", 
        "/images/nissan_rogue_2.jpg", 
        "/images/nissan_rogue_3.jpg", 
        "/images/nissan_rogue_4.jpg"
        ],
      highDemand: true,
      sold: false,
      quantity: 1,
      sku: "NIS-ROG-2021",
      brand: "Nissan",
      rating: {
        value: 4.3,
        count: 7
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
    price: 52999.99,
    category: "cars",
    description: "2023 Model | 3.5L EcoBoost V6 | 4WD | Crew Cab | Leather Interior | Tow Package | Apple CarPlay/Android Auto | One owner | Clean title | Financing available.",
    images: [
      "/images/truck_001.jpg",
      "/images/truck_002.jpg",
      "/images/truck_003.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 3,
    sku: "FRD-F150-023",
    brand: "Ford",
    rating: {
      value: 4.7,
      count: 142
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 17,
    name: "Honda CR-V EX",
    price: 28999.99,
    category: "cars",
    description: "2021 Model | 1.5L Turbocharged Engine | AWD | Sunroof | Heated Front Seats | Honda Sensing | Low mileage | No accidents | Well-maintained.",
    images: [
      "/images/suv_045.jpg",
      "/images/suv_046.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "HND-CRV-21X",
    brand: "Honda",
    rating: {
      value: 4.5,
      count: 89
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 18,
    name: "Tesla Model 3 Long Range",
    price: 45999.99,
    category: "cars",
    description: "2022 Model | AWD | Electric | ~358 Mile Range | Autopilot | Premium Interior | All-Glass Roof | Supercharging Capable | No gas, no emissions.",
    images: [
      "/images/ev_102.jpg",
      "/images/ev_103.jpg",
      "/images/ev_104.jpg",
      "/images/ev_105.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 2,
    sku: "TSL-M3-22LR",
    brand: "Tesla",
    rating: {
      value: 4.8,
      count: 205
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 19,
    name: "Toyota RAV4 Hybrid XLE",
    price: 33999.99,
    category: "cars",
    description: "2022 Model | Hybrid AWD | Excellent Fuel Economy | Apple CarPlay | Safety Sense | Adaptive Cruise Control | Certified Pre-Owned | Warranty included.",
    images: [
      "/images/toy_rav4_1.jpg",
      "/images/toy_rav4_2.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "TYT-RAV4H-22",
    brand: "Toyota",
    rating: {
      value: 4.6,
      count: 118
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 20,
    name: "Chevrolet Silverado 1500 LT",
    price: 43999.99,
    category: "cars",
    description: "2020 Model | 5.3L V8 | 4WD | Double Cab | Spray-on Bedliner | Trailering Package | Bluetooth | Local trade-in | Ready for work or play.",
    images: [
      "/images/chevy_001.jpg",
      "/images/chevy_002.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "CHV-SLV-20LT",
    brand: "Chevrolet",
    rating: {
      value: 4.3,
      count: 76
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 21,
    name: "Jeep Wrangler Unlimited Sahara",
    price: 38999.99,
    category: "cars",
    description: "2021 Model | 3.6L V6 | 4WD | Sky One-Touch Power Top | Leather Seats | Cold Weather Group | Off-road capable | Iconic style.",
    images: [
      "/images/jeep_101.jpg",
      "/images/jeep_102.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "JEP-WRN-21SH",
    brand: "Jeep",
    rating: {
      value: 4.4,
      count: 93
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 22,
    name: "Subaru Outback Limited",
    price: 31999.99,
    category: "cars",
    description: "2021 Model | 2.5L Boxer Engine | Symmetrical AWD | Eyesight Safety | Heated Leather Seats | Roof Rails | Perfect for adventures | Canadian vehicle.",
    images: [
      "/images/sub_out_1.jpg",
      "/images/sub_out_2.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "SUB-OUT-21L",
    brand: "Subaru",
    rating: {
      value: 4.7,
      count: 127
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 23,
    name: "Ram 1500 Big Horn",
    price: 41999.99,
    category: "cars",
    description: "2022 Model | 3.6L V6 | 4WD | Crew Cab | Uconnect Touchscreen | Dual Exhaust | Comfortable ride | Clean Carfax.",
    images: [
      "/images/ram_01.jpg",
      "/images/ram_02.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 2,
    sku: "RAM-1500-22BH",
    brand: "Ram",
    rating: {
      value: 4.5,
      count: 88
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 24,
    name: "Hyundai Tucson SEL",
    price: 26999.99,
    category: "cars",
    description: "2022 Model | 2.5L Engine | AWD | Heated Seats | Digital Gauge Cluster | Wireless Charging | Modern styling | Great value.",
    images: [
      "/images/hyu_tuc_1.jpg",
      "/images/hyu_tuc_2.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "HYN-TUC-22S",
    brand: "Hyundai",
    rating: {
      value: 4.2,
      count: 64
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 25,
    name: "Nissan Rogue SV",
    price: 27999.99,
    category: "cars",
    description: "2021 Model | 2.5L Engine | AWD | ProPILOT Assist | Zero Gravity Seats | Automatic Emergency Braking | Low mileage | Family friendly.",
    images: [
      "/images/nis_rog_1.jpg",
      "/images/nis_rog_2.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "NIS-ROG-21SV",
    brand: "Nissan",
    rating: {
      value: 4.0,
      count: 57
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 26,
    name: "Ford Mustang Mach-E Premium",
    price: 48999.99,
    category: "cars",
    description: "2023 Model | eAWD | Extended Range Battery | ~290 Mile Range | BlueCruise Hands-Free | Panoramic Glass Roof | Electric performance | Tech forward.",
    images: [
      "/images/ford_emustang_1.jpg",
      "/images/ford_emustang_2.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "FRD-MACH-E-23",
    brand: "Ford",
    rating: {
      value: 4.6,
      count: 134
    },reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 27,
    name: "Chevrolet Malibu Premier",
    price: 22999.99,
    category: "cars",
    description: "Premier Trim | Summit White Color | Used | Clean History | Petrol | 9-Speed Automatic | 1.5L Turbo Engine | Leather-Appointed Seats | Heated Steering Wheel | Dual-Zone Climate Control | 8-Inch Infotainment Screen | combustion engine | Warranty: 6 months limited",
    images: [
      "/images/chevrolet_malibu_1.jpg", 
      "/images/chevrolet_malibu_2.jpg", 
      "/images/chevrolet_malibu_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "CHV-MLB-2021",
    brand: "Chevrolet",
    rating: {
      value: 4.1,
      count: 8
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 28,
    name: "Kia Telluride SX",
    price: 42999.99,
    category: "cars",
    description: "SX Trim | Everlasting Silver Color | Used | One Owner | Petrol | 8-Speed Automatic | 3.8L V6 Engine | Nappa Leather Seats | Harman Kardon Audio | Surround View Monitor | Heated/Ventilated Seats | combustion engine | Warranty: Balance of 5-year/60,000-mile",
    images: [
      "/images/kia_telluride_1.jpg", 
      "/images/kia_telluride_2.jpg", 
      "/images/kia_telluride_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "KIA-TEL-2022",
    brand: "Kia",
    rating: {
      value: 4.8,
      count: 14
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 29,
    name: "Volkswagen Jetta SEL",
    price: 21999.99,
    category: "cars",
    description: "SEL Trim | Pure White Color | Used | No Accidents | Petrol | 8-Speed Automatic | 1.5L Turbo Engine | Digital Cockpit | BeatsAudio System | Adaptive Cruise Control | Heated Front Seats | combustion engine | Warranty: 12 months comprehensive",
    images: [
      "/images/vw_jetta_1.jpg", 
      "/images/vw_jetta_2.jpg", 
      "/images/vw_jetta_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "VW-JET-2021",
    brand: "Volkswagen",
    rating: {
      value: 4.3,
      count: 7
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 30,
    name: "Lexus ES 350 Luxury",
    price: 41999.99,
    category: "cars",
    description: "Luxury Trim | Ultrasonic Blue Mica 2.0 Color | Used | Well Maintained | Petrol | 8-Speed Automatic | 3.5L V6 Engine | Mark Levinson Audio | Semi-Aniline Leather Seats | Adaptive Variable Suspension | Panoramic View Monitor | combustion engine | Warranty: 8 months remaining",
    images: [
      "/images/lexus_es_1.jpg", 
      "/images/lexus_es_2.jpg", 
      "/images/lexus_es_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "LEX-ES-2021",
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
    name: "Dodge Charger R/T",
    price: 34999.99,
    category: "cars",
    description: "R/T Trim | Go Mango Color | Used | No Modifications | Petrol | 8-Speed Automatic | 5.7L HEMI V8 Engine | Performance Suspension | Apple CarPlay/Android Auto | Dual Exhaust | Premium Cloth Seats | combustion engine | Warranty: Contact for details",
    images: [
      "/images/dodge_charger_1.jpg", 
      "/images/dodge_charger_2.jpg", 
      "/images/dodge_charger_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "DOD-CHG-2022",
    brand: "Dodge",
    rating: {
      value: 4.5,
      count: 11
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 32,
    name: "Mazda CX-5 Signature",
    price: 32999.99,
    category: "cars",
    description: "Signature Trim | Deep Crystal Blue Mica Color | Used | Accident-free | Petrol | 6-Speed Automatic | 2.5L Turbo Engine | Nappa Leather Seats | Bose Audio | Heated Steering Wheel | 360-Degree View Monitor | combustion engine | Warranty: 10 months comprehensive",
    images: [
      "/images/mazda_cx5_1.jpg", 
      "/images/mazda_cx5_2.jpg", 
      "/images/mazda_cx5_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "MAZ-CX5-2022",
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
    price: 51999.99,
    category: "cars",
    description: "Denali Trim | Dark Sky Metallic Color | Used | One Owner | Petrol | 10-Speed Automatic | 5.3L V8 Engine | Magnetic Ride Control | MultiPro Tailgate | Heated/Ventilated Seats | Premium Infotainment System | combustion engine | Warranty: 12 months powertrain",
    images: [
      "/images/gmc_sierra_1.jpg", 
      "/images/gmc_sierra_2.jpg", 
      "/images/gmc_sierra_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "GMC-SIE-2021",
    brand: "GMC",
    rating: {
      value: 4.4,
      count: 6
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 34,
    name: "Volvo XC60 Inscription",
    price: 38999.99,
    category: "cars",
    description: "Inscription Trim | Pine Grey Metallic Color | Used | No Damage | Petrol | 8-Speed Automatic | 2.0L Turbo Engine | Nappa Leather Seats | Bowers & Wilkins Audio | Panoramic Sunroof | Pilot Assist | combustion engine | Warranty: 7 months remaining",
    images: [
      "/images/volvo_xc60_1.jpg", 
      "/images/volvo_xc60_2.jpg", 
      "/images/volvo_xc60_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "VOL-XC60-2021",
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
    name: "Chrysler Pacifica Touring L",
    price: 31999.99,
    category: "cars",
    description: "Touring L Trim | Brilliant Black Crystal Pearl Color | Used | Family Owned | Petrol | 9-Speed Automatic | 3.6L V6 Engine | Stow 'n Go Seating | Tri-Zone Temperature Control | Uconnect Theater | SafetyTec Package | combustion engine | Warranty: 9 months comprehensive",
    images: [
      "/images/chrysler_pacifica_1.jpg", 
      "/images/chrysler_pacifica_2.jpg", 
      "/images/chrysler_pacifica_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "CHR-PAC-2021",
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
    price: 39999.99,
    category: "cars",
    description: "A-Spec Trim | Performance Red Pearl Color | Used | No Accidents | Petrol | 10-Speed Automatic | 2.0L Turbo Engine | Sport Seats | ELS Studio Audio | Adaptive Damper System | Jewel Eye LED Headlights | combustion engine | Warranty: Balance of 4-year/50,000-mile",
    images: [
      "/images/acura_rdx_1.jpg", 
      "/images/acura_rdx_2.jpg", 
      "/images/acura_rdx_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "ACU-RDX-2022",
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
    price: 44999.99,
    category: "cars",
    description: "Badlands Trim | Cactus Gray Color | Used | Off-Road Package | Petrol | 10-Speed Automatic | 2.7L EcoBoost V6 | Sasquatch Package | Leather-Trimmed Seats | 12-Inch Touchscreen | Trail Turn Assist | combustion engine | Warranty: 12 months included",
    images: [
      "/images/ford_bronco_1.jpg", 
      "/images/ford_bronco_2.jpg", 
      "/images/ford_bronco_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "FRD-BRN-2022",
    brand: "Ford",
    rating: {
      value: 4.8,
      count: 15
    }, 
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 38,
    name: "Hyundai Sonata Limited",
    price: 26999.99,
    category: "cars",
    description: "Limited Trim | Hampton Gray Color | Used | Clean History | Petrol | 8-Speed Automatic | 1.6L Turbo Engine | Leather Seats | Sunroof | Hyundai Digital Key | Highway Driving Assist | combustion engine | Warranty: Balance of 5-year/60,000-mile",
    images: [
      "/images/hyundai_sonata_1.jpg", 
      "/images/hyundai_sonata_2.jpg", 
      "/images/hyundai_sonata_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "HYN-SON-2021",
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
    name: "Jeep Grand Cherokee Summit",
    price: 46999.99,
    category: "cars",
    description: "Summit Trim | Velvet Red Pearl Color | Used | Luxury Package | Petrol | 8-Speed Automatic | 3.6L V6 Engine | Quadra-Lift Air Suspension | McIntosh Audio System | Ventilated Seats | Advanced Safety Group | combustion engine | Warranty: 11 months remaining",
    images: [
      "/images/jeep_grand_cherokee_1.jpg", 
      "/images/jeep_grand_cherokee_2.jpg", 
      "/images/jeep_grand_cherokee_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "JEP-GCH-2022",
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
    name: "Toyota Camry XSE",
    price: 28999.99,
    category: "cars",
    description: "XSE Trim | Midnight Black Metallic Color | Used | Well Maintained | Petrol | 8-Speed Automatic | 3.5L V6 Engine | Sport-Tuned Suspension | Heated Seats | 9-Inch Touchscreen | Bird's Eye View Camera | combustion engine | Warranty: 7 months limited",
    images: [
      "/images/toyota_camry_1.jpg", 
      "/images/toyota_camry_2.jpg", 
      "/images/toyota_camry_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "TYT-CAM-2021",
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
  },
  {
    id: 41,
    name: "Subaru Forester Limited",
    price: 30999.99,
    category: "cars",
    description: "Limited Trim | Cascade Green Silica Color | Used | One Owner | Petrol | CVT Automatic | 2.5L Engine | Symmetrical All-Wheel Drive | Leather-Trimmed Seats | Power Rear Gate | EyeSight Driver Assist | combustion engine | Warranty: 8 months comprehensive",
    images: [
      "/images/subaru_forester_1.jpg", 
      "/images/subaru_forester_2.jpg", 
      "/images/subaru_forester_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "SBR-FOR-2021",
    brand: "Subaru",
    rating: {
      value: 4.7,
      count: 13
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 42,
    name: "Nissan Altima Platinum",
    price: 27999.99,
    category: "cars",
    description: "Platinum Trim | Scarlet Ember Tintcoat Color | Used | No Accidents | Petrol | CVT Automatic | 2.0L VC-Turbo Engine | Leather Appointed Seats | ProPILOT Assist | Bose Premium Audio | Heated Steering Wheel | combustion engine | Warranty: 9 months limited",
    images: [
      "/images/nissan_altima_1.jpg", 
      "/images/nissan_altima_2.jpg", 
      "/images/nissan_altima_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "NIS-ALT-2021",
    brand: "Nissan",
    rating: {
      value: 4.2,
      count: 7
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 43,
    name: "Cadillac XT5 Premium Luxury",
    price: 38999.99,
    category: "cars",
    description: "Premium Luxury Trim | Crystal White Tricoat Color | Used | Well Maintained | Petrol | 9-Speed Automatic | 3.6L V6 Engine | Leather Seats | Bose Performance Audio | Adaptive Cruise Control | Hands-Free Power Liftgate | combustion engine | Warranty: 6 months remaining",
    images: [
      "/images/cadillac_xt5_1.jpg", 
      "/images/cadillac_xt5_2.jpg", 
      "/images/cadillac_xt5_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "CAD-XT5-2021",
    brand: "Cadillac",
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
    id: 44,
    name: "Honda Accord Hybrid Touring",
    price: 32999.99,
    category: "cars",
    description: "Touring Trim | Still Night Pearl Color | Used | Clean History | Hybrid | eCVT Automatic | 2.0L Atkinson Cycle Engine | Leather-Trimmed Seats | Head-Up Display | Wireless Phone Charger | Honda Sensing Suite | hybrid engine | Warranty: 10 months comprehensive",
    images: [
      "/images/honda_accord_1.jpg", 
      "/images/honda_accord_2.jpg", 
      "/images/honda_accord_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "HND-ACC-2022",
    brand: "Honda",
    rating: {
      value: 4.7,
      count: 14
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 45,
    name: "Lexus RX 450h Luxury",
    price: 49999.99,
    category: "cars",
    description: "Luxury Trim | Nightfall Mica Color | Used | One Owner | Hybrid | CVT Automatic | 3.5L V6 Hybrid Engine | Semi-Aniline Leather Seats | Mark Levinson Audio | Adaptive Variable Suspension | Panoramic View Monitor | hybrid engine | Warranty: Balance of 6-year/70,000-mile",
    images: [
      "/images/lexus_rx_1.jpg", 
      "/images/lexus_rx_2.jpg", 
      "/images/lexus_rx_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "LEX-RX-2021",
    brand: "Lexus",
    rating: {
      value: 4.8,
      count: 9
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 1046,
    name: "Ford Explorer ST",
    price: 45999.99,
    category: "cars",
    description: "ST Trim | Agate Black Metallic Color | Used | Performance Package | Petrol | 10-Speed Automatic | 3.0L EcoBoost V6 | Sport-Tuned Suspension | ST Leather Seats | Bang & Olufsen Audio | Ford Co-Pilot360 Assist+ | combustion engine | Warranty: 12 months included",
    images: [
      "/images/ford_explorer_1.jpg", 
      "/images/ford_explorer_2.jpg", 
      "/images/ford_explorer_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "FRD-EXP-2022",
    brand: "Ford",
    rating: {
      value: 4.6,
      count: 12
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 46,
    name: "Audi Q7 Prestige",
    price: 54999.99,
    category: "cars",
    description: "Prestige Trim | Glacier White Metallic Color | Used | One Owner | Petrol | 8-Speed Automatic | 3.0L V6 Engine | Valcona Leather Seats | Bang & Olufsen 3D Audio | Adaptive Air Suspension | Virtual Cockpit | combustion engine | Warranty: 7 months remaining",
    images: [
      "/images/audi_q7_1.jpg", 
      "/images/audi_q7_2.jpg", 
      "/images/audi_q7_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "AUD-Q7-2021",
    brand: "Audi",
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
    id: 47,
    name: "BMW X5 xDrive40i",
    price: 57999.99,
    category: "cars",
    description: "xDrive40i Trim | Carbon Black Metallic Color | Used | Well Maintained | Petrol | 8-Speed Automatic | 3.0L Turbo I6 Engine | Vernasca Leather Seats | Panoramic Sky Lounge Roof | Harman Kardon Audio | Parking Assistance Package | combustion engine | Warranty: 9 months comprehensive",
    images: [
      "/images/bmw_x5_1.jpg",
      "/images/bmw_x5_2.jpg", 
      "/images/bmw_x5_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "BMW-X5-2021",
    brand: "BMW",
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
    id: 48,
    name: "Mercedes-Benz C-Class AMG Line",
    price: 41999.99,
    category: "cars",
    description: "AMG Line Trim | Selenite Grey Metallic Color | Used | No Accidents | Petrol | 9-Speed Automatic | 2.0L Turbo Engine | AMG Body Styling | MB-Tex/Dinamica Seats | Burmester Surround Sound | Multibeam LED Headlights | combustion engine | Warranty: 6 months limited",
    images: [
      "/images/mercedes_c_1.jpg", 
      "/images/mercedes_c_2.jpg", 
      "/images/mercedes_c_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "MB-C-2022",
    brand: "Mercedes-Benz",
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
    id: 49,
    name: "Porsche Macan S",
    price: 59999.99,
    category: "cars",
    description: "S Trim | Carmine Red Color | Used | Performance Pack | Petrol | 7-Speed PDK Automatic | 3.0L V6 Turbo Engine | Sport Chrono Package | 14-Way Power Seats | Bose Surround Sound | Porsche Active Suspension Management | combustion engine | Warranty: 11 months remaining",
    images: [
      "/images/porsche_macan_1.jpg", 
      "/images/porsche_macan_2.jpg", 
      "/images/porsche_macan_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "POR-MAC-2021",
    brand: "Porsche",
    rating: {
      value: 4.8,
      count: 7
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 50,
    name: "Land Rover Range Rover Sport HSE",
    price: 64999.99,
    category: "cars",
    description: "HSE Trim | Santorini Black Metallic Color | Used | Luxury Package | Petrol | 8-Speed Automatic | 3.0L I6 Engine | Windsor Leather Seats | Meridian Surround Sound | Adaptive Dynamics | Terrain Response 2 | combustion engine | Warranty: 8 months comprehensive",
    images: [
      "/images/range_rover_1.jpg", 
      "/images/range_rover_2.jpg", 
      "/images/range_rover_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "LR-RRS-2021",
    brand: "Land Rover",
    rating: {
      value: 4.6,
      count: 10
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 51,
    name: "Jaguar F-PACE S",
    price: 48999.99,
    category: "cars",
    description: "S Trim | Fuji White Color | Used | Sport Package | Petrol | 8-Speed Automatic | 3.0L Turbo Engine | Sport Seats | Meridian Audio | Configurable Dynamics | All-Surface Progress Control | combustion engine | Warranty: 7 months remaining",
    images: [
      "/images/jaguar_fpace_1.jpg", 
      "/images/jaguar_fpace_2.jpg", 
      "/images/jaguar_fpace_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "JAG-FP-2021",
    brand: "Jaguar",
    rating: {
      value: 4.4,
      count: 6
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 52,
    name: "Volvo S90 Inscription",
    price: 38999.99,
    category: "cars",
    description: "Inscription Trim | Osmium Grey Metallic Color | Used | Luxury Package | Petrol | 8-Speed Automatic | 2.0L Turbo Engine | Nappa Leather Seats | Bowers & Wilkins Audio | Four-Zone Climate Control | Pilot Assist | combustion engine | Warranty: 9 months comprehensive",
    images: [
      "/images/volvo_s90_1.jpg", 
      "/images/volvo_s90_2.jpg", 
      "/images/volvo_s90_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "VOL-S90-2021",
    brand: "Volvo",
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
    id: 53,
    name: "Genesis G80 3.8",
    price: 41999.99,
    category: "cars",
    description: "3.8 Premium Trim | Havana Red Color | Used | One Owner | Petrol | 8-Speed Automatic | 3.8L V6 Engine | Nappa Leather Seats | Lexicon Audio | H-Tex Roof Liner | Smart Cruise Control | combustion engine | Warranty: Balance of 5-year/60,000-mile",
    images: [
      "/images/genesis_g80_1.jpg", 
      "/images/genesis_g80_2.jpg", 
      "/images/genesis_g80_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "GEN-G80-2021",
    brand: "Genesis",
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
    id: 54,
    name: "Infiniti Q50 Red Sport",
    price: 37999.99,
    category: "cars",
    description: "Red Sport 400 Trim | Dynamic Sunstone Red Color | Used | Performance Package | Petrol | 7-Speed Automatic | 3.0L V6 Twin-Turbo Engine | Sport Seats | Bose Performance Audio | Direct Adaptive Steering | Climate-Controlled Seats | combustion engine | Warranty: 6 months limited",
    images: [
      "/images/infiniti_q50_1.jpg", 
      "/images/infiniti_q50_2.jpg", 
      "/images/infiniti_q50_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "INF-Q50-2021",
    brand: "Infiniti",
    rating: {
      value: 4.3,
      count: 7
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 55,
    name: "Lincoln Aviator Reserve",
    price: 52999.99,
    category: "cars",
    description: "Reserve Trim | Flight Blue Color | Used | Luxury Package | Petrol | 10-Speed Automatic | 3.0L Twin-Turbo Engine | Bridge of Weir Leather Seats | Revel Audio | Adaptive Suspension | Phone As A Key | combustion engine | Warranty: 10 months comprehensive",
    images: [
      "/images/lincoln_aviator_1.jpg", 
      "/images/lincoln_aviator_2.jpg", 
      "/images/lincoln_aviator_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "LIN-AVI-2021",
    brand: "Lincoln",
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
    id: 56,
    name: "Cadillac CT5 Premium Luxury",
    price: 38999.99,
    category: "cars",
    description: "Premium Luxury Trim | Shadow Metallic Color | Used | Well Maintained | Petrol | 10-Speed Automatic | 2.0L Turbo Engine | Leather Seats | Bose Performance Audio | Rear Camera Mirror | Enhanced Automatic Emergency Braking | combustion engine | Warranty: 8 months remaining",
    images: [
      "/images/cadillac_ct5_1.jpg", 
      "/images/cadillac_ct5_2.jpg", 
      "/images/cadillac_ct5_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "CAD-CT5-2021",
    brand: "Cadillac",
    rating: {
      value: 4.4,
      count: 6
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 57,
    name: "Acura TLX A-Spec",
    price: 36999.99,
    category: "cars",
    description: "A-Spec Trim | Performance Red Pearl Color | Used | Sport Package | Petrol | 10-Speed Automatic | 2.0L Turbo Engine | Sport Seats | ELS Studio Audio | Adaptive Damper System | Jewel Eye LED Headlights | combustion engine | Warranty: 7 months comprehensive",
    images: [
      "/images/acura_tlx_1.jpg", 
      "/images/acura_tlx_2.jpg", 
      "/images/acura_tlx_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "ACU-TLX-2021",
    brand: "Acura",
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
    id: 58,
    name: "Alfa Romeo Giulia Ti",
    price: 34999.99,
    category: "cars",
    description: "Ti Trim | Misano Blue Metallic Color | Used | Sport Package | Petrol | 8-Speed Automatic | 2.0L Turbo Engine | Sport Seats | Harman Kardon Audio | Active Suspension | Dual-Pane Sunroof | combustion engine | Warranty: 6 months limited",
    images: [
      "/images/alfa_giulia_1.jpg", 
      "/images/alfa_giulia_2.jpg", 
      "/images/alfa_giulia_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "ALF-GIU-2021",
    brand: "Alfa Romeo",
    rating: {
      value: 4.2,
      count: 5
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 59,
    name: "Buick Enclave Avenir",
    price: 42999.99,
    category: "cars",
    description: "Avenir Trim | Dark Moon Blue Metallic Color | Used | Luxury Package | Petrol | 9-Speed Automatic | 3.6L V6 Engine | Leather Seats | Bose Premium Audio | Adaptive Cruise Control | Hands-Free Power Liftgate | combustion engine | Warranty: 9 months comprehensive",
    images: [
      "/images/buick_enclave_1.jpg", 
      "/images/buick_enclave_2.jpg", 
      "/images/buick_enclave_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "BUI-ENC-2021",
    brand: "Buick",
    rating: {
      value: 4.3,
      count: 7
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 60,
    name: "Chrysler 300C",
    price: 32999.99,
    category: "cars",
    description: "300C Trim | Granite Crystal Metallic Color | Used | Well Maintained | Petrol | 8-Speed Automatic | 5.7L HEMI V8 Engine | Leather-Trimmed Seats | Harman Kardon Audio | Adaptive Damping Suspension | Beats Audio System | combustion engine | Warranty: 7 months remaining",
    images: [
      "/images/chrysler_300_1.jpg", 
      "/images/chrysler_300_2.jpg", 
      "/images/chrysler_300_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "CHR-300-2021",
    brand: "Chrysler",
    rating: {
      value: 4.1,
      count: 6
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 61,
    name: "Dodge Durango Citadel",
    price: 43999.99,
    category: "cars",
    description: "Citadel Trim | Ivory Triple Coat Color | Used | Luxury Package | Petrol | 8-Speed Automatic | 3.6L V6 Engine | Premium Leather Seats | Harman Kardon Audio | Adaptive Cruise Control | Power Sunroof | combustion engine | Warranty: 8 months comprehensive",
    images: [
      "/images/dodge_durango_1.jpg", 
      "/images/dodge_durango_2.jpg", 
      "/images/dodge_durango_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "DOD-DUR-2021",
    brand: "Dodge",
    rating: {
      value: 4.4,
      count: 8
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 62,
    name: "Ford Edge ST",
    price: 38999.99,
    category: "cars",
    description: "ST Trim | Performance Blue Color | Used | Sport Package | Petrol | 8-Speed Automatic | 2.7L EcoBoost V6 | ST Leather Seats | B&O Sound System | Sport-Tuned Suspension | Ford Co-Pilot360 Assist+ | combustion engine | Warranty: 10 months remaining",
    images: [
      "/images/ford_edge_1.jpg", 
      "/images/ford_edge_2.jpg", 
      "/images/ford_edge_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "FRD-EDG-2021",
    brand: "Ford",
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
    id: 63,
    name: "GMC Acadia Denali",
    price: 44999.99,
    category: "cars",
    description: "Denali Trim | White Frost Tricoat Color | Used | Premium Package | Petrol | 9-Speed Automatic | 3.6L V6 Engine | Leather Seats | Bose Premium Audio | Adaptive Cruise Control | Hands-Free Power Liftgate | combustion engine | Warranty: 9 months comprehensive",
    images: [
      "/images/gmc_acadia_1.jpg", 
      "/images/gmc_acadia_2.jpg", 
      "/images/gmc_acadia_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "GMC-ACA-2021",
    brand: "GMC",
    rating: {
      value: 4.3,
      count: 7
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 64,
    name: "Honda Passport Elite",
    price: 38999.99,
    category: "cars",
    description: "Elite Trim | Obsidian Blue Pearl Color | Used | Adventure Ready | Petrol | 9-Speed Automatic | 3.5L V6 Engine | Leather-Trimmed Seats | Honda Satellite-Linked Navigation | Heated Steering Wheel | i-VTM4 Torque Vectoring | combustion engine | Warranty: 8 months remaining",
    images: [
      "/images/honda_passport_1.jpg", 
      "/images/honda_passport_2.jpg",
      "/images/honda_passport_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "HND-PAS-2021",
    brand: "Honda",
    rating: {
      value: 4.6,
      count: 10
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 65,
    name: "Hyundai Palisade Calligraphy",
    price: 45999.99,
    category: "cars",
    description: "Calligraphy Trim | Moonlight Cloud Color | Used | Luxury Package | Petrol | 8-Speed Automatic | 3.8L V6 Engine | Nappa Leather Seats | Harman Kardon Audio | Surround View Monitor | Highway Driving Assist 2 | combustion engine | Warranty: Balance of 5-year/60,000-mile",
    images: [
      "/images/hyundai_palisade_1.jpg", 
      "/images/hyundai_palisade_2.jpg", 
      "/images/hyundai_palisade_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "HYN-PAL-2021",
    brand: "Hyundai",
    rating: {
      value: 4.8,
      count: 12
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 66,
    name: "Toyota Highlander Platinum",
    price: 43999.99,
    category: "cars",
    description: "Platinum Trim | Moon Dust Color | Used | One Owner | Petrol | 8-Speed Automatic | 3.5L V6 Engine | Leather-Trimmed Seats | 12.3-Inch Touchscreen | Panoramic View Monitor | JBL Audio System | combustion engine | Warranty: 11 months comprehensive",
    images: [
      "images/toyota_highlander_1.jpg", 
      "/images/toyota_highlander_2.jpg", 
      "/images/toyota_highlander_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "TYT-HIG-2022",
    brand: "Toyota",
    rating: {
      value: 4.7,
      count: 14
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 67,
    name: "Honda Pilot Elite",
    price: 41999.99,
    category: "cars",
    description: "Elite Trim | Sonic Gray Pearl Color | Used | Well Maintained | Petrol | 9-Speed Automatic | 3.5L V6 Engine | Leather Seats | CabinTalk | Wireless Phone Charger | Honda Sensing Suite | combustion engine | Warranty: 10 months remaining",
    images: [
      "/images/honda_pilot_1.jpg", 
      "/images/honda_pilot_2.jpg", 
      "/images/honda_pilot_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "HND-PIL-2021",
    brand: "Honda",
    rating: {
      value: 4.6,
      count: 12
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 68,
    name: "Ford Expedition Max Limited",
    price: 56999.99,
    category: "cars",
    description: "Limited Trim | Star White Metallic Color | Used | Family Owned | Petrol | 10-Speed Automatic | 3.5L EcoBoost V6 | Leather Seats | SYNC 4 System | PowerFold Third Row | Ford Co-Pilot360 Assist | combustion engine | Warranty: 12 months comprehensive",
    images: [
      "/images/ford_expedition_1.jpg", 
      "/images/ford_expedition_2.jpg", 
      "/images/ford_expedition_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "FRD-EXP-MAX-2021",
    brand: "Ford",
    rating: {
      value: 4.5,
      count: 11
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 69,
    name: "Chevrolet Tahoe Premier",
    price: 58999.99,
    category: "cars",
    description: "Premier Trim | Midnight Blue Metallic Color | Used | No Accidents | Petrol | 10-Speed Automatic | 5.3L V8 Engine | Leather Seats | Bose Premium Audio | Magnetic Ride Control | Power Running Boards | combustion engine | Warranty: 9 months remaining",
    images: [
      "/images/chevrolet_tahoe_1.jpg", 
      "/images/chevrolet_tahoe_2.jpg", 
      "/images/chevrolet_tahoe_3.jpg"],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "CHV-TAH-2021",
    brand: "Chevrolet",
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
    id: 70,
    name: "Nissan Pathfinder Platinum",
    price: 38999.99,
    category: "cars",
    description: "Platinum Trim | Boulder Gray Pearl Color | Used | One Owner | Petrol | 9-Speed Automatic | 3.5L V6 Engine | Leather-Appointed Seats | ProPILOT Assist | Tri-Zone Climate Control | Around View Monitor | combustion engine | Warranty: 8 months comprehensive",
    images: [
      "/images/nissan_pathfinder_1.jpg", 
      "/images/nissan_pathfinder_2.jpg", 
      "/images/nissan_pathfinder_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "NIS-PAT-2022",
    brand: "Nissan",
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
    id: 71,
    name: "Subaru Ascent Touring",
    price: 39999.99,
    category: "cars",
    description: "Touring Trim | Autumn Green Metallic Color | Used | Well Maintained | Petrol | CVT Automatic | 2.4L Turbo Engine | Nappa Leather Seats | Harman Kardon Audio | Reverse Automatic Braking | DriverFocus Distraction Mitigation | combustion engine | Warranty: 7 months remaining",
    images: [
      "/images/subaru_ascent_1.jpg", 
      "/images/subaru_ascent_2.jpg", 
      "/images/subaru_ascent_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "SBR-ASC-2021",
    brand: "Subaru",
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
    id: 72,
    name: "Kia Sorento SX Prestige",
    price: 36999.99,
    category: "cars",
    description: "SX Prestige Trim | Everlasting Silver Color | Used | No Damage | Petrol | 8-Speed Dual-Clutch | 2.5L Turbo Engine | Leather Seats | Harman Kardon Audio | Surround View Monitor | Highway Driving Assist | combustion engine | Warranty: Balance of 5-year/60,000-mile",
    images: [
      "/images/kia_sorento_1.jpg", 
      "/images/kia_sorento_2.jpg", 
      "/images/kia_sorento_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "KIA-SOR-2022",
    brand: "Kia",
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
    id: 73,
    name: "Hyundai Santa Fe Calligraphy",
    price: 38999.99,
    category: "cars",
    description: "Calligraphy Trim | Hampton Gray Color | Used | One Owner | Petrol | 8-Speed Automatic | 2.5L Turbo Engine | Nappa Leather Seats | Harman Kardon Audio | Surround View Monitor | Highway Driving Assist | combustion engine | Warranty: 10 months comprehensive",
    images: [
      "/images/hyundai_santafe_1.jpg", 
      "/images/hyundai_santafe_2.jpg", 
      "/images/hyundai_santafe_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "HYN-SAN-2021",
    brand: "Hyundai",
    rating: {
      value: 4.5,
      count: 12
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 74,
    name: "Mazda CX-9 Signature",
    price: 41999.99,
    category: "cars",
    description: "Signature Trim | Deep Crystal Blue Mica Color | Used | Well Maintained | Petrol | 6-Speed Automatic | 2.5L Turbo Engine | Nappa Leather Seats | Bose Audio | 360-Degree View Monitor | i-Activsense Safety Features | combustion engine | Warranty: 9 months remaining",
    images: [
      "/images/mazda_cx9_1.jpg", 
      "/images/mazda_cx9_2.jpg", 
      "/images/mazda_cx9_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "MAZ-CX9-2021",
    brand: "Mazda",
    rating: {
      value: 4.6,
      count: 10
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 75,
    name: "Volkswagen Atlas SEL Premium",
    price: 42999.99,
    category: "cars",
    description: "SEL Premium Trim | Tourmaline Blue Metallic Color | Used | No Accidents | Petrol | 8-Speed Automatic | 3.6L VR6 Engine | Leather Seats | Fender Premium Audio | Adaptive Cruise Control | Area View Camera | combustion engine | Warranty: 8 months comprehensive",
    images: [
      "/images/vw_atlas_1.jpg", 
      "/images/vw_atlas_2.jpg", 
      "/images/vw_atlas_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "VW-ATL-2021",
    brand: "Volkswagen",
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
    id: 76,
    name: "Jeep Grand Cherokee L Summit",
    price: 54999.99,
    category: "cars",
    description: "Summit Trim | Ivory Triple Coat Color | Used | Luxury Package | Petrol | 8-Speed Automatic | 3.6L V6 Engine | Palermo Leather Seats | McIntosh Audio | Air Suspension | Advanced Safety Group | combustion engine | Warranty: 11 months remaining",
    images: [
      "/images/jeep_gcl_1.jpg", 
      "/images/jeep_gcl_2.jpg", 
      "/images/jeep_gcl_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "JEP-GCL-2022",
    brand: "Jeep",
    rating: {
      value: 4.7,
      count: 8
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 77,
    name: "GMC Yukon Denali",
    price: 64999.99,
    category: "cars",
    description: "Denali Trim | Dark Sky Metallic Color | Used | Premium Package | Petrol | 10-Speed Automatic | 5.3L V8 Engine | Leather Seats | Bose Performance Audio | Magnetic Ride Control | Power Running Boards | combustion engine | Warranty: 10 months comprehensive",
    images: [
      "/images/gmc_yukon_1.jpg", 
      "/images/gmc_yukon_2.jpg", 
      "/images/gmc_yukon_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "GMC-YUK-2021",
    brand: "GMC",
    rating: {
      value: 4.5,
      count: 7
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 78,
    name: "Buick Envision Avenir",
    price: 37999.99,
    category: "cars",
    description: "Avenir Trim | Ebony Twilight Metallic Color | Used | Well Maintained | Petrol | 9-Speed Automatic | 2.0L Turbo Engine | Leather Seats | Bose Premium Audio | Adaptive Cruise Control | Hands-Free Power Liftgate | combustion engine | Warranty: 8 months remaining",
    images: [
      "/images/buick_envision_1.jpg", 
      "/images/buick_envision_2.jpg", 
      "/images/buick_envision_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "BUI-ENV-2021",
    brand: "Buick",
    rating: {
      value: 4.3,
      count: 6
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 79,
    name: "Lincoln Navigator Reserve",
    price: 69999.99,
    category: "cars",
    description: "Reserve Trim | Chroma Caviar Dark Color | Used | Luxury Package | Petrol | 10-Speed Automatic | 3.5L EcoBoost V6 | Leather Seats | Revel Audio | Adaptive Suspension | Phone As A Key | combustion engine | Warranty: 12 months comprehensive",
    images: [
      "/images/lincoln_navigator_1.jpg", 
      "/images/lincoln_navigator_2.jpg", 
      "/images/lincoln_navigator_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "LIN-NAV-2021",
    brand: "Lincoln",
    rating: {
      value: 4.8,
      count: 9
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 80,
    name: "Cadillac Escalade Premium Luxury",
    price: 74999.99,
    category: "cars",
    description: "Premium Luxury Trim | Crystal White Tricoat Color | Used | Executive Package | Petrol | 10-Speed Automatic | 6.2L V8 Engine | Leather Seats | AKG Studio Audio | Magnetic Ride Control | Super Cruise | combustion engine | Warranty: 11 months remaining",
    images: [
      "/images/cadillac_escalade_1.jpg", 
      "/images/cadillac_escalade_2.jpg", 
      "/images/cadillac_escalade_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "CAD-ESC-2021",
    brand: "Cadillac",
    rating: {
      value: 4.7,
      count: 10
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 81,
    name: "Audi Q8 Prestige",
    price: 61999.99,
    category: "cars",
    description: "Prestige Trim | Daytona Gray Pearl Color | Used | One Owner | Petrol | 8-Speed Automatic | 3.0L V6 Engine | Leather Seats | Bang & Olufsen 3D Audio | Adaptive Air Suspension | Virtual Cockpit | combustion engine | Warranty: 9 months comprehensive",
    images: [
      "/images/audi_q8_1.jpg", 
      "/images/audi_q8_2.jpg", 
      "/images/audi_q8_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "AUD-Q8-2021",
    brand: "Audi",
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
    id: 82,
    name: "BMW X7 xDrive40i",
    price: 68999.99,
    category: "cars",
    description: "xDrive40i Trim | Phytonic Blue Metallic Color | Used | Executive Package | Petrol | 8-Speed Automatic | 3.0L Turbo I6 Engine | Vernasca Leather Seats | Panoramic Sky Lounge Roof | Harman Kardon Audio | Parking Assistance Package | combustion engine | Warranty: 10 months remaining",
    images: [
      "/images/bmw_x7_1.jpg", 
      "/images/bmw_x7_2.jpg", 
      "/images/bmw_x7_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "BMW-X7-2021",
    brand: "BMW",
    rating: {
      value: 4.8,
      count: 7
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 83,
    name: "Mercedes-Benz GLE 450",
    price: 59999.99,
    category: "cars",
    description: "GLE 450 Trim | Polar White Color | Used | Premium Package | Petrol | 9-Speed Automatic | 3.0L Inline-6 Turbo | MB-Tex Seats | Burmester Surround Sound | E-Active Body Control | MBUX Interior Assistant | combustion engine | Warranty: 8 months comprehensive",
    images: [
      "/images/mercedes_gle_1.jpg", 
      "/images/mercedes_gle_2.jpg", 
      "/images/mercedes_gle_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "MB-GLE-2021",
    brand: "Mercedes-Benz",
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
    id: 84,
    name: "Lexus GX 460 Luxury",
    price: 54999.99,
    category: "cars",
    description: "Luxury Trim | Nightfall Mica Color | Used | Off-Road Capable | Petrol | 6-Speed Automatic | 4.6L V8 Engine | Semi-Aniline Leather Seats | Mark Levinson Audio | Adaptive Variable Suspension | Multi-Terrain Monitor | combustion engine | Warranty: 9 months remaining",
    images: [
      "/images/lexus_gx_1.jpg", 
      "/images/lexus_gx_2.jpg", 
      "/images/lexus_gx_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "LEX-GX-2021",
    brand: "Lexus",
    rating: {
      value: 4.5,
      count: 11
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 85,
    name: "Acura MDX Advance",
    price: 48999.99,
    category: "cars",
    description: "Advance Trim | Performance Red Pearl Color | Used | Technology Package | Petrol | 10-Speed Automatic | 3.5L V6 Engine | Milano Leather Seats | ELS Studio 3D Audio | Adaptive Damper System | Jewel Eye LED Headlights | combustion engine | Warranty: 10 months comprehensive",
    images: [
      "/images/acura_mdx_1.jpg", 
      "/images/acura_mdx_2.jpg", 
      "/images/acura_mdx_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "ACU-MDX-2021",
    brand: "Acura",
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
    id: 86,
    name: "Ford F-150 Lariat",
    price: 48999.99,
    category: "trucks",
    description: "Lariat Trim | Iconic Silver Color | Used | One Owner | Petrol | 10-Speed Automatic | 2.7L EcoBoost V6 Engine | Leather-Trimmed Seats | SYNC 4 System | Ford Co-Pilot360 Assist | Tow Package | combustion engine | Warranty: 12 months comprehensive",
    images: [
      "/images/ford_f150_1.jpg", 
      "/images/ford_f150_2.jpg", 
      "/images/ford_f150_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "FRD-F150-2022",
    brand: "Ford",
    rating: {
      value: 4.8,
      count: 15
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 87,
    name: "Chevrolet Silverado 1500 LTZ",
    price: 47999.99,
    category: "trucks",
    description: "LTZ Trim | Northsky Blue Metallic Color | Used | Well Maintained | Petrol | 8-Speed Automatic | 5.3L V8 Engine | Leather Seats | Bose Premium Audio | Trailering Package | Multi-Flex Tailgate | combustion engine | Warranty: 11 months remaining",
    images: [
      "/images/chevrolet_silverado_1.jpg", 
      "/images/chevrolet_silverado_2.jpg", 
      "/images/chevrolet_silverado_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "CHV-SIL-2021",
    brand: "Chevrolet",
    rating: {
      value: 4.7,
      count: 13
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 88,
    name: "Ram 1500 Laramie",
    price: 49999.99,
    category: "trucks",
    description: "Laramie Trim | Diamond Black Crystal Pearl Color | Used | No Accidents | Petrol | 8-Speed Automatic | 5.7L HEMI V8 Engine | Leather Seats | Uconnect 4C NAV | Air Suspension | RamBox Cargo Management | combustion engine | Warranty: 10 months comprehensive",
    images: [
      "/images/ram_1500_1.jpg", 
      "/images/ram_1500_2.jpg", 
      "/images/ram_1500_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "RAM-1500-2021",
    brand: "Ram",
    rating: {
      value: 4.8,
      count: 14
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 89,
    name: "GMC Sierra 1500 Denali",
    price: 56999.99,
    category: "trucks",
    description: "Denali Trim | Dark Sky Metallic Color | Used | Premium Package | Petrol | 10-Speed Automatic | 6.2L V8 Engine | Leather Seats | Bose Premium Audio | MultiPro Tailgate | CarbonPro Bed | combustion engine | Warranty: 12 months comprehensive",
    images: [
      "/images/gmc_sierra_1.jpg", 
      "/images/gmc_sierra_2.jpg", 
      "/images/gmc_sierra_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "GMC-SIE-2022",
    brand: "GMC",
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
    id: 90,
    name: "Toyota Tundra Limited",
    price: 44999.99,
    category: "trucks",
    description: "Limited Trim | Army Green Color | Used | One Owner | Petrol | 6-Speed Automatic | 5.7L V8 Engine | Leather-Trimmed Seats | Entune Premium Audio | Tow Package | TRD Off-Road Package | combustion engine | Warranty: 9 months remaining",
    images: [
      "/images/toyota_tundra_1.jpg", 
      "/images/toyota_tundra_2.jpg", 
      "/images/toyota_tundra_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "TYT-TUN-2021",
    brand: "Toyota",
    rating: {
      value: 4.6,
      count: 12
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 91,
    name: "Nissan Titan PRO-4X",
    price: 42999.99,
    category: "trucks",
    description: "PRO-4X Trim | Glacier White Color | Used | Off-Road Package | Petrol | 9-Speed Automatic | 5.6L V8 Engine | Leather-Appointed Seats | Fender Premium Audio | Off-Road Suspension | Utili-Track Channel System | combustion engine | Warranty: 10 months comprehensive",
    images: [
      "/images/nissan_titan_1.jpg", 
      "/images/nissan_titan_2.jpg", 
      "/images/nissan_titan_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "NIS-TIT-2021",
    brand: "Nissan",
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
    id: 92,
    name: "Ford F-250 Super Duty Lariat",
    price: 58999.99,
    category: "trucks",
    description: "Lariat Trim | Velocity Blue Color | Used | Heavy Duty | Diesel | 10-Speed Automatic | 6.7L Power Stroke V8 | Leather-Trimmed Seats | SYNC 4 System | Tow Technology Package | FX4 Off-Road Package | diesel engine | Warranty: 12 months comprehensive",
    images: [
      "/images/ford_f250_1.jpg", 
      "/images/ford_f250_2.jpg", 
      "/images/ford_f250_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "FRD-F250-2022",
    brand: "Ford",
    rating: {
      value: 4.8,
      count: 10
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 93,
    name: "Chevrolet Silverado 2500HD LTZ",
    price: 56999.99,
    category: "trucks",
    description: "LTZ Trim | Cherry Red Tintcoat Color | Used | Heavy Duty | Diesel | 6-Speed Automatic | 6.6L Duramax Turbo-Diesel | Leather Seats | Bose Premium Audio | Gooseneck/5th Wheel Prep | Snow Plow Prep | diesel engine | Warranty: 11 months remaining",
    images: [
      "/images/chevrolet_2500_1.jpg", 
      "/images/chevrolet_2500_2.jpg", 
      "/images/chevrolet_2500_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "CHV-SIL2500-2021",
    brand: "Chevrolet",
    rating: {
      value: 4.7,
      count: 8
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 94,
    name: "Ram 2500 Laramie",
    price: 59999.99,
    category: "trucks",
    description: "Laramie Trim | Bright White Color | Used | Heavy Duty | Diesel | 6-Speed Automatic | 6.7L Cummins Turbo Diesel | Leather Seats | Uconnect 4C NAV | Air Suspension | Tow Mode | diesel engine | Warranty: 10 months comprehensive",
    images: [
      "/images/ram_2500_1.jpg", 
      "/images/ram_2500_2.jpg", 
      "/images/ram_2500_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "RAM-2500-2021",
    brand: "Ram",
    rating: {
      value: 4.8,
      count: 9
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 95,
    name: "GMC Sierra 2500HD Denali",
    price: 64999.99,
    category: "trucks",
    description: "Denali Trim | White Frost Tricoat Color | Used | Heavy Duty | Diesel | 6-Speed Automatic | 6.6L Duramax Turbo-Diesel | Leather Seats | Bose Premium Audio | MultiPro Tailgate | Gooseneck/5th Wheel Prep | diesel engine | Warranty: 12 months comprehensive",
    images: [
      "/images/gmc_sierra2500_1.jpg", 
      "/images/gmc_sierra2500_2.jpg", 
      "/images/gmc_sierra2500_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "GMC-SIE2500-2022",
    brand: "GMC",
    rating: {
      value: 4.7,
      count: 7
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 96,
    name: "Toyota Tacoma TRD Pro",
    price: 44999.99,
    category: "trucks",
    description: "TRD Pro Trim | Lunar Rock Color | Used | Off-Road Ready | Petrol | 6-Speed Automatic | 3.5L V6 Engine | Leather-Trimmed Seats | JBL Audio System | FOX Internal Bypass Shocks | Multi-Terrain Monitor | combustion engine | Warranty: 9 months remaining",
    images: [
      "/images/toyota_tacoma_1.jpg", 
      "/images/toyota_tacoma_2.jpg", 
      "/images/toyota_tacoma_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "TYT-TAC-2021",
    brand: "Toyota",
    rating: {
      value: 4.8,
      count: 13
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 97,
    name: "Nissan Frontier PRO-4X",
    price: 37999.99,
    category: "trucks",
    description: "PRO-4X Trim | Boulder Gray Pearl Color | Used | Off-Road Package | Petrol | 9-Speed Automatic | 3.8L V6 Engine | Leather-Appointed Seats | Fender Premium Audio | Bilstein Off-Road Shocks | Utili-Track Channel System | combustion engine | Warranty: 10 months comprehensive",
    images: [
      "/images/nissan_frontier_1.jpg", 
      "/images/nissan_frontier_2.jpg", 
      "/images/nissan_frontier_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "NIS-FRO-2021",
    brand: "Nissan",
    rating: {
      value: 4.6,
      count: 11
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 98,
    name: "Ford Ranger Lariat",
    price: 38999.99,
    category: "trucks",
    description: "Lariat Trim | Saber Color | Used | Well Maintained | Petrol | 10-Speed Automatic | 2.3L EcoBoost Engine | Leather-Trimmed Seats | SYNC 3 System | FX4 Off-Road Package | Tow Package | combustion engine | Warranty: 12 months comprehensive",
    images: [
      "/images/ford_ranger_1.jpg", 
      "/images/ford_ranger_2.jpg", 
      "/images/ford_ranger_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "FRD-RAN-2022",
    brand: "Ford",
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
    id: 99,
    name: "Chevrolet Colorado Z71",
    price: 36999.99,
    category: "trucks",
    description: "Z71 Trim | Sand Dune Metallic Color | Used | Off-Road Package | Petrol | 8-Speed Automatic | 3.6L V6 Engine | Leather-Appointed Seats | Bose Premium Audio | Off-Road Suspension | Trailering Package | combustion engine | Warranty: 11 months remaining",
    images: [
      "/images/chevrolet_colorado_1.jpg", 
      "/images/chevrolet_colorado_2.jpg", 
      "/images/chevrolet_colorado_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "CHV-COL-2021",
    brand: "Chevrolet",
    rating: {
      value: 4.6,
      count: 9
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 100,
    name: "Jeep Gladiator Rubicon",
    price: 49999.99,
    category: "trucks",
    description: "Rubicon Trim | Sting-Gray Color | Used | Off-Road Capable | Petrol | 8-Speed Automatic | 3.6L V6 Engine | Leather-Trimmed Seats | Uconnect 4C NAV | Rock-Trac 4x4 System | Tru-Lok Front/Rear Axles | combustion engine | Warranty: 10 months comprehensive",
    images: [
      "/images/jeep_gladiator_1.jpg", 
      "/images/jeep_gladiator_2.jpg", 
      "/images/jeep_gladiator_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "JEP-GLA-2021",
    brand: "Jeep",
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
    id: 101,
    name: "Honda Ridgeline RTL-E",
    price: 38999.99,
    category: "trucks",
    description: "RTL-E Trim | Sonic Gray Pearl Color | Used | Well Maintained | Petrol | 9-Speed Automatic | 3.5L V6 Engine | Leather-Trimmed Seats | Honda Satellite-Linked Navigation | In-Bed Trunk | Truck Bed Audio System | combustion engine | Warranty: 9 months remaining",
    images: [
      "/images/honda_ridgeline_1.jpg", 
      "/images/honda_ridgeline_2.jpg", 
      "/images/honda_ridgeline_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "HND-RID-2021",
    brand: "Honda",
    rating: {
      value: 4.6,
      count: 11
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 102,
    name: "Ford F-150 Raptor",
    price: 69999.99,
    category: "trucks",
    description: "Raptor Trim | Code Orange Color | Used | Performance Package | Petrol | 10-Speed Automatic | 3.5L High-Output EcoBoost | Leather-Trimmed Seats | SYNC 4 System | FOX Live Valve Shocks | Terrain Management System | combustion engine | Warranty: 12 months comprehensive",
    images: [
      "/images/ford_raptor_1.jpg", 
      "/images/ford_raptor_2.jpg", 
      "/images/ford_raptor_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "FRD-RAP-2022",
    brand: "Ford",
    rating: {
      value: 4.9,
      count: 14
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 103,
    name: "Ram 1500 TRX",
    price: 79999.99,
    category: "trucks",
    description: "TRX Trim | Hydro Blue Pearl Color | Used | Performance Package | Petrol | 8-Speed Automatic | 6.2L Supercharged HEMI V8 | Leather Seats | Uconnect 4C NAV | Bilstein Adaptive Performance Shocks | Launch Control | combustion engine | Warranty: 10 months comprehensive",
    images: [
      "/images/ram_trx_1.jpg", 
      "/images/ram_trx_2.jpg", 
      "/images/ram_trx_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "RAM-TRX-2021",
    brand: "Ram",
    rating: {
      value: 4.9,
      count: 9
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 104,
    name: "GMC Canyon Denali",
    price: 41999.99,
    category: "trucks",
    description: "Denali Trim | Crimson Red Tintcoat Color | Used | Premium Package | Petrol | 8-Speed Automatic | 3.6L V6 Engine | Leather Seats | Bose Premium Audio | MultiPro Tailgate | Trailering Package | combustion engine | Warranty: 11 months remaining",
    images: [
      "/images/gmc_canyon_1.jpg", 
      "/images/gmc_canyon_2.jpg", 
      "/images/gmc_canyon_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "GMC-CAN-2021",
    brand: "GMC",
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
    id: 105,
    name: "Toyota Tundra TRD Pro",
    price: 52999.99,
    category: "trucks",
    description: "TRD Pro Trim | Solar Octane Color | Used | Performance Package | Petrol | 6-Speed Automatic | 5.7L V8 Engine | Leather-Trimmed Seats | JBL Audio System | FOX Internal Bypass Shocks | TRD Skid Plate | combustion engine | Warranty: 9 months remaining",
    images: [
      "/images/toyota_tundra_trd_1.jpg", 
      "/images/toyota_tundra_trd_2.jpg", 
      "/images/toyota_tundra_trd_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "TYT-TUN-TRD-2021",
    brand: "Toyota",
    rating: {
      value: 4.8,
      count: 10
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 106,
    name: "Freightliner Cascadia",
    price: 125999.99,
    category: "trucks",
    description: "Day Cab | White Color | Used | Well Maintained | Diesel | DT12 Automated Manual Transmission | DD13 Engine | Air Ride Suspension | Detroit Connect Virtual Technician | Adaptive Cruise Control | Lane Departure Warning | diesel engine | Warranty: 6 months comprehensive",
    images: [
      "/images/freightliner_cascadia_1.jpg", 
      "/images/freightliner_cascadia_2.jpg", 
      "/images/freightliner_cascadia_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "FRT-CAS-2021",
    brand: "Freightliner",
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
    id: 107,
    name: "Kenworth T680",
    price: 139999.99,
    category: "trucks",
    description: "Day Cab | Kenworth Red Color | Used | Long Haul Configuration | Diesel | PACCAR MX-13 Engine | Automated Manual Transmission | Air Disc Brakes | Advanced Navigation System | Predictive Cruise Control | diesel engine | Warranty: 12 months powertrain",
    images: [
      "/images/kenworth_t680_1.jpg", 
      "/images/kenworth_t680_2.jpg", 
      "/images/kenworth_t680_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "KEN-T680-2021",
    brand: "Kenworth",
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
