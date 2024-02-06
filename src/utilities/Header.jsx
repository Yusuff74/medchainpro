import React from "react";

const Header = ({ badgeText, badgeStyle, firstP, secondP, imgLink }) => {
  const headerStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#484848",
    width: "100%",
  };

  const imgStyle = {
    width: "100px",
    height: "45px",
    border: "1px solid black",
    borderRadius: "5px",
  };

  const smallText = { color: "#484848", fontSize: "0.9rem" };
  return (
    <div>
      <div style={{ backgroundColor: "rgb(255, 248, 240)" }}>
        <div className="container">
          <div
            className="row"
            style={{
              marginTop: "4rem",
              paddingTop: "4rem",
            }}
          >
            <div className="col-12 col-lg-6  pt-20">
              <h4 className={badgeStyle}>{badgeText}</h4>

              <p style={headerStyle}>{firstP}</p>
              <p className="pt-5" style={smallText}>
                {secondP}
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
            </div>
            <div className="d-none d-lg-block col-6">
              <img
                src={imgLink}
                className="banner"
                style={{
                  transform: "translateY(0px)",
                  width: "90%",
                  animation:
                    "6s ease-in-out 0s infinite normal none running float",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
