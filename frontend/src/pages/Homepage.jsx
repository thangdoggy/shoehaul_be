import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import freeship from '../data/homepage/free-shipping.png'
import quality from '../data/homepage/quality.png'
import payment from '../data/homepage/payment.png'
import time from '../data/homepage/time.png'
import { useSelector, useDispatch } from "react-redux";
import { Footer, Header } from "../components";
import Slide from "../data/homepage/slide.png";
import Slide2 from "../data/homepage/slide2.png";
import Nike from "../data/homepage/nike.png";
import vans from '../data/homepage/vans.png';
import adidas from '../data/homepage/adidas.png';
import converse from '../data/homepage/converse.png';
const Homepage = () => {
  const log_signup = (
    <div className="flex justify-center my-10">
      <Link to="/login">
        <div className="shadow-lg mx-10 bg-slate-500 rounded-full py-2 px-6 text-4xl font-bold hover:text-white transition ease-in hover:bg-slate-700">
          Log in
        </div>
      </Link>
      <Link to="/signin">
        <div className="shadow-lg mx-10 bg-slate-500 rounded-full py-2 px-6 text-4xl font-bold hover:text-white transition ease-in hover:bg-slate-700">
          Sign up
        </div>
      </Link>
    </div>
  );

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // if(userInfo)
  //   {
  //     if(userInfo.isAdmin)
  //     window.location.href= "http://localhost:3000/dashboard";
  //   }

  return (
    <div>
      <Header />
      <div
        className="bg-center bg-cover bg-no-repeat text-center my-20 py-40 bg-fixed"
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
            <img src={vans} alt="" className="rounded-md mt-10 w-64" />
            <p className="font-bold text-2xl mt-5">Vans</p>
          </div>
          <div className="mx-5">
            <img src={adidas} alt="" className="rounded-md mt-10 w-64" />
            <p className="font-bold text-2xl mt-5">Adidas</p>
          </div>
          <div className="mx-5">
            <img src={converse} alt="" className="rounded-md mt-10 w-64" />
            <p className="font-bold text-2xl mt-5 mb-10">Converse</p>
          </div>
        </div>

        <span className="text-5xl uppercase font-bold">and more</span>
      </div>

      <div
        className="bg-center bg-cover bg-no-repeat my-20 py-20 text-right bg-fixed"
        style={{
          backgroundImage: `url(${Slide2})`,
          height: "85vh",
        }}
      >
        <div className="pr-11">
          <div className="text-5xl uppercase font-bold my-2">We're</div>
          <div className="text-5xl uppercase font-bold my-2">proud</div>
          <div className="text-5xl uppercase font-bold my-2">of</div>
        </div>
        <div className="grid grid-cols-4 my-10 mx-10 gap-9">
          
            <div className="bg-white rounded-3xl text-center h-52">
              <div>
                <img src={freeship} alt="" className="mx-auto w-20 mt-2" />
                <p className="px-10 pt-10 ">Freeship 100%, no matter where you are.</p>
              </div>
            </div>

          
            <div className="bg-white rounded-3xl text-center h-52">
              <div>
                <img src={quality} alt="" className="mx-auto w-20 mt-3" />
                <p  className="px-10 pt-10" >Only top - notch quality shoes, 100% authentic.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl text-center h-52">
              <div>
                <img src={payment} alt="" className="mx-auto w-20 mt-3" />
                <p  className="px-10 pt-10">Paying with cash or card? Not our problem.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl text-center h-52">
              <div>
                <img src={time} alt="" className="mx-auto w-20 mt-4" />
                <p className="px-10 pt-10">Want a pair of shoes on feet right now? Com'on, that's our mission.</p>
              </div>
            </div>
        </div>
      </div>

      <div className="flex my-20 items-center justify-center">
        <div className="basis-1/4 mx-20 text-5xl uppercase font-bold">
          LOOKING <br/>FOR SOMETHING ELSE?
        </div>
        <Link to="/products">
          <div
            className="rounded-full mx-20 py-2 bg-amber-200 px-6 text-4xl font-bold flex items-center  hover:bg-amber-300 transition ease-in shadow-lg"
           
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
