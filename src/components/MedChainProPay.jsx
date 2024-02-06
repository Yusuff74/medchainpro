import React from "react";
import Header from "../utilities/Header";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import SemiFooter from "../utilities/SemiFooter";
import Footer from "../utilities/Footer";

const MedChainProPay = () => {
  const headerStyle = {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#484848",
    width: "100%",
  };

  const cardText = {
    color: "#484848",
    fontSize: "0.9rem",
    fontWeight: "600",
    marginBottom: ".3rem",
  };

  const listStyle = {
    marginBottom: "43px",
    listStyle: "circle",
  };

  const smallText = { color: "#484848", fontSize: "0.9rem" };

  return (
    <div>
      <Header
        badgeStyle="badge text-bg-primary py-4 px-3"
        badgeText="MedChainPro Pay"
        firstP="With DrugStoc Pay, money is no problem."
        secondP="Access interest free credit to instantly stock your pharmacy with DrugStoc Pay. Instant access. Zero interest. Flexible payment. 100% Transparent"
        imgLink="https://res.cloudinary.com/bizstak/image/upload/v1684243495/banner_llxztw.png"
      />

      {/* section */}

      <div className="mt-5">
        <h3 style={headerStyle}>
          No-hassle financing for your <br /> Healthcare Business{" "}
        </h3>
        <div className="container mt-5">
          <div className="row">
            <div className=" col-12 col-lg-2"></div>
            <div className="col-12 col-lg-4 mb-3">
              <div className="card" style={{ padding: "4rem 1rem" }}>
                <div className="card-body">
                  <img
                    src="https://www.drugstoc.com/images/careers/30.svg"
                    style={{ width: "50px" }}
                  />
                  <h4 style={cardText}>No Deposit Required, No Collateral</h4>
                  <p>
                    Enjoy Easy Access To Instant Loans Now - Easy To Apply, No
                    Long Form To Fill, And No Collateral Is Required
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card" style={{ padding: "4rem 1rem" }}>
                <div className="card-body">
                  <img
                    src="https://www.drugstoc.com/images/careers/40.svg"
                    style={{ width: "50px" }}
                  />
                  <h4 style={cardText}>Flexible repayment Options</h4>
                  <p>
                    Grow your practice by selecting from various repayment
                    options available to you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgb(255, 248, 240)",
          marginTop: "3rem",
          paddingTop: "2rem",
        }}
      >
        <div className="container">
          <h4
            style={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: ".9rem",
            }}
          >
            How MedChainPro Pay Works?
          </h4>
          <div className="row mt-5">
            <div className="col-lg-5">
              <ul>
                <li style={listStyle}>
                  Get qualified to Request credit on your DrugStoc Pay account
                </li>
                <li style={listStyle}>
                  Receive the funds in your DrugStoc Wallet.
                </li>
                <li style={listStyle}>
                  Use funds to order pharmaceuticals and fill up your shelves.
                </li>
                <li style={listStyle}>
                  Send funds from your Wallet into your other accounts.
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684432164/credit_ajbcq2.png"
                style={{ width: "100%" }}
              />
            </div>
            <div className="flex justify-center mt-5">
              <Link className="btn btn-primary py-3 px-4">DOWNLOAD MOBILE</Link>
            </div>
          </div>
        </div>
      </div>

      <SemiFooter />

      <div
        className="container"
        style={{ marginTop: "6rem", marginBottom: "3rem" }}
      >
        <h3 style={headerStyle} className="text-center my-5 py-5">
          FAQs (Frequently Asked Questions)
        </h3>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is MedChainPro Pay?</Accordion.Header>
            <Accordion.Body style={smallText}>
              MedChainPro pay is a digital wallet system, as well as a payment
              solution that facilitates stock financing for health Institutions
              and practitioners. It offers a flexible payment option such as pay
              in bits.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How do I fund my wallet?</Accordion.Header>
            <Accordion.Body style={smallText}>
              This can be done via your account page. Navigate to your
              MedChainPro pay menu and click the fund account button.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Can I use MedChainPro Pay on my first purchase?
            </Accordion.Header>
            <Accordion.Body style={smallText}>
              Yes, you can, however, you would need to fund your wallet if no
              available supplier credit
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How do I access the funds in my wallet?
            </Accordion.Header>
            <Accordion.Body style={smallText}>
              How secure is the wallet?
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Can any POS device be synced with my wallet?
            </Accordion.Header>
            <Accordion.Body style={smallText}>
              No, you can’t sync any POS device to your wallet. It has to be the
              one setup for the wallet system.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              How do I sign-up for MedChainPro pay
            </Accordion.Header>
            <Accordion.Body style={smallText}>
              To sign up for MedChainPro pay, simply create an account on the
              ecommerce platform, proceed to the MedChainPro pay menu and create
              your security pin. After this the system automatically activates
              your MedChainPro pay wallet withing 24hrs which you can then use
              to make transaction on the platform.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>Is MedChainPro pay free to use</Accordion.Header>
            <Accordion.Body style={smallText}>
              MedChainPro pay has no hidden charges. It is completely free to
              use.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>
              Does MedChainPro pay enable me to withdraw my money if I choose
              to?
            </Accordion.Header>
            <Accordion.Body style={smallText}>
              Yes, you can withdraw your money by simply following the
              withdrawal prompts on your screen after hitting the withdraw
              button.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              Can I view all transactions performed with the MedChainPro pay?
            </Accordion.Header>
            <Accordion.Body style={smallText}>
              Yes, you can. This information can be accessed via the MedChainPro
              default menu page
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
};

export default MedChainProPay;
