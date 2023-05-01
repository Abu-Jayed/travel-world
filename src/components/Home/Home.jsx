import React from "react";
import NavigationBar from "../Shared/NavigationBar";
import "./Home.css";
import sundorbon from "../../assets/images/slider/sundorbon.png";
import sreemongol from "../../assets/images/slider/Sreemongol.png";
import sajek from "../../assets/images/slider/Sajek.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex text-white mt-20 h-full w-[1100px] mx-auto border-red-300 border-2">
      <div className="w-[50%]">
        <h1 className="text-5xl font-bold uppercase ">Let's Start Travel</h1>
        <p className="text-xl">
          Our vision is to be the top travel agency in the industry, providing
          exceptional customer service and innovative travel solutions while
          promoting sustainable and ethical tourism practices. We aim to inspire
          people to explore the world, creating lasting connections and a more
          connected global community.
        </p>
        <button className="btn">
          <Link to='/allDestination'>
          See Destination
          </Link>
          </button>
      </div>

      {/* slider */}

      <div>
        <div className="carousel w-[500px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={sundorbon} className="w-[500px] h-[500px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={sreemongol} className="w-[500px] h-[500px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={sajek} className="w-[500px] h-[500px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={sundorbon} className="w-[500px] h-[500px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
