import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const headerStyle = {
    fontSize: ".9rem",
    fontWeight: "600",
    color: "#484848",
    lineHeight: "22px",
  };
  const LinkStyle = {
    textDecoration: "none",
    fontSize: "13px",
    lineHeight: "34px",
    color: "#484848",
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 col-md-3">
            <h2 style={headerStyle}>Company</h2>
            <ul style={{ padding: "0" }}>
              <li>
                <Link style={LinkStyle} to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link style={LinkStyle}>Careers at MedChainPro</Link>
              </li>
              <li>
                <Link style={LinkStyle}>Contact</Link>
              </li>
              <li>
                <Link style={LinkStyle}>Terms and Condition</Link>
              </li>
              <li>
                <Link style={LinkStyle}>Return Policy</Link>
              </li>
              <li>
                <Link style={LinkStyle}>Privacy</Link>
              </li>
              <li>
                <Link style={LinkStyle}>Blog</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h2 style={headerStyle}>Our Solutions</h2>
            <ul style={{ padding: "0" }}>
              <li>
                <Link style={LinkStyle} to="#">
                  Procure Direct
                </Link>
              </li>
              <li>
                <Link style={LinkStyle}>MedChainPro Credit</Link>
              </li>
              <li>
                <Link style={LinkStyle}>RXDelivery</Link>
              </li>
              <li>
                <Link style={LinkStyle}>Matrket Access</Link>
              </li>
              <li>
                <Link style={LinkStyle}>RXInsights</Link>
              </li>
              <li>
                <Link style={LinkStyle}>Shop on Web</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h2 style={headerStyle}>Our Clients</h2>
            <ul style={{ padding: "0" }}>
              <li>
                <Link style={LinkStyle} to="#">
                  For Pharmacy
                </Link>
              </li>
              <li>
                <Link style={LinkStyle}>For Hospitals & Clinics</Link>
              </li>
              <li>
                <Link style={LinkStyle}>For Licensed Medical Practitioner</Link>
              </li>
              <li>
                <Link style={LinkStyle}>For HMOs</Link>
              </li>
              <li>
                <Link style={LinkStyle}>For Government Facilities</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h2 style={headerStyle}>Address</h2>
            <ul style={{ padding: "0" }}>
              <li>
                <Link style={LinkStyle} to="#">
                  MedChainPro Inc.
                </Link>
              </li>
              <h2 style={headerStyle}>Contact Us</h2>
              <li>
                <Link style={LinkStyle}>+234(0)1 7005571</Link>
              </li>
              <li>
                <Link style={LinkStyle}>Contact Email</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
