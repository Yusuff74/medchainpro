import React from "react";
import Footer from "../utilities/Footer";
import Header from "../utilities/Header";
import { Link } from "react-router-dom";

const Partnership = () => {
  return (
    <div>
      <div>
        <Header
          badgeText="WE BELIEVE IN PARTNERSHIPS"
          badgeStyle="badge text-bg-warning py-4 px-3"
          firstP="We partner with mission driven organizations"
          secondP="To build an inclusive supply chain in healthcare, DrugStoc understands the need to work
and collaborate with mission driven organisations with a similar vision to increase access to affordable and genuine medications in emerging Economies."
          imgLink="https://res.cloudinary.com/bizstak/image/upload/v1684432694/banner_1_qi5elw.png"
        />
      </div>

      <div className="p-4" style={{ marginTop: "5rem" }}>
        <div className="text-center">
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              lineHeight: "1.7",
              color: "#000",
              marginBottom: "1rem",
            }}
          >
            Some Of Our Global Pharmaceutical Partners
          </h2>
          <p>
            We work with more than 400 Pharmaceutical companies to deliver
            anti-countefeit drugs to last mile patients
          </p>
        </div>
        <div className="container text-center">
          <div className="row mt-5 mb-5 justify-content-center">
            <div className="col-sm-4 my-2 col-4">
              <img
                src="https://www.drugstoc.com/images/landing/partners/gsk.svg"
                style={{ width: "80px" }}
              />
            </div>
            <div className="col-sm-4 my-2 col-4">
              <img
                src="https://www.drugstoc.com/images/landing/partners/emzor.svg"
                style={{ width: "80px" }}
              />
            </div>
            <div className="col-sm-4 my-2 col-4">
              <img
                src="https://www.drugstoc.com/images/landing/partners/pifezr.svg"
                style={{ width: "80px" }}
              />
            </div>
            <div className="col-sm-4 my-2 col-4">
              <img
                src="https://www.drugstoc.com/images/landing/partners/rb.svg"
                style={{ width: "80px" }}
              />
            </div>
            <div className="col-sm-4 my-2 col-4">
              <img
                src="https://www.drugstoc.com/images/landing/partners/sanofi.svg"
                style={{ width: "80px" }}
              />
            </div>
            <div className="col-sm-4 my-2 col-4">
              <img
                src="https://www.drugstoc.com/images/landing/partners/merck.svg"
                style={{ width: "80px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "5rem",
          backgroundColor: "rgb(245, 234, 222)",
          padding: "2rem 0",
        }}
      >
        <div className="text-center">
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              lineHeight: "1.7",
              color: "#484848",
              marginBottom: "1rem",
            }}
          >
            Some of our Strategic Partners
          </h2>
          <p>
            DrugStoc is backed and supported by some of the world’s most
            experienced and knowledgable investors and partners in the
            healthcare sector
          </p>
        </div>
        <div className="container text-center">
          <div className="row mt-5 mb-5 justify-content-center">
            <div className="col-lg-3 my-2 col-6">
              <img
                src="https://www.drugstoc.com/images/about-us/investors/growth-capital.svg"
                className="py-4"
                style={{ width: "100px" }}
              />
            </div>
            <div className="col-lg-3 my-2 col-6">
              <img
                src="https://www.drugstoc.com/images/about-us/investors/vested-world.svg"
                className="py-4"
                style={{ width: "100px" }}
              />
            </div>
            <div className="col-lg-3 my-2 col-6">
              <img
                src="https://www.drugstoc.com/images/about-us/investors/bnm.svg"
                className="py-4"
                style={{ width: "100px" }}
              />
            </div>
            <div className="col-lg-3 my-2 col-6">
              <img
                src="https://www.drugstoc.com/images/about-us/investors/ripple-works.svg"
                className="py-4"
                style={{ width: "100px" }}
              />
            </div>
            <div className="col-lg-3 my-2 col-6">
              <img
                src="https://www.drugstoc.com/images/about-us/investors/on.svg"
                className="py-4"
                style={{ width: "100px" }}
              />
            </div>
            <div className="col-lg-3 my-2 col-6">
              <img
                src="https://www.drugstoc.com/images/about-us/investors/creadev.svg"
                className="py-4"
                style={{ width: "100px" }}
              />
            </div>
            <div className="col-lg-3 my-2 col-6">
              <img
                src="https://www.drugstoc.com/images/about-us/investors/khosla.svg"
                className="py-4"
                style={{ width: "100px" }}
              />
            </div>
            <div className="col-lg-3 my-2 col-6">
              <img
                src="https://www.drugstoc.com/images/about-us/investors/greycroft.svg"
                className="py-4"
                style={{ width: "100px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="pb-sm-4"
        style={{ marginTop: "4rem", backgroundColor: "rgb(226, 238, 221)" }}
      >
        <div className="row">
          <div className="col-lg-6 col-12">
            <img
              src="https://res.cloudinary.com/bizstak/image/upload/v1684432815/section-2_1_tg0fcz.png"
              className="img-fluid"
            />
          </div>
          <div
            className="col-lg-6 col-12 text-center"
            style={{ paddingTop: "6rem" }}
          >
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                color: "#484848",
                lineHeight: "1.7",
              }}
            >
              Get In Touch
            </h2>
            <p style={{ margin: "1rem 0" }}>
              We welcome all enquiries from partners with a mutual mission.
            </p>
            <Link className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Partnership;
