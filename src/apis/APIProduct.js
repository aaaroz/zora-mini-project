import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../configs/firebase";
import { toast } from "react-toastify";

export const APIProduct = {
  // get all products from firestore
  getProducts: async () => {
    try {
      const productRef = collection(db, "products");
      const result = await getDocs(
        query(productRef, orderBy("createdAt", "desc"))
      );
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

  // get one product by id
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

  // create new product
  addProduct: async (product) => {
    try {
      const docRef = await addDoc(collection(db, "products"), product);
      return docRef;
    } catch (error) {
      alert("error adding document:", error);
      console.error(error);
      throw new Error(error);
    }
  },

  // delete one product by id
  deleteProduct: async (id) => {
    try {
      const docRef = doc(db, "products", id);
      await deleteDoc(docRef);
      toast.warn("Data Deleted Successfuly!");
    } catch (error) {
      alert("error delete document:", error);
      console.error(error);
      throw new Error(error);
    }
  },

  // update product by id
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
