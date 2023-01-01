import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../data/logo/shoeshaul-logo.png";

const AdminHeader = () => {
  const activeLink = "decoration-5 font-bold";
  const normalLink = "decoration-2";

  let login;
  login = (<div className="text-right">
      <div className="text-base cursor-pointer border-solid border-2 border-slate-900 rounded-full py-1 px-4 hover:shadow-lg"
          onClick={() => { localStorage.clear(); window.location.href = "/" }}>
          Log Out
      </div>
  </div>);

  return (
    <div
      className="flex justify-between drop-shadow-lg h-16 w-full"
      style={{ backgroundColor: "#FBEAAB" }}
    >
      <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="ShoesHaul Logo" className="h-16 mx-11" />
        </Link>
      </div>
      <div className="flex items-center mr-16">

        <div className="mx-5">
            <div className="mx-4 text-xs opacity-30">Manage</div>
            <NavLink
                to="/products"
                className={
                    ({ isActive }) => (
                        isActive ? activeLink : normalLink
                        )
                    }
                    >
                <div className="mx-4 text-base">Products</div>
            </NavLink>
        </div>
        <div className="mx-5">
            <div className="mx-4 text-xs opacity-30">Revenue</div>
            <NavLink
                to="/"
                className={
                    ({ isActive }) => (
                        isActive ? activeLink : normalLink
                        )
                    }
                    >
                <div className="mx-4 text-base">Dashboard</div>
            </NavLink>
        </div>
        {login} 
      </div>
    </div>
  );
};

export default AdminHeader;