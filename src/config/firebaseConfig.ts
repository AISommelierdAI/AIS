// src/config/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFQ0GcFUVgZb128SNo7S30JzqOrRqXvqs", // 本物を直書き
  authDomain: "ai-sommelier-d-ai.firebaseapp.com",
  projectId: "ai-sommelier-d-ai",
  storageBucket: "ai-sommelier-d-ai.appspot.com",
  messagingSenderId: "47940083455",
  appId: "1:47940083455:web:fe9ae7a77772cea73176ca"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
