export const seedDefaultData = () => {
  const defaultPackages = [
    {
      title: "Royal Elite Wedding Stage",
      price: "1,50,000",
      period: "Starting",
      tag: "Premium Choice",
      features: [
        "Grand 40ft Stage Backdrop Setup",
        "Fresh and Silk Floral Arches",
        "Royal Maharaja Couch / Sofa Seating",
        "Walkway Red Carpet & Light Pillars",
        "Elegant Selfie Photo Booth Spot",
        "Custom 3D Monogram & Cold Pyro Entry",
        "Complete Ambient LED Venue Lighting"
      ]
    },
    {
      title: "Vibrant Shahnaz Haldi",
      price: "60,000",
      period: "Starting",
      tag: "Most Popular",
      features: [
        "Traditional Yellow/Pink Silk Draping",
        "Decorated Wooden swing Setup",
        "Cascading Heavy Marigold Garlands",
        "Brass Vessels & Ceremonial Urali Bowl",
        "Festive Guest Seating Cushions & Mats",
        "Sound System for Traditional Sangeet",
        "Haldi Photo backdrop Props"
      ]
    },
    {
      title: "Imperial Gala Stage",
      price: "1,20,000",
      period: "Starting",
      tag: "Corporate Elite",
      features: [
        "Modern Panel Staging & Matte Flooring",
        "High-Def LED Wall Backdrop Integration",
        "Professional Truss and Spotlight Rigs",
        "Elite VIP Seating Sofa Lounge Setup",
        "Registration Counter & Media Wall Decor",
        "Luxury Centerpieces for Banquet Tables",
        "Sound System & Wireless Podium Mics"
      ]
    },
    {
      title: "Signature Catering",
      price: "800",
      period: "Per Plate",
      tag: "Gourmet Feasts",
      features: [
        "Tailored Veg & Non-Veg Multi-Cuisine",
        "Luxury 5-Star Buffet Layout Presentation",
        "3 Live Food Counters (Chat, Pasta, etc.)",
        "Premium Mocktails & Welcome Drinks Bar",
        "Royal Dessert Display & Hot Jalebi Counter",
        "Professional Uniformed Service Staff",
        "Full Banquet Table Setting & Clean Cutlery"
      ]
    }
  ];

  const defaultTestimonials = [
    {
      name: "Priya & Rahul Sharma",
      event: "Wedding Setup",
      stars: 5,
      image: "images/client-1.png",
      quote: "Mr. Ayush Kale created a dream wedding stage that left our guests speechless! Absolute perfection in the floral arches and lighting."
    },
    {
      name: "Sneha Patil",
      event: "Haldi Ceremony",
      stars: 5,
      image: "images/client-3.png",
      quote: "The marigold swings and yellow drapes were perfect. Our traditional Haldi looked so beautiful in the photos. Thank you Dream Day Events!"
    },
    {
      name: "Vikram Deshmukh",
      event: "Corporate Gala",
      stars: 5,
      image: "images/client-2.png",
      quote: "High quality professional execution for our annual business awards night. The stage branding and AV lighting setup were top-notch."
    }
  ];

  const defaultMedia = [];
  const imageCategories = {
    1: 'haldi', 2: 'wedding', 3: 'wedding', 4: 'wedding', 5: 'haldi',
    6: 'haldi', 7: 'haldi', 8: 'haldi', 9: 'wedding', 10: 'corporate',
    11: 'corporate', 12: 'corporate', 13: 'wedding', 14: 'corporate', 15: 'wedding',
    16: 'corporate', 17: 'corporate', 18: 'corporate', 19: 'corporate', 20: 'wedding',
    21: 'wedding', 22: 'haldi', 23: 'wedding'
  };

  const imageTitles = {
    1: 'Emerald Dreamcatcher Haldi', 2: 'Royal Monogram Stage', 3: 'Royal White Arch Stage',
    4: 'Elysian Banquet Tablescape', 5: 'Vibrant Haldi Styling', 6: 'Traditional Yellow Haldi Backdrop',
    7: 'Traditional Saffron Haldi', 8: 'Outdoor Haldi Swing', 9: 'Saffron Mandap Layout',
    10: 'Gala Banquet Table Setup', 11: 'Elite Corporate Stage Setup', 12: 'Annual Business Award Night',
    13: 'Royal Pink Backdrop Stage', 14: 'Product Launch Backdrop', 15: 'Grand Floral Arch Stage',
    16: 'Shareholders Meeting Stage', 17: 'Corporate Branding Pavilion', 18: 'Executive VIP Lounge Area',
    19: 'Blue Theme Gala Banquet', 20: 'Bespoke Monogram Wedding Stage', 21: 'Elysian Crystal Stage',
    22: 'Symphony of Marigolds', 23: 'Royal Blue & White Stage'
  };

  for (let i = 1; i <= 23; i++) {
    defaultMedia.push({
      id: `photo-${i}`,
      type: 'photo',
      title: imageTitles[i],
      category: imageCategories[i],
      src: `images/event-${i}.jpg`,
      desc: 'Signature design setup delivered by Mr. Ayush Kale.'
    });
  }

  const videoTitles = [
    "Wedding Entrance Highlights", "Grand Reception Decor Reel", "Vibrant Haldi Ceremony Clip",
    "Catering Buffet Setup Video", "Borders Close-up Video", "Lawn Celebration Tour",
    "Bride & Groom Entrance Setup", "Traditional Marigold Swing Tour", "Banquet Stage Decoration",
    "Haldi Ceremony Highlights", "Haldi Ceremony of Eram", "Saffron Mandap Cinematic"
  ];
  
  const videoPosters = [
    "images/event-3.jpg", "images/event-2.jpg", "images/event-5.jpg", "images/event-4.jpg",
    "images/event-21.jpg", "images/event-3.jpg", "images/event-2.jpg", "images/event-8.jpg",
    "images/event-21.jpg", "images/event-7.jpg", "images/event-22.jpg", "images/event-9.jpg"
  ];

  for (let i = 1; i <= 12; i++) {
    defaultMedia.push({
      id: `video-${i}`,
      type: 'video',
      title: videoTitles[i - 1],
      category: i % 3 === 0 ? 'corporate' : (i % 2 === 0 ? 'wedding' : 'haldi'),
      src: `images/video-${i}.mp4`,
      poster: videoPosters[i - 1],
      desc: 'Cinematic video compilation of decorations and Feasts.'
    });
  }

  if (!localStorage.getItem('dreamday_packages')) {
    localStorage.setItem('dreamday_packages', JSON.stringify(defaultPackages));
  }
  const storedTestimonials = localStorage.getItem('dreamday_testimonials');
  if (!storedTestimonials || !storedTestimonials.includes('client-1.png')) {
    localStorage.setItem('dreamday_testimonials', JSON.stringify(defaultTestimonials));
  }
  const currentMedia = localStorage.getItem('dreamday_media');
  if (!currentMedia || currentMedia.includes('"/images/')) {
    localStorage.setItem('dreamday_media', JSON.stringify(defaultMedia));
  }
};
