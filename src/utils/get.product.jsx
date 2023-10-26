import { doc, getDoc } from "@firebase/firestore";
import { db } from "../configs/firebase";

export const GetProduct = async (id) => {
  if (!id) return null;

  const docRef = doc(db, "products", id);
  const result = await getDoc(docRef);
  const product = result.data();
  return product;
};
