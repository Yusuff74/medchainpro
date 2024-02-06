import React from "react";
import Footer from "../utilities/Footer";

const Home = () => {
  const headerStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#484848",
    width: "100%",
  };
  const medStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#484848",
    width: "100%",
  };

  const imgStyle = {
    width: "150px",
    height: "45px",
    border: "1px solid black",
    borderRadius: "5px",
  };

  const smallText = { color: "#484848", fontSize: "0.9rem" };

  return (
    <div>
      <div className="container">
        <div className="row" style={{ width: "100%", marginTop: "4rem" }}>
          <div className="col-12 col-lg-6  pt-20">
            <h1 style={headerStyle}>Welcome To</h1>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                color: "#4c70d6",
              }}
            >
              MedChainPro
            </p>
            <p style={smallText}>
              Your Premier B2B Pharmaceutical supply chain partner in Nigeria.
              We streamline the process for pharmacy stores to place bulk orders
              through our innovative platform..
            </p>
            <p className="pt-5" style={smallText}>
              At <span style={medStyle}>MedChainPro</span>, we connect pharmacy
              stores with top pharmaceutical companies, providing a seamless and
              efficient way to fulfill bulk orders. Our platform simplifies the
              procurement process, ensuring quality, rekliability, and timely
              deliveries
            </p>
            <div className="pt-5 flex">
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684244266/google-play-alt_urfsrl.svg"
                style={imgStyle}
                className="mr-1"
              />
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684244274/app-store-alt_sc7dml.svg"
                className="ml-1"
                style={imgStyle}
              />
            </div>
            <div className="d-flex mt-3">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSkRGahtMCrOCRzRtfm3Cx7gSZbm0Z2b9JwAaXvEQXMiew3HVTA"
                style={{ width: "100px", height: "51px", borderRadius: "40%" }}
              />
              <div className="ml-5">
                <img
                  src="https://res.cloudinary.com/bizstak/image/upload/v1684247082/stars_g4klpd.svg"
                  style={{ width: "90px", height: "15px" }}
                />
                <p style={smallText}>
                  Highly Rated by 3000+ Healthcare Providers
                </p>
              </div>
            </div>
            <div className="mt-3 flex">
              <p className="mr-1">Licensed by PCN</p>
              <p className="ml-1">ISO 9001-2015 certified</p>
            </div>
          </div>
          <div className="d-none d-lg-block col-6">
            <img
              src="https://res.cloudinary.com/bizstak/image/upload/v1684239587/banner_uhxkbs.png"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="text-center" style={{ marginTop: "5rem" }}>
          <p>Trusted by Global Brands</p>
        </div>
        <div className="container text-center">
          <div className="row mt-5 mb-5 justify-content-center">
            <div className="col-sm-4 my-2 col-4">
              <img
                src="https://www.drugstoc.com/images/landing/partners/gsk.svg"
                style={{ width: "60px" }}
              />
            </div>
            <div className="col-sm-4 my-2 col-4">
              <img
                src="https://www.drugstoc.com/images/landing/partners/emzor.svg"
                style={{ width: "60px" }}
              />
            </div>
            <div className="col-sm-4 my-2 col-4">
              <img
                src="https://www.drugstoc.com/images/landing/partners/pifezr.svg"
                style={{ width: "60px" }}
              />
            </div>
            <div className="col-sm-4 my-2 col-4">
              <img
                src="https://www.drugstoc.com/images/landing/partners/rb.svg"
                style={{ width: "60px" }}
              />
            </div>
            <div className="col-sm-4 my-2 col-4">
              <img
                src="https://www.drugstoc.com/images/landing/partners/sanofi.svg"
                style={{ width: "60px" }}
              />
            </div>
            <div className="col-sm-4 my-2 col-4">
              <img
                src="https://www.drugstoc.com/images/landing/partners/merck.svg"
                style={{ width: "60px" }}
              />
            </div>
          </div>
          <div className="mt-5">
            <p>
              We work with more than 400 Pharmaceutical Manufacturers to deliver
              anti-counterfeit medication to the last mile.
            </p>
          </div>
        </div>
        <div className="mt-5 pt-5 text-center">
          <h1
            style={{ fontWeight: "600", fontSize: "1.4rem", color: "#484848" }}
          >
            Key Features And Benefits:
          </h1>
        </div>
        <div className="row mt-5">
          <div className="d-none d-lg-block col-6 mt-7">
            <img
              src="https://www.drugstoc.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbizstak%2Fimage%2Fupload%2Fv1684242950%2FImage-1_ceo26i.png&w=1600&q=75"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <ul style={{ listStyle: "square" }}>
              <li> Extensive Network Of Pharmaceutical Companies</li>
              <li>
                Comprehensive Product Catalog With Detailed Descriptions And
                Pricing
              </li>
              <li>Secure Payment And Checkout Procedures</li>
              <li>User-Friendly Platform For Easy Order Placement</li>
              <li>Timely And Reliable Delivery Service</li>
            </ul>
          </div>
          <p className="text-center pt-5 font-bold">
            Call-to-Action: Ready to revolutionize your pharmaceutical supply
            chain? Register for an account today and experience the future of
            bulk ordering
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
