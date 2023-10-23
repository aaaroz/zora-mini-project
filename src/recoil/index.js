import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { atom, selector } from "recoil";
import { db } from "../configs/firebase";

const navOpen = atom({
  key: "navbarOpen",
  default: false,
});

const sidebarIsActive = atom({
  key: "sidebarIsActive",
  default: true,
});

const displayName = atom({
  key: "display-name",
  default: null,
});

const products = selector({
  key: "products-data",
  get: async () => {
    let product = null;

    try {
      const productsRef = collection(db, "products");
      const result = await getDocs(
        query(productsRef, orderBy("id", "asc"), limit(4))
      );
      const products = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const lastDoc = result.docs[result.docs.length - 1];
      product = products;
    } catch (error) {
      console.error(error);
    }
    return product;
  },
});

export { navOpen, sidebarIsActive, products, displayName };
