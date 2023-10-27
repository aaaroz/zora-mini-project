import { addDoc, collection } from "firebase/firestore";
import { db } from "../configs/firebase";

export const APIOrder = {
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
};
