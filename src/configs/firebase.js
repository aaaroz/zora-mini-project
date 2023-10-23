import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXC7XeTdEssYSIWhVtL0yPxP2_dhQIGPo",
  authDomain: "zora-ecommerce-a8053.firebaseapp.com",
  projectId: "zora-ecommerce-a8053",
  storageBucket: "zora-ecommerce-a8053.appspot.com",
  messagingSenderId: "214048429856",
  appId: "1:214048429856:web:b7855090d6836b540ce945",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const imageDB = getStorage(app);
