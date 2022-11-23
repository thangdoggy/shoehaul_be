import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";

import { Footer, Header } from "../components";
import Slide from "../data/homepage/slide.png";
import Slide2 from "../data/homepage/slide2.png";
import Nike from "../data/homepage/nike.png";

const Homepage = () => {
  // const [authenticated, setAuthenticated] = useState(false);
  // useEffect(() => {
  //   const loggedUser = localStorage.getItem("authenticated");
  //   if (loggedUser) {
  //     setAuthenticated(true);
  //   }
  // }, []);
  // let log_signup;
  // if (authenticated === false) {
  //   log_signup = (
  //     <div className="flex justify-center my-10">
  //         <Link to="/login">
  //           <div className="mx-10 bg-slate-600 rounded-full py-2 px-6 text-4xl font-bold">
  //             Log in
  //           </div>
  //         </Link>
  //         <Link to="/signin">
  //           <div className="mx-10 bg-slate-600 rounded-full py-2 px-6 text-4xl font-bold">
  //             Sign up
  //           </div>
  //         </Link>
  //       </div>
  //   );
  // }

  const log_signup = (
    <div className="flex justify-center my-10">
      <Link to="/login">
        <div className="mx-10 bg-slate-600 rounded-full py-2 px-6 text-4xl font-bold">
          Log in
        </div>
      </Link>
      <Link to="/signin">
        <div className="mx-10 bg-slate-600 rounded-full py-2 px-6 text-4xl font-bold">
          Sign up
        </div>
      </Link>
    </div>
  );

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div>
      <Header />

      <div
        className="bg-center bg-cover bg-no-repeat text-center my-20 py-40"
        style={{
          backgroundImage: `url(${Slide})`,
          height: "85vh",
        }}
      >
        <span className="text-5xl uppercase text-white font-bold">
          Welcome to shoeshaul
        </span>
        {!userInfo && log_signup}
      </div>

      <div className="text-center my-20">
        <span className="text-5xl uppercase font-bold">
          WE’VE GOT SHOES ALL AROUND THE WORLD
        </span>

        <div className="flex justify-center">
          <div className="mx-5">
            <img src={Nike} alt="" className="rounded-md mt-10 w-64" />
            <p className="font-bold text-2xl mt-5">Nike</p>
          </div>
          <div className="mx-5">
            <img src={Nike} alt="" className="rounded-md mt-10 w-64" />
            <p className="font-bold text-2xl mt-5">Vans</p>
          </div>
          <div className="mx-5">
            <img src={Nike} alt="" className="rounded-md mt-10 w-64" />
            <p className="font-bold text-2xl mt-5">Adidas</p>
          </div>
          <div className="mx-5">
            <img src={Nike} alt="" className="rounded-md mt-10 w-64" />
            <p className="font-bold text-2xl mt-5 mb-10">Converse</p>
          </div>
        </div>

        <span className="text-5xl uppercase font-bold">and more</span>
      </div>

      <div
        className="bg-center bg-cover bg-no-repeat my-20 py-32 text-right"
        style={{
          backgroundImage: `url(${Slide2})`,
          height: "85vh",
        }}
      >
        <div className="pr-11">
          <div className="text-5xl uppercase font-bold my-2">need</div>
          <div className="text-5xl uppercase font-bold my-2">some</div>
          <div className="text-5xl uppercase font-bold my-2">suggestions?</div>
        </div>

        <div className="flex justify-center my-10">
          <Link to="/">
            <div className="mx-10 bg-slate-200 rounded-full py-2 px-6 text-4xl font-bold">
              Based on fashion style
            </div>
          </Link>
          <Link to="/">
            <div className="mx-10 bg-slate-200 rounded-full py-2 px-6 text-4xl font-bold">
              Based on body’s info
            </div>
          </Link>
        </div>
      </div>

      <div className="flex my-20 items-center justify-center">
        <div className="basis-1/4 mx-20 text-5xl uppercase font-bold">
          STILL LOOKING FOR SOMETHING ELSE?
        </div>
        <Link to="/products">
          <div
            className="rounded-full mx-20 py-2 px-6 text-4xl font-bold flex items-center"
            style={{ backgroundColor: "#FBEAAB" }}
          >
            Move to all products
            <AiOutlineArrowRight className="ml-3" />
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
