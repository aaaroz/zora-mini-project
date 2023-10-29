import { doc, getDoc } from "@firebase/firestore";
import { db } from "../configs/firebase";

export const GetProduct = async (id) => {
  // checking when id isn't valid, so this will return null
  if (!id) return null;

  // create document reference
  const docRef = doc(db, "products", id);

  // then call getDoc function to get data
  const result = await getDoc(docRef);

  // get product from result, then return the product data
  const product = result.data();
  return product;
};
