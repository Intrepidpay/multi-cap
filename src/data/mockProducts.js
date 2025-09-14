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
    id: 108,
    name: "Peterbilt 579",
    price: 142999.99,
    category: "trucks",
    description: "UltraLoft Sleeper | Black Color | Used | OTR Configuration | Diesel | PACCAR MX-13 Engine | Automated Manual Transmission | Air Ride Suspension | Advanced Safety Systems | Predictive Cruise Control | diesel engine | Warranty: 12 months comprehensive",
    images: [
      "/images/peterbilt_579_1.jpg", 
      "/images/peterbilt_579_2.jpg", 
      "/images/peterbilt_579_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "PET-579-2021",
    brand: "Peterbilt",
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
    id: 109,
    name: "International LT Series",
    price: 119999.99,
    category: "trucks",
    description: "Day Cab | Blue Color | Used | Regional Haul | Diesel | International A26 Engine | Automated Manual Transmission | Air Ride Cab | Predictive Cruise | Lane Departure Warning | diesel engine | Warranty: 6 months remaining",
    images: [
      "/images/international_lt_1.jpg", 
      "/images/international_lt_2.jpg", 
      "/images/international_lt_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "INT-LT-2021",
    brand: "International",
    rating: {
      value: 4.5,
      count: 6
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 110,
    name: "Volvo VNL 860",
    price: 145999.99,
    category: "trucks",
    description: "Globetrotter Sleeper | Silver Color | Used | Long Haul | Diesel | Volvo D13 Engine | I-Shift Transmission | Volvo Dynamic Steering | Adaptive Cruise Control | Lane Keeping Assist | diesel engine | Warranty: 12 months comprehensive",
    images: [
      "/images/volvo_vnl_1.jpg", 
      "/images/volvo_vnl_2.jpg", 
      "/images/volvo_vnl_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "VOL-VNL-2021",
    brand: "Volvo",
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
    id: 111,
    name: "Mack Anthem",
    price: 132999.99,
    category: "trucks",
    description: "Day Cab | Mack Bulldog Colors | Used | Highway Configuration | Diesel | MP8 Engine | mDRIVE HD Transmission | Mack GuardDog Connect | Predictive Cruise | Lane Departure Warning | diesel engine | Warranty: 12 months powertrain",
    images: [
      "/images/mack_anthem_1.jpg", 
      "/images/mack_anthem_2.jpg", 
      "/images/mack_anthem_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "MAC-ANT-2021",
    brand: "Mack",
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
    id: 112,
    name: "Western Star 5700XE",
    price: 138999.99,
    category: "trucks",
    description: "72-Inch Sleeper | White Color | Used | OTR Haul | Diesel | DD15 Engine | Detroit DT12 Transmission | Air Ride Suspension | Detroit Connect | Adaptive Cruise Control | diesel engine | Warranty: 9 months comprehensive",
    images: [
      "/images/western_star_1.jpg", 
      "/images/western_star_2.jpg", 
      "/images/western_star_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "WES-STAR-2021",
    brand: "Western Star",
    rating: {
      value: 4.5,
      count: 5
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 113,
    name: "Freightliner M2 106",
    price: 89999.99,
    category: "trucks",
    description: "Business Class | White Color | Used | Medium Duty | Diesel | DD5 Engine | Allison Transmission | Air Brakes | PTO Ready | Lift Axle Option | diesel engine | Warranty: 6 months comprehensive",
    images: [
      "/images/freightliner_m2_1.jpg", 
      "/images/freightliner_m2_2.jpg", 
      "/images/freightliner_m2_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "FRT-M2-2021",
    brand: "Freightliner",
    rating: {
      value: 4.4,
      count: 7
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 114,
    name: "International HV Series",
    price: 109999.99,
    category: "trucks",
    description: "Regional Haul | Red Color | Used | Vocational Truck | Diesel | International A26 Engine | Automated Manual Transmission | Air Disc Brakes | Advanced Safety Package | diesel engine | Warranty: 6 months remaining",
    images: [
      "/images/international_hv_1.jpg", 
      "/images/international_hv_2.jpg", 
      "/images/international_hv_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "INT-HV-2021",
    brand: "International",
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
    id: 115,
    name: "Kenworth T880",
    price: 149999.99,
    category: "trucks",
    description: "Set-Back Front Axle | Yellow Color | Used | Vocational Application | Diesel | PACCAR MX-13 Engine | Automated Manual Transmission | Heavy-Duty Suspension | PTO Provision | diesel engine | Warranty: 12 months powertrain",
    images: [
      "/images/kenworth_t880_1.jpg", 
      "/images/kenworth_t880_2.jpg", 
      "/images/kenworth_t880_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "KEN-T880-2021",
    brand: "Kenworth",
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
    id: 116,
    name: "Peterbilt 567",
    price: 137999.99,
    category: "trucks",
    description: "Vocational Truck | White Color | Used | Heavy Duty | Diesel | PACCAR MX-13 Engine | Automated Manual Transmission | Steel Suspension | PTO Ready | Heavy-Duty Axles | diesel engine | Warranty: 12 months comprehensive",
    images: [
      "/images/peterbilt_567_1.jpg", 
      "/images/peterbilt_567_2.jpg", 
      "/images/peterbilt_567_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "PET-567-2021",
    brand: "Peterbilt",
    rating: {
      value: 4.6,
      count: 7
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 117,
    name: "Volvo VNR 640",
    price: 126999.99,
    category: "trucks",
    description: "Day Cab | Blue Color | Used | Regional Haul | Diesel | Volvo D11 Engine | I-Shift Transmission | Volvo Dynamic Steering | Adaptive Cruise Control | diesel engine | Warranty: 9 months comprehensive",
    images: [
      "/images/volvo_vnr_1.jpg", 
      "/images/volvo_vnr_2.jpg", 
      "/images/volvo_vnr_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "VOL-VNR-2021",
    brand: "Volvo",
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
    id: 118,
    name: "Mack Granite",
    price: 124999.99,
    category: "trucks",
    description: "Axle Back | Red Color | Used | Vocational Application | Diesel | MP7 Engine | mDRIVE HD Transmission | Mack GuardDog Connect | PTO Ready | Heavy-Duty Frame | diesel engine | Warranty: 12 months powertrain",
    images: [
      "/images/mack_granite_1.jpg", 
      "/images/mack_granite_2.jpg", 
      "/images/mack_granite_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "MAC-GRA-2021",
    brand: "Mack",
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
    id: 119,
    name: "Isuzu FTR",
    price: 79999.99,
    category: "trucks",
    description: "Class 7 Truck | White Color | Used | Medium Duty | Diesel | Isuzu 6HK1-TC Engine | Allison Transmission | Air Brakes | PTO Provision | Lift Gate Ready | diesel engine | Warranty: 6 months comprehensive",
    images: [
      "/images/isuzu_ftr_1.jpg", 
      "/images/isuzu_ftr_2.jpg", 
      "/images/isuzu_ftr_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "ISU-FTR-2021",
    brand: "Isuzu",
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
    id: 120,
    name: "Hino 338",
    price: 75999.99,
    category: "trucks",
    description: "Class 7 Truck | White Color | Used | Medium Duty | Diesel | Hino A09 Engine | Allison Transmission | Air Brakes | PTO Ready | Lift Axle Option | diesel engine | Warranty: 6 months remaining",
    images: [
      "/images/hino_338_1.jpg", 
      "/images/hino_338_2.jpg", 
      "/images/hino_338_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "HIN-338-2021",
    brand: "Hino",
    rating: {
      value: 4.3,
      count: 5
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 121,
    name: "Ford F-750",
    price: 84999.99,
    category: "trucks",
    description: "Super Duty | White Color | Used | Medium Duty | Diesel | Ford 6.7L Power Stroke | Allison Transmission | Air Brakes | PTO Ready | Vocational Package | diesel engine | Warranty: 12 months comprehensive",
    images: [
      "/images/ford_f750_1.jpg", 
      "/images/ford_f750_2.jpg", 
      "/images/ford_f750_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "FRD-F750-2021",
    brand: "Ford",
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
    id: 122,
    name: "Chevrolet Silverado 6500HD",
    price: 86999.99,
    category: "trucks",
    description: "Class 6 Truck | White Color | Used | Medium Duty | Diesel | Duramax 6.6L Turbo-Diesel | Allison Transmission | Air Brakes | PTO Provision | Vocational Package | diesel engine | Warranty: 12 months remaining",
    images: [
      "/images/chevrolet_6500_1.jpg", 
      "/images/chevrolet_6500_2.jpg", 
      "/images/chevrolet_6500_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "CHV-6500-2021",
    brand: "Chevrolet",
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
    id: 123,
    name: "RAM 5500 Chassis Cab",
    price: 78999.99,
    category: "trucks",
    description: "Chassis Cab | White Color | Used | Medium Duty | Diesel | 6.7L Cummins Turbo Diesel | Aisin Transmission | Air Brakes | PTO Ready | Upfit Ready | diesel engine | Warranty: 12 months comprehensive",
    images: [
      "/images/ram_5500_1.jpg", 
      "/images/ram_5500_2.jpg", 
      "/images/ram_5500_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "RAM-5500-2021",
    brand: "RAM",
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
    id: 124,
    name: "GMC Sierra 6500",
    price: 87999.99,
    category: "trucks",
    description: "Class 6 Truck | White Color | Used | Medium Duty | Diesel | Duramax 6.6L Turbo-Diesel | Allison Transmission | Air Brakes | PTO Ready | Vocational Package | diesel engine | Warranty: 12 months comprehensive",
    images: [
      "/images/gmc_6500_1.jpg", 
      "/images/gmc_6500_2.jpg", 
      "/images/gmc_6500_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "GMC-6500-2021",
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
    id: 125,
    name: "Kenworth T370",
    price: 109999.99,
    category: "trucks",
    description: "Medium Duty | White Color | Used | Vocational Application | Diesel | PACCAR PX-9 Engine | Allison Transmission | Air Brakes | PTO Provision | Lift Gate Ready | diesel engine | Warranty: 12 months powertrain",
    images: [
      "/images/kenworth_t370_1.jpg", 
      "/images/kenworth_t370_2.jpg", 
      "/images/kenworth_t370_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "KEN-T370-2021",
    brand: "Kenworth",
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
    id: 126,
    name: "Samsung 85\" QLED 4K Q80C Series",
    price: 1999.99,
    category: "tv",
    description: "QLED 4K Smart TV | Black Color | New | Quantum HDR | Quantum Processor 4K | Direct Full Array | Motion Xcelerator Turbo+ | Object Tracking Sound | Gaming Hub | Alexa/Google Assistant Built-in | Warranty: 2-year manufacturer",
    images: [
      "/images/samsung_q80c_1.jpg", 
      "/images/samsung_q80c_2.jpg", 
      "/images/samsung_q80c_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 5,
    sku: "SAM-Q80C-85",
    brand: "Samsung",
    rating: {
      value: 4.8,
      count: 23
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 127,
    name: "LG 77\" OLED C3 Series",
    price: 2499.99,
    category: "tv",
    description: "OLED 4K Smart TV | Dark Silver Color | New | α9 Gen6 AI Processor | Dolby Vision IQ | Dolby Atmos | HDMI 2.1 | NVIDIA G-SYNC | Filmmaker Mode | webOS 23 | Warranty: 2-year panel protection",
    images: [
      "/images/lg_c3_1.jpg", 
      "/images/lg_c3_2.jpg", 
      "/images/lg_c3_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 3,
    sku: "LG-C3-77",
    brand: "LG",
    rating: {
      value: 4.9,
      count: 31
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 128,
    name: "Sony 65\" BRAVIA XR A80L",
    price: 1799.99,
    category: "tv",
    description: "OLED 4K Smart TV | Black Color | New | Cognitive Processor XR | Acoustic Surface Audio+ | Google TV | Dolby Vision/Atmos | IMAX Enhanced | Hands-free Voice Control | PlayStation 5 Compatible | Warranty: 2-year limited",
    images: [
      "/images/sony_a80l_1.jpg",
      "/images/sony_a80l_2.jpg", 
      "/images/sony_a80l_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 4,
    sku: "SON-A80L-65",
    brand: "Sony",
    rating: {
      value: 4.8,
      count: 27
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 129,
    name: "TCL 75\" Q6 QLED 4K",
    price: 699.99,
    category: "tv",
    description: "QLED 4K Smart TV | Dark Gray Color | New | HDR Pro | Dolby Vision | Motion Rate 240 | Google TV | Voice Remote | Game Accelerator 120 | Dual Band WiFi | Warranty: 1-year manufacturer",
    images: [
      "/images/tcl_q6_1.jpg", 
      "/images/tcl_q6_2.jpg", 
      "/images/tcl_q6_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 8,
    sku: "TCL-Q6-75",
    brand: "TCL",
    rating: {
      value: 4.6,
      count: 42
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 130,
    name: "Hisense 65\" U8K ULED",
    price: 1199.99,
    category: "tv",
    description: "ULED 4K Smart TV | Black Color | New | Quantum Dot | Mini-LED | 1000+ Local Dimming Zones | Dolby Vision/Atmos | IMAX Enhanced | Google TV | 144Hz Gaming | Warranty: 2-year limited",
    images: [
      "/images/hisense_u8k_1.jpg", 
      "/images/hisense_u8k_2.jpg", 
      "/images/hisense_u8k_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 6,
    sku: "HIS-U8K-65",
    brand: "Hisense",
    rating: {
      value: 4.7,
      count: 19
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 131,
    name: "Vizio 70\" M6 Series Quantum",
    price: 599.99,
    category: "tv",
    description: "Quantum Color 4K Smart TV | Black Color | New | Active Full Array | IQ Active Processor | V-Gaming Engine | SmartCast 4.0 | Apple AirPlay | Chromecast Built-in | Warranty: 1-year manufacturer",
    images: [
      "/images/vizio_m6_1.jpg", 
      "/images/vizio_m6_2.jpg", 
      "/images/vizio_m6_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 10,
    sku: "VIZ-M6-70",
    brand: "Vizio",
    rating: {
      value: 4.4,
      count: 35
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 132,
    name: "Samsung 55\" The Frame",
    price: 1299.99,
    category: "tv",
    description: "Lifestyle QLED 4K TV | Customizable Bezels | New | Art Mode | Matte Display | Quantum Processor 4K | Samsung Art Store | Motion Sensor | No Gap Wall Mount | Solar Cell Remote | Warranty: 2-year manufacturer",
    images: [
      "/images/samsung_frame_1.jpg", 
      "/images/samsung_frame_2.jpg", 
      "/images/samsung_frame_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 7,
    sku: "SAM-FRAME-55",
    brand: "Samsung",
    rating: {
      value: 4.7,
      count: 28
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 133,
    name: "LG 83\" G3 Gallery Series",
    price: 3999.99,
    category: "tv",
    description: "OLED evo 4K Smart TV | Gallery Design | New | Brightness Booster Max | α9 Gen6 AI Processor | Dolby Vision/Atmos | 4K 120Hz | NVIDIA G-SYNC | Filmmaker Mode | Warranty: 5-year panel protection",
    images: [
      "/images/lg_g3_1.jpg", 
      "/images/lg_g3_2.jpg", 
      "/images/lg_g3_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 2,
    sku: "LG-G3-83",
    brand: "LG",
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
    id: 134,
    name: "Sony 55\" BRAVIA X90L",
    price: 1199.99,
    category: "tv",
    description: "Full Array LED 4K Smart TV | Black Color | New | Cognitive Processor XR | XR Contrast Booster 10 | Google TV | Dolby Vision/Atmos | IMAX Enhanced | Acoustic Multi-Audio | Warranty: 2-year limited",
    images: [
      "/images/sony_x90l_1.jpg", 
      "/images/sony_x90l_2.jpg", 
      "/images/sony_x90l_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 5,
    sku: "SON-X90L-55",
    brand: "Sony",
    rating: {
      value: 4.8,
      count: 22
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 135,
    name: "TCL 85\" S4 4K HDR",
    price: 899.99,
    category: "tv",
    description: "4K HDR Smart TV | Dark Gray Color | New | HDR10/HLG | Dolby Digital Plus | Google TV | Voice Remote | Auto Game Mode | Alexa/Google Assistant | Warranty: 1-year manufacturer",
    images: [
      "/images/tcl_s4_1.jpg", 
      "/images/tcl_s4_2.jpg", 
      "/images/tcl_s4_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 12,
    sku: "TCL-S4-85",
    brand: "TCL",
    rating: {
      value: 4.5,
      count: 47
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 136,
    name: "Samsung 43\" The Serif",
    price: 899.99,
    category: "tv",
    description: "Lifestyle QLED 4K TV | White Color | New | Design Furniture | 360° Design | Quantum Processor 4K | Ambient Mode+ | Solar Cell Remote | NFC Tap View | Warranty: 2-year manufacturer",
    images: [
      "/images/samsung_serif_1.jpg", 
      "/images/samsung_serif_2.jpg", 
      "/images/samsung_serif_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 4,
    sku: "SAM-SERIF-43",
    brand: "Samsung",
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
    id: 137,
    name: "LG 48\" A2 OLED",
    price: 799.99,
    category: "tv",
    description: "OLED 4K Smart TV | Dark Silver Color | New | α7 Gen5 AI Processor | HDR10/HLG | webOS 22 | ThinQ AI | Film Maker Mode | HDMI 2.0 | Warranty: 1-year panel protection",
    images: [
      "/images/lg_a2_1.jpg", 
      "/images/lg_a2_2.jpg", 
      "/images/lg_a2_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 6,
    sku: "LG-A2-48",
    brand: "LG",
    rating: {
      value: 4.7,
      count: 26
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 138,
    name: "Sony 75\" X85K 4K HDR",
    price: 1299.99,
    category: "tv",
    description: "4K HDR Smart TV | Black Color | New | 4K HDR Processor X1 | Triluminos Pro | Google TV | Dolby Vision | IMAX Enhanced | Game Mode | Warranty: 2-year limited",
    images: [
      "/images/sony_x85k_1.jpg", 
      "/images/sony_x85k_2.jpg", 
      "/images/sony_x85k_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 7,
    sku: "SON-X85K-75",
    brand: "Sony",
    rating: {
      value: 4.6,
      count: 31
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 139,
    name: "Hisense 75\" A6 Series LED",
    price: 499.99,
    category: "tv",
    description: "4K UHD Smart TV | Black Color | New | DTS Virtual:X | Motion Rate 120 | Google TV | Voice Remote | Chromecast Built-in | Game Mode Plus | Warranty: 1-year manufacturer",
    images: [
      "/images/hisense_a6_1.jpg", 
      "/images/hisense_a6_2.jpg", 
      "/images/hisense_a6_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 15,
    sku: "HIS-A6-75",
    brand: "Hisense",
    rating: {
      value: 4.3,
      count: 52
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 140,
    name: "Vizio 50\" V-Series 4K",
    price: 349.99,
    category: "tv",
    description: "4K HDR Smart TV | Black Color | New | IQ Active Processor | V-Gaming Engine | SmartCast 4.0 | Apple AirPlay | Chromecast Built-in | WatchFree+ | Warranty: 1-year manufacturer",
    images: [
      "/images/vizio_vseries_1.jpg", 
      "/images/vizio_vseries_2.jpg", 
      "/images/vizio_vseries_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 20,
    sku: "VIZ-V50-4K",
    brand: "Vizio",
    rating: {
      value: 4.4,
      count: 67
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 141,
    name: "Samsung 32\" M5 Smart Monitor",
    price: 299.99,
    category: "tv",
    description: "Smart Monitor/TV | White Color | New | 4K UHD | Built-in Streaming | USB-C Connectivity | Adaptive Picture | SlimFit Camera | Solar Cell Remote | Mobile Connectivity | Warranty: 1-year manufacturer",
    images: [
      "/images/samsung_m5_1.jpg", 
      "/images/samsung_m5_2.jpg", 
      "/images/samsung_m5_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 8,
    sku: "SAM-M5-32",
    brand: "Samsung",
    rating: {
      value: 4.5,
      count: 38
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 142,
    name: "LG 42\" C3 OLED",
    price: 1099.99,
    category: "tv",
    description: "OLED 4K Smart TV | Dark Silver Color | New | α9 Gen6 AI Processor | Dolby Vision IQ | NVIDIA G-SYNC | Filmmaker Mode | webOS 23 | Perfect for Gaming | Warranty: 2-year panel protection",
    images: [
      "/images/lg_c3_42_1.jpg", 
      "/images/lg_c3_42_2.jpg", 
      "/images/lg_c3_42_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 4,
    sku: "LG-C3-42",
    brand: "LG",
    rating: {
      value: 4.8,
      count: 29
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 143,
    name: "Sony 83\" BRAVIA XR A95L",
    price: 4999.99,
    category: "tv",
    description: "QD-OLED 4K Smart TV | Black Color | New | Cognitive Processor XR | XR Triluminos Max | Acoustic Surface Audio+ | Google TV | Dolby Vision/Atmos | IMAX Enhanced | Warranty: 3-year limited",
    images: [
      "/images/sony_a95l_1.jpg", 
      "/images/sony_a95l_2.jpg", 
      "/images/sony_a95l_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "SON-A95L-83",
    brand: "Sony",
    rating: {
      value: 4.9,
      count: 12
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 144,
    name: "TCL 65\" Q7 QLED",
    price: 799.99,
    category: "tv",
    description: "QLED 4K Smart TV | Dark Gray Color | New | HDR Pro | Dolby Vision | Motion Rate 240 | Google TV | Voice Remote | Game Accelerator 120 | Q-Class AI | Warranty: 1-year manufacturer",
    images: [
      "/images/tcl_q7_1.jpg", 
      "/images/tcl_q7_2.jpg", 
      "/images/tcl_q7_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 9,
    sku: "TCL-Q7-65",
    brand: "TCL",
    rating: {
      value: 4.7,
      count: 41
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 145,
    name: "Hisense 55\" U6K ULED",
    price: 499.99,
    category: "tv",
    description: "ULED 4K Smart TV | Black Color | New | Quantum Dot | Dolby Vision/Atmos | Google TV | 60Hz Panel | Voice Remote | Game Mode Plus | Warranty: 1-year manufacturer",
    images: [
      "/images/hisense_u6k_1.jpg", 
      "/images/hisense_u6k_2.jpg", 
      "/images/hisense_u6k_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 11,
    sku: "HIS-U6K-55",
    brand: "Hisense",
    rating: {
      value: 4.5,
      count: 56
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 146,
    name: "Samsung 98\" QLED 8K Q900C Series",
    price: 8999.99,
    category: "tv",
    description: "QLED 8K Smart TV | Titan Black Color | New | Quantum HDR 32X | Quantum Processor 8K | Direct Full Array Elite | Object Tracking Sound Pro | Gaming Hub 2.0 | Alexa/Google Assistant Built-in | Warranty: 3-year manufacturer",
    images: [
      "/images/samsung_q900c_1.jpg", 
      "/images/samsung_q900c_2.jpg", 
      "/images/samsung_q900c_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 2,
    sku: "SAM-Q900C-98",
    brand: "Samsung",
    rating: {
      value: 4.9,
      count: 8
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 147,
    name: "LG 65\" B3 OLED Series",
    price: 1499.99,
    category: "tv",
    description: "OLED 4K Smart TV | Dark Silver Color | New | α7 Gen6 AI Processor | Dolby Vision IQ | Dolby Atmos | HDMI 2.1 | AMD FreeSync | Filmmaker Mode | webOS 23 | Warranty: 2-year panel protection",
    images: [
      "/images/lg_b3_1.jpg", 
      "/images/lg_b3_2.jpg", 
      "/images/lg_b3_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 6,
    sku: "LG-B3-65",
    brand: "LG",
    rating: {
      value: 4.7,
      count: 24
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 148,
    name: "Sony 48\" BRAVIA A9S",
    price: 1299.99,
    category: "tv",
    description: "OLED 4K Smart TV | Black Color | New | Cognitive Processor XR | Pixel Contrast Booster | Acoustic Surface Audio | Google TV | Dolby Vision/Atmos | Netflix Calibrated Mode | Warranty: 2-year limited",
    images: [
      "/images/sony_a9s_1.jpg", 
      "/images/sony_a9s_2.jpg", 
      "/images/sony_a9s_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 4,
    sku: "SON-A9S-48",
    brand: "Sony",
    rating: {
      value: 4.8,
      count: 18
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 149,
    name: "TCL 55\" 6-Series QLED",
    price: 699.99,
    category: "tv",
    description: "QLED 4K Smart TV | Dark Gray Color | New | Mini-LED Technology | THX Certified Gaming | 144Hz VRR | Google TV | Hands-free Voice Control | Game Master 2.0 | Warranty: 1-year manufacturer",
    images: [
      "/images/tcl_6series_1.jpg", 
      "/images/tcl_6series_2.jpg", 
      "/images/tcl_6series_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 8,
    sku: "TCL-6SERIES-55",
    brand: "TCL",
    rating: {
      value: 4.6,
      count: 35
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 150,
    name: "Hisense 85\" U7K ULED",
    price: 1499.99,
    category: "tv",
    description: "ULED 4K Smart TV | Black Color | New | Quantum Dot | Full Array Local Dimming | Dolby Vision/Atmos | IMAX Enhanced | Google TV | 144Hz Gaming | Warranty: 2-year limited",
    images: [
      "/images/hisense_u7k_1.jpg", 
      "/images/hisense_u7k_2.jpg", 
      "/images/hisense_u7k_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 5,
    sku: "HIS-U7K-85",
    brand: "Hisense",
    rating: {
      value: 4.7,
      count: 22
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 151,
    name: "Vizio 65\" P-Series Quantum X",
    price: 999.99,
    category: "tv",
    description: "Quantum 4K Smart TV | Black Color | New | Active Full Array Pro | Quantum Color | 240 Local Dimming Zones | SmartCast 4.0 | Apple AirPlay 2 | Chromecast Built-in | Warranty: 1-year manufacturer",
    images: [
      "/images/vizio_pquantum_1.jpg", 
      "/images/vizio_pquantum_2.jpg", 
      "/images/vizio_pquantum_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 7,
    sku: "VIZ-PQX-65",
    brand: "Vizio",
    rating: {
      value: 4.5,
      count: 29
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 152,
    name: "Samsung 50\" Crystal UHD TU690T",
    price: 399.99,
    category: "tv",
    description: "Crystal UHD 4K Smart TV | Black Color | New | Crystal Processor 4K | HDR | PurColor | Motion Xcelerator | Tizen OS | Alexa Built-in | Solar Cell Remote | Warranty: 1-year manufacturer",
    images: [
      "/images/samsung_tu690t_1.jpg", 
      "/images/samsung_tu690t_2.jpg", 
      "/images/samsung_tu690t_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 15,
    sku: "SAM-TU690T-50",
    brand: "Samsung",
    rating: {
      value: 4.4,
      count: 42
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 153,
    name: "LG 70\" UR9000 Series",
    price: 599.99,
    category: "tv",
    description: "4K UHD Smart TV | Dark Silver Color | New | α5 Gen6 AI Processor | HDR10 Pro | webOS 23 | ThinQ AI | Film Maker Mode | Magic Remote | Warranty: 1-year limited",
    images: [
      "/images/lg_ur9000_1.jpg", 
      "/images/lg_ur9000_2.jpg", 
      "/images/lg_ur9000_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 10,
    sku: "LG-UR9000-70",
    brand: "LG",
    rating: {
      value: 4.3,
      count: 37
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 154,
    name: "Sony 43\" X80K 4K HDR",
    price: 599.99,
    category: "tv",
    description: "4K HDR Smart TV | Black Color | New | 4K HDR Processor X1 | Triluminos Pro | Google TV | Dolby Vision | IMAX Enhanced | Game Mode | Warranty: 1-year limited",
    images: [
      "/images/sony_x80k_1.jpg", 
      "/images/sony_x80k_2.jpg", 
      "/images/sony_x80k_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 8,
    sku: "SON-X80K-43",
    brand: "Sony",
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
    id: 155,
    name: "TCL 40\" S3 1080p HD",
    price: 199.99,
    category: "tv",
    description: "HD Smart TV | Dark Gray Color | New | HDR10 | DTS Virtual:X | Google TV | Voice Remote | Auto Game Mode | Chromecast Built-in | Warranty: 1-year manufacturer",
    images: [
      "/images/tcl_s3_1.jpg",
      "/images/tcl_s3_2.jpg", 
      "/images/tcl_s3_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 20,
    sku: "TCL-S3-40",
    brand: "TCL",
    rating: {
      value: 4.2,
      count: 56
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 156,
    name: "Harley-Davidson Street Glide Special",
    price: 24999.99,
    category: "motorcycles",
    description: "Touring Motorcycle | Vivid Black Color | Used | Milwaukee-Eight 114 Engine | 6-Speed Transmission | ABS | Cruise Control | Boom! Box GTS Infotainment | LED Lighting | Warranty: 12 months remaining",
    images: [
      "/images/hd_streetglide_1.jpg", 
      "/images/hd_streetglide_2.jpg", 
      "/images/hd_streetglide_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "HD-SGS-2022",
    brand: "Harley-Davidson",
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
    id: 157,
    name: "Honda Gold Wing Tour",
    price: 27999.99,
    category: "motorcycles",
    description: "Touring Motorcycle | Pearl Gray Color | Used | 1833cc Liquid-Cooled Engine | 7-Speed DCT | Airbag | Apple CarPlay | Honda Satellite-Linked Navigation | Heated Seats/Grips | Warranty: 18 months remaining",
    images: [
      "/images/honda_goldwing_1.jpg", 
      "/images/honda_goldwing_2.jpg", 
      "/images/honda_goldwing_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "HON-GW-2022",
    brand: "Honda",
    rating: {
      value: 4.9,
      count: 12
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 158,
    name: "Yamaha YZF-R1",
    price: 16999.99,
    category: "motorcycles",
    description: "Sport Bike | Yamaha Blue Color | Used | 998cc Crossplane Engine | 6-Speed Transmission | Quick Shift System | ABS | TC | Launch Control | Warranty: 6 months remaining",
    images: [
      "/images/yamaha_r1_1.jpg", 
      "/images/yamaha_r1_2.jpg", 
      "/images/yamaha_r1_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "YAM-R1-2021",
    brand: "Yamaha",
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
    id: 159,
    name: "Indian Chief Dark Horse",
    price: 18999.99,
    category: "motorcycles",
    description: "Cruiser Motorcycle | Thunder Black Color | Used | Thunderstroke 116 Engine | 6-Speed Transmission | ABS | Ride Modes | Keyless Ignition | USB Charging | Warranty: 12 months comprehensive",
    images: [
      "/images/indian_chief_1.jpg", 
      "/images/indian_chief_2.jpg", 
      "/images/indian_chief_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "IND-CHIEF-2022",
    brand: "Indian",
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
    id: 160,
    name: "Ducati Panigale V4",
    price: 23999.99,
    category: "motorcycles",
    description: "Sport Bike | Ducati Red Color | Used | 1103cc Desmosedici Stradale Engine | 6-Speed Transmission | Quick Shift Up/Down | ABS | Ducati Traction Control | Launch Control | Warranty: 8 months remaining",
    images: [
      "/images/ducati_v4_1.jpg", 
      "/images/ducati_v4_2.jpg", 
      "/images/ducati_v4_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "DUC-V4-2021",
    brand: "Ducati",
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
    id: 161,
    name: "Kawasaki Ninja H2",
    price: 29999.99,
    category: "motorcycles",
    description: "Supercharged Sport Bike | Metallic Gray Color | Used | 998cc Supercharged Engine | 6-Speed Transmission | Quick Shifter | ABS | KIBS | KTRC | Warranty: 12 months comprehensive",
    images: [
      "/images/kawasaki_h2_1.jpg", 
      "/images/kawasaki_h2_2.jpg", 
      "/images/kawasaki_h2_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "KAW-H2-2021",
    brand: "Kawasaki",
    rating: {
      value: 4.9,
      count: 5
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 162,
    name: "BMW R 1250 GS Adventure",
    price: 21999.99,
    category: "motorcycles",
    description: "Adventure Bike | Light White Color | Used | 1254cc Boxer Engine | 6-Speed Transmission | ABS Pro | Dynamic ESA | Ride Modes Pro | Keyless Ride | Warranty: 15 months remaining",
    images: [
      "/images/bmw_gs_1.jpg", 
      "/images/bmw_gs_2.jpg", 
      "/images/bmw_gs_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "BMW-GSA-2022",
    brand: "BMW",
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
    id: 163,
    name: "Triumph Tiger 1200",
    price: 19999.99,
    category: "motorcycles",
    description: "Adventure Bike | Sapphire Black Color | Used | 1160cc Triple Engine | 6-Speed Transmission | Cornering ABS | IMU-Based TC | Multiple Ride Modes | Heated Grips | Warranty: 10 months remaining",
    images: [
      "/images/triumph_tiger_1.jpg", 
      "/images/triumph_tiger_2.jpg", 
      "/images/triumph_tiger_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "TRI-TIGER-2022",
    brand: "Triumph",
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
    id: 164,
    name: "Suzuki Hayabusa",
    price: 17999.99,
    category: "motorcycles",
    description: "Sport Touring | Metallic Matte Black Color | Used | 1340cc Engine | 6-Speed Transmission | Quick Shift System | SDMS | SIRS | Bi-Directional Quick Shift | Warranty: 9 months remaining",
    images: [
      "/images/suzuki_hayabusa_1.jpg", 
      "/images/suzuki_hayabusa_2.jpg", 
      "/images/suzuki_hayabusa_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "SUZ-HAYA-2022",
    brand: "Suzuki",
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
    id: 165,
    name: "KTM 1290 Super Adventure R",
    price: 18999.99,
    category: "motorcycles",
    description: "Adventure Bike | Orange Color | Used | 1301cc V-Twin Engine | 6-Speed Transmission | Cornering ABS | Motorcycle Stability Control | Multiple Ride Modes | Quick Shifter | Warranty: 11 months remaining",
    images: [
      "/images/ktm_1290_1.jpg", 
      "/images/ktm_1290_2.jpg", 
      "/images/ktm_1290_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "KTM-1290-2022",
    brand: "KTM",
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
    id: 166,
    name: "Harley-Davidson Low Rider S",
    price: 18999.99,
    category: "motorcycles",
    description: "Cruiser Motorcycle | Billiard Red Color | Used | Milwaukee-Eight 117 Engine | 6-Speed Transmission | ABS | Inverted Front Forks | Dual Disc Front Brakes | Warranty: 12 months comprehensive",
    images: [
      "/images/hd_lowrider_1.jpg", 
      "/images/hd_lowrider_2.jpg", 
      "/images/hd_lowrider_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "HD-LRS-2022",
    brand: "Harley-Davidson",
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
    id: 167,
    name: "Honda Africa Twin Adventure Sports",
    price: 16999.99,
    category: "motorcycles",
    description: "Adventure Bike | Grand Prix Red Color | Used | 1084cc Parallel-Twin Engine | 6-Speed DCT | ABS | HSTC | Heated Grips | Aluminum Panniers | Warranty: 14 months remaining",
    images: [
      "/images/honda_africa_1.jpg", 
      "/images/honda_africa_2.jpg", 
      "/images/honda_africa_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "HON-AFRICA-2022",
    brand: "Honda",
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
    id: 168,
    name: "Yamaha MT-09",
    price: 9999.99,
    category: "motorcycles",
    description: "Naked Bike | Storm Fluo Color | Used | 890cc CP3 Engine | 6-Speed Transmission | Quick Shift System | ABS | TCS | Slide Control System | Warranty: 6 months remaining",
    images: [
      "/images/yamaha_mt09_1.jpg", 
      "/images/yamaha_mt09_2.jpg", 
      "/images/yamaha_mt09_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "YAM-MT09-2021",
    brand: "Yamaha",
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
    id: 169,
    name: "Ducati Multistrada V4",
    price: 22999.99,
    category: "motorcycles",
    description: "Adventure Bike | Ducati Red Color | Used | 1158cc Granturismo Engine | 6-Speed Transmission | Radar System | Cornering ABS | Ducati Traction Control | Skyhook Suspension | Warranty: 10 months remaining",
    images: [
      "/images/ducati_multi_1.jpg", 
      "/images/ducati_multi_2.jpg", 
      "/images/ducati_multi_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "DUC-MULTI-2022",
    brand: "Ducati",
    rating: {
      value: 4.8,
      count: 8
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 170,
    name: "Kawasaki Z900",
    price: 8999.99,
    category: "motorcycles",
    description: "Naked Bike | Metallic Gray Color | Used | 948cc Inline-Four Engine | 6-Speed Transmission | ABS | Kawasaki Traction Control | Power Modes | Assist & Slipper Clutch | Warranty: 7 months remaining",
    images: [
      "/images/kawasaki_z900_1.jpg", 
      "/images/kawasaki_z900_2.jpg", 
      "/images/kawasaki_z900_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "KAW-Z900-2021",
    brand: "Kawasaki",
    rating: {
      value: 4.6,
      count: 16
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 171,
    name: "BMW S 1000 RR",
    price: 18999.99,
    category: "motorcycles",
    description: "Sport Bike | Racing Red Color | Used | 999cc Inline-Four Engine | 6-Speed Transmission | Shift Cam Pro | ABS Pro | DTC | Multiple Riding Modes | Warranty: 12 months comprehensive",
    images: [
      "/images/bmw_s1000rr_1.jpg", 
      "/images/bmw_s1000rr_2.jpg", 
      "/images/bmw_s1000rr_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "BMW-S1000RR-2022",
    brand: "BMW",
    rating: {
      value: 4.9,
      count: 6
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 172,
    name: "Indian Scout Bobber",
    price: 12999.99,
    category: "motorcycles",
    description: "Cruiser Motorcycle | Thunder Black Smoke Color | Used | 1133cc Liquid-Cooled V-Twin | 6-Speed Transmission | ABS | USB Charging | Low Profile Handlebar | Warranty: 9 months remaining",
    images: [
      "/images/indian_scout_1.jpg", 
      "/images/indian_scout_2.jpg", 
      "/images/indian_scout_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "IND-SCOUT-2022",
    brand: "Indian",
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
    id: 173,
    name: "Triumph Street Triple RS",
    price: 11999.99,
    category: "motorcycles",
    description: "Naked Bike | Crystal White Color | Used | 765cc Triple Engine | 6-Speed Transmission | Quick Shifter | ABS | TCS | Multiple Riding Modes | Warranty: 8 months remaining",
    images: [
      "/images/triumph_striple_1.jpg", 
      "/images/triumph_striple_2.jpg", 
      "/images/triumph_striple_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "TRI-STRI-2022",
    brand: "Triumph",
    rating: {
      value: 4.8,
      count: 11
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 174,
    name: "Suzuki GSX-S1000",
    price: 10999.99,
    category: "motorcycles",
    description: "Naked Bike | Metallic Triton Blue Color | Used | 999cc Inline-Four Engine | 6-Speed Transmission | ABS | Suzuki Traction Control | Easy Start System | Low RPM Assist | Warranty: 7 months remaining",
    images: [
      "/images/suzuki_gsxs_1.jpg", 
      "/images/suzuki_gsxs_2.jpg", 
      "/images/suzuki_gsxs_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "SUZ-GSXS-2021",
    brand: "Suzuki",
    rating: {
      value: 4.6,
      count: 15
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 175,
    name: "KTM 390 Duke",
    price: 5999.99,
    category: "motorcycles",
    description: "Naked Bike | Orange Color | Used | 373cc Single-Cylinder Engine | 6-Speed Transmission | ABS | Supermoto ABS Mode | LED Lighting | TFT Display | Warranty: 10 months remaining",
    images: [
      "/images/ktm_390_1.jpg", 
      "/images/ktm_390_2.jpg",
      "/images/ktm_390_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "KTM-390-2022",
    brand: "KTM",
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
    id: 176,
    name: "Harley-Davidson Road King Special",
    price: 22999.99,
    category: "motorcycles",
    description: "Touring Motorcycle | Billiard Red Color | Used | Milwaukee-Eight 114 Engine | 6-Speed Transmission | ABS | Reflex Linked Brakes | LED Lighting | Hard Lower Fairings | Warranty: 11 months remaining",
    images: [
      "/images/hd_roadking_1.jpg", 
      "/images/hd_roadking_2.jpg", 
      "/images/hd_roadking_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "HD-RKS-2022",
    brand: "Harley-Davidson",
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
    id: 177,
    name: "Honda CBR1000RR-R Fireblade SP",
    price: 25999.99,
    category: "motorcycles",
    description: "Sport Bike | Grand Prix Red Color | Used | 999cc Inline-Four Engine | 6-Speed Transmission | Quick Shifter | Öhlins Electronic Suspension | IMU-Based Electronics | Winglets | Warranty: 12 months comprehensive",
    images: [
      "/images/honda_fireblade_1.jpg", 
      "/images/honda_fireblade_2.jpg", 
      "/images/honda_fireblade_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "HON-FIRE-2022",
    brand: "Honda",
    rating: {
      value: 4.9,
      count: 8
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 178,
    name: "Yamaha Ténéré 700",
    price: 10999.99,
    category: "motorcycles",
    description: "Adventure Bike | Ceramic Ice Color | Used | 689cc CP2 Engine | 6-Speed Transmission | ABS | Rally-Inspired Chassis | Long Travel Suspension | Spoke Wheels | Warranty: 9 months remaining",
    images: [
      "/images/yamaha_tenere_1.jpg", 
      "/images/yamaha_tenere_2.jpg", 
      "/images/yamaha_tenere_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "YAM-TEN-2022",
    brand: "Yamaha",
    rating: {
      value: 4.8,
      count: 16
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 179,
    name: "Indian FTR R Carbon",
    price: 14999.99,
    category: "motorcycles",
    description: "Naked Sport Bike | Black Smoke Color | Used | 1203cc V-Twin Engine | 6-Speed Transmission | ABS | Traction Control | Ride Modes | Carbon Fiber Accents | Warranty: 10 months remaining",
    images: [
      "/images/indian_ftr_1.jpg", 
      "/images/indian_ftr_2.jpg", 
      "/images/indian_ftr_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "IND-FTR-2022",
    brand: "Indian",
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
    id: 180,
    name: "Ducati Streetfighter V4 S",
    price: 23999.99,
    category: "motorcycles",
    description: "Naked Bike | Ducati Red Color | Used | 1103cc Desmosedici Stradale Engine | 6-Speed Transmission | Quick Shift Up/Down | Öhlins Smart EC 2.0 | Winglets | Full LED Lighting | Warranty: 8 months remaining",
    images: [
      "/images/ducati_streetfighter_1.jpg", 
      "/images/ducati_streetfighter_2.jpg", 
      "/images/ducati_streetfighter_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "DUC-SF-2022",
    brand: "Ducati",
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
    id: 181,
    name: "Kawasaki Z H2",
    price: 18999.99,
    category: "motorcycles",
    description: "Supercharged Naked Bike | Metallic Graphite Gray Color | Used | 998cc Supercharged Engine | 6-Speed Transmission | Quick Shifter | KIBS | KTRC | Multiple Power Modes | Warranty: 11 months comprehensive",
    images: [
      "/images/kawasaki_zh2_1.jpg", 
      "/images/kawasaki_zh2_2.jpg", 
      "/images/kawasaki_zh2_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "KAW-ZH2-2022",
    brand: "Kawasaki",
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
    id: 182,
    name: "BMW R 18 Transcontinental",
    price: 24999.99,
    category: "motorcycles",
    description: "Bagger Motorcycle | Mineral Gray Metallic Color | Used | 1802cc Boxer Engine | 6-Speed Transmission | Reverse Assist | Adaptive Headlight | Marshall Gold Series Audio | Comprehensive Touring Package | Warranty: 15 months remaining",
    images: [
      "/images/bmw_r18_1.jpg", 
      "/images/bmw_r18_2.jpg", 
      "/images/bmw_r18_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "BMW-R18TC-2022",
    brand: "BMW",
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
    id: 183,
    name: "Triumph Rocket 3 R",
    price: 21999.99,
    category: "motorcycles",
    description: "Power Cruiser | Sapphire Black Color | Used | 2458cc Triple Engine | 6-Speed Transmission | Cornering ABS | IMU-Based TC | Keyless Ignition | Full LED Lighting | Warranty: 12 months comprehensive",
    images: [
      "/images/triumph_rocket_1.jpg", 
      "/images/triumph_rocket_2.jpg", 
      "/images/triumph_rocket_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "TRI-ROCKET-2022",
    brand: "Triumph",
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
    id: 184,
    name: "Suzuki V-Strom 1050XT",
    price: 13999.99,
    category: "motorcycles",
    description: "Adventure Bike | Champion Yellow No.2 Color | Used | 1037cc V-Twin Engine | 6-Speed Transmission | ABS | Traction Control | Cruise Control | Spoke Wheels | Warranty: 10 months remaining",
    images: [
      "/images/suzuki_vstrom_1.jpg", 
      "/images/suzuki_vstrom_2.jpg", 
      "/images/suzuki_vstrom_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "SUZ-VSTROM-2022",
    brand: "Suzuki",
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
    id: 185,
    name: "KTM 890 Adventure R",
    price: 14999.99,
    category: "motorcycles",
    description: "Adventure Bike | Orange Color | Used | 889cc Parallel-Twin Engine | 6-Speed Transmission | Cornering ABS | Motorcycle Stability Control | Off-Road Mode | WP XPLOR Suspension | Warranty: 11 months remaining",
    images: [
      "/images/ktm_890_1.jpg", 
      "/images/ktm_890_2.jpg", 
      "/images/ktm_890_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "KTM-890-2022",
    brand: "KTM",
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
    id: 186,
    name: "Trek Domane SL 7",
    price: 5499.99,
    category: "bicycles",
    description: "Endurance Road Bike | Crimson Red Color | Used | Carbon Frame | Shimano Ultegra Di2 12-Speed | IsoSpeed Decoupler | Hydraulic Disc Brakes | Bontrager Pro Wheelset | Warranty: 2 years remaining",
    images: [
      "/images/trek_domane_1.jpg",
      "/images/trek_domane_2.jpg", 
      "/images/trek_domane_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "TREK-DOM-2023",
    brand: "Trek",
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
    id: 187,
    name: "Specialized S-Works Tarmac SL7",
    price: 12500.00,
    category: "bicycles",
    description: "Race Bike | Gloss White Color | Used | FACT 12r Carbon | SRAM Red eTap AXS | Hydraulic Disc Brakes | Roval Alpinist Wheels | SWAT Storage | Warranty: Lifetime frame",
    images: [
      "/images/specialized_tarmac_1.jpg", 
      "/images/specialized_tarmac_2.jpg", 
      "/images/specialized_tarmac_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "SPEC-TARM-2023",
    brand: "Specialized",
    rating: {
      value: 4.9,
      count: 8
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 188,
    name: "Cannondale SuperSix EVO Hi-MOD",
    price: 8999.99,
    category: "bicycles",
    description: "Race Bike | Black Inc Color | Used | Hi-MOD Carbon | Shimano Dura-Ace Di2 | HollowGram Knot Wheels | Save Micro-Suspension | Integrated Cockpit | Warranty: 5 years frame",
    images: [
      "/images/cannondale_evo_1.jpg", 
      "/images/cannondale_evo_2.jpg", 
      "/images/cannondale_evo_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "CANN-EVO-2023",
    brand: "Cannondale",
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
    id: 189,
    name: "Santa Cruz Hightower Carbon C",
    price: 5999.99,
    category: "bicycles",
    description: "Mountain Bike | Gloss Blue Color | Used | Carbon C Frame | SRAM GX Eagle | 150mm Travel | RockShox Suspension | Hydraulic Disc Brakes | Warranty: Lifetime frame",
    images: [
      "/images/santa_hightower_1.jpg", 
      "/images/santa_hightower_2.jpg", 
      "/images/santa_hightower_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "SANTA-HT-2023",
    brand: "Santa Cruz",
    rating: {
      value: 4.7,
      count: 15
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 190,
    name: "Giant Defy Advanced Pro 0",
    price: 4799.99,
    category: "bicycles",
    description: "Endurance Bike | Charcoal Color | Used | Advanced Carbon | Shimano Ultegra Di2 | D-Fuse Seatpost | Giant SLR 1 Wheels | Hydraulic Disc Brakes | Warranty: 2 years",
    images: [
      "/images/giant_defy_1.jpg", 
      "/images/giant_defy_2.jpg", 
      "/images/giant_defy_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "GIANT-DEFY-2023",
    brand: "Giant",
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
    id: 191,
    name: "Cervelo Caledonia-5",
    price: 6999.99,
    category: "bicycles",
    description: "All-Road Bike | Stealth Color | Used | Carbon Frame | SRAM Force eTap AXS | Reserve Wheels | Integrated Cockpit | Tire Clearance 34mm | Warranty: 5 years",
    images: [
      "/images/cervelo_caledonia_1.jpg", 
      "/images/cervelo_caledonia_2.jpg", 
      "/images/cervelo_caledonia_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "CERV-CAL-2023",
    brand: "Cervelo",
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
    id: 192,
    name: "Yeti SB130 T-Series",
    price: 8499.99,
    category: "bicycles",
    description: "Mountain Bike | Turquoise Color | Used | Carbon Frame | SRAM X01 Eagle | 130mm Travel | Fox Factory Suspension | Switch Infinity Technology | Warranty: Lifetime",
    images: [
      "/images/yeti_sb130_1.jpg", 
      "/images/yeti_sb130_2.jpg", 
      "/images/yeti_sb130_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "YETI-SB130-2023",
    brand: "Yeti",
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
    id: 193,
    name: "Scott Addict RC 20",
    price: 5999.99,
    category: "bicycles",
    description: "Race Bike | Pearl White Color | Used | HMX Carbon | Shimano Ultegra Di2 | Syncros Creston Cockpit | Hydraulic Disc Brakes | Weight: 7.3kg | Warranty: 5 years",
    images: [
      "/images/scott_addict_1.jpg", 
      "/images/scott_addict_2.jpg", 
      "/images/scott_addict_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "SCOTT-ADD-2023",
    brand: "Scott",
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
    id: 194,
    name: "Orbea Orca M20iLTD",
    price: 6499.99,
    category: "bicycles",
    description: "Race Bike | Blueberry Color | Used | OMR Carbon | Shimano Ultegra Di2 | Orbea OC Wheels | Hydraulic Disc Brakes | Integrated Cockpit | Warranty: 5 years",
    images: [
      "/images/orbea_orca_1.jpg", 
      "/images/orbea_orca_2.jpg", 
      "/images/orbea_orca_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "ORBEA-ORCA-2023",
    brand: "Orbea",
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
    id: 195,
    name: "Bianchi Oltre XR4",
    price: 11999.99,
    category: "bicycles",
    description: "Race Bike | Celeste Color | Used | Countervail Carbon | Campagnolo Super Record | Bianchi RC Wheels | Integrated Cockpit | CV Vibration Cancelling | Warranty: Lifetime",
    images: [
      "/images/bianchi_oltre_1.jpg", 
      "/images/bianchi_oltre_2.jpg", 
      "/images/bianchi_oltre_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "BIAN-OLT-2023",
    brand: "Bianchi",
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
    id: 196,
    name: "Canyon Ultimate CF SLX 8",
    price: 5499.99,
    category: "bicycles",
    description: "Race Bike | Stealth Black Color | Used | Carbon Frame | Shimano Ultegra Di2 | DT Swiss Wheels | Hydraulic Disc Brakes | Integrated Cockpit | Warranty: 6 years",
    images: [
      "/images/canyon_ultimate_1.jpg", 
      "/images/canyon_ultimate_2.jpg", 
      "/images/canyon_ultimate_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "CANYON-ULT-2023",
    brand: "Canyon",
    rating: {
      value: 4.8,
      count: 16
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 197,
    name: "Pinarello Dogma F",
    price: 14999.99,
    category: "bicycles",
    description: "Race Bike | Black Color | Used | Torayca Carbon | SRAM Red eTap AXS | Most Talon Cockpit | Onda Fork Design | Asymmetric Frame | Warranty: Lifetime",
    images: [
      "/images/pinarello_dogma_1.jpg", 
      "/images/pinarello_dogma_2.jpg", 
      "/images/pinarello_dogma_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "PINA-DOG-2023",
    brand: "Pinarello",
    rating: {
      value: 4.9,
      count: 6
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 198,
    name: "Colnago C68",
    price: 12999.99,
    category: "bicycles",
    description: "Race Bike | Italia Color | Used | Carbon Frame | Campagnolo Super Record | Colnago CC.01 Wheels | Threaded Bottom Bracket | Custom Geometry | Warranty: Lifetime",
    images: [
      "/images/colnago_c68_1.jpg", 
      "/images/colnago_c68_2.jpg", 
      "/images/colnago_c68_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "COLN-C68-2023",
    brand: "Colnago",
    rating: {
      value: 4.8,
      count: 8
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 199,
    name: "Factor OSTRO VAM",
    price: 10999.99,
    category: "bicycles",
    description: "Aero Bike | Black Color | Used | Carbon Frame | Shimano Dura-Ace Di2 | Black Inc Wheels | Integrated Cockpit | Aero Tube Shapes | Warranty: Lifetime",
    images: [
      "/images/factor_ostro_1.jpg", 
      "/images/factor_ostro_2.jpg", 
      "/images/factor_ostro_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "FACT-OST-2023",
    brand: "Factor",
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
    id: 200,
    name: "Look 795 Blade RS",
    price: 8999.99,
    category: "bicycles",
    description: "Race Bike | Red Color | Used | Carbon Frame | SRAM Force eTap AXS | Integrated Cockpit | Aerodynamic Design | C-Stem System | Warranty: 5 years",
    images: [
      "/images/look_795_1.jpg", 
      "/images/look_795_2.jpg", 
      "/images/look_795_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "LOOK-795-2023",
    brand: "Look",
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
    id: 201,
    name: "Time Alpe d'Huez 01",
    price: 7999.99,
    category: "bicycles",
    description: "Climbing Bike | Blue Color | Used | Carbon Frame | Shimano Ultegra Di2 | Time Monobloc Wheels | PressFit Bottom Bracket | Active Technology | Warranty: Lifetime",
    images: [
      "/images/time_alpe_1.jpg", 
      "/images/time_alpe_2.jpg", 
      "/images/time_alpe_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "TIME-ALPE-2023",
    brand: "Time",
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
    id: 202,
    name: "Wilier Zero SLR",
    price: 9999.99,
    category: "bicycles",
    description: "Climbing Bike | Black Color | Used | Carbon Frame | Campagnolo Super Record | Wilier Wheels | Integrated Cockpit | Ultra Lightweight | Warranty: Lifetime",
    images: [
      "/images/wilier_zero_1.jpg", 
      "/images/wilier_zero_2.jpg", 
      "/images/wilier_zero_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "WILI-ZERO-2023",
    brand: "Wilier",
    rating: {
      value: 4.8,
      count: 11
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 203,
    name: "Ridley Noah Fast",
    price: 6999.99,
    category: "bicycles",
    description: "Aero Bike | White Color | Used | Carbon Frame | SRAM Force eTap AXS | Ridley Carbon Wheels | Integrated Cockpit | F-Surface Technology | Warranty: 5 years",
    images: [
      "/images/ridley_noah_1.jpg", 
      "/images/ridley_noah_2.jpg", 
      "/images/ridley_noah_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "RIDL-NOAH-2023",
    brand: "Ridley",
    rating: {
      value: 4.6,
      count: 14
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 204,
    name: "BMC Teammachine SLR01",
    price: 11999.99,
    category: "bicycles",
    description: "Race Bike | Green Color | Used | Carbon Frame | Shimano Dura-Ace Di2 | DT Swiss Wheels | Integrated Cockpit | TCC Technology | Warranty: Lifetime",
    images: [
      "/images/bmc_team_1.jpg", 
      "/images/bmc_team_2.jpg", 
      "/images/bmc_team_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "BMC-TEAM-2023",
    brand: "BMC",
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
    id: 205,
    name: "Merida Reacto 9000",
    price: 7499.99,
    category: "bicycles",
    description: "Aero Bike | Red Color | Used | Carbon Frame | Shimano Ultegra Di2 | Vision Wheels | Integrated Cockpit | Aero Frame Design | Warranty: 5 years",
    images: [
      "/images/merida_reacto_1.jpg", 
      "/images/merida_reacto_2.jpg", 
      "/images/merida_reacto_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 1,
    sku: "MERI-REAC-2023",
    brand: "Merida",
    rating: {
      value: 4.7,
      count: 15
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 206,
    name: "PlayStation 5 Disc Edition",
    price: 499.99,
    category: "game consoles",
    description: "Ultra HD Blu-ray Disc Edition | White and Black Design | New | 825GB SSD | 4K/120fps Gaming | Ray Tracing Support | DualSense Wireless Controller | 3D Audio | Backward Compatible with PS4 Games | Warranty: 1 year manufacturer",
    images: [
      "/images/ps5_1.jpg", 
      "/images/ps5_2.jpg", 
      "/images/ps5_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 5,
    sku: "SONY-PS5-DISC",
    brand: "Sony",
    rating: {
      value: 4.8,
      count: 127
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 207,
    name: "Xbox Series X",
    price: 499.99,
    category: "game consoles",
    description: "1TB SSD Edition | Black Design | New | 4K/120fps Gaming | Ray Tracing Support | Quick Resume Feature | Backward Compatible | Dolby Vision Gaming | Includes Wireless Controller | Warranty: 1 year manufacturer",
    images: [
      "/images/xboxsx_1.jpg", 
      "/images/xboxsx_2.jpg", 
      "/images/xboxsx_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 4,
    sku: "MS-XSX-2023",
    brand: "Microsoft",
    rating: {
      value: 4.7,
      count: 98
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 208,
    name: "Nintendo Switch OLED",
    price: 349.99,
    category: "game consoles",
    description: "OLED Model | White Joy-Cons | New | 7-inch OLED Screen | 64GB Internal Storage | Enhanced Audio | Wide Adjustable Stand | Dock with Wired LAN Port | Handheld/TV/Tabletop Modes | Warranty: 1 year manufacturer",
    images: [
      "/images/switch_oled_1.jpg", 
      "/images/switch_oled_2.jpg", 
      "/images/switch_oled_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 8,
    sku: "NINT-SW-OLED",
    brand: "Nintendo",
    rating: {
      value: 4.6,
      count: 143
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 209,
    name: "PlayStation 5 Digital Edition",
    price: 399.99,
    category: "game consoles",
    description: "All-Digital Edition | White and Black Design | New | 825GB SSD | 4K/120fps Gaming | Ray Tracing Support | DualSense Wireless Controller | Disc-Free Gaming | Requires Digital Purchases | Warranty: 1 year manufacturer",
    images: [
      "/images/ps5de_1.jpg", 
      "/images/ps5de_2.jpg", 
      "/images/ps5de_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 3,
    sku: "SONY-PS5-DIGI",
    brand: "Sony",
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
    id: 210,
    name: "Xbox Series S",
    price: 299.99,
    category: "game consoles",
    description: "All-Digital Edition | White Design | New | 512GB SSD | 1440p/120fps Gaming | Ray Tracing Support | Quick Resume Feature | Backward Compatible | Smallest Xbox Ever | Warranty: 1 year manufacturer",
    images: [
      "/images/xboxss_1.jpg", 
      "/images/xboxss_2.jpg", 
      "/images/xboxss_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 7,
    sku: "MS-XSS-2023",
    brand: "Microsoft",
    rating: {
      value: 4.4,
      count: 112
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 211,
    name: "Nintendo Switch Lite",
    price: 199.99,
    category: "game consoles",
    description: "Handheld Only | Turquoise Color | New | 5.5-inch Touch Screen | Integrated Controls | Lightweight Design | Compatible with All Switch Games | Built-in Controllers | Long Battery Life | Warranty: 1 year manufacturer",
    images: [
      "/images/switch_lite_1.jpg", 
      "/images/switch_lite_2.jpg", 
      "/images/switch_lite_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 6,
    sku: "NINT-SW-LITE",
    brand: "Nintendo",
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
    id: 212,
    name: "Steam Deck 512GB",
    price: 649.99,
    category: "game consoles",
    description: "Handheld Gaming PC | Black Design | New | 7-inch Touchscreen | AMD APU | 512GB NVMe SSD | Anti-Glare Etched Glass | Portable PC Gaming | SteamOS | Compatible with Thousands of Games | Warranty: 1 year manufacturer",
    images: [
      "/images/steamdeck_1.jpg", 
      "/images/steamdeck_2.jpg", 
      "/images/steamdeck_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 4,
    sku: "VALVE-SD-512",
    brand: "Valve",
    rating: {
      value: 4.7,
      count: 94
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 213,
    name: "PlayStation 4 Pro",
    price: 299.99,
    category: "game consoles",
    description: "1TB HDD Edition | Black Design | Used | Excellent Condition | 4K Gaming Support | Enhanced Performance | HDR Compatible | Plays PS4 Games | Includes DualShock 4 Controller | Warranty: 3 months",
    images: [
      "/images/ps4pro_1.jpg", 
      "/images/ps4pro_2.jpg", 
      "/images/ps4pro_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 2,
    sku: "SONY-PS4-PRO",
    brand: "Sony",
    rating: {
      value: 4.2,
      count: 67
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 214,
    name: "Xbox One X",
    price: 279.99,
    category: "game consoles",
    description: "1TB HDD Edition | Black Design | Used | Excellent Condition | 4K Gaming Support | Enhanced Performance | HDR Compatible | Plays Xbox One Games | Includes Wireless Controller | Warranty: 3 months",
    images: [
      "/images/xboxonex_1.jpg", 
      "/images/xboxonex_2.jpg", 
      "/images/xboxonex_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 3,
    sku: "MS-X1X-2023",
    brand: "Microsoft",
    rating: {
      value: 4.1,
      count: 53
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 215,
    name: "Nintendo 3DS XL",
    price: 149.99,
    category: "game consoles",
    description: "Handheld Console | Blue/Black Design | Used | Good Condition | 3D Display Without Glasses | Dual Screens | Backward Compatible with DS Games | Includes Stylus | Camera Features | Warranty: 1 month",
    images: [
      "/images/3dsxl_1.jpg", 
      "/images/3dsxl_2.jpg", 
      "/images/3dsxl_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "NINT-3DS-XL",
    brand: "Nintendo",
    rating: {
      value: 4.0,
      count: 41
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 216,
    name: "PlayStation Vita",
    price: 129.99,
    category: "game consoles",
    description: "Handheld Console | Black Design | Used | Good Condition | 5-inch OLED Touchscreen | Dual Analog Sticks | Rear Touch Pad | PS4 Remote Play | Extensive Game Library | Warranty: 1 month",
    images: [
      "/images/psvita_1.jpg", 
      "/images/psvita_2.jpg", 
      "/images/psvita_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "SONY-PSVITA",
    brand: "Sony",
    rating: {
      value: 4.1,
      count: 38
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 217,
    name: "Xbox 360 E",
    price: 79.99,
    category: "game consoles",
    description: "Home Console | Black Design | Used | Working Condition | 250GB HDD | HD Gaming | Xbox Live Support | Backward Compatible with Some Xbox Games | Includes Wireless Controller | Warranty: No warranty",
    images: [
      "/images/xbox360e_1.jpg", 
      "/images/xbox360e_2.jpg", 
      "/images/xbox360e_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 2,
    sku: "MS-X360-E",
    brand: "Microsoft",
    rating: {
      value: 3.9,
      count: 29
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 218,
    name: "PlayStation 3 Slim",
    price: 89.99,
    category: "game consoles",
    description: "Home Console | Black Design | Used | Working Condition | 120GB HDD | Blu-ray Player | PlayStation Network | Backward Compatible with Some PS2 Games | Includes Controller | Warranty: No warranty",
    images: [
      "/images/ps3slim_1.jpg", 
      "/images/ps3slim_2.jpg", 
      "/images/ps3slim_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 2,
    sku: "SONY-PS3-SLIM",
    brand: "Sony",
    rating: {
      value: 3.8,
      count: 34
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 219,
    name: "Nintendo Wii U",
    price: 119.99,
    category: "game consoles",
    description: "Home Console | Black Design | Used | Good Condition | 32GB Storage | GamePad Controller | HD Graphics | Backward Compatible with Wii Games | Miiverse Support | Warranty: 1 month",
    images: [
      "/images/wiiu_1.jpg", 
      "/images/wiiu_2.jpg", 
      "/images/wiiu_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "NINT-WIIU-32",
    brand: "Nintendo",
    rating: {
      value: 3.7,
      count: 27
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 220,
    name: "Sega Genesis Mini",
    price: 79.99,
    category: "game consoles",
    description: "Mini Retro Console | Black Design | New | 42 Pre-installed Games | HDMI Output | replica Controller | Save States | HD Graphics | Plug-and-Play | Perfect for Retro Gaming Fans | Warranty: 1 year manufacturer",
    images: [
      "/images/genesis_mini_1.jpg", 
      "/images/genesis_mini_2.jpg", 
      "/images/genesis_mini_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 4,
    sku: "SEGA-GEN-MINI",
    brand: "Sega",
    rating: {
      value: 4.4,
      count: 63
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 221,
    name: "SNES Classic Edition",
    price: 99.99,
    category: "game consoles",
    description: "Mini Retro Console | Gray/Purple Design | New | 21 Pre-installed Games | HDMI Output | Replica Controllers | Save States | Rewind Feature | Includes Star Fox 2 | Warranty: 1 year manufacturer",
    images: [
      "/images/snes_mini_1.jpg", 
      "/images/snes_mini_2.jpg", 
      "/images/snes_mini_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 3,
    sku: "NINT-SNES-MINI",
    brand: "Nintendo",
    rating: {
      value: 4.6,
      count: 58
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 222,
    name: "PlayStation Classic",
    price: 59.99,
    category: "game consoles",
    description: "Mini Retro Console | Gray Design | New | 20 Pre-installed Games | HDMI Output | Replica Controllers | Save States | Virtual Memory Cards | Includes Original UI | Warranty: 1 year manufacturer",
    images: [
      "/images/psclassic_1.jpg", 
      "/images/psclassic_2.jpg", 
      "/images/psclassic_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 5,
    sku: "SONY-PS-CLASSIC",
    brand: "Sony",
    rating: {
      value: 3.9,
      count: 42
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 223,
    name: "Atari VCS",
    price: 299.99,
    category: "game consoles",
    description: "Modern Retro Console | Black Walnut Design | New | AMD Processor | 8GB RAM | 32GB Storage | 4K Support | PC Mode Capable | Classic Joystick Included | Can Run PC Games | Warranty: 1 year manufacturer",
    images: [
      "/images/atarivcs_1.jpg", 
      "/images/atarivcs_2.jpg", 
      "/images/atarivcs_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 2,
    sku: "ATARI-VCS-2023",
    brand: "Atari",
    rating: {
      value: 3.7,
      count: 31
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 224,
    name: "Oculus Quest 2",
    price: 299.99,
    category: "game consoles",
    description: "VR Headset | White Design | New | 128GB Storage | Wireless VR Gaming | Touch Controllers | Inside-Out Tracking | No PC Required | Supports Oculus Link | Extensive VR Library | Warranty: 1 year manufacturer",
    images: [
      "/images/quest2_1.jpg", 
      "/images/quest2_2.jpg", 
      "/images/quest2_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 6,
    sku: "META-Q2-128",
    brand: "Meta",
    rating: {
      value: 4.5,
      count: 87
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 225,
    name: "PlayStation VR2",
    price: 549.99,
    category: "game consoles",
    description: "VR Headset | White Design | New | 4K HDR Display | Eye Tracking | Haptic Feedback | Adaptive Triggers | Tempest 3D Audio | Requires PS5 | Sense Controllers Included | Warranty: 1 year manufacturer",
    images: [
      "/images/psvr2_1.jpg", 
      "/images/psvr2_2.jpg", 
      "/images/psvr2_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 3,
    sku: "SONY-PSVR2",
    brand: "Sony",
    rating: {
      value: 4.6,
      count: 45
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 226,
    name: "PlayStation 5 Pro",
    price: 699.99,
    category: "game consoles",
    description: "Enhanced Performance Edition | White and Black Design | New | 1TB SSD | 8K/120fps Gaming | Advanced Ray Tracing | DualSense Pro Controller | 3D AudioTech | PS5 Game Boost | Compatible with PS4 Games | Warranty: 2 years manufacturer",
    images: [
      "/images/ps5_pro_1.jpg", 
      "/images/ps5_pro_2.jpg", 
      "/images/ps5_pro_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 3,
    sku: "SONY-PS5-PRO",
    brand: "Sony",
    rating: {
      value: 4.9,
      count: 47
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 227,
    name: "Xbox Series X Pro Edition",
    price: 599.99,
    category: "game consoles",
    description: "Premium Gaming Console | Carbon Black Design | New | 2TB SSD | 8K/120fps Gaming | Enhanced Ray Tracing | Elite Series 3 Controller | Quick Resume | Backward Compatible | Dolby Vision Gaming | Warranty: 2 years manufacturer",
    images: [
      "/images/xboxsx_pro_1.jpg", 
      "/images/xboxsx_pro_2.jpg", 
      "/images/xboxsx_pro_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 2,
    sku: "MS-XSX-PRO",
    brand: "Microsoft",
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
    id: 228,
    name: "Nintendo Switch 2",
    price: 399.99,
    category: "game consoles",
    description: "Next-Generation Hybrid Console | Neon Blue/Red Joy-Cons | New | 128GB Storage | 4K/60fps Docked | OLED Display | Enhanced Battery Life | Backward Compatible | DLSS Support | Includes Pro Controller | Warranty: 1 year manufacturer",
    images: [
      "/images/switch2_1.jpg", 
      "/images/switch2_2.jpg", 
      "/images/switch2_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 5,
    sku: "NINT-SW2-2025",
    brand: "Nintendo",
    rating: {
      value: 4.7,
      count: 89
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 229,
    name: "Steam Deck OLED 1TB",
    price: 749.99,
    category: "game consoles",
    description: "Premium Handheld Gaming PC | Eclipse Black Design | New | 7.4-inch OLED Display | AMD Zen 2 Processor | 1TB NVMe SSD | 90Hz Refresh Rate | Enhanced Battery | SteamOS | Thousands of Compatible Games | Warranty: 1 year manufacturer",
    images: [
      "/images/steamdeck_oled_1.jpg", 
      "/images/steamdeck_oled_2.jpg", 
      "/images/steamdeck_oled_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 4,
    sku: "VALVE-SD-OLED1TB",
    brand: "Valve",
    rating: {
      value: 4.8,
      count: 67
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 230,
    name: "Xbox Cloud Gaming Device",
    price: 129.99,
    category: "game consoles",
    description: "Streaming Console | Snow White Design | New | Cloud Gaming Focus | 4K Streaming | Low Latency | Xbox Game Pass Included | Wi-Fi 6E | HDMI 2.1 | Voice Control | Compact Design | Warranty: 1 year manufacturer",
    images: [
      "/images/xbox_cloud_1.jpg", 
      "/images/xbox_cloud_2.jpg", 
      "/images/xbox_cloud_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 7,
    sku: "MS-XCLOUD-2025",
    brand: "Microsoft",
    rating: {
      value: 4.3,
      count: 28
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 231,
    name: "PlayStation Portal Remote Player",
    price: 199.99,
    category: "game consoles",
    description: "Remote Play Device | White Design | New | 8-inch LCD Display | DualSense Integration | PS5 Remote Play | 1080p/60fps | Wi-Fi Connectivity | 3.5mm Audio Jack | Lightweight Design | Warranty: 1 year manufacturer",
    images: [
      "/images/ps_portal_1.jpg", 
      "/images/ps_portal_2.jpg", 
      "/images/ps_portal_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 6,
    sku: "SONY-PSPORTAL",
    brand: "Sony",
    rating: {
      value: 4.4,
      count: 53
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 232,
    name: "Atari Jaguar Mini",
    price: 99.99,
    category: "game consoles",
    description: "Retro Mini Console | Black Design | New | 50 Pre-installed Games | HDMI Output | Replica Controller | Save States | HD Graphics | Scanline Filters | Includes Classic Atari Titles | Warranty: 1 year manufacturer",
    images: [
      "/images/atari_jaguar_mini_1.jpg", 
      "/images/atari_jaguar_mini_2.jpg", 
      "/images/atari_jaguar_mini_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 8,
    sku: "ATARI-JAG-MINI",
    brand: "Atari",
    rating: {
      value: 4.1,
      count: 42
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 233,
    name: "Sega Dreamcast Mini",
    price: 119.99,
    category: "game consoles",
    description: "Retro Mini Console | White Design | New | 40 Pre-installed Games | HDMI Output | Replica Controller | VMU Display | Online Multiplayer | HD Graphics | Includes Rare Titles | Warranty: 1 year manufacturer",
    images: [
      "/images/sega_dreamcast_mini_1.jpg", 
      "/images/sega_dreamcast_mini_2.jpg", 
      "/images/sega_dreamcast_mini_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 5,
    sku: "SEGA-DC-MINI",
    brand: "Sega",
    rating: {
      value: 4.6,
      count: 61
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 234,
    name: "Meta Quest 3 Pro",
    price: 699.99,
    category: "game consoles",
    description: "Advanced VR Headset | Black Design | New | Pancake Lenses | Color Passthrough | Eye/Face Tracking | Mixed Reality | 512GB Storage | Touch Pro Controllers | Wireless PC VR | Warranty: 1 year manufacturer",
    images: [
      "/images/quest3_pro_1.jpg", 
      "/images/quest3_pro_2.jpg", 
      "/images/quest3_pro_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 4,
    sku: "META-Q3-PRO",
    brand: "Meta",
    rating: {
      value: 4.7,
      count: 38
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 235,
    name: "Neo Geo Mini International Edition",
    price: 89.99,
    category: "game consoles",
    description: "Retro Mini Console | Red Design | New | 40 Pre-installed Games | HDMI Output | Replica Joystick | Save States | Scanline Filter | Multiplayer Support | Includes Metal Slug Series | Warranty: 1 year manufacturer",
    images: [
      "/images/neogeo_mini_1.jpg", 
      "/images/neogeo_mini_2.jpg", 
      "/images/neogeo_mini_3.jpg"
      ],
    highDemand: false,
    sold: false,
    quantity: 6,
    sku: "SNK-NEO-MINI",
    brand: "SNK",
    rating: {
      value: 4.2,
      count: 29
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 236,
    name: "Dell 14 Plus (DB14250)",
    price: 749.99,
    category: "laptops",
    description: "14-inch IPS Display | Platinum Silver Color | New | Intel Core Ultra 7 256V | 16GB RAM | 1TB SSD | Intel Arc Graphics | 20-hour Battery Life | Windows 11 Home | Wi-Fi 7 | Thunderbolt 4 | Premium Metal Build | Warranty: 1 year manufacturer",
    images: [
      "/images/dell_14_plus_1.jpg",
      "/images/dell_14_plus_2.jpg",
      "/images/dell_14_plus_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 8,
    sku: "DELL-14PLUS-2025",
    brand: "Dell",
    rating: {
      value: 4.0,
      count: 89
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 237,
    name: "Apple MacBook Air 13-inch M4",
    price: 897.50,
    category: "laptops",
    description: "13.6-inch Liquid Retina Display | Midnight Black Color | New | Apple M4 Chip | 16GB RAM | 512GB SSD | 18-hour Battery Life | macOS Sonoma | 12MP Center Stage Camera | MagSafe Charging | Fanless Design | Warranty: 1 year limited",
    images: [
      "/images/macbook_air_m4_1.jpg",
      "/images/macbook_air_m4_2.jpg",
      "/images/macbook_air_m4_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 12,
    sku: "APPLE-MBA-M4-13",
    brand: "Apple",
    rating: {
      value: 4.5,
      count: 127
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 238,
    name: "Acer Swift Go 14",
    price: 749.99,
    category: "laptops",
    description: "14-inch FHD Display | Silver Color | New | Intel Core Ultra 7 155H | 16GB RAM | 1TB SSD | Intel Arc Graphics | 9-hour Battery Life | Windows 11 Home | Thunderbolt 4 | Aluminum Chassis | NPU for AI Tasks | Warranty: 1 year manufacturer",
    images: [
      "/images/acer_swift_go_1.jpg",
      "/images/acer_swift_go_2.jpg",
      "/images/acer_swift_go_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 10,
    sku: "ACER-SWIFT-GO14",
    brand: "Acer",
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
    id: 239,
    name: "MSI Raider 18 HX AI",
    price: 4249.99,
    category: "laptops",
    description: "18-inch IPS Display | Core Black Color | New | Intel Core Ultra 9 275HX | 32GB RAM | 2TB SSD | NVIDIA RTX 5090 | Mechanical Keyboard | Per-Key RGB | Thunderbolt 5 | Cooler Boost 5 Technology | Warranty: 2 years manufacturer",
    images: [
      "/images/msi_raider_1.jpg",
      "/images/msi_raider_2.jpg",
      "/images/msi_raider_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 3,
    sku: "MSI-RAIDER-18HX",
    brand: "MSI",
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
    id: 240,
    name: "Acer Nitro V 15",
    price: 788.00,
    category: "laptops",
    description: "15.6-inch FHD 144Hz Display | Obsidian Black Color | New | AMD Ryzen 5 7535HS | 16GB RAM | 512GB SSD | NVIDIA RTX 4050 | 4-Zone RGB Keyboard | Dual Fan Cooling | Wi-Fi 6 | 10-hour Battery Life | Warranty: 1 year manufacturer",
    images: [
      "/images/acer_nitro_v_1.jpg",
      "/images/acer_nitro_v_2.jpg",
      "/images/acer_nitro_v_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 15,
    sku: "ACER-NITRO-V15",
    brand: "Acer",
    rating: {
      value: 3.5,
      count: 112
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 241,
    name: "Lenovo ThinkPad E14 Gen 5",
    price: 625.99,
    category: "laptops",
    description: "14-inch FHD Display | Black Color | New | Intel Core i7 | 16GB RAM | 512GB SSD | Intel Iris Xe | ThinkPad Keyboard | MIL-STD Durability | Thunderbolt 4 | 3-Year Warranty | Windows 11 Pro | Warranty: 3 years comprehensive",
    images: [
      "/images/thinkpad_e14_1.jpg",
      "/images/thinkpad_e14_2.jpg",
      "/images/thinkpad_e14_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 9,
    sku: "LENOVO-E14-G5",
    brand: "Lenovo",
    rating: {
      value: 4.0,
      count: 68
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 242,
    name: "Asus Zenbook 14 OLED",
    price: 999.99,
    category: "laptops",
    description: "14-inch OLED Display | Ponder Blue Color | New | AMD Ryzen 7 8840HS | 16GB RAM | 512GB SSD | 16-hour Battery Life | NumberPad | Harman Kardon Audio | Wi-Fi 6E | Windows 11 Home | Warranty: 1 year manufacturer",
    images: [
      "/images/asus_zenbook_1.jpg",
      "/images/asus_zenbook_2.jpg",
      "/images/asus_zenbook_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 7,
    sku: "ASUS-ZENBOOK-14",
    brand: "Asus",
    rating: {
      value: 4.4,
      count: 94
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 243,
    name: "Samsung Galaxy Chromebook Plus",
    price: 529.99,
    category: "laptops",
    description: "15.6-inch AMOLED Display | Mercury Gray Color | New | Intel Core i5 | 8GB RAM | 256GB SSD | ChromeOS | S Pen Included | 1080p Webcam | 13-hour Battery Life | Aluminum Build | Warranty: 1 year manufacturer",
    images: [
      "/images/samsung_chromebook_1.jpg",
      "/images/samsung_chromebook_2.jpg",
      "/images/samsung_chromebook_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 11,
    sku: "SAMSUNG-CHROME-PLUS",
    brand: "Samsung",
    rating: {
      value: 4.2,
      count: 57
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 244,
    name: "Dell Precision 5690",
    price: 2979.00,
    category: "laptops",
    description: "16-inch 4K OLED Display | Gray Color | New | Intel Core Ultra 9 | 64GB RAM | 2TB SSD | NVIDIA RTX 5000 Ada | ISV Certified | Dell Optimizer | Thunderbolt 4 | Carbon Fiber Build | Warranty: 3 years premium",
    images: [
      "/images/dell_precision_1.jpg",
      "/images/dell_precision_2.jpg",
      "/images/dell_precision_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 2,
    sku: "DELL-PRECISION-5690",
    brand: "Dell",
    rating: {
      value: 4.7,
      count: 36
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 245,
    name: "Acer Aspire 3",
    price: 304.00,
    category: "laptops",
    description: "15.6-inch FHD Display | Pure Silver Color | New | AMD Ryzen 3 7320U | 8GB RAM | 128GB SSD | AMD Radeon Graphics | 17-hour Battery Life | Wi-Fi 6 | Windows 11 Home | Numeric Keypad | Warranty: 1 year limited",
    images: [
      "/images/acer_aspire_3_1.jpg",
      "/images/acer_aspire_3_2.jpg",
      "/images/acer_aspire_3_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 20,
    sku: "ACER-ASPIRE-3",
    brand: "Acer",
    rating: {
      value: 3.5,
      count: 134
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 246,
    name: "Lenovo ThinkPad X1 2-in-1 Gen 10",
    price: 2336.00,
    category: "laptops",
    description: "14-inch 2.8K Display | Black Color | New | Intel Core Ultra 7 | 32GB RAM | 1TB SSD | Intel Arc Graphics | 360-degree Hinge | Lenovo Pen Pro | 25-hour Battery Life | 5G Connectivity | Warranty: 3 years onsite",
    images: [
      "/images/thinkpad_x1_1.jpg",
      "/images/thinkpad_x1_2.jpg",
      "/images/thinkpad_x1_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 4,
    sku: "LENOVO-X1-2IN1",
    brand: "Lenovo",
    rating: {
      value: 4.6,
      count: 41
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 247,
    name: "Asus ProArt PZ13",
    price: 1299.99,
    category: "laptops",
    description: "13.3-inch OLED Display | Tech Black Color | New | AMD Ryzen 7 | 16GB RAM | 1TB SSD | NVIDIA RTX 4050 | ASUS Pen 2.0 | Dial Controller | Pantone Validation | Wi-Fi 6E | Windows 11 Pro | Warranty: 2 years manufacturer",
    images: [
      "/images/asus_proart_1.jpg",
      "/images/asus_proart_2.jpg",
      "/images/asus_proart_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 5,
    sku: "ASUS-PROART-PZ13",
    brand: "Asus",
    rating: {
      value: 4.3,
      count: 29
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 248,
    name: "HP Chromebook Plus x360",
    price: 358.83,
    category: "laptops",
    description: "14-inch FHD Touch Display | Natural Silver Color | New | Intel Core i3 | 8GB RAM | 128GB SSD | 360-degree Hinge | ChromeOS | HP Pen | 12-hour Battery Life | B&O Audio | Warranty: 1 year limited",
    images: [
      "/images/hp_chromebook_1.jpg",
      "/images/hp_chromebook_2.jpg",
      "/images/hp_chromebook_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 14,
    sku: "HP-CHROME-X360",
    brand: "HP",
    rating: {
      value: 4.1,
      count: 63
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 249,
    name: "Apple MacBook Air M1 (2020)",
    price: 599.00,
    category: "laptops",
    description: "13.3-inch Retina Display | Space Gray Color | Used | Apple M1 Chip | 8GB RAM | 256GB SSD | 29-hour Battery Life | macOS | Backlit Magic Keyboard | Touch ID | Excellent Condition | Warranty: 3 months",
    images: [
      "/images/macbook_air_m1_1.jpg",
      "/images/macbook_air_m1_2.jpg",
      "/images/macbook_air_m1_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 6,
    sku: "APPLE-MBA-M1-2020",
    brand: "Apple",
    rating: {
      value: 4.4,
      count: 187
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 250,
    name: "Razer Blade 18",
    price: 5199.99,
    category: "laptops",
    description: "18-inch Dual-Mode Display | Black Color | New | Intel Core Ultra 9 | 64GB RAM | 4TB SSD | NVIDIA RTX 5090 | Per-key RGB | Thunderbolt 5 | Vapor Chamber Cooling | Windows 11 Home | Warranty: 2 years manufacturer",
    images: [
      "/images/razer_blade_1.jpg",
      "/images/razer_blade_2.jpg",
      "/images/razer_blade_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 2,
    sku: "RAZER-BLADE-18",
    brand: "Razer",
    rating: {
      value: 4.9,
      count: 31
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 251,
    name: "MSI Katana 15 HX",
    price: 999.99,
    category: "laptops",
    description: "15.6-inch FHD 144Hz Display | Black Color | New | Intel Core i7-14650HX | 16GB RAM | 512GB SSD | NVIDIA RTX 5050 | 4-Zone RGB | Cooler Boost 5 | Wi-Fi 6 | Windows 11 Home | Warranty: 1 year manufacturer",
    images: [
      "/images/msi_katana_1.jpg",
      "/images/msi_katana_2.jpg",
      "/images/msi_katana_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 8,
    sku: "MSI-KATANA-15HX",
    brand: "MSI",
    rating: {
      value: 3.8,
      count: 47
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 252,
    name: "Lenovo Legion 5i",
    price: 1299.99,
    category: "laptops",
    description: "16-inch QHD Display | Storm Gray Color | New | Intel Core i7 | 16GB RAM | 1TB SSD | NVIDIA RTX 4060 | 165Hz Display | Legion ColdFront 4.0 | Nahimic Audio | Wi-Fi 6 | Windows 11 Home | Warranty: 1 year manufacturer",
    images: [
      "/images/lenovo_legion_1.jpg",
      "/images/lenovo_legion_2.jpg",
      "/images/lenovo_legion_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 7,
    sku: "LENOVO-LEGION-5I",
    brand: "Lenovo",
    rating: {
      value: 4.2,
      count: 83
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 253,
    name: "Asus ROG Zephyrus G14",
    price: 1799.99,
    category: "laptops",
    description: "14-inch OLED Display | Eclipse Gray Color | New | AMD Ryzen 9 | 32GB RAM | 1TB SSD | NVIDIA RTX 4070 | AniMe Matrix Display | ROG Intelligent Cooling | Wi-Fi 6E | Windows 11 Home | Warranty: 2 years manufacturer",
    images: [
      "/images/asus_zephyrus_1.jpg",
      "/images/asus_zephyrus_2.jpg",
      "/images/asus_zephyrus_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 4,
    sku: "ASUS-ZEPHYRUS-G14",
    brand: "Asus",
    rating: {
      value: 4.7,
      count: 59
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 254,
    name: "Framework Laptop 13",
    price: 899.00,
    category: "laptops",
    description: "13.5-inch 3:2 Display | Silver Color | New | Intel Core Ultra 5 | 16GB RAM | 512GB SSD | Modular Design | User-Upgradable | Expansion Card System | 11-hour Battery Life | Windows 11 Home | Warranty: 1 year manufacturer",
    images: [
      "/images/framework_13_1.jpg",
      "/images/framework_13_2.jpg",
      "/images/framework_13_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 6,
    sku: "FRAMEWORK-13-2025",
    brand: "Framework",
    rating: {
      value: 4.5,
      count: 72
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 255,
    name: "Microsoft Surface Laptop 7",
    price: 1299.99,
    category: "laptops",
    description: "15-inch PixelSense Display | Platinum Color | New | Snapdragon X Elite | 16GB RAM | 512GB SSD | Copilot+ PC | 22-hour Battery Life | Windows 11 Home | Alcantara Keyboard | Thunderbolt 4 | Warranty: 2 years limited",
    images: [
      "/images/surface_laptop_7_1.jpg",
      "/images/surface_laptop_7_2.jpg",
      "/images/surface_laptop_7_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 9,
    sku: "MS-SURFACE-7-15",
    brand: "Microsoft",
    rating: {
      value: 4.4,
      count: 68
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 256,
    name: "Framework Laptop 13 (2025 Edition)",
    price: 1299.99,
    category: "laptops",
    description: "Modular DIY Edition | Magnesium Alloy | New | Intel Core Ultra 7 265V | User-Upgradable RAM/Storage | 13.5-inch 3:2 Display | Thunderbolt 4 Expansion | Repairable Design | Windows 11 Pro | Eco-Friendly Packaging | Warranty: 3 years modular components",
    images: [
      "/images/framework_13_2025_1.jpg",
      "/images/framework_13_2025_2.jpg",
      "/images/framework_13_2025_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 6,
    sku: "FRAMEWORK-13-2025",
    brand: "Framework",
    rating: {
      value: 4.8,
      count: 94
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 257,
    name: "Razer Blade 16 Quantum Edition",
    price: 5499.99,
    category: "laptops",
    description: "Custom Modded | Mercury White | Modified | Intel Core Ultra 9 285HX | 128GB RAM | Dual RTX 5090 in SLI | 4TB PCIe 5.0 SSD | Liquid Metal Cooling | Custom RGB Lighting | Overclocked Components | Warranty: 2 years performance",
    images: [
      "/images/razer_quantum_1.jpg",
      "/images/razer_quantum_2.jpg",
      "/images/razer_quantum_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "RAZER-BLADE-Q16",
    brand: "Razer",
    rating: {
      value: 4.9,
      count: 23
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 258,
    name: "MSI Titan 18 HX AI Enhanced",
    price: 4899.99,
    category: "laptops",
    description: "Performance Modded | Core Black | Modified | Intel Core Ultra 9 295HX | 96GB RAM | RTX 5090 24GB | 8TB RAID 0 SSD | Mechanical Keyboard | Custom Water Cooling | 18-inch Mini-LED 4K/120Hz | Warranty: 3 years comprehensive",
    images: [
      "/images/msi_titan_mod_1.jpg",
      "/images/msi_titan_mod_2.jpg",
      "/images/msi_titan_mod_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 2,
    sku: "MSI-TITAN-18MOD",
    brand: "MSI",
    rating: {
      value: 4.9,
      count: 31
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 259,
    name: "Lenovo ThinkPad X1 Carbon Hackintosh Edition",
    price: 2199.99,
    category: "laptops",
    description: "macOS Pre-installed | Black | Modified | Intel Core Ultra 7 265V | 64GB RAM | 2TB SSD | Pre-configured EFI | macOS Sequoia Compatible | All Hardware Working | Dual Boot Option | Warranty: 1 year software support",
    images: [
      "/images/thinkpad_hackintosh_1.jpg",
      "/images/thinkpad_hackintosh_2.jpg",
      "/images/thinkpad_hackintosh_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 4,
    sku: "LENOVO-HACKINTOSH",
    brand: "Lenovo",
    rating: {
      value: 4.7,
      count: 67
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 260,
    name: "Alienware m18 R2 Extreme",
    price: 5299.99,
    category: "laptops",
    description: "Factory Overclocked | Lunar Light | Modified | Intel Core Ultra 9 285HX | 64GB RAM | RTX 5090 24GB | 4TB Gen5 SSD | Cherry MX Mechanical Keyboard | Advanced Cryo-Tech Cooling | 18-inch 4K 165Hz Display | Warranty: 4 years premium",
    images: [
      "/images/alienware_extreme_1.jpg",
      "/images/alienware_extreme_2.jpg",
      "/images/alienware_extreme_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 3,
    sku: "DELL-M18R2-OC",
    brand: "Alienware",
    rating: {
      value: 4.8,
      count: 42
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 261,
    name: "Asus ROG Zephyrus G14 Solar Edition",
    price: 3299.99,
    category: "laptops",
    description: "Custom Paint | Solar Orange | Modified | AMD Ryzen AI 9 HX 375 | 32GB RAM | RTX 5080 16GB | 2TB SSD | Solar Charging Backpack | Custom Cooling Solution | AniMe Matrix Display Mod | Warranty: 2 years custom",
    images: [
      "/images/asus_solar_1.jpg",
      "/images/asus_solar_2.jpg",
      "/images/asus_solar_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 2,
    sku: "ASUS-G14-SOLAR",
    brand: "Asus",
    rating: {
      value: 4.6,
      count: 28
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 262,
    name: "Dell XPS 16 Creator Mod",
    price: 3799.99,
    category: "laptops",
    description: "Artisan Edition | Arctic White | Modified | Intel Core Ultra 9 185H | 64GB RAM | RTX 4080 12GB | 4TB SSD | 16-inch 4K OLED Touch | Color-Calibrated | Wacom EMR Support | Creator Software Pre-installed | Warranty: 3 years premium",
    images: [
      "/images/dell_creator_1.jpg",
      "/images/dell_creator_2.jpg",
      "/images/dell_creator_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 3,
    sku: "DELL-XPS16-CREATOR",
    brand: "Dell",
    rating: {
      value: 4.7,
      count: 39
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 263,
    name: "HP Omen Transcend 16 Gaming Mod",
    price: 2899.99,
    category: "laptops",
    description: "Performance Edition | Shadow Black | Modified | Intel Core i9-14900HX | 32GB RAM | RTX 4070 8GB | 2TB SSD | Liquid Metal Application | Custom Vapor Chamber | 16-inch QHD 240Hz | RGB Modifications | Warranty: 2 years performance",
    images: [
      "/images/hp_omen_mod_1.jpg",
      "/images/hp_omen_mod_2.jpg",
      "/images/hp_omen_mod_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 5,
    sku: "HP-OMEN-MOD16",
    brand: "HP",
    rating: {
      value: 4.5,
      count: 53
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 264,
    name: "Apple MacBook Pro 16 M4 Max Studio Edition",
    price: 6499.99,
    category: "laptops",
    description: "Studio Modified | Space Black | Enhanced | M4 Max 16-Core | 128GB RAM | 8TB SSD | Nano-Texture Glass | Additional Thunderbolt 4 Ports | Custom Thermal Solution | Pro Applications Pre-installed | Warranty: 3 years AppleCare+",
    images: [
      "/images/mbp_studio_1.jpg",
      "/images/mbp_studio_2.jpg",
      "/images/mbp_studio_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 2,
    sku: "APPLE-MBP-STUDIO",
    brand: "Apple",
    rating: {
      value: 4.9,
      count: 18
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 265,
    name: "Lenovo Legion Pro 7i Carbon Edition",
    price: 3599.99,
    category: "laptops",
    description: "Carbon Fiber Mod | Storm Gray | Modified | Intel Core i9-14900HX | 64GB RAM | RTX 4090 16GB | 4TB SSD | Carbon Fiber Housing | Enhanced Cooling | 16-inch QHD+ 240Hz | Custom Performance Profiles | Warranty: 3 years comprehensive",
    images: [
      "/images/legion_carbon_1.jpg",
      "/images/legion_carbon_2.jpg",
      "/images/legion_carbon_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 4,
    sku: "LENOVO-LEGION-CARBON",
    brand: "Lenovo",
    rating: {
      value: 4.8,
      count: 47
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 266,
    name: "Asus ProArt StudioBook Extreme",
    price: 5899.99,
    category: "laptops",
    description: "Workstation Mod | Tech Black | Modified | Intel Core Ultra 9 195H | 128GB ECC RAM | RTX 5000 Ada 16GB | 8TB SSD | 17-inch 4K OLED | Color Calibrated | ISV Certified | Custom Cooling Solution | Warranty: 4 years professional",
    images: [
      "/images/asus_proart_mod_1.jpg",
      "/images/asus_proart_mod_2.jpg",
      "/images/asus_proart_mod_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "ASUS-PROART-EXTREME",
    brand: "Asus",
    rating: {
      value: 4.9,
      count: 12
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 267,
    name: "MSI Stealth 16 Mercedes-AMG Edition",
    price: 3799.99,
    category: "laptops",
    description: "AMG Collaboration | Motorsport Green | Modified | Intel Core Ultra 9 185H | 32GB RAM | RTX 4080 12GB | 2TB SSD | AMG Themed Design | Performance Tuning | 16-inch QHD+ 240Hz | Custom exhaust sound simulation | Warranty: 2 years special edition",
    images: [
      "/images/msi_amg_1.jpg",
      "/images/msi_amg_2.jpg",
      "/images/msi_amg_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 3,
    sku: "MSI-AMG-16",
    brand: "MSI",
    rating: {
      value: 4.7,
      count: 29
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 268,
    name: "Razer Book 13 Signature Edition",
    price: 2499.99,
    category: "laptops",
    description: "Executive Mod | Mercury White | Modified | Intel Core Ultra 7 165U | 32GB RAM | 2TB SSD | 13.4-inch 4K Touch | Leather Accents | Gold Plated Ports | Custom Windows 11 Pro | Warranty: 3 years premium",
    images: [
      "/images/razer_book_mod_1.jpg",
      "/images/razer_book_mod_2.jpg",
      "/images/razer_book_mod_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 2,
    sku: "RAZER-BOOK-SIG",
    brand: "Razer",
    rating: {
      value: 4.6,
      count: 34
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 269,
    name: "Gigabyte Aero 16 OLED Creator Mod",
    price: 3199.99,
    category: "laptops",
    description: "Color Master Edition | Studio Gray | Modified | Intel Core Ultra 9 185H | 64GB RAM | RTX 4070 8GB | 4TB SSD | 16-inch 4K OLED | X-Rite Factory Calibration | Pantone Validated | Creator Software Suite | Warranty: 2 years professional",
    images: [
      "/images/gigabyte_aero_mod_1.jpg",
      "/images/gigabyte_aero_mod_2.jpg",
      "/images/gigabyte_aero_mod_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 4,
    sku: "GIGABYTE-AERO-MOD",
    brand: "Gigabyte",
    rating: {
      value: 4.7,
      count: 41
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 270,
    name: "Samsung Galaxy Book4 Ultra 5G Mod",
    price: 2899.99,
    category: "laptops",
    description: "Connectivity Edition | Mystic Navy | Modified | Intel Core Ultra 7 155H | 32GB RAM | 2TB SSD | 16-inch AMOLED | Built-in 5G | Satellite Connectivity | Extended Battery Mod | Windows 11 Pro | Warranty: 3 years comprehensive",
    images: [
      "/images/samsung_5g_1.jpg",
      "/images/samsung_5g_2.jpg",
      "/images/samsung_5g_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 5,
    sku: "SAMSUNG-BOOK4-5G",
    brand: "Samsung",
    rating: {
      value: 4.5,
      count: 38
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 271,
    name: "Lenovo Yoga 9i 2-in-1 Limited Edition",
    price: 2299.99,
    category: "laptops",
    description: "Artisan Edition | Cosmic Blue | Modified | Intel Core Ultra 7 155H | 32GB RAM | 2TB SSD | 14-inch OLED 2.8K | Gold Accents | Leather Palm Rest | Enhanced Soundbar Hinge | Warranty: 2 years premium",
    images: [
      "/images/yoga_limited_1.jpg",
      "/images/yoga_limited_2.jpg",
      "/images/yoga_limited_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 3,
    sku: "LENOVO-YOGA-LE",
    brand: "Lenovo",
    rating: {
      value: 4.6,
      count: 27
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 272,
    name: "HP Spectre x360 14 Performance Edition",
    price: 2199.99,
    category: "laptops",
    description: "Speed Mod | Nightfall Black | Modified | Intel Core Ultra 7 155H | 32GB RAM | 2TB SSD | 14-inch OLED 2.8K | Custom Cooling | Performance Tuning | Gem-cut Design | Warranty: 2 years enhanced",
    images: [
      "/images/hp_spectre_mod_1.jpg",
      "/images/hp_spectre_mod_2.jpg",
      "/images/hp_spectre_mod_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 4,
    sku: "HP-SPECTRE-PERF",
    brand: "HP",
    rating: {
      value: 4.7,
      count: 45
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 273,
    name: "Dell Precision 7680 Mobile Workstation",
    price: 5899.99,
    category: "laptops",
    description: "Engineering Edition | Gray | Modified | Intel Core Ultra 9 195H | 128GB ECC RAM | RTX 5000 Ada 16GB | 8TB SSD | 16-inch 4K OLED | ISV Certified | MIL-SPEC Tested | Custom Performance Tuning | Warranty: 5 years premium support",
    images: [
      "/images/dell_precision_mod_1.jpg",
      "/images/dell_precision_mod_2.jpg",
      "/images/dell_precision_mod_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 2,
    sku: "DELL-PRECISION-7680",
    brand: "Dell",
    rating: {
      value: 4.9,
      count: 16
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 274,
    name: "Acer Predator Helios 18 Liquid Cooled",
    price: 4299.99,
    category: "laptops",
    description: "Cooling Edition | Abyssal Black | Modified | Intel Core Ultra 9 285HX | 64GB RAM | RTX 4090 16GB | 4TB SSD | External Liquid Cooling | 18-inch Mini-LED | Mechanical Keyboard | Performance Monitoring Display | Warranty: 3 years specialized",
    images: [
      "/images/acer_liquid_1.jpg",
      "/images/acer_liquid_2.jpg",
      "/images/acer_liquid_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 2,
    sku: "ACER-HELIOS-LIQUID",
    brand: "Acer",
    rating: {
      value: 4.8,
      count: 22
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 275,
    name: "Asus ROG Strix SCAR 18 Custom Edition",
    price: 4599.99,
    category: "laptops",
    description: "Esports Edition | Eclipse Gray | Modified | Intel Core Ultra 9 285HX | 64GB RAM | RTX 4090 16GB | 4TB SSD | 18-inch 2.5K 240Hz | Custom Keycaps | Enhanced Thermal Solution | RGB Lighting Mods | Warranty: 2 years performance",
    images: [
      "/images/asus_scar_mod_1.jpg",
      "/images/asus_scar_mod_2.jpg",
      "/images/asus_scar_mod_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 3,
    sku: "ASUS-SCAR-MOD",
    brand: "Asus",
    rating: {
      value: 4.8,
      count: 35
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
  id: 276,
  name: "Dell 14 Plus (DB14250)",
  price: 749.99,
  category: "laptops",
  description: "14-inch IPS Display | Platinum Silver | New | Intel Core Ultra 7 256V | 16GB RAM | 1TB SSD | Intel Arc Graphics | 20-hour Battery Life | Windows 11 Home | Wi-Fi 7 | Thunderbolt 4 | Premium Metal Build | Warranty: 1 year manufacturer",
  images: [
    "/images/dell_14_plus_1.jpg",
    "/images/dell_14_plus_2.jpg",
    "/images/dell_14_plus_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 8,
  sku: "DELL-14PLUS-2025",
  brand: "Dell",
  rating: {
    value: 4.0,
    count: 89
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 277,
  name: "Apple MacBook Air 13-inch M4",
  price: 897.50,
  category: "laptops",
  description: "13.6-inch Liquid Retina Display | Midnight Black | New | Apple M4 Chip | 16GB RAM | 512GB SSD | 18-hour Battery Life | macOS Sonoma | 12MP Center Stage Camera | MagSafe Charging | Fanless Design | Warranty: 1 year limited",
  images: [
    "/images/macbook_air_m4_1.jpg",
    "/images/macbook_air_m4_2.jpg",
    "/images/macbook_air_m4_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 12,
  sku: "APPLE-MBA-M4-13",
  brand: "Apple",
  rating: {
    value: 4.5,
    count: 127
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 278,
  name: "Acer Aspire 3 (A315-24P)",
  price: 304.00,
  category: "laptops",
  description: "15.6-inch Display | Black | New | AMD Ryzen 3 7320U | 8GB RAM | 128GB SSD | AMD Radeon Graphics | 17-hour Battery Life | Wi-Fi 6 | Windows 11 Home | Numeric Keypad | Warranty: 1 year limited",
  images: [
    "/images/acer_aspire_3_1.jpg",
    "/images/acer_aspire_3_2.jpg",
    "/images/acer_aspire_3_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 20,
  sku: "ACER-ASPIRE-3",
  brand: "Acer",
  rating: {
    value: 3.5,
    count: 134
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 279,
  name: "HP Omen 35L Gaming Desktop",
  price: 1579.99,
  category: "desktops",
  description: "Gaming Tower | Black | New | Intel Core Ultra 7 265K | 32GB DDR5 RAM | 2TB SSD | NVIDIA RTX 4080 Super | Wi-Fi 7 | Liquid Cooling | RGB Lighting | Windows 11 Home | Warranty: 2 years manufacturer",
  images: [
    "/images/hp_omen_35l_1.jpg",
    "/images/hp_omen_35l_2.jpg",
    "/images/hp_omen_35l_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 5,
  sku: "HP-OMEN-35L",
  brand: "HP",
  rating: {
    value: 4.0,
    count: 76
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 280,
  name: "Lenovo ThinkPad X1 Carbon Gen 13 Aura Edition",
  price: 1889.99,
  category: "laptops",
  description: "14-inch 2.8K OLED Display | Black | New | Intel Core Ultra 7 258V | 32GB RAM | 512GB SSD | Intel Arc Graphics | 19.5-hour Battery Life | Windows 11 Pro | Carbon Fiber Build | Warranty: 3 years onsite",
  images: [
    "/images/thinkpad_x1_1.jpg",
    "/images/thinkpad_x1_2.jpg",
    "/images/thinkpad_x1_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 4,
  sku: "LENOVO-X1-CARBON-13",
  brand: "Lenovo",
  rating: {
    value: 5.0,
    count: 68
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 281,
  name: "Dell Precision 5690 Workstation",
  price: 2979.00,
  category: "laptops",
  description: "16-inch 4K OLED Display | Gray | New | Intel Core Ultra 9 185H | 32GB RAM | 1TB SSD | NVIDIA RTX 5000 Ada 16GB | Windows 11 Pro | Thunderbolt 4 | ISV Certified | Warranty: 3 years premium support",
  images: [
    "/images/dell_precision_1.jpg",
    "/images/dell_precision_2.jpg",
    "/images/dell_precision_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 2,
  sku: "DELL-PRECISION-5690",
  brand: "Dell",
  rating: {
    value: 4.0,
    count: 45
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 282,
  name: "MSI Codex R2 Gaming Desktop",
  price: 1261.41,
  category: "desktops",
  description: "Gaming Tower | Black | New | Intel Core i5-14600K | 16GB RAM | 1TB SSD | NVIDIA RTX 4060 | Wi-Fi 7 | Air Cooling | RGB Lighting | Windows 11 Home | Warranty: 1 year manufacturer",
  images: [
    "/images/msi_codex_1.jpg",
    "/images/msi_codex_2.jpg",
    "/images/msi_codex_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 7,
  sku: "MSI-CODEX-R2",
  brand: "MSI",
  rating: {
    value: 4.0,
    count: 63
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 283,
  name: "Alienware Area-51 Gaming Desktop",
  price: 4699.99,
  category: "desktops",
  description: "Gaming Tower | Legend 2.0 Design | New | Intel Core Ultra 9 285K | 32GB RAM | 2TB SSD | NVIDIA RTX 5090 | Liquid Cooling | Wi-Fi 7 | Windows 11 Home | Warranty: 2 years premium support",
  images: [
    "/images/alienware_area51_1.jpg",
    "/images/alienware_area51_2.jpg",
    "/images/alienware_area51_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 3,
  sku: "DELL-ALIENWARE-51",
  brand: "Alienware",
  rating: {
    value: 4.0,
    count: 52
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 284,
  name: "Acer Swift Go 14",
  price: 749.99,
  category: "laptops",
  description: "14-inch FHD Display | Silver | New | Intel Core Ultra 7 155H | 16GB RAM | 1TB SSD | Intel Arc Graphics | 9-hour Battery Life | Windows 11 Home | Thunderbolt 4 | Aluminum Chassis | Warranty: 1 year manufacturer",
  images: [
    "/images/acer_swift_go_1.jpg",
    "/images/acer_swift_go_2.jpg",
    "/images/acer_swift_go_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 10,
  sku: "ACER-SWIFT-GO14",
  brand: "Acer",
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
  id: 285,
  name: "Asus Zenbook 14 OLED",
  price: 999.99,
  category: "laptops",
  description: "14-inch OLED Display | Ponder Blue | New | AMD Ryzen 7 8840HS | 16GB RAM | 512GB SSD | 16-hour Battery Life | NumberPad | Harman Kardon Audio | Wi-Fi 6E | Windows 11 Home | Warranty: 1 year manufacturer",
  images: [
    "/images/asus_zenbook_1.jpg",
    "/images/asus_zenbook_2.jpg",
    "/images/asus_zenbook_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 7,
  sku: "ASUS-ZENBOOK-14",
  brand: "Asus",
  rating: {
    value: 4.4,
    count: 94
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 286,
  name: "Lenovo Legion 5i Gaming Laptop",
  price: 1299.99,
  category: "laptops",
  description: "16-inch QHD Display | Storm Gray | New | Intel Core i7 | 16GB RAM | 1TB SSD | NVIDIA RTX 4060 | 165Hz Display | Legion ColdFront 4.0 | Nahimic Audio | Wi-Fi 6 | Windows 11 Home | Warranty: 1 year manufacturer",
  images: [
    "/images/lenovo_legion_1.jpg",
    "/images/lenovo_legion_2.jpg",
    "/images/lenovo_legion_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 7,
  sku: "LENOVO-LEGION-5I",
  brand: "Lenovo",
  rating: {
    value: 4.2,
    count: 83
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 287,
  name: "Apple Mac Mini (2024)",
  price: 1259.00,
  category: "desktops",
  description: "Compact Desktop | Silver | New | Apple M4 Chip | 16GB RAM | 512GB SSD | 8-core CPU | 10-core GPU | Wi-Fi 6E | Thunderbolt 4 | macOS Sonoma | Warranty: 1 year limited",
  images: [
    "/images/mac_mini_1.jpg",
    "/images/mac_mini_2.jpg",
    "/images/mac_mini_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 6,
  sku: "APPLE-MAC-MINI-2024",
  brand: "Apple",
  rating: {
    value: 4.5,
    count: 91
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 288,
  name: "Dell Inspiron 24 AIO (5430)",
  price: 845.87,
  category: "desktops",
  description: "All-in-One Desktop | White | New | Intel Core 5 120U | 16GB RAM | 512GB SSD | 24-inch FHD Touch Display | Pop-up 1440p Webcam | Wireless Mouse/Keyboard | Windows 11 Home | Warranty: 1 year manufacturer",
  images: [
    "/images/dell_inspiron_aio_1.jpg",
    "/images/dell_inspiron_aio_2.jpg",
    "/images/dell_inspiron_aio_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 4,
  sku: "DELL-INSPIRON-AIO",
  brand: "Dell",
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
  id: 289,
  name: "HP Envy Move All-in-One",
  price: 1249.00,
  category: "desktops",
  description: "Portable All-in-One | White | New | Intel Core i5-1335U | 16GB RAM | 512GB SSD | 24-inch 1440p Touch Display | Carrying Handle | Battery Powered | Wireless Keyboard | Windows 11 Home | Warranty: 1 year limited",
  images: [
    "/images/hp_envy_move_1.jpg",
    "/images/hp_envy_move_2.jpg",
    "/images/hp_envy_move_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 3,
  sku: "HP-ENVY-MOVE",
  brand: "HP",
  rating: {
    value: 4.0,
    count: 42
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 290,
  name: "Acer Nitro V 16 Gaming Laptop",
  price: 788.00,
  category: "laptops",
  description: "16-inch FHD 144Hz Display | Obsidian Black | New | AMD Ryzen 5 7535HS | 16GB RAM | 512GB SSD | NVIDIA RTX 4050 | 4-Zone RGB Keyboard | Dual Fan Cooling | Wi-Fi 6 | Windows 11 Home | Warranty: 1 year manufacturer",
  images: [
    "/images/acer_nitro_v_1.jpg",
    "/images/acer_nitro_v_2.jpg",
    "/images/acer_nitro_v_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 15,
  sku: "ACER-NITRO-V16",
  brand: "Acer",
  rating: {
    value: 3.5,
    count: 112
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 291,
  name: "Asus ProArt PZ13",
  price: 1299.99,
  category: "laptops",
  description: "2-in-1 Workstation | Tech Black | New | AMD Ryzen 7 | 16GB RAM | 1TB SSD | NVIDIA RTX 4050 | ASUS Pen 2.0 | Dial Controller | Pantone Validation | Wi-Fi 6E | Windows 11 Pro | Warranty: 2 years manufacturer",
  images: [
    "/images/asus_proart_1.jpg",
    "/images/asus_proart_2.jpg",
    "/images/asus_proart_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 5,
  sku: "ASUS-PROART-PZ13",
  brand: "Asus",
  rating: {
    value: 4.3,
    count: 29
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 292,
  name: "Lenovo ThinkPad E16 Gen 1",
  price: 639.00,
  category: "laptops",
  description: "16-inch Display | Black | New | Intel Core i5-1335U | 16GB RAM | 512GB SSD | Intel Iris Xe Graphics | 12-hour Battery Life | Windows 11 Pro | ThinkPad Keyboard | Warranty: 1 year manufacturer",
  images: [
    "/images/thinkpad_e16_1.jpg",
    "/images/thinkpad_e16_2.jpg",
    "/images/thinkpad_e16_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 9,
  sku: "LENOVO-E16-G1",
  brand: "Lenovo",
  rating: {
    value: 4.0,
    count: 68
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 293,
  name: "Corsair Vengeance i7600 Gaming Desktop",
  price: 2099.99,
  category: "desktops",
  description: "Gaming Tower | Black | New | Intel Core Ultra 7 265K | 64GB DDR5 RAM | 2TB SSD | NVIDIA RTX 4070 Super | Liquid Cooling | Thunderbolt 4 | Wi-Fi 7 | Windows 11 Home | Warranty: 2 years manufacturer",
  images: [
    "/images/corsair_vengeance_1.jpg",
    "/images/corsair_vengeance_2.jpg",
    "/images/corsair_vengeance_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 4,
  sku: "CORSAIR-VENGEANCE-I7600",
  brand: "Corsair",
  rating: {
    value: 4.8,
    count: 47
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 294,
  name: "Samsung Galaxy Chromebook Plus",
  price: 529.99,
  category: "laptops",
  description: "15.6-inch AMOLED Display | Mercury Gray | New | Intel Core i5 | 8GB RAM | 256GB SSD | ChromeOS | S Pen Included | 1080p Webcam | 13-hour Battery Life | Aluminum Build | Warranty: 1 year manufacturer",
  images: [
    "/images/samsung_chromebook_1.jpg",
    "/images/samsung_chromebook_2.jpg",
    "/images/samsung_chromebook_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 11,
  sku: "SAMSUNG-CHROME-PLUS",
  brand: "Samsung",
  rating: {
    value: 4.2,
    count: 57
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 295,
  name: "Geekom A6 Mini PC",
  price: 459.00,
  category: "desktops",
  description: "Mini Desktop | Black | New | AMD Ryzen 5 6600H | 16GB RAM | 512GB SSD | Dual HDMI | Wi-Fi 6 | USB-C | Compact Design | Windows 11 Pro | Warranty: 1 year manufacturer",
  images: [
    "/images/geekom_a6_1.jpg",
    "/images/geekom_a6_2.jpg",
    "/images/geekom_a6_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 8,
  sku: "GEEKOM-A6-MINI",
  brand: "Geekom",
  rating: {
    value: 4.0,
    count: 63
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 296,
  name: "Dell XPS 8960",
  price: 1299.99,
  category: "desktops",
  description: "Tower Desktop | Platinum Silver | New | Intel Core i7-14700K | 32GB RAM | 1TB SSD | NVIDIA RTX 4060 Ti | Liquid Cooling | Windows 11 Pro | Multiple USB Ports | Wi-Fi 6E | Warranty: 1 year manufacturer",
  images: [
    "/images/dell_xps_1.jpg",
    "/images/dell_xps_2.jpg",
    "/images/dell_xps_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 5,
  sku: "DELL-XPS-8960",
  brand: "Dell",
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
  id: 297,
  name: "Acer Aspire TC-1775",
  price: 599.99,
  category: "desktops",
  description: "Budget Tower | Black | New | Intel Core i5-14400 | 16GB RAM | 512GB SSD | Intel UHD Graphics 730 | Multiple USB Ports | DVD Drive | Wi-Fi 6 | Windows 11 Home | Warranty: 1 year limited",
  images: [
    "/images/acer_aspire_1.jpg",
    "/images/acer_aspire_2.jpg",
    "/images/acer_aspire_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 12,
  sku: "ACER-ASP-TC1775",
  brand: "Acer",
  rating: {
    value: 4.0,
    count: 127
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 298,
  name: "HP Omen 35L",
  price: 1579.99,
  category: "desktops",
  description: "Gaming Tower | Black | New | AMD Ryzen 7 8700G | 32GB RAM | 2TB SSD | NVIDIA RTX 4080 Super | Liquid Cooling | RGB Lighting | Windows 11 Home | Warranty: 2 years manufacturer",
  images: [
    "/images/hp_omen_35l_1.jpg",
    "/images/hp_omen_35l_2.jpg",
    "/images/hp_omen_35l_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 4,
  sku: "HP-OMEN-35L",
  brand: "HP",
  rating: {
    value: 4.6,
    count: 94
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 299,
  name: "Apple Mac Mini M4",
  price: 1259.00,
  category: "desktops",
  description: "Compact Desktop | Silver | New | Apple M4 Chip | 16GB RAM | 512GB SSD | 10-Core GPU | Thunderbolt 4 | Wi-Fi 6E | macOS Sonoma | Warranty: 1 year limited",
  images: [
    "/images/mac_mini_1.jpg",
    "/images/mac_mini_2.jpg",
    "/images/mac_mini_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 8,
  sku: "APPLE-MAC-MINI-M4",
  brand: "Apple",
  rating: {
    value: 4.7,
    count: 76
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 300,
  name: "MSI Codex R2",
  price: 1261.41,
  category: "desktops",
  description: "Gaming Tower | Black | New | Intel Core i5-14400F | 16GB RAM | 1TB SSD | NVIDIA RTX 4060 | Air Cooling | RGB Lighting | Windows 11 Home | Warranty: 1 year manufacturer",
  images: [
    "/images/msi_codex_1.jpg",
    "/images/msi_codex_2.jpg",
    "/images/msi_codex_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 6,
  sku: "MSI-CODEX-R2",
  brand: "MSI",
  rating: {
    value: 4.3,
    count: 68
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 301,
  name: "Dell Inspiron 24 AIO",
  price: 845.87,
  category: "desktops",
  description: "All-in-One | White | New | Intel Core 5 120U | 16GB RAM | 512GB SSD | 23.8-inch FHD Touch Display | Pop-up Webcam | Wireless Keyboard/Mouse | Windows 11 Home | Warranty: 1 year manufacturer",
  images: [
    "/images/dell_inspiron_aio_1.jpg",
    "/images/dell_inspiron_aio_2.jpg",
    "/images/dell_inspiron_aio_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 7,
  sku: "DELL-INSP-AIO24",
  brand: "Dell",
  rating: {
    value: 4.1,
    count: 57
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 302,
  name: "HP Envy Move",
  price: 1249.00,
  category: "desktops",
  description: "Portable All-in-One | White | New | Intel Core i5-1335U | 16GB RAM | 1TB SSD | 23.8-inch QHD Display | Built-in Battery | Carrying Handle | Windows 11 Home | Warranty: 1 year limited",
  images: [
    "/images/hp_envy_move_1.jpg",
    "/images/hp_envy_move_2.jpg",
    "/images/hp_envy_move_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 3,
  sku: "HP-ENVY-MOVE",
  brand: "HP",
  rating: {
    value: 4.4,
    count: 42
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 303,
  name: "Alienware Area-51",
  price: 4699.99,
  category: "desktops",
  description: "Gaming Tower | Legend 2.0 Design | New | Intel Core Ultra 9 285K | 64GB RAM | 2TB SSD | NVIDIA RTX 5090 | Liquid Cooling | RGB Lighting | Windows 11 Home | Warranty: 2 years premium",
  images: [
    "/images/alienware_area51_1.jpg",
    "/images/alienware_area51_2.jpg",
    "/images/alienware_area51_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 2,
  sku: "DELL-ALIEN-AREA51",
  brand: "Alienware",
  rating: {
    value: 4.8,
    count: 36
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 304,
  name: "Geekom A6 Mini PC",
  price: 459.00,
  category: "desktops",
  description: "Mini PC | Black | New | AMD Ryzen 5 6600H | 16GB RAM | 512GB SSD | Dual HDMI | USB-C | Wi-Fi 6 | Windows 11 Pro | Compact Design | Warranty: 1 year manufacturer",
  images: [
    "/images/geekom_a6_1.jpg",
    "/images/geekom_a6_2.jpg",
    "/images/geekom_a6_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 10,
  sku: "GEEKOM-A6-MINI",
  brand: "Geekom",
  rating: {
    value: 4.2,
    count: 63
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 305,
  name: "Lenovo ThinkCentre M90a Gen 5",
  price: 1568.93,
  category: "desktops",
  description: "All-in-One Workstation | Black | New | Intel Core i7-13700 | 32GB RAM | 1TB SSD | 23.8-inch 4K Display | Webcam | Windows 11 Pro | Business Features | Warranty: 3 years onsite",
  images: [
    "/images/lenovo_thinkcentre_1.jpg",
    "/images/lenovo_thinkcentre_2.jpg",
    "/images/lenovo_thinkcentre_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 3,
  sku: "LENOVO-THINK-M90A",
  brand: "Lenovo",
  rating: {
    value: 4.5,
    count: 29
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 306,
  name: "Asus NUC 14 Pro",
  price: 379.00,
  category: "desktops",
  description: "Mini PC | Black | New | Intel Core Ultra 7 155H | 16GB RAM | 512GB SSD | Thunderbolt 4 | Wi-Fi 6E | VESA Mount Included | Windows 11 Pro | Warranty: 1 year manufacturer",
  images: [
    "/images/asus_nuc_1.jpg",
    "/images/asus_nuc_2.jpg",
    "/images/asus_nuc_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 8,
  sku: "ASUS-NUC-14PRO",
  brand: "Asus",
  rating: {
    value: 4.4,
    count: 47
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 307,
  name: "Dell Precision 5860 Tower",
  price: 1879.00,
  category: "desktops",
  description: "Workstation Tower | Gray | New | Intel Xeon W7-2495X | 64GB ECC RAM | 2TB SSD | NVIDIA RTX 5000 Ada | ISV Certified | Tool-less Access | Windows 11 Pro | Warranty: 3 years premium",
  images: [
    "/images/dell_precision_1.jpg",
    "/images/dell_precision_2.jpg",
    "/images/dell_precision_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 2,
  sku: "DELL-PREC-5860",
  brand: "Dell",
  rating: {
    value: 4.7,
    count: 22
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 308,
  name: "Corsair Vengeance i7600",
  price: 2099.99,
  category: "desktops",
  description: "Gaming Tower | Black | New | Intel Core Ultra 7 265K | 64GB RAM | 2TB SSD | NVIDIA RTX 4070 Super | Liquid Cooling | Thunderbolt 4 | Windows 11 Home | Warranty: 2 years manufacturer",
  images: [
    "/images/corsair_vengeance_1.jpg",
    "/images/corsair_vengeance_2.jpg",
    "/images/corsair_vengeance_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 4,
  sku: "CORSAIR-VEN-I7600",
  brand: "Corsair",
  rating: {
    value: 4.8,
    count: 41
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 309,
  name: "Apple iMac M4",
  price: 1499.99,
  category: "desktops",
  description: "All-in-One | Blue | New | Apple M4 Chip | 16GB RAM | 512GB SSD | 24-inch 4.5K Retina Display | Magic Keyboard/Mouse | macOS Sonoma | Warranty: 1 year limited",
  images: [
    "/images/imac_m4_1.jpg",
    "/images/imac_m4_2.jpg",
    "/images/imac_m4_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 6,
  sku: "APPLE-IMAC-M4",
  brand: "Apple",
  rating: {
    value: 4.7,
    count: 88
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 310,
  name: "Beelink EQR6 Mini PC",
  price: 359.00,
  category: "desktops",
  description: "Mini PC | Black | New | AMD Ryzen 7 6800U | 32GB RAM | 1TB SSD | Dual HDMI | USB4 | Wi-Fi 6 | Windows 11 Pro | Compact Design | Warranty: 1 year manufacturer",
  images: [
    "/images/beelink_eqr6_1.jpg",
    "/images/beelink_eqr6_2.jpg",
    "/images/beelink_eqr6_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 9,
  sku: "BEELINK-EQR6",
  brand: "Beelink",
  rating: {
    value: 4.3,
    count: 56
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 311,
  name: "Lenovo Legion Tower 5i",
  price: 1299.99,
  category: "desktops",
  description: "Gaming Tower | Storm Gray | New | Intel Core i7-14700KF | 32GB RAM | 1TB SSD | NVIDIA RTX 4070 | Air Cooling | RGB Lighting | Windows 11 Home | Warranty: 1 year manufacturer",
  images: [
    "/images/lenovo_legion_1.jpg",
    "/images/lenovo_legion_2.jpg",
    "/images/lenovo_legion_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 5,
  sku: "LENOVO-LEGION-5I",
  brand: "Lenovo",
  rating: {
    value: 4.5,
    count: 73
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 312,
  name: "HP OmniStudio X 27",
  price: 799.99,
  category: "desktops",
  description: "All-in-One | White | New | Intel Core Ultra 5 125H | 16GB RAM | 512GB SSD | 27-inch FHD Display | 5MP Pop-up Camera | Wi-Fi 7 | Windows 11 Home | Warranty: 1 year limited",
  images: [
    "/images/hp_omnistudio_1.jpg",
    "/images/hp_omnistudio_2.jpg",
    "/images/hp_omnistudio_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 4,
  sku: "HP-OMNI-STUDIO-X27",
  brand: "HP",
  rating: {
    value: 4.4,
    count: 38
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 313,
  name: "Falcon Northwest Talon",
  price: 8724.00,
  category: "desktops",
  description: "Workstation Tower | Custom Paint | New | AMD Threadripper Pro 7995WX | 128GB RAM | 4TB SSD | NVIDIA RTX 6000 Ada | Liquid Cooling | Windows 11 Pro | Warranty: 3 years comprehensive",
  images: [
    "/images/falcon_talon_1.jpg",
    "/images/falcon_talon_2.jpg",
    "/images/falcon_talon_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "FALCON-TALON-TRP",
  brand: "Falcon Northwest",
  rating: {
    value: 4.9,
    count: 12
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 314,
  name: "CyberPowerPC Gamer Supreme",
  price: 1380.00,
  category: "desktops",
  description: "Gaming Tower | Black | New | Intel Core i7-14700KF | 32GB RAM | 2TB SSD | NVIDIA RTX 5070 | Liquid Cooling | RGB Lighting | Windows 11 Home | Warranty: 1 year manufacturer",
  images: [
    "/images/cyberpower_supreme_1.jpg",
    "/images/cyberpower_supreme_2.jpg",
    "/images/cyberpower_supreme_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 5,
  sku: "CYBERPOWER-GAMER-SUP",
  brand: "CyberPowerPC",
  rating: {
    value: 4.6,
    count: 64
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
  {
    id: 315,
    name: "Lenovo IdeaCentre Mini Gen 8",
    price: 639.00,
    category: "desktops",
    description: "Mini PC | Gray | New | Intel Core i5-1340P | 16GB RAM | 512GB SSD | HDMI 2.1 | USB-C | Wi-Fi 6 | Windows 11 Home | Compact Design | Warranty: 1 year manufacturer",
    images: [
      "/images/lenovo_ideacentre_1.jpg", 
      "/images/lenovo_ideacentre_2.jpg", 
      "/images/lenovo_ideacentre_3.jpg"
      ],
    highDemand: true,
    sold: false,
    quantity: 7,
    sku: "LENOVO-IDEA-MINI8",
    brand: "Lenovo",
    rating: {
      value: 4.2,
      count: 49
    },
        reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 316,
    name: "Falcon Northwest Talon Threadripper Pro",
    price: 8724.00,
    category: "desktops",
    description: "Custom Workstation | Threadripper Pro 7995WX | Modified | 96-Core AMD CPU | 128GB ECC RAM | 4TB NVMe SSD | NVIDIA RTX 6000 Ada | Custom Liquid Cooling | Three-Year Warranty | ISV Certified | Quiet Operation | Warranty: 3 years comprehensive",
    images: [
      "/images/falcon_talon_1.jpg",
      "/images/falcon_talon_2.jpg",
      "/images/falcon_talon_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "FALCON-TALON-TRP",
    brand: "Falcon Northwest",
    rating: {
      value: 4.9,
      count: 12
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 317,
    name: "Corsair Vengeance i7600 Extreme",
    price: 4299.99,
    category: "desktops",
    description: "Gaming Tower | Custom Modded | Modified | Intel Core Ultra 9 285K | 64GB DDR5-6000 | 4TB PCIe 5.0 SSD | NVIDIA RTX 5090 | Liquid Cooling | Thunderbolt 5 | Wi-Fi 7 | Two-Year Warranty | Custom RGB Lighting | Warranty: 2 years premium",
    images: [
      "/images/corsair_vengeance_extreme_1.jpg",
      "/images/corsair_vengeance_extreme_2.jpg",
      "/images/corsair_vengeance_extreme_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 3,
    sku: "CORSAIR-VEN-EXTREME",
    brand: "Corsair",
    rating: {
      value: 4.8,
      count: 47
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 318,
    name: "Dell Precision 7875 Threadripper",
    price: 3299.00,
    category: "desktops",
    description: "Workstation Tower | Custom Configuration | Modified | AMD Threadripper Pro 96-Core | 128GB ECC RAM | 2TB SSD + 8TB HDD | NVIDIA RTX 5000 Ada | Tool-less Chassis | ISV Certified | Quiet Operation | Horizontal Mount Option | Warranty: 3 years professional",
    images: [
      "/images/dell_precision_7875_1.jpg",
      "/images/dell_precision_7875_2.jpg",
      "/images/dell_precision_7875_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 2,
    sku: "DELL-PREC-7875",
    brand: "Dell",
    rating: {
      value: 4.7,
      count: 22
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 319,
    name: "HP Z4 G5 Workstation",
    price: 2080.00,
    category: "desktops",
    description: "Mid-Tower Workstation | Custom Build | Modified | Intel Xeon W7-2495X | 64GB ECC RAM | 2TB NVMe SSD | NVIDIA RTX 4080 Super | Liquid Cooling | ISV Certified | Quiet Operation | Highly Configurable | Warranty: 3 years onsite",
    images: [
      "/images/hp_z4_g5_1.jpg",
      "/images/hp_z4_g5_2.jpg",
      "/images/hp_z4_g5_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 4,
    sku: "HP-Z4-G5-MOD",
    brand: "HP",
    rating: {
      value: 4.6,
      count: 31
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 320,
    name: "Alienware Area-51 Ultimate",
    price: 5299.99,
    category: "desktops",
    description: "Gaming Tower | Legend 2.0 Design | Modified | Intel Core Ultra 9 285K | 64GB DDR5-6400 | 4TB Gen5 SSD | NVIDIA RTX 5090 | Advanced Cryo-Tech Cooling | Cherry MX Mechanical Keyboard | Thunderbolt 4 | Quiet Operation | Warranty: 4 years premium",
    images: [
      "/images/alienware_area51_ultimate_1.jpg",
      "/images/alienware_area51_ultimate_2.jpg",
      "/images/alienware_area51_ultimate_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 2,
    sku: "DELL-ALIEN-51-ULT",
    brand: "Alienware",
    rating: {
      value: 4.8,
      count: 36
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 321,
    name: "Apple Mac Studio M2 Ultra",
    price: 3799.00,
    category: "desktops",
    description: "Compact Workstation | Space Gray | Modified | Apple M2 Ultra Chip | 96GB Unified Memory | 8TB SSD | 24-Core GPU | 32-Core Neural Engine | Wi-Fi 6E | Bluetooth 5.3 | Thunderbolt 4 | macOS Optimized | Warranty: 3 years AppleCare+",
    images: [
      "/images/mac_studio_m2_1.jpg",
      "/images/mac_studio_m2_2.jpg",
      "/images/mac_studio_m2_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 3,
    sku: "APPLE-MAC-STUDIO-M2",
    brand: "Apple",
    rating: {
      value: 4.7,
      count: 45
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 322,
    name: "HP Z2 Mini G9 Workstation",
    price: 1901.00,
    category: "desktops",
    description: "Mini Workstation | Custom Config | Modified | Intel Core i9-13900 | 64GB DDR5 | 2TB NVMe SSD | NVIDIA RTX 4000 Ada | Compact Design | VESA Mountable | Replaceable Graphics | Excellent Connectivity | Quiet Operation | Warranty: 3 years professional",
    images: [
      "/images/hp_z2_mini_1.jpg",
      "/images/hp_z2_mini_2.jpg",
      "/images/hp_z2_mini_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 5,
    sku: "HP-Z2-MINI-G9",
    brand: "HP",
    rating: {
      value: 4.5,
      count: 28
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 323,
    name: "Custom Linux Workstation",
    price: 2350.00,
    category: "desktops",
    description: "Custom Build | Linux Optimized | Modified | Intel Core Ultra 9 285K | 64GB DDR5-6400 | 4TB Samsung 990 Pro | NVIDIA RTX 3060 Ti | Noctua NH-D15 Cooler | Fractal Define 7 Case | 850W PSU | Linux Pre-installed | Warranty: 2 years components",
    images: [
      "/images/linux_workstation_1.jpg",
      "/images/linux_workstation_2.jpg",
      "/images/linux_workstation_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 2,
    sku: "CUSTOM-LINUX-WS",
    brand: "Custom Built",
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
    id: 324,
    name: "Asus ROG G700 Gaming",
    price: 2899.99,
    category: "desktops",
    description: "Gaming Tower | Premium Mod | Modified | Intel Core Ultra 7 265KF | 32GB DDR5-4800 | 2TB PCIe 4.0 SSD | NVIDIA RTX 5070 | Liquid Cooling | Glass Case | RGB Lighting | 240mm Cooler | Warranty: 2 years manufacturer",
    images: [
      "/images/asus_rog_g700_1.jpg",
      "/images/asus_rog_g700_2.jpg",
      "/images/asus_rog_g700_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 4,
    sku: "ASUS-ROG-G700-MOD",
    brand: "Asus",
    rating: {
      value: 4.5,
      count: 53
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 325,
    name: "Lenovo Legion Tower 7i Gen 8",
    price: 2199.99,
    category: "desktops",
    description: "Gaming Tower | Storm Gray | Modified | Intel Core i9-14900K | 32GB DDR5 | 2TB SSD | NVIDIA RTX 4080 Super | Liquid Cooling | RGB Lighting | Quiet Operation | Easy Upgrades | Warranty: 2 years onsite",
    images: [
      "/images/lenovo_legion_7i_1.jpg",
      "/images/lenovo_legion_7i_2.jpg",
      "/images/lenovo_legion_7i_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 6,
    sku: "LENOVO-LEGION-7I",
    brand: "Lenovo",
    rating: {
      value: 4.4,
      count: 67
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 326,
    name: "Maingear MG-1 Silver",
    price: 1299.99,
    category: "desktops",
    description: "Budget Gaming Tower | Custom Mod | Modified | AMD Ryzen 7 7700X | 32GB DDR5 | 1TB NVMe SSD | NVIDIA RTX 4060 Ti | Air Cooling | Upgrade-Friendly | Well-Built | Affordable Performance | Warranty: 2 years limited",
    images: [
      "/images/maingear_mg1_1.jpg",
      "/images/maingear_mg1_2.jpg",
      "/images/maingear_mg1_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 8,
    sku: "MAINGEAR-MG1-MOD",
    brand: "Maingear",
    rating: {
      value: 4.3,
      count: 89
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 327,
    name: "Acer Predator Orion 5000",
    price: 1499.99,
    category: "desktops",
    description: "Gaming Tower | Value Mod | Modified | Intel Core i7-14700K | 32GB DDR5 | 1TB SSD | NVIDIA RTX 4070 Super | Liquid Cooling | RGB Lighting | Good Performance | Affordable Price | Warranty: 2 years manufacturer",
    images: [
      "/images/acer_predator_5000_1.jpg",
      "/images/acer_predator_5000_2.jpg",
      "/images/acer_predator_5000_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 7,
    sku: "ACER-PRED-5000",
    brand: "Acer",
    rating: {
      value: 4.2,
      count: 76
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 328,
    name: "Corsair One i500 Compact",
    price: 3499.99,
    category: "desktops",
    description: "Small Form Factor | Wood Paneling | Modified | Intel Core i9-14900K | 64GB DDR5 | 2TB SSD | NVIDIA RTX 4090 | Liquid Cooling | Compact Design | Wood Accents | Easy Upgrades | Warranty: 2 years premium",
    images: [
      "/images/corsair_one_i500_1.jpg",
      "/images/corsair_one_i500_2.jpg",
      "/images/corsair_one_i500_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 3,
    sku: "CORSAIR-ONE-I500",
    brand: "Corsair",
    rating: {
      value: 4.6,
      count: 31
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 329,
    name: "Dell XPS 8960 Desktop",
    price: 1899.99,
    category: "desktops",
    description: "Premium Tower | Platinum Silver | Modified | Intel Core i9-13900K | 64GB DDR5 | 2TB SSD | NVIDIA RTX 4080 | Liquid Cooling | Quiet Operation | Multiple Ports | Professional Design | Warranty: 3 years premium",
    images: [
      "/images/dell_xps_8960_1.jpg",
      "/images/dell_xps_8960_2.jpg",
      "/images/dell_xps_8960_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 5,
    sku: "DELL-XPS-8960-MOD",
    brand: "Dell",
    rating: {
      value: 4.5,
      count: 58
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 330,
    name: "HP Omen 35L RGB Edition",
    price: 2299.99,
    category: "desktops",
    description: "Gaming Tower | RGB Custom | Modified | AMD Ryzen 7 8700G | 32GB DDR5 | 2TB SSD | NVIDIA RTX 4080 Super | Liquid Cooling | Extensive RGB Lighting | Dust Filtration | Compact Chassis | Warranty: 2 years manufacturer",
    images: [
      "/images/hp_omen_35l_rgb_1.jpg",
      "/images/hp_omen_35l_rgb_2.jpg",
      "/images/hp_omen_35l_rgb_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 4,
    sku: "HP-OMEN-35L-RGB",
    brand: "HP",
    rating: {
      value: 4.4,
      count: 42
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 331,
    name: "Apple iMac 24-inch M4",
    price: 1299.99,
    category: "desktops",
    description: "All-in-One | Color Options | Modified | Apple M4 Chip | 16GB Unified Memory | 512GB SSD | 10-Core GPU | 4.5K Retina Display | Nano-texture Glass Option | Magic Accessories | macOS Sequoia | Warranty: 3 years AppleCare+",
    images: [
      "/images/imac_m4_1.jpg",
      "/images/imac_m4_2.jpg",
      "/images/imac_m4_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 6,
    sku: "APPLE-IMAC-M4-MOD",
    brand: "Apple",
    rating: {
      value: 4.7,
      count: 88
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 332,
    name: "Microsoft Surface Studio 3",
    price: 4299.99,
    category: "desktops",
    description: "All-in-One | Creative Workstation | Modified | Intel Core i9-13900H | 64GB RAM | 2TB SSD | NVIDIA RTX 4070 | 28-inch Touch Display | Surface Pen Support | Adjustable Hinge | PixelSense Display | Warranty: 3 years premium",
    images: [
      "/images/surface_studio_3_1.jpg",
      "/images/surface_studio_3_2.jpg",
      "/images/surface_studio_3_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 2,
    sku: "MS-SURFACE-STUDIO3",
    brand: "Microsoft",
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
    id: 333,
    name: "InWin ChronoMancy Limited",
    price: 5999.99,
    category: "desktops",
    description: "Limited Edition Case | Anniversary Model | Modified | AMD Threadripper Pro | 128GB ECC RAM | 4TB SSD | NVIDIA RTX 5090 | Custom Liquid Cooling | Transparent Blue Panel | Aluminum Body | Wand Operation | Warranty: 2 years special",
    images: [
      "/images/inwin_chronomancy_1.jpg",
      "/images/inwin_chronomancy_2.jpg",
      "/images/inwin_chronomancy_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 1,
    sku: "INWIN-CHRONO-LTD",
    brand: "InWin",
    rating: {
      value: 4.8,
      count: 8
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 334,
    name: "SilverStone FLP-02 Retro",
    price: 899.99,
    category: "desktops",
    description: "Retro Case | Beige Design | Modified | Intel Core i7-14700K | 32GB DDR5 | 2TB SSD | NVIDIA RTX 4070 | Modern Internals | Vintage Exterior | Working Turbo Button | 5.25-inch Drive Bays | ATX Compatibility | Warranty: 2 years manufacturer",
    images: [
      "/images/silverstone_retro_1.jpg",
      "/images/silverstone_retro_2.jpg",
      "/images/silverstone_retro_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 4,
    sku: "SILVERSTONE-RETRO",
    brand: "SilverStone",
    rating: {
      value: 4.3,
      count: 35
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 335,
    name: "Huawei X90 'Mac Killer'",
    price: 2999.99,
    category: "desktops",
    description: "Experimental Build | ARM Architecture | Modified | Kirin X90 Processor | 64GB RAM | 2TB SSD | Custom GPU | HarmonyOS | Ultra-Compact | High-End Components | May 2025 Release | Warranty: 2 years limited",
    images: [
      "/images/huawei_x90_1.jpg",
      "/images/huawei_x90_2.jpg",
      "/images/huawei_x90_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 3,
    sku: "HUAWEI-X90-ARM",
    brand: "Huawei",
    rating: {
      value: 4.5,
      count: 15
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 336,
    name: "Apple Pencil Pro",
    price: 129.99,
    category: "accessories",
    description: "2nd Generation | White | New | Magnetic Charging | Wireless Pairing | Pressure Sensitivity | Tilt Recognition | Double-Tap Gesture Control | Compatible with iPad Pro | Warranty: 1 year limited",
    images: [
      "/images/apple_pencil_1.jpg",
      "/images/apple_pencil_2.jpg",
      "/images/apple_pencil_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 25,
    sku: "APPLE-PENCIL-PRO",
    brand: "Apple",
    rating: {
      value: 4.8,
      count: 124
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 337,
    name: "ROG Clavis AI Noise-Canceling DAC",
    price: 149.99,
    category: "accessories",
    description: "USB-C to 3.5mm Adapter | Black | New | AI-Powered Noise Cancellation | MQA Rendering | ESS QUAD DAC | Aura Sync Lighting | Compatible with PC/Mobile | Warranty: 2 years manufacturer",
    images: [
      "/images/rog_dac_1.jpg",
      "/images/rog_dac_2.jpg",
      "/images/rog_dac_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 15,
    sku: "ASUS-ROG-DAC",
    brand: "Asus",
    rating: {
      value: 4.6,
      count: 89
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 338,
    name: "Natural Life Blessing Bell Angel Car Charm",
    price: 19.99,
    category: "accessories",
    description: "Hand-Painted | Silver Finish | New | Soothing Chime Sound | Rearview Mirror Attachment | Protection Symbolism | Includes Sentiment Card | Gift Packaging | Warranty: 6 months",
    images: [
      "/images/car_charm_1.jpg",
      "/images/car_charm_2.jpg",
      "/images/car_charm_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 50,
    sku: "NATLIFE-BELL-ANGEL",
    brand: "Natural Life",
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
    id: 339,
    name: "Momento MD-8200 3CH Dash Cam",
    price: 249.99,
    category: "accessories",
    description: "3-Channel System | Black | New | 2K Front/1080p Interior/Rear | Voice Command | Smartphone Connectivity | Motion Detection | GPS Tracking | Parking Monitoring | Warranty: 1 year limited",
    images: [
      "/images/dash_cam_1.jpg",
      "/images/dash_cam_2.jpg",
      "/images/dash_cam_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 18,
    sku: "MOMENTO-MD8200",
    brand: "Momento",
    rating: {
      value: 4.7,
      count: 112
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 340,
    name: "Targus Universal Laptop Docking Station",
    price: 129.99,
    category: "accessories",
    description: "USB-C Docking Station | Black | New | Dual HDMI | Ethernet | SD Card Slot | 100W Power Delivery | Multiple USB Ports | Compatible with Most Laptops | Warranty: 2 years limited",
    images: [
      "/images/docking_station_1.jpg",
      "/images/docking_station_2.jpg",
      "/images/docking_station_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 30,
    sku: "TARGUS-DOCK-PRO",
    brand: "Targus",
    rating: {
      value: 4.5,
      count: 156
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 341,
    name: "Meta Quest 3 Advanced VR Headset",
    price: 499.99,
    category: "accessories",
    description: "128GB Storage | White | New | Pancake Lenses | Color Passthrough | Snapdragon XR2 Gen 2 | Mixed Reality | Touch Plus Controllers | Wireless PC VR | Warranty: 1 year manufacturer",
    images: [
      "/images/quest_3_1.jpg",
      "/images/quest_3_2.jpg",
      "/images/quest_3_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 12,
    sku: "META-QUEST-3-128",
    brand: "Meta",
    rating: {
      value: 4.8,
      count: 203
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 342,
    name: "Desky® Cable Management Tray",
    price: 39.99,
    category: "accessories",
    description: "Under-Desk Organizer | Steel | New | Adhesive/Screw Installation | Holds Power Strips | Cord Clips Included | Durable Construction | Easy Access | Clutter-Free Workspace | Warranty: 1 year limited",
    images: [
      "/images/cable_tray_1.jpg",
      "/images/cable_tray_2.jpg",
      "/images/cable_tray_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 40,
    sku: "DESKY-CABLE-TRAY",
    brand: "Desky",
    rating: {
      value: 4.4,
      count: 78
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 343,
    name: "Designer Polarized Sunglasses",
    price: 199.99,
    category: "fashion",
    description: "Aviator Style | Gold Frame | New | UV Protection | Polarized Lenses | Metal Construction | Comfortable Fit | Luxury Case Included | 100% UV Blocking | Warranty: 1 year limited",
    images: [
      "/images/sunglasses_1.jpg",
      "/images/sunglasses_2.jpg",
      "/images/sunglasses_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 35,
    sku: "DESIGNER-SUN-AVIATOR",
    brand: "Designer Optics",
    rating: {
      value: 4.6,
      count: 142
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 344,
    name: "Movo SmartCine Smartphone Video Kit",
    price: 199.99,
    category: "accessories",
    description: "Complete Video Kit | Black | New | Universal Phone Rig | Stereo Microphone | LED Ring Light | Wide-Angle Lens | Carrying Case | Perfect for Vlogging | Warranty: 1 year manufacturer",
    images: [
      "/images/video_kit_1.jpg",
      "/images/video_kit_2.jpg",
      "/images/video_kit_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 20,
    sku: "MOVO-SMARTCINE",
    brand: "Movo",
    rating: {
      value: 4.5,
      count: 91
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 345,
    name: "Leather Laptop Briefcase",
    price: 179.99,
    category: "accessories",
    description: "Premium Full-Grain Leather | Brown | New | Padded Laptop Compartment | Multiple Pockets | RFID Blocking | Professional Design | Adjustable Shoulder Strap | Warranty: 2 years limited",
    images: [
      "/images/briefcase_1.jpg",
      "/images/briefcase_2.jpg",
      "/images/briefcase_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 22,
    sku: "LEATHER-BRIEF-PRO",
    brand: "Executive Gear",
    rating: {
      value: 4.7,
      count: 68
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 346,
    name: "Wireless Gaming Mouse",
    price: 89.99,
    category: "accessories",
    description: "RGB Gaming Mouse | Black | New | 16000 DPI | Wireless Connectivity | Programmable Buttons | Ergonomic Design | 50-Hour Battery | Lightweight Construction | Warranty: 2 years limited",
    images: [
      "/images/gaming_mouse_1.jpg",
      "/images/gaming_mouse_2.jpg",
      "/images/gaming_mouse_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 28,
    sku: "GAMING-MOUSE-WL",
    brand: "TechGaming",
    rating: {
      value: 4.8,
      count: 175
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 347,
    name: "Smart Home Hub",
    price: 129.99,
    category: "accessories",
    description: "Voice Controlled | White | New | Compatible with Alexa/Google | Multiple Protocol Support | Easy Setup | App Control | Home Automation | Compact Design | Warranty: 1 year manufacturer",
    images: [
      "/images/smart_hub_1.jpg",
      "/images/smart_hub_2.jpg",
      "/images/smart_hub_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 16,
    sku: "SMART-HUB-PRO",
    brand: "HomeTech",
    rating: {
      value: 4.4,
      count: 203
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 348,
    name: "Premium Yoga Mat",
    price: 79.99,
    category: "accessories",
    description: "Eco-Friendly Material | Purple | New | Non-Slip Surface | Extra Thick | Carry Strap | Moisture Resistant | Alignment Lines | Includes Carry Bag | Warranty: 1 year limited",
    images: [
      "/images/yoga_mat_1.jpg",
      "/images/yoga_mat_2.jpg",
      "/images/yoga_mat_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 45,
    sku: "YOGA-MAT-PREMIUM",
    brand: "FitLife",
    rating: {
      value: 4.6,
      count: 134
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 349,
    name: "Portable Power Bank",
    price: 59.99,
    category: "accessories",
    description: "20000mAh Capacity | Black | New | Dual USB-C Ports | Fast Charging | LED Power Indicator | Compact Design | Phone Compatibility | Travel Friendly | Warranty: 18 months",
    images: [
      "/images/power_bank_1.jpg",
      "/images/power_bank_2.jpg",
      "/images/power_bank_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 60,
    sku: "POWER-BANK-20K",
    brand: "PowerTech",
    rating: {
      value: 4.7,
      count: 287
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 350,
    name: "Noise Cancelling Headphones",
    price: 299.99,
    category: "accessories",
    description: "Wireless Over-Ear | Black | New | Active Noise Cancellation | 30-Hour Battery | Comfortable Ear Cups | Voice Assistant | Premium Sound | Travel Case Included | Warranty: 2 years limited",
    images: [
      "/images/headphones_1.jpg",
      "/images/headphones_2.jpg",
      "/images/headphones_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 25,
    sku: "NOISE-CANCEL-PRO",
    brand: "AudioTech",
    rating: {
      value: 4.8,
      count: 198
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 351,
    name: "Smart Watch Series 8",
    price: 349.99,
    category: "accessories",
    description: "Health & Fitness | Midnight | New | Heart Rate Monitor | GPS | Sleep Tracking | Water Resistant | Smart Notifications | Multiple Sport Modes | Warranty: 1 year limited",
    images: [
      "/images/smart_watch_1.jpg",
      "/images/smart_watch_2.jpg",
      "/images/smart_watch_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 30,
    sku: "SMART-WATCH-8",
    brand: "TechWear",
    rating: {
      value: 4.6,
      count: 223
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 352,
    name: "Premium Kitchen Knife Set",
    price: 199.99,
    category: "accessories",
    description: "8-Piece Set | Stainless Steel | New | Sharp Blades | Ergonomic Handles | Wood Block Storage | Dishwasher Safe | Chef's Knife | Utility Knife | Warranty: Lifetime limited",
    images: [
      "/images/knife_set_1.jpg",
      "/images/knife_set_2.jpg",
      "/images/knife_set_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 15,
    sku: "KNIFE-SET-PREMIUM",
    brand: "ChefQuality",
    rating: {
      value: 4.7,
      count: 89
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 353,
    name: "Wireless Earbuds Pro",
    price: 149.99,
    category: "accessories",
    description: "Active Noise Cancellation | White | New | Transparency Mode | Spatial Audio | Sweat Resistant | Wireless Charging | Long Battery Life | Perfect for Commuters | Warranty: 1 year limited",
    images: [
      "/images/earbuds_1.jpg",
      "/images/earbuds_2.jpg",
      "/images/earbuds_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 40,
    sku: "EARBUDS-PRO-WL",
    brand: "SoundTech",
    rating: {
      value: 4.5,
      count: 176
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 354,
    name: "Professional Tool Set",
    price: 299.99,
    category: "accessories",
    description: "125-Piece Set | Chrome Vanadium | New | Comprehensive Selection | Durable Case | Lifetime Warranty | Socket Set | Screwdrivers | Wrenches | Perfect for DIY | Warranty: Lifetime",
    images: [
      "/images/tool_set_1.jpg",
      "/images/tool_set_2.jpg",
      "/images/tool_set_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 18,
    sku: "TOOL-SET-PRO",
    brand: "ProTools",
    rating: {
      value: 4.8,
      count: 112
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 355,
    name: "Luxury Watch Box",
    price: 89.99,
    category: "fashion",
    description: "10-Slot Display | Mahogany | New | Glass Top | Soft Interior | Lock & Key | Watch Winder | Jewelry Storage | Elegant Design | Warranty: 1 year limited",
    images: [
      "/images/watch_box_1.jpg",
      "/images/watch_box_2.jpg",
      "/images/watch_box_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 20,
    sku: "WATCH-BOX-LUXURY",
    brand: "ElegantTime",
    rating: {
      value: 4.4,
      count: 67
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 356,
    name: "Sony XAV-AX8100 Digital Media Receiver",
    price: 498.00,
    category: "accessories",
    description: "Single-DIN Receiver | Black | New | 8.95-inch Touchscreen | Bluetooth | SiriusXM | HDMI Input | Rear Camera Support | Wired CarPlay/Android Auto | Weblink Cast | Wireless Remote | No CD Playback | Warranty: 2 years manufacturer",
    images: [
      "/images/sony_receiver_1.jpg",
      "/images/sony_receiver_2.jpg",
      "/images/sony_receiver_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 8,
    sku: "SONY-XAV-AX8100",
    brand: "Sony",
    rating: {
      value: 4.6,
      count: 94
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 357,
    name: "Pioneer DMH-WC5700NEX Digital Media Receiver",
    price: 644.99,
    category: "accessories",
    description: "Double-DIN Receiver | Black | New | 6.8-inch Touchscreen | Bluetooth | Wireless/Wired Apple CarPlay/Android Auto | Amazon Alexa Support | Crutchfield Top Pick | Warranty: 2 years manufacturer",
    images: [
      "/images/pioneer_receiver_1.jpg",
      "/images/pioneer_receiver_2.jpg",
      "/images/pioneer_receiver_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 6,
    sku: "PIONEER-DMH-WC5700",
    brand: "Pioneer",
    rating: {
      value: 4.7,
      count: 87
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 358,
    name: "CarlinKit 4.0 Wireless Adapter",
    price: 117.99,
    category: "accessories",
    description: "Wireless CarPlay/Android Auto Adapter | Black | New | Converts Wired to Wireless | 5GHz Wi-Fi | Automatic Connection | Eliminates Cable Hassle | Warranty: 1 year limited",
    images: [
      "/images/carlinkit_1.jpg",
      "/images/carlinkit_2.jpg",
      "/images/carlinkit_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 15,
    sku: "CARLINKIT-4.0",
    brand: "CarlinKit",
    rating: {
      value: 4.4,
      count: 203
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 359,
    name: "Roav VIVA by Anker",
    price: 29.99,
    category: "accessories",
    description: "Smart Car Charger | Black | New | Dual USB-A Ports | Amazon Alexa Integration | Voice Control | Works with CarPlay/Android Auto | Warranty: 1 year limited",
    images: [
      "/images/roav_viva_1.jpg",
      "/images/roav_viva_2.jpg",
      "/images/roav_viva_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 25,
    sku: "ANKER-ROAV-VIVA",
    brand: "Anker",
    rating: {
      value: 4.3,
      count: 156
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 360,
    name: "Cobra DualPro 360° Radar Detector",
    price: 449.95,
    category: "accessories",
    description: "360° Radar Detection | Black | New | Laser Detection | Voice Alerts | Crowd-Sourced Alerts | Magnetic Windshield Mount | Speed Trap Protection | Warranty: 1 year limited",
    images: [
      "/images/cobra_radar_1.jpg",
      "/images/cobra_radar_2.jpg",
      "/images/cobra_radar_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 12,
    sku: "COBRA-DUALPRO-360",
    brand: "Cobra",
    rating: {
      value: 4.5,
      count: 112
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 361,
    name: "Garmin Dash Cam Mini 2",
    price: 129.99,
    category: "accessories",
    description: "Compact Dash Cam | Black | New | 1080p Video | Discrete Design | Garmin Drive App | Parking Monitor | High-Quality Recording | Warranty: 1 year limited",
    images: [
      "/images/garmin_dashcam_1.jpg",
      "/images/garmin_dashcam_2.jpg",
      "/images/garmin_dashcam_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 20,
    sku: "GARMIN-DASH-MINI2",
    brand: "Garmin",
    rating: {
      value: 4.6,
      count: 178
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 362,
    name: "Wagan Cooler/Warmer",
    price: 99.99,
    category: "accessories",
    description: "Portable Cooler/Warmer | Red | New | 24-Liter Capacity | 12V DC Power | Battery Recharge | Cold/Hot Toggle | Holds 24 Cans | Warranty: 1 year limited",
    images: [
      "/images/wagan_cooler_1.jpg",
      "/images/wagan_cooler_2.jpg",
      "/images/wagan_cooler_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 18,
    sku: "WAGAN-COOLER-24L",
    brand: "Wagan",
    rating: {
      value: 4.2,
      count: 89
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 363,
    name: "Compustar Remote Start System",
    price: 199.99,
    category: "accessories",
    description: "Remote Start & Alarm | Black | New | Two-Way Remotes | Lock/Start Vehicle | Intrusion Alert | Professional Installation Recommended | Warranty: 2 years limited",
    images: [
      "/images/compustar_remote_1.jpg",
      "/images/compustar_remote_2.jpg",
      "/images/compustar_remote_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 10,
    sku: "COMPUSTAR-RS1000",
    brand: "Compustar",
    rating: {
      value: 4.7,
      count: 134
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 364,
    name: "OBDLink Scan Tool",
    price: 79.99,
    category: "accessories",
    description: "Bluetooth OBD2 Scanner | Black | New | Compatible with 1996+ Vehicles | Diagnostic Data | Check Engine Light | Real-Time Monitoring | Warranty: 1 year limited",
    images: [
      "/images/obdlink_scanner_1.jpg",
      "/images/obdlink_scanner_2.jpg",
      "/images/obdlink_scanner_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 22,
    sku: "OBDLINK-SCAN-BT",
    brand: "OBDLink",
    rating: {
      value: 4.5,
      count: 167
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 365,
    name: "weBoost Cell Phone Signal Booster",
    price: 299.99,
    category: "accessories",
    description: "Signal Booster Kit | Black | New | Enhances Cell Reception | 33x Improvement | Major Carrier Compatibility | US/Canada Support | Warranty: 2 years limited",
    images: [
      "/images/weboost_booster_1.jpg",
      "/images/weboost_booster_2.jpg",
      "/images/weboost_booster_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 8,
    sku: "WEBOOST-MOBILE-KIT",
    brand: "weBoost",
    rating: {
      value: 4.4,
      count: 95
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 366,
    name: "Anker Bluetooth Receiver",
    price: 29.99,
    category: "accessories",
    description: "Bluetooth Audio Receiver | Black | New | Hands-Free Calling | 12-Hour Battery | Crystal-Clear Music | Built-In Microphone | Warranty: 1 year limited",
    images: [
      "/images/anker_receiver_1.jpg",
      "/images/anker_receiver_2.jpg",
      "/images/anker_receiver_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 30,
    sku: "ANKER-BT-RECEIVER",
    brand: "Anker",
    rating: {
      value: 4.6,
      count: 212
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 367,
    name: "Bluetooth Tire Pressure Monitoring System",
    price: 59.99,
    category: "accessories",
    description: "TPMS Sensors | Black | New | Bluetooth Enabled | Phone Notifications | Valve Attachment | No More Manual Checks | Warranty: 1 year limited",
    images: [
      "/images/tpms_sensors_1.jpg",
      "/images/tpms_sensors_2.jpg",
      "/images/tpms_sensors_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 25,
    sku: "TPMS-BLUETOOTH-SET",
    brand: "AutoSafe",
    rating: {
      value: 4.3,
      count: 144
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 368,
    name: "Dashboard Anti-Slip Pads",
    price: 14.99,
    category: "accessories",
    description: "Anti-Slip Mats | Black | New | 3mm Latex | Secures Phones/Keys | Non-Slip Surface | Dashboard Protection | Warranty: 6 months",
    images: [
      "/images/antislip_pads_1.jpg",
      "/images/antislip_pads_2.jpg",
      "/images/antislip_pads_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 50,
    sku: "DASH-ANTISLIP-PADS",
    brand: "DriveSafe",
    rating: {
      value: 4.1,
      count: 98
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 369,
    name: "Lightsaber Windshield Wipers",
    price: 24.99,
    category: "accessories",
    description: "Decorative Wipers | Blue | New | Lightsaber Design | Easy Installation | Reflective | Works in All Weather | Warranty: 6 months",
    images: [
      "/images/wipesabers_1.jpg",
      "/images/wipesabers_2.jpg",
      "/images/wipesabers_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 40,
    sku: "WIPESABERS-BLUE",
    brand: "StarGadgets",
    rating: {
      value: 4.0,
      count: 76
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 370,
    name: "Portable Espresso Maker",
    price: 49.99,
    category: "accessories",
    description: "Minipresso Espresso Maker | Black | New | Portable | Works with Grounds/Pods | Includes Cup | Road Trip Essential | Warranty: 1 year limited",
    images: [
      "/images/minipresso_1.jpg",
      "/images/minipresso_2.jpg",
      "/images/minipresso_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 15,
    sku: "MINIPRESSO-PORTABLE",
    brand: "Minipresso",
    rating: {
      value: 4.5,
      count: 123
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 371,
    name: "Swivel Tray for Cup Holder",
    price: 12.99,
    category: "accessories",
    description: "Cup Holder Tray | Black | New | Swivel Design | Phone Slot | Food Tray | Drive-Thru Essential | Warranty: 6 months",
    images: [
      "/images/swivel_tray_1.jpg",
      "/images/swivel_tray_2.jpg",
      "/images/swivel_tray_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 35,
    sku: "CUP-HOLDER-TRAY",
    brand: "AutoEase",
    rating: {
      value: 4.2,
      count: 87
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 372,
    name: "Backup Camera System",
    price: 89.99,
    category: "accessories",
    description: "Aftermarket Backup Camera | Black | New | Rear Camera | Dashboard Screen | Parking Aid | Easy Installation | Warranty: 1 year limited",
    images: [
      "/images/backup_camera_1.jpg",
      "/images/backup_camera_2.jpg",
      "/images/backup_camera_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 18,
    sku: "BACKUP-CAM-KIT",
    brand: "SafeDrive",
    rating: {
      value: 4.4,
      count: 134
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 373,
    name: "Precision Parking Aid",
    price: 39.99,
    category: "accessories",
    description: "Parking Sensor | White | New | Traffic Signal Display | Bumper Protection | Tight Space Aid | Easy Install | Warranty: 1 year limited",
    images: [
      "/images/parking_aid_1.jpg",
      "/images/parking_aid_2.jpg",
      "/images/parking_aid_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 20,
    sku: "PARKING-AID-PRO",
    brand: "ParkSmart",
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
    id: 374,
    name: "Wireless Baby Monitor for Car",
    price: 69.99,
    category: "accessories",
    description: "Headrest Baby Monitor | Black | New | 4.3-inch Display | Night Vision | Video Monitoring | Safe Driving | Warranty: 1 year limited",
    images: [
      "/images/baby_monitor_1.jpg",
      "/images/baby_monitor_2.jpg",
      "/images/baby_monitor_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 12,
    sku: "CAR-BABY-MONITOR",
    brand: "BabySafe",
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
    id: 375,
    name: "Retro Manufacturing Hermosa Radio",
    price: 284.99,
    category: "accessories",
    description: "Retro Style Radio | Chrome | New | AM/FM | Bluetooth | USB Input | Classic Car Compatibility | Modern Amenities | Warranty: 1 year limited",
    images: [
      "/images/retro_radio_1.jpg",
      "/images/retro_radio_2.jpg",
      "/images/retro_radio_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 5,
    sku: "RETRO-HERMOSA-RADIO",
    brand: "Retro Manufacturing",
    rating: {
      value: 4.6,
      count: 45
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 376,
    name: "Logitech MX Master 3S Wireless Mouse",
    price: 99.99,
    category: "accessories",
    description: "Wireless Ergonomic Mouse | Graphite | New | 8K DPI | Darkfield Tracking | 7 Programmable Buttons | Multi-Device Connectivity | 70-Day Battery | USB-C Charging | Flow Cross-Computer Control | Warranty: 2 years limited",
    images: [
      "/images/logitech_mx_master_1.jpg",
      "/images/logitech_mx_master_2.jpg",
      "/images/logitech_mx_master_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 25,
    sku: "LOGITECH-MX-MASTER-3S",
    brand: "Logitech",
    rating: {
      value: 4.8,
      count: 187
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 377,
    name: "Dell Ultrasharp U3425WE Curved Monitor",
    price: 899.99,
    category: "accessories",
    description: "34-inch Curved IPS Monitor | Black | New | 3440x1440 WQHD | 120Hz Refresh Rate | Built-in KVM Switch | USB-C Hub | Adjustable Stand | 98% DCI-P3 Color | HDR Support | Warranty: 3 years premium",
    images: [
      "/images/dell_ultrasharp_1.jpg",
      "/images/dell_ultrasharp_2.jpg",
      "/images/dell_ultrasharp_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 12,
    sku: "DELL-U3425WE",
    brand: "Dell",
    rating: {
      value: 4.7,
      count: 94
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 378,
    name: "Razer Leviathan V2 Pro Soundbar",
    price: 399.99,
    category: "accessories",
    description: "AI-Powered Soundbar | Black | New | Beamforming Technology | RGB Lighting | 3D Spatial Audio | Customizable EQ | Wireless Subwoofer | USB/Bluetooth Connectivity | Warranty: 2 years limited",
    images: [
      "/images/razer_leviathan_1.jpg",
      "/images/razer_leviathan_2.jpg",
      "/images/razer_leviathan_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 8,
    sku: "RAZER-LEVIATHAN-V2",
    brand: "Razer",
    rating: {
      value: 4.6,
      count: 67
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 379,
    name: "Anker 735 Charger GaNPrime 65W",
    price: 59.99,
    category: "accessories",
    description: "Compact GaN Charger | White | New | 65W Power Delivery | 3 Ports (2 USB-C, 1 USB-A) | PPS Technology | Foldable Plug | MultiProtect Safety System | Compatible with Laptops/Phones | Warranty: 2 years limited",
    images: [
      "/images/anker_735_1.jpg",
      "/images/anker_735_2.jpg",
      "/images/anker_735_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 35,
    sku: "ANKER-735-GaN",
    brand: "Anker",
    rating: {
      value: 4.7,
      count: 223
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 380,
    name: "Logitech BRIO 4K Webcam",
    price: 199.99,
    category: "accessories",
    description: "4K Ultra HD Webcam | Black | New | HDR Support | Windows Hello | Dual Omnidirectional Mics | 90° FOV | Auto Light Correction | Privacy Shutter | USB-C Connection | Warranty: 2 years limited",
    images: [
      "/images/logitech_brio_1.jpg",
      "/images/logitech_brio_2.jpg",
      "/images/logitech_brio_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 18,
    sku: "LOGITECH-BRIO-4K",
    brand: "Logitech",
    rating: {
      value: 4.5,
      count: 156
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 381,
    name: "Samsung T7 Shield 2TB Portable SSD",
    price: 149.99,
    category: "accessories",
    description: "Portable External SSD | Blue | New | 2TB Capacity | USB 3.2 Gen 2 | IP65 Water/Dust Resistance | Hardware Encryption | Compact Design | Includes USB-C/USB-A Cables | Warranty: 3 years limited",
    images: [
      "/images/samsung_t7_1.jpg",
      "/images/samsung_t7_2.jpg",
      "/images/samsung_t7_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 22,
    sku: "SAMSUNG-T7-SHIELD",
    brand: "Samsung",
    rating: {
      value: 4.8,
      count: 189
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 382,
    name: "Corsair K100 RGB Mechanical Keyboard",
    price: 199.99,
    category: "accessories",
    description: "Mechanical Gaming Keyboard | Black | New | Cherry MX Speed Switches | Per-Key RGB Lighting | 44-Zone Lighting | USB Passthrough | Aircraft-Grade Aluminum Frame | Dedicated Media Controls | Warranty: 2 years limited",
    images: [
      "/images/corsair_k100_1.jpg",
      "/images/corsair_k100_2.jpg",
      "/images/corsair_k100_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 14,
    sku: "CORSAIR-K100-RGB",
    brand: "Corsair",
    rating: {
      value: 4.6,
      count: 112
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 383,
    name: "HyperX Cloud Alpha Wireless Headset",
    price: 179.99,
    category: "accessories",
    description: "Wireless Gaming Headset | Black/Red | New | 300-Hour Battery | DTS Spatial Audio | Memory Foam Ear Cups | Detachable Noise-Canceling Mic | Aluminum Frame | Multi-Platform Compatibility | Warranty: 2 years limited",
    images: [
      "/images/hyperx_cloud_1.jpg",
      "/images/hyperx_cloud_2.jpg",
      "/images/hyperx_cloud_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 20,
    sku: "HYPERX-CLOUD-ALPHA",
    brand: "HyperX",
    rating: {
      value: 4.7,
      count: 145
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 384,
    name: "Elgato Stream Deck MK.2",
    price: 149.99,
    category: "accessories",
    description: "Content Creation Controller | Black | New | 15 LCD Keys | Custom Icons | Integration with 200+ Apps | Timers & Alerts | Multi-Action Support | USB-C Connection | Warranty: 2 years limited",
    images: [
      "/images/elgato_stream_1.jpg",
      "/images/elgato_stream_2.jpg",
      "/images/elgato_stream_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 10,
    sku: "ELGATO-STREAM-DECK",
    brand: "Elgato",
    rating: {
      value: 4.8,
      count: 98
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 385,
    name: "WD Black SN850X 2TB NVMe SSD",
    price: 199.99,
    category: "accessories",
    description: "Internal Gaming SSD | Black | New | 2TB Capacity | PCIe 4.0 | 7300MB/s Read Speed | Built-in Gaming Mode | Heat Spreader | 5-Year Warranty | Warranty: 5 years limited",
    images: [
      "/images/wd_black_1.jpg",
      "/images/wd_black_2.jpg",
      "/images/wd_black_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 16,
    sku: "WD-BLACK-SN850X",
    brand: "Western Digital",
    rating: {
      value: 4.9,
      count: 201
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 386,
    name: "Blue Yeti Nano USB Microphone",
    price: 99.99,
    category: "accessories",
    description: "USB Condenser Microphone | Blue | New | Custom Cardioid Capsule | Studio-Quality Sound | Plug-and-Play | Adjustable Stand | Mute Button | Headphone Output | Warranty: 2 years limited",
    images: [
      "/images/blue_yeti_1.jpg",
      "/images/blue_yeti_2.jpg",
      "/images/blue_yeti_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 15,
    sku: "BLUE-YETI-NANO",
    brand: "Blue",
    rating: {
      value: 4.5,
      count: 134
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 387,
    name: "NZXT Kraken Z73 RGB AIO Cooler",
    price: 299.99,
    category: "accessories",
    description: "Liquid CPU Cooler | Black | New | 360mm Radiator | LCD Display | Custom GIF Support | CAM Software Control | RGB Lighting | 6-Year Warranty | Warranty: 6 years limited",
    images: [
      "/images/nzxt_kraken_1.jpg",
      "/images/nzxt_kraken_2.jpg",
      "/images/nzxt_kraken_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 9,
    sku: "NZXT-KRAKEN-Z73",
    brand: "NZXT",
    rating: {
      value: 4.7,
      count: 87
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 388,
    name: "SteelSeries QcK Heavy XXL Mousepad",
    price: 29.99,
    category: "accessories",
    description: "XXL Gaming Mousepad | Black | New | 900x400x6mm | Optimized Surface | Stitched Edges | Non-Slip Rubber Base | Machine Washable | Warranty: 1 year limited",
    images: [
      "/images/steelseries_qck_1.jpg",
      "/images/steelseries_qck_2.jpg",
      "/images/steelseries_qck_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 40,
    sku: "STEELSERIES-QCK-XXL",
    brand: "SteelSeries",
    rating: {
      value: 4.4,
      count: 176
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 389,
    name: "APC Back-UPS Pro 1500VA UPS",
    price: 249.99,
    category: "accessories",
    description: "Battery Backup UPS | Black | New | 1500VA/900W | Sine Wave Output | 12 Outlets | Voltage Regulation | LCD Display | Data Line Protection | Warranty: 3 years replacement",
    images: [
      "/images/apc_ups_1.jpg",
      "/images/apc_ups_2.jpg",
      "/images/apc_ups_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 7,
    sku: "APC-BACK-UPS-PRO",
    brand: "APC",
    rating: {
      value: 4.8,
      count: 63
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 390,
    name: "Lian Li O11 Dynamic EVO Case",
    price: 159.99,
    category: "accessories",
    description: "Mid-Tower PC Case | Black | New | Dual Chamber Design | Tempered Glass | Support for 420mm Radiators | Vertical GPU Mount | Modular Design | Warranty: 2 years limited",
    images: [
      "/images/lianli_o11_1.jpg",
      "/images/lianli_o11_2.jpg",
      "/images/lianli_o11_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 11,
    sku: "LIAN-LI-O11-EVO",
    brand: "Lian Li",
    rating: {
      value: 4.7,
      count: 104
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 391,
    name: "Razer Iskur XL Gaming Chair",
    price: 499.99,
    category: "accessories",
    description: "Ergonomic Gaming Chair | Black | New | Lumbar Support System | 4D Armrests | High-Density Foam | 152° Recline | Class 4 Hydraulic | Warranty: 3 years limited",
    images: [
      "/images/razer_iskur_1.jpg",
      "/images/razer_iskur_2.jpg",
      "/images/razer_iskur_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 6,
    sku: "RAZER-ISKUR-XL",
    brand: "Razer",
    rating: {
      value: 4.5,
      count: 78
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 392,
    name: "CableMod Pro ModMesh Cable Kit",
    price: 89.99,
    category: "accessories",
    description: "Custom PSU Cables | Various Colors | New | Premium Sleeving | 16AWG Wires | Compatibility with Major PSU Brands | Anti-Fray Technology | Warranty: 2 years limited",
    images: [
      "/images/cablemod_1.jpg",
      "/images/cablemod_2.jpg",
      "/images/cablemod_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 13,
    sku: "CABLEMOD-PRO-KIT",
    brand: "CableMod",
    rating: {
      value: 4.6,
      count: 92
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 393,
    name: "Arctic Liquid Freezer II 420",
    price: 129.99,
    category: "accessories",
    description: "AIO CPU Cooler | Black | New | 420mm Radiator | PWM-Controlled Pump | VRM Fan | Compatible with All Sockets | Warranty: 6 years limited",
    images: [
      "/images/arctic_freezer_1.jpg",
      "/images/arctic_freezer_2.jpg",
      "/images/arctic_freezer_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 10,
    sku: "ARCTIC-LIQUID-420",
    brand: "Arctic",
    rating: {
      value: 4.8,
      count: 115
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 394,
    name: "Philips Hue Play Light Bars",
    price: 129.99,
    category: "accessories",
    description: "Smart LED Light Bars | White | New | 16 Million Colors | Sync with Content | Voice Control | Expandable System | Warranty: 2 years limited",
    images: [
      "/images/philips_hue_1.jpg",
      "/images/philips_hue_2.jpg",
      "/images/philips_hue_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 18,
    sku: "PHILIPS-HUE-PLAY",
    brand: "Philips",
    rating: {
      value: 4.5,
      count: 143
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 395,
    name: "Sabrent Rocket 4 Plus 4TB NVMe",
    price: 299.99,
    category: "accessories",
    description: "Internal NVMe SSD | Black | New | 4TB Capacity | PCIe 4.0 | 7100MB/s Read Speed | Heatsink Option | 5-Year Warranty | Warranty: 5 years limited",
    images: [
      "/images/sabrent_rocket_1.jpg",
      "/images/sabrent_rocket_2.jpg",
      "/images/sabrent_rocket_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 8,
    sku: "SABRENT-ROCKET-4",
    brand: "Sabrent",
    rating: {
      value: 4.9,
      count: 127
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 396,
    name: "Thorlabs ESK16 Mechanical Essentials Kit",
    price: 2499.99,
    category: "accessories",
    description: "254-Piece Kit | Imperial/Metric | New | Ø1/2\" Posts | Post Spacers | Construction Accessories | Stainless Steel Components | Optical Mounting Hardware | Includes Storage Cabinet | Warranty: 2 years manufacturer",
    images: [
      "/images/thorlabs_kit_1.jpg",
      "/images/thorlabs_kit_2.jpg",
      "/images/thorlabs_kit_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 4,
    sku: "THORLABS-ESK16",
    brand: "Thorlabs",
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
    id: 397,
    name: "Hyundai i20N Rally Decorset",
    price: 299.99,
    category: "accessories",
    description: "Full Vehicle Wrap | Performance Blue | New | Inspired by i20N Rally2 Design | Includes Laminating Agent | Squeegee Tool | Cleaning Cloth | Easy Installation | Professional Motorsport Appearance | Warranty: 2 years limited",
    images: [
      "/images/hyundai_rally_1.jpg",
      "/images/hyundai_rally_2.jpg",
      "/images/hyundai_rally_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 8,
    sku: "HYUNDAI-RALLY-DECOR",
    brand: "Hyundai",
    rating: {
      value: 4.6,
      count: 67
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 398,
    name: "Ezy-Glide Engine Connection Kit",
    price: 189.99,
    category: "accessories",
    description: "Marine Steering Kit | Aluminum/Steel | New | Through-Tube Connection | Remote Steering Compatibility | Port-Side Configuration | Universal Mounting | Corrosion-Resistant | Warranty: 1 year limited",
    images: [
      "/images/ezy_glide_1.jpg",
      "/images/ezy_glide_2.jpg",
      "/images/ezy_glide_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 6,
    sku: "EZG-ENGINE-KIT",
    brand: "Ezy-Glide",
    rating: {
      value: 4.4,
      count: 38
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 399,
    name: "Allegion Mechanical Door Accessories Kit",
    price: 349.99,
    category: "accessories",
    description: "Commercial Hardware Set | Bronze Finish | New | Fire Prevention Components | Sound Attenuation | Weatherstripping | Security Enhancement | Easy Installation | Professional Grade | Warranty: 3 years commercial",
    images: [
      "/images/allegion_door_1.jpg",
      "/images/allegion_door_2.jpg",
      "/images/allegion_door_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 5,
    sku: "ALLEGION-DOOR-KIT",
    brand: "Allegion",
    rating: {
      value: 4.5,
      count: 52
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 400,
    name: "Hyundai N-Performance Intake Kit",
    price: 449.99,
    category: "accessories",
    description: "Air Intake System | Red | New | Improved Airflow | Engine Performance Boost | Sportier Driving Experience | Easy Installation | OEM Compatibility | Warranty: 2 years limited",
    images: [
      "/images/hyundai_intake_1.jpg",
      "/images/hyundai_intake_2.jpg",
      "/images/hyundai_intake_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 7,
    sku: "HYUNDAI-N-INTAKE",
    brand: "Hyundai",
    rating: {
      value: 4.7,
      count: 89
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 401,
    name: "Ezy-Tab® Steering Torque Reducer",
    price: 79.99,
    category: "accessories",
    description: "Skeg Mount | Aluminum | New | Reduces Steering Torque | Five Pre-Drilled Holes | Stainless Steel Hardware | Performance Enhancement | Easy Installation | Warranty: 1 year marine",
    images: [
      "/images/ezy_tab_1.jpg",
      "/images/ezy_tab_2.jpg",
      "/images/ezy_tab_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 12,
    sku: "EZG-TORQUE-TAB",
    brand: "Ezy-Glide",
    rating: {
      value: 4.3,
      count: 41
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 402,
    name: "Hyundai Alloy Wheel 17\" Seoul Bicolour",
    price: 199.99,
    category: "accessories",
    description: "17\" Alloy Wheel | Bicolour Finish | New | 7.0Jx17 Specification | 215/45 R17 Compatibility | Genuine Hyundai Quality | Enhanced Styling | Warranty: 3 years limited",
    images: [
      "/images/hyundai_wheel_1.jpg",
      "/images/hyundai_wheel_2.jpg",
      "/images/hyundai_wheel_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 10,
    sku: "HYUNDAI-WHEEL-17",
    brand: "Hyundai",
    rating: {
      value: 4.8,
      count: 76
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 403,
    name: "Rigger's Pal® Mounting Bracket",
    price: 129.99,
    category: "accessories",
    description: "Aluminum Mount Pad | Black | New | Port Mount Installation | Compact Design | Space-Saving | Ezy-Stik® Compatibility | 12\" Height | Warranty: 2 years marine",
    images: [
      "/images/riggers_pal_1.jpg",
      "/images/riggers_pal_2.jpg",
      "/images/riggers_pal_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 4,
    sku: "EZG-RIGGER-PAL",
    brand: "Ezy-Glide",
    rating: {
      value: 4.2,
      count: 29
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 404,
    name: "Hyundai All-Weather Floor Mats",
    price: 89.99,
    category: "accessories",
    description: "Custom Fit Mats | Black/Red | New | Durably Construction | Easy-to-Clean | Color Accent | Fixing Points | Perfect Fit i20N | Warranty: 2 years limited",
    images: [
      "/images/hyundai_mats_1.jpg",
      "/images/hyundai_mats_2.jpg",
      "/images/hyundai_mats_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 15,
    sku: "HYUNDAI-MATS-AW",
    brand: "Hyundai",
    rating: {
      value: 4.6,
      count: 112
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 405,
    name: "Torque Tamer® Steering Assistance",
    price: 149.99,
    category: "accessories",
    description: "Torque Reduction System | Silver | New | 4-Stroke Engine Compatibility | Mercury/Yamaha Support | Increased Leverage | Ezy-Glide Exclusive | Warranty: 1 year marine",
    images: [
      "/images/torque_tamer_1.jpg",
      "/images/torque_tamer_2.jpg",
      "/images/torque_tamer_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 3,
    sku: "EZG-TORQUE-TAMER",
    brand: "Ezy-Glide",
    rating: {
      value: 4.5,
      count: 33
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 406,
    name: "Hyundai Boot Liner",
    price: 119.99,
    category: "accessories",
    description: "Waterproof Liner | Black | New | Anti-Slip Surface | Raised Edges | Custom Fit | Durable Material | Easy Cleaning | Warranty: 2 years limited",
    images: [
      "/images/hyundai_liner_1.jpg",
      "/images/hyundai_liner_2.jpg",
      "/images/hyundai_liner_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 9,
    sku: "HYUNDAI-BOOT-LINER",
    brand: "Hyundai",
    rating: {
      value: 4.4,
      count: 58
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 407,
    name: "Lever Latch® Marine Stabilizer",
    price: 69.99,
    category: "accessories",
    description: "Engine Stabilization | Black | New | Straight-Ahead Positioning | Trolling Support | Ezy-Stik® Compatibility | Trailering Aid | Warranty: 1 year marine",
    images: [
      "/images/lever_latch_1.jpg",
      "/images/lever_latch_2.jpg",
      "/images/lever_latch_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 8,
    sku: "EZG-LEVER-LATCH",
    brand: "Ezy-Glide",
    rating: {
      value: 4.1,
      count: 22
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 408,
    name: "Hyundai Door Mirror Caps",
    price: 79.99,
    category: "accessories",
    description: "Color Accent Caps | Tomato Red | New | Phantom Black Option | Aqua Turquoise Available | Easy Installation | Enhanced Styling | Warranty: 2 years limited",
    images: [
      "/images/hyundai_mirror_1.jpg",
      "/images/hyundai_mirror_2.jpg",
      "/images/hyundai_mirror_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 11,
    sku: "HYUNDAI-MIRROR-CAPS",
    brand: "Hyundai",
    rating: {
      value: 4.3,
      count: 47
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 409,
    name: "Ezy-Shot® Lubricant Package",
    price: 39.99,
    category: "accessories",
    description: "Steering Maintenance | 4oz Tube | New | 80 Below® Action Lube | Drill Template Included | Ezy-Stik® Compatibility | Easy Application | Warranty: 1 year marine",
    images: [
      "/images/ezy_shot_1.jpg",
      "/images/ezy_shot_2.jpg",
      "/images/ezy_shot_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 20,
    sku: "EZG-SHOT-LUBE",
    brand: "Ezy-Glide",
    rating: {
      value: 4.0,
      count: 35
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 410,
    name: "Hyundai Side Skirts",
    price: 249.99,
    category: "accessories",
    description: "Body Styling Kit | Phantom Black | New | Sporty Design | Elegant Appearance | Custom Look | Easy Installation | Warranty: 2 years limited",
    images: [
      "/images/hyundai_skirts_1.jpg",
      "/images/hyundai_skirts_2.jpg",
      "/images/hyundai_skirts_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 6,
    sku: "HYUNDAI-SIDE-SKIRTS",
    brand: "Hyundai",
    rating: {
      value: 4.5,
      count: 41
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 411,
    name: "Adjustable Mounting Bracket",
    price: 149.99,
    category: "accessories",
    description: "Aluminum Mount System | Black | New | 1\" Position Adjustment | Multiple Configurations | Space-Saving Design | Ezy-Stik® Compatibility | Warranty: 2 years marine",
    images: [
      "/images/adjustable_mount_1.jpg",
      "/images/adjustable_mount_2.jpg",
      "/images/adjustable_mount_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 5,
    sku: "EZG-ADJUST-MOUNT",
    brand: "Ezy-Glide",
    rating: {
      value: 4.4,
      count: 26
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 412,
    name: "Hyundai Towbar System",
    price: 399.99,
    category: "accessories",
    description: "Towing Solution | Black | New | Perfect Vehicle Match | Safe Towing | Reliable Performance | Easy Installation | Warranty: 3 years limited",
    images: [
      "/images/hyundai_towbar_1.jpg",
      "/images/hyundai_towbar_2.jpg",
      "/images/hyundai_towbar_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 4,
    sku: "HYUNDAI-TOWBAR",
    brand: "Hyundai",
    rating: {
      value: 4.7,
      count: 33
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 413,
    name: "Optical Post Collar Set",
    price: 49.99,
    category: "accessories",
    description: "Ø1/2\" Collars | Stainless Steel | New | Slip-On Design | 5-Pack | Precision Engineering | Thorlabs Compatible | Warranty: 2 years manufacturer",
    images: [
      "/images/optical_collars_1.jpg",
      "/images/optical_collars_2.jpg",
      "/images/optical_collars_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 25,
    sku: "THORLABS-COLLARS",
    brand: "Thorlabs",
    rating: {
      value: 4.6,
      count: 38
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 414,
    name: "Hyundai Winter Wheel Set",
    price: 799.99,
    category: "accessories",
    description: "Complete Winter Package | Silver | New | 16\" Alloy Wheels | Winter Tires Included | Optimum Traction | Safe Winter Driving | Warranty: 3 years seasonal",
    images: [
      "/images/hyundai_winter_1.jpg",
      "/images/hyundai_winter_2.jpg",
      "/images/hyundai_winter_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 7,
    sku: "HYUNDAI-WINTER-SET",
    brand: "Hyundai",
    rating: {
      value: 4.8,
      count: 62
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 415,
    name: "Right Angle Post Clamp",
    price: 29.99,
    category: "accessories",
    description: "90° Fixed Adapter | Stainless Steel | New | Ø1/2\" Compatibility | Precision Machining | Optical Setup Support | Thorlabs Quality | Warranty: 2 years manufacturer",
    images: [
      "/images/right_angle_1.jpg",
      "/images/right_angle_2.jpg",
      "/images/right_angle_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 30,
    sku: "THORLABS-RA90",
    brand: "Thorlabs",
    rating: {
      value: 4.5,
      count: 43
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
  id: 1415,
  name: "Canon EOS R50",
  price: 64995.00,
  category: "cameras",
  description: "RF-S18-45mm f/4.5-6.3 IS STM Kit | APS-C CMOS Sensor | 4K 25p Video | Eye Detection AF | Lightweight Body (356g) | Beginner Mirrorless Camera",
  images: [
    "/images/camera415_1.jpg",
    "/images/camera415_2.jpg",
    "/images/camera415_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CAN-R50-415",
  brand: "Canon",
  rating: {
    value: 4.0,
    count: 15
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 416,
  name: "Canon EOS R50 Dual Lens Kit",
  price: 97995.00,
  category: "cameras",
  description: "RF-S18-45mm f/4.5-6.3 IS STM & RF-S55-210mm f/5-7.1 IS STM | 24.2MP APS-C Sensor | 4K 30p Video | 15 FPS Continuous Shooting | Mirrorless Camera for Enthusiasts",
  images: [
    "/images/camera416_1.jpg",
    "/images/camera416_2.jpg",
    "/images/camera416_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "CAN-R50DL-416",
  brand: "Canon",
  rating: {
    value: 4.3,
    count: 22
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 417,
  name: "Canon EOS R8",
  price: 142995.00,
  category: "cameras",
  description: "Body Only | Full-Frame CMOS Sensor | 4K 60p Video (6K Oversampled) | Canon Log 3 | 40 FPS Continuous Shooting | Lightweight Full-Frame Mirrorless",
  images: [
    "/images/camera417_1.jpg",
    "/images/camera417_2.jpg",
    "/images/camera417_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "CAN-R8-417",
  brand: "Canon",
  rating: {
    value: 4.6,
    count: 18
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 418,
  name: "Canon EOS R8 Kit",
  price: 161995.00,
  category: "cameras",
  description: "RF24-50mm f/4.5-6.3 IS STM Lens | Full-Frame Mirrorless | 24.2MP Sensor | FHD 180p Slow Motion | EOS iTR AF X | Travel Photography Camera",
  images: [
    "/images/camera418_1.jpg",
    "/images/camera418_2.jpg",
    "/images/camera418_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CAN-R8K-418",
  brand: "Canon",
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
  id: 419,
  name: "Canon EOS R6 Mark II",
  price: 243995.00,
  category: "cameras",
  description: "Body Only | 24.2MP Full-Frame Sensor | 4K 60p Video (6K Oversampling) | 40 FPS Continuous Shooting | 8-Stop Image Stabilization | Professional Mirrorless",
  images: [
    "/images/camera419_1.jpg",
    "/images/camera419_2.jpg",
    "/images/camera419_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "CAN-R62-419",
  brand: "Canon",
  rating: {
    value: 4.8,
    count: 27
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 420,
  name: "Canon EOS R6 Mark II Kit",
  price: 271995.00,
  category: "cameras",
  description: "RF24-105mm f/4-7.1 IS STM Lens | Full-Frame Mirrorless | 6K RAW HDMI Out | FHD 180p | Animal Detection AF | Advanced Video Capabilities",
  images: [
    "/images/camera420_1.jpg",
    "/images/camera420_2.jpg",
    "/images/camera420_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CAN-R62K-420",
  brand: "Canon",
  rating: {
    value: 4.7,
    count: 15
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 421,
  name: "Canon EOS R7",
  price: 138995.00,
  category: "cameras",
  description: "Body Only | 32.5MP APS-C Sensor | 30 FPS Continuous Shooting | 4K UHD 7K Oversampling | Canon Log 3 | Crop Sensor Mirrorless for Sports/Wildlife",
  images: [
    "/images/camera421_1.jpg",
    "/images/camera421_2.jpg",
    "/images/camera421_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "CAN-R7-421",
  brand: "Canon",
  rating: {
    value: 4.6,
    count: 20
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 422,
  name: "Canon EOS R7 Kit",
  price: 175995.00,
  category: "cameras",
  description: "RF-S18-150mm f/3.5-6.3 IS STM Lens | APS-C Mirrorless | 1.6x Crop Factor | 4K 60p Video | Advanced AF Tracking | All-in-One Travel Solution",
  images: [
    "/images/camera422_1.jpg",
    "/images/camera422_2.jpg",
    "/images/camera422_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CAN-R7K-422",
  brand: "Canon",
  rating: {
    value: 4.4,
    count: 18
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 423,
  name: "Canon EOS R10",
  price: 92995.00,
  category: "cameras",
  description: "RF-S18-45mm f/4.5-6.3 IS STM Kit | 24.2MP APS-C Sensor | 23 FPS Continuous Shooting | 4K UHD 6K Oversampling | Beginner-Friendly Mirrorless",
  images: [
    "/images/camera423_1.jpg",
    "/images/camera423_2.jpg",
    "/images/camera423_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CAN-R10-423",
  brand: "Canon",
  rating: {
    value: 4.2,
    count: 10
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 424,
  name: "Canon EOS R10 Superzoom Kit",
  price: 119995.00,
  category: "cameras",
  description: "RF-S18-150mm f/3.5-6.3 IS STM Lens | APS-C Mirrorless | 4K 60p Video | Advanced AF/AE Tracking | Versatile Zoom Range for Travel Photography",
  images: [
    "/images/camera424_1.jpg",
    "/images/camera424_2.jpg",
    "/images/camera424_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CAN-R10SZ-424",
  brand: "Canon",
  rating: {
    value: 4.3,
    count: 14
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 425,
  name: "Canon EOS R5",
  price: 365995.00,
  category: "cameras",
  description: "Body Only | 45MP Full-Frame CMOS Sensor | 8-Stop IBIS | 20 FPS Continuous Shooting | Animal Detection AF | Professional Full-Frame Mirrorless",
  images: [
    "/images/camera425_1.jpg",
    "/images/camera425_2.jpg",
    "/images/camera425_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "CAN-R5-425",
  brand: "Canon",
  rating: {
    value: 4.9,
    count: 35
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 426,
  name: "Canon EOS R5 Mark II",
  price: 405995.00,
  category: "cameras",
  description: "Body Only | 45MP Full-Frame Stacked Sensor | 8K 60p RAW Video | DIGIC Accelerator & DIGIC X | Canon Log 2 and 3 | Flagship Professional Mirrorless",
  images: [
    "/images/camera426_1.jpg",
    "/images/camera426_2.jpg",
    "/images/camera426_3.jpg"
  ],
  highDemand: true,
  sold: true,
  quantity: 0,
  sku: "CAN-R52-426",
  brand: "Canon",
  rating: {
    value: 5.0,
    count: 42
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 427,
  name: "Canon EOS R5 Mark II Premium Kit",
  price: 505995.00,
  category: "cameras",
  description: "RF24-105mm f/4L IS USM Lens | 45MP Stacked Sensor | 4K 120p Recording | Accelerated Capture Technology | Professional Video & Photo Solution",
  images: [
    "/images/camera427_1.jpg",
    "/images/camera427_2.jpg",
    "/images/camera427_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "CAN-R52PK-427",
  brand: "Canon",
  rating: {
    value: 5.0,
    count: 28
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 428,
  name: "Canon EOS R1",
  price: 630995.00,
  category: "cameras",
  description: "Body Only | 24.2MP Full-Frame Stacked Sensor | 6K 60p RAW & 4K 120p Recording | DIGIC Accelerator & DIGIC X | Canon Log 2 and 3 | Ultimate Professional Camera",
  images: [
    "/images/camera428_1.jpg",
    "/images/camera428_2.jpg",
    "/images/camera428_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "CAN-R1-428",
  brand: "Canon",
  rating: {
    value: 5.0,
    count: 50
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 429,
  name: "Canon EOS R3",
  price: 537995.00,
  category: "cameras",
  description: "Body Only | 30 FPS Continuous Shooting | Eye Control AF | Vehicle Priority AF | 6K RAW Recording | Professional Sports & Action Mirrorless",
  images: [
    "/images/camera429_1.jpg",
    "/images/camera429_2.jpg",
    "/images/camera429_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CAN-R3-429",
  brand: "Canon",
  rating: {
    value: 4.9,
    count: 38
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 430,
  name: "Canon EOS RP",
  price: 94995.00,
  category: "cameras",
  description: "Body Only | 26.2MP Full-Frame Sensor | 0.05s Focusing Time | 4,779 Focus Points | Entry-Level Full-Frame Mirrorless | Compact and Lightweight",
  images: [
    "/images/camera430_1.jpg",
    "/images/camera430_2.jpg",
    "/images/camera430_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CAN-RP-430",
  brand: "Canon",
  rating: {
    value: 4.1,
    count: 16
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 431,
  name: "Canon EOS 90D",
  price: 144995.00,
  category: "cameras",
  description: "EF-S18-135mm f/3.5-5.6 IS USM Kit | 32.5MP APS-C Sensor | DIGIC 8 | Dual Pixel CMOS AF | 45 Cross-Type AF Points | DSLR for Enthusiasts",
  images: [
    "/images/camera431_1.jpg",
    "/images/camera431_2.jpg",
    "/images/camera431_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CAN-90D-431",
  brand: "Canon",
  rating: {
    value: 4.4,
    count: 24
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 432,
  name: "Canon EOS 200D II",
  price: 68995.00,
  category: "cameras",
  description: "EF-S 18-55mm f/4-5.6 IS STM Kit | 24.1MP APS-C Sensor | Dual Pixel CMOS AF | DIGIC 8 | Beginner DSLR | Compact and User-Friendly",
  images: [
    "/images/camera432_1.jpg",
    "/images/camera432_2.jpg",
    "/images/camera432_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CAN-200D2-432",
  brand: "Canon",
  rating: {
    value: 4.2,
    count: 19
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 433,
  name: "Canon EOS 1500D",
  price: 49995.00,
  category: "cameras",
  description: "EF S18-55 IS II Kit | 24.1MP APS-C Sensor | DIGIC 4+ Processor | 9-Point AF System | ISO 100-6400 (Expandable to 12800) | Entry-Level DSLR",
  images: [
    "/images/camera433_1.jpg",
    "/images/camera433_2.jpg",
    "/images/camera433_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CAN-1500D-433",
  brand: "Canon",
  rating: {
    value: 3.9,
    count: 12
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 434,
  name: "Canon EOS 3000D",
  price: 35995.00,
  category: "cameras",
  description: "EF S18-55 II Kit | 18MP APS-C Sensor | DIGIC 4+ Processor | 9-Point AF System | Basic Entry-Level DSLR | Most Affordable Canon DSLR",
  images: [
    "/images/camera434_1.jpg",
    "/images/camera434_2.jpg",
    "/images/camera434_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CAN-3000D-434",
  brand: "Canon",
  rating: {
    value: 3.7,
    count: 8
  },
  reviews: [
    {
      rating: 3
    }
  ]
},
{
  id: 435,
  name: "Nikon Z 5",
  price: 119999.99,
  category: "cameras",
  description: "Body Only | Full-Frame Mirrorless | 24.3MP Sensor | 4K UHD Video | In-Body Image Stabilization (IBIS) | Dual SD Card Slots | Weather-Sealed | Ideal for enthusiasts and aspiring professionals.",
  images: [
    "/images/camera435_1.jpg",
    "/images/camera435_2.jpg",
    "/images/camera435_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "NIK-Z5-435",
  brand: "Nikon",
  rating: {
    value: 4.5,
    count: 31
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 436,
  name: "Sony Alpha 7 IV",
  price: 249999.99,
  category: "cameras",
  description: "Body Only | Full-Frame Hybrid Mirrorless | 33MP Exmor R CMOS Sensor | 4K 60p Video | Real-time Eye AF | 10fps Continuous Shooting | Content creator's all-in-one solution.",
  images: [
    "/images/camera436_1.jpg",
    "/images/camera436_2.jpg",
    "/images/camera436_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "SON-A74-436",
  brand: "Sony",
  rating: {
    value: 4.8,
    count: 47
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 437,
  name: "Fujifilm X-T5",
  price: 169999.99,
  category: "cameras",
  description: "Body Only | APS-C Mirrorless | 40.2MP Sensor | 6.2K 30p Video | 7-Stop IBIS | Classic Film Simulations | Weather-Resistant | For photographers seeking a classic feel with modern performance.",
  images: [
    "/images/camera437_1.jpg",
    "/images/camera437_2.jpg",
    "/images/camera437_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "FUJ-XT5-437",
  brand: "Fujifilm",
  rating: {
    value: 4.7,
    count: 39
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 438,
  name: "Canon PowerShot G7 X Mark III",
  price: 84999.99,
  category: "cameras",
  description: "Compact Camera | 20.1MP 1-inch Stacked CMOS Sensor | 4K UHD Video | Live Streaming to YouTube | Vertical Video Support | Vlogger's essential camera.",
  images: [
    "/images/camera438_1.jpg",
    "/images/camera438_2.jpg",
    "/images/camera438_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "CAN-G7X3-438",
  brand: "Canon",
  rating: {
    value: 4.4,
    count: 28
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 439,
  name: "Panasonic Lumix S5II",
  price: 199999.99,
  category: "cameras",
  description: "Body Only | Full-Frame Mirrorless | 24.2MP Sensor | Phase Hybrid AF | 4K 60p 10-bit Video | Active Cooling | Real-time LUT | Designed for hybrid photographers and videographers.",
  images: [
    "/images/camera439_1.jpg",
    "/images/camera439_2.jpg",
    "/images/camera439_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "PAN-S52-439",
  brand: "Panasonic",
  rating: {
    value: 4.6,
    count: 22
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 440,
  name: "Olympus OM-D E-M10 Mark IV",
  price: 74999.99,
  category: "cameras",
  description: "M.Zuiko 14-42mm EZ Kit | Micro Four Thirds Mirrorless | 20MP Sensor | 4K Video | 5-Axis In-Body Stabilization | Compact and lightweight, perfect for travel and everyday photography.",
  images: [
    "/images/camera440_1.jpg",
    "/images/camera440_2.jpg",
    "/images/camera440_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "OLY-EM104-440",
  brand: "Olympus",
  rating: {
    value: 4.3,
    count: 18
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 441,
  name: "GoPro HERO12 Black",
  price: 52999.99,
  category: "cameras",
  description: "Action Camera | 27MP Photos | 5.3K60 & 4K120 Video | HyperSmooth 6.0 Stabilization | HDR Video + Photo | Wireless Audio Support | Waterproof to 10m (33ft).",
  images: [
    "/images/camera441_1.jpg",
    "/images/camera441_2.jpg",
    "/images/camera441_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "GOP-H12-441",
  brand: "GoPro",
  rating: {
    value: 4.5,
    count: 89
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 442,
  name: "Canon EOS 1D X Mark III",
  price: 489999.99,
  category: "cameras",
  description: "Body Only | Flagship Professional DSLR | 20.1MP Full-Frame Sensor | 16fps Optical Viewfinder | 4K 60p Video | Deep Learning AF | Built for sports and wildlife photography.",
  images: [
    "/images/camera442_1.jpg",
    "/images/camera442_2.jpg",
    "/images/camera442_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CAN-1DX3-442",
  brand: "Canon",
  rating: {
    value: 4.9,
    count: 15
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 443,
  name: "Sony ZV-1F",
  price: 59999.99,
  category: "cameras",
  description: "Vlogging Camera | 20.1MP 1-inch Sensor | 4K Video | Wide-Angle Lens | Product Showcase Setting | Directional 3-Capsule Mic | Designed specifically for vloggers.",
  images: [
    "/images/camera443_1.jpg",
    "/images/camera443_2.jpg",
    "/images/camera443_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "SON-ZV1F-443",
  brand: "Sony",
  rating: {
    value: 4.2,
    count: 56
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 444,
  name: "Nikon D850",
  price: 229999.99,
  category: "cameras",
  description: "Body Only | Legendary High-Resolution DSLR | 45.7MP Full-Frame Sensor | 4K UHD Video | 7fps Continuous Shooting | Tilting Touchscreen | Timeless workhorse for studio and landscape.",
  images: [
    "/images/camera444_1.jpg",
    "/images/camera444_2.jpg",
    "/images/camera444_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "NIK-D850-444",
  brand: "Nikon",
  rating: {
    value: 4.9,
    count: 112
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 445,
  name: "Leica M10-P Safari Edition",
  price: 15999.99,
  category: "cameras",
  description: "Limited Edition (20029 066/350) | Olive Green Finish | Full-Frame Rangefinder | 24MP CMOS Sensor | Maestro II Image Processor | ISO 100-50000 | Collectors Grade A Condition [citation:3]",
  images: [
    "/images/camera445_1.jpg",
    "/images/camera445_2.jpg",
    "/images/camera445_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "LCA-SAF-445",
  brand: "Leica",
  rating: {
    value: 4.9,
    count: 12
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 446,
  name: "Nikon SP Black Paint",
  price: 3499.99,
  category: "cameras",
  description: "Vintage Rangefinder (1957) | 35mm Film Camera | Nikon S-Mount | Black Paint Finish | Collectors Grade A Condition | One of Nikon's First Professional Rangefinders [citation:3]",
  images: [
    "/images/camera446_1.jpg",
    "/images/camera446_2.jpg",
    "/images/camera446_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "NIK-SP-446",
  brand: "Nikon",
  rating: {
    value: 4.8,
    count: 8
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 447,
  name: "Konica Hexar RF",
  price: 2899.99,
  category: "cameras",
  description: "Rare Half-Frame Camera | 35mm f/2 Lens | 72 Exposures per Roll | Advanced Auto Focus | Silent Mode | Motorized Film Rewind | Street Photography Legend [citation:4]",
  images: [
    "/images/camera447_1.jpg",
    "/images/camera447_2.jpg",
    "/images/camera447_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "KON-HEX-447",
  brand: "Konica",
  rating: {
    value: 4.6,
    count: 15
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 448,
  name: "Canon CX-60 X-Ray Camera",
  price: 12500.00,
  category: "cameras",
  description: "Antique X-Ray Camera (1946) | 100mm f/1.5 X-Canon Lens | 6×6 120 Medium Format | Dedicated Medical Imaging Camera | Single Shot Film Holder | Historical Collectible [citation:4]",
  images: [
    "/images/camera448_1.jpg",
    "/images/camera448_2.jpg",
    "/images/camera448_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "CAN-XRAY-448",
  brand: "Canon",
  rating: {
    value: 4.7,
    count: 6
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 449,
  name: "Nikon I (First Model)",
  price: 22000.00,
  category: "cameras",
  description: "First Nikon Camera (1948) | Occupied Japan Production | 24×32mm Format | Inspired by Contax Rangefinder | Historical Significance | Extremely Rare Survivor [citation:4]",
  images: [
    "/images/camera449_1.jpg",
    "/images/camera449_2.jpg",
    "/images/camera449_3.jpg"
  ],
  highDemand: true,
  sold: true,
  quantity: 0,
  sku: "NIK-1ST-449",
  brand: "Nikon",
  rating: {
    value: 5.0,
    count: 3
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 450,
  name: "Fujifilm TX-2 Panoramic",
  price: 8500.00,
  category: "cameras",
  description: "Hasselblad Collaboration | 24×65mm Panoramic Format | 35mm Film | Auto Film Loading | Reverse Winding System | 30mm/45mm/90mm Lens Compatibility | Landscape Specialist [citation:4]",
  images: [
    "/images/camera450_1.jpg",
    "/images/camera450_2.jpg",
    "/images/camera450_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "FUJ-TX2-450",
  brand: "Fujifilm",
  rating: {
    value: 4.5,
    count: 9
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 451,
  name: "Leica M Monochrom Stealth Edition",
  price: 26400.00,
  category: "cameras",
  description: "Limited Edition Typ 246 | Black Paint Finish | 88/125 Production Number | Monochrome Sensor Only | DRIFTER SET by Lenny Kravitz | Collectors Grade A [citation:3]",
  images: [
    "/images/camera451_1.jpg",
    "/images/camera451_2.jpg",
    "/images/camera451_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "LCA-STL-451",
  brand: "Leica",
  rating: {
    value: 4.9,
    count: 7
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 452,
  name: "Rollei Rolleimarin Underwater Housing",
  price: 3499.99,
  category: "cameras",
  description: "Hans Hass Edition | For Rollei 3.5F Camera | Vintage Underwater Photography System | 1960s Diving Technology | Collectors Grade B+ | Historical Marine Exploration Gear [citation:3]",
  images: [
    "/images/camera452_1.jpg",
    "/images/camera452_2.jpg",
    "/images/camera452_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ROL-UW-452",
  brand: "Rollei",
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
  id: 453,
  name: "Lancaster Watch Camera",
  price: 42000.00,
  category: "cameras",
  description: "Replica Mens Model | Functional Watch/Camera Combination | Victorian Era Design | Ultra-Rare Collectible | Working Condition | Conversation Piece [citation:3]",
  images: [
    "/images/camera453_1.jpg",
    "/images/camera453_2.jpg",
    "/images/camera453_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "LAN-WCH-453",
  brand: "Lancaster",
  rating: {
    value: 4.7,
    count: 4
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 454,
  name: "Contax G2 with Zeiss 45mm f/2",
  price: 2499.99,
  category: "cameras",
  description: "Professional Rangefinder System | Carl Zeiss Planar Lens | Autofocus Film Camera | 35mm Format | Used Condition with Warranty | Highly Sought by Film Photographers [citation:5]",
  images: [
    "/images/camera454_1.jpg",
    "/images/camera454_2.jpg",
    "/images/camera454_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "CON-G2-454",
  brand: "Contax",
  rating: {
    value: 4.8,
    count: 18
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 455,
  name: "Apple Watch Series 9",
  price: 399.99,
  category: "accessories",
  description: "45mm Midnight Aluminum Case with Midnight Sport Band | GPS | Retina Display | S9 SiP Chip | Blood Oxygen App | ECG App | High and Low Heart Rate Notifications | Water Resistant 50m",
  images: [
    "/images/watch455_1.jpg",
    "/images/watch455_2.jpg",
    "/images/watch455_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 15,
  sku: "APL-WS9-455",
  brand: "Apple",
  rating: {
    value: 4.8,
    count: 142
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 456,
  name: "Samsung Galaxy Watch 6 Classic",
  price: 369.99,
  category: "accessories",
  description: "47mm Black | Rotating Bezel | Sapphire Crystal Glass | Sleep Coaching | Heart Rate Monitor | Body Composition Measurement | GPS | Compatible with Android and iOS",
  images: [
    "/images/watch456_1.jpg",
    "/images/watch456_2.jpg",
    "/images/watch456_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 8,
  sku: "SAM-GW6C-456",
  brand: "Samsung",
  rating: {
    value: 4.6,
    count: 89
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 457,
  name: "Garmin Venu 3",
  price: 449.99,
  category: "accessories",
  description: "Slate Bezel with Silicone Band | GPS | AMOLED Display | Advanced Sleep Coaching | Morning Report | Workout Recommendations | Music Storage | Battery Life: Up to 14 days",
  images: [
    "/images/watch457_1.jpg",
    "/images/watch457_2.jpg",
    "/images/watch457_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 5,
  sku: "GRM-V3-457",
  brand: "Garmin",
  rating: {
    value: 4.7,
    count: 67
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 458,
  name: "Fitbit Charge 6",
  price: 159.95,
  category: "accessories",
  description: "Black Fitness Tracker | Built-in GPS | Heart Rate Monitor | Sleep Tracking | 40+ Exercise Modes | Spotify Controls | Google Maps | Battery Life: Up to 7 days",
  images: [
    "/images/watch458_1.jpg",
    "/images/watch458_2.jpg",
    "/images/watch458_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 20,
  sku: "FIT-C6-458",
  brand: "Fitbit",
  rating: {
    value: 4.4,
    count: 203
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 459,
  name: "Xiaomi Smart Band 8 Pro",
  price: 89.99,
  category: "accessories",
  description: "Black | 1.74\" AMOLED Display | Built-in GPS | Always-On Display | 150+ Sports Modes | Stress Monitoring | Blood Oxygen Monitoring | 5ATM Water Resistant",
  images: [
    "/images/watch459_1.jpg",
    "/images/watch459_2.jpg",
    "/images/watch459_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 25,
  sku: "XIA-B8P-459",
  brand: "Xiaomi",
  rating: {
    value: 4.3,
    count: 118
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 460,
  name: "Garmin Forerunner 265",
  price: 449.99,
  category: "accessories",
  description: "46mm GPS Running Smartwatch | AMOLED Display | Training Readiness Score | Morning Report | Music Storage | Advanced Running Dynamics | Battery Life: Up to 15 days",
  images: [
    "/images/watch460_1.jpg",
    "/images/watch460_2.jpg",
    "/images/watch460_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 6,
  sku: "GRM-FR265-460",
  brand: "Garmin",
  rating: {
    value: 4.9,
    count: 76
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 461,
  name: "Amazfit GTR 4",
  price: 199.99,
  category: "accessories",
  description: "46mm Supersonic Black | 1.43\" AMOLED Display | Built-in GPS | 150+ Sports Modes | Bluetooth Calls | Blood Oxygen Measurement | Battery Life: Up to 14 days",
  images: [
    "/images/watch461_1.jpg",
    "/images/watch461_2.jpg",
    "/images/watch461_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 12,
  sku: "AMZ-GTR4-461",
  brand: "Amazfit",
  rating: {
    value: 4.5,
    count: 94
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 462,
  name: "Withings ScanWatch 2",
  price: 349.95,
  category: "accessories",
  description: "42mm Black Horizon | Hybrid Smartwatch | Medical-Grade ECG | Oximeter | Temperature Sensor | 30-Day Battery Life | Water Resistant to 5ATM | Sleep Tracking",
  images: [
    "/images/watch462_1.jpg",
    "/images/watch462_2.jpg",
    "/images/watch462_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 4,
  sku: "WTH-SW2-462",
  brand: "Withings",
  rating: {
    value: 4.6,
    count: 57
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 463,
  name: "Huawei Watch GT 4",
  price: 249.99,
  category: "accessories",
  description: "46mm Black | Stainless Steel Build | 1.43\" AMOLED Display | TruSeen 5.5+ Heart Rate Monitoring | 100+ Workout Modes | Bluetooth Calls | Up to 14-day battery life",
  images: [
    "/images/watch463_1.jpg",
    "/images/watch463_2.jpg",
    "/images/watch463_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 7,
  sku: "HUA-GT4-463",
  brand: "Huawei",
  rating: {
    value: 4.4,
    count: 63
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 464,
  name: "Suunto 9 Peak Pro",
  price: 599.00,
  category: "accessories",
  description: "Titanium | GPS Sports Watch | Barometer | compass | 80+ Sports Modes | Ultra-Long Battery Life (up to 300 hours) | Military Durability | Water Resistant 100m",
  images: [
    "/images/watch464_1.jpg",
    "/images/watch464_2.jpg",
    "/images/watch464_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 3,
  sku: "SUN-9PP-464",
  brand: "Suunto",
  rating: {
    value: 4.7,
    count: 38
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 465,
  name: "Polar Pacer Pro",
  price: 299.95,
  category: "accessories",
  description: "White | GPS Running Watch | Running Performance Test | Training Load Pro | Nightly Recharge | FuelWise Nutrition Guidance | Battery Life: Up to 35 hours",
  images: [
    "/images/watch465_1.jpg",
    "/images/watch465_2.jpg",
    "/images/watch465_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 5,
  sku: "POL-PP-465",
  brand: "Polar",
  rating: {
    value: 4.5,
    count: 42
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 466,
  name: "Coros Pace 3",
  price: 229.99,
  category: "accessories",
  description: "White Nylon Band | GPS Running Watch | Full GPS Mode: 38 hours | Daily Use: 24 days | Wrist-Based Heart Rate | Barometric Altimeter | Music Storage",
  images: [
    "/images/watch466_1.jpg",
    "/images/watch466_2.jpg",
    "/images/watch466_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 9,
  sku: "COR-P3-466",
  brand: "Coros",
  rating: {
    value: 4.8,
    count: 51
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 467,
  name: "Fossil Gen 6 Wellness Edition",
  price: 299.00,
  category: "accessories",
  description: "44mm Smoke Stainless Steel | Wear OS by Google | Heart Rate Monitor | Blood Oxygen Tracking | Sleep Score | 30+ Exercise Modes | Fast Charging",
  images: [
    "/images/watch467_1.jpg",
    "/images/watch467_2.jpg",
    "/images/watch467_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 6,
  sku: "FOS-G6W-467",
  brand: "Fossil",
  rating: {
    value: 4.2,
    count: 29
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 468,
  name: "Garmin Lily 2",
  price: 249.99,
  category: "accessories",
  description: "Classic Small Smartwatch | 34mm Case | Fashionable Design | Health Monitoring | Sleep Score | Menstrual Cycle Tracking | Battery Life: Up to 5 days",
  images: [
    "/images/watch468_1.jpg",
    "/images/watch468_2.jpg",
    "/images/watch468_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 11,
  sku: "GRM-L2-468",
  brand: "Garmin",
  rating: {
    value: 4.3,
    count: 47
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 469,
  name: "Samsung Galaxy Watch 6",
  price: 299.99,
  category: "accessories",
  description: "40mm Gold | Advanced Sleep Coaching | Body Composition | Heart Rate Monitor | GPS | Compatible with Android and iOS | 30-hour battery life",
  images: [
    "/images/watch469_1.jpg",
    "/images/watch469_2.jpg",
    "/images/watch469_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 10,
  sku: "SAM-GW6-469",
  brand: "Samsung",
  rating: {
    value: 4.5,
    count: 78
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 470,
  name: "Apple Watch SE (2nd Gen)",
  price: 249.99,
  category: "accessories",
  description: "40mm Midnight Aluminum Case | GPS | Retina Display | Crash Detection | Heart Rate Notifications | Water Resistant 50m | Fitness Tracking",
  images: [
    "/images/watch470_1.jpg",
    "/images/watch470_2.jpg",
    "/images/watch470_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 18,
  sku: "APL-SE2-470",
  brand: "Apple",
  rating: {
    value: 4.7,
    count: 156
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 471,
  name: "Garmin epix Pro (Gen 2)",
  price: 899.99,
  category: "accessories",
  description: "51mm Sapphire Black DLC | AMOLED Display | Built-in Flashlight | Multi-band GPS | TopoActive Maps | Health Monitoring | Battery Life: Up to 31 days",
  images: [
    "/images/watch471_1.jpg",
    "/images/watch471_2.jpg",
    "/images/watch471_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 2,
  sku: "GRM-EPIX-471",
  brand: "Garmin",
  rating: {
    value: 4.9,
    count: 33
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 472,
  name: "Fitbit Inspire 3",
  price: 99.95,
  category: "accessories",
  description: "Midnight Zen Fitness Tracker | 10-Day Battery Life | Active Zone Minutes | Sleep Score | 20+ Exercise Modes | Stress Management | Water Resistant to 50m",
  images: [
    "/images/watch472_1.jpg",
    "/images/watch472_2.jpg",
    "/images/watch472_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 22,
  sku: "FIT-I3-472",
  brand: "Fitbit",
  rating: {
    value: 4.2,
    count: 187
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 473,
  name: "Amazfit Bip 5",
  price: 79.99,
  category: "accessories",
  description: "Black | 1.91\" Large Display | Bluetooth Calls | 120+ Sports Modes | Health Monitoring | Alexa Built-in | GPS | 10-Day Battery Life",
  images: [
    "/images/watch473_1.jpg",
    "/images/watch473_2.jpg",
    "/images/watch473_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 16,
  sku: "AMZ-B5-473",
  brand: "Amazfit",
  rating: {
    value: 4.1,
    count: 92
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 474,
  name: "Garmin vívoactive 5",
  price: 299.99,
  category: "accessories",
  description: "Slate Gray | Health Snapshot | Morning Report | Sleep Score | HIIT Workouts | Music Storage | GPS | Battery Life: Up to 11 days",
  images: [
    "/images/watch474_1.jpg",
    "/images/watch474_2.jpg",
    "/images/watch474_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 7,
  sku: "GRM-VA5-474",
  brand: "Garmin",
  rating: {
    value: 4.6,
    count: 44
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 475,
  name: "Huawei Band 8",
  price: 59.99,
  category: "accessories",
  description: "Black | 1.47\" AMOLED Display | TruSleep 3.0 | Stress Monitoring | 100+ Workout Modes | 5ATM Water Resistant | Battery Life: Up to 14 days",
  images: [
    "/images/watch475_1.jpg",
    "/images/watch475_2.jpg",
    "/images/watch475_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 30,
  sku: "HUA-B8-475",
  brand: "Huawei",
  rating: {
    value: 4.3,
    count: 105
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 476,
  name: "Garmin Instinct 2X Solar",
  price: 449.99,
  category: "accessories",
  description: "Tactical Edition | Solar Charging | Built-in Flashlight | Multi-GNSS Support | Health Monitoring | Tactical Features | Battery: Unlimited in Smartwatch Mode",
  images: [
    "/images/watch476_1.jpg",
    "/images/watch476_2.jpg",
    "/images/watch476_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 4,
  sku: "GRM-I2X-476",
  brand: "Garmin",
  rating: {
    value: 4.8,
    count: 27
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 477,
  name: "Samsung Galaxy Fit 3",
  price: 89.99,
  category: "accessories",
  description: "Silver | 1.6\" AMOLED Display | 100+ Workout Trackings | Sleep Analysis | 5ATM Water Resistant | 13-Day Battery Life | Smartphone Connectivity",
  images: [
    "/images/watch477_1.jpg",
    "/images/watch477_2.jpg",
    "/images/watch477_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 14,
  sku: "SAM-GF3-477",
  brand: "Samsung",
  rating: {
    value: 4.4,
    count: 68
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 478,
  name: "Suunto Race",
  price: 449.00,
  category: "accessories",
  description: "All Black | Multi-Sport GPS Watch | Barometer | Offline Maps | 95+ Sports Modes | Battery: Up to 40 hours | Sapphire Glass | Stainless Steel Bezel",
  images: [
    "/images/watch478_1.jpg",
    "/images/watch478_2.jpg",
    "/images/watch478_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 3,
  sku: "SUN-RCE-478",
  brand: "Suunto",
  rating: {
    value: 4.6,
    count: 19
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 479,
  name: "Polar Ignite 3",
  price: 299.95,
  category: "accessories",
  description: "Nightly Black | GPS Smartwatch | Nightly Recharge | SleepWise | Serene Breathing Exercise | FuelWise | Battery Life: Up to 30 hours",
  images: [
    "/images/watch479_1.jpg",
    "/images/watch479_2.jpg",
    "/images/watch479_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 5,
  sku: "POL-I3-479",
  brand: "Polar",
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
  id: 480,
  name: "Coros Apex 2 Pro",
  price: 499.99,
  category: "accessories",
  description: "46mm Titanium | Multi-frequency GPS | Training Planning | Navigation | Heart Rate Monitor | Battery: Up to 75 hours | Music Storage | Water Resistant 50m",
  images: [
    "/images/watch480_1.jpg",
    "/images/watch480_2.jpg",
    "/images/watch480_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 3,
  sku: "COR-AP2P-480",
  brand: "Coros",
  rating: {
    value: 4.7,
    count: 22
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 481,
  name: "Fossil Carlyle HR Gen 6",
  price: 279.00,
  category: "accessories",
  description: "44mm Smoke Stainless Steel | Wear OS | Heart Rate Monitor | GPS | NFC | Speaker | 8+ Days Battery Life | Fast Charging",
  images: [
    "/images/watch481_1.jpg",
    "/images/watch481_2.jpg",
    "/images/watch481_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 4,
  sku: "FOS-CG6-481",
  brand: "Fossil",
  rating: {
    value: 4.1,
    count: 35
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 482,
  name: "Garmin Approach S70",
  price: 599.99,
  category: "accessories",
  description: "47mm Whitestone | Golf Smartwatch | Virtual Caddie | 43,000+ Courses | AMOLED Display | Health Monitoring | Battery: Up to 16 days",
  images: [
    "/images/watch482_1.jpg",
    "/images/watch482_2.jpg",
    "/images/watch482_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 2,
  sku: "GRM-AS70-482",
  brand: "Garmin",
  rating: {
    value: 4.8,
    count: 18
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 483,
  name: "Apple Watch Ultra 2",
  price: 799.99,
  category: "accessories",
  description: "49mm Titanium Case | Alpine Loop | Depth Gauge | Dual-Frequency GPS | Action Button | 86dB Siren | Water Resistant 100m | Battery Life: Up to 36 hours",
  images: [
    "/images/watch483_1.jpg",
    "/images/watch483_2.jpg",
    "/images/watch483_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 6,
  sku: "APL-WU2-483",
  brand: "Apple",
  rating: {
    value: 4.9,
    count: 87
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 484,
  name: "Fitbit Luxe",
  price: 129.95,
  category: "accessories",
  description: "Gold Stainless Steel | Stress Management | Sleep Tracking | 20+ Exercise Modes | Heart Rate Monitoring | 5+ Day Battery | Water Resistant 50m",
  images: [
    "/images/watch484_1.jpg",
    "/images/watch484_2.jpg",
    "/images/watch484_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 12,
  sku: "FIT-LUX-484",
  brand: "Fitbit",
  rating: {
    value: 4.0,
    count: 134
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 485,
  name: "Rolex Datejust 1601",
  price: 4500.00,
  category: "fashion",
  description: "Vintage 1970s | Stainless Steel & 18K Yellow Gold | Champagne Dial | Original Bracelet | Serviced Movement | Iconic Design | Investment Grade | Collectors Condition",
  images: [
    "/images/watch485_1.jpg",
    "/images/watch485_2.jpg",
    "/images/watch485_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "ROL-DJ1601-485",
  brand: "Rolex",
  rating: {
    value: 4.9,
    count: 23
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 486,
  name: "Cartier Tank Must de Cartier",
  price: 1800.00,
  category: "fashion",
  description: "Vintage 1980s | Vermeil (Gold-Plated Silver) | Quartz Movement | Original Leather Strap | Classic Rectangular Case | Black Roman Numeral Dial | Elegant Dress Watch",
  images: [
    "/images/watch486_1.jpg",
    "/images/watch486_2.jpg",
    "/images/watch486_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CAR-TANK-486",
  brand: "Cartier",
  rating: {
    value: 4.7,
    count: 18
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 487,
  name: "Omega Speedmaster Reduced 3510.50",
  price: 2800.00,
  category: "fashion",
  description: "1990s Automatic Chronograph | 39mm Stainless Steel | Black Dial | Sapphire Crystal | Serviced Caliber 3220 | Moonwatch Heritage | Collector Favorite",
  images: [
    "/images/watch487_1.jpg",
    "/images/watch487_2.jpg",
    "/images/watch487_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "OMG-SPR-487",
  brand: "Omega",
  rating: {
    value: 4.8,
    count: 27
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 488,
  name: "Jaeger-LeCoultre Reverso Classique",
  price: 3500.00,
  category: "fashion",
  description: "Vintage 1990s | Stainless Steel | Manual Wind | Art Deco Design | Reversible Case | Blue Hands | Original Leather Strap | Serviced Movement",
  images: [
    "/images/watch488_1.jpg",
    "/images/watch488_2.jpg",
    "/images/watch488_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "JLC-REV-488",
  brand: "Jaeger-LeCoultre",
  rating: {
    value: 4.6,
    count: 15
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 489,
  name: "Rolex Explorer 14270",
  price: 6500.00,
  category: "fashion",
  description: "1990s Vintage | 36mm Stainless Steel | Black Dial | Luminous Numerals | Caliber 3000 | Understated Tool Watch | Strong Appreciation Potential",
  images: [
    "/images/watch489_1.jpg",
    "/images/watch489_2.jpg",
    "/images/watch489_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "ROL-EXP-489",
  brand: "Rolex",
  rating: {
    value: 4.9,
    count: 34
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 490,
  name: "Tudor Black Bay 58 Burgundy",
  price: 3800.00,
  category: "fashion",
  description: "2025 New Release | 39mm Stainless Steel | Burgundy Bezel & Dial | METAS Certified | T-Fit Clasp | 5-Link Bracelet | Modern Vintage Inspired",
  images: [
    "/images/watch490_1.jpg",
    "/images/watch490_2.jpg",
    "/images/watch490_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 5,
  sku: "TUD-BB58-490",
  brand: "Tudor",
  rating: {
    value: 4.7,
    count: 42
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 491,
  name: "Patek Philippe Calatrava 2526",
  price: 45000.00,
  category: "fashion",
  description: "Vintage 1950s | 18K Yellow Gold | Enamel Dial | Automatic Caliber 12-600 | Iconic Dress Watch | Investment Grade | Rare Collectors Piece",
  images: [
    "/images/watch491_1.jpg",
    "/images/watch491_2.jpg",
    "/images/watch491_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "PP-CAL-491",
  brand: "Patek Philippe",
  rating: {
    value: 5.0,
    count: 9
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 492,
  name: "Ikepod Chronopod Green Power",
  price: 4200.00,
  category: "fashion",
  description: "2025 New Release | 42mm Stainless Steel | Green Dial | Automatic Chronograph | Limited Edition | Modern Design | Swiss Made",
  images: [
    "/images/watch492_1.jpg",
    "/images/watch492_2.jpg",
    "/images/watch492_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 3,
  sku: "IKP-CHG-492",
  brand: "Ikepod",
  rating: {
    value: 4.3,
    count: 12
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 493,
  name: "Rolex Submariner 5513",
  price: 12500.00,
  category: "fashion",
  description: "Vintage 1960s | Meters First Dial | Stainless Steel | Patina Markers | No-Date | Collectors Grade | Original Bezel Insert | Serviced Movement",
  images: [
    "/images/watch493_1.jpg",
    "/images/watch493_2.jpg",
    "/images/watch493_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "ROL-SUB-493",
  brand: "Rolex",
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
  id: 494,
  name: "Nomos Glashütte Zürich Weltzeit",
  price: 4300.00,
  category: "fashion",
  description: "Modern Classic | 39.9mm Stainless Steel | World Timer | In-House Movement | Bauhaus Design | Blue Dial | Sapphire Caseback",
  images: [
    "/images/watch494_1.jpg",
    "/images/watch494_2.jpg",
    "/images/watch494_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 4,
  sku: "NOM-WELT-494",
  brand: "Nomos",
  rating: {
    value: 4.5,
    count: 31
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 495,
  name: "Audemars Piguet Royal Oak 5402",
  price: 85000.00,
  category: "fashion",
  description: "Vintage 1970s | 'Jumbo' Extra-Thin | Stainless Steel | Tapisserie Dial | Caliber 2121 | Investment Grade | Rare Collectors Piece",
  images: [
    "/images/watch495_1.jpg",
    "/images/watch495_2.jpg",
    "/images/watch495_3.jpg"
  ],
  highDemand: true,
  sold: true,
  quantity: 0,
  sku: "AP-RO-495",
  brand: "Audemars Piguet",
  rating: {
    value: 5.0,
    count: 7
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 496,
  name: "Grand Seiko Ultra Fine Accuracy SLGB003",
  price: 7200.00,
  category: "fashion",
  description: "2025 New Release | 37mm Titanium | Spring Drive Movement | ±20 Seconds/Year Accuracy | Micro-Adjustment Clasp | Elegant Dress Watch",
  images: [
    "/images/watch496_1.jpg",
    "/images/watch496_2.jpg",
    "/images/watch496_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 2,
  sku: "GS-UFA-496",
  brand: "Grand Seiko",
  rating: {
    value: 4.8,
    count: 25
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 497,
  name: "Tag Heuer Monaco 1133",
  price: 22000.00,
  category: "fashion",
  description: "Vintage 1969 | Blue Dial | Square Case | Caliber 11 Chronograph | Steve McQueen Association | Collectors Grade | Serviced",
  images: [
    "/images/watch497_1.jpg",
    "/images/watch497_2.jpg",
    "/images/watch497_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "TH-MON-497",
  brand: "Tag Heuer",
  rating: {
    value: 4.7,
    count: 16
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 498,
  name: "Piaget Sixtie Collection",
  price: 11500.00,
  category: "fashion",
  description: "2025 New Release | 29mm × 25.3mm Steel | Quartz Movement | Diamond Bezel | Five-Link Bracelet | Retro-Inspired | Women's Dress Watch",
  images: [
    "/images/watch498_1.jpg",
    "/images/watch498_2.jpg",
    "/images/watch498_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 3,
  sku: "PIA-SIX-498",
  brand: "Piaget",
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
  id: 499,
  name: "Universal Genève Polerouter",
  price: 3200.00,
  category: "fashion",
  description: "Vintage 1950s | Stainless Steel | Automatic | Gérald Genta Design | Tropical Dial | Original Bracelet | Serviced Movement",
  images: [
    "/images/watch499_1.jpg",
    "/images/watch499_2.jpg",
    "/images/watch499_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "UG-POL-499",
  brand: "Universal Genève",
  rating: {
    value: 4.6,
    count: 14
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 500,
  name: "Rolex Daytona 'Hulk' 116610LV",
  price: 32000.00,
  category: "fashion",
  description: "Discontinued 2020 | Green Dial & Bezel | Ceramic Bezel | 40mm Stainless Steel | Automatic Chronograph | Investment Potential | High Demand",
  images: [
    "/images/watch500_1.jpg",
    "/images/watch500_2.jpg",
    "/images/watch500_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "ROL-DAY-500",
  brand: "Rolex",
  rating: {
    value: 4.9,
    count: 38
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 501,
  name: "F.P. Journe Chronomètre Bleu",
  price: 95000.00,
  category: "fashion",
  description: "Modern Luxury | Tantalum Case | Blue Dial | Hand-Wound Movement | Independent Watchmaking | Highly Sought After | Investment Grade",
  images: [
    "/images/watch501_1.jpg",
    "/images/watch501_2.jpg",
    "/images/watch501_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "FPJ-CB-501",
  brand: "F.P. Journe",
  rating: {
    value: 5.0,
    count: 12
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 502,
  name: "Casio Vintage A158W",
  price: 89.99,
  category: "fashion",
  description: "Retro Digital | Stainless Steel | Electro-Luminescent Light | Stopwatch | Alarm | 1980s Design | Affordable Classic",
  images: [
    "/images/watch502_1.jpg",
    "/images/watch502_2.jpg",
    "/images/watch502_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 20,
  sku: "CAS-A158-502",
  brand: "Casio",
  rating: {
    value: 4.2,
    count: 156
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 503,
  name: "H. Moser & Cie Streamliner Small Seconds",
  price: 22000.00,
  category: "fashion",
  description: "Modern Luxury | 39mm Steel | Green Fumé Dial | Integrated Bracelet | Automatic | Minimalist Design | Independent Watchmaking",
  images: [
    "/images/watch503_1.jpg",
    "/images/watch503_2.jpg",
    "/images/watch503_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 2,
  sku: "HMC-SS-503",
  brand: "H. Moser & Cie",
  rating: {
    value: 4.7,
    count: 9
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 504,
  name: "Vacheron Constantin Historiques 7291",
  price: 28000.00,
  category: "fashion",
  description: "Vintage 1950s | 18K Yellow Gold | Manual Wind | Dress Watch | Rare Collectors Piece | Serviced Movement | Original Dial",
  images: [
    "/images/watch504_1.jpg",
    "/images/watch504_2.jpg",
    "/images/watch504_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "VC-HIST-504",
  brand: "Vacheron Constantin",
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
  id: 505,
  name: "Skullcandy Method 360 ANC",
  price: 179.99,
  category: "accessories",
  description: "True Wireless Earbuds | Advanced Noise Canceling | Clear Voice Smart Mic | Secure Fit Fin Design | Up to 40 Hours Battery Life | IPX4 Water Resistance | Ideal for all-day wear and active use",
  images: [
    "/images/earbud505_1.jpg",
    "/images/earbud505_2.jpg",
    "/images/earbud505_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 15,
  sku: "SKU-M360-505",
  brand: "Skullcandy",
  rating: {
    value: 4.5,
    count: 128
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 506,
  name: "Neumann NDH 20",
  price: 599.00,
  category: "accessories",
  description: "Closed-Back Studio Headphones | 38mm Neodymium Drivers | 5Hz-30kHz Frequency Response | 150 Ohms Impedance | Memory Foam Ear Pads | Foldable Design | Professional Monitoring",
  images: [
    "/images/headphone506_1.jpg",
    "/images/headphone506_2.jpg",
    "/images/headphone506_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 8,
  sku: "NEU-NDH20-506",
  brand: "Neumann",
  rating: {
    value: 4.8,
    count: 76
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 507,
  name: "Beats Powerbeats Pro 2",
  price: 249.99,
  category: "accessories",
  description: "Wireless Earhook Earbuds | Active Noise Cancellation | Transparency Mode | Built-in Heart Rate Sensors | IPX4 Sweat Resistance | 24-Hour Battery Life | Apple H1 Chip",
  images: [
    "/images/earbud507_1.jpg",
    "/images/earbud507_2.jpg",
    "/images/earbud507_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 12,
  sku: "BEA-PBP2-507",
  brand: "Beats",
  rating: {
    value: 4.6,
    count: 204
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 508,
  name: "Soundcore Sport X20",
  price: 79.99,
  category: "accessories",
  description: "Workout Earbuds with Adjustable Hooks | IP68 Waterproof | BassUp Technology | 12H Playtime (48H with Case) | Adaptive ANC | 6-Mic AI Call Noise Reduction | Secure Fit for Sports",
  images: [
    "/images/earbud508_1.jpg",
    "/images/earbud508_2.jpg",
    "/images/earbud508_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 20,
  sku: "SOU-SX20-508",
  brand: "Soundcore",
  rating: {
    value: 4.4,
    count: 89
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 509,
  name: "Apple AirPods Pro 2",
  price: 249.00,
  category: "accessories",
  description: "True Wireless Earbuds | Active Noise Cancellation | Transparency Mode | Swipe Volume Control | IP54 Dust/Sweat Resistance | MagSafe Charging | Hands-Free Siri",
  images: [
    "/images/earbud509_1.jpg",
    "/images/earbud509_2.jpg",
    "/images/earbud509_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 25,
  sku: "APP-APP2-509",
  brand: "Apple",
  rating: {
    value: 4.8,
    count: 345
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 510,
  name: "Anker Soundcore Liberty 4 NC",
  price: 99.99,
  category: "accessories",
  description: "Budget True Wireless Earbuds | Active Noise Canceling | Transparency Mode | Bluetooth Multipoint | Wireless Charging | 10H Battery (40H with Case) | Comfortable Fit",
  images: [
    "/images/earbud510_1.jpg",
    "/images/earbud510_2.jpg",
    "/images/earbud510_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 18,
  sku: "ANK-L4NC-510",
  brand: "Anker",
  rating: {
    value: 4.3,
    count: 167
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 511,
  name: "Shokz OpenFit 2",
  price: 179.99,
  category: "accessories",
  description: "Open-Ear Wireless Earbuds | Bone Conduction Technology | 7H Battery (21H with Case) | IP54 Water Resistance | Safe for Outdoor Activities | Lightweight Design",
  images: [
    "/images/earbud511_1.jpg",
    "/images/earbud511_2.jpg",
    "/images/earbud511_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 10,
  sku: "SHO-OF2-511",
  brand: "Shokz",
  rating: {
    value: 4.5,
    count: 92
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 512,
  name: "Bose QuietComfort Ultra Earbuds",
  price: 299.99,
  category: "accessories",
  description: "Premium Noise Canceling Earbuds | CustomTune Technology | 6H Battery (24H with Case) | IPX4 Water Resistance | Wireless Charging | Immersive Audio",
  images: [
    "/images/earbud512_1.jpg",
    "/images/earbud512_2.jpg",
    "/images/earbud512_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 7,
  sku: "BOS-QCU-512",
  brand: "Bose",
  rating: {
    value: 4.7,
    count: 118
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 513,
  name: "Google Pixel Buds Pro 2",
  price: 199.99,
  category: "accessories",
  description: "True Wireless Earbuds | Mini Wing-Tip Design | Active Noise Cancellation | 11H Battery (31H with Case) | IP57 Dust/Water Resistance | Android Optimized",
  images: [
    "/images/earbud513_1.jpg",
    "/images/earbud513_2.jpg",
    "/images/earbud513_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 14,
  sku: "GOO-PBP2-513",
  brand: "Google",
  rating: {
    value: 4.6,
    count: 134
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 514,
  name: "Beats Studio Pro",
  price: 349.99,
  category: "accessories",
  description: "Over-Ear Wireless Headphones | Active Noise Cancellation | Transparency Mode | 40H Battery Life | Apple/Android Compatibility | Foldable Design | Premium Build",
  images: [
    "/images/headphone514_1.jpg",
    "/images/headphone514_2.jpg",
    "/images/headphone514_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 6,
  sku: "BEA-SP-514",
  brand: "Beats",
  rating: {
    value: 4.5,
    count: 87
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 515,
  name: "Master & Dynamic MG20",
  price: 349.00,
  category: "accessories",
  description: "Wireless Gaming Headphones | 7.1 Surround Sound | 50mm Beryllium Drivers | 22H Battery | Detachable Boom Mic | Magnesium Ear Cups | Lambskin Leather Ear Pads",
  images: [
    "/images/headphone515_1.jpg",
    "/images/headphone515_2.jpg",
    "/images/headphone515_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 4,
  sku: "MAD-MG20-515",
  brand: "Master & Dynamic",
  rating: {
    value: 4.4,
    count: 45
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 516,
  name: "TOZO T20",
  price: 49.99,
  category: "accessories",
  description: "Budget True Wireless Earbuds | 10mm Drivers | IPX8 Waterproof | 10.5H Battery (48.5H with Case) | Wireless Charging | Bluetooth 5.3 | Dual-Mic ENC",
  images: [
    "/images/earbud516_1.jpg",
    "/images/earbud516_2.jpg",
    "/images/earbud516_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 30,
  sku: "TOZ-T20-516",
  brand: "TOZO",
  rating: {
    value: 4.2,
    count: 203
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 517,
  name: "Skullcandy Push ANC Active",
  price: 129.99,
  category: "accessories",
  description: "Waterproof True Wireless Earbuds | Adjustable Noise Canceling | 58H Battery Life | IP67 Dust/Waterproof | Secure Ear Hangers | Ideal for Extreme Sports",
  images: [
    "/images/earbud517_1.jpg",
    "/images/earbud517_2.jpg",
    "/images/earbud517_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 11,
  sku: "SKU-PUSH-517",
  brand: "Skullcandy",
  rating: {
    value: 4.6,
    count: 96
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 518,
  name: "Samsung Galaxy Buds Pro 3",
  price: 229.99,
  category: "accessories",
  description: "True Wireless Earbuds | IP57 Dust/Water Resistance | Active Noise Cancellation | 8H Battery (30H with Case) | 360 Audio | Wireless Charging",
  images: [
    "/images/earbud518_1.jpg",
    "/images/earbud518_2.jpg",
    "/images/earbud518_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 9,
  sku: "SAM-GBP3-518",
  brand: "Samsung",
  rating: {
    value: 4.5,
    count: 78
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 519,
  name: "Bose Ultra Open Earbuds",
  price: 299.99,
  category: "accessories",
  description: "Clip-On Open Earbuds | Secure Fit | Ambient Sound Awareness | 7.5H Battery (19.5H with Case) | IPX4 Water Resistance | Ideal for Outdoor Activities",
  images: [
    "/images/earbud519_1.jpg",
    "/images/earbud519_2.jpg",
    "/images/earbud519_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 5,
  sku: "BOS-UOE-519",
  brand: "Bose",
  rating: {
    value: 4.3,
    count: 63
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 520,
  name: "JLab Endurance Peak 3",
  price: 69.99,
  category: "accessories",
  description: "Budget Earhook Earbuds | Secure Fit | IP55 Water Resistance | 10H Battery (40H with Case) | Touch Controls | Built-in EQ Modes | Great for Workouts",
  images: [
    "/images/earbud520_1.jpg",
    "/images/earbud520_2.jpg",
    "/images/earbud520_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 22,
  sku: "JLA-EP3-520",
  brand: "JLab",
  rating: {
    value: 4.1,
    count: 114
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 521,
  name: "Skullcandy Dime Evo",
  price: 39.99,
  category: "accessories",
  description: "Ultra-Budget True Wireless Earbuds | 36H Total Battery | Clear Voice Smart Mic | Compact Design | IPX4 Water Resistance | Stick Style Fit",
  images: [
    "/images/earbud521_1.jpg",
    "/images/earbud521_2.jpg",
    "/images/earbud521_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 35,
  sku: "SKU-DIME-521",
  brand: "Skullcandy",
  rating: {
    value: 4.0,
    count: 189
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 522,
  name: "Shokz OpenRun Pro 2",
  price: 179.99,
  category: "accessories",
  description: "Bone Conduction Headphones | Open-Ear Design | 10H Battery | IP55 Water Resistance | Safe for Outdoor Use | Lightweight & Comfortable",
  images: [
    "/images/headphone522_1.jpg",
    "/images/headphone522_2.jpg",
    "/images/headphone522_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 8,
  sku: "SHO-ORP2-522",
  brand: "Shokz",
  rating: {
    value: 4.6,
    count: 72
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 523,
  name: "Anker Soundcore Liberty 5",
  price: 129.99,
  category: "accessories",
  description: "Premium True Wireless Earbuds | Hi-Res Audio | Adaptive ANC | 8H Battery (32H with Case) | Wireless Charging | HearID Sound | Multi-Point Connection",
  images: [
    "/images/earbud523_1.jpg",
    "/images/earbud523_2.jpg",
    "/images/earbud523_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 13,
  sku: "ANK-L5-523",
  brand: "Anker",
  rating: {
    value: 4.7,
    count: 97
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 524,
  name: "Skullcandy Rail ANC",
  price: 99.99,
  category: "accessories",
  description: "Budget Noise Canceling Earbuds | Adjustable ANC | 33H Battery Life | IP54 Water Resistance | Secure Fit | Clear Voice Smart Mic",
  images: [
    "/images/earbud524_1.jpg",
    "/images/earbud524_2.jpg",
    "/images/earbud524_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 17,
  sku: "SKU-RAIL-524",
  brand: "Skullcandy",
  rating: {
    value: 4.3,
    count: 84
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 525,
  name: "Logitech Brio 500",
  price: 129.99,
  category: "accessories",
  description: "1080p/30fps Webcam | 90° Field of View | RightLight 4 Technology | Auto-White Balance | USB-C Connection | Built-in Privacy Cover | Ideal for video conferencing and home office use",
  images: [
    "/images/webcam525_1.jpg",
    "/images/webcam525_2.jpg",
    "/images/webcam525_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 15,
  sku: "LOG-B500-525",
  brand: "Logitech",
  rating: {
    value: 4.5,
    count: 128
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 526,
  name: "Insta360 Link",
  price: 299.99,
  category: "accessories",
  description: "4K/30fps Webcam | AI-Powered 3-Axis Gimbal | Auto-Framing & Tracking | 1/2-inch Sensor | Gesture Controls | Show Mode for Desk Presentations | Professional Grade for Content Creators",
  images: [
    "/images/webcam526_1.jpg",
    "/images/webcam526_2.jpg",
    "/images/webcam526_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 8,
  sku: "INS-LINK-526",
  brand: "Insta360",
  rating: {
    value: 4.8,
    count: 89
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 527,
  name: "Microsoft Modern Webcam",
  price: 49.99,
  category: "accessories",
  description: "1080p/30fps Webcam | Plug-and-Play | Built-in Stand | HDR Mode | Flicker Reduction | Physical Privacy Shutter | Budget-Friendly for Everyday Use",
  images: [
    "/images/webcam527_1.jpg",
    "/images/webcam527_2.jpg",
    "/images/webcam527_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 20,
  sku: "MIC-MWC-527",
  brand: "Microsoft",
  rating: {
    value: 4.2,
    count: 76
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 528,
  name: "Elgato Facecam Pro",
  price: 299.99,
  category: "accessories",
  description: "4K/60fps Webcam | 90° Field of View | Excellent Autofocus | Robust Software Suite | No Built-in Mic | Designed for Streamers and Content Creators",
  images: [
    "/images/webcam528_1.jpg",
    "/images/webcam528_2.jpg",
    "/images/webcam528_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 6,
  sku: "ELG-FCP-528",
  brand: "Elgato",
  rating: {
    value: 4.7,
    count: 64
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 529,
  name: "Razer Kiyo Pro Ultra",
  price: 299.99,
  category: "accessories",
  description: "4K/30fps Webcam | Extra-Large Sensor | f/1.7 Aperture | Genuine Bokeh Effect | Built-in Privacy Shutter | Best-in-Class Image Quality for Professional Streaming",
  images: [
    "/images/webcam529_1.jpg",
    "/images/webcam529_2.jpg",
    "/images/webcam529_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 5,
  sku: "RAZ-KPU-529",
  brand: "Razer",
  rating: {
    value: 4.9,
    count: 52
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 530,
  name: "Dell Pro Webcam WB5023",
  price: 119.99,
  category: "accessories",
  description: "2K QHD/30fps Webcam | 90° Field of View | 4x Digital Zoom | Noise-Reducing Microphone | USB-C Connection | Ideal for Business and Professional Use",
  images: [
    "/images/webcam530_1.jpg",
    "/images/webcam530_2.jpg",
    "/images/webcam530_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 12,
  sku: "DEL-WB5023-530",
  brand: "Dell",
  rating: {
    value: 4.4,
    count: 43
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 531,
  name: "Logitech MX Brio",
  price: 199.99,
  category: "accessories",
  description: "4K/30fps Webcam | 8.5MP Sony STARVIS Sensor | RightLight 5 Technology | Show Mode | Dual Beamforming Mics | USB-C Connection | Recycled Materials | Premium Business Webcam",
  images: [
    "/images/webcam531_1.jpg",
    "/images/webcam531_2.jpg",
    "/images/webcam531_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 7,
  sku: "LOG-MXB-531",
  brand: "Logitech",
  rating: {
    value: 4.6,
    count: 78
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 532,
  name: "Anker PowerConf C200",
  price: 69.99,
  category: "accessories",
  description: "2K Webcam | 1080p/30fps | Auto Lighting Correction | Built-in Privacy Shield | Noise-Reducing Microphones | Budget 2K Option for Home Office",
  images: [
    "/images/webcam532_1.jpg",
    "/images/webcam532_2.jpg",
    "/images/webcam532_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 18,
  sku: "ANK-C200-532",
  brand: "Anker",
  rating: {
    value: 4.3,
    count: 92
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 533,
  name: "Obsbot Meet SE",
  price: 69.99,
  category: "accessories",
  description: "1080p/100fps Webcam | AI Autofocus & Framing | Gesture Controls | Low-Light Correction | Compact Design | Best Overall Value for Money",
  images: [
    "/images/webcam533_1.jpg",
    "/images/webcam533_2.jpg",
    "/images/webcam533_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 22,
  sku: "OBS-MSE-533",
  brand: "Obsbot",
  rating: {
    value: 4.7,
    count: 115
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 534,
  name: "HP 325 FHD Webcam",
  price: 29.99,
  category: "accessories",
  description: "1080p Webcam | Basic Plug-and-Play | Built-in Mic | Privacy Shutter | Ultra-Budget Option for Casual Use",
  images: [
    "/images/webcam534_1.jpg",
    "/images/webcam534_2.jpg",
    "/images/webcam534_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 30,
  sku: "HP-325-534",
  brand: "HP",
  rating: {
    value: 4.0,
    count: 87
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 535,
  name: "Insta360 Link 2C",
  price: 149.99,
  category: "accessories",
  description: "4K/30fps Webcam | Phase Detection Auto Focus | AI Tracking | Built-in Privacy Shutter | Magnetic Mount | Excellent Mid-Range 4K Option",
  images: [
    "/images/webcam535_1.jpg",
    "/images/webcam535_2.jpg",
    "/images/webcam535_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 10,
  sku: "INS-L2C-535",
  brand: "Insta360",
  rating: {
    value: 4.6,
    count: 63
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 536,
  name: "HP 960 4K Streaming Webcam",
  price: 199.99,
  category: "accessories",
  description: "4K/30fps Webcam | Designed for Content Creation | Advanced Software Features | Sleek Design | Noise-Reducing Microphone | Streamer-Focused Webcam",
  images: [
    "/images/webcam536_1.jpg",
    "/images/webcam536_2.jpg",
    "/images/webcam536_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 4,
  sku: "HP-960-536",
  brand: "HP",
  rating: {
    value: 4.5,
    count: 29
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 537,
  name: "Opal Tadpole",
  price: 179.99,
  category: "accessories",
  description: "Full HD Webcam | Ultra-Portable Design | USB-C Connection | AI-Enhanced Image Quality | Ideal for Travel and Mobile Professionals",
  images: [
    "/images/webcam537_1.jpg",
    "/images/webcam537_2.jpg",
    "/images/webcam537_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 9,
  sku: "OPA-TAD-537",
  brand: "Opal",
  rating: {
    value: 4.4,
    count: 41
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 538,
  name: "Obsbot Tiny SE",
  price: 99.99,
  category: "accessories",
  description: "1080p Webcam | Mechanical Pan & Tilt | Auto-Framing | AI Tracking | Affordable Alternative to High-End Models",
  images: [
    "/images/webcam538_1.jpg",
    "/images/webcam538_2.jpg",
    "/images/webcam538_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 11,
  sku: "OBS-TSE-538",
  brand: "Obsbot",
  rating: {
    value: 4.5,
    count: 57
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 539,
  name: "Creative Live! Cam Sync 1080p V2",
  price: 37.99,
  category: "accessories",
  description: "1080p Webcam | Built-in Privacy Filter | Bright Picture | Loud Sound | Ultra-Affordable Upgrade from Built-in Cameras",
  images: [
    "/images/webcam539_1.jpg",
    "/images/webcam539_2.jpg",
    "/images/webcam539_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 25,
  sku: "CRE-CSV2-539",
  brand: "Creative",
  rating: {
    value: 4.1,
    count: 68
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 540,
  name: "Logitech StreamCam",
  price: 159.99,
  category: "accessories",
  description: "1080p/60fps Webcam | Vertical Video Support | Includes Screen & Tripod Mounts | USB-C Connection | Designed for Livestreamers",
  images: [
    "/images/webcam540_1.jpg",
    "/images/webcam540_2.jpg",
    "/images/webcam540_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 6,
  sku: "LOG-SCAM-540",
  brand: "Logitech",
  rating: {
    value: 4.4,
    count: 49
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 541,
  name: "EMEET SmartCam S800",
  price: 129.99,
  category: "accessories",
  description: "4K/30fps Webcam | Impressive HDR | f/1.8 Aperture | Internal Privacy Shutter | Good Color Reproduction | Alternative 4K Option",
  images: [
    "/images/webcam541_1.jpg",
    "/images/webcam541_2.jpg",
    "/images/webcam541_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 7,
  sku: "EME-S800-541",
  brand: "EMEET",
  rating: {
    value: 4.3,
    count: 35
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 542,
  name: "Elgato Facecam 4K",
  price: 199.99,
  category: "accessories",
  description: "4K/60fps Webcam | DSLR-Like Control | Supports 49mm Lens Filters | No Built-in Mic | Studio-Quality Webcam for Creators",
  images: [
    "/images/webcam542_1.jpg",
    "/images/webcam542_2.jpg",
    "/images/webcam542_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 5,
  sku: "ELG-FC4K-542",
  brand: "Elgato",
  rating: {
    value: 4.7,
    count: 44
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 543,
  name: "OBSBOT Meet 2",
  price: 169.99,
  category: "accessories",
  description: "4K/30fps Webcam | Portrait & Landscape Orientation | Magnetic Privacy Cover | Excellent Color Accuracy | Content Creator Focused",
  images: [
    "/images/webcam543_1.jpg",
    "/images/webcam543_2.jpg",
    "/images/webcam543_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 8,
  sku: "OBS-M2-543",
  brand: "OBSBOT",
  rating: {
    value: 4.6,
    count: 39
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 544,
  name: "Logitech C920s HD Pro",
  price: 69.99,
  category: "accessories",
  description: "1080p/30fps Webcam | Classic Design | Stereo Audio | Light Correction | Privacy Shutter | Reliable Workhorse for Everyday Use",
  images: [
    "/images/webcam544_1.jpg",
    "/images/webcam544_2.jpg",
    "/images/webcam544_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 20,
  sku: "LOG-C920-544",
  brand: "Logitech",
  rating: {
    value: 4.4,
    count: 203
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 545,
  name: "DJI Mini 4 Pro",
  price: 759.99,
  category: "accessories",
  description: "Ultralight 249g Foldable Drone | 4K/60fps HDR Video | 48MP Photos | Omnidirectional Obstacle Sensing | 34-min Flight Time | O4 Transmission | Under 250g for FAA Registration Exemption | Ideal for Travel and Content Creation",
  images: [
    "/images/drone545_1.jpg",
    "/images/drone545_2.jpg",
    "/images/drone545_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 12,
  sku: "DJI-M4P-545",
  brand: "DJI",
  rating: {
    value: 4.8,
    count: 156
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 546,
  name: "DJI Air 3S",
  price: 1299.99,
  category: "accessories",
  description: "Dual-Camera Drone | 1-inch 50MP Main Sensor | 48MP Tele Camera | 4K/100fps Video | 45-min Flight Time | Ocusync 4 Transmission | All-Round Obstacle Avoidance | Professional Aerial Photography",
  images: [
    "/images/drone546_1.jpg",
    "/images/drone546_2.jpg",
    "/images/drone546_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 8,
  sku: "DJI-A3S-546",
  brand: "DJI",
  rating: {
    value: 4.7,
    count: 89
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 547,
  name: "DJI Mavic 4 Pro",
  price: 2499.99,
  category: "accessories",
  description: "Flagship Triple-Camera Drone | Micro Four Thirds 25MP Main Camera | 2.5x and 6x Tele Cameras | 4K/120fps Video | 45-min Flight Time | Advanced Obstacle Avoidance | Professional Cinematography",
  images: [
    "/images/drone547_1.jpg",
    "/images/drone547_2.jpg",
    "/images/drone547_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 5,
  sku: "DJI-M4P-547",
  brand: "DJI",
  rating: {
    value: 4.9,
    count: 67
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 548,
  name: "DJI Matrice 30T Enterprise",
  price: 11999.99,
  category: "accessories",
  description: "Industrial Rugged Drone | IP55 Rating | 41-min Flight Time | 48MP Zoom Camera + Thermal Camera | Laser Rangefinder | DJI RC Plus Controller | -20° to 50°C Operation | For Inspection and Public Safety",
  images: [
    "/images/drone548_1.jpg",
    "/images/drone548_2.jpg",
    "/images/drone548_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 3,
  sku: "DJI-M30T-548",
  brand: "DJI",
  rating: {
    value: 4.9,
    count: 42
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 549,
  name: "Autel EVO Lite+",
  price: 1499.99,
  category: "accessories",
  description: "Professional Drone | 1-inch 20MP Sensor | Adjustable Aperture (f/2.8-f/11) | 6K Video | 40-min Flight Time | Omnidirectional Obstacle Avoidance | RAW Photo Support | Orange Color Option",
  images: [
    "/images/drone549_1.jpg",
    "/images/drone549_2.jpg",
    "/images/drone549_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 6,
  sku: "AUT-EVOL-549",
  brand: "Autel",
  rating: {
    value: 4.6,
    count: 78
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 550,
  name: "Potensic Atom 2",
  price: 359.99,
  category: "accessories",
  description: "Budget 4K Drone | 249g Weight | Remote ID Compliant | 32-min Flight Time | 4K30 Video | 12MP RAW Photos | GPS Positioning | FAA Registration Not Required | Great for Beginners",
  images: [
    "/images/drone550_1.jpg",
    "/images/drone550_2.jpg",
    "/images/drone550_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 15,
  sku: "POT-AT2-550",
  brand: "Potensic",
  rating: {
    value: 4.3,
    count: 124
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 551,
  name: "DJI Flip",
  price: 439.99,
  category: "accessories",
  description: "Compact Foldable Drone | 4K60 HDR Video | 48MP Photos | Integrated Prop Guards | Palm Launch/Landing | 31-min Flight Time | Under 250g | Ideal for Beginners and Travel",
  images: [
    "/images/drone551_1.jpg",
    "/images/drone551_2.jpg",
    "/images/drone551_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 18,
  sku: "DJI-FLP-551",
  brand: "DJI",
  rating: {
    value: 4.5,
    count: 203
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 552,
  name: "HoverAir X1",
  price: 399.99,
  category: "accessories",
  description: "Self-Flying Camera Drone | 8K Video | Palm Takeoff/Landing | Auto Follow Mode | 11-min Flight Time | Ultra-Compact Design | No Controller Needed | Perfect for Social Media Content",
  images: [
    "/images/drone552_1.jpg",
    "/images/drone552_2.jpg",
    "/images/drone552_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 10,
  sku: "HOV-X1-552",
  brand: "HoverAir",
  rating: {
    value: 4.2,
    count: 97
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 553,
  name: "DJI Inspire 3",
  price: 12499.99,
  category: "accessories",
  description: "Professional Cinema Drone | Full-Frame Camera | Interchangeable Lenses | 8K Video | Dual Operator Capability | 28-min Flight Time | Carbon Fiber Body | Industry Standard for Filmmaking",
  images: [
    "/images/drone553_1.jpg",
    "/images/drone553_2.jpg",
    "/images/drone553_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 2,
  sku: "DJI-INS3-553",
  brand: "DJI",
  rating: {
    value: 4.9,
    count: 35
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 554,
  name: "Manfrotto Noreg Messenger 30",
  price: 199.99,
  category: "accessories",
  description: "Modular Camera Messenger Bag | Holds Mirrorless Camera + 2 Lenses | Fits DJI Mavic Pro | Detachable Laptop Compartment | 15\" Laptop + 9.7\" Tablet | Rain Cover Included | Travel Tripod Attachment",
  images: [
    "/images/bag554_1.jpg",
    "/images/bag554_2.jpg",
    "/images/bag554_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 20,
  sku: "MAN-NOR-554",
  brand: "Manfrotto",
  rating: {
    value: 4.4,
    count: 87
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 555,
  name: "DJI Mini 3",
  price: 419.99,
  category: "accessories",
  description: "Lightweight 4K Drone | 249g Weight | 38-min Flight Time | 4K30 Video | 12MP Photos | Vertical Camera Orientation | GPS & Return to Home | Beginner-Friendly Operation",
  images: [
    "/images/drone555_1.jpg",
    "/images/drone555_2.jpg",
    "/images/drone555_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 14,
  sku: "DJI-M3-555",
  brand: "DJI",
  rating: {
    value: 4.4,
    count: 156
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 556,
  name: "Skydio X10D",
  price: 8999.99,
  category: "accessories",
  description: "Autonomous Industrial Drone | DoD Approved | AI Obstacle Avoidance | 4K60 Video | Thermal Imaging | NDAA Compliant | 35-min Flight Time | For Public Safety and Infrastructure",
  images: [
    "/images/drone556_1.jpg",
    "/images/drone556_2.jpg",
    "/images/drone556_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 3,
  sku: "SKY-X10D-556",
  brand: "Skydio",
  rating: {
    value: 4.7,
    count: 29
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 557,
  name: "Parrot Anafi USA",
  price: 7499.99,
  category: "accessories",
  description: "Military-Grade Drone | 32x Zoom | Thermal Imaging | 4K HDR Video | NDAA Compliant | 32-min Flight Time | Secure Data Encryption | For Government and Enterprise Use",
  images: [
    "/images/drone557_1.jpg",
    "/images/drone557_2.jpg",
    "/images/drone557_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 2,
  sku: "PAR-ANF-557",
  brand: "Parrot",
  rating: {
    value: 4.6,
    count: 18
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 558,
  name: "DJI Agras T40",
  price: 18500.00,
  category: "accessories",
  description: "Agricultural Spraying Drone | 40kg Payload Capacity | 8m Spray Width | Multispectral Imaging | 10-min Spray Flight Time | RTK Positioning | Smart Agriculture Solution",
  images: [
    "/images/drone558_1.jpg",
    "/images/drone558_2.jpg",
    "/images/drone558_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "DJI-AGR-558",
  brand: "DJI",
  rating: {
    value: 4.8,
    count: 24
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 559,
  name: "Flyability Elios 3",
  price: 58500.00,
  category: "accessories",
  description: "Indoor Confined Space Drone | Collision-Tolerant | LiDAR Mapping | 4K Visual + Thermal | Live 3D Mapping | 10-min Flight Time | For Industrial Inspection and Mining",
  images: [
    "/images/drone559_1.jpg",
    "/images/drone559_2.jpg",
    "/images/drone559_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "FLY-EL3-559",
  brand: "Flyability",
  rating: {
    value: 4.9,
    count: 16
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 560,
  name: "DJI Avata 2",
  price: 999.99,
  category: "accessories",
  description: "FPV Drone for Immersive Flight | 4K/60fps Stabilized Video | 155° FOV | 23-min Flight Time | Built-in Prop Guards | DJI Goggles 3 Support | Intuitive Motion Control | Adventure and Racing",
  images: [
    "/images/drone560_1.jpg",
    "/images/drone560_2.jpg",
    "/images/drone560_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 9,
  sku: "DJI-AV2-560",
  brand: "DJI",
  rating: {
    value: 4.6,
    count: 112
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 561,
  name: "Autel EVO Nano+",
  price: 649.99,
  category: "accessories",
  description: "Compact 249g Drone | 1/1.28-inch 50MP Sensor | 4K30 Video | Tri-Directional Obstacle Sensing | 28-min Flight Time | RYYB Color Technology | Superior Low-Light Performance",
  images: [
    "/images/drone561_1.jpg",
    "/images/drone561_2.jpg",
    "/images/drone561_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 11,
  sku: "AUT-NANO-561",
  brand: "Autel",
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
  id: 562,
  name: "PowerVision PowerEgg X",
  price: 899.99,
  category: "accessories",
  description: "Multi-Functional Drone | 4K/60fps Video | AI Tracking | Water Landing Capability | Handheld Mode | 30-min Flight Time | All-Weather Design | Innovative Egg Shape",
  images: [
    "/images/drone562_1.jpg",
    "/images/drone562_2.jpg",
    "/images/drone562_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 7,
  sku: "POW-EGG-562",
  brand: "PowerVision",
  rating: {
    value: 4.3,
    count: 64
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 563,
  name: "DJI Mavic 3 Classic",
  price: 1799.99,
  category: "accessories",
  description: "Professional Single-Camera Drone | 4/3 CMOS 20MP Sensor | 4K/120fps Video | 46-min Flight Time | Omnidirectional Sensing | 15km Transmission | Hasselblad Camera | Simplified Mavic 3 Version",
  images: [
    "/images/drone563_1.jpg",
    "/images/drone563_2.jpg",
    "/images/drone563_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 6,
  sku: "DJI-M3C-563",
  brand: "DJI",
  rating: {
    value: 4.7,
    count: 78
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 564,
  name: "Holy Stone HS720G",
  price: 279.99,
  category: "accessories",
  description: "GPS Drone with 4K Camera | 26-min Flight Time | Brushless Motors | Follow Me Mode | Optical Flow Positioning | Foldable Design | Beginner Friendly with Auto Return",
  images: [
    "/images/drone564_1.jpg",
    "/images/drone564_2.jpg",
    "/images/drone564_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 20,
  sku: "HOL-HS720-564",
  brand: "Holy Stone",
  rating: {
    value: 4.2,
    count: 203
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 565,
  name: "DJI Mini 4K",
  price: 299.99,
  category: "accessories",
  description: "Entry-Level 4K Drone | 249g Weight | 3-Axis Gimbal | 4K/30fps Video | 10km Transmission | 31-min Flight Time | GPS Positioning | Under 250g Classification",
  images: [
    "/images/drone565_1.jpg",
    "/images/drone565_2.jpg",
    "/images/drone565_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 25,
  sku: "DJI-M4K-565",
  brand: "DJI",
  rating: {
    value: 4.4,
    count: 167
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 566,
  name: "Freefly Alta X",
  price: 22500.00,
  category: "accessories",
  description: "Professional Cinematography Drone | 35lb Payload Capacity | 30-min Flight Time | Interchangeable Camera Systems | 8K Video Support | Heavy-Lift Capability | Film Production Grade",
  images: [
    "/images/drone566_1.jpg",
    "/images/drone566_2.jpg",
    "/images/drone566_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "FRE-ALTA-566",
  brand: "Freefly",
  rating: {
    value: 4.9,
    count: 12
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 567,
  name: "Ryze Tello",
  price: 99.99,
  category: "accessories",
  description: "Mini Programmable Drone | 720p Video | 13-min Flight Time | DJI Flight Technology | Scratch Programming | VR Support | 100g Weight | Ideal for Education and Learning",
  images: [
    "/images/drone567_1.jpg",
    "/images/drone567_2.jpg",
    "/images/drone567_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 30,
  sku: "RYZ-TEL-567",
  brand: "Ryze",
  rating: {
    value: 4.1,
    count: 289
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 568,
  name: "DJI FPV Combo",
  price: 999.99,
  category: "accessories",
  description: "First-Person View Racing Drone | 4K/60fps Video | 150° FOV | 87mph Max Speed | 20-min Flight Time | Emergency Brake/Hover | Immersive Goggles Experience | Adventure Flying",
  images: [
    "/images/drone568_1.jpg",
    "/images/drone568_2.jpg",
    "/images/drone568_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 8,
  sku: "DJI-FPV-568",
  brand: "DJI",
  rating: {
    value: 4.5,
    count: 134
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 569,
  name: "SwellPro SplashDrone 4",
  price: 1599.99,
  category: "Accessories",
  description: "Waterproof Drone | IP67 Rating | 4K/60fps Video | Payload Release Mechanism | 25-min Flight Time | Saltwater Resistant | Fishing and Marine Applications | Floats on Water",
  images: [
    "/images/drone569_1.jpg",
    "/images/drone569_2.jpg",
    "/images/drone569_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 4,
  sku: "SWE-SPL4-569",
  brand: "SwellPro",
  rating: {
    value: 4.4,
    count: 47
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 570,
  name: "DJI RS 2 Drone Case",
  price: 149.99,
  category: "accessories",
  description: "Professional Carrying Case for DJI RS 2 Gimbal | Water-Resistant | Customizable Interior | Hard Shell Exterior | Fits Gimbal + Accessories | Portable Handle | Protection During Transport",
  images: [
    "/images/case570_1.jpg",
    "/images/case570_2.jpg",
    "/images/case570_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 15,
  sku: "DJI-RSC-570",
  brand: "DJI",
  rating: {
    value: 4.5,
    count: 63
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 571,
  name: "Lowepro DroneGuard BP 250",
  price: 129.99,
  category: "accessories",
  description: "Backpack for Drones up to 250g | DJI Mini Series Compatible | Padded Compartment | Tablet Storage | Water-Resistant Material | Tripod Attachment | Everyday Carry Design",
  images: [
    "/images/bag571_1.jpg",
    "/images/bag571_2.jpg",
    "/images/bag571_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 18,
  sku: "LOW-DGBP-571",
  brand: "Lowepro",
  rating: {
    value: 4.3,
    count: 78
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 572,
  name: "Pelican 0450 Drone Case",
  price: 199.99,
  category: "accessories",
  description: "Hard Transport Case for DJI Mavic Series | Custom Foam Insert | Watertight | Crushproof | Stackable | Portable Handle | Protection for Professional Transport",
  images: [
    "/images/case572_1.jpg",
    "/images/case572_2.jpg",
    "/images/case572_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 12,
  sku: "PEL-0450-572",
  brand: "Pelican",
  rating: {
    value: 4.7,
    count: 45
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 573,
  name: "ThinkTank Photo Helipak",
  price: 179.99,
  category: "accessories",
  description: "Drone Backpack for Mavic Series | Holds Drone + 4 Batteries + Accessories | Laptop Compartment | Tripod Carry System | Weather-Resistant | Comfortable Back System | Professional Photographer Design",
  images: [
    "/images/bag573_1.jpg",
    "/images/bag573_2.jpg",
    "/images/bag573_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 10,
  sku: "THN-HELI-573",
  brand: "ThinkTank",
  rating: {
    value: 4.6,
    count: 52
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 574,
  name: "Nanuk 945 DJI Mini Case",
  price: 89.99,
  category: "accessories",
  description: "Protective Case for DJI Mini Series | Customizable Foam | Watertight Seal | Stackable Design | Lightweight | Portable | Ideal for Travel and Storage",
  images: [
    "/images/case574_1.jpg",
    "/images/case574_2.jpg",
    "/images/case574_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 22,
  sku: "NAN-945-574",
  brand: "Nanuk",
  rating: {
    value: 4.4,
    count: 67
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 575,
  name: "Ultimate Single-PC Streaming Beast",
  price: 4599.99,
  category: "other",
  description: "AMD Ryzen 9 9800X3D CPU | NVIDIA RTX 5090 GPU | 64GB DDR5 RAM | 2TB NVMe SSD | Custom Water Cooling | Built for maximum gaming + streaming performance on a single rig [citation:8]",
  images: [
    "/images/setup575_1.jpg",
    "/images/setup575_2.jpg",
    "/images/setup575_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 5,
  sku: "ST-SPC-575",
  brand: "Custom Built",
  rating: {
    value: 4.9,
    count: 23
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 576,
  name: "Pro Dual-PC Streaming Command Center",
  price: 7899.99,
  category: "other",
  description: "Gaming PC: Intel Core Ultra 9 285K + RTX 5090 | Streaming PC: Ryzen 7 7800X3D + Capture Card | Elgato 4K60 Pro MK.2 | Synchronized RGB Lighting | Zero performance compromise [citation:8]",
  images: [
    "/images/setup576_1.jpg",
    "/images/setup576_2.jpg",
    "/images/setup576_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 3,
  sku: "ST-DPC-576",
  brand: "Custom Built",
  rating: {
    value: 4.9,
    count: 18
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 577,
  name: "Mobile IRL Streaming Backpack Pro",
  price: 2299.99,
  category: "other",
  description: "UnlimitedIRL Backpack | LiveU Solo Connect | 5G Modem | Multi-carrier bonding | 8-hour battery | Switcher iOS App Integration | GoPro Hero 12 Compatibility [citation:2]",
  images: [
    "/images/setup577_1.jpg",
    "/images/setup577_2.jpg",
    "/images/setup577_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 8,
  sku: "ST-IRL-577",
  brand: "UnlimitedIRL",
  rating: {
    value: 4.7,
    count: 42
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 578,
  name: "Shure MV7+ Studio Setup",
  price: 1299.99,
  category: "other",
  description: "Shure MV7+ Microphone | Dual XLR/USB Connectivity | RodeCaster Duo Mixer | Acoustic Treatment Panels | Professional Boom Arm | Shock Mount | Pop Filter [citation:1]",
  images: [
    "/images/setup578_1.jpg",
    "/images/setup578_2.jpg",
    "/images/setup578_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 12,
  sku: "ST-SHURE-578",
  brand: "Shure",
  rating: {
    value: 4.8,
    count: 67
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 579,
  name: "Elgato Master Control Suite",
  price: 1899.99,
  category: "other",
  description: "Elgato Facecam Pro | Key Light Air x2 | Stream Deck + | Wave DX Microphone | Multi Mount System | Green Screen | Professional Studio Integration [citation:7]",
  images: [
    "/images/setup579_1.jpg",
    "/images/setup579_2.jpg",
    "/images/setup579_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 7,
  sku: "ST-ELG-579",
  brand: "Elgato",
  rating: {
    value: 4.8,
    count: 89
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 580,
  name: "SteelSeries Sonar Audio Sanctuary",
  price: 1499.99,
  category: "other",
  description: "SteelSeries Alias Pro Microphone | Sonar Software Suite | Audio Interface | Acoustic Foam | Custom Audio Profiles | Noise Cancellation | Professional Grade [citation:1]",
  images: [
    "/images/setup580_1.jpg",
    "/images/setup580_2.jpg",
    "/images/setup580_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 9,
  sku: "ST-SS-580",
  brand: "SteelSeries",
  rating: {
    value: 4.7,
    count: 54
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 581,
  name: "Razer Streaming Ecosystem",
  price: 2199.99,
  category: "other",
  description: "Razer Stream Controller X | Kiyo Pro Ultra Webcam | Seiren V3 Pro Mic | BlackShark V2 Pro Headset | Chroma RGB Integration | Synapse Software Control [citation:1]",
  images: [
    "/images/setup581_1.jpg",
    "/images/setup581_2.jpg",
    "/images/setup581_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 6,
  sku: "ST-RAZ-581",
  brand: "Razer",
  rating: {
    value: 4.6,
    count: 38
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 582,
  name: "NearStream Professional Studio Kit",
  price: 3499.99,
  category: "other",
  description: "AM25X Mic | VM20 4K Camera | AMIX40U Mixer | CCD30 Capture Card | Full Studio Lighting | Professional Backdrop | Complete Streaming Solution [citation:6]",
  images: [
    "/images/setup582_1.jpg",
    "/images/setup582_2.jpg",
    "/images/setup582_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 4,
  sku: "ST-NS-582",
  brand: "NearStream",
  rating: {
    value: 4.9,
    count: 27
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 583,
  name: "Loupedeck Creative Control Center",
  price: 899.99,
  category: "other",
  description: "Loupedeck Live Controller | Custom Profiles | Stream + Editing Integration | Rotary Dials | Programmable Buttons | Multi-Software Compatibility [citation:7]",
  images: [
    "/images/setup583_1.jpg",
    "/images/setup583_2.jpg",
    "/images/setup583_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 15,
  sku: "ST-LOUP-583",
  brand: "Loupedeck",
  rating: {
    value: 4.5,
    count: 63
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 584,
  name: "HyperX QuadCast Streaming Station",
  price: 799.99,
  category: "other",
  description: "HyperX QuadCast S Microphone | 4 Polar Patterns | RGB Lighting | Shock Mount | Boom Arm | Pop Filter | Professional Audio Setup [citation:7]",
  images: [
    "/images/setup584_1.jpg",
    "/images/setup584_2.jpg",
    "/images/setup584_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 18,
  sku: "ST-HX-584",
  brand: "HyperX",
  rating: {
    value: 4.4,
    count: 92
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 585,
  name: "Blue Yeti X Premium Audio Suite",
  price: 599.99,
  category: "other",
  description: "Blue Yeti X Microphone | Multi-Pattern RGB | Elite Backpack | Audio Interface | Professional Mounting | Studio Quality Sound [citation:1]",
  images: [
    "/images/setup585_1.jpg",
    "/images/setup585_2.jpg",
    "/images/setup585_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 14,
  sku: "ST-BLUE-585",
  brand: "Blue",
  rating: {
    value: 4.3,
    count: 78
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 586,
  name: "OBS Studio Power User Configuration",
  price: 299.99,
  category: "other",
  description: "Custom OBS Build | Advanced Plugins | AI Integration | Scene Collections | Custom Transitions | Optimized Encoding Settings [citation:5]",
  images: [
    "/images/setup586_1.jpg",
    "/images/setup586_2.jpg",
    "/images/setup586_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 25,
  sku: "ST-OBS-586",
  brand: "OBS",
  rating: {
    value: 4.6,
    count: 134
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 587,
  name: "Streamlabs Premium Creator Suite",
  price: 499.99,
  category: "other",
  description: "Streamlabs Ultra Subscription | Custom Overlays | Alert Systems | Merch Store Integration | Revenue Dashboard | Multi-Platform Support [citation:5]",
  images: [
    "/images/setup587_1.jpg",
    "/images/setup587_2.jpg",
    "/images/setup587_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 20,
  sku: "ST-SL-587",
  brand: "Streamlabs",
  rating: {
    value: 4.5,
    count: 156
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 588,
  name: "XSplit Broadcaster Pro Studio",
  price: 699.99,
  category: "other",
  description: "XSplit Premium License | Multi-Camera Support | GPU Acceleration | Professional Transitions | Color Grading | Low Latency Encoding [citation:5]",
  images: [
    "/images/setup588_1.jpg",
    "/images/setup588_2.jpg",
    "/images/setup588_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 8,
  sku: "ST-XSP-588",
  brand: "XSplit",
  rating: {
    value: 4.4,
    count: 47
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 589,
  name: "Restream Multistreaming Powerhouse",
  price: 399.99,
  category: "other",
  description: "Restream Premium | 30+ Platforms | Chat Integration | Analytics Dashboard | Custom Branding | Simultaneous Streaming [citation:5]",
  images: [
    "/images/setup589_1.jpg",
    "/images/setup589_2.jpg",
    "/images/setup589_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 22,
  sku: "ST-RS-589",
  brand: "Restream",
  rating: {
    value: 4.7,
    count: 89
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 590,
  name: "Alienware m15 R4 Streaming Station",
  price: 2899.99,
  category: "other",
  description: "Alienware m15 R4 Laptop | RTX 4080 | 32GB RAM | 2TB SSD | Streaming Optimization | Portable Powerhouse [citation:6]",
  images: [
    "/images/setup590_1.jpg",
    "/images/setup590_2.jpg",
    "/images/setup590_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 6,
  sku: "ST-AW-590",
  brand: "Alienware",
  rating: {
    value: 4.6,
    count: 34
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 591,
  name: "Logitech BRIO 500 4K Studio",
  price: 899.99,
  category: "other",
  description: "Logitech BRIO 500 Webcam | 4K Resolution | Auto Framing | Dual Mics | Privacy Shutter | Studio Lighting | Premium Mounting [citation:9]",
  images: [
    "/images/setup591_1.jpg",
    "/images/setup591_2.jpg",
    "/images/setup591_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 11,
  sku: "ST-LOG-591",
  brand: "Logitech",
  rating: {
    value: 4.5,
    count: 57
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 592,
  name: "RODEcaster Duo Audio Production",
  price: 1299.99,
  category: "other",
  description: "RODEcaster Duo Mixer | 4 Faders | Smart Pads | XLR Inputs | USB-C Connectivity | Professional Audio Processing [citation:1]",
  images: [
    "/images/setup592_1.jpg",
    "/images/setup592_2.jpg",
    "/images/setup592_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 7,
  sku: "ST-RODE-592",
  brand: "RODE",
  rating: {
    value: 4.8,
    count: 42
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 593,
  name: "Webber Cable Management System",
  price: 199.99,
  category: "other",
  description: "Webber Cable Management | Custom Brackets | Neat Organization | No Tools Needed | Flexible Setup | Clean Aesthetic [citation:7]",
  images: [
    "/images/setup593_1.jpg",
    "/images/setup593_2.jpg",
    "/images/setup593_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 30,
  sku: "ST-WEB-593",
  brand: "Webber",
  rating: {
    value: 4.2,
    count: 118
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 594,
  name: "ASUS ROG Networking Hub",
  price: 499.99,
  category: "other",
  description: "ASUS RT-AX53U Router | Wi-Fi 6 | Gaming Optimization | QoS Settings | Stable Streaming | Multi-Device Support [citation:9]",
  images: [
    "/images/setup594_1.jpg",
    "/images/setup594_2.jpg",
    "/images/setup594_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 15,
  sku: "ST-ASUS-594",
  brand: "ASUS",
  rating: {
    value: 4.4,
    count: 63
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 595,
  name: "Panasonic HC-VX981K Pro Video Setup",
  price: 1499.99,
  category: "other",
  description: "Panasonic HC-VX981K Camcorder | Professional Video | Streaming Integration | HDMI Output | High Quality Capture [citation:3]",
  images: [
    "/images/setup595_1.jpg",
    "/images/setup595_2.jpg",
    "/images/setup595_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 5,
  sku: "ST-PAN-595",
  brand: "Panasonic",
  rating: {
    value: 4.3,
    count: 29
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 596,
  name: "Sony Alpha a7 III Content Creator",
  price: 2499.99,
  category: "other",
  description: "Sony Alpha a7 III Camera | Full Frame | 4K Video | Streaming Adapter | Professional Lens | Studio Integration [citation:3]",
  images: [
    "/images/setup596_1.jpg",
    "/images/setup596_2.jpg",
    "/images/setup596_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 4,
  sku: "ST-SONY-596",
  brand: "Sony",
  rating: {
    value: 4.7,
    count: 38
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 597,
  name: "Hasselblad X2D 100C Luxury Setup",
  price: 8999.99,
  category: "other",
  description: "Hasselblad X2D 100C Camera | 100MP | Professional Streaming | Luxury Equipment | Exclusive Setup | Highest Quality [citation:3]",
  images: [
    "/images/setup597_1.jpg",
    "/images/setup597_2.jpg",
    "/images/setup597_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 2,
  sku: "ST-HASS-597",
  brand: "Hasselblad",
  rating: {
    value: 4.9,
    count: 12
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 598,
  name: "AVerMedia Live Streamer Cap 4K",
  price: 399.99,
  category: "other",
  description: "AVerMedia Live Streamer Cap 4K | 4K60 Recording | Capture Card | Streaming Integration | Professional Grade [citation:9]",
  images: [
    "/images/setup598_1.jpg",
    "/images/setup598_2.jpg",
    "/images/setup598_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 16,
  sku: "ST-AV-598",
  brand: "AVerMedia",
  rating: {
    value: 4.5,
    count: 47
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 599,
  name: "Focusrite Scarlett Audio Interface",
  price: 299.99,
  category: "other",
  description: "Focusrite Scarlett Interface | XLR Connectivity | Professional Audio | Studio Quality | Streaming Optimization [citation:8]",
  images: [
    "/images/setup599_1.jpg",
    "/images/setup599_2.jpg",
    "/images/setup599_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 20,
  sku: "ST-FOC-599",
  brand: "Focusrite",
  rating: {
    value: 4.6,
    count: 78
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 600,
  name: "Neumann TLM 102 Professional Audio",
  price: 999.99,
  category: "other",
  description: "Neumann TLM 102 Microphone | XLR Connection | Professional Studio | Premium Audio | Luxury Sound Quality [citation:10]",
  images: [
    "/images/setup600_1.jpg",
    "/images/setup600_2.jpg",
    "/images/setup600_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 3,
  sku: "ST-NEU-600",
  brand: "Neumann",
  rating: {
    value: 4.9,
    count: 23
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 601,
  name: "Yamaha MG16 Advanced Mixer",
  price: 899.99,
  category: "other",
  description: "Yamaha MG16 Mixer | 16 Channels | Professional Audio | Streaming Integration | Studio Control [citation:10]",
  images: [
    "/images/setup601_1.jpg",
    "/images/setup601_2.jpg",
    "/images/setup601_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 7,
  sku: "ST-YAM-601",
  brand: "Yamaha",
  rating: {
    value: 4.7,
    count: 34
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 602,
  name: "Blackmagic Design ATEM Mini Pro",
  price: 699.99,
  category: "other",
  description: "Blackmagic Design ATEM Mini Pro | Video Switcher | Multi-Camera | Live Production | Streaming Integration [citation:10]",
  images: [
    "/images/setup602_1.jpg",
    "/images/setup602_2.jpg",
    "/images/setup602_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 5,
  sku: "ST-BM-602",
  brand: "Blackmagic Design",
  rating: {
    value: 4.8,
    count: 29
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 603,
  name: "GVM RGB Professional Lighting",
  price: 599.99,
  category: "other",
  description: "GVM RGB Lighting | Professional Studio | Color Control | Soft Filters | Barn Doors | Complete Setup [citation:10]",
  images: [
    "/images/setup603_1.jpg",
    "/images/setup603_2.jpg",
    "/images/setup603_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 12,
  sku: "ST-GVM-603",
  brand: "GVM",
  rating: {
    value: 4.5,
    count: 41
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 604,
  name: "Elgato Stream Deck + Control Center",
  price: 199.99,
  category: "other",
  description: "Elgato Stream Deck + | 8 Keys | 4 Knobs | Custom Controls | Streaming Integration | Multi-Action Support [citation:9]",
  images: [
    "/images/setup604_1.jpg",
    "/images/setup604_2.jpg",
    "/images/setup604_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 25,
  sku: "ST-SD-604",
  brand: "Elgato",
  rating: {
    value: 4.7,
    count: 156
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 605,
  name: "Shure MV7+ Microphone",
  price: 299.99,
  category: "accessories",
  description: "Dual XLR/USB connectivity | Capacitive mute button with RGB lighting | 3.5mm headphone jack for live monitoring | Cardioid polar pattern | MOTIV Mix app compatibility | Professional studio quality for streaming and podcasting",
  images: [
    "/images/mic605_1.jpg",
    "/images/mic605_2.jpg",
    "/images/mic605_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 15,
  sku: "SHU-MV7P-605",
  brand: "Shure",
  rating: {
    value: 4.8,
    count: 142
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 606,
  name: "Blue Yeti Nano Microphone",
  price: 99.99,
  category: "accessories",
  description: "Compact design | Cardioid and omnidirectional patterns | 48kHz sample rate | Zero-latency monitoring | Mute & volume controls | Perfect for beginner streamers",
  images: [
    "/images/mic606_1.jpg",
    "/images/mic606_2.jpg",
    "/images/mic606_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 25,
  sku: "BLU-NANO-606",
  brand: "Blue",
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
  id: 607,
  name: "SteelSeries Alias Pro Microphone",
  price: 249.99,
  category: "accessories",
  description: "XLR connectivity | All-in-one bundle with mixer | Sonar software integration | 50Hz-20,000Hz frequency response | Professional studio sound | Compact and nicely laid out",
  images: [
    "/images/mic607_1.jpg",
    "/images/mic607_2.jpg",
    "/images/mic607_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 8,
  sku: "STE-ALP-607",
  brand: "SteelSeries",
  rating: {
    value: 4.7,
    count: 76
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 608,
  name: "Razer Stream Controller X",
  price: 149.99,
  category: "accessories",
  description: "Loupedeck software powered | 15 customizable buttons | Compact footprint | Non-slip stand | Sharp button screens | Strong native integrations | Razer Synapse compatible",
  images: [
    "/images/control608_1.jpg",
    "/images/control608_2.jpg",
    "/images/control608_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 12,
  sku: "RAZ-SCX-608",
  brand: "Razer",
  rating: {
    value: 4.6,
    count: 63
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 609,
  name: "RodeCaster Duo Mixer",
  price: 399.99,
  category: "accessories",
  description: "4 physical faders | 2 virtual faders | SMART pads | 2 XLR inputs | 2 USB-C inputs | Rode Central software | High-quality preamps and processing",
  images: [
    "/images/mixer609_1.jpg",
    "/images/mixer609_2.jpg",
    "/images/mixer609_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 6,
  sku: "ROD-DUO-609",
  brand: "Rode",
  rating: {
    value: 4.9,
    count: 54
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 610,
  name: "Panasonic HC-VX981K Camera",
  price: 797.99,
  category: "accessories",
  description: "Entry-level 4K camera | Lightweight design | Automatic settings | Basic connectivity | Ideal for mobile streaming | Great for beginners",
  images: [
    "/images/cam610_1.jpg",
    "/images/cam610_2.jpg",
    "/images/cam610_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 10,
  sku: "PAN-VX981-610",
  brand: "Panasonic",
  rating: {
    value: 4.4,
    count: 78
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 611,
  name: "Sony Alpha a7 III",
  price: 1799.99,
  category: "accessories",
  description: "Prosumer mirrorless camera | Full-frame sensor | 4K video | Interchangeable lenses | HDMI output | Professional streaming quality",
  images: [
    "/images/cam611_1.jpg",
    "/images/cam611_2.jpg",
    "/images/cam611_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 5,
  sku: "SON-A7III-611",
  brand: "Sony",
  rating: {
    value: 4.8,
    count: 92
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 612,
  name: "Hasselblad X2D 100C",
  price: 8199.99,
  category: "accessories",
  description: "Professional 100MP camera | Medium format sensor | 4K video streaming | Interchangeable lenses | XLR connectivity | Luxury streaming setup",
  images: [
    "/images/cam612_1.jpg",
    "/images/cam612_2.jpg",
    "/images/cam612_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 2,
  sku: "HAS-X2D-612",
  brand: "Hasselblad",
  rating: {
    value: 4.9,
    count: 23
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 613,
  name: "Elgato Key Light Air",
  price: 129.99,
  category: "accessories",
  description: "RGB streaming key light | TrueSoft Technology | Adjustable brightness and color | Soft diffusion | Sleek design | App control",
  images: [
    "/images/light613_1.jpg",
    "/images/light613_2.jpg",
    "/images/light613_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 20,
  sku: "ELG-KLA-613",
  brand: "Elgato",
  rating: {
    value: 4.7,
    count: 125
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 614,
  name: "Logitech Litra Glow",
  price: 99.99,
  category: "accessories",
  description: "Premium streaming light | TrueSoft technology | Balanced LED light | Cinematic color accuracy | Frameless diffuser | USB powered",
  images: [
    "/images/light614_1.jpg",
    "/images/light614_2.jpg",
    "/images/light614_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 18,
  sku: "LOG-LG-614",
  brand: "Logitech",
  rating: {
    value: 4.6,
    count: 87
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 615,
  name: "Blackmagic ATEM Mini Pro",
  price: 277.00,
  category: "accessories",
  description: "Hardware video switcher | Multi-camera support | Live switching | Built-in audio mixing | 4 HDMI inputs | Budget-friendly production",
  images: [
    "/images/switcher615_1.jpg",
    "/images/switcher615_2.jpg",
    "/images/switcher615_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 8,
  sku: "BLK-ATEM-615",
  brand: "Blackmagic",
  rating: {
    value: 4.5,
    count: 64
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 616,
  name: "Focusrite Scarlett 2i2",
  price: 159.99,
  category: "accessories",
  description: "Audio interface | 2 XLR inputs | Real-time adjustment | Gain control | Monitor levels | Professional audio conversion",
  images: [
    "/images/audio616_1.jpg",
    "/images/audio616_2.jpg",
    "/images/audio616_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 15,
  sku: "FOC-SCAR-616",
  brand: "Focusrite",
  rating: {
    value: 4.7,
    count: 203
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 617,
  name: "Elgato Stream Deck +",
  price: 199.99,
  category: "accessories",
  description: "Stream controller | 8 keys | 4 knobs | Custom controls | Multi-action support | LCD keys | Integration with streaming software",
  images: [
    "/images/control617_1.jpg",
    "/images/control617_2.jpg",
    "/images/control617_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 12,
  sku: "ELG-SDPLUS-617",
  brand: "Elgato",
  rating: {
    value: 4.8,
    count: 156
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 618,
  name: "TVU One Portable Encoder",
  price: 2499.99,
  category: "accessories",
  description: "Portable 5G encoder | Cellular bonding | IS+ technology | Minimal latency | Remote production | Professional IRL streaming",
  images: [
    "/images/encoder618_1.jpg",
    "/images/encoder618_2.jpg",
    "/images/encoder618_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 4,
  sku: "TVU-ONE-618",
  brand: "TVU",
  rating: {
    value: 4.9,
    count: 38
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 619,
  name: "OBSBOT Meet 2 4K Webcam",
  price: 199.99,
  category: "accessories",
  description: "AI-powered 4K webcam | 1/2\" CMOS sensor | PDAF technology | HDR support | Dual omnidirectional mics | Low-light performance",
  images: [
    "/images/cam619_1.jpg",
    "/images/cam619_2.jpg",
    "/images/cam619_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 14,
  sku: "OBS-MEET2-619",
  brand: "OBSBOT",
  rating: {
    value: 4.6,
    count: 97
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 620,
  name: "Logitech StreamCam",
  price: 149.99,
  category: "accessories",
  description: "Full HD 1080p webcam | 60fps streaming | USB-C connectivity | Auto-focus | Dual microphones | Versatile mounting",
  images: [
    "/images/cam620_1.jpg",
    "/images/cam620_2.jpg",
    "/images/cam620_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 20,
  sku: "LOG-SC-620",
  brand: "Logitech",
  rating: {
    value: 4.5,
    count: 134
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 621,
  name: "Elgato Wave:3 Microphone",
  price: 159.99,
  category: "accessories",
  description: "USB condenser microphone | Clipguard technology | Multi-function dial | Built-in headphone output | Professional streaming audio",
  images: [
    "/images/mic621_1.jpg",
    "/images/mic621_2.jpg",
    "/images/mic621_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 16,
  sku: "ELG-WAVE3-621",
  brand: "Elgato",
  rating: {
    value: 4.6,
    count: 118
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 622,
  name: "RODE SmartLav+ Lavalier Mic",
  price: 79.99,
  category: "accessories",
  description: "Smartphone lavalier microphone | Broadcast-quality sound | Omnidirectional pattern | 3.5mm connection | Perfect for mobile streaming",
  images: [
    "/images/mic622_1.jpg",
    "/images/mic622_2.jpg",
    "/images/mic622_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 25,
  sku: "ROD-SLPLUS-622",
  brand: "Rode",
  rating: {
    value: 4.4,
    count: 89
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 623,
  name: "AceTaken Ring Light Stand",
  price: 69.99,
  category: "accessories",
  description: "Webcam light stand with ring light | Adjustable brightness | Multiple color temperatures | Webcam mount included | Great for beginners",
  images: [
    "/images/light623_1.jpg",
    "/images/light623_2.jpg",
    "/images/light623_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 22,
  sku: "ACE-RL-623",
  brand: "AceTaken",
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
  id: 624,
  name: "GFCC Green Screen Backdrop",
  price: 89.99,
  category: "accessories",
  description: "7 x 10 foot green screen | Portable design | Wrinkle-resistant | Complete with stand | Professional background removal | Easy setup",
  images: [
    "/images/acc624_1.jpg",
    "/images/acc624_2.jpg",
    "/images/acc624_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 15,
  sku: "GFCC-GS-624",
  brand: "GFCC",
  rating: {
    value: 4.5,
    count: 63
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 625,
  name: "Magnus VT-4000 Tripod",
  price: 119.99,
  category: "accessories",
  description: "Professional tripod | Robust construction | Long-lasting | Stable base | Easy to use | Multiple camera compatibility",
  images: [
    "/images/acc625_1.jpg",
    "/images/acc625_2.jpg",
    "/images/acc625_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 18,
  sku: "MAG-VT4K-625",
  brand: "Magnus",
  rating: {
    value: 4.6,
    count: 57
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 626,
  name: "Elgato Cam Link 4K",
  price: 129.99,
  category: "accessories",
  description: "HDMI to USB capture card | 4K30fps recording | Plug-and-play | DSLR/mirrorless compatibility | Compact design | Stream high-quality video",
  images: [
    "/images/video626_1.jpg",
    "/images/video626_2.jpg",
    "/images/video626_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 10,
  sku: "ELG-CL4K-626",
  brand: "Elgato",
  rating: {
    value: 4.7,
    count: 134
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 627,
  name: "DJI Mic Wireless Lavalier",
  price: 249.99,
  category: "accessories",
  description: "Wireless lavalier system | Dual channels | Recording backup | Portable case | Smart noise cancellation | Perfect for mobile streamers",
  images: [
    "/images/mic627_1.jpg",
    "/images/mic627_2.jpg",
    "/images/mic627_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 8,
  sku: "DJI-MIC-627",
  brand: "DJI",
  rating: {
    value: 4.8,
    count: 92
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 628,
  name: "Webber Cable Management System",
  price: 49.99,
  category: "accessories",
  description: "Cable management solution | Custom brackets | No tools needed | Flexible setup | Clean aesthetic | Keeps streaming setup organized",
  images: [
    "/images/acc628_1.jpg",
    "/images/acc628_2.jpg",
    "/images/acc628_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 30,
  sku: "WEB-CM-628",
  brand: "Webber",
  rating: {
    value: 4.2,
    count: 118
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 629,
  name: "ASUS RT-AX53U Router",
  price: 129.99,
  category: "accessories",
  description: "Wi-Fi 6 gaming router | QoS settings | Stable streaming | Multi-device support | High-speed connectivity | Essential for reliable streams",
  images: [
    "/images/net629_1.jpg",
    "/images/net629_2.jpg",
    "/images/net629_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 15,
  sku: "ASUS-RT53-629",
  brand: "ASUS",
  rating: {
    value: 4.5,
    count: 87
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 630,
  name: "TVU Powerpac Battery",
  price: 299.99,
  category: "accessories",
  description: "Portable power solution | 4 hours continuous broadcast | Compatible with TVU One | Ideal for IRL streaming | Reliable power source",
  images: [
    "/images/power630_1.jpg",
    "/images/power630_2.jpg",
    "/images/power630_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 6,
  sku: "TVU-PWR-630",
  brand: "TVU",
  rating: {
    value: 4.7,
    count: 34
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 631,
  name: "Hollyland Wireless Microphone System",
  price: 349.99,
  category: "accessories",
  description: "Professional wireless mic | Exceptional sound quality | Easy to use | Reliable performance | Perfect for outdoor streaming | Long range",
  images: [
    "/images/mic631_1.jpg",
    "/images/mic631_2.jpg",
    "/images/mic631_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 7,
  sku: "HOL-WM-631",
  brand: "Hollyland",
  rating: {
    value: 4.6,
    count: 45
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 632,
  name: "GoXLR Audio Mixer",
  price: 499.99,
  category: "accessories",
  description: "Professional audio mixer | 4 channels | EQ controls | Sound effects | Fader controls | RGB lighting | Streamer favorite",
  images: [
    "/images/mixer632_1.jpg",
    "/images/mixer632_2.jpg",
    "/images/mixer632_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 5,
  sku: "GOXLR-MIX-632",
  brand: "GoXLR",
  rating: {
    value: 4.8,
    count: 67
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 633,
  name: "Sony A9 III Professional Camera",
  price: 5998.00,
  category: "accessories",
  description: "High-end professional camera | Full-frame sensor | 4K/120fps video | Advanced autofocus | XLR inputs | Cinema-quality streaming",
  images: [
    "/images/cam633_1.jpg",
    "/images/cam633_2.jpg",
    "/images/cam633_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 3,
  sku: "SON-A9III-633",
  brand: "Sony",
  rating: {
    value: 4.9,
    count: 29
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 634,
  name: "Movo WebMic-HD-Pro",
  price: 149.99,
  category: "accessories",
  description: "All-in-one webcam/mic/light | Compact design | 1080p video | Built-in ring light | Perfect for streamers | Plug-and-play setup",
  images: [
    "/images/combo634_1.jpg",
    "/images/combo634_2.jpg",
    "/images/combo634_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 12,
  sku: "MOV-WEBMIC-634",
  brand: "Movo",
  rating: {
    value: 4.4,
    count: 78
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 635,
  name: "Secretlab Titan Evo 2025",
  price: 549.99,
  category: "accessories",
  description: "Ergonomic gaming chair | Magnetic head pillow | 4D armrests | 165-degree recline | Cold-cure foam | Multi-size options (S, R, XL) | 5-year warranty | Professional streaming comfort",
  images: [
    "/images/chair635_1.jpg",
    "/images/chair635_2.jpg",
    "/images/chair635_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 12,
  sku: "SEC-TEVO-635",
  brand: "Secretlab",
  rating: {
    value: 4.9,
    count: 284
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 636,
  name: "Herman Miller x Logitech Embody",
  price: 1795.99,
  category: "accessories",
  description: "Premium ergonomic chair | 12-year warranty | BackFit adjustment | Sync fabric | Perfect posture support | No headrest | Pre-assembled | Luxury streaming throne",
  images: [
    "/images/chair636_1.jpg",
    "/images/chair636_2.jpg",
    "/images/chair636_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 5,
  sku: "HM-EMB-636",
  brand: "Herman Miller",
  rating: {
    value: 4.8,
    count: 156
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 637,
  name: "Corsair TC100 Relaxed",
  price: 259.99,
  category: "accessories",
  description: "Budget gaming chair | Plush cushioning | 160-degree recline | Included headrest & lumbar pillows | 2-year warranty | Maximum comfort for long streams",
  images: [
    "/images/chair637_1.jpg",
    "/images/chair637_2.jpg",
    "/images/chair637_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 18,
  sku: "COR-TC100-637",
  brand: "Corsair",
  rating: {
    value: 4.5,
    count: 203
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 638,
  name: "Razer Iskur V2",
  price: 599.99,
  category: "accessories",
  description: "6D lumbar support | 152-degree recline | Built-in lumbar system | Multi-layer synthetic leather | 3-year warranty | Elite streamer comfort",
  images: [
    "/images/chair638_1.jpg",
    "/images/chair638_2.jpg",
    "/images/chair638_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 8,
  sku: "RAZ-ISK2-638",
  brand: "Razer",
  rating: {
    value: 4.7,
    count: 134
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 639,
  name: "AndaSeat Kaiser 4 XL",
  price: 549.99,
  category: "accessories",
  description: "Large frame chair | Pop-out lumbar | 6D armrests | Stain-resistant leather | 4-way adaptive lumbar | Magnetic head pillow | For bigger streamers",
  images: [
    "/images/chair639_1.jpg",
    "/images/chair639_2.jpg",
    "/images/chair639_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 7,
  sku: "AND-KAIS-639",
  brand: "AndaSeat",
  rating: {
    value: 4.6,
    count: 97
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 640,
  name: "Fractal Refine",
  price: 489.99,
  category: "accessories",
  description: "Minimalist design | Mesh & fabric options | Integrated lumbar | 4D armrests | Seat depth adjustment | Modern streaming aesthetic",
  images: [
    "/images/chair640_1.jpg",
    "/images/chair640_2.jpg",
    "/images/chair640_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 9,
  sku: "FRA-REF-640",
  brand: "Fractal",
  rating: {
    value: 4.7,
    count: 78
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 641,
  name: "AutoFull M6 Ultra",
  price: 699.99,
  category: "accessories",
  description: "Heating & cooling | Massage function | 360° armrests | 3D pillow | Climate control | Luxury streaming experience",
  images: [
    "/images/chair641_1.jpg",
    "/images/chair641_2.jpg",
    "/images/chair641_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 6,
  sku: "AUT-M6U-641",
  brand: "AutoFull",
  rating: {
    value: 4.8,
    count: 89
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 642,
  name: "Blacklyte Athena Pro",
  price: 499.99,
  category: "accessories",
  description: "Esports professional | Magnetic headrest | 4D armrests | 90-168° recline | Reinforced steel frame | 5-year warranty | Tournament proven",
  images: [
    "/images/chair642_1.jpg",
    "/images/chair642_2.jpg",
    "/images/chair642_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 10,
  sku: "BLA-ATH-642",
  brand: "Blacklyte",
  rating: {
    value: 4.6,
    count: 112
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 643,
  name: "Razer Fujin Pro",
  price: 699.99,
  category: "accessories",
  description: "Mesh gaming chair | Breathable design | Adjustable back support | 5-year warranty | Optimal cooling | Professional grade",
  images: [
    "/images/chair643_1.jpg",
    "/images/chair643_2.jpg",
    "/images/chair643_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 7,
  sku: "RAZ-FUJ-643",
  brand: "Razer",
  rating: {
    value: 4.7,
    count: 67
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 644,
  name: "Mavix M9",
  price: 1199.99,
  category: "accessories",
  description: "Premium comfort | Independent height adjustment | Seat depth control | Built-in headrest | Cushioned design | Ultimate streaming luxury",
  images: [
    "/images/chair644_1.jpg",
    "/images/chair644_2.jpg",
    "/images/chair644_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 4,
  sku: "MAV-M9-644",
  brand: "Mavix",
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
  id: 645,
  name: "Boulies Elite Series",
  price: 349.99,
  category: "accessories",
  description: "Beginner friendly | Feature packed | Affordable premium | 4D armrests | Lumbar support | Great first streaming chair",
  images: [
    "/images/chair645_1.jpg",
    "/images/chair645_2.jpg",
    "/images/chair645_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 15,
  sku: "BOU-ELI-645",
  brand: "Boulies",
  rating: {
    value: 4.4,
    count: 118
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 646,
  name: "ThunderX3 Core",
  price: 299.99,
  category: "accessories",
  description: "Back support specialist | Affordable ergonomics | Lumbar focus | Durable build | Comfortable padding | Health-conscious streaming",
  images: [
    "/images/chair646_1.jpg",
    "/images/chair646_2.jpg",
    "/images/chair646_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 12,
  sku: "THU-CORE-646",
  brand: "ThunderX3",
  rating: {
    value: 4.5,
    count: 92
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 647,
  name: "X-Chair X2 K-Sport",
  price: 899.99,
  category: "accessories",
  description: "Office-gaming hybrid | Modern design | Ergonomic support | Professional appearance | High-quality materials | Versatile streaming solution",
  images: [
    "/images/chair647_1.jpg",
    "/images/chair647_2.jpg",
    "/images/chair647_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 6,
  sku: "XCH-X2-647",
  brand: "X-Chair",
  rating: {
    value: 4.6,
    count: 63
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 648,
  name: "NeueChair",
  price: 799.99,
  category: "accessories",
  description: "Office elegance | Mesh design | Cooling comfort | Elite build quality | Traditional aesthetics | Professional streamer choice",
  images: [
    "/images/chair648_1.jpg",
    "/images/chair648_2.jpg",
    "/images/chair648_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 5,
  sku: "NEU-CHR-648",
  brand: "NeueChair",
  rating: {
    value: 4.5,
    count: 57
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 649,
  name: "PlaySeat Trophy Logitech G",
  price: 649.99,
  category: "accessories",
  description: "Racing simulator | Dedicated racing design | Logitech collaboration | Authentic experience | Racing streamer specialty",
  images: [
    "/images/chair649_1.jpg",
    "/images/chair649_2.jpg",
    "/images/chair649_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 4,
  sku: "PLS-TRO-649",
  brand: "PlaySeat",
  rating: {
    value: 4.7,
    count: 38
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
  {
    id: 650,
    name: "Chloé Paddington Bag Revival",
    price: 1899.99,
    category: "fashion",
    description: "Limited edition reissue of the iconic 2000s 'It Bag' | Original lock detail | Premium leather | Vintage-inspired distressing | Collector's item status | Highly sought after by fashion enthusiasts",
    images: [
      "/images/fashion650_1.jpg",
      "/images/fashion650_2.jpg",
      "/images/fashion650_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 15,
    sku: "CHL-PADD-650",
    brand: "Chloé",
    rating: {
      value: 4.9,
      count: 67
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 651,
    name: "Miu Miu Reversible Car Coat",
    price: 2200.00,
    category: "fashion",
    description: "Burnt-sienna interior with gray stripe | Khaki exterior | Sophisticated prep style | Dual-purpose design | Limited production | Runway exclusive",
    images: [
      "/images/fashion651_1.jpg",
      "/images/fashion651_2.jpg",
      "/images/fashion651_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 8,
    sku: "MIU-CAR-651",
    brand: "Miu Miu",
    rating: {
      value: 4.8,
      count: 42
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 652,
    name: "Marc Jacobs Surrealism Accessories Set",
    price: 850.00,
    category: "fashion",
    description: "Oversized doll-inspired gloves | Cartoonish jewelry | Plastic fantastic aesthetic | Head-to-toe ensemble | Viral fall 2024 collection | Celebrity endorsed",
    images: [
      "/images/fashion652_1.jpg",
      "/images/fashion652_2.jpg",
      "/images/fashion652_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 12,
    sku: "MAR-SUR-652",
    brand: "Marc Jacobs",
    rating: {
      value: 4.7,
      count: 89
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 653,
    name: "Loewe 3D Floral Hoop Dress",
    price: 3200.00,
    category: "fashion",
    description: "Sheer layered fabric | 3D floral appliqués | Dreamy garden-party effect | Wind-strewn aesthetic | Spring event showstopper | Limited availability",
    images: [
      "/images/fashion653_1.jpg",
      "/images/fashion653_2.jpg",
      "/images/fashion653_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 5,
    sku: "LOE-HOOP-653",
    brand: "Loewe",
    rating: {
      value: 4.9,
      count: 38
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 654,
    name: "Saint Laurent Oversize '80s Suiting",
    price: 2800.00,
    category: "fashion",
    description: "Power suiting revival | Skirts over pants styling | Office dressing reinvented | Classic tailoring with modern twist | Executive luxury | Limited edition",
    images: [
      "/images/fashion654_1.jpg",
      "/images/fashion654_2.jpg",
      "/images/fashion654_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 7,
    sku: "YSL-SUIT-654",
    brand: "Saint Laurent",
    rating: {
      value: 4.8,
      count: 45
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 655,
    name: "Proenza Schouler Fringed Nautical Dress",
    price: 1650.00,
    category: "fashion",
    description: "Reimagined preppy trend | Mixed-and-matched stripes | Unexpected nautical twist | Sophisticated coastal style | Limited production | Exclusive collection",
    images: [
      "/images/fashion655_1.jpg",
      "/images/fashion655_2.jpg",
      "/images/fashion655_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 10,
    sku: "PRO-NAUT-655",
    brand: "Proenza Schouler",
    rating: {
      value: 4.7,
      count: 52
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 656,
    name: "Versace Pucci Print Mix-Match Set",
    price: 1950.00,
    category: "fashion",
    description: "1970s retro groove | Loud Pucci prints | Mix-and-match separates | Bohemian adjacent | Versatile styling options | Limited edition collaboration",
    images: [
      "/images/fashion656_1.jpg",
      "/images/fashion656_2.jpg",
      "/images/fashion656_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 6,
    sku: "VER-PUCCI-656",
    brand: "Versace",
    rating: {
      value: 4.8,
      count: 41
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 657,
    name: "Bottega Veneta Woven Collection",
    price: 2400.00,
    category: "fashion",
    description: "Head-to-toe craft trend | Artisanal weaving techniques | Statement dressing | Luxury craftsmanship | Limited artisan production | Investment pieces",
    images: [
      "/images/fashion657_1.jpg",
      "/images/fashion657_2.jpg",
      "/images/fashion657_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 4,
    sku: "BOT-WOVEN-657",
    brand: "Bottega Veneta",
    rating: {
      value: 4.9,
      count: 36
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 658,
    name: "East-West Designer Bag Collection",
    price: 1200.00,
    category: "fashion",
    description: "Top handle satchel revival | Doctor bag elegance | Oversized clutch option | Vintage-inspired modern luxury | Exclusive colorways | Highly collectible",
    images: [
      "/images/fashion658_1.jpg",
      "/images/fashion658_2.jpg",
      "/images/fashion658_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 15,
    sku: "EW-BAG-658",
    brand: "Various Designers",
    rating: {
      value: 4.6,
      count: 78
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 659,
    name: "Charm-Embellished Luxury Items",
    price: 850.00,
    category: "fashion",
    description: "Personalized charm necklaces | Custom bag embellishments | Unique trinkets | Designer collaborations | DIY luxury aesthetic | Highly Instagrammable",
    images: [
      "/images/fashion659_1.jpg",
      "/images/fashion659_2.jpg",
      "/images/fashion659_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 20,
    sku: "CHARM-LUX-659",
    brand: "Multiple Designers",
    rating: {
      value: 4.7,
      count: 113
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 660,
    name: "Vintage Brooch Revival Collection",
    price: 450.00,
    category: "fashion",
    description: "Authentic vintage pieces | Online sourced treasures | Unique historical elements | Classic clothing enhancement | Collector's market | Rare finds",
    images: [
      "/images/fashion660_1.jpg",
      "/images/fashion660_2.jpg",
      "/images/fashion660_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 25,
    sku: "BROOCH-V-660",
    brand: "Vintage",
    rating: {
      value: 4.8,
      count: 64
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 661,
    name: "Designer Pearl Jewelry Suite",
    price: 950.00,
    category: "fashion",
    description: "Modern pearl interpretations | Traditional elegance | Luxury materials | Timeless with contemporary twist | Investment quality | Limited edition sets",
    images: [
      "/images/fashion661_1.jpg",
      "/images/fashion661_2.jpg",
      "/images/fashion661_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 12,
    sku: "PEARL-LUX-661",
    brand: "Various Designers",
    rating: {
      value: 4.9,
      count: 57
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 662,
    name: "Artisanal Laser-Cut Lace Pieces",
    price: 1250.00,
    category: "fashion",
    description: "Modern lace technology | Traditional craftsmanship | Delicate cutouts | Luxury lightweight fabric | Limited artisan production | Summer luxury",
    images: [
      "/images/fashion662_1.jpg",
      "/images/fashion662_2.jpg",
      "/images/fashion662_3.jpg"
    ],
    highDemand: false,
    sold: false,
    quantity: 8,
    sku: "LACE-ART-662",
    brand: "Artisanal",
    rating: {
      value: 4.7,
      count: 43
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: 663,
    name: "Oversized Leather Tote Bags",
    price: 1100.00,
    category: "fashion",
    description: "Early 2000s revival | Triangular tote design | Rounded satchel shapes | Maximum capacity luxury | Statement pieces | Practical elegance",
    images: [
      "/images/fashion663_1.jpg",
      "/images/fashion663_2.jpg",
      "/images/fashion663_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 14,
    sku: "TOTE-OVS-663",
    brand: "Designer Brands",
    rating: {
      value: 4.6,
      count: 92
    },
    reviews: [
      {
        rating: 4
      }
    ]
  },
  {
    id: 664,
    name: "Exotic Animal Print Collection",
    price: 1350.00,
    category: "fashion",
    description: "Beyond leopard print | Zebra pattern sophistication | Snakeskin elegance | Tiger stripe boldness | Luxury materials | Statement making",
    images: [
      "/images/fashion664_1.jpg",
      "/images/fashion664_2.jpg",
      "/images/fashion664_3.jpg"
    ],
    highDemand: true,
    sold: false,
    quantity: 9,
    sku: "EXOTIC-ANM-664",
    brand: "Luxury Designers",
    rating: {
      value: 4.8,
      count: 67
    },
    reviews: [
      {
        rating: 5
      }
    ]
  },
  { 
  id: 665, 
  name: "Designer Neck Tie Collection", 
  price: 350.00, 
  category: "fashion", 
  description: "Saint Laurent inspired | Loosened styling | Hailey Bieber viral moment | Menswear staple reimagined | Casual elegance | Limited colorways", 
  images: [
    "/images/fashion665_1.jpg",
    "/images/fashion665_2.jpg",
    "/images/fashion665_3.jpg"
  ], 
  highDemand: false, 
  sold: false, 
  quantity: 18, 
  sku: "TIE-DES-665", 
  brand: "Designer", 
  rating: { 
    value: 4.5, 
    count: 78 
  }, 
  reviews: [
    {
      rating: 4
    }
  ] 
}, 

{ 
  id: 666, 
  name: "Rugby Shirt Reimagined", 
  price: 480.00, 
  category: "fashion", 
  description: "Spring 2025 standout | Copenhagen inspired | Range of cuts | Slim fit to oversized | Preppy classic updated | Athletic trend sophistication", 
  images: [
    "/images/fashion666_1.jpg",
    "/images/fashion666_2.jpg",
    "/images/fashion666_3.jpg"
  ], 
  highDemand: true, 
  sold: false, 
  quantity: 16, 
  sku: "RUGBY-LUX-666", 
  brand: "Designer Sportswear", 
  rating: { 
    value: 4.6, 
    count: 63 
  }, 
  reviews: [
    {
      rating: 5
    }
  ] 
}, 

{ 
  id: 667, 
  name: "Butter Yellow Statement Pieces", 
  price: 750.00, 
  category: "fashion", 
  description: "Chanel approved hue | Jacquemus volume | Jil Sander toughness | Soothing pastel | Versatile styling | Season's It-color", 
  images: [
    "/images/fashion667_1.jpg",
    "/images/fashion667_2.jpg",
    "/images/fashion667_3.jpg"
  ], 
  highDemand: true, 
  sold: false, 
  quantity: 11, 
  sku: "BUTTER-YLW-667", 
  brand: "Luxury Designers", 
  rating: { 
    value: 4.7, 
    count: 54 
  }, 
  reviews: [
    {
      rating: 5
    }
  ] 
}, 

{ 
  id: 668, 
  name: "Retro Boat Shoes Luxury Edition", 
  price: 620.00, 
  category: "fashion", 
  description: "Miu Miu reimagination | Bally sophistication | Loewe creativity | Preppy style revival | Technical separate pairing | Nostalgic yet fresh", 
  images: [
    "/images/fashion668_1.jpg",
    "/images/fashion668_2.jpg",
    "/images/fashion668_3.jpg"
  ], 
  highDemand: false, 
  sold: false, 
  quantity: 13, 
  sku: "BOAT-LUX-668", 
  brand: "Designer", 
  rating: { 
    value: 4.5, 
    count: 47 
  }, 
  reviews: [
    {
      rating: 4
    }
  ] 
}, 

{ 
  id: 669, 
  name: "Maximalist '80s Evening Wear", 
  price: 1850.00, 
  category: "fashion", 
  description: "Floral print drama | Bold earrings | Embellished tops | Rich deep colors | Oversized blazers | Brocade luxury | Pearl accessories", 
  images: [
    "/images/fashion669_1.jpg",
    "/images/fashion669_2.jpg",
    "/images/fashion669_3.jpg"
  ], 
  highDemand: true, 
  sold: false, 
  quantity: 7, 
  sku: "80S-MAX-669", 
  brand: "Designer", 
  rating: { 
    value: 4.8, 
    count: 39 
  }, 
  reviews: [
    {
      rating: 5
    }
  ] 
}, 

{ 
  id: 670, 
  name: "Bottega Veneta Artisanal Woven Raffia Tote", 
  price: 3200.00, 
  category: "fashion", 
  description: "Limited edition raffia weaving | Intrecciato technique | Natural fiber construction | Structured silhouette | Summer 2025 cult item | Highly coveted by fashion enthusiasts", 
  images: [
    "/images/fashion670_1.jpg",
    "/images/fashion670_2.jpg",
    "/images/fashion670_3.jpg"
  ], 
  highDemand: true, 
  sold: false, 
  quantity: 6, 
  sku: "BOT-RAFF-670", 
  brand: "Bottega Veneta", 
  rating: { 
    value: 4.9, 
    count: 48 
  }, 
  reviews: [
    {
      rating: 5
    }
  ] 
}, 

{ 
  id: 671, 
  name: "The Row Platform Emi Sandals", 
  price: 890.00, 
  category: "fashion", 
  description: "Patent leather construction | Flatform design | Peep-toe detail | Fashion's most wanted sandal for Summer 2025 | Immediate sell-out item | Celebrity endorsed", 
  images: [
    "/images/fashion671_1.jpg",
    "/images/fashion671_2.jpg",
    "/images/fashion671_3.jpg"
  ], 
  highDemand: true, 
  sold: false, 
  quantity: 4, 
  sku: "ROW-EMI-671", 
  brand: "The Row", 
  rating: { 
    value: 4.8, 
    count: 67 
  }, 
  reviews: [
    {
      rating: 5
    }
  ] 
}, 

{ 
  id: 672, 
  name: "Alaïa Le Click Nubuck Mini Bag", 
  price: 1950.00, 
  category: "fashion", 
  description: "Compact nubuck construction | Convertible crossbody/shoulder wear | Reptile-embossed texture | Summer 2025 It bag | Extremely limited availability", 
  images: [
    "/images/fashion672_1.jpg",
    "/images/fashion672_2.jpg",
    "/images/fashion672_3.jpg"
  ], 
  highDemand: true, 
  sold: false, 
  quantity: 3, 
  sku: "ALA-LECL-672", 
  brand: "Alaïa", 
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
  id: 673, 
  name: "Khaite Loop Bead-Embellished Sandals", 
  price: 650.00, 
  category: "fashion", 
  description: "Bead-embellished design | Clean architectural lines | Top-quality materials | Playful yet practical flats | Summer 2025 sell-out item | Constantly restocked", 
  images: [
    "/images/fashion673_1.jpg",
    "/images/fashion673_2.jpg",
    "/images/fashion673_3.jpg"
  ], 
  highDemand: true, 
  sold: false, 
  quantity: 8, 
  sku: "KHA-BEAD-673", 
  brand: "Khaite", 
  rating: { 
    value: 4.7, 
    count: 89 
  }, 
  reviews: [
    {
      rating: 5
    }
  ] 
}, 

{ 
  id: 674, 
  name: "Tory Burch Flower-Brooch Ribbed Tank", 
  price: 298.00, 
  category: "fashion", 
  description: "Ribbed cotton construction | Statement flower brooch detail | Simple yet unique design | Summer staple piece | Constant restocks needed", 
  images: [
    "/images/fashion674_1.jpg",
    "/images/fashion674_2.jpg",
    "/images/fashion674_3.jpg"
  ], 
  highDemand: false, 
  sold: false, 
  quantity: 15, 
  sku: "TOR-BROO-674", 
  brand: "Tory Burch", 
  rating: { 
    value: 4.6, 
    count: 112 
  }, 
  reviews: [
    {
      rating: 4
    }
  ] 
},
{ 
  id: 675, 
  name: "Burberry Check Trim Bikini", 
  price: 350.00, 
  category: "fashion", 
  description: "Iconic check trim | Luxury swimwear | Summer 2025 most wanted bikini | High-quality construction | Celebrity beach staple", 
  images: [
    "/images/fashion675_1.jpg",
    "/images/fashion675_2.jpg",
    "/images/fashion675_3.jpg"
  ], 
  highDemand: true, 
  sold: false, 
  quantity: 12, 
  sku: "BUR-BIKI-675", 
  brand: "Burberry", 
  rating: { 
    value: 4.8, 
    count: 76 
  }, 
  reviews: [
    {
      rating: 5
    }
  ] 
}, 

{ 
  id: 676, 
  name: "Cartier Tank Louis Cartier Watch", 
  price: 4200.00, 
  category: "fashion", 
  description: "Mini Tank Louis design | Viral status timepiece | Ultra-chic miniature sizing | Investment piece | Compliment guarantee | Luxury watch collection essential", 
  images: [
    "/images/fashion676_1.jpg",
    "/images/fashion676_2.jpg",
    "/images/fashion676_3.jpg"
  ], 
  highDemand: true, 
  sold: false, 
  quantity: 5, 
  sku: "CAR-TANK-676", 
  brand: "Cartier", 
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
  id: 677, 
  name: "High Sport Candy-Striped Pants", 
  price: 285.00, 
  category: "fashion", 
  description: "Candy-stripe pattern | Instagram viral sensation | Kick-flare trousers | Statement pants trend | Fashion-forward styling | Limited production runs", 
  images: [
    "/images/fashion677_1.jpg",
    "/images/fashion677_2.jpg",
    "/images/fashion677_3.jpg"
  ], 
  highDemand: false, 
  sold: false, 
  quantity: 18, 
  sku: "HIGH-STR-677", 
  brand: "High Sport", 
  rating: { 
    value: 4.5, 
    count: 94 
  }, 
  reviews: [
    {
      rating: 4
    }
  ] 
}, 

{ 
  id: 678, 
  name: "J.Crew Cap-Sleeve Lace-Trim Top", 
  price: 98.00, 
  category: "fashion", 
  description: "Cotton voile construction | Eyelet and ruffle details | Sheer elegance | Vintage French inspiration | Summer versatility | Breezy warm-weather essential", 
  images: [
    "/images/fashion678_1.jpg",
    "/images/fashion678_2.jpg",
    "/images/fashion678_3.jpg"
  ], 
  highDemand: false, 
  sold: false, 
  quantity: 25, 
  sku: "JCR-LACE-678", 
  brand: "J.Crew", 
  rating: { 
    value: 4.4, 
    count: 167 
  }, 
  reviews: [
    {
      rating: 4
    }
  ] 
}, 

{ 
  id: 679, 
  name: "COS Knit Cotton Midi Dress", 
  price: 145.00, 
  category: "fashion", 
  description: "Knit cotton construction | Oversize tee layering potential | Flowier summer iteration | Content creator endorsed | Versatile styling options", 
  images: [
    "/images/fashion679_1.jpg",
    "/images/fashion679_2.jpg",
    "/images/fashion679_3.jpg"
  ], 
  highDemand: true, 
  sold: false, 
  quantity: 20, 
  sku: "COS-KNIT-679", 
  brand: "COS", 
  rating: { 
    value: 4.6, 
    count: 134 
  }, 
  reviews: [
    {
      rating: 5
    }
  ] 
}, 

{ 
  id: 680, 
  name: "Roucha Red Anorak Jacket", 
  price: 425.00, 
  category: "fashion", 
  description: "Vibrant red construction | Moda Operandi exclusive | Rapidly rising brand | Stylized design | Trend-setting outerwear | Limited edition release", 
  images: [
    "/images/fashion680_1.jpg",
    "/images/fashion680_2.jpg",
    "/images/fashion680_3.jpg"
  ], 
  highDemand: false, 
  sold: false, 
  quantity: 10, 
  sku: "ROU-ANOR-680", 
  brand: "Roucha", 
  rating: { 
    value: 4.5, 
    count: 63 
  }, 
  reviews: [
    {
      rating: 4
    }
  ] 
}, 

{ 
  id: 681, 
  name: "Juju Vera Tasseled Shell Pendant Necklace", 
  price: 220.00, 
  category: "fashion", 
  description: "Tasseled sterling silver | Shell pendant design | Original viral predecessor | New iteration release | Summer 2025 jewelry essential | Ubiquitous popularity", 
  images: [
    "/images/fashion681_1.jpg",
    "/images/fashion681_2.jpg",
    "/images/fashion681_3.jpg"
  ], 
  highDemand: true, 
  sold: false, 
  quantity: 15, 
  sku: "JUJ-TASS-681", 
  brand: "Juju Vera", 
  rating: { 
    value: 4.7, 
    count: 89 
  }, 
  reviews: [
    {
      rating: 5
    }
  ] 
}, 

{ 
  id: 682, 
  name: "Intimissimi Lace-Trim Silk Shorts", 
  price: 135.00, 
  category: "fashion", 
  description: "Silk construction | Lace trim detail | Multiple color options | Dôen Iona alternative | Affordable luxury | Summer sleepwear/daywear", 
  images: [
    "/images/fashion682_1.jpg",
    "/images/fashion682_2.jpg",
    "/images/fashion682_3.jpg"
  ], 
  highDemand: false, 
  sold: false, 
  quantity: 22, 
  sku: "INT-SILK-682", 
  brand: "Intimissimi", 
  rating: { 
    value: 4.4, 
    count: 78 
  }, 
  reviews: [
    {
      rating: 4
    }
  ] 
}, 

{ 
  id: 683, 
  name: "The Row Lancaster Checked Cotton Shirt", 
  price: 590.00, 
  category: "fashion", 
  description: "Checked cotton construction | Men's version available | Oversize look | Plaid trend catalyst | Hardest-to-find item | Seasonal staple", 
  images: [
    "/images/fashion683_1.jpg",
    "/images/fashion683_2.jpg",
    "/images/fashion683_3.jpg"
  ], 
  highDemand: true, 
  sold: false, 
  quantity: 7, 
  sku: "ROW-LANC-683", 
  brand: "The Row", 
  rating: { 
    value: 4.8, 
    count: 56 
  }, 
  reviews: [
    {
      rating: 5
    }
  ] 
}, 

{ 
  id: 684, 
  name: "Reformation Vida Linen Low-Rise Pants", 
  price: 198.00, 
  category: "fashion", 
  description: "Linen construction | Low-rise design | Sophisticated tailoring | Comfortable breeziness | Perfect linen pants | Summer 2025 essential", 
  images: [
    "/images/fashion684_1.jpg",
    "/images/fashion684_2.jpg",
    "/images/fashion684_3.jpg"
  ], 
  highDemand: false, 
  sold: false, 
  quantity: 14, 
  sku: "REF-VIDA-684", 
  brand: "Reformation", 
  rating: { 
    value: 4.6, 
    count: 92 
  }, 
  reviews: [
    {
      rating: 4
    }
  ] 
}, 

{ 
  id: 685, 
  name: "Hvóya Merezhyvni Woven Flats", 
  price: 320.00, 
  category: "fashion", 
  description: "Hand-knitted construction | 20+ hours per pair | Crochet ballet flats | 2025 footwear trend | Artisanal craftsmanship | Limited production", 
  images: [
    "/images/fashion685_1.jpg",
    "/images/fashion685_2.jpg",
    "/images/fashion685_3.jpg"
  ], 
  highDemand: true, 
  sold: false, 
  quantity: 9, 
  sku: "HVO-WOVN-685", 
  brand: "Hvóya", 
  rating: { 
    value: 4.7, 
    count: 41 
  }, 
  reviews: [
    {
      rating: 5
    }
  ] 
}, 

{ 
  id: 686, 
  name: "Heaven Mayhem x Freja Mini Chrystie Bag", 
  price: 450.00, 
  category: "fashion", 
  description: "Collaboration piece | Editor-loved brands | Reptile noir finish | Charm attachment | Shoulder bag design | Season's coolest accessory", 
  images: [
    "/images/fashion686_1.jpg",
    "/images/fashion686_2.jpg",
    "/images/fashion686_3.jpg"
  ], 
  highDemand: true, 
  sold: false, 
  quantity: 6, 
  sku: "HEA-FREJ-686", 
  brand: "Heaven Mayhem", 
  rating: { 
    value: 4.8, 
    count: 38 
  }, 
  reviews: [
    {
      rating: 5
    }
  ] 
}, 

{ 
  id: 687, 
  name: "Eaves Asher Crewneck Sweater", 
  price: 185.00, 
  category: "fashion", 
  description: "Cotton construction | Beachy aesthetic | Elevated cool basics | Summer sweater alternative | Brand favorite | Versatile layering piece", 
  images: [
    "/images/fashion687_1.jpg",
    "/images/fashion687_2.jpg",
    "/images/fashion687_3.jpg"
  ], 
  highDemand: false, 
  sold: false, 
  quantity: 16, 
  sku: "EAV-ASH-687", 
  brand: "Eaves", 
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
  id: 688, 
  name: "Madewell Poplin Smocked Maxi Dress", 
  price: 125.00, 
  category: "fashion", 
  description: "Poplin construction | Smocked detailing | Easy flowy design | Versatile styling | 2000+ shopping cart adds | Summer 2025 most-worn frock", 
  images: [
    "/images/fashion688_1.jpg",
    "/images/fashion688_2.jpg",
    "/images/fashion688_3.jpg"
  ], 
  highDemand: true, 
  sold: false, 
  quantity: 25, 
  sku: "MAD-POP-688", 
  brand: "Madewell", 
  rating: { 
    value: 4.6, 
    count: 203 
  }, 
  reviews: [
    {
      rating: 4
    }
  ] 
}, 

{ 
  id: 689, 
  name: "Wire-Rim Sunglasses", 
  price: 275.00, 
  category: "fashion", 
  description: "2025 favorite eyewear trend | Thin sleek frames | Gold/silver alternatives | Celebrity endorsed (Jennifer Lawrence, Suki Waterhouse) | Acetate replacement | Modern vintage appeal", 
  images: [
    "/images/fashion689_1.jpg",
    "/images/fashion689_2.jpg",
    "/images/fashion689_3.jpg"
  ], 
  highDemand: false, 
  sold: false, 
  quantity: 20, 
  sku: "WIRE-RIM-689", 
  brand: "Designer", 
  rating: { 
    value: 4.5, 
    count: 118 
  }, 
  reviews: [
    {
      rating: 4
    }
  ] 
},

{
  id: 690,
  name: "Bruno Dunley Oil Painting",
  price: 8000.00,
  category: "art",
  description: "Contemporary oil painting by Brazilian artist Bruno Dunley | Abstract figurative style | Rich texture and color harmony | 2024 creation | Excellent investment potential | Certificate of authenticity included",
  images: [
    "/images/art690_1.jpg",
    "/images/art690_2.jpg",
    "/images/art690_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-DUN-690",
  brand: "Bruno Dunley",
  rating: {
    value: 4.7,
    count: 8
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 691,
  name: "Maria Yelletisch Contemporary Painting",
  price: 11000.00,
  category: "art",
  description: "Mixed media contemporary painting | €8,000–€12,000 value range | Abstract composition | Vibrant color palette | Emerging artist with growing market presence | Investment grade artwork",
  images: [
    "/images/art691_1.jpg",
    "/images/art691_2.jpg",
    "/images/art691_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-YEL-691",
  brand: "Maria Yelletisch",
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
  id: 692,
  name: "Konstantin Gorbatov Still Life",
  price: 6000.00,
  category: "art",
  description: "Still Life with Pumpkins and Geraniums (1930) | Russian émigré artist | Post-Impressionist technique | Folk motifs | Charming nostalgic mood | Estimated value €5,000–€7,000",
  images: [
    "/images/art692_1.jpg",
    "/images/art692_2.jpg",
    "/images/art692_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-GOR-692",
  brand: "Konstantin Gorbatov",
  rating: {
    value: 4.6,
    count: 15
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 693,
  name: "Helen Khal Abstract Painting",
  price: 7000.00,
  category: "art",
  description: "Green Over Yellow (circa 1970) | Lebanese-American pioneer | Color-field abstraction | Museum quality | Signed front and back | Rare abstract masterpiece | €6,000–€8,000 value range",
  images: [
    "/images/art693_1.jpg",
    "/images/art693_2.jpg",
    "/images/art693_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "ART-KHA-693",
  brand: "Helen Khal",
  rating: {
    value: 4.8,
    count: 9
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 694,
  name: "Jagdish Swaminathan Three Forms",
  price: 6500.00,
  category: "art",
  description: "Mystical symbolic motifs (c. 1980s) | Bird, sun, and triangular mountain | Indian tribal and folk art aesthetics | Earthy palette | Meditative mood | Estimated €5,000–€8,000",
  images: [
    "/images/art694_1.jpg",
    "/images/art694_2.jpg",
    "/images/art694_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-SWA-694",
  brand: "Jagdish Swaminathan",
  rating: {
    value: 4.7,
    count: 11
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 695,
  name: "Laurent Grasso Studies Into the Past",
  price: 18500.00,
  category: "art",
  description: "Contemporary French artist | Blends art, science and history | High level realism | Atmospheric depth | Historical references with speculative fiction | Alternative history narrative",
  images: [
    "/images/art695_1.jpg",
    "/images/art695_2.jpg",
    "/images/art695_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "ART-GRA-695",
  brand: "Laurent Grasso",
  rating: {
    value: 4.9,
    count: 14
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 696,
  name: "Walter Anderson Pelican Watercolor",
  price: 17500.00,
  category: "art",
  description: "Original watercolor by legendary Southern artist | Wildlife depiction | Fluid brushwork | Repeating patterns | Color palette mastery | straddles folk art and American modernism",
  images: [
    "/images/art696_1.jpg",
    "/images/art696_2.jpg",
    "/images/art696_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-AND-696",
  brand: "Walter Anderson",
  rating: {
    value: 4.8,
    count: 7
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 697,
  name: "Sanford Robinson Gifford Luminism Painting",
  price: 12500.00,
  category: "art",
  description: "The Beach at Cohasset | Hudson River School artist | Serene landscape | Subtle light and atmosphere | Clean horizontal composition | Museum-quality example | $10,000-$15,000 value",
  images: [
    "/images/art697_1.jpg",
    "/images/art697_2.jpg",
    "/images/art697_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-GIF-697",
  brand: "Sanford Robinson Gifford",
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
  id: 698,
  name: "Ruth Asawa Bronze Frog Sculpture",
  price: 19500.00,
  category: "art",
  description: "Bronze frog from Andrea fountain edition | Personal gift to photographer Imogen Cunningham | Playful spirit | Art for everyone philosophy | Historical significance | Investment piece",
  images: [
    "/images/art698_1.jpg",
    "/images/art698_2.jpg",
    "/images/art698_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "ART-ASA-698",
  brand: "Ruth Asawa",
  rating: {
    value: 4.9,
    count: 22
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 699,
  name: "Esther Mahlangu Ndebele Artwork",
  price: 16500.00,
  category: "art",
  description: "Acrylic-on-canvas 2011-2012 | South African Ndebele artist | Cultural ambassador | Bright geometric designs | Exploration of surface, color and line | Global acclaim | Cultural significance",
  images: [
    "/images/art699_1.jpg",
    "/images/art699_2.jpg",
    "/images/art699_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-MAH-699",
  brand: "Esther Mahlangu",
  rating: {
    value: 4.7,
    count: 16
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 700,
  name: "Claudia Valsells Contemporary Painting",
  price: 9500.00,
  category: "art",
  description: "Spanish contemporary artist | €7,000–€18,000 value range | Mixed media techniques | Abstract composition | International recognition | Emerging market presence",
  images: [
    "/images/art700_1.jpg",
    "/images/art700_2.jpg",
    "/images/art700_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-VAL-700",
  brand: "Claudia Valsells",
  rating: {
    value: 4.5,
    count: 13
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 701,
  name: "Aythamy Armas Abstract Work",
  price: 8500.00,
  category: "art",
  description: "Spanish abstract artist | €15,000–€17,500 value range | Bold color fields | Textured surface | Emotional intensity | Contemporary Spanish art representative",
  images: [
    "/images/art701_1.jpg",
    "/images/art701_2.jpg",
    "/images/art701_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-ARM-701",
  brand: "Aythamy Armas",
  rating: {
    value: 4.6,
    count: 10
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 702,
  name: "Guim Tió Zarraluki Painting",
  price: 7500.00,
  category: "art",
  description: "Catalan contemporary artist | €10,000–€22,000 value range | Figurative abstraction | Cultural commentary | International exhibitions | Young emerging talent",
  images: [
    "/images/art702_1.jpg",
    "/images/art702_2.jpg",
    "/images/art702_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-TIO-702",
  brand: "Guim Tió Zarraluki",
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
  id: 703,
  name: "Jordi Alcaraz Partitura",
  price: 12500.00,
  category: "art",
  description: "Contemporary Spanish conceptual artist | €20,000–€25,000 value range | Mixed media with glass | Philosophical exploration | International recognition | Museum collections",
  images: [
    "/images/art703_1.jpg",
    "/images/art703_2.jpg",
    "/images/art703_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "ART-ALC-703",
  brand: "Jordi Alcaraz",
  rating: {
    value: 4.8,
    count: 17
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 704,
  name: "John Kacere Photorealist Drawing",
  price: 14500.00,
  category: "art",
  description: "Pencil on paper study | Detailed figurative work | Inspired film director Sofia Coppola | Scarce works on paper | Photorealist movement importance | Historical significance",
  images: [
    "/images/art704_1.jpg",
    "/images/art704_2.jpg",
    "/images/art704_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-KAC-704",
  brand: "John Kacere",
  rating: {
    value: 4.7,
    count: 12
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 705,
  name: "Fu Xiaotong Contemporary Work",
  price: 8500.00,
  category: "art",
  description: "Chinese contemporary artist | $10,000–$25,000 value range | Needle-punch technique on Xuan paper | Cultural tradition meets contemporary | Meditative practice | International recognition",
  images: [
    "/images/art705_1.jpg",
    "/images/art705_2.jpg",
    "/images/art705_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-FU-705",
  brand: "Fu Xiaotong",
  rating: {
    value: 4.6,
    count: 14
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 706,
  name: "Chinyee Abstract Expressionist",
  price: 18500.00,
  category: "art",
  description: "Chinese-American female artist | $35,000–$40,000 value range | Abstract expressionism | Cross-cultural dialogue | Career spanning six decades | Museum collections worldwide",
  images: [
    "/images/art706_1.jpg",
    "/images/art706_2.jpg",
    "/images/art706_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "ART-CHI-706",
  brand: "Chinyee",
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
  id: 707,
  name: "Fong Chung-Ray Painting",
  price: 19500.00,
  category: "art",
  description: "Chinese abstract pioneer | $40,000–$45,000 value range | Lyrical abstraction | Spiritual dimension | Ink wash tradition | Contemporary innovation | Historical significance",
  images: [
    "/images/art707_1.jpg",
    "/images/art707_2.jpg",
    "/images/art707_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "ART-FON-707",
  brand: "Fong Chung-Ray",
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
  id: 708,
  name: "Kelly Wang Contemporary Work",
  price: 12500.00,
  category: "art",
  description: "Emerging Chinese artist | $25,000–$30,000 value range | Mixed media | Cultural identity exploration | Rapid market appreciation | Young investment opportunity",
  images: [
    "/images/art708_1.jpg",
    "/images/art708_2.jpg",
    "/images/art708_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-WAN-708",
  brand: "Kelly Wang",
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
  id: 709,
  name: "Ram Kumar Benares Abstract",
  price: 8500.00,
  category: "art",
  description: "Indian modernist masterpiece | 1961 canvas | Holy city abstraction | Earthy tones and ochres | Spiritual atmosphere | $7,000–$10,000 value | Investment quality",
  images: [
    "/images/art709_1.jpg",
    "/images/art709_2.jpg",
    "/images/art709_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "ART-KUM-709",
  brand: "Ram Kumar",
  rating: {
    value: 4.7,
    count: 13
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 710,
  name: "Mark Stock Air Whale",
  price: 7000.00,
  category: "art",
  description: "Oil on canvas 1982 | 66 x 96 inches | Dramatic interplay of light and shadow | Melodramatic, ironic edge | Exploration of love, desire and scandal | Blend of reality and fantastical | Major work by esteemed artist :cite[5]",
  images: [
    "/images/art710_1.jpg",
    "/images/art710_2.jpg",
    "/images/art710_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "ART-STO-710",
  brand: "Mark Stock",
  rating: {
    value: 4.7,
    count: 23
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 711,
  name: "Jim Dine Nancy Blurred",
  price: 5000.00,
  category: "art",
  description: "Pastel on paper 1978 | Personal expression through everyday objects | Portrait of artist's wife Nancy | Emotional depth and intimacy | Transcends pop art boundaries | Conservative estimate :cite[5]",
  images: [
    "/images/art711_1.jpg",
    "/images/art711_2.jpg",
    "/images/art711_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-DIN-711",
  brand: "Jim Dine",
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
  id: 712,
  name: "Edward Clark Paris Summer with Green",
  price: 17500.00,
  category: "art",
  description: "Pastel on paper 1992-1993 | Abstract expressionist innovation | Shaped canvas pioneer | Bold color and expressive brushstrokes | African American art history | Parisian influence :cite[5]",
  images: [
    "/images/art712_1.jpg",
    "/images/art712_2.jpg",
    "/images/art712_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "ART-CLA-712",
  brand: "Edward Clark",
  rating: {
    value: 4.8,
    count: 27
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 713,
  name: "Kirk Hayes Flesh and Blood Chair Dance",
  price: 4000.00,
  category: "art",
  description: "Oil, enamel and pencil on panel 2003 | Profound human condition narrative | Raw texture and layered composition | Vulnerability and trust themes | Quiet contemplation | Urban art significance :cite[5]",
  images: [
    "/images/art713_1.jpg",
    "/images/art713_2.jpg",
    "/images/art713_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-HAY-713",
  brand: "Kirk Hayes",
  rating: {
    value: 4.5,
    count: 15
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 714,
  name: "Bruce Davidson Subway Series Photograph",
  price: 2000.00,
  category: "art",
  description: "Digital pigment print 1980 | New York City subway documentation | Urban life intensity and vulnerability | Human experience in confined spaces | Timeless city existence exploration | Limited edition print :cite[5]",
  images: [
    "/images/art714_1.jpg",
    "/images/art714_2.jpg",
    "/images/art714_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-DAV-714",
  brand: "Bruce Davidson",
  rating: {
    value: 4.4,
    count: 32
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 715,
  name: "Kikuo Saito Turk's Cup",
  price: 19000.00,
  category: "art",
  description: "Acrylic on canvas 1980 | Japanese abstract expressionism | Color field painting influence | Vibrant color interactions | Emotional expression exploration | Fluid dynamic motion :cite[5]",
  images: [
    "/images/art715_1.jpg",
    "/images/art715_2.jpg",
    "/images/art715_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "ART-SAI-715",
  brand: "Kikuo Saito",
  rating: {
    value: 4.7,
    count: 19
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 716,
  name: "Karel Appel Untitled Ink Drawing",
  price: 6000.00,
  category: "art",
  description: "Ink on paper 1978 | CoBrA group founder | Abstract forms and figures | Energetic brushwork | Childlike instinctive style | Whimsical and thought-provoking | Accessible masterwork :cite[5]",
  images: [
    "/images/art716_1.jpg",
    "/images/art716_2.jpg",
    "/images/art716_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-APP-716",
  brand: "Karel Appel",
  rating: {
    value: 4.6,
    count: 21
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 717,
  name: "Richard Anuszkiewicz Temples Series",
  price: 12500.00,
  category: "art",
  description: "Acrylic on board 1986 | Op Art movement leader | Geometric forms and color interplay | Vibrant contrasting hues | Optical effects creation | Visual perception challenge | Dynamic precision work :cite[5]",
  images: [
    "/images/art717_1.jpg",
    "/images/art717_2.jpg",
    "/images/art717_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "ART-ANU-717",
  brand: "Richard Anuszkiewicz",
  rating: {
    value: 4.8,
    count: 25
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 718,
  name: "Becky Soria Totems Beyond Patriarchy",
  price: 8500.00,
  category: "art",
  description: "Contemporary feminist art | Female form as emblem | Nature and femininity connection | Social issues commentary | Healing force representation | Profound unconscious expression :cite[2]",
  images: [
    "/images/art718_1.jpg",
    "/images/art718_2.jpg",
    "/images/art718_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-SOR-718",
  brand: "Becky Soria",
  rating: {
    value: 4.5,
    count: 16
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 719,
  name: "Vladimir Volosov Lyrical Abstraction",
  price: 9500.00,
  category: "art",
  description: "Scientist-turned-artist creation | Physics-inspired abstraction | Light and color exploration | Atmospheric spatial composition | Thirty-year scientific background | Beauty and anxiety balance :cite[2]",
  images: [
    "/images/art719_1.jpg",
    "/images/art719_2.jpg",
    "/images/art719_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ART-VOL-719",
  brand: "Vladimir Volosov",
  rating: {
    value: 4.7,
    count: 14
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{ 
  id: 720,
  name: "1906 Small Crown Canadian Quarter",
  price: 48500.00,
  category: "collectable",
  description: "Extremely rare Canadian quarter | Only approximately 100 examples struck | Low-grade conditions start at $1,000 | High-grade specimens can reach $50,000 | Key date in Canadian numismatics",
  images: [
    "/images/collect720_1.jpg",
    "/images/collect720_2.jpg",
    "/images/collect720_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "COIN-SCROWN-720",
  brand: "Royal Canadian Mint",
  rating: {
    value: 4.9,
    count: 23
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 721,
  name: "1921 50-Cent Canadian Coin",
  price: 49500.00,
  category: "collectable",
  description: "Known as 'King of Canadian Coins' | Fewer than 200 exist | Originally 206,398 minted | Most melted down due to low demand | Auction values up to $200,000 for finest specimens",
  images: [
    "/images/collect721_1.jpg",
    "/images/collect721_2.jpg",
    "/images/collect721_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "COIN-50C-721",
  brand: "Royal Canadian Mint",
  rating: {
    value: 4.9,
    count: 18
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 722,
  name: "1936 'Dot' 10-Cent Canadian Coin",
  price: 45000.00,
  category: "collectable",
  description: "Extremely scarce Canadian dime | Only 5 known examples | Historical significance from royal transition | Dot distinguishes special minting | Sold for $150,000+ at auction",
  images: [
    "/images/collect722_1.jpg",
    "/images/collect722_2.jpg",
    "/images/collect722_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "COIN-DOT10-722",
  brand: "Royal Canadian Mint",
  rating: {
    value: 4.8,
    count: 15
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 723,
  name: "1943 Copper Penny",
  price: 38500.00,
  category: "collectable",
  description: "Extremely rare mint error | Only 40 produced | World War II era | Copper instead of steel | Significant numismatic value | Investment grade coin",
  images: [
    "/images/collect723_1.jpg",
    "/images/collect723_2.jpg",
    "/images/collect723_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "COIN-CPENNY-723",
  brand: "U.S. Mint",
  rating: {
    value: 4.9,
    count: 27
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 724,
  name: "1851 12d Black Canada Stamp",
  price: 225000.00,
  category: "collectable",
  description: "One of Canada's first classic stamps | Portrait of young Queen Victoria | Only 1,450 sold originally | Mint examples with intact gum most valuable | Sold for $225,000 in 2013",
  images: [
    "/images/collect724_1.jpg",
    "/images/collect724_2.jpg",
    "/images/collect724_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "STAMP-12D-724",
  brand: "Canada Post",
  rating: {
    value: 4.9,
    count: 12
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 725,
  name: "2¢ Large Queen on Laid Paper Stamp",
  price: 215000.00,
  category: "collectable",
  description: "Most desired Canadian philatelic item | Only 3 known examples | All used condition | Discovered in 1925 | Sold for $215,000 in 2014 | Deep rich color quality",
  images: [
    "/images/collect725_1.jpg",
    "/images/collect725_2.jpg",
    "/images/collect725_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "STAMP-LQUEEN-725",
  brand: "Canada Post",
  rating: {
    value: 4.9,
    count: 8
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 726,
  name: "1927 London to London Flight Stamp",
  price: 45000.00,
  category: "collectable",
  description: "25-cent green and yellow stamp | Only 100 copies printed | 13 unused singles known | Plane crash history | Unitrade Catalogue Value: $100,000 | Rare airmail issue",
  images: [
    "/images/collect726_1.jpg",
    "/images/collect726_2.jpg",
    "/images/collect726_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "STAMP-LLFLIGHT-726",
  brand: "Canada Post",
  rating: {
    value: 4.8,
    count: 11
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 727,
  name: "Magic: The Gathering Alpha Black Lotus",
  price: 49500.00,
  category: "collectable",
  description: "Most valuable Magic: The Gathering card | Alpha edition | Near mint condition | Celebrity collector interest | $20+ billion trading card market | Highly liquid asset",
  images: [
    "/images/collect727_1.jpg",
    "/images/collect727_2.jpg",
    "/images/collect727_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "CARD-MTG-727",
  brand: "Wizards of the Coast",
  rating: {
    value: 4.9,
    count: 34
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 728,
  name: "First Edition Pokémon Base Set Charizard",
  price: 38500.00,
  category: "collectable",
  description: "1999 first edition holographic | PSA 10 gem mint condition | Most iconic Pokémon card | Nostalgia factor driving prices | Cultural significance | Investment grade card",
  images: [
    "/images/collect728_1.jpg",
    "/images/collect728_2.jpg",
    "/images/collect728_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "CARD-PKMN-728",
  brand: "Pokémon Company",
  rating: {
    value: 4.8,
    count: 42
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 729,
  name: "1955 Doubled Die Lincoln Penny",
  price: 28500.00,
  category: "collectable",
  description: "Famous mint error coin | Visible doubling on date and lettering | Well-known variety | Collectors favorite | Historical significance | Strong appreciation potential",
  images: [
    "/images/collect729_1.jpg",
    "/images/collect729_2.jpg",
    "/images/collect729_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "COIN-DDIE-729",
  brand: "U.S. Mint",
  rating: {
    value: 4.7,
    count: 31
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 730,
  name: "1909-S VDB Lincoln Cent",
  price: 18500.00,
  category: "collectable",
  description: "Key date Lincoln penny | San Francisco mint | Victor David Brenner initials controversy | Scarce low mintage | Collector demand remains strong | Historical significance",
  images: [
    "/images/collect730_1.jpg",
    "/images/collect730_2.jpg",
    "/images/collect730_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "COIN-VDB-730",
  brand: "U.S. Mint",
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
  id: 731,
  name: "1916-D Mercury Dime",
  price: 12500.00,
  category: "collectable",
  description: "Low mintage key date | Denver mint mark | Winged Liberty head design | Well-known collectible | Strong numismatic interest | Condition sensitive value",
  images: [
    "/images/collect731_1.jpg",
    "/images/collect731_2.jpg",
    "/images/collect731_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "COIN-MERC-731",
  brand: "U.S. Mint",
  rating: {
    value: 4.6,
    count: 35
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 732,
  name: "1921 Morgan Silver Dollar",
  price: 9500.00,
  category: "collectable",
  description: "Last year of Morgan series | High silver content | Collector favorite | Historical significance | Beautiful design | Strong bullion and numismatic value",
  images: [
    "/images/collect732_1.jpg",
    "/images/collect732_2.jpg",
    "/images/collect732_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "COIN-MORG-732",
  brand: "U.S. Mint",
  rating: {
    value: 4.6,
    count: 47
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 733,
  name: "1942-P Jefferson Silver Nickel",
  price: 8500.00,
  category: "collectable",
  description: "World War II era coin | Silver alloy composition | War effort conservation | Historical significance | Collector series | Mint mark above Monticello",
  images: [
    "/images/collect733_1.jpg",
    "/images/collect733_2.jpg",
    "/images/collect733_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "COIN-WARNC-733",
  brand: "U.S. Mint",
  rating: {
    value: 4.5,
    count: 39
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 734,
  name: "1964 Kennedy Half Dollar",
  price: 2500.00,
  category: "collectable",
  description: "First year of issue | 90% silver composition | Historical significance | Memorial issue | Collector demand | Accented hair variety sought",
  images: [
    "/images/collect734_1.jpg",
    "/images/collect734_2.jpg",
    "/images/collect734_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "COIN-KENN-734",
  brand: "U.S. Mint",
  rating: {
    value: 4.4,
    count: 63
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 735,
  name: "1986 American Silver Eagle",
  price: 1500.00,
  category: "collectable",
  description: "First year of issue | .999 fine silver | Walking Liberty design | Bullion and numismatic value | High liquidity | Government guaranteed",
  images: [
    "/images/collect735_1.jpg",
    "/images/collect735_2.jpg",
    "/images/collect735_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "COIN-ASE-735",
  brand: "U.S. Mint",
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
  id: 736,
  name: "2004 Wisconsin Extra Leaf Quarter",
  price: 2000.00,
  category: "collectable",
  description: "State quarter error | Extra leaf variety | Corn stalk modification | Collector excitement | Error coin premium | Well-documented variety",
  images: [
    "/images/collect736_1.jpg",
    "/images/collect736_2.jpg",
    "/images/collect736_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "COIN-WILEAF-736",
  brand: "U.S. Mint",
  rating: {
    value: 4.3,
    count: 57
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 737,
  name: "Austrian Silver Philharmonic Coin",
  price: 750.00,
  category: "collectable",
  description: " .999 fine silver | Musical theme design | Austrian Mint product | European bullion favorite | High liquidity | Beautiful craftsmanship",
  images: [
    "/images/collect737_1.jpg",
    "/images/collect737_2.jpg",
    "/images/collect737_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "COIN-PHIL-737",
  brand: "Austrian Mint",
  rating: {
    value: 4.4,
    count: 72
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 738,
  name: "Chinese Silver Panda Coin",
  price: 850.00,
  category: "collectable",
  description: "Annual design change | .999 fine silver | Chinese mint product | Collectible series | Asian market favorite | Annual appreciation potential",
  images: [
    "/images/collect738_1.jpg",
    "/images/collect738_2.jpg",
    "/images/collect738_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "COIN-PANDA-738",
  brand: "China Mint",
  rating: {
    value: 4.5,
    count: 68
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 739,
  name: "Star Wars Boba Fett Action Figure",
  price: 27500.00,
  category: "collectable",
  description: "Original 1979 release | Rocket-firing prototype | Rare variant | Original packaging | Sold for $27,000+ at auction | Sci-fi memorabilia grail",
  images: [
    "/images/collect739_1.jpg",
    "/images/collect739_2.jpg",
    "/images/collect739_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "TOY-SW-739",
  brand: "Kenner",
  rating: {
    value: 4.8,
    count: 25
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{ 
  id: 740,
  name: "Vintage Beatles Signed Album",
  price: 36500.00,
  category: "collectable",
  description: "Original With the Beatles album | All four signatures | Authentication included | 1960s era | Music history artifact | Sold for $36,250 at auction",
  images: [
    "/images/collect740_1.jpg",
    "/images/collect740_2.jpg",
    "/images/collect740_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "MEM-BEAT-740",
  brand: "EMI",
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
  id: 741,
  name: "Elvis Presley Signed Sun Records Contract",
  price: 49500.00,
  category: "collectable",
  description: "Early career document | Authenticated signature | Music history significance | Rare paperwork | Investment grade memorabilia | Museum quality",
  images: [
    "/images/collect741_1.jpg",
    "/images/collect741_2.jpg",
    "/images/collect741_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "MEM-ELVIS-741",
  brand: "Sun Records",
  rating: {
    value: 4.9,
    count: 14
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 742,
  name: "Kurt Cobain Nirvana Tour Guitar",
  price: 48500.00,
  category: "collectable",
  description: "Smashed Fender guitar | First tour used | Grunge history | Authenticity documented | Sold for $100,000 in 2008 | Music museum quality",
  images: [
    "/images/collect742_1.jpg",
    "/images/collect742_2.jpg",
    "/images/collect742_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "MEM-NIRV-742",
  brand: "Fender",
  rating: {
    value: 4.8,
    count: 16
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 743,
  name: "Marilyn Monroe Personal Vanity Set",
  price: 24000.00,
  category: "collectable",
  description: "Brush, comb and mirror set | Personal ownership provenance | Hollywood golden era | Sold for $23,985 | Iconic celebrity memorabilia | Authentication included",
  images: [
    "/images/collect743_1.jpg",
    "/images/collect743_2.jpg",
    "/images/collect743_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "MEM-MONROE-743",
  brand: "Various",
  rating: {
    value: 4.7,
    count: 22
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 744,
  name: "Russell Crowe Gladiator Breastplate",
  price: 117000.00,
  category: "collectable",
  description: "Movie-used costume piece | \"The Art of Divorce\" auction | Authenticity guaranteed | Sold for $117,000 | Hollywood memorabilia | Prop collection centerpiece",
  images: [
    "/images/collect744_1.jpg",
    "/images/collect744_2.jpg",
    "/images/collect744_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "MEM-GLAD-744",
  brand: "DreamWorks",
  rating: {
    value: 4.8,
    count: 18
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 745,
  name: "1940s Haute Couture Evening Gown",
  price: 18500.00,
  category: "collectable",
  description: "French couture house | Single client design | 1940s era fashion | Excellent condition | Vintage fashion collectible | Museum exhibition quality",
  images: [
    "/images/collect745_1.jpg",
    "/images/collect745_2.jpg",
    "/images/collect745_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CLOTH-COUT-745",
  brand: "French Couture",
  rating: {
    value: 4.6,
    count: 14
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 746,
  name: "1950s Circle Skirt Outfit",
  price: 3500.00,
  category: "collectable",
  description: "Vintage 1950s fashion | Complete outfit | Excellent condition | Retro style popularity | Collectible vintage clothing | Wearable history",
  images: [
    "/images/collect746_1.jpg",
    "/images/collect746_2.jpg",
    "/images/collect746_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CLOTH-50S-746",
  brand: "Vintage",
  rating: {
    value: 4.4,
    count: 27
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 747,
  name: "1970s English Mod Suit",
  price: 4500.00,
  category: "collectable",
  description: "1970s mod fashion | Complete suit ensemble | British design | Counterculture fashion | Vintage clothing collectible | Music scene associated",
  images: [
    "/images/collect747_1.jpg",
    "/images/collect747_2.jpg",
    "/images/collect747_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CLOTH-MOD-747",
  brand: "British Design",
  rating: {
    value: 4.3,
    count: 19
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 748,
  name: "Rolex Daytona 6239 Watch",
  price: 49500.00,
  category: "collectable",
  description: "Paul Newman association | Vintage Rolex | Investment grade timepiece | Sold for $17.8 million at auction | Horological significance | Luxury collectible",
  images: [
    "/images/collect748_1.jpg",
    "/images/collect748_2.jpg",
    "/images/collect748_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "WATCH-ROLEX-748",
  brand: "Rolex",
  rating: {
    value: 4.9,
    count: 31
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 749,
  name: "Vintage Audemars Piguet Royal Oak",
  price: 38500.00,
  category: "collectable",
  description: "Luxury Swiss timepiece | Vintage model | High-end collectible | Horological significance | Investment potential | Discontinued model",
  images: [
    "/images/collect749_1.jpg",
    "/images/collect749_2.jpg",
    "/images/collect749_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "WATCH-AP-749",
  brand: "Audemars Piguet",
  rating: {
    value: 4.8,
    count: 24
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 750,
  name: "Original Nintendo PlayStation Prototype",
  price: 360000.00,
  category: "collectable",
  description: "Extremely rare video game console prototype | Only known working unit | Nintendo-Sony collaboration that never launched | Historical gaming artifact | Sold for $360,000 in 2020 | Museum-grade collectible",
  images: [
    "/images/collect750_1.jpg",
    "/images/collect750_2.jpg",
    "/images/collect750_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "GAME-NSP-750",
  brand: "Nintendo/Sony",
  rating: {
    value: 4.9,
    count: 8
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 751,
  name: "Julia Child 'Mastering the Art of French Cooking' First Edition",
  price: 2000.00,
  category: "collectable",
  description: "1961 first edition with original dust jacket | Excellent condition | Culinary history landmark | Signed copies worth significantly more | Highly collectible cookbook | Investment grade literature",
  images: [
    "/images/collect751_1.jpg",
    "/images/collect751_2.jpg",
    "/images/collect751_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 3,
  sku: "BOOK-JC-751",
  brand: "Knopf",
  rating: {
    value: 4.7,
    count: 23
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 752,
  name: "Women's Suffrage Memorabilia Collection",
  price: 10000.00,
  category: "collectable",
  description: "Original 1890-1917 suffrage movement items | Buttons, pins, and banners | Museum-quality artifacts | Historical significance | Values range from $50 to thousands | Centennial anniversary increased demand",
  images: [
    "/images/collect752_1.jpg",
    "/images/collect752_2.jpg",
    "/images/collect752_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "HIST-SUFF-752",
  brand: "Various",
  rating: {
    value: 4.8,
    count: 17
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 753,
  name: "Midcentury Libbey Cocktail Barware Set",
  price: 1500.00,
  category: "collectable",
  description: "Complete 1950s cocktail set | Gold glitz and graphic designs | Post-WWII celebratory style | Federal Glass and Hazel-Atlas pieces | Retro cocktail craze revival | Complete sets in high demand",
  images: [
    "/images/collect753_1.jpg",
    "/images/collect753_2.jpg",
    "/images/collect753_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 5,
  sku: "GLASS-MCM-753",
  brand: "Libbey",
  rating: {
    value: 4.6,
    count: 34
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 754,
  name: "1930s Two-Color Pieced Quilt",
  price: 450.00,
  category: "collectable",
  description: "Depression-era quilt | Single color with white contrast | Back-to-basics patterning | Excellent condition | Vintage textile collectible | Country Living editor favorite",
  images: [
    "/images/collect754_1.jpg",
    "/images/collect754_2.jpg",
    "/images/collect754_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 2,
  sku: "TEXT-QUILT-754",
  brand: "Vintage",
  rating: {
    value: 4.5,
    count: 28
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 755,
  name: "1966 Beatles Shea Stadium Concert Poster",
  price: 137000.00,
  category: "collectable",
  description: "Original 1966 concert poster | Shea Stadium performance | Framed and preserved | Big-name nostalgia factor | Sold for $137,000 at auction | Music history artifact",
  images: [
    "/images/collect755_1.jpg",
    "/images/collect755_2.jpg",
    "/images/collect755_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "MUSIC-BEAT-755",
  brand: "Concert",
  rating: {
    value: 4.9,
    count: 12
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 756,
  name: "Milton Bradley The Checkered Game of Life",
  price: 800.00,
  category: "collectable",
  description: "1860 first edition | Sealed unopened box | Cultural theme historical game | Retro nostalgia value | Company founder's first success | Board game collecting grail",
  images: [
    "/images/collect756_1.jpg",
    "/images/collect756_2.jpg",
    "/images/collect756_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "GAME-MB-756",
  brand: "Milton Bradley",
  rating: {
    value: 4.7,
    count: 19
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 757,
  name: "Federal Style Bull's Eye Mirror with Eagle",
  price: 10.00,
  category: "collectable",
  description: "1780-1830 Federal period | Gilt-framed with eagle motif | 13 balls symbolizing original colonies | Patriotic motif | Top condition antique | Fine American craftsmanship",
  images: [
    "/images/collect757_1.jpg",
    "/images/collect757_2.jpg",
    "/images/collect757_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "DECOR-FED-757",
  brand: "Federal",
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
  id: 758,
  name: "Art Deco Westclox Mantel Clock",
  price: 1000.00,
  category: "collectable",
  description: "1930s Art Deco design | Mirrored face with gold accents | Geometric skyscraper inspiration | Esteemed maker quality | High-value collector model | Excellent working condition",
  images: [
    "/images/collect758_1.jpg",
    "/images/collect758_2.jpg",
    "/images/collect758_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 3,
  sku: "DECOR-ADC-758",
  brand: "Westclox",
  rating: {
    value: 4.6,
    count: 22
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 759,
  name: "Vintage Roy Rogers Lunch Box",
  price: 3100.00,
  category: "collectable",
  description: "1950s metal lunch box | Roy Rogers theme | Excellent condition with original thermos | Western nostalgia | Highly collectible | Childhood memorabilia",
  images: [
    "/images/collect759_1.jpg",
    "/images/collect759_2.jpg",
    "/images/collect759_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "MEM-LUNCH-759",
  brand: "Aladdin",
  rating: {
    value: 4.7,
    count: 31
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{ 
  id: 760,
  name: "ZLINE 30-inch Gas Range",
  price: 2199.99,
  category: "appliances",
  description: "Professional-grade gas range | 30-inch size | Stainless steel finish | 4 sealed burners | Convection oven | Easy-to-clean surfaces | Suitable for home chefs",
  images: [
    "/images/appliance760_1.jpg",
    "/images/appliance760_2.jpg",
    "/images/appliance760_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 8,
  sku: "APP-ZLINE-760",
  brand: "ZLINE",
  rating: {
    value: 4.7,
    count: 134
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 761,
  name: "Thor Kitchen Dual Fuel Range",
  price: 2899.99,
  category: "appliances",
  description: "Dual fuel technology | Gas cooktop | Electric oven | 30-inch size | Professional styling | Stainless steel construction | Six burners",
  images: [
    "/images/appliance761_1.jpg",
    "/images/appliance761_2.jpg",
    "/images/appliance761_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 5,
  sku: "APP-THOR-761",
  brand: "Thor Kitchen",
  rating: {
    value: 4.8,
    count: 89
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 762,
  name: "Forno Electric Range",
  price: 1499.99,
  category: "appliances",
  description: "30-inch electric range | Smooth glass cooktop | Self-cleaning oven | Stainless steel finish | Modern design | Energy efficient",
  images: [
    "/images/appliance762_1.jpg",
    "/images/appliance762_2.jpg",
    "/images/appliance762_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 12,
  sku: "APP-FORNO-762",
  brand: "Forno",
  rating: {
    value: 4.5,
    count: 76
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 763,
  name: "Kucht Wall Mount Range Hood",
  price: 899.99,
  category: "appliances",
  description: "Wall mount range hood | 30-inch size | Stainless steel | 400 CFM power | LED lighting | Professional ventilation | Easy installation",
  images: [
    "/images/appliance763_1.jpg",
    "/images/appliance763_2.jpg",
    "/images/appliance763_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 15,
  sku: "APP-KUCHT-763",
  brand: "Kucht",
  rating: {
    value: 4.6,
    count: 63
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 764,
  name: "Cosmo Under Cabinet Hood",
  price: 499.99,
  category: "appliances",
  description: "Under cabinet range hood | 30-inch size | Stainless steel finish | Ductless option | 3-speed fan | Modern design | Affordable luxury",
  images: [
    "/images/appliance764_1.jpg",
    "/images/appliance764_2.jpg",
    "/images/appliance764_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 20,
  sku: "APP-COSMO-764",
  brand: "Cosmo",
  rating: {
    value: 4.4,
    count: 118
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 765,
  name: "MRCOOL DIY Mini Split System",
  price: 1899.99,
  category: "appliances",
  description: "DIY mini split system | 5th generation | 1-zone cooling/heating | Energy efficient | Easy installation | WiFi compatible | Perfect for small spaces",
  images: [
    "/images/appliance765_1.jpg",
    "/images/appliance765_2.jpg",
    "/images/appliance765_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 7,
  sku: "APP-MRCOOL-765",
  brand: "MRCOOL",
  rating: {
    value: 4.7,
    count: 156
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 766,
  name: "Senville AURA Mini Split",
  price: 2199.99,
  category: "appliances",
  description: "Professional mini split system | Multi-zone capability | Inverter technology | Quiet operation | Energy star rated | Professional installation recommended",
  images: [
    "/images/appliance766_1.jpg",
    "/images/appliance766_2.jpg",
    "/images/appliance766_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 4,
  sku: "APP-SENVILLE-766",
  brand: "Senville",
  rating: {
    value: 4.8,
    count: 92
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 767,
  name: "Pioneer Diamante Mini Split",
  price: 1599.99,
  category: "appliances",
  description: "Advanced mini split system | Smart controls | Ultra-quiet operation | High efficiency | DIY friendly | Multiple zone options | Modern design",
  images: [
    "/images/appliance767_1.jpg",
    "/images/appliance767_2.jpg",
    "/images/appliance767_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 6,
  sku: "APP-PIONEER-767",
  brand: "Pioneer",
  rating: {
    value: 4.6,
    count: 78
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 768,
  name: "ZLINE Under Cabinet Range Hood",
  price: 1299.99,
  category: "appliances",
  description: "Premium under cabinet hood | 30-inch size | Professional power | Stainless steel construction | LED lighting | Remote control | Italian design",
  images: [
    "/images/appliance768_1.jpg",
    "/images/appliance768_2.jpg",
    "/images/appliance768_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 9,
  sku: "APP-ZLHOOD-768",
  brand: "ZLINE",
  rating: {
    value: 4.8,
    count: 67
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 769,
  name: "Thor Kitchen Refrigerator",
  price: 3299.99,
  category: "appliances",
  description: "French door refrigerator | 36-inch size | Stainless steel | Water and ice dispenser | Energy efficient | Spacious interior | Modern kitchen essential",
  images: [
    "/images/appliance769_1.jpg",
    "/images/appliance769_2.jpg",
    "/images/appliance769_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 5,
  sku: "APP-THORFRIDGE-769",
  brand: "Thor Kitchen",
  rating: {
    value: 4.7,
    count: 45
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 770,
  name: "Forno Built-in Dishwasher",
  price: 899.99,
  category: "appliances",
  description: "Built-in dishwasher | Stainless steel interior | Quiet operation | Multiple wash cycles | Energy star rated | Easy installation | Modern kitchen essential",
  images: [
    "/images/appliance770_1.jpg",
    "/images/appliance770_2.jpg",
    "/images/appliance770_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 15,
  sku: "APP-FORNODISH-770",
  brand: "Forno",
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
  id: 771,
  name: "Cosmo Over-the-Range Microwave",
  price: 399.99,
  category: "appliances",
  description: "Over-the-range microwave | 30-inch size | Stainless steel | 1.6 cu.ft. capacity | Ventilation system | Sensor cooking | Space-saving design",
  images: [
    "/images/appliance771_1.jpg",
    "/images/appliance771_2.jpg",
    "/images/appliance771_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 18,
  sku: "APP-COSMOMICRO-771",
  brand: "Cosmo",
  rating: {
    value: 4.4,
    count: 112
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 772,
  name: "MRCOOL Advantage Multi-Zone System",
  price: 3499.99,
  category: "appliances",
  description: "Multi-zone mini split system | 5th generation technology | Professional grade | WiFi compatible | Energy efficient | Perfect for whole home comfort",
  images: [
    "/images/appliance772_1.jpg",
    "/images/appliance772_2.jpg",
    "/images/appliance772_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 3,
  sku: "APP-MRCOOLMULTI-772",
  brand: "MRCOOL",
  rating: {
    value: 4.8,
    count: 56
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 773,
  name: "ZLINE Wine Cooler",
  price: 1499.99,
  category: "appliances",
  description: "Built-in wine cooler | 30-inch size | Dual temperature zones | LED lighting | Quiet operation | Perfect for wine enthusiasts | Modern kitchen luxury",
  images: [
    "/images/appliance773_1.jpg",
    "/images/appliance773_2.jpg",
    "/images/appliance773_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 7,
  sku: "APP-ZLINEWINE-773",
  brand: "ZLINE",
  rating: {
    value: 4.6,
    count: 42
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 774,
  name: "Thor Kitchen Outdoor Grill",
  price: 1899.99,
  category: "appliances",
  description: "Professional outdoor grill | Stainless steel construction | Multiple burners | Side burner included | Rotisserie kit | Perfect for outdoor cooking",
  images: [
    "/images/appliance774_1.jpg",
    "/images/appliance774_2.jpg",
    "/images/appliance774_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 6,
  sku: "APP-THORGRILL-774",
  brand: "Thor Kitchen",
  rating: {
    value: 4.7,
    count: 38
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 775,
  name: "Forno Pizza Oven",
  price: 799.99,
  category: "appliances",
  description: "Outdoor pizza oven | Portable design | Wood-fired operation | Authentic pizza making | Perfect for outdoor entertainment | Easy to use",
  images: [
    "/images/appliance775_1.jpg",
    "/images/appliance775_2.jpg",
    "/images/appliance775_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 10,
  sku: "APP-FORNOPIZZA-775",
  brand: "Forno",
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
  id: 776,
  name: "Kucht Beverage Center",
  price: 1299.99,
  category: "appliances",
  description: "Built-in beverage center | 24-inch size | Adjustable shelves | Glass door | LED lighting | Perfect for beverages and snacks | Modern kitchen addition",
  images: [
    "/images/appliance776_1.jpg",
    "/images/appliance776_2.jpg",
    "/images/appliance776_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 8,
  sku: "APP-KUCHTBEV-776",
  brand: "Kucht",
  rating: {
    value: 4.6,
    count: 34
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 777,
  name: "Cosmo Garbage Disposal",
  price: 199.99,
  category: "appliances",
  description: "Heavy-duty garbage disposal | 1/2 HP motor | Stainless steel components | Easy installation | Quiet operation | Perfect for modern kitchens",
  images: [
    "/images/appliance777_1.jpg",
    "/images/appliance777_2.jpg",
    "/images/appliance777_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 25,
  sku: "APP-COSMODISP-777",
  brand: "Cosmo",
  rating: {
    value: 4.3,
    count: 89
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 778,
  name: "MRCOOL VersaPro HVAC System",
  price: 4299.99,
  category: "appliances",
  description: "Complete HVAC system | 2nd generation technology | Whole home comfort | Energy efficient | Professional installation recommended | Modern climate control",
  images: [
    "/images/appliance778_1.jpg",
    "/images/appliance778_2.jpg",
    "/images/appliance778_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 2,
  sku: "APP-MRCOOLHVAC-778",
  brand: "MRCOOL",
  rating: {
    value: 4.9,
    count: 23
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 779,
  name: "ZLINE Kitchen Sink",
  price: 499.99,
  category: "appliances",
  description: "Premium kitchen sink | Stainless steel construction | Undermount design | Single bowl | Soundproofing | Easy to clean | Modern kitchen essential",
  images: [
    "/images/appliance779_1.jpg",
    "/images/appliance779_2.jpg",
    "/images/appliance779_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 15,
  sku: "APP-ZLINESINK-779",
  brand: "ZLINE",
  rating: {
    value: 4.5,
    count: 78
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 780,
  name: "Thor Kitchen Pot Filler",
  price: 299.99,
  category: "appliances",
  description: "Professional pot filler | Stainless steel finish | Wall mount design | 180-degree swing | Easy installation | Perfect for cooking enthusiasts",
  images: [
    "/images/appliance780_1.jpg",
    "/images/appliance780_2.jpg",
    "/images/appliance780_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 12,
  sku: "APP-THORPOT-780",
  brand: "Thor Kitchen",
  rating: {
    value: 4.6,
    count: 45
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 781,
  name: "Forno Farmhouse Sink",
  price: 699.99,
  category: "appliances",
  description: "Farmhouse kitchen sink | Fireclay construction | Apron front design | Single bowl | Durable finish | Traditional styling | Modern functionality",
  images: [
    "/images/appliance781_1.jpg",
    "/images/appliance781_2.jpg",
    "/images/appliance781_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 9,
  sku: "APP-FORNOSINK-781",
  brand: "Forno",
  rating: {
    value: 4.7,
    count: 56
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 782,
  name: "Kucht Water Filter System",
  price: 399.99,
  category: "appliances",
  description: "Under-sink water filter | Multi-stage filtration | Easy installation | Clean drinking water | Modern kitchen essential | Health and wellness",
  images: [
    "/images/appliance782_1.jpg",
    "/images/appliance782_2.jpg",
    "/images/appliance782_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 20,
  sku: "APP-KUCHTWATER-782",
  brand: "Kucht",
  rating: {
    value: 4.4,
    count: 92
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 783,
  name: "Cosmo Bathroom Exhaust Fan",
  price: 149.99,
  category: "appliances",
  description: "Bathroom exhaust fan | Quiet operation | Energy efficient | Easy installation | Moisture control | Modern bathroom essential | Improved air quality",
  images: [
    "/images/appliance783_1.jpg",
    "/images/appliance783_2.jpg",
    "/images/appliance783_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 30,
  sku: "APP-COSMOFAN-783",
  brand: "Cosmo",
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
  id: 784,
  name: "MRCOOL Hyper Heat System",
  price: 3899.99,
  category: "appliances",
  description: "Hyper heat HVAC system | 2nd generation technology | Extreme weather performance | Energy efficient | Professional installation | Whole home comfort",
  images: [
    "/images/appliance784_1.jpg",
    "/images/appliance784_2.jpg",
    "/images/appliance784_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 3,
  sku: "APP-MRCOOLHEAT-784",
  brand: "MRCOOL",
  rating: {
    value: 4.8,
    count: 34
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 785,
  name: "ZLINE Outdoor Refrigerator",
  price: 2499.99,
  category: "appliances",
  description: "Outdoor refrigerator | Stainless steel construction | Weatherproof design | Multiple shelves | Perfect for outdoor kitchens | Entertainment essential",
  images: [
    "/images/appliance785_1.jpg",
    "/images/appliance785_2.jpg",
    "/images/appliance785_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 4,
  sku: "APP-ZLINEOUT-785",
  brand: "ZLINE",
  rating: {
    value: 4.7,
    count: 28
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 786,
  name: "Thor Kitchen Outdoor Sink",
  price: 899.99,
  category: "appliances",
  description: "Outdoor kitchen sink | Stainless steel construction | Weather resistant | Easy to clean | Perfect for outdoor cooking areas | Durable design",
  images: [
    "/images/appliance786_1.jpg",
    "/images/appliance786_2.jpg",
    "/images/appliance786_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 7,
  sku: "APP-THORSINK-786",
  brand: "Thor Kitchen",
  rating: {
    value: 4.5,
    count: 19
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 787,
  name: "Forno Outdoor Storage",
  price: 599.99,
  category: "appliances",
  description: "Outdoor storage cabinet | Weatherproof design | Multiple shelves | Lockable doors | Perfect for outdoor equipment | Durable construction",
  images: [
    "/images/appliance787_1.jpg",
    "/images/appliance787_2.jpg",
    "/images/appliance787_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 10,
  sku: "APP-FORNOSTOR-787",
  brand: "Forno",
  rating: {
    value: 4.4,
    count: 23
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 788,
  name: "Kucht Kitchen Faucet",
  price: 349.99,
  category: "appliances",
  description: "Professional kitchen faucet | Stainless steel finish | Pull-down sprayer | Easy installation | Modern design | Durable construction",
  images: [
    "/images/appliance788_1.jpg",
    "/images/appliance788_2.jpg",
    "/images/appliance788_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 25,
  sku: "APP-KUCHTFAUCET-788",
  brand: "Kucht",
  rating: {
    value: 4.6,
    count: 112
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 789,
  name: "Cosmo Bathroom Faucet",
  price: 199.99,
  category: "appliances",
  description: "Modern bathroom faucet | Chrome finish | Single handle design | Easy installation | Water efficient | Sleek design | Affordable luxury",
  images: [
    "/images/appliance789_1.jpg",
    "/images/appliance789_2.jpg",
    "/images/appliance789_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 30,
  sku: "APP-COSMOFAUCET-789",
  brand: "Cosmo",
  rating: {
    value: 4.4,
    count: 89
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{ 
  id: 790,
  name: "KitchenAid Artisan Series 5-Quart Stand Mixer",
  price: 449.99,
  category: "appliances",
  description: "Empire Red | 5-Quart Bowl | 10-Speed | Tilt-Head Design | Includes Dough Hook, Flat Beater, and Wire Whip | 325-Watt Motor | Used | Excellent Condition | Warranty: 1 Year Limited ",
  images: [
    "/images/kit790_1.jpg",
    "/images/kit790_2.jpg",
    "/images/kit790_3.jpg",
    "/images/kit790_4.jpg",
    "/images/kit790_5.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "KA-ART5-790",
  brand: "KitchenAid",
  rating: {
    value: 4.8,
    count: 127
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 791,
  name: "Vitamix 5200 Blender",
  price: 429.99,
  category: "appliances",
  description: "Professional-Grade | 64-Oz Container | 2.0 HP Motor | Variable Speed Control | Self-Cleaning | Pulse Feature | Black Finish | Used | Excellent Working Condition ",
  images: [
    "/images/kit791_1.jpg",
    "/images/kit791_2.jpg",
    "/images/kit791_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "VITA-5200-791",
  brand: "Vitamix",
  rating: {
    value: 4.9,
    count: 89
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 792,
  name: "Le Creuset Signature Dutch Oven",
  price: 379.99,
  category: "appliances",
  description: "7.25 Qt | Cerise (Cherry Red) | Enameled Cast Iron | Iron Knob | Oven Safe to 500°F | Even Heat Distribution | Like-New Condition | Lifetime Warranty ",
  images: [
    "/images/kit792_1.jpg",
    "/images/kit792_2.jpg",
    "/images/kit792_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "LC-DO725-792",
  brand: "Le Creuset",
  rating: {
    value: 4.9,
    count: 204
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 793,
  name: "Breville Barista Express Espresso Machine",
  price: 699.99,
  category: "appliances",
  description: "BES870XL | Built-in Conical Burr Grinder | 15-Bar Pressure Pump | PID Temperature Control | Automatic Microfoam Milk Texturing | Stainless Steel | Used | Excellent Condition ",
  images: [
    "/images/kit793_1.jpg",
    "/images/kit793_2.jpg",
    "/images/kit793_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "BRE-BES870-793",
  brand: "Breville",
  rating: {
    value: 4.7,
    count: 156
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 794,
  name: "Instant Pot Duo Plus 9-in-1",
  price: 129.99,
  category: "appliances",
  description: "6-Quart | 9-in-1 Functions: Pressure Cook, Slow Cook, Rice Cook, etc. | 15 One-Touch Programs | Stainless Steel Pot | Used | Good Condition | All Accessories Included ",
  images: [
    "/images/kit794_1.jpg",
    "/images/kit794_2.jpg",
    "/images/kit794_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "IP-DUO6-794",
  brand: "Instant Pot",
  rating: {
    value: 4.6,
    count: 342
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 795,
  name: "Cuisinart Air Fryer Toaster Oven",
  price: 249.99,
  category: "appliances",
  description: "TOA-65 | 1800 Watts | Convection Bake and Broil | Air Fry, Toast, Bake | 0.6 cu. ft. Capacity | Stainless Steel | Used | Excellent Condition ",
  images: [
    "/images/kit795_1.jpg",
    "/images/kit795_2.jpg",
    "/images/kit795_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CUIS-TOA65-795",
  brand: "Cuisinart",
  rating: {
    value: 4.5,
    count: 118
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 796,
  name: "Ninja Foodi 8-in-1 Digital Air Fry Oven",
  price: 229.99,
  category: "appliances",
  description: "XL Capacity | Air Fry, Roast, Bake, Broil, Toast | 1800 Watts | Digital Control | Includes Baking Pan & Air Fry Rack | Like New | Used Only Twice ",
  images: [
    "/images/kit796_1.jpg",
    "/images/kit796_2.jpg",
    "/images/kit796_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "NIN-FOODIXL-796",
  brand: "Ninja",
  rating: {
    value: 4.4,
    count: 97
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 797,
  name: "All-Clad D3 Stainless Steel Cookware Set",
  price: 499.99,
  category: "appliances",
  description: "10-Piece Set | 3-Ply Stainless Steel | Oven Safe to 600°F | Dishwasher Safe | Even Heating | Professional Grade | Used | Excellent Condition ",
  images: [
    "/images/kit797_1.jpg",
    "/images/kit797_2.jpg",
    "/images/kit797_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "AC-D3-10-797",
  brand: "All-Clad",
  rating: {
    value: 4.8,
    count: 76
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 798,
  name: "Shun Classic 8-inch Chef's Knife",
  price: 169.99,
  category: "appliances",
  description: "VG-MAX Steel Core | 16-Degree Cutting Angle | D-Shaped Handle | Razor Sharp | Handcrafted in Japan | Used | Professionally Honed | Original Box ",
  images: [
    "/images/kit798_1.jpg",
    "/images/kit798_2.jpg",
    "/images/kit798_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "SHUN-CHEF8-798",
  brand: "Shun",
  rating: {
    value: 4.9,
    count: 143
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 799,
  name: "Wolf Gourmet Countertop Oven",
  price: 499.99,
  category: "appliances",
  description: "Extra-Large Capacity | Convection Heating | 10 Cooking Functions | 1800 Watts | Stainless Steel | Used | Excellent Condition | High-End Performance ",
  images: [
    "/images/kit799_1.jpg",
    "/images/kit799_2.jpg",
    "/images/kit799_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "WOLF-CTO-799",
  brand: "Wolf",
  rating: {
    value: 4.7,
    count: 68
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 800,
  name: "Smeg 50's Retro Style Stand Mixer",
  price: 449.99,
  category: "appliances",
  description: "Pastel Blue | 4.8-Quart Bowl | 10 Speed Settings | Tilt-Head | Includes 3 Attachments | 250-Watt Motor | Used | Excellent Aesthetic Condition ",
  images: [
    "/images/kit800_1.jpg",
    "/images/kit800_2.jpg",
    "/images/kit800_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "SMEG-RETRO-800",
  brand: "Smeg",
  rating: {
    value: 4.6,
    count: 92
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 801,
  name: "Cuisinart Precision Master Smoker",
  price: 179.99,
  category: "appliances",
  description: "Electric Smoker | 4 Racks | 800 Watts | Digital Control | Glass Door | Indoor Use | Like New | Used Only a Few Times ",
  images: [
    "/images/kit801_1.jpg",
    "/images/kit801_2.jpg",
    "/images/kit801_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CUIS-SMOKER-801",
  brand: "Cuisinart",
  rating: {
    value: 4.3,
    count: 57
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 802,
  name: "Zwilling JA Henckels Knife Block Set",
  price: 299.99,
  category: "appliances",
  description: "12-Piece Set | High-Carbon Stainless Steel | Full Tang | Dishwasher Safe | Acacia Wood Block | Used | Excellent Condition | Razor Sharp ",
  images: [
    "/images/kit802_1.jpg",
    "/images/kit802_2.jpg",
    "/images/kit802_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "ZWILL-12SET-802",
  brand: "Zwilling",
  rating: {
    value: 4.5,
    count: 134
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 803,
  name: "Breville Smart Oven Air Fryer",
  price: 399.99,
  category: "appliances",
  description: "BOV860BSS | Convection | Air Fry | Element IQ System | 1800 Watts | Large Capacity | Stainless Steel | Used | Excellent Working Order ",
  images: [
    "/images/kit803_1.jpg",
    "/images/kit803_2.jpg",
    "/images/kit803_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "BRE-BOV860-803",
  brand: "Breville",
  rating: {
    value: 4.8,
    count: 211
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 804,
  name: "KitchenAid K400 Blender",
  price: 199.99,
  category: "appliances",
  description: "Variable Speed Control | 56-Oz Jar | 5 Pre-Programmed Settings | Intelli-Speed Motor | Die-Cast Metal Base | Used | Good Condition ",
  images: [
    "/images/kit804_1.jpg",
    "/images/kit804_2.jpg",
    "/images/kit804_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "KA-K400-804",
  brand: "KitchenAid",
  rating: {
    value: 4.4,
    count: 89
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 805,
  name: "Cuisinart Griddler Deluxe",
  price: 149.99,
  category: "appliances",
  description: "5-in-1 | Contact Grill | Panini Press | Open Grill | Full Grill | Bake | Removable Plates | Used | Excellent Condition ",
  images: [
    "/images/kit805_1.jpg",
    "/images/kit805_2.jpg",
    "/images/kit805_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CUIS-GRIDDL-805",
  brand: "Cuisinart",
  rating: {
    value: 4.5,
    count: 176
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 806,
  name: "Ninja BL610 Professional Blender",
  price: 99.99,
  category: "appliances",
  description: "1100-Watt Base | 72-Oz Total Crushing Pitcher | 6 Blending Programs | Dishwasher Safe Parts | Used | Good Condition | Powerful Blending ",
  images: [
    "/images/kit806_1.jpg",
    "/images/kit806_2.jpg",
    "/images/kit806_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "NIN-BL610-806",
  brand: "Ninja",
  rating: {
    value: 4.6,
    count: 305
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 807,
  name: "Lodge Pre-Seasoned Cast Iron Skillet",
  price: 29.99,
  category: "appliances",
  description: "12-inch | Pre-Seasoned | Oven Safe | Ideal for Searing, Baking, Frying | Made in USA | Used | Well Maintained | Excellent Condition ",
  images: [
    "/images/kit807_1.jpg",
    "/images/kit807_2.jpg",
    "/images/kit807_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "LODGE-12SK-807",
  brand: "Lodge",
  rating: {
    value: 4.8,
    count: 452
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 808,
  name: "Cuisinart Coffee Maker",
  price: 119.99,
  category: "appliances",
  description: "14-Cup Programmable | Hot Water System | Brew Pause | Charcoal Water Filter | Glass Carafe | Used | Excellent Working Condition ",
  images: [
    "/images/kit808_1.jpg",
    "/images/kit808_2.jpg",
    "/images/kit808_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CUIS-CM14-808",
  brand: "Cuisinart",
  rating: {
    value: 4.4,
    count: 198
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 809,
  name: "OXO Good Grips 12-Inch Tongs",
  price: 12.99,
  category: "appliances",
  description: "Stainless Steel | Non-Slip Grip | Locking Clip | Dishwasher Safe | Heat Resistant | Used | Good Condition | Kitchen Essential ",
  images: [
    "/images/kit809_1.jpg",
    "/images/kit809_2.jpg",
    "/images/kit809_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "OXO-TONGS-809",
  brand: "OXO",
  rating: {
    value: 4.7,
    count: 421
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 810,
  name: "Croc-Pot 6-Quart Slow Cooker",
  price: 49.99,
  category: "appliances",
  description: "Programmable | Digital Timer | Cooks for Up to 20 Hours | Stoneware Pot | Dishwasher Safe | Used | Excellent Condition ",
  images: [
    "/images/kit810_1.jpg",
    "/images/kit810_2.jpg",
    "/images/kit810_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CROCK-P6-810",
  brand: "Croc-Pot",
  rating: {
    value: 4.6,
    count: 287
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 811,
  name: "Cuisinart PowerPrep Plus Food Processor",
  price: 199.99,
  category: "appliances",
  description: "14-Cup Capacity | 720-Watt Motor | Extra-Large Feed Tube | Stainless Steel | Includes Multiple Discs | Used | Excellent Condition ",
  images: [
    "/images/kit811_1.jpg",
    "/images/kit811_2.jpg",
    "/images/kit811_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CUIS-FP14-811",
  brand: "Cuisinart",
  rating: {
    value: 4.7,
    count: 134
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 812,
  name: "Ninja Foodi 2-Basket Air Fryer",
  price: 199.99,
  category: "appliances",
  description: "DualZone Technology | 8-Quart Capacity | 6 Functions | Match Cook & Smart Finish | Independent Controls | Used | Like New ",
  images: [
    "/images/kit812_1.jpg",
    "/images/kit812_2.jpg",
    "/images/kit812_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "NIN-DUAL8-812",
  brand: "Ninja",
  rating: {
    value: 4.5,
    count: 167
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 813,
  name: "KitchenAid Variable Speed Hand Blender",
  price: 79.99,
  category: "appliances",
  description: "200-Watt | 2 Speed Settings | Stainless Steel Blending Shaft | Whisk Attachment | Immersion Blending | Used | Good Condition ",
  images: [
    "/images/kit813_1.jpg",
    "/images/kit813_2.jpg",
    "/images/kit813_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "KA-HBLDR-813",
  brand: "KitchenAid",
  rating: {
    value: 4.3,
    count: 95
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 814,
  name: "Lodge Cast Iron Dutch Oven",
  price: 69.99,
  category: "appliances",
  description: "6-Quart | Pre-Seasoned | Dual Handles | Tight-Fitting Lid | Oven Safe | Perfect for Stews & Bread | Used | Well Seasoned ",
  images: [
    "/images/kit814_1.jpg",
    "/images/kit814_2.jpg",
    "/images/kit814_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "LODGE-DO6-814",
  brand: "Lodge",
  rating: {
    value: 4.8,
    count: 223
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 815,
  name: "Cuisinart Ice Cream Maker",
  price: 89.99,
  category: "appliances",
  description: "2-Quart | Fully Automatic | Double Insulated Freezer Bowl | Mix-In Spoon | Recipe Book | Used | Excellent Condition ",
  images: [
    "/images/kit815_1.jpg",
    "/images/kit815_2.jpg",
    "/images/kit815_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CUIS-ICE2-815",
  brand: "Cuisinart",
  rating: {
    value: 4.5,
    count: 178
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 816,
  name: "KitchenAid Pro Line Series Coffee Grinder",
  price: 249.99,
  category: "appliances",
  description: "Burr Grinder | 15 Grind Settings | 4-18 Cup Capacity | Stainless Steel | Precise Grinding | Used | Excellent Condition ",
  images: [
    "/images/kit816_1.jpg",
    "/images/kit816_2.jpg",
    "/images/kit816_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "KA-PLGRND-816",
  brand: "KitchenAid",
  rating: {
    value: 4.6,
    count: 87
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 817,
  name: "Cuisinart Compact Food Processor",
  price: 59.99,
  category: "appliances",
  description: "3-Cup Capacity | 2 Speeds | Reversible Disc | Stainless Steel Blade | Compact Design | Used | Good Condition ",
  images: [
    "/images/kit817_1.jpg",
    "/images/kit817_2.jpg",
    "/images/kit817_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "CUIS-FP3-817",
  brand: "Cuisinart",
  rating: {
    value: 4.4,
    count: 145
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 818,
  name: "KitchenAid Siphon Coffee Brewer",
  price: 199.99,
  category: "appliances",
  description: "Vacuum Coffee Maker | Butane Burner | Glass Carafe | Makes 4 Cups | Unique Brewing Process | Used | Excellent Condition ",
  images: [
    "/images/kit818_1.jpg",
    "/images/kit818_2.jpg",
    "/images/kit818_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "KA-SIPHON-818",
  brand: "KitchenAid",
  rating: {
    value: 4.2,
    count: 34
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 819,
  name: "Ninja Hot & Cold Brewed System",
  price: 229.99,
  category: "appliances",
  description: "Coffee & Tea Maker | 5 Brew Sizes | Thermal Carafe | Glass Carafe | 6 Brew Styles | Used | Excellent Condition ",
  images: [
    "/images/kit819_1.jpg",
    "/images/kit819_2.jpg",
    "/images/kit819_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "NIN-CF601-819",
  brand: "Ninja",
  rating: {
    value: 4.5,
    count: 112
  },
  reviews: [
    {
      rating: 4
    }
  ]
}, 
{
  id: 820,
  name: "Samsung Family Hub Smart Refrigerator",
  price: 3499.99,
  category: "appliances",
  description: "4-Door Flex | 27 Cu. Ft. Capacity | 21.5 Touchscreen | Wi-Fi Enabled | Internal Cameras | Water & Ice Dispenser | Stainless Steel | Used | Excellent Condition | Smart Home Integration ",
  images: [
    "/images/app820_1.jpg",
    "/images/app820_2.jpg",
    "/images/app820_3.jpg",
    "/images/app820_4.jpg",
    "/images/app820_5.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "SAM-FHUB-820",
  brand: "Samsung",
  rating: {
    value: 4.5,
    count: 89
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 821,
  name: "LG Smart Wi-Fi Enabled Front Load Washer",
  price: 1099.99,
  category: "appliances",
  description: "5.0 Cu. Ft. Capacity | TurboWash Technology | Steam Enabled | Allergine Cycle | Wi-Fi Connect | Graphite Steel | Used | Excellent Working Condition ",
  images: [
    "/images/app821_1.jpg",
    "/images/app821_2.jpg",
    "/images/app821_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "LG-WASH5-821",
  brand: "LG",
  rating: {
    value: 4.7,
    count: 156
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 822,
  name: "LG Smart Electric Dryer",
  price: 899.99,
  category: "appliances",
  description: "9.0 Cu. Ft. Capacity | SteamFresh Cycle | Sensor Dry | Wi-Fi Enabled | Graphite Steel | Matches WM8100HVA Washer | Used | Excellent Condition ",
  images: [
    "/images/app822_1.jpg",
    "/images/app822_2.jpg",
    "/images/app822_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "LG-DRY9-822",
  brand: "LG",
  rating: {
    value: 4.6,
    count: 132
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 823,
  name: "Whirlpool French Door Refrigerator",
  price: 2199.99,
  category: "appliances",
  description: "25 Cu. Ft. Capacity | External Water & Ice Dispenser | Adaptive Defrost | SpillGuard Glass Shelves | Fingerprint-Resistant Stainless | Used | Excellent Condition ",
  images: [
    "/images/app823_1.jpg",
    "/images/app823_2.jpg",
    "/images/app823_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "WHIR-FRENCH-823",
  brand: "Whirlpool",
  rating: {
    value: 4.4,
    count: 204
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 824,
  name: "GE Profile 30\" Double Oven Range",
  price: 2499.99,
  category: "appliances",
  description: "Double Oven | Convection Cooking | 5-Burner Gas Cooktop | Air Fry | Wi-Fi Enabled | Stainless Steel | Used | Excellent Condition | Professional Grade ",
  images: [
    "/images/app824_1.jpg",
    "/images/app824_2.jpg",
    "/images/app824_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "GE-PDBS730-824",
  brand: "GE Profile",
  rating: {
    value: 4.8,
    count: 118
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 825,
  name: "Bosch 800 Series Dishwasher",
  price: 1299.99,
  category: "appliances",
  description: "44 dBA | CrystalDry Technology | 3rd Rack | FlexSpace Tines | InfoLight | Stainless Steel Interior | Fingerprint-Resistant Stainless | Used | Excellent Condition ",
  images: [
    "/images/app825_1.jpg",
    "/images/app825_2.jpg",
    "/images/app825_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "BOS-800DW-825",
  brand: "Bosch",
  rating: {
    value: 4.9,
    count: 245
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 826,
  name: "Samsung Bespoke Counter Depth Refrigerator",
  price: 2899.99,
  category: "appliances",
  description: "4-Door Design | 23 Cu. Ft. | Beverage Center | Twin Cooling Plus | Family Hub | White Glass Finish | Used | Like New Condition ",
  images: [
    "/images/app826_1.jpg",
    "/images/app826_2.jpg",
    "/images/app826_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "SAM-BESPOKE-826",
  brand: "Samsung",
  rating: {
    value: 4.6,
    count: 97
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 827,
  name: "Maytag Top Load Washer",
  price: 899.99,
  category: "appliances",
  description: "5.2 Cu. Ft. Capacity | Deep Fill Option | PowerWash Agitator | Stainless Steel Wash Basket | White | Used | Excellent Condition | Heavy Duty ",
  images: [
    "/images/app827_1.jpg",
    "/images/app827_2.jpg",
    "/images/app827_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "MAY-TOPWASH-827",
  brand: "Maytag",
  rating: {
    value: 4.5,
    count: 187
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 828,
  name: "Maytag Electric Dryer",
  price: 799.99,
  category: "appliances",
  description: "7.0 Cu. Ft. Capacity | Advanced Moisture Sensing | Steam Option | Wrinkle Prevent | White | Used | Excellent Condition | Matching Washer Available ",
  images: [
    "/images/app828_1.jpg",
    "/images/app828_2.jpg",
    "/images/app828_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "MAY-DRY7-828",
  brand: "Maytag",
  rating: {
    value: 4.5,
    count: 156
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 829,
  name: "Frigidaire Gallery Side-by-Side Refrigerator",
  price: 1599.99,
  category: "appliances",
  description: "22 Cu. Ft. Capacity | EvenTemp Cooling System | SpillGuard Shelves | External Water & Ice Dispenser | Stainless Steel | Used | Good Condition ",
  images: [
    "/images/app829_1.jpg",
    "/images/app829_2.jpg",
    "/images/app829_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "FRIG-GALLERY-829",
  brand: "Frigidaire",
  rating: {
    value: 4.3,
    count: 112
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 830,
  name: "Whirlpool Stacked Washer Dryer Laundry Center",
  price: 1499.99,
  category: "appliances",
  description: "All-in-One Unit | Electric | 2.5 Cu. Ft. Washer / 5.5 Cu. Ft. Dryer | Compact Design | Ideal for Apartments | White | Used | Excellent Condition ",
  images: [
    "/images/app830_1.jpg",
    "/images/app830_2.jpg",
    "/images/app830_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "WHIR-STACK-830",
  brand: "Whirlpool",
  rating: {
    value: 4.2,
    count: 78
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 831,
  name: "GE Cafe 30\" Smart Slide-In Gas Range",
  price: 2699.99,
  category: "appliances",
  description: "Convection Oven | 5 Sealed Burners | Air Fry | Wi-Fi Enabled | Professional Knobs | Matte White Finish | Used | Excellent Condition ",
  images: [
    "/images/app831_1.jpg",
    "/images/app831_2.jpg",
    "/images/app831_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "GE-CAFE-GAS-831",
  brand: "GE Cafe",
  rating: {
    value: 4.8,
    count: 92
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 832,
  name: "KitchenAid Built-In Double Wall Oven",
  price: 2899.99,
  category: "appliances",
  description: "Electric | Convection | Even-Heat True Convection | Precision Cooking System | Steam Bake | Stainless Steel | Used | Excellent Condition ",
  images: [
    "/images/app832_1.jpg",
    "/images/app832_2.jpg",
    "/images/app832_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "KA-DBLOVEN-832",
  brand: "KitchenAid",
  rating: {
    value: 4.7,
    count: 67
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 833,
  name: "Samsung Bespoke Induction Range",
  price: 1799.99,
  category: "appliances",
  description: "30 inches | Wi-Fi Enabled | Air Fry | Virtual Flame | Flexible 5th Element | White Glass Finish | Used | Excellent Condition ",
  images: [
    "/images/app833_1.jpg",
    "/images/app833_2.jpg",
    "/images/app833_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "SAM-INDUCT-833",
  brand: "Samsung",
  rating: {
    value: 4.5,
    count: 83
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 834,
  name: "LG InstaView Door-in-Door Refrigerator",
  price: 2999.99,
  category: "appliances",
  description: "27 Cu. Ft. | Knock Twice to See Inside | Craft Ice Maker | Linear Cooling | Water & Ice Dispenser | Stainless Steel | Used | Excellent Condition ",
  images: [
    "/images/app834_1.jpg",
    "/images/app834_2.jpg",
    "/images/app834_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "LG-INSTAVIEW-834",
  brand: "LG",
  rating: {
    value: 4.8,
    count: 134
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 835,
  name: "Speed Queen Top Load Washer",
  price: 1299.99,
  category: "appliances",
  description: "3.2 Cu. Ft. Capacity | Commercial Grade | TC5 Model | Agitator | Stainless Steel Tub | White | Used | Excellent Condition | Known for Durability ",
  images: [
    "/images/app835_1.jpg",
    "/images/app835_2.jpg",
    "/images/app835_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "SQ-TC5-835",
  brand: "Speed Queen",
  rating: {
    value: 4.9,
    count: 278
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 836,
  name: "Speed Queen Electric Dryer",
  price: 1099.99,
  category: "appliances",
  description: "7.0 Cu. Ft. Capacity | Commercial Grade | Matching TR5 Model | Moisture Sensor | White | Used | Excellent Condition | Built to Last ",
  images: [
    "/images/app836_1.jpg",
    "/images/app836_2.jpg",
    "/images/app836_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "SQ-TR5-836",
  brand: "Speed Queen",
  rating: {
    value: 4.9,
    count: 212
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 837,
  name: "Blomberg 24 inches Built-In Dishwasher",
  price: 999.99,
  category: "appliances",
  description: "Panel Ready | 44 dBA | VarioSpeed | 3rd Rack | Stainless Steel Interior | European Design | Used | Excellent Condition ",
  images: [
    "/images/app837_1.jpg",
    "/images/app837_2.jpg",
    "/images/app837_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "BLO-DW24-837",
  brand: "Blomberg",
  rating: {
    value: 4.6,
    count: 56
  },
  reviews: [
    {
      rating: 4
    }
  ]
},
{
  id: 838,
  name: "Cove Built-In Dishwasher",
  price: 1599.99,
  category: "appliances",
  description: "39 dBA | Ultra Quiet | 3rd Rack | Zone Wash | Stainless Steel | PrintProof Finish | Used | Excellent Condition | Luxury Grade ",
  images: [
    "/images/app838_1.jpg",
    "/images/app838_2.jpg",
    "/images/app838_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "COVE-DW-838",
  brand: "Cove",
  rating: {
    value: 4.8,
    count: 45
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 839,
  name: "Sub-Zero 36" Built-In Refrigerator",
  price: 8999.99,
  category: "appliances",
  description: "Integrated Design | Dual Refrigeration | Air Purification | Stainless Steel | Panel Ready | Used | Excellent Condition | Professional Grade ",
  images: [
    "/images/app839_1.jpg",
    "/images/app839_2.jpg",
    "/images/app839_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "SUBZ-36BI-839",
  brand: "Sub-Zero",
  rating: {
    value: 4.9,
    count: 38
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 840,
  name: "Wolf 30" Dual Fuel Range",
  price: 6499.99,
  category: "appliances",
  description: "Gas Cooktop | Electric Convection Oven | Dual Stacked Burners | Infrared Griddle | Stainless Steel | Used | Excellent Condition | Restaurant Grade ",
  images: [
    "/images/app840_1.jpg",
    "/images/app840_2.jpg",
    "/images/app840_3.jpg"
  ],
  highDemand: true,
  sold: false,
  quantity: 1,
  sku: "WOLF-DF304-840",
  brand: "Wolf",
  rating: {
    value: 4.9,
    count: 52
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 841,
  name: "Miele 30" Speed Oven",
  price: 3299.99,
  category: "appliances",
  description: "Built-In Combination Oven | Convection | Microwave | Brown & Crisp Function | Stainless Steel | Used | Excellent Condition ",
  images: [
    "/images/app841_1.jpg",
    "/images/app841_2.jpg",
    "/images/app841_3.jpg"
  ],
  highDemand: false,
  sold: false,
  quantity: 1,
  sku: "MIE-SPEEDOVEN-841",
  brand: "Miele",
  rating: {
    value: 4.8,
    count: 41
  },
  reviews: [
    {
      rating: 5
    }
  ]
},
{
  id: 842,
  name: "Asko 24" Professional Dishwasher",
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
  name: "Fisher & Paykel 36" French Door Refrigerator",
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
  name: "Viking 5 Series 30" Gas Range",
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
  name: "Jenn-Air 30" Down-Draft Ventilation Range",
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
    id: 853,
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
    id: 854,
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
    id: 856,
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
    id: 857,
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
    id: 859,
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
    id: 860,
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
    id: 861,
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
