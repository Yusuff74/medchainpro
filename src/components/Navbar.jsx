import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const openMenu = "d-flex justify-center overflow-hidden";
  const closeMenu = "d-none";

  const navlinks = {
    fontSize: ".9rem",
    color: "rgba(0,0,0,.5)",
    marginRight: "1rem",
    textDecoration: "none",
  };
  return (
    <div
      className="px-4 py-6 bg-white position-fixed top-0 left-0 right-0"
      style={{ width: "100%" }}
    >
      <div className="d-none d-lg-flex justify-between">
        <div className="flex">
          <NavLink to="/">
            <img
              src="https://app.drugstoc.com/static/media/logo.9ae7f9ae7a465a103859.png"
              alt="logo"
              className="mr-5"
              style={{ width: "90px", height: "20px" }}
            />
          </NavLink>
          <NavLink to="/about" style={navlinks}>
            About Us
          </NavLink>
          <NavLink to="#" style={navlinks}>
            Solutions
          </NavLink>
          <NavLink to="#" style={navlinks}>
            Partnerships
          </NavLink>
          <NavLink to="#" style={navlinks}>
            Careers
          </NavLink>
          <NavLink to="#" style={navlinks}>
            Blogs
          </NavLink>
        </div>
        <div className="flex">
          <Link to="#" className="btn btn-primary btn-md mx-4">
            SHOP ON WEB
          </Link>
          <Link to="#" className="btn btn-secondary btn-md">
            CONTACT SALE
          </Link>
        </div>
      </div>
      <div className="d-flex justify-between d-md-none">
        <div>
          <NavLink to="/">
            <img
              src="https://app.drugstoc.com/static/media/logo.9ae7f9ae7a465a103859.png"
              alt="logo"
              className="mr-5"
              style={{ width: "90px", height: "20px" }}
            />
          </NavLink>
        </div>

        <div>
          <HiMenu
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        </div>
      </div>
      <div className={toggleMenu ? openMenu : closeMenu}>
        <ul>
          <li className="border-bottom my-2">
            <Link to="/about" className="text-decoration-none">
              About Us
            </Link>
          </li>

          <li className="border-bottom my-2">
            <Link to="" className="text-decoration-none">
              Solutions
            </Link>
          </li>

          <li className="border-bottom my-2">
            <Link to="" className="text-decoration-none">
              Partnerships
            </Link>
          </li>

          <li className="border-bottom my-2">
            <Link to="" className="text-decoration-none">
              Careers
            </Link>
          </li>

          <li className="border-bottom my-2">
            <Link to="" className="text-decoration-none">
              Blog
            </Link>
          </li>
          <li>
            <Link to="#" className="btn btn-primary my-3">
              SHOP ON WEB
            </Link>
          </li>
          <li>
            <Link to="#" className="btn btn-secondary">
              CONTACT SALE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
