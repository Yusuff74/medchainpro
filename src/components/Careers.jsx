import React from "react";
import { Link } from "react-router-dom";
import SemiFooter from "../utilities/SemiFooter";
import Footer from "../utilities/Footer";

const Careers = () => {
  const headerStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#484848",
    width: "100%",
  };

  const thStyle = {
    color: "#484848",
    fontSize: ".9rem",
    fontWeight: "400",
  };

  const imgStyle = {
    width: "50px",
    margin: "2rem 0",
  };

  const cardHead = {
    fontSize: ".9rem",
    fontWeight: "600",
    color: "#484848",
    marginBottom: ".3rem",
  };
  const cardText = {
    fontSize: ".9rem",
    fontWeight: "normal",
    color: "#484848",
    marginBottom: "2rem",
    marginTop: "1rem",
  };

  const smallText = { color: "#484848", fontSize: "0.9rem" };

  const jobsDetails = [
    {
      position: "Sales Associates across Nigeria",
      role: "Sales Assocciate",
      type: "Full Time",
      location: "Lagos",
    },
    {
      position: "Procurement Associate",
      role: "Procurement Associate",
      type: "Full Time",
      location: "Lagos",
    },
    {
      position: "Executive Assistant to the Executive Office",
      role: "Executive Assistant",
      type: "Full Time",
      location: "Lagos",
    },
    {
      position: "Quality Assurance Associate",
      role: "Quality Assurance Associate",
      type: "Full Time",
      location: "Lagos",
    },
    {
      position: "Flutter Mobile App Developer",
      role: "Flutter Mobile App Developer",
      type: "Full Time",
      location: "Lagos",
    },
    {
      position: "React/Next Developer",
      role: "React/Next Front-end Developer",
      type: "Full Time",
      location: "Lagos",
    },
  ];
  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6" style={{ paddingTop: "10rem" }}>
              <h2 style={headerStyle}>
                Let your ideas be heard, let us actuate Africa's potential
                together
              </h2>
              <p className="mt-5" style={smallText}>
                Join a team that will unlock the well being of Africans, in our
                lifetime.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <img
                src="https://res.cloudinary.com/bizstak/image/upload/v1684431969/banner_jiwfet.png"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center" style={{ marginTop: "5rem", width: "100%" }}>
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            color: "rgb(75, 112, 214)",
            lineHeight: "1.7",
            marginBottom: "3rem",
          }}
        >
          Together we will solve some <br />
          of the biggest challenges <br />
          in healthcare.
        </h2>
        <p>
          So let's see where you fit in. <br />
          Discover why the brightest minds find home in working with us.
        </p>

        <Link className="btn btn-md btn-primary">Apply</Link>
        <div>
          <img
            src="https://res.cloudinary.com/bizstak/image/upload/v1684242847/Image-5_hmnvh4.png"
            style={{ margin: "5rem auto auto", width: "90%" }}
          />
        </div>
      </div>

      <div style={{ overflowX: "scroll" }}>
        <div
          className="container"
          style={{ marginTop: "5rem", marginBottom: "5rem" }}
        >
          <h2 className="text-center mb-5" style={headerStyle}>
            Available Vacancies
          </h2>

          <table className="table table-striped" style={{ color: "#484848" }}>
            <thead>
              <th>Job Position</th>
              <th>Role</th>
              <th>Type</th>
              <th>Location</th>
              <th>
                <button className="btn btn-outline-primary text-primary">
                  View
                </button>
              </th>
              <th>
                <button className="btn btn-outline-primary text-primary">
                  Apply
                </button>
              </th>
            </thead>
            <tbody>
              {jobsDetails.map((job) => (
                <tr>
                  <th style={thStyle}>{job.position}</th>
                  <th style={thStyle}>{job.role}</th>
                  <th style={thStyle}>{job.type}</th>
                  <th style={thStyle}>{job.location}</th>
                  <th>
                    <button className="btn btn-primary">VIEW</button>
                  </th>
                  <th>
                    <button className="btn btn-primary">APPLY</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <section
        style={{
          marginTop: "2rem",
          padding: "5rem 0",
          backgroundColor: "rgb(44, 77, 167)",
        }}
      >
        <div className="container">
          <h2 className="text-white text-center mb-5" style={headerStyle}>
            Benefit Of Working With Us
          </h2>
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="card my-3">
                <div className="card-body">
                  <img
                    src="https://www.drugstoc.com/images/careers/1.svg"
                    style={imgStyle}
                  />
                  <h4 style={cardHead}>Health Insurance</h4>
                  <p style={cardText}>
                    Our comprehensive medical insurance covers you and your
                    family
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="card my-3">
                <div className="card-body">
                  <img
                    src="https://www.drugstoc.com/images/careers/2.svg"
                    style={imgStyle}
                  />
                  <h4 style={cardHead}>Traction and scale</h4>
                  <p style={cardText}>
                    Your opportunity to impact products, connect with customers,
                    and help us scale is massive.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="card my-3">
                <div className="card-body">
                  <img
                    src="https://www.drugstoc.com/images/careers/3.svg"
                    style={imgStyle}
                  />
                  <h4 style={cardHead}>Young Family Friendly</h4>
                  <p style={cardText}>
                    We offer flexible working hours for new parents
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="card my-3">
                <div className="card-body">
                  <img
                    src="https://www.drugstoc.com/images/careers/4.svg"
                    style={imgStyle}
                  />
                  <h4 style={cardHead}>Learning and development</h4>
                  <p style={cardText}>
                    With the fast pace of our environment, you're sure to
                    acquire new skills
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="card my-3">
                <div className="card-body">
                  <img
                    src="https://www.drugstoc.com/images/careers/5.svg"
                    style={imgStyle}
                  />
                  <h4 style={cardHead}>Do what you love</h4>
                  <p style={cardText}>
                    Life is too short to work without purpose. Lets change
                    Africa's narrative together.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="card my-3">
                <div className="card-body">
                  <img
                    src="https://www.drugstoc.com/images/careers/6.svg"
                    style={imgStyle}
                  />
                  <h4 style={cardHead}>Smart collegues</h4>
                  <p style={cardText}>
                    Challenge yourself by exchanging ideas with the brightest
                    minds in Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5 text-center">
        <Link className=" btn btn-primary">Checkout Available Vacancies</Link>
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

export default Careers;
