import React from "react";
import FeaturedComponent from "../components/FeaturedComponent";
import { featuredData } from "../Data/featuredData";

const FeaturedPage = () => {
  return (
    <div>
      <FeaturedComponent
        title="Featured"
        subTitle="Curated top picks from this week"
        featureObjData={featuredData}
        limit={4}
      />
      <FeaturedComponent
        title="Trending"
        subTitle="Most popular by community"
        featureObjData={featuredData}
        limit={4}
      />
    </div>
  );
};

export default FeaturedPage;
