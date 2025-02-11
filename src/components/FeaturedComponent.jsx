import React from "react";
import FeaturesCard from "./FeaturesCard";

const FeaturedComponent = ({
  title,
  subTitle,
  featureObjData,
  dataBsTarget,
  modalBtn,
  setModalBtn,
  limit,
}) => {
  return (
    <div className="featredComponent">
      <h4 className="text-start featuredTitle">{title}</h4>
      <h6 className="text-start featuredSubtitle" style={{ color: "#dee2e6" }}>
        {subTitle}
      </h6>
      <div className="cardContainer">
        {featureObjData.slice(0, limit).map((elem, i) => {
          return (
            <FeaturesCard
              key={i}
              index={i}
              kpiName={elem.kpiName}
              kpiDesc={elem.kpiDesc}
              dataBsTarget={dataBsTarget}
              modalBtn={modalBtn}
              setModalBtn={setModalBtn}
              date={elem.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedComponent;
