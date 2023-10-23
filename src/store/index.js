import { combineReducers, configureStore } from "@reduxjs/toolkit";

import persistStore from "redux-persist/lib/persistStore";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

import products from "./get.products.slice";
import product from "./get.product.slice";

const rootReducer = combineReducers({ products, product });

const persistConfig = { key: root, storage };

const pReducer = persistReducer(persistConfig, rootReducer);

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
