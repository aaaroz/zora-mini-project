import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../configs/firebase";

export const APIUser = {
  getUser: async (id) => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", id));
      const doc = await getDocs(q);
      const user = doc.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return user;
    } catch (error) {
      alert("API calls failed");
      console.error(error);
    }
  },

  updateUser: async (id, data) => {
    try {
      const docRef = doc(db, "users", id);
      await updateDoc(docRef, data);
    } catch (error) {
      alert("error update document:", error);
      console.error(error);
      throw new Error(error);
    }
  },
};
