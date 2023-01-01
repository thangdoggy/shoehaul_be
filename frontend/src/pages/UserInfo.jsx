import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Header } from "../components";
import UserLogo from "../data/homepage/user.png";
import User from "../data/fakedata/User.json";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
const styles = {
  form: {
    width: "500px",
    minHeight: "500px",
  },
  button: {
    //backgroundColor: "#fbeaab",
    
  },
  input: {
    width: "400px",
    height: "40px",
  },
};
export default function UserInfo() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
  const dispatch2 = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  //Link to user data
  useEffect(() => {
    dispatch(getUserDetails("profile"));  
  }, []);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setAddress(user.address);
    }
  }, [dispatch2, user]);
  //Allow user to edit their information
  const submitHandler = (e) => {
    //e.preventDefault();
    dispatch2(updateUserProfile({ id: user._id, name, email, phone, address }));
  }
  console.log(user);
  return (
    <div>
      <Header />
      <div className="mt-20 pt-5">
        <h1 className="text-3xl ml-14 mt-5 mb-10 font-bold">
          Hello, {user.name}
        </h1>
        <form className="text-center mx-auto mb-10" style={styles.form} onSubmit = {submitHandler}>
          <fieldset className="shadow-lg rounded-xl ">
            <legend>
              <img
                src={UserLogo}
                alt="User Logo"
                width="100px"
                height="100px"
              />
            </legend>
            <div className="text-left ml-10">
              <div className="mt-5">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  className="mt-2 mb-5 shadow-lg focus:outline-none rounded-2xl pl-5"
                  value={name || ""}
                  style={styles.input}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={email || ""}
                  className="mt-2 mb-5 shadow-lg focus:outline-none rounded-2xl pl-5"
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="phone">Phone number</label>
                <br />
                <input
                  type="text"
                  placeholder="Phone number"
                  id="phone"
                  value={phone || ""}
                  className="mt-2 mb-5 shadow-lg focus:outline-none rounded-2xl pl-5"
                  onChange={(e) => setPhone(e.target.value)}
                  style={styles.input}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="address">Address</label>
                <br />
                <input
                  type="text"
                  placeholder="Address"
                  id="address"
                  value={address || ""}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-2 mb-5 shadow-lg focus:outline-none rounded-2xl pl-5"
                  style={styles.input}
                />
              </div>
            </div>
            <div>
              <h2>Type Account: {userInfo.isAdmin ? "Admin" : "User"}</h2>
            </div>
            <div>
              <input
                type="submit"
                id="button"
                className="rounded-2xl mt-5 mb-5 font-bold cursor-pointer bg-sky-500 hover:bg-sky-700 hover:text-white py-2 px-6 transition ease-in"
                //onClick={(e) => handleClick(e)}
                value="Update Info"
              />
            </div>
          </fieldset>
        </form>
      </div>

      <Footer />
    </div>
  );
}
