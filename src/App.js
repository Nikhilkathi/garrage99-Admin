import React from "react";
import DashBoardA from "./Homescreen/DashBoardA";
import CustomerPage from "./Homescreen/CustomerPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DashBoardA />} />
          <Route exact path="/customer" element={<CustomerPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
