import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  AllShoes,
  Cart,
  Checkout,
  Dashboard,
  Homepage,
  ProductInfo,
} from "./pages";

import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import FormInput from "./components/FormInput";
import FormChange from "./components/FormChange";
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
            { <Route path="/dashboard" element = {<Dashboard />} />}
            { <Route path="/allproducts" element = {<ProductList itemsPerPage={8} />} />}
            { <Route path="/allproducts/:productID" element = {<ProductDetail />} />}
            { <Route path="/allproducts/add" element = {<FormInput />} />}
            { <Route path="/allproducts/edit" element = {<FormChange />} />}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
