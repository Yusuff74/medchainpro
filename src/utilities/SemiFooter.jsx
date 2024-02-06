import React from "react";
import TwoRowContainer from "./TwoRowContainer";

const SemiFooter = () => {
  const headerStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#484848",
    width: "100%",
  };

  const imgStyle = {
    width: "100px",
    height: "40px",
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
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#4c70d6", marginTop: "6rem" }}
      >
        <div className="container">
          <TwoRowContainer
            element1={
              <div className="py-5 mt-5">
                <h3 className="text-white" style={headerStyle}>
                  Download MedChainPro App <br />
                  on your phone
                </h3>
                <p className="text-white" style={smallText}>
                  Download the app to track your orders, keep of the order
                  progress and much more. Discover product and take advantage of
                  promotional discount on the go.
                </p>
                <div className="pt-5 flex justify-center">
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
              </div>
            }
            element2={
              <div className="pt-5 pb-0">
                <img
                  src="https://res.cloudinary.com/bizstak/image/upload/v1684243495/banner_llxztw.png"
                  style={imageStyle}
                />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SemiFooter;
