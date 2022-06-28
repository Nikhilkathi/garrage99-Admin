import React from "react";
import DashBoardA from "./Homescreen/DashBoardA";
import NavigationBar from "./Navigation/NavigationBar";
import CustomerPage from "./Homescreen/CustomerPage";
import VendorPage from "./Homescreen/VendorPage";
import ProductPage from "./Homescreen/ProductPage";
import AddProducts from "./Addpages/AddProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        {window.location.pathname !== "/login" ? <NavigationBar /> : null}
        <Routes>
          <Route exact path="/" element={<DashBoardA />} />
          <Route exact path="/customer" element={<CustomerPage />} />
          <Route exact path="/vendor" element={<VendorPage />} />
          <Route exact path="/product" element={<ProductPage />} />
          <Route exact path="/addproduct" element={<AddProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
