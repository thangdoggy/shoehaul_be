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
  dispatch(getUserDetails(userInfo._id));  
  const [disabled, setDisabled] = useState(false);
  //Link to user data
  useEffect(() => {
      document.getElementById("name").value = userInfo.name;
      document.getElementById("email").value = userInfo.email;
      document.getElementById("phone").value = userInfo.phone;
      // //console.log(userInfo);
      document.getElementById("address").value = userInfo.address;      
  }, []);

  //Allow user to edit their information
  const [valueButton, SetValueButton] = useState("Edit");

  const handleClick = (e) => {
    e.preventDefault();
    setDisabled(!disabled);
    const content = document.getElementById("button").value;
    if (content === "Edit") {
      
      const name = document.getElementById("name").value;
      const address = document.getElementById("address").value;
      dispatch(updateUserProfile(userLogin));
      SetValueButton("Save");
    } else {
      SetValueButton("Edit");
      
      
      //const email = document.getElementById("email").value;
      //const phone = document.getElementById("phone").value;
      
      //Access and update user info in local storage - nodejs
      // const user_info = {
      //   id: userx.id,
      //   name: name,
      //   email: email,
      //   phone: phone,
      //   address: address,
      //   password: userx.password,
      // };
      // User[userx.id - 1] = user_info;
      // localStorage.setItem("userID", JSON.stringify(userx.id));
      
    }
  };
  return (
    <div>
      <Header />
      <div className="mt-20 pt-5">
        <h1 className="text-3xl ml-14 mt-5 mb-10 font-bold">
          Hello, {userInfo.name}
        </h1>
        <form className="text-center mx-auto mb-10" style={styles.form}>
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
                  disabled={!disabled}
                  style={styles.input}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  className="mt-2 mb-5 shadow-lg focus:outline-none rounded-2xl pl-5"
                  disabled
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
                  className="mt-2 mb-5 shadow-lg focus:outline-none rounded-2xl pl-5"
                  disabled
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
                  className="mt-2 mb-5 shadow-lg focus:outline-none rounded-2xl pl-5"
                  disabled={!disabled}
                  style={styles.input}
                />
              </div>
            </div>
            <div>
              <h2>Type Account: {userInfo.isAdmin ? "Admin" : "User"}</h2>
            </div>
            <div>
              <input
                type="button"
                id="button"
                className="rounded-2xl mt-5 mb-5 font-bold cursor-pointer bg-sky-500 hover:bg-sky-700 hover:text-white py-2 px-6 transition ease-in"
                onClick={(e) => handleClick(e)}
                value={valueButton}
              />
            </div>
          </fieldset>
        </form>
      </div>

      <Footer />
    </div>
  );
}
