import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./store/index.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Suspense fallback={<div>Loading ...</div>}>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
