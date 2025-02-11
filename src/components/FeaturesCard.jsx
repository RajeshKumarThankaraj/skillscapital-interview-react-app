import React, { useState } from "react";

import Modal from "./Modal";
import iconImage from "../assets/images/sales-growth.png";

const FeaturesCard = ({ index, kpiName, kpiDesc, date }) => {
  const [modalBtn, setModalBtn] = useState(false);
  return (
    <div>
      <button
        className="card"
        key={index}
        data-bs-target={kpiName}
        onClick={() => {
          setModalBtn(!modalBtn);
        }}
      >
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img
              src={iconImage}
              className="img-fluid rounded-start p-2"
              alt="Sales"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-start">
              <h5 className="card-title">{kpiName}</h5>
              <p className="card-text">
                {kpiDesc}
                <small className="text-body-secondary">{date}</small>
              </p>
            </div>
          </div>
        </div>
      </button>
      <Modal modalShow={modalBtn} setModalBtn={setModalBtn} title={kpiName} />
    </div>
  );
};

export default FeaturesCard;
