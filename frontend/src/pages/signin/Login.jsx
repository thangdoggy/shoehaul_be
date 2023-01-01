import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components";
import { Footer } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import background from "../../data/homepage/img/login-background.png";
import { login } from "../../actions/userActions";
import Swal from 'sweetalert2';


const styles = {
  background: {
    backgroundImage: `url(${background})`,
    height: "763px",
  },
  login_background: {
    backgroundColor: "#D9d9d9",
    width: "954px",
    height: "593px",
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

export default function Login() {
  // const navigate = useNavigate();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const [authenticated, setAuthenticated] = useState(
  //   localStorage.getItem(localStorage.getItem("authenticated")) || false
  // );

  // const users = [
  //   {
  //     email: "admin@gmail.com",
  //     password: "admin",
  //   },
  //   {
  //     email: "user@gmail.com",
  //     password: "user",
  //   },
  // ];
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const user = users.find(
  //     (user) => user.email === email && user.password === password
  //   );
  //   if (user) {
  //     setAuthenticated(true);
  //     localStorage.setItem("authenticated", true);
  //     navigate("/");
  //   } else {
  //     alert("Email or password is incorrect");
  //   }
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      if (userInfo.isAdmin) {
        navigate("/dashboard");
      } else {
        navigate(-1);
      }
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    if(error)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error,
    })
  };

  return (
    <>
      <Header />
      <div
        id="login"
        className="bg-center bg-cover bg-no-repeat mt-20 pt-20 text-center"
        style={styles.background}
      >
        <div
          id="login-form"
          className="rounded-3xl border border-black m-auto "
          style={styles.login_background}
        >
          <h1 className="text-3xl mt-10 mb-5 font-bold">Welcome back to SHOESHAUL</h1>
          <form onSubmit={submitHandler}>
            {/* <div id="login-option" className="flex justify-center flex-1">
              <div id="user-option" className="pb-5 text-2xl">
                <input
                  type="radio"
                  name="user"
                  value="user"
                  id="user"
                  className="w-14 h-6"
                />
                <label for="user">User</label>
              </div>

              <div id="admin-option" className="text-2xl">
                <input
                  type="radio"
                  name="user"
                  value="admin"
                  id="admin"
                  className="w-14 h-6"
                />
                <label for="admin">Admin</label>
              </div>
            </div> */}
            <div id="login-input">
              <div id="email-input">
                <label for="username"></label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="mb-16 rounded-3xl pl-10 text-base focus:outline-none"
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
                  className="rounded-3xl pl-10 text-base focus:outline-none"
                  style={styles.input}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <p id="forget" className="text-left  text-base mt-5 mb-5 ml-40">
              Forget Password?{" "}
              <Link to="/forgotpassword" className="font-bold">
                Click here
              </Link>
            </p>
            <button
              type="submit"
              id="login-button"
              className="rounded-3xl mt-5 mb-5 cursor-pointer border-black border text-2xl font-bold bg-amber-200 hover:bg-amber-300 transition ease-in duration-200"
              style={styles.button}
            >
              LOG IN
            </button>
            <p id="sign-in" className="text-base">
              Still newbie?{" "}
              <Link to="/signin" className="font-bold">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
