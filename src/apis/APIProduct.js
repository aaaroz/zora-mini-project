import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../configs/firebase";
import { toast } from "react-toastify";

export const APIProduct = {
  getProducts: async () => {
    try {
      const result = await getDocs(collection(db, "products"));
      const products = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return products;
    } catch (error) {
      alert("API calls failed");
      console.error(error);
    }
  },

  getProduct: async (id) => {
    try {
      const docRef = doc(db, "products", id);
      const result = await getDoc(docRef);
      const product = result.data();
      return product;
    } catch (error) {
      alert("API calls failed");
      console.error(error);
    }
  },

  addProduct: async (product) => {
    try {
      const docRef = await addDoc(collection(db, "products"), {
        ...product,
        id: product.id,
        createdAt: serverTimestamp(),
      });
      return docRef;
    } catch (error) {
      alert("error adding document:", error);
      console.error(error);
      throw new Error(error);
    }
  },

  deleteProduct: async (id) => {
    try {
      console.log(id);
      const docRef = doc(db, "products", id);
      await deleteDoc(docRef).then(() => {
        toast.warn("Data Deleted Successfuly!");
      });
    } catch (error) {
      alert("error delete document:", error);
      console.error(error);
      throw new Error(error);
    }
  },

  updateProduct: async (id, data) => {
    try {
      const docRef = doc(db, "products", id);
      await updateDoc(docRef, data);
    } catch (error) {
      alert("error update document:", error);
      console.error(error);
      throw new Error(error);
    }
  },
};
