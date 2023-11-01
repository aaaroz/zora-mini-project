import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../configs/firebase";

export const APIOrder = {
  // get all orders
  getOrders: async () => {
    try {
      const ordersRef = collection(db, "orders");
      const result = await getDocs(
        query(ordersRef, orderBy("createdAt", "asc"))
      );
      const orders = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return orders;
    } catch (error) {
      alert("API calls failed");
      console.error(error);
    }
  },

  // add order to firestore database
  addOrder: async (order) => {
    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      return docRef;
    } catch (error) {
      alert("error adding document:", error);
      console.error(error);
      throw new Error(error);
    }
  },

  getOrder: async (id) => {
    try {
      const docRef = doc(db, "orders", id);
      const result = await getDoc(docRef);
      const order = result.data();
      return order;
    } catch (error) {
      alert("API calls failed");
      console.error(error);
    }
  },

  updateOrder: async (id, data) => {
    try {
      const docRef = doc(db, "orders", id);
      await updateDoc(docRef, data);
    } catch (error) {
      alert("error update document:", error);
      console.error(error);
      throw new Error(error);
    }
  },
};
