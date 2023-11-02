import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../configs/firebase";

export const APIUser = {
  // get all users
  getUsers: async () => {
    try {
      const userRef = collection(db, "users");
      const result = await getDocs(query(userRef, orderBy("createdAt", "asc")));
      const user = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return user;
    } catch (error) {
      alert("API calls failed");
      console.error(error);
    }
  },

  // get user auth by id
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

  // update user auth data by id
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
