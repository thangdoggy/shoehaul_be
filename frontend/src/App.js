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

import {
  Login,
  CreateAccount,
  ForgotPassword,
  NewPassword,
  UserInfo,
} from "./pages";
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
            <Route path="/products" element={<AllShoes itemsPerPage={9} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<CreateAccount />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:productID" element={<ProductInfo />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/newpassword" element={<NewPassword />} />
            <Route path="/userinfo" element={<UserInfo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
