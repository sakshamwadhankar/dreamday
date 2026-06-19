import React, { createContext, useContext, useState, useEffect } from 'react';
import { doc, getDoc, setDoc, onSnapshot, collection } from 'firebase/firestore';
import { db } from '../firebase';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

const defaultPackages = {
  royalStage: 80000,
  entranceArch: 30000,
  saffronMandap: 50000,
  haldiSwing: 20000,
  ledWall: 40000,
  ambientLight: 25000,
  cateringToggle: 800
};

const defaultGallery = [
  { id: 1, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-1.jpg?v=9', title: 'Emerald Dreamcatcher Haldi', type: 'haldi' },
  { id: 2, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-2.jpg?v=9', title: 'Royal Monogram Stage', type: 'wedding' },
  { id: 3, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-3.jpg?v=9', title: 'Royal White Arch Stage', type: 'wedding' },
  { id: 4, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-4.jpg?v=9', title: 'Elysian Banquet Tablescape', type: 'wedding' },
  { id: 5, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-5.jpg?v=9', title: 'Vibrant Haldi Styling', type: 'haldi' },
  { id: 6, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-6.jpg?v=9', title: 'Traditional Yellow Haldi Backdrop', type: 'haldi' },
  { id: 7, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-7.jpg?v=9', title: 'Traditional Saffron Haldi', type: 'haldi' },
  { id: 8, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-8.jpg?v=9', title: 'Outdoor Haldi Swing', type: 'haldi' },
  { id: 9, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-9.jpg?v=9', title: 'Saffron Mandap Layout', type: 'wedding' },
  { id: 10, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-10.jpg?v=9', title: 'Gala Banquet Table Setup', type: 'corporate' },
  { id: 11, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-11.jpg?v=9', title: 'Elite Corporate Stage Setup', type: 'corporate' },
  { id: 12, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-12.jpg?v=9', title: 'Annual Business Award Night', type: 'corporate' },
  { id: 13, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-13.jpg?v=9', title: 'Royal Pink Backdrop Stage', type: 'wedding' },
  { id: 14, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-14.jpg?v=9', title: 'Product Launch Backdrop', type: 'corporate' },
  { id: 15, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-15.jpg?v=9', title: 'Grand Floral Arch Stage', type: 'wedding' },
  { id: 16, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-16.jpg?v=9', title: 'Shareholders Meeting Stage', type: 'corporate' },
  { id: 17, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-17.jpg?v=9', title: 'Corporate Branding Pavilion', type: 'corporate' },
  { id: 18, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-18.jpg?v=9', title: 'Executive VIP Lounge Area', type: 'corporate' },
  { id: 19, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-19.jpg?v=9', title: 'Blue Theme Gala Banquet', type: 'corporate' },
  { id: 20, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-20.jpg?v=9', title: 'Bespoke Monogram Wedding Stage', type: 'wedding' },
  { id: 21, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-21.jpg?v=9', title: 'Elysian Crystal Stage', type: 'wedding' },
  { id: 22, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-22.jpg?v=9', title: 'Symphony of Marigolds', type: 'haldi' },
  { id: 23, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-23.jpg?v=9', title: 'Royal Blue & White Stage', type: 'wedding' }
];

const defaultTestimonials = [
  { review: "Excellent coordination! Mr. Ayush Kale managed the entire sangeet sadas and catering display flawlessly. The guest comments on the food were incredible!", clientName: "Amit Deshpande", eventType: "Wedding", rating: 5 },
  { review: "They transformed a simple banquet hall into a royal wedding palace. The gold frame elements and fresh flowers were outstanding.", clientName: "Neha Kulkarni", eventType: "Reception", rating: 5 },
  { review: "Top tier professionalism. Easy booking, premium catering setup, and gorgeous lighting design. The team was prompt and executed exactly what we signed on.", clientName: "Rajesh Sen", eventType: "Corporate", rating: 5 }
];

const defaultManager = {
  name: 'Mr. Ayush Kale',
  title: 'Founder & Lead Event Manager',
  bio: "An event is not just a date on a calendar; it is a canvas of emotions, beauty, and memories. At Dream Day Events, we bring your visual imagination to life. We believe in providing the absolute best in class aesthetics and flawless execution so you can enjoy your dream day without a worry.",
  imageUrl: "https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/ayush-kale.jpg"
};

export const DataProvider = ({ children }) => {
  const [packagesData, setPackagesData] = useState(defaultPackages);
  const [galleryData, setGalleryData] = useState(defaultGallery);
  const [testimonialsData, setTestimonialsData] = useState(defaultTestimonials);
  const [managerData, setManagerData] = useState(defaultManager);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Seed default data if it doesn't exist
    const initializeData = async () => {
      try {
        const pkgRef = doc(db, 'content', 'packages');
        const pkgSnap = await getDoc(pkgRef);
        if (!pkgSnap.exists()) {
          await setDoc(pkgRef, defaultPackages);
        }

        const galRef = doc(db, 'content', 'gallery');
        const galSnap = await getDoc(galRef);
        if (!galSnap.exists() || !galSnap.data().images || galSnap.data().images.length <= 6) {
          await setDoc(galRef, { images: defaultGallery });
        }

        const mgrRef = doc(db, 'content', 'manager');
        const mgrSnap = await getDoc(mgrRef);
        if (!mgrSnap.exists()) {
          await setDoc(mgrRef, defaultManager);
        }
        
        // Check testimonials collection empty? (we do this inside unsubTestimonials if empty but let's seed here)
        // For simplicity, we won't seed testimonials into DB right here, instead we'll seed them via a batch or just use defaultTestimonials in context if db is empty.
      } catch (err) {
        console.error("Error initializing Firebase data:", err);
      }
    };

    initializeData();

    // Listen to live updates
    const unsubPackages = onSnapshot(doc(db, 'content', 'packages'), (doc) => {
      if (doc.exists()) {
        setPackagesData(doc.data());
      }
    });

    const unsubGallery = onSnapshot(doc(db, 'content', 'gallery'), (doc) => {
      if (doc.exists()) {
        setGalleryData(doc.data().images || []);
      }
    });

    const unsubTestimonials = onSnapshot(collection(db, 'testimonials'), (snapshot) => {
      const tests = [];
      snapshot.forEach(doc => {
        tests.push({ id: doc.id, ...doc.data() });
      });
      // Sort by creation date if needed
      tests.sort((a, b) => {
        const timeA = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
        const timeB = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
        return timeB - timeA;
      });
      if (tests.length > 0) {
        setTestimonialsData(tests);
      }
    });

    const unsubManager = onSnapshot(doc(db, 'content', 'manager'), (doc) => {
      if (doc.exists()) {
        setManagerData(doc.data());
      }
    });

    setLoading(false);

    return () => {
      unsubPackages();
      unsubGallery();
      unsubTestimonials();
      unsubManager();
    };
  }, []);

  const value = {
    packagesData,
    galleryData,
    testimonialsData,
    managerData,
    loading
  };

  return (
    <DataContext.Provider value={value}>
      {!loading && children}
    </DataContext.Provider>
  );
};
