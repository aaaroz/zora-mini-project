import { combineReducers, configureStore } from "@reduxjs/toolkit";

import persistStore from "redux-persist/lib/persistStore";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

import products from "./get.products.slice";
import product from "./get.product.slice";
import user from "./get.user.slice";
import cart from "./cart.slice";

// combine reducer
const rootReducer = combineReducers({ products, product, user, cart });

// persist configuration
const persistConfig = { key: root, storage };

// create persist reducer
const pReducer = persistReducer(persistConfig, rootReducer);

// store configuration
const store = configureStore({
  reducer: pReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const persistor = persistStore(store);

export { persistor };
export default store;
