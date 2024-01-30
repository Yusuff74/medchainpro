import React from "react";
import Footer from "./Footer";

const About = () => {
  const medStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#484848",
    width: "100%",
  };
  return (
    <div className="mt-6">
      <div
        className="container-fluid w-100"
        style={{
          backgroundColor: "rgb(226, 238, 246)",
          marginTop: "4rem",
        }}
      >
        <div className="row">
          <div className="col-lg-6" style={{ padding: "8rem 0.5rem" }}>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                lineHeight: "1.4",
                marginBottom: "1.8rem",
                color: "#484848",
              }}
            >
              Why MedChainPro?
            </h1>
            <h5
              style={{
                fontSize: "0.9rem",
                color: "rgb(39, 45, 78)",
                lineHeight: "2rem",
                marginBottom: "1rem",
              }}
            >
              Access to genuine medication in emerging economies is broken,
              DrugStoc wants to fix it.
            </h5>
            <p
              style={{
                fontSize: "0.8rem",
                lineHeight: "1.4",
                color: "#484848",
              }}
            >
              Africa records ~100,000 deaths from counterfeit and substandard
              medication a year due to unreliable supply chains.
            </p>
            <p
              style={{
                fontSize: ".8rem",
                color: "#484848",
                lineHeight: "1.7",
                marginTop: "3rem",
              }}
            >
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684247462/throphy_kpv7fo.svg"
                className="w-30 h-30 w-sm-20 h-sm-20"
              />
              Winner, Nigeria Healthcare Excellence Awards 2019 & 2021
            </p>
            <h5
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                lineHeight: "1.4",
                color: "#484848",
              }}
            >
              Company Background
            </h5>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgb(39, 45, 78)",
                lineHeight: "2rem",
                marginBottom: "1rem",
              }}
            >
              {" "}
              Established with a passion for transforming pharmaceutical supply
              chain, <span style={medStyle}>MedChainPro</span> is a B2B platfrom
              dedicated to simplifying the procurement process for pharmacy
              stores.
            </p>
          </div>
          <div
            className="col-lg-6 d-lg-block d-none"
            style={{ padding: "0", objectFit: "cover" }}
          >
            <img src="https://res.cloudinary.com/bizstak/image/upload/v1684235697/banner_i6jd4m.png" />
          </div>
        </div>
      </div>
      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="card mb-5 mb-lg-0" style={{ height: "15rem" }}>
                <div className="card-body">
                  <h4
                    style={{
                      fontWeight: "bold",
                      lineHeight: "1.7",
                      color: "#000",
                    }}
                  >
                    Our Vision
                  </h4>
                  <img
                    src="https://res.cloudinary.com/bizstak/image/upload/v1684238287/vision_xjsbgx.png"
                    className="card-img"
                    style={{ height: "74px", width: "74px" }}
                  />
                  <p
                    style={{
                      fontSize: ".8rem",
                      lineHeight: "1.78",
                      color: "#484848",
                    }}
                  >
                    To be the leading B2B pharmaceutical supply chain solution
                    in Nigeria and beyond
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card mb-5 mb-lg-0" style={{ height: "15rem" }}>
                <div className="card-body">
                  <h4
                    style={{
                      fontWeight: "bold",
                      lineHeight: "1.7",
                      color: "#000",
                    }}
                  >
                    Our Mission
                  </h4>
                  <img
                    src="https://res.cloudinary.com/bizstak/image/upload/v1684236043/rocket_nys2bq.png"
                    className="card-img "
                    style={{ height: "74px", width: "74px" }}
                  />
                  <p
                    style={{
                      fontSize: ".8rem",
                      lineHeight: "1.78",
                      color: "#484848",
                    }}
                  >
                    To enhance accessibility and efficiency in the
                    pharmaceutical supply chain, ensuring the seamless flow of
                    essential healthcare products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
