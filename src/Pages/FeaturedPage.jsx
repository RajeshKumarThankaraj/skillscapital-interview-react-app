import React from "react";
import FeaturedComponent from "../components/FeaturedComponent";
import { featuredData } from "../Data/featuredData";

const FeaturedPage = ({ modalBtn, setModalBtn }) => {
  return (
    <div>
      <FeaturedComponent
        title="Featured"
        subTitle="Curated top picks from this week"
        featureObjData={featuredData}
        dataBsTarget="INTES"
        modalBtn={modalBtn}
        setModalBtn={setModalBtn}
        limit={4}
      />
      <FeaturedComponent
        title="Trending"
        subTitle="Most popular by community"
        featureObjData={featuredData}
        dataBsTarget="INTES"
        modalBtn={modalBtn}
        setModalBtn={setModalBtn}
        limit={4}
      />
    </div>
  );
};

export default FeaturedPage;
