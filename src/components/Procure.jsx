import React from "react";
import { Accordion } from "react-bootstrap";
import TwoRowContainer from "../utilities/TwoRowContainer";
import Footer from "../utilities/Footer";
import Header from "../utilities/Header";
import SemiFooter from "../utilities/SemiFooter";

const Procure = () => {
  const headerStyle = {
    fontSize: "2rem",
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

  const imageStyle = {
    width: "100%",
    height: "400px",
    objectFit: "contain",
    objectPosition: "left center",
  };
  return (
    <div>
      <Header
        badgeStyle="badge text-bg-warning py-4 px-3"
        badgeText="Procure Direct Page"
        firstP="Never run out of medications for your patients"
        secondP="Revolutionize how you discover and order products for your practice. Get quality pharmaceutical products delivered to your facility or practice on time."
        imgLink="https://res.cloudinary.com/bizstak/image/upload/v1684435030/banner_2_e8iq3h.png"
      />

      {/* section */}

      <div className="container" style={{ marginTop: "4rem" }}>
        <TwoRowContainer
          element1={
            <>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684434886/supply_e6qfeg.png"
                className="mb-3 mb-lg-0"
                style={imageStyle}
              />
            </>
          }
          element2={
            <div className="mt-5">
              <h3 style={headerStyle} className="my-3">
                Anti-counterfiet <br />
                Supply Chain
              </h3>
              <p style={smallText} className="mb-3">
                Our supply chain is end to end traceable trackable leaving no
                room for substandard or counterfiet product to contaminate your
                purchases
              </p>
              <p style={smallText}>
                Our quality service system are ISO 9001-2015 Certified for Good
                Distribution Practice and Quality Management Systems.
              </p>
            </div>
          }
        />
      </div>

      {/* section */}

      <div
        className="container-fluid"
        style={{
          backgroundColor: "rgb(255, 248, 240)",
          marginTop: "4rem",
          padding: "4rem 0",
        }}
      >
        <div className="container">
          <TwoRowContainer
            element1={
              <>
                <div className="mt-5">
                  <h3 className="my-5" style={headerStyle}>
                    7000+ Products, <br />
                    24/7 Delivery Services
                  </h3>
                  <p className="mb-3" style={smallText}>
                    Join the MedChainPro family and get access to over 7000+
                    products in the palm of your hand. We take orders 24/7 and
                    have express delivery on all orders purchased in MedChainPro
                    Coverage Zones. All our products are long-dated to help you
                    manage your expiry.
                  </p>
                </div>
              </>
            }
            element2={
              <>
                <img
                  src="https://res.cloudinary.com/bizstak/image/upload/v1684434961/section-2_2_muzguo.png"
                  className="mb-3 mb-lg-0"
                  style={imageStyle}
                />
              </>
            }
          />
        </div>
      </div>

      {/* section */}

      <div className="container" style={{ marginTop: "4rem" }}>
        <TwoRowContainer
          element1={
            <>
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684434886/supply_e6qfeg.png"
                className="mb-3 mb-lg-0"
                style={imageStyle}
              />
            </>
          }
          element2={
            <div className="mt-5">
              <h3 style={headerStyle} className="my-3">
                Flexible Financing <br />
                Options
              </h3>
              <p style={smallText} className="mb-3">
                Keep your shelves well-stocked while we help manage your
                end-to-end inventory with a seamless payment plan.
              </p>
              <p style={smallText}>
                Gain access to a parsonalised purchasing officer to help you at
                every step of your way.
              </p>
            </div>
          }
        />
      </div>

      {/* Section */}

      <div
        className="container"
        style={{ marginTop: "6rem", marginBottom: "3rem" }}
      >
        <h3 style={headerStyle} className="text-center my-5 py-5">
          Your frequently asked questions, answered
        </h3>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>WHO IS THIS PLATFORM FOR?</Accordion.Header>
            <Accordion.Body style={smallText}>
              This platform is for any and all registered healthcare providers
              and professionals. This includes nurses, pharmacists, medical
              doctors, pharmacies, hospitals, clinics, laboratories, and
              healthcare NGOs.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>HOW DO I SIGN UP OR REGISTER?</Accordion.Header>
            <Accordion.Body style={smallText}>
              Our sign up process requires two simple steps. Register on the
              Mobile App or Website. Submit your credentials to verify your
              license or facility.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              ARE YOU AN ONLINE ONLY PLATFORM?
            </Accordion.Header>
            <Accordion.Body style={smallText}>
              Our platform is an omni-channel one, Even though the app is the
              easiest way to access products and manage orders, you can also
              call, email, visit, or chat with any of our customer service
              agents anytime.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>WHY SHOULD I TRUST YOU?</Accordion.Header>
            <Accordion.Body style={smallText}>
              Drugstoc is fully licensed and accredited for operations by the
              Pharmaceutical Council of Nigeria. Our fulfilment and storage
              facilities are ISO 9001-2015 Certified for Good Distribution
              Practice and Quality Management Systems.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      {/* section */}

      <SemiFooter />

      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Procure;
