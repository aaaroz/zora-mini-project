import React from "react";
import Routers from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        autoClose={2000}
        position="top-center"
        theme="dark"
        hideProgressBar={true}
      />
      <Routers />
    </>
  );
}

export default App;
