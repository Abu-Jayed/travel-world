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
            <NavLink to='/' className="active:bg-red-400 ">Home</NavLink>
          </li>
          <li>
            <NavLink to='allDestination'>Destination</NavLink>
          </li>
          <li>
            <NavLink to='blog'>Blog</NavLink>
          </li>
          <li>
            <NavLink to='/'>Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='login' className="btn rounded-lg">Login</Link>
      </div>
    </div>
  );
};

export default NavigationBar;
