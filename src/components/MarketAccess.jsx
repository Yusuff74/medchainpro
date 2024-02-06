import React from "react";
import Header from "../utilities/Header";
import { Link } from "react-router-dom";
import SemiFooter from "../utilities/SemiFooter";
import Footer from "../utilities/Footer";

const MarketAccess = () => {
  const pStyle = { fontSize: ".8rem", color: "#484848", lineHeight: "1.7" };

  const cardText = { fontSize: ".9rem", color: "#484848", fontWeight: "600" };

  const imgStyle = { width: "50px", margin: "2rem 0" };

  const cardElements = [
    {
      src: "https://www.drugstoc.com/images/careers/pharmacy-products.svg",
      text: "Pharmacy Products",
    },
    {
      src: "https://www.drugstoc.com/images/careers/small-device.svg",
      text: "Small Medical Devices",
    },
    {
      src: "https://www.drugstoc.com/images/careers/medical-consumables.svg",
      text: "Medical Consumables",
    },
    {
      src: "https://www.drugstoc.com/images/careers/rapid-test.svg",
      text: "Rapid Diagnostic Tests",
    },
    {
      src: "https://www.drugstoc.com/images/careers/career-5.svg",
      text: "Cold Chain Products",
    },
    {
      src: "https://www.drugstoc.com/images/careers/specialty-item.svg",
      text: "Specialty Items in Tertiary Care",
    },
  ];
  return (
    <div>
      <div>
        <Header
          badgeStyle="badge text-bg-warning py-4 px-3"
          badgeText="MARKET ACCESS"
          firstP="Thinking about the African market?
Get your products to your target audience"
          secondP="We use data driven insights and a new-age hybrid distribution model to
create access for your products to the people who need it the most."
          imgLink="https://res.cloudinary.com/bizstak/image/upload/v1684432327/market-access_sigt8p.png"
        />
      </div>

      <div className="container" style={{ margin: "4rem 0" }}>
        <h5
          style={{
            fontSize: ".8rem",
            color: "#4c70d6",
            textAlign: "center",
            lineHeight: "1.7",
          }}
        >
          HOW MARKET ACCESS WORK?
        </h5>
        <h3
          style={{
            fontSize: "1.4rem",
            fontWeight: "bold",
            color: "#000",
            lineHeight: "1.6",
            marginBottom: "4rem",
            textAlign: "center",
          }}
        >
          For Pharmaceutical Manufacturers
        </h3>
        <div className="row">
          <div className="d-none d-lg-block col-lg-6">
            <img
              src="https://res.cloudinary.com/bizstak/image/upload/v1684432433/section-2_chabbw.png"
              alt="banner"
            />
          </div>
          <div className="col-12 col-lg-6">
            <p style={pStyle}>
              We provide end-to-end services to ensure that you have a reliable
              market access partner. These services include:
            </p>
            <ul className="row" style={{ listStyle: "circle" }}>
              <li className="col-lg-6 p-4">Regulatory Affairs</li>
              <li className="col-lg-6 p-4">
                Data Driven Pricing and Demand Data
              </li>
              <li className="col-lg-6 p-4">Distribution and Warehousing</li>
              <li className="col-lg-6 p-4">Registration Services</li>
              <li className="col-lg-6 p-4">
                Track and Trace your Products Live
              </li>
              <li className="col-lg-6 p-4">
                Marketing and Merchandising Services
              </li>
            </ul>
            <p style={pStyle}>
              Open up a new frontier with a reliable partner that prioritises
              quality and waste reduction. Solidify your presence within a
              growing market with immense potential. Let's get the conversation
              started.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ margin: "4rem 0" }}>
        <h2
          style={{
            fontSize: "1.4rem",
            fontWeight: "bold",
            color: "@000",
            textAlign: "center",
            lineHeight: "1.7",
            marginBottom: "3rem",
          }}
        >
          Your medical products, simply delivered
        </h2>
        <p className="mb-5 text-center" style={pStyle}>
          We Specialise In:
        </p>
        <div className="container">
          <div className="row">
            {cardElements.map((element) => (
              <div className="col-12 col-lg-4 py-3">
                <div className="card">
                  <div className="card-body">
                    <img src={element.src} style={imgStyle} />
                    <h4 style={cardText}>{element.text}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ margin: "4rem 0", textAlign: "center" }}
      >
        <div className="flex justify-center">
          <Link className="flex" style={{ textDecoration: "none" }}>
            <p className="pr-2"> Send Us Email</p>
            <img
              src="https://www.drugstoc.com/images/arrow.svg"
              style={{ width: "30px" }}
            />
          </Link>
        </div>
      </div>

      <div>
        <SemiFooter />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MarketAccess;
