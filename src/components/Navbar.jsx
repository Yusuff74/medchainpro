import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const openMenu = "d-flex justify-center overflow-hidden";
  const closeMenu = "d-none";

  const handleLinkClick = () => {
    setToggleDropDown(false);
    setToggleMenu(false);
    window.scrollTo(0, 0);
  };

  const navlinks = {
    fontSize: ".9rem",
    color: "rgba(0,0,0,.5)",
    marginRight: "1rem",
    textDecoration: "none",
    float: "left",
    cursor: "pointer",
  };
  const solutionHeaders = {
    fontSize: ".9rem",
    fontWeight: "600",
    lineHeight: "1.8rem",
    color: "rgb(72, 72, 72)",
    marginLeft: "1rem",
    paddingTop: ".8rem",
  };
  const solutionList = {
    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: "24px",
    color: "rgb(72, 72, 72)",
    marginBottom: "4px",
  };
  const solutionLi = {
    backgroundColor: "rgb(245, 249, 249)",
    borderRadius: "20px",
    marginTop: "2rem",
    textDecoration: "none",
  };
  const solutionImg = {
    width: "50px",
    marginRight: "1rem",
  };
  const client = {
    fontSize: ".8rem",
    fontWeight: "500",
    lineHeight: "20px",
    display: "block",
    padding: "0.5rem 0px",
    color: "#000",
  };

  const solutionp = {
    fontSize: ".9rem",
    fontWeight: "400",
    color: "rgb(72, 72, 72)",
  };
  return (
    <div
      className="bg-white position-fixed top-0 left-0 right-0"
      style={{ width: "100%", zIndex: "10000", padding: "2rem 1rem" }}
    >
      <div className="d-none d-lg-flex justify-content-between">
        <div className="d-flex">
          <NavLink onClick={handleLinkClick} to="/">
            <img
              src="https://app.drugstoc.com/static/media/logo.9ae7f9ae7a465a103859.png"
              alt="logo"
              style={{ width: "90px", height: "20px", marginRight: "1rem" }}
            />
          </NavLink>
          <NavLink onClick={handleLinkClick} to="/about" style={navlinks}>
            About Us
          </NavLink>
          {/* DropDown Menu */}
          <div style={{ float: "left", overflow: "hidden" }}>
            <p
              onClick={() => setToggleDropDown(!toggleDropDown)}
              style={navlinks}
            >
              Solutions <i className="fa fa-caret-down"></i>
            </p>
            <div
              className={
                toggleDropDown ? "row mt-5 position-absolute" : "d-none"
              }
              style={{ backgroundColor: " #f9f9f9" }}
            >
              <div className="col-7">
                <ul>
                  <p style={solutionHeaders}>For Healthcare Providers</p>
                  <Link
                    onClick={handleLinkClick}
                    to="/solution/procure-direct"
                    style={solutionLi}
                  >
                    <li className="d-flex">
                      <img
                        src="https://www.drugstoc.com/images/navbar/3.svg"
                        style={solutionImg}
                      />
                      <div className="flex-content">
                        <h4 style={solutionList}> Procure Direct</h4>
                        <p style={solutionp}>
                          Shop Affordable Medicine For Your Pharmacy
                        </p>
                      </div>
                    </li>
                  </Link>
                  <Link
                    to="solution/medchainpropay"
                    onClick={handleLinkClick}
                    style={solutionLi}
                  >
                    <li className="d-flex">
                      <img
                        src="https://www.drugstoc.com/images/navbar/4.svg"
                        style={solutionImg}
                      />
                      <div className="flex-content">
                        <h4 style={solutionList}> MedChainPro Pay</h4>

                        <p style={solutionp}>
                          Non Collateral Loans For Healthcare Providers
                        </p>
                      </div>
                    </li>
                  </Link>
                  <p style={solutionHeaders}>For Pharmaceutical Comapnies</p>

                  <Link
                    to="solution/market-access"
                    onClick={handleLinkClick}
                    style={solutionLi}
                  >
                    <li className="d-flex">
                      <img
                        src="https://www.drugstoc.com/images/navbar/5.svg"
                        style={solutionImg}
                      />
                      <div className="flex-content">
                        <h4 style={solutionList}>Market Access</h4>
                        <p style={solutionp}>
                          Shop Affordable Medicine For Your Pharmacy
                        </p>
                      </div>
                    </li>
                  </Link>
                  <Link
                    to="solution/rx-insight"
                    onClick={handleLinkClick}
                    style={solutionLi}
                  >
                    <li className="d-flex">
                      <img
                        src="https://www.drugstoc.com/images/navbar/8.svg"
                        style={solutionImg}
                      />
                      <div className="flex-content">
                        <h4 style={solutionList}> RXInsight</h4>
                        <p style={solutionp}>
                          Data-Driven Markets Insight For Pharma Supply Chain
                        </p>
                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
              <div
                className="col-5"
                style={{
                  backgroundColor: "rgb(255, 230, 225)",
                  padding: "3rem",
                }}
              >
                <h5
                  style={{
                    fontSize: ".9rem",
                    fontWeight: "300",
                    color: "rgb(72, 72, 72)",
                    marginBottom: "1rem",
                  }}
                >
                  By Client Category
                </h5>
                <p style={client}>Chain Pharmacies</p>
                <p style={client}>Community Pharmacies</p>
                <p style={client}>Retail Pharmacies</p>
                <p style={client}>For Hospitals And Clinics</p>
                <p style={client}>For Licensed Medical Professionals</p>
                <p style={client}>For HMOs</p>
                <p style={client}>For Government Facilities</p>
              </div>
            </div>
          </div>

          {/* End Of DropDown Menu */}

          <NavLink
            onClick={handleLinkClick}
            to="/partnerships"
            style={navlinks}
          >
            Partnerships
          </NavLink>
          <NavLink onClick={handleLinkClick} to="/careers" style={navlinks}>
            Careers
          </NavLink>
          <NavLink onClick={handleLinkClick} to="#" style={navlinks}>
            Blogs
          </NavLink>
        </div>
        <div className="flex">
          <Link
            onClick={handleLinkClick}
            to="#"
            className="btn btn-primary btn-md mx-4"
          >
            SHOP ON WEB
          </Link>
          <Link
            onClick={handleLinkClick}
            to="#"
            className="btn btn-secondary btn-md"
          >
            CONTACT SALE
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}

      <div className="d-flex justify-content-between d-md-none">
        <div>
          <NavLink onClick={handleLinkClick} to="/">
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
            <Link
              onClick={handleLinkClick}
              to="/about"
              className="text-decoration-none"
            >
              About Us
            </Link>
          </li>

          <li className="border-bottom my-2">
            <p
              className="border-bottom"
              onClick={() => setToggleDropDown(!toggleDropDown)}
              style={{ color: "#0d6efd" }}
            >
              {" "}
              Solutions
            </p>
            <div className={toggleDropDown ? "d-block" : "d-none"}>
              <Link
                onClick={handleLinkClick}
                to="/solution/procure-direct"
                className="text-decoration-none"
              >
                <p className="border-bottom" style={client}>
                  {" "}
                  Procure Direct
                </p>
              </Link>
              <Link
                onClick={handleLinkClick}
                to="solution/medchainpropay"
                className="text-decoration-none"
              >
                <p className="border-bottom" style={client}>
                  {" "}
                  MedChainPro Pay
                </p>
              </Link>
              <Link
                onClick={handleLinkClick}
                to="solution/market-access"
                className="text-decoration-none"
              >
                <p className="border-bottom" style={client}>
                  {" "}
                  Market Access
                </p>
              </Link>
              <Link
                onClick={handleLinkClick}
                to="solution/rx-insight"
                className="text-decoration-none"
              >
                <p className="border-bottom" style={client}>
                  {" "}
                  RXInsights
                </p>
              </Link>
            </div>
          </li>

          <li className="border-bottom my-2">
            <Link
              onClick={handleLinkClick}
              to="/partnerships"
              className="text-decoration-none"
            >
              Partnerships
            </Link>
          </li>

          <li className="border-bottom my-2">
            <Link
              onClick={handleLinkClick}
              to="/careers"
              className="text-decoration-none"
            >
              Careers
            </Link>
          </li>

          <li className="border-bottom my-2">
            <Link
              onClick={handleLinkClick}
              to=""
              className="text-decoration-none"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLinkClick}
              to="#"
              className="btn btn-primary my-3"
            >
              SHOP ON WEB
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLinkClick}
              to="#"
              className="btn btn-secondary"
            >
              CONTACT SALE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
