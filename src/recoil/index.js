import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { atom, selector } from "recoil";
import { db } from "../configs/firebase";

// state atom
const price = atom({
  key: "total-price",
  default: 0,
});

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

const userId = atom({
  key: "user-id",
  default: null,
});

const userImage = atom({
  key: "user-image",
  default: null,
});

const userData = atom({
  key: "user-data",
  default: null,
});

// get only 4 products, by query
const products = selector({
  key: "products-data",
  get: async () => {
    let product = null;
    try {
      const productsRef = collection(db, "products");
      const result = await getDocs(
        query(productsRef, orderBy("createdAt", "asc"), limit(4))
      );
      const products = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      product = products;
    } catch (error) {
      console.error(error);
    }
    return product;
  },
});

// get all products
const allProducts = selector({
  key: "all-products",
  get: async () => {
    let product = null;
    try {
      const productsRef = collection(db, "products");
      const result = await getDocs(
        query(productsRef, orderBy("createdAt", "asc"))
      );
      const products = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      product = products;
    } catch (error) {
      console.error(error);
    }
    return product;
  },
});

// get all bottom products
const allBottoms = selector({
  key: "all-bottoms",
  get: async () => {
    let product = null;
    try {
      const productsRef = collection(db, "products");
      const result = await getDocs(
        query(productsRef, where("category", "==", "Bottoms"))
      );
      const products = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      product = products;
    } catch (error) {
      console.error(error);
    }
    return product;
  },
});

// get all hoodie products
const allHoodie = selector({
  key: "all-Hoodie",
  get: async () => {
    let product = null;
    try {
      const productsRef = collection(db, "products");
      const result = await getDocs(
        query(productsRef, where("category", "==", "Hoodie"))
      );
      const products = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      product = products;
    } catch (error) {
      console.error(error);
    }
    return product;
  },
});

// get all t-shirt products
const allTshirt = selector({
  key: "all-Tshirt",
  get: async () => {
    let product = null;
    try {
      const productsRef = collection(db, "products");
      const result = await getDocs(
        query(productsRef, where("category", "==", "T-Shirt"))
      );
      const products = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      product = products;
    } catch (error) {
      console.error(error);
    }
    return product;
  },
});

// get all jacket products
const allJacket = selector({
  key: "all-Jacket",
  get: async () => {
    let product = null;
    try {
      const productsRef = collection(db, "products");
      const result = await getDocs(
        query(productsRef, where("category", "==", "Jacket"))
      );
      const products = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      product = products;
    } catch (error) {
      console.error(error);
    }
    return product;
  },
});

// get all accessories products from firestore
const allAccessories = selector({
  key: "all-Accessories",
  get: async () => {
    let product = null;
    try {
      const productsRef = collection(db, "products");
      const result = await getDocs(
        query(productsRef, where("category", "==", "Accessories"))
      );
      const products = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      product = products;
    } catch (error) {
      console.error(error);
    }
    return product;
  },
});

export {
  price,
  navOpen,
  sidebarIsActive,
  products,
  allProducts,
  allBottoms,
  allHoodie,
  allTshirt,
  allJacket,
  allAccessories,
  displayName,
  userId,
  userData,
  userImage,
};
