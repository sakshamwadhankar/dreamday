/* ============================================================
   Dream Day Events — Premium Luxury Event Website
   Main JavaScript Module
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ──────────────────────────────────────────────────────────
  // 1. DATA SEEDING
  // ──────────────────────────────────────────────────────────
  const seedDefaultData = () => {
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

  seedDefaultData();

  const mediaList = JSON.parse(localStorage.getItem('dreamday_media')) || [];

  // ──────────────────────────────────────────────────────────
  // 2. PRELOADER
  // ──────────────────────────────────────────────────────────
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 1200);
  }

  // ──────────────────────────────────────────────────────────
  // 3. NAVBAR SCROLL EFFECT & SCROLL PROGRESS
  // ──────────────────────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scroll-progress');
  const isHomepage = !!document.getElementById('home');

  const updateScrollEffects = () => {
    // 1. Scrolled State
    if (navbar) {
      if (window.scrollY > 50 || !isHomepage) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // 2. Progress Calculations (Global Scroll %)
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

    // 3. Top Progress Bar
    if (scrollProgress) {
      scrollProgress.style.width = scrolled + "%";
    }

    // 4. Left & Right Golden Side Lines
    const leftLine = document.getElementById('scroll-line-left');
    const rightLine = document.getElementById('scroll-line-right');
    if (leftLine) leftLine.style.height = scrolled + "%";
    if (rightLine) rightLine.style.height = scrolled + "%";
  };

  window.addEventListener('scroll', updateScrollEffects);
  updateScrollEffects();

  // ──────────────────────────────────────────────────────────
  // 4. MOBILE MENU TOGGLE
  // ──────────────────────────────────────────────────────────
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close mobile menu when nav links are clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // ──────────────────────────────────────────────────────────
  // 5. SMOOTH SCROLLING FOR HASH LINKS
  // ──────────────────────────────────────────────────────────
  const smoothScrollTo = (targetId) => {
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect;
      const offsetPosition = targetPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  document.querySelectorAll('a[href^="#"], a[href^="index.html#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      let href = this.getAttribute('href');
      let hash = href.includes('#') ? '#' + href.split('#')[1] : null;
      
      if (hash) {
        if (isHomepage) {
          e.preventDefault();
          smoothScrollTo(hash);
          if (history.pushState) {
            history.pushState(null, null, hash);
          }
        }
      }
    });
  });

  // Handle hash scrolling on page load
  if (window.location.hash && isHomepage) {
    setTimeout(() => {
      smoothScrollTo(window.location.hash);
    }, 150);
  }

  // ──────────────────────────────────────────────────────────
  // 6. SCROLL ANIMATIONS TRIGGER
  // ──────────────────────────────────────────────────────────
  const animatedElements = document.querySelectorAll('[data-animate]');
  if (animatedElements.length > 0) {
    // Apply custom delay and duration values if specified in datasets
    animatedElements.forEach(el => {
      if (el.dataset.delay) {
        el.style.transitionDelay = el.dataset.delay;
      }
      if (el.dataset.duration) {
        el.style.transitionDuration = el.dataset.duration;
      }
    });

    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            animObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    animatedElements.forEach(el => animObserver.observe(el));
  }

  // ──────────────────────────────────────────────────────────
  // 7. ACTIVE NAV LINK HIGHLIGHTING
  // ──────────────────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  if (sections.length > 0 && isHomepage) {
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            document.querySelectorAll('#nav-menu .nav-link').forEach(link => {
              const href = link.getAttribute('href');
              if (href === '#' + id || href === 'index.html#' + id || (id === 'home' && href === '#')) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px 0px 0px' }
    );
    sections.forEach(sec => activeObserver.observe(sec));
  }

  // ──────────────────────────────────────────────────────────
  // 8. THEME TOGGLE
  // ──────────────────────────────────────────────────────────
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    // Check local storage
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-mode');
      const icon = themeToggle.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-sun';
    }

    themeToggle.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      const icon = themeToggle.querySelector('i');
      if (icon) {
        icon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      }
    });
  }

  // ──────────────────────────────────────────────────────────
  // 9. BACK TO TOP BUTTON
  // ──────────────────────────────────────────────────────────
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ──────────────────────────────────────────────────────────
  // 10. ABOUT SLIDESHOW (1-Second Cycling)
  // ──────────────────────────────────────────────────────────
  const aboutSlideshow = document.querySelector('.about-slideshow');
  if (aboutSlideshow) {
    const images = aboutSlideshow.querySelectorAll('img');
    let activeIdx = 0;
    if (images.length > 1) {
      setInterval(() => {
        images[activeIdx].classList.remove('active');
        activeIdx = (activeIdx + 1) % images.length;
        images[activeIdx].classList.add('active');
      }, 1000);
    }
  }

  // ──────────────────────────────────────────────────────────
  // 11. STATS COUNTER ANIMATION
  // ──────────────────────────────────────────────────────────
  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    let countTriggered = false;
    const animateValue = (element, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start) + (element.dataset.suffix || '');
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countTriggered) {
          countTriggered = true;
          document.querySelectorAll('.stat-num').forEach(numEl => {
            const target = parseInt(numEl.dataset.target) || 0;
            animateValue(numEl, 0, target, 2000);
          });
        }
      },
      { threshold: 0.1 }
    );
    statsObserver.observe(statsSection);
  }

  // ──────────────────────────────────────────────────────────
  // 12. LIGHTBOX DIALOG (IMAGE / VIDEO)
  // ──────────────────────────────────────────────────────────
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = lightbox ? lightbox.querySelector('.lightbox-content') : null;
  const lightboxClose = document.getElementById('lightbox-close');

  const openLightbox = (type, src) => {
    if (!lightbox || !lightboxContent) return;
    
    // Clear previous media
    const prevMedia = lightboxContent.querySelector('img, video');
    if (prevMedia) prevMedia.remove();

    if (type === 'video') {
      const video = document.createElement('video');
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      video.style.width = '100%';
      video.style.maxHeight = '75vh';
      video.style.border = '2px solid var(--gold-primary)';
      video.style.borderRadius = '8px';
      video.style.display = 'block';
      lightboxContent.appendChild(video);
    } else {
      const img = document.createElement('img');
      img.src = src;
      img.id = 'lightbox-img';
      img.alt = 'Lightbox view';
      lightboxContent.appendChild(img);
    }

    lightbox.classList.add('active');
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    // Stop video playback if any
    const video = lightbox.querySelector('video');
    if (video) video.pause();
  };

  if (lightbox) {
    lightbox.addEventListener('click', closeLightbox);
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    
    // Prevent closing when clicking content card
    lightboxContent.addEventListener('click', (e) => e.stopPropagation());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // ──────────────────────────────────────────────────────────
  // 13. RECENT CREATIONS GRID (HOME PAGE)
  // ──────────────────────────────────────────────────────────
  const galleryGrid = document.getElementById('dynamic-gallery-grid');
  const galleryFilterBtns = document.querySelectorAll('.gallery-filters .filter-btn');

  if (galleryGrid) {
    const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
    
    galleryFilterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        galleryFilterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        galleryItems.forEach(item => {
          if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
          openLightbox('photo', img.src);
        }
      });
    });
  }

  // ──────────────────────────────────────────────────────────
  // 14. VIDEO TRIO CYCLING PLAYER (HOME PAGE)
  // ──────────────────────────────────────────────────────────
  const videoDetails = {
    1: { title: "Wedding Entrance Highlights", desc: "A cinematic look at a luxury wedding entry setup with gold pillars and floral arches.", tag: "Wedding Teaser", poster: "images/event-3.jpg?v=9", src: "images/video-1.mp4" },
    2: { title: "Grand Reception Decor Reel", desc: "Walkthrough showing the detailed lighting, chandeliers, and setup of a royal stage.", tag: "Stage Walkthrough", poster: "images/event-2.jpg?v=9", src: "images/video-2.mp4" },
    3: { title: "Vibrant Haldi Ceremony Clip", desc: "A fun compilation clip of our signature traditional marigold haldi setups and props.", tag: "Haldi Highlight", poster: "images/event-5.jpg?v=9", src: "images/video-3.mp4" },
    4: { title: "Catering Buffet Setup Video", desc: "Professional walkthrough of our premium gourmet food spread.", tag: "Catering Setup", poster: "images/event-4.jpg?v=9", src: "images/video-4.mp4" },
    5: { title: "Bespoke Floral Work Highlights", desc: "Detailed close-up on the handcrafted fresh floral decorations.", tag: "Floral Close-up", poster: "images/event-21.jpg?v=9", src: "images/video-5.mp4" },
    6: { title: "Lawn Celebration Tour", desc: "Drone-style walkthrough of a royal outdoor wedding lawn setup with light pillars.", tag: "Lawn Tour", poster: "images/event-3.jpg?v=9", src: "images/video-6.mp4" },
    7: { title: "Bride & Groom Entrance Setup", desc: "A summary clip showing guest entry pathway lighting and structural decorations.", tag: "Entrance Setup", poster: "images/event-2.jpg?v=9", src: "images/video-7.mp4" },
    8: { title: "Traditional Marigold Swing Tour", desc: "Beautiful wooden swing setup for the haldi ceremony in action with marigolds.", tag: "Swing Decor", poster: "images/event-8.jpg?v=9", src: "images/video-8.mp4" },
    9: { title: "Banquet Stage Decoration", desc: "Grand wedding decoration setup timelapse coordinated by Mr. Ayush Kale.", tag: "Stage Timelapse", poster: "images/event-21.jpg?v=9", src: "images/video-9.mp4" },
    10: { title: "Haldi Ceremony Highlights", desc: "Fun clips showing traditional music, yellow fabrics, and decor setups.", tag: "Haldi Reels", poster: "images/event-7.jpg?v=9", src: "images/video-10.mp4" },
    11: { title: "Haldi Ceremony of Eram", desc: "A beautiful cinematic reel of Eram's vibrant Haldi celebration, featuring bright pink drapes.", tag: "Haldi Highlight", poster: "images/event-22.jpg?v=9", src: "images/video-11.mp4" },
    12: { title: "Saffron Mandap Cinematic", desc: "Bespoke saffron wedding mandap floral arrangements and candle decor highlights.", tag: "Mandap Cinematic", poster: "images/event-9.jpg?v=9", src: "images/video-12.mp4" }
  };

  const trioLists = {
    1: [1, 4, 7, 10],
    2: [2, 5, 8, 11],
    3: [3, 6, 9, 12]
  };

  const setupTrioPlayer = (playerIdx) => {
    const cardEl = document.getElementById(`trio-player-${playerIdx}`);
    const videoEl = cardEl ? cardEl.querySelector('video') : null;
    const list = trioLists[playerIdx];

    if (cardEl && videoEl) {
      videoEl.dataset.num = list[0];
      
      const playVideo = () => {
        videoEl.play().catch(()=>{});
      };
      
      // Auto play when loaded or already ready
      videoEl.addEventListener('canplay', playVideo);
      playVideo();

      videoEl.addEventListener('ended', () => {
        let currNum = parseInt(videoEl.dataset.num);
        let currIdx = list.indexOf(currNum);
        let nextIdx = (currIdx + 1) % list.length;
        let nextNum = list[nextIdx];
        let detail = videoDetails[nextNum];

        cardEl.classList.add('video-fade-out');
        
        setTimeout(() => {
          videoEl.dataset.num = nextNum;
          videoEl.src = detail.src;
          videoEl.poster = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
          videoEl.style.backgroundImage = `url('${detail.poster}')`;
          
          const badge = cardEl.querySelector('.video-trio-badge');
          if (badge) badge.textContent = detail.tag;
          const title = cardEl.querySelector('.video-trio-overlay h3');
          if (title) title.textContent = detail.title;
          const desc = cardEl.querySelector('.video-trio-overlay p');
          if (desc) desc.textContent = detail.desc;

          videoEl.load();
          playVideo();
          cardEl.classList.remove('video-fade-out');
        }, 500);
      });
    }
  };

  if (document.getElementById('trio-player-1')) {
    setupTrioPlayer(1);
    setupTrioPlayer(2);
    setupTrioPlayer(3);
  }

  // ──────────────────────────────────────────────────────────
  // 15. CONTACT FORM SUBMISSION
  // ──────────────────────────────────────────────────────────
  const contactForm = document.getElementById('contact-form');
  const toastMsg = document.getElementById('toast-msg');
  const whatsappSubmitBtn = document.getElementById('whatsapp-submit-btn');

  const saveInquiry = (inquiryType, name, email, phone, eventType, date, venue, guestCount, budget, message) => {
    const inquiries = JSON.parse(localStorage.getItem('dreamday_inquiries')) || [];
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
    
    inquiries.push({
      timestamp: formattedDate,
      name: name,
      email: email,
      phone: phone,
      type: eventType,
      date: date,
      venue: venue || 'None',
      guestCount: guestCount || 'None',
      budget: budget || 'None',
      inquiryType: inquiryType,
      details: message || 'None'
    });
    localStorage.setItem('dreamday_inquiries', JSON.stringify(inquiries));
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;

      const eventTypeEl = document.getElementById('event-type');
      const eventType = eventTypeEl.value ? eventTypeEl.options[eventTypeEl.selectedIndex].text : '';

      const date = document.getElementById('date').value;
      const venue = document.getElementById('venue').value;
      const guestCount = document.getElementById('guest-count-form').value;

      const budgetEl = document.getElementById('budget');
      const budget = budgetEl.value ? budgetEl.options[budgetEl.selectedIndex].text : '';

      const message = document.getElementById('message').value;

      // Send data to Node.js backend
      fetch('http://localhost:3000/api/inquire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          eventType,
          date,
          message: `Venue: ${venue || 'None'}, Guests: ${guestCount || 'None'}, Budget: ${budget || 'None'}. Message: ${message || 'None'}`
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          saveInquiry("Inquiry Form", name, email, phone, eventType, date, venue, guestCount, budget, message);
          if (toastMsg) {
            toastMsg.classList.add('show');
            toastMsg.style.display = 'block';
            toastMsg.style.opacity = 1;
            setTimeout(() => {
              toastMsg.classList.remove('show');
              toastMsg.style.display = 'none';
              toastMsg.style.opacity = 0;
            }, 5000);
          }
          contactForm.reset();
        } else {
          alert("Server failed to save inquiry: " + data.message);
        }
      })
      .catch(err => {
        console.error("Backend offline. Saving locally instead:", err);
        // Fallback: save locally anyway so user doesn't lose data
        saveInquiry("Inquiry Form (Local Fallback)", name, email, phone, eventType, date, venue, guestCount, budget, message);
        if (toastMsg) {
          toastMsg.classList.add('show');
          toastMsg.style.display = 'block';
          toastMsg.style.opacity = 1;
          setTimeout(() => {
            toastMsg.classList.remove('show');
            toastMsg.style.display = 'none';
            toastMsg.style.opacity = 0;
          }, 5000);
        }
        contactForm.reset();
      });
    });

    if (whatsappSubmitBtn) {
      whatsappSubmitBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        
        const eventTypeEl = document.getElementById('event-type');
        const eventType = eventTypeEl.value ? eventTypeEl.options[eventTypeEl.selectedIndex].text : '';
        
        const date = document.getElementById('date').value;
        const venue = document.getElementById('venue').value;
        const guestCount = document.getElementById('guest-count-form').value;
        
        const budgetEl = document.getElementById('budget');
        const budget = budgetEl.value ? budgetEl.options[budgetEl.selectedIndex].text : '';
        
        const message = document.getElementById('message').value;

        if (!name || !email || !phone || !eventTypeEl.value || !date) {
          alert("Please fill in the required fields (Name, Email, Phone, Event Type, Date) to submit via WhatsApp.");
          return;
        }

        saveInquiry("Inquiry Form (WA)", name, email, phone, eventType, date, venue, guestCount, budget, `Inquired on WhatsApp. Details: ${message || 'None'}`);

        const textMessage = `*New Event Inquiry - Dream Day Events*\n` +
                            `--------------------------------------\n` +
                            `*Name:* ${name}\n` +
                            `*Email:* ${email}\n` +
                            `*Phone:* ${phone}\n` +
                            `*Event Type:* ${eventType}\n` +
                            `*Event Date:* ${date}\n` +
                            `*Event Venue:* ${venue ? venue : 'None provided'}\n` +
                            `*Guest Count:* ${guestCount ? guestCount : 'None provided'}\n` +
                            `*Budget Range:* ${budget ? budget : 'None provided'}\n` +
                            `*Details:* ${message ? message : 'None provided.'}`;

        window.open(`https://wa.me/918459398321?text=${encodeURIComponent(textMessage)}`, '_blank');
      });
    }
  }

  // ──────────────────────────────────────────────────────────
  // 16. DYNAMIC TESTIMONIALS SLIDER
  // ──────────────────────────────────────────────────────────
  const testimonialSlider = document.querySelector('.testimonials-slider');
  const sliderDotsContainer = document.getElementById('slider-dots');

  if (testimonialSlider) {
    const list = JSON.parse(localStorage.getItem('dreamday_testimonials')) || [];
    testimonialSlider.innerHTML = '';
    if (sliderDotsContainer) sliderDotsContainer.innerHTML = '';

    list.forEach((t, idx) => {
      // Create slide
      const slide = document.createElement('div');
      slide.className = `testimonial-slide ${idx === 0 ? 'active' : ''}`;
      
      let starsHtml = '';
      for (let i = 0; i < t.stars; i++) {
        starsHtml += '<i class="fa-solid fa-star"></i>';
      }

      slide.innerHTML = `
        <div class="testimonial-quote">"${t.quote}"</div>
        <div class="testimonial-rating">${starsHtml}</div>
        <div class="testimonial-client-wrapper">
          ${t.image ? `<img src="${t.image}" alt="${t.name}" class="testimonial-avatar">` : ''}
          <div class="testimonial-client">${t.name}</div>
          <div class="testimonial-event">${t.event}</div>
        </div>
      `;
      testimonialSlider.appendChild(slide);

      // Create dot
      if (sliderDotsContainer) {
        const dot = document.createElement('span');
        dot.className = `dot ${idx === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
          goToSlide(idx);
        });
        sliderDotsContainer.appendChild(dot);
      }
    });

    let activeSlideIdx = 0;
    const slides = testimonialSlider.querySelectorAll('.testimonial-slide');
    const dots = sliderDotsContainer ? sliderDotsContainer.querySelectorAll('.dot') : [];

    const goToSlide = (targetIdx) => {
      if (slides.length === 0) return;
      slides[activeSlideIdx].classList.remove('active');
      if (dots.length > 0) dots[activeSlideIdx].classList.remove('active');
      
      activeSlideIdx = targetIdx;
      
      slides[activeSlideIdx].classList.add('active');
      if (dots.length > 0) dots[activeSlideIdx].classList.add('active');
    };

    // Auto rotate every 4 seconds
    if (slides.length > 1) {
      setInterval(() => {
        goToSlide((activeSlideIdx + 1) % slides.length);
      }, 4000);
    }
  }

  // ──────────────────────────────────────────────────────────
  // 17. PORTFOLIO PAGE GRID FILTER & LIGHTBOX
  // ──────────────────────────────────────────────────────────
  const portfolioGrid = document.getElementById('dynamic-portfolio-grid');
  const portfolioFilters = document.querySelectorAll('.portfolio-section .gallery-filters .filter-btn');

  if (portfolioGrid) {
    const portfolioCards = portfolioGrid.querySelectorAll('.portfolio-card');
    
    portfolioFilters.forEach(btn => {
      btn.addEventListener('click', function() {
        portfolioFilters.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        portfolioCards.forEach(card => {
          const cardType = card.dataset.type;
          const cardCategory = card.dataset.category;
          
          if (filter === 'all') {
            card.style.display = 'block';
          } else if (filter === 'video') {
            if (cardType === 'video') {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          } else {
            if (cardType === 'photo' && cardCategory === filter) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });

    portfolioCards.forEach(card => {
      card.addEventListener('click', () => {
        const type = card.dataset.type;
        const src = card.dataset.src;
        if (src) {
          openLightbox(type, type === 'video' ? src : src + '?v=9');
        }
      });
    });
  }

  // ──────────────────────────────────────────────────────────
  // 18. VIDEOS & PORTFOLIO HOVER-TO-PLAY
  // ──────────────────────────────────────────────────────────
  const videoCards = document.querySelectorAll('.video-grid .video-card, .portfolio-card[data-type="video"]');
  if (videoCards.length > 0) {
    videoCards.forEach(card => {
      const video = card.querySelector('video');
      if (video) {
        card.addEventListener('mouseenter', () => {
          video.play().catch(err => {
            console.log("Autoplay prevented on hover:", err);
          });
        });

        card.addEventListener('mouseleave', () => {
          video.pause();
        });
      }
    });
  }

  // ──────────────────────────────────────────────────────────
  // 19. CUSTOM PACKAGE ESTIMATOR (PACKAGES PAGE)
  // ──────────────────────────────────────────────────────────
  const estimatorSection = document.querySelector('.estimator-section');
  if (estimatorSection) {
    const checkboxes = estimatorSection.querySelectorAll('.estimator-item');
    const guestInput = document.getElementById('guest-count');
    const receiptList = document.getElementById('receipt-list');
    const receiptTotal = document.getElementById('receipt-total');
    const whatsappEstimateBtn = estimatorSection.querySelector('.receipt-footer button');

    const serviceDetails = {
      royalStage: { name: "Royal Stage Backdrop Setup", val: 80000, key: 'royalStage' },
      entranceArch: { name: "Luxury Entrance Arch Decor", val: 30000, key: 'entranceArch' },
      saffronMandap: { name: "Traditional Saffron Mandap Setup", val: 50000, key: 'saffronMandap' },
      haldiSwing: { name: "Haldi Ceremonial Swing & Props", val: 20000, key: 'haldiSwing' },
      ledWall: { name: "High-Def LED Stage Wall Display", val: 40000, key: 'ledWall' },
      ambientLight: { name: "Venue Ambient Uplighting & Truss", val: 25000, key: 'ambientLight' },
      cateringToggle: { name: "Premium Gourmet Catering", val: 800, key: 'cateringToggle' }
    };

    const calculateEstimate = () => {
      let total = 0;
      let selectedItems = [];
      const guests = guestInput ? Math.max(50, parseInt(guestInput.value) || 50) : 150;

      checkboxes.forEach(chk => {
        const key = chk.id || chk.dataset.key;
        if (chk.checked && serviceDetails[key]) {
          const detail = serviceDetails[key];
          if (key === 'cateringToggle') {
            const itemTotal = detail.val * guests;
            total += itemTotal;
            selectedItems.push({
              name: `${detail.name} (${guests} Guests)`,
              price: itemTotal
            });
          } else {
            total += detail.val;
            selectedItems.push({
              name: detail.name,
              price: detail.val
            });
          }
        }
      });

      // Update receipt UI
      if (receiptList) {
        receiptList.innerHTML = '';
        selectedItems.forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = `
            <span>${item.name}</span>
            <span>₹${item.price.toLocaleString('en-IN')}</span>
          `;
          receiptList.appendChild(li);
        });
      }

      if (receiptTotal) {
        receiptTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
      }

      return { total, selectedItems };
    };

    // Listeners
    checkboxes.forEach(chk => {
      chk.addEventListener('change', function() {
        const key = this.id || this.dataset.key;
        if (key === 'cateringToggle') {
          const guestInputWrapper = estimatorSection.querySelector('.catering-guests-input');
          if (guestInputWrapper) {
            guestInputWrapper.style.display = this.checked ? 'block' : 'none';
          }
        }
        calculateEstimate();
      });
    });

    if (guestInput) {
      guestInput.addEventListener('input', calculateEstimate);
      guestInput.addEventListener('blur', function() {
        if (parseInt(this.value) < 50) {
          this.value = 50;
          calculateEstimate();
        }
      });
    }

    if (whatsappEstimateBtn) {
      whatsappEstimateBtn.addEventListener('click', () => {
        const { total, selectedItems } = calculateEstimate();
        const lines = selectedItems.map(item => `- ${item.name}: ₹${item.price.toLocaleString('en-IN')}`);

        const textMessage = `*Dream Day Events - Custom Package Estimate*\n` +
                            `--------------------------------------\n` +
                            `*Selected Services:*\n` + lines.join('\n') + `\n` +
                            `--------------------------------------\n` +
                            `*Grand Total Estimate:* ₹${total.toLocaleString('en-IN')}\n\n` +
                            `Hi! I designed this custom package estimate on your website. I would like to discuss booking it.`;

        // Save enquiry to local storage
        const inquiries = JSON.parse(localStorage.getItem('dreamday_inquiries')) || [];
        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
        
        inquiries.push({
          timestamp: formattedDate,
          name: "Estimator Client (Website)",
          email: "Estimator Client",
          phone: "+91 84593 98321",
          type: "Custom Package Estimate",
          inquiryType: "WhatsApp Estimate",
          details: `Custom estimate generated: ${lines.join(' | ')}. Total: ₹${total.toLocaleString('en-IN')}.`
        });
        localStorage.setItem('dreamday_inquiries', JSON.stringify(inquiries));

        window.open(`https://wa.me/918459398321?text=${encodeURIComponent(textMessage)}`, '_blank');
      });
    }

    // Initial run
    calculateEstimate();
  }

  // ──────────────────────────────────────────────────────────
  // 20. CUSTOM CURSOR
  // ──────────────────────────────────────────────────────────
  const cursorDot = document.getElementById('cursor-dot');
  const cursorOutline = document.getElementById('cursor-outline');

  if (cursorDot && cursorOutline) {
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.opacity = '1';
      cursorOutline.style.opacity = '1';
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    };

    const onMouseLeave = () => {
      cursorDot.style.opacity = '0';
      cursorOutline.style.opacity = '0';
    };

    const updateCursorOutline = () => {
      const speed = 0.15;
      outlineX += (mouseX - outlineX) * speed;
      outlineY += (mouseY - outlineY) * speed;
      
      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;
      
      requestAnimationFrame(updateCursorOutline);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    requestAnimationFrame(updateCursorOutline);

    // Dynamic Hover classes
    const addHover = () => document.body.classList.add('cursor-hover');
    const removeHover = () => document.body.classList.remove('cursor-hover');

    const setupHoverListeners = () => {
      const hoverTargets = document.querySelectorAll(
        'a, button, .filter-btn, .gallery-item, .portfolio-card, .service-card, input, textarea, select, .social-icon, .whatsapp-cta, .back-to-top, .video-trio-card, .stat-item'
      );
      hoverTargets.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    };

    setupHoverListeners();

    // Use a mutation observer to attach listeners to dynamically created elements
    const observer = new MutationObserver(setupHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // ──────────────────────────────────────────────────────────
  // 21. BEFORE & AFTER TRANSFORMATIONS SLIDERS
  // ──────────────────────────────────────────────────────────
  const setupBeforeAfterSlider = (containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const afterImg = container.querySelector('.after-img');
    const sliderBar = container.querySelector('.ba-slider-bar');
    const sliderBtn = container.querySelector('.ba-slider-button');

    const updateSlider = (clientX) => {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      let percent = (x / rect.width) * 100;
      
      if (percent < 0) percent = 0;
      if (percent > 100) percent = 100;

      afterImg.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
      sliderBar.style.left = `${percent}%`;
      sliderBtn.style.left = `${percent}%`;
    };

    const onMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updateSlider(clientX);
    };

    container.addEventListener('mousemove', onMove);
    container.addEventListener('touchmove', onMove, { passive: true });
    
    // Trigger instantly on click
    container.addEventListener('mousedown', onMove);
  };

  setupBeforeAfterSlider('ba-hall');
  setupBeforeAfterSlider('ba-lawn');

  // ──────────────────────────────────────────────────────────
  // 22. EXIT INTENT POPUP MODAL
  // ──────────────────────────────────────────────────────────
  const exitModal = document.getElementById('exit-modal');
  const exitClose = document.getElementById('exit-modal-close');
  const exitForm = document.getElementById('exit-modal-form');

  if (exitModal) {
    const showExitModal = () => {
      if (!sessionStorage.getItem('exitModalShown')) {
        exitModal.classList.add('active');
        sessionStorage.setItem('exitModalShown', 'true');
      }
    };

    // Trigger when cursor leaves the top of the viewport
    document.addEventListener('mouseleave', (e) => {
      if (e.clientY < 20) {
        showExitModal();
      }
    });

    if (exitClose) {
      exitClose.addEventListener('click', () => {
        exitModal.classList.remove('active');
      });
    }

    exitModal.addEventListener('click', (e) => {
      if (e.target === exitModal) {
        exitModal.classList.remove('active');
      }
    });

    if (exitForm) {
      exitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('exit-name').value;
        const phone = document.getElementById('exit-phone').value;

        // Save exit intent lead in inquiries
        const inquiries = JSON.parse(localStorage.getItem('dreamday_inquiries')) || [];
        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
        
        inquiries.push({
          timestamp: formattedDate,
          name: name,
          email: 'Exit Consultation',
          phone: phone,
          type: 'Free Consultation Request',
          inquiryType: 'Exit Intent Form',
          details: 'User requested free consultation via exit intent popup.'
        });
        localStorage.setItem('dreamday_inquiries', JSON.stringify(inquiries));

        // Format WhatsApp template
        const textMessage = `*Free Consultation Request - Dream Day Events*\n` +
                            `--------------------------------------\n` +
                            `*Name:* ${name}\n` +
                            `*Phone:* ${phone}\n` +
                            `*Request:* Free Consultation Layout & Budget Design`;

        exitModal.classList.remove('active');
        window.open(`https://wa.me/918459398321?text=${encodeURIComponent(textMessage)}`, '_blank');
        exitForm.reset();
      });
    }
  }

  // ──────────────────────────────────────────────────────────
  // 23. HERO SECTION BACKGROUND VIDEO PLAYLIST
  // ──────────────────────────────────────────────────────────
  const heroVideo = document.getElementById('hero-bg-video');
  if (heroVideo) {
    const playlist = [
      "images/video-2.mp4", // Reception stage walkthrough (High Quality)
      "images/video-4.mp4", // Gourmet catering buffet setup (High Quality)
      "images/video-1.mp4"  // Wedding entrance walkthrough (High Quality)
    ];
    let currentVideoIdx = 0;

    heroVideo.addEventListener('ended', () => {
      currentVideoIdx = (currentVideoIdx + 1) % playlist.length;
      heroVideo.src = playlist[currentVideoIdx];
      heroVideo.load();
      heroVideo.play().catch(err => {
        console.log("Error playing next background video:", err);
      });
    });
  }


  // ==========================================================================
  // SERVICES DETAIL MODAL DATA & HANDLERS
  // ==========================================================================
  const servicesData = {
    "wedding-decor": {
      title: "Wedding Decor",
      badge: "Most Popular",
      price: "Price Range: ₹4,0,000 - ₹25,0,000",
      desc: "Transform your wedding venue into a royal palace. Our grand stages, mandaps, entry tunnels, and floral installations are customized from scratch by our design team in Pune.",
      images: ["images/wedding-stage-green.jpg", "images/wedding-red.jpg", "images/wedding-red-stage.jpg"],
      faqs: [
        { q: "How early should we book the decor?", a: "We recommend booking 3-6 months in advance to reserve dates during high wedding seasons." },
        { q: "Do you offer custom themes?", a: "Yes. Every wedding stage is custom designed, including 3D virtual mockups before execution." }
      ]
    },
    "haldi-mehndi": {
      title: "Haldi & Mehndi Setup",
      badge: "Traditional Choice",
      price: "Price Range: ₹1,50,000 - ₹5,00,000",
      desc: "Bright, colorful, and highly interactive setups. We combine silk drapes, swings, fresh marigolds, brass vessels, and sangeet sound setups to create a festive atmosphere.",
      images: ["images/haldi-yellow.jpg", "images/haldi-green.jpg", "images/haldi-red.jpg"],
      faqs: [
        { q: "Are traditional swings and seatings included?", a: "Yes, swing canopies and guest floor cushions are fully included in all Haldi packages." },
        { q: "Can we use custom floral props?", a: "Yes, we create custom setups with dreamcatchers, cycle props, and floral frames." }
      ]
    },
    "reception-decor": {
      title: "Reception Decor",
      badge: "Modern Elegance",
      price: "Price Range: ₹3,0,000 - ₹12,0,000",
      desc: "Create an unforgettable evening with ultra-modern stage geometry, crystal chandeliers, luxury drape backdrops, ambient color washes, and elite seating lounges.",
      images: ["images/wedding-red.jpg", "images/blue-stage-new.jpg", "images/blue-stage.jpg"],
      faqs: [
        { q: "Can we sync the stage lighting with our entry?", a: "Yes, we integrate dynamic truss spotlights, beam lights, and fog machines for entries." },
        { q: "Do you supply LED wall backgrounds?", a: "Yes, high-definition LED walls for video loops are available as a package upgrade." }
      ]
    },
    "gourmet-catering": {
      title: "Gourmet Catering",
      badge: "Culinary Feast",
      price: "Price Range: ₹800 - ₹2,500 per plate",
      desc: "Delight your guests with multi-cuisine buffet layouts, live food counters, and custom menus. Prepared by elite chefs and served by professional, uniformed staff.",
      images: ["images/event-10.jpg", "images/event-11.jpg", "images/event-12.jpg"],
      faqs: [
        { q: "Do you offer live interactive food counters?", a: "Yes. We offer hot jalebi, chat, pasta, mocktail bars, and custom live counters." },
        { q: "What hygiene protocols do you follow?", a: "Our staff is fully certified, wearing hairnets, gloves, and operating in sanitized setups." }
      ]
    },
    "themed-parties": {
      title: "Themed Parties & Birthdays",
      badge: "Celebration",
      price: "Price Range: ₹1,0,000 - ₹4,0,000",
      desc: "From magical children's birthday themes to sophisticated anniversary galas. We set up premium balloon decorations, custom arches, backdrop designs, and stages.",
      images: ["images/event-12.jpg", "images/event-15.jpg", "images/event-13.jpg"],
      faqs: [
        { q: "Can we have custom kids' cartoon themes?", a: "Yes, we do custom 3D cutouts, castle backdrops, and theme-based activities." },
        { q: "Is sound and music included?", a: "Yes, basic party sound and lighting can be bundled with party setups." }
      ]
    },
    "corporate-galas": {
      title: "Corporate Galas",
      badge: "Professional Elite",
      price: "Price Range: ₹2,00,000 - ₹8,00,000",
      desc: "Run seamless corporate events, awards nights, and conference stages. We handle professional branding backdrops, registration desks, centerpieces, and AV rigging.",
      images: ["images/event-14.jpg", "images/event-16.jpg", "images/event-20.jpg"],
      faqs: [
        { q: "Do you supply professional microphones and truss rigs?", a: "Yes. Elite wireless mics, podiums, truss rigs, and audio setups are fully covered." },
        { q: "Can you design custom photo booths for corporate branding?", a: "Yes, we construct brand-focused photo media walls and media backdrops." }
      ]
    },
    "photography-videography": {
      title: "Photography & Videography",
      badge: "Media Package",
      price: "Price Range: ₹1,50,000 - ₹6,00,000",
      desc: "Capture every detail and raw emotion. We provide professional wedding shoots, pre-wedding couple films, high-definition cinematic reels, and aerial drone coverage.",
      images: ["images/event-17.jpg", "images/event-19.jpg", "images/event-1.jpg"],
      faqs: [
        { q: "What is the delivery timeline for event photos?", a: "Teasers and highlight videos are delivered in 7 days; full digital galleries in 4-6 weeks." },
        { q: "Do you include a cinematic wedding film?", a: "Yes, our packages include a 3-5 minute high-energy highlight film and a longer documentary." }
      ]
    },
    "entertainment-music": {
      title: "Entertainment & Live Music",
      badge: "Artist Stage",
      price: "Price Range: ₹1,0,000 - ₹5,00,000",
      desc: "Set the perfect mood for your celebrations with live wedding bands, classical shehnai/sitar entries, elite DJs, sound setups, and curated celebrity artists.",
      images: ["images/event-18.jpg", "images/event-21.jpg", "images/event-23.jpg"],
      faqs: [
        { q: "Do you handle artist bookings and hospitality?", a: "Yes, we manage contract coordination, sound riders, and travel hospitality." },
        { q: "Can we request custom music lists?", a: "Yes. Our DJs and bands coordinate custom tracks for couple entries and sangeet playlists." }
      ]
    },
    "transport-logistics": {
      title: "Guest Transportation & Logistics",
      badge: "Logistics Elite",
      price: "Price Range: ₹1,0,000 - ₹3,50,000",
      desc: "Ensure seamless arrivals for out-of-town guests. We arrange premium sedan rentals, luxury coaches, airport pickups, hospitality helpdesks, and venue logistics.",
      images: ["images/event-22.jpg", "images/event-14.jpg", "images/event-10.jpg"],
      faqs: [
        { q: "Do you provide airport guest coordinates?", a: "Yes. We set up physical welcome desks at airport terminals and hotel lobbies." },
        { q: "Can we hire luxury vintage cars for couple entry?", a: "Yes, we source vintage convertibles, vintage luxury sedans, and custom horses." }
      ]
    },
    "floral-arrangements": {
      title: "Floral Arrangements",
      badge: "Bespoke Blooms",
      price: "Price Range: ₹50,000 - ₹3,00,000",
      desc: "Luxury fresh flower curations for home functions, mandap setups, centerpieces, and boutique accents. We coordinate exotic orchids, lilies, and premium roses.",
      images: ["images/event-9.jpg", "images/event-5.jpg", "images/event-6.jpg"],
      faqs: [
        { q: "Do you import exotic flowers?", a: "Yes. We source premium tulips, orchids, and hydrangeas based on request and season." },
        { q: "Can you handle standalone floral ceiling setups?", a: "Yes. We construct massive suspended floral ceilings and customized flower grids." }
      ]
    }
  };

  let currentCarouselIndex = 0;
  let modalCarouselImages = [];

  // Expose function globally
  window.openServiceDetailModal = function(serviceId) {
    const service = servicesData[serviceId];
    if (!service) return;
    
    // Set text elements
    document.getElementById('modal-service-badge').innerText = service.badge || 'Services';
    document.getElementById('modal-service-title').innerText = service.title;
    document.getElementById('modal-service-price').innerText = service.price || '';
    document.getElementById('modal-service-desc').innerHTML = service.desc;
    
    // Set pre-filled inquire link
    const inquireBtn = document.getElementById('modal-inquire-btn');
    inquireBtn.href = `inquire.html?service=${encodeURIComponent(service.title)}`;
    
    // Load FAQs
    const faqContainer = document.getElementById('modal-service-faqs');
    faqContainer.innerHTML = '';
    if (service.faqs && service.faqs.length > 0) {
      service.faqs.forEach(faq => {
        const item = document.createElement('div');
        item.className = 'faq-item-modal';
        item.innerHTML = `<h4>Q: ${faq.q}</h4><p>${faq.a}</p>`;
        faqContainer.appendChild(item);
      });
    }
    
    // Load Carousel Images
    const slidesContainer = document.getElementById('modal-carousel-slides');
    slidesContainer.innerHTML = '';
    modalCarouselImages = service.images || [];
    currentCarouselIndex = 0;
    slidesContainer.style.transform = `translateX(0)`;
    
    if (modalCarouselImages.length > 0) {
      modalCarouselImages.forEach(imgSrc => {
        const slide = document.createElement('div');
        slide.className = 'modal-carousel-slide';
        slide.innerHTML = `<img src="${imgSrc}" alt="${service.title} photo">`;
        slidesContainer.appendChild(slide);
      });
      // Show/hide controls
      const prevBtn = document.querySelector('.carousel-control.prev');
      const nextBtn = document.querySelector('.carousel-control.next');
      if (modalCarouselImages.length <= 1) {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
      } else {
        if (prevBtn) prevBtn.style.display = 'block';
        if (nextBtn) nextBtn.style.display = 'block';
      }
    }
    
    // Show Modal
    const modal = document.getElementById('service-modal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Disable page scroll
    }
  };

  window.closeServiceModal = function() {
    const modal = document.getElementById('service-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = ''; // Restore page scroll
    }
  };

  window.moveModalCarousel = function(direction) {
    if (modalCarouselImages.length <= 1) return;
    currentCarouselIndex = (currentCarouselIndex + direction + modalCarouselImages.length) % modalCarouselImages.length;
    const slidesContainer = document.getElementById('modal-carousel-slides');
    if (slidesContainer) {
      slidesContainer.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;
    }
  };

  // Close modal on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeServiceModal();
    }
  });

  // Pre-fill Event Type dropdown from URL parameter ?service=...
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service');
  if (serviceParam) {
    const selectEl = document.getElementById('event-type');
    if (selectEl) {
      const normalized = serviceParam.toLowerCase();
      let matchedVal = '';
      for (let i = 0; i < selectEl.options.length; i++) {
        const opt = selectEl.options[i];
        const optVal = opt.value.toLowerCase();
        const optText = opt.text.toLowerCase();
        
        if (normalized === optVal || normalized === optText || optText.includes(normalized) || normalized.includes(optVal)) {
          matchedVal = opt.value;
          break;
        }
      }
      if (matchedVal) {
        selectEl.value = matchedVal;
      }
    }
  }
});
