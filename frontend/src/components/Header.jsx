import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { listProducts } from "../actions/productActions";

import { useDispatch, useSelector } from "react-redux";

import { getUserDetails, logout } from "../actions/userActions";

import Logo from "../data/logo/shoeshaul-logo.png";
import Searchbar from "./Search/Search";

const Header = () => {
  const activeLink = "underline underline-offset-8 decoration-2 font-bold";
  const normalLink = "hover:underline hover:underline-offset-8 decoration-2";
  // const [authenticated, setAuthenticated] = useState(false);
  // useEffect(() => {
  //   const loggedUser = localStorage.getItem("authenticated");
  //   if (loggedUser) {
  //     setAuthenticated(true);
  //   }
  // }, []);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const userDetails = useSelector((state) => state.userDetails);
  const {user} = userDetails;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  let login;
  if (!userInfo) {
    login = (
      <NavLink to="/login" className="ml-11 ">
        <div className="border-solid border-2 border-slate-900 rounded-full py-1 px-4 hover:shadow-lg">
          Log In
        </div>
      </NavLink>
    );
  } else {
    login = (
      <div className="flex gap-5">
        <div className="text-right">
          <Link to='/userinfo'><AiOutlineUser className="cursor-pointer text-3xl m-auto" /></Link>
          
          <span>Hi, {user.name}</span>
        </div>
        <div
          className="cursor-pointer border-solid border-2 border-slate-900 rounded-full py-1 px-4 hover:shadow-lg my-auto"
          // onClick={() => {
          //   localStorage.clear();
          //   window.location.href = "/";
          // }}
          onClick={logoutHandler}
        >
          Log Out
        </div>
      </div>
    );
  }
  return (
    <div
      className="flex justify-between drop-shadow-lg h-20 w-full fixed top-0 z-10"
      style={{ backgroundColor: "#FBEAAB" }}
    >
      <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="ShoesHaul Logo" className="h-20 mx-11" />
        </Link>

        <div className="h-12 border-r-2 opacity-70 border-slate-900"></div>
        <Searchbar placeholder="Search" data={products}/>
        {/* <label className="mx-16 flex justify-between items-center relative">
          <input
            className="placeholder:text-slate-900 bg-slate-900 bg-opacity-5 w-96 h-9 rounded-md pl-6 pr-12 focus:outline-none focus:shadow-lg"
            placeholder="Search"
            type="text"
            name="search"
          />
          <AiOutlineSearch className="absolute text-2xl text-slate-900 right-0 mr-3" />
        </label> */}
      </div>

      {/* Link to pages */}
      <div className="flex items-center mr-16">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <div className="mx-4">Home</div>
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <div className="mx-4">All products</div>
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <div className="mx-4">Your cart</div>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <div className="mx-4">About</div>
        </NavLink>
        {login}
      </div>
    </div>
  );
};

export default Header;
