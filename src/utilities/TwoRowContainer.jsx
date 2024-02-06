import React from "react";

const TwoRowContainer = ({ element1, element2 }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">{element1}</div>
          <div className="col-12 col-lg-6">{element2}</div>
        </div>
      </div>
    </div>
  );
};

export default TwoRowContainer;
