import React from "react";
import { Link } from "react-router-dom";
import Header from "../utilities/Header";
import SemiFooter from "../utilities/SemiFooter";
import Footer from "../utilities/Footer";

const RxInsight = () => {
  const pStyle = { fontSize: ".8rem", color: "#484848", lineHeight: "1.7" };
  return (
    <div>
      <div>
        <Header
          badgeText="MARKET INSIGHT"
          badgeStyle="badge text-bg-warning py-4 px-3"
          firstP="Data-driven market insights for Phamaceutical companies"
          secondP="We offer qualitative and quantitative insights to help
pharmaceutical manufacturers, government institutions and
Pharmacy business owners to make smarter decisions"
          imgLink="https://www.drugstoc.com/images/market-insight/market-insights.svg"
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
          HOW MARKET INSIGHT CAN HELP YOU?
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
          For Pharmaceutical Companies
        </h3>
        <div className="row">
          <div className="d-none d-lg-block col-lg-6">
            <img
              src="https://res.cloudinary.com/bizstak/image/upload/v1684432599/section-1_enpv7k.png"
              alt="banner"
            />
          </div>
          <div className="col-12 col-lg-6">
            <p style={pStyle}>
              Take out all guess work away from your decision making
              processes.We use more than 300 data points to help provide
              powerful insights tailored to your specific business needs.
            </p>
            <ul style={{ listStyle: "circle" }}>
              <li className="p-4">
                Identify ways to lower costs and improve revenues
              </li>
              <li className="p-4">
                Identify the market potential for new products
              </li>
              <li className="p-4">Pinpoint what is impacting sales</li>
              <li className="p-4">
                Understand market perception about your products
              </li>
              <li className="p-4">
                Customise your insights to solve your growth challenges
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container" style={{ margin: "4rem 0" }}>
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
          For Stakeholders & Decision Makers
        </h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            <p style={pStyle}>
              Leverage on our unique market insights to positively transform
              your business. From growing your pharmacy sales, to benchmarking
              market prices for retailers and interested organisations, to
              providing insight to design your next marketing campaign, we are
              here to help you navigate the chaos. We work with:
            </p>
            <ul style={{ listStyle: "circle" }}>
              <li className="p-4">Consumer Health Companies</li>
              <li className="p-4">Wholesalers</li>
              <li className="p-4">Government instititutions</li>
              <li className="p-4">Non Governmental Organizations</li>
              <li className="p-4">Retailers</li>
              <li className="p-4">Health Insurance Companies</li>
            </ul>
            <p style={pStyle}>
              We worked with the wonderful people at Rippleworks to ensure the
              integrity of our data sets. Our data comply with F.A.I.R
              Standards.
            </p>
          </div>
          <div className="d-none d-lg-block col-lg-6">
            <img
              src="https://res.cloudinary.com/bizstak/image/upload/v1684242904/Image-4_qxvjml.png"
              alt="banner"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link className="flex" style={{ textDecoration: "none" }}>
          <p className="pr-2"> Send Us Email</p>
          <img
            src="https://www.drugstoc.com/images/arrow.svg"
            style={{ width: "30px" }}
          />
        </Link>
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

export default RxInsight;
