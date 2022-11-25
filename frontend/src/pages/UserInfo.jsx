import React, { useState } from "react";
import { useEffect } from "react";
import { Footer, Header } from "../components";
import UserLogo from "../data/homepage/user.png";
import User from "../data/fakedata/User.json";
const styles = {
  form: {
    width: "500px",
    minHeight: "500px",
  },
  button: {
    backgroundColor: "#fbeaab",
    width: "138px",
    height: "50px",
  },
  input: {
    width: "400px",
    height: "40px",
  },
};
export default function UserInfo() {
  const [disabled, setDisabled] = useState(false);
  //Link to user data
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userID"));
    if (user) {
      const user_info = User.find((index) => index.id === user);
      document.getElementById("name").value = user_info.name;
      document.getElementById("email").value = user_info.email;
      document.getElementById("phone").value = user_info.phone;
      document.getElementById("address").value = user_info.address;
    }
  }, []);
  const username = JSON.parse(localStorage.getItem("userID"));
  const userx = User.find((index) => index.id === username);

  //Allow user to edit their information
  const [valueButton, SetValueButton] = useState("Edit");

  const handleClick = (e) => {
    e.preventDefault();
    setDisabled(!disabled);
    const content = document.getElementById("button").value;
    if (content === "Edit") {
      SetValueButton("Save");
    } else {
      SetValueButton("Edit");
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const address = document.getElementById("address").value;
      //Access and update user info in local storage - nodejs
      const user_info = {
        id: userx.id,
        name: name,
        email: email,
        phone: phone,
        address: address,
        password: userx.password,
      };
      User[userx.id - 1] = user_info;
      localStorage.setItem("userID", JSON.stringify(userx.id));
    }
  };
  return (
    <div>
      <Header />
      <div className="mt-20 pt-5">
        <h1 className="text-3xl ml-14 mt-5 mb-10 font-bold">
          Hello, {userx.name}
        </h1>
        <form className="text-center mx-auto mb-10" style={styles.form}>
          <fieldset className="border rounded-xl border-black">
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
                <label for="name">Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  className="mt-2 mb-5 border border-black focus:outline-none rounded-2xl pl-5"
                  disabled={!disabled}
                  style={styles.input}
                />
              </div>
              <div className="mt-5">
                <label for="email">Email</label>
                <br />
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  className="mt-2 mb-5 border border-black focus:outline-none rounded-2xl pl-5"
                  disabled
                  style={styles.input}
                />
              </div>
              <div className="mt-5">
                <label for="password">Phone number</label>
                <br />
                <input
                  type="text"
                  placeholder="Phone number"
                  id="phone"
                  className="mt-2 mb-5 border border-black focus:outline-none rounded-2xl pl-5"
                  disabled
                  style={styles.input}
                />
              </div>
              <div className="mt-5">
                <label for="phone">Address</label>
                <br />
                <input
                  type="text"
                  placeholder="Address"
                  id="address"
                  className="mt-2 mb-5 border border-black focus:outline-none rounded-2xl pl-5"
                  disabled={!disabled}
                  style={styles.input}
                />
              </div>
            </div>
            <div>
              <h2>Type Account: User</h2>
            </div>
            <div>
              <input
                type="button"
                id="button"
                className="rounded-2xl mt-5 mb-5 font-bold cursor-pointer"
                style={styles.button}
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
