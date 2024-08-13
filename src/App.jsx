import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./pages/products";
import Cars from "./pages/cars";
import Err from "./pages/countries";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="*" element={<Err />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
