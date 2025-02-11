import React from "react";
import FeaturedComponent from "../components/FeaturedComponent";
import { featuredData } from "../Data/featuredData";

const KPI = () => {
  return (
    <div className="KPI">
      <FeaturedComponent featureObjData={featuredData} />
    </div>
  );
};

export default KPI;
