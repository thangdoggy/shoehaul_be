import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../components";
import ContextCart from "../components/Cart/ContextCart";

import { useDispatch, useSelector } from "react-redux";

const styles = {
  button: {
    backgroundColor: "#FFe2ad",
    width: "200px",
  },
};
const Cart = () => {
  // const [authenticated, setAuthenticated] = useState(false);
  // useEffect(() => {
  //   const loggedUser = localStorage.getItem("authenticated");
  //   console.log(loggedUser);
  //   if (loggedUser) {
  //     setAuthenticated(true);
  //   }
  // }, []);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  let authen;
  if (!userInfo) {
    authen = (
      <div>
        <Header />
        <div className="mt-20 py-40 text-center mb-20">
          <h1 className="text-2xl">You haven't logged in yet.</h1>
          <h1 className="text-2xl">Please login to continue.</h1>
          <Link to="/login">
            <button
              className="font-bold border border-black rounded-3xl p-2.5 mt-10"
              style={styles.button}
            >
              Login
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  } else {
    authen = (
        <ContextCart />
    );
  }
  return <>{authen}</>;
};

export default Cart;
