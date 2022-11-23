import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  AllShoes,
  Cart,
  Checkout,
  Homepage,
  ProductInfo,
} from "./pages";

import { Login, CreateAccount , ForgotPassword, NewPassword } from "./pages";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* Routes */}
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/products" element={<AllShoes />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<CreateAccount />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:productID" element={<ProductInfo />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/newpassword" element={<NewPassword />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
