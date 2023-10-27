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
      // const lastDoc = result.docs[result.docs.length - 1];
      product = products;
    } catch (error) {
      console.error(error);
    }
    return product;
  },
});

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
      // const lastDoc = result.docs[result.docs.length - 1];
      product = products;
    } catch (error) {
      console.error(error);
    }
    return product;
  },
});

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
      // const lastDoc = result.docs[result.docs.length - 1];
      product = products;
    } catch (error) {
      console.error(error);
    }
    return product;
  },
});

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
      // const lastDoc = result.docs[result.docs.length - 1];
      product = products;
    } catch (error) {
      console.error(error);
    }
    return product;
  },
});

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
      // const lastDoc = result.docs[result.docs.length - 1];
      product = products;
    } catch (error) {
      console.error(error);
    }
    return product;
  },
});

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
      // const lastDoc = result.docs[result.docs.length - 1];
      product = products;
    } catch (error) {
      console.error(error);
    }
    return product;
  },
});

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
      // const lastDoc = result.docs[result.docs.length - 1];
      product = products;
    } catch (error) {
      console.error(error);
    }
    return product;
  },
});

const usersAdmin = selector({
  key: "users-admin",
  get: async () => {
    let userAdmin = null;
    try {
      const userRef = collection(db, "users");
      const result = await getDocs(query(userRef, orderBy("createdAt", "asc")));
      const user = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      userAdmin = user;
    } catch (error) {
      alert("API calls failed");
      console.error(error);
    }
    return userAdmin;
  },
});

const allOrders = selector({
  key: "get-order",
  get: async () => {
    let allOrders = null;
    try {
      const ordersRef = collection(db, "orders");
      const result = await getDocs(
        query(ordersRef, orderBy("createdAt", "asc"))
      );
      const orders = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      allOrders = orders;
    } catch (error) {
      alert("API calls failed");
      console.error(error);
    }
    return allOrders;
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
  usersAdmin,
  userId,
  userData,
  userImage,
  allOrders,
};
