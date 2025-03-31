import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-badaa.firebaseapp.com",
  projectId: "reactchat-badaa",
  storageBucket: "reactchat-badaa.appspot.com",
  messagingSenderId: "397833663088",
  appId: "1:397833663088:web:08dc96dace9c92f45cfab5",
  measurementId: "G-JNL2W99QHJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // ✅ تأكد من تمرير `app`
export const db = getFirestore(app);
export const storage = getStorage(app);
