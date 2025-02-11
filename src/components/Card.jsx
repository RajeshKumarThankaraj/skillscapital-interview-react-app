import React from "react";

const Card = ({ img, cardTitle }) => {
  return (
    <div className="card text-bg-dark" height="150px">
      {img && <img src={img} className="card-img" alt="card" />}
      <div className="card-img-overlay">
        <h5 className="card-title text-start" style={{ color: "green" }}>
          {cardTitle}
        </h5>
      </div>
    </div>
  );
};

export default Card;
