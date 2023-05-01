import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/icons/logo.png";

const NavigationBar = () => {
  return (
    <div className=" navbar text-white bg-black bg-opacity-30">
      <div className="navbar-start">
        <Link to="/">
          <img
            className="bg-white p-2 m-2 rounded-md w-32 text-white"
            src={logo}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="">
        <input type="text" placeholder="Search your destination..." className="input border   border-white focus:border-cyan-400 bg-slate-50 bg-opacity-30 w-full max-w-xs placeholder:text-cyan-500 rounded-xl" />
        </div>
        <ul className="font-bold text-[18px] menu menu-horizontal px-1">
          <li>
            <Link to='/' className="active:bg-red-400 ">Home</Link>
          </li>
          <li>
            <Link>Destination</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn rounded-lg">Login</a>
      </div>
    </div>
  );
};

export default NavigationBar;
