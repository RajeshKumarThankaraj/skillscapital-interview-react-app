import React from "react";
import { useParams } from "react-router-dom";
import FeaturedComponent from "../components/FeaturedComponent";
import { featuredData } from "../Data/featuredData";

const KPI = () => {
  const { id } = useParams();
  console.log("id: ", id);
  console.log(featuredData[id]);
  return (
    <div className="KPI mt-5">
      {!id && <FeaturedComponent featureObjData={featuredData} />}
      {id && <FeaturedComponent featureObjData={[featuredData[id]]} />}
    </div>
  );
};

export default KPI;
