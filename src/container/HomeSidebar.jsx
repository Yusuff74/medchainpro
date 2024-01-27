import React, { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sideBar";
import HomeNews from "../components/HomeNews";
import About from "../components/About";

const HomeSidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div>
      <div className="flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out">
        <div className="hidden md:flex h-screen flex-initial">
          <Sidebar />
        </div>
        <div className="flex md:hidden flex-row fixed top-0 left-0 w-100 z-100 bg-white">
          <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
            <HiMenu
              fontSize={40}
              className="cursor-pointer"
              onClick={() => setToggleSidebar(true)}
            />
            <Link to="/">
              <img
                src="https://app.drugstoc.com/static/media/logo.9ae7f9ae7a465a103859.png"
                alt="logo"
                style={{ width: "100px", height: "20px" }}
              />
            </Link>
            <Link to="/">
              <img
                src="https://app.drugstoc.com/static/media/logo.9ae7f9ae7a465a103859.png"
                alt="logo"
                className="w-12 h-12"
              />
            </Link>
          </div>
        </div>
        {toggleSidebar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer"
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar closeToggle={setToggleSidebar} />
          </div>
        )}
        <Routes>
          <Route path="/" element={<HomeNews />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomeSidebar;
