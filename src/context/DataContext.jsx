import React, { createContext, useContext, useState, useEffect } from 'react';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
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
  { id: 1, url: "https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-4.jpg", type: "pre-wedding" },
  { id: 2, url: "https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/haldi-yellow.jpg", type: "haldi" },
  { id: 3, url: "https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/wedding-red-stage.jpg", type: "wedding" },
  { id: 4, url: "https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-6.jpg", type: "pre-wedding" },
  { id: 5, url: "https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/haldi-green.jpg", type: "haldi" },
  { id: 6, url: "https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/wedding-stage-green.jpg", type: "wedding" }
];

export const DataProvider = ({ children }) => {
  const [packagesData, setPackagesData] = useState(defaultPackages);
  const [galleryData, setGalleryData] = useState(defaultGallery);
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
        if (!galSnap.exists()) {
          await setDoc(galRef, { images: defaultGallery });
        }
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

    setLoading(false);

    return () => {
      unsubPackages();
      unsubGallery();
    };
  }, []);

  const value = {
    packagesData,
    galleryData,
    loading
  };

  return (
    <DataContext.Provider value={value}>
      {!loading && children}
    </DataContext.Provider>
  );
};
