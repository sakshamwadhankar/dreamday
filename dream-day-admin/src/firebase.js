import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxBx8UcNhYKy6y92wRjYNfIkp4GZadqR4",
  authDomain: "dream-day-events-sw.firebaseapp.com",
  projectId: "dream-day-events-sw",
  storageBucket: "dream-day-events-sw.firebasestorage.app",
  messagingSenderId: "655861218642",
  appId: "1:655861218642:web:8d22404c049619b27b8e8b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
