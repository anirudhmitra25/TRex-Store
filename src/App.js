import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./Pages/Cart";
import Home from "./Pages/Home";
import { store } from "./redux/store/store";
import { getProductsList } from "./redux/actions/productActions";

function App() {
  useEffect(() => {
    store.dispatch(getProductsList());
    document.body.style.backgroundColor = "#F6F6F6";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
