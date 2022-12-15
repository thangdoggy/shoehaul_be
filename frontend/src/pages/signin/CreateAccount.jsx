import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { register } from "../../actions/userActions";

import { Header } from "../../components";
import { Footer } from "../../components";
import background from "../../data/homepage/img/signin-background.png";

const styles = {
  background: {
    backgroundImage: `url(${background})`,
    height: "880px",
  },
  signup_background: {
    backgroundColor: "#d9d9d9",
    width: "954px",
    height: "705px",
  },
  input: {
    width: "710px",
    height: "59px",
    background: "rgba(255, 255, 255, 0.5)",
    border: "1px solid #000000",
  },
  button: {
    //backgroundColor: "#FFe2ad",
    width: "710px",
    height: "59px",
  },
};

export default function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate(-1);
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password, address, phone));
    }
  };

  return (
    <>
      <Header />
      <div
        id="signin"
        className="bg-center bg-cover bg-no-repeat mt-20 pt-20 text-center"
        style={styles.background}
      >
        <div
          id="signin-form"
          className="rounded-3xl border border-black m-auto"
          style={styles.signup_background}
        >
          <h1 className="text-3xl mt-10 mb-10 font-bold">Create new account</h1>
          <form onSubmit={submitHandler}>
            <div className="input">
              <label for="username"></label>
              <input
                type="text"
                name="username"
                placeholder="Name"
                className="mb-5 rounded-3xl pl-10 text-base focus:outline-none"
                style={styles.input}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input">
              <label for="email"></label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="mb-5 rounded-3xl pl-10 text-base focus:outline-none"
                style={styles.input}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <label for="password"></label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="mb-5 rounded-3xl pl-10 text-base focus:outline-none"
                style={styles.input}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input">
              <label for="confirm-password"></label>
              <input
                type="password"
                name="confirm-password"
                placeholder="Confirm password"
                className="mb-5 rounded-3xl pl-10 text-base focus:outline-none"
                style={styles.input}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="input">
              <label for="address"></label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="mb-5 rounded-3xl pl-10 text-base focus:outline-none"
                style={styles.input}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="input">
              <label for="phone"></label>
              <input
                type="text"
                name="address"
                placeholder="Phone number"
                className="mb-10 rounded-3xl pl-10 text-base focus:outline-none"
                style={styles.input}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button
              id="signin-button"
              className="rounded-3xl mb-5 cursor-pointer border-black border text-2xl font-bold bg-amber-200 hover:bg-amber-300 transition ease-in duration-200"
              style={styles.button}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
