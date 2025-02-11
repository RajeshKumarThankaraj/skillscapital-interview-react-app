import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import FeaturedComponent from "../components/FeaturedComponent";

import { featuredData } from "../Data/featuredData";
import Modal from "../components/Modal";
import KPI from "./KPI";
import Layouts from "./Layouts";
import Storyboard from "./Storyboard";

const Home = () => {
  const [modalBtn, setModalBtn] = useState(false);
  const naviItems = ["Featured", "KPI", "Layouts", "Storyboards"];
  const [activeNav, setActiveNav] = useState(0);

  return (
    <div className="home d-flex flex-column gap-3">
      <Header
        title="Library"
        subTitle="Browser for assets needed to report and present analysis."
      />
      <div className="input-group mt-3 mb-3 searchIcon w-100">
        <span className="input-group-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Type to search..."
          aria-label="Search-Text"
        />
      </div>
      <NavBar
        item={naviItems}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
      {activeNav === 0 && (
        <>
          <FeaturedComponent
            title="Featured"
            subTitle="Curated top picks from this week"
            featureObjData={featuredData}
            dataBsTarget="INTES"
            modal={modalBtn}
            setModalBtn={setModalBtn}
            limit={4}
          />
          <FeaturedComponent
            title="Trending"
            subTitle="Most popular by community"
            featureObjData={featuredData}
            dataBsTarget="INTES"
            modal={modalBtn}
            setModalBtn={setModalBtn}
            limit={4}
          />
        </>
      )}
      {activeNav === 1 && <KPI />}
      {activeNav === 2 && <Layouts />}
      {activeNav === 3 && <Storyboard />}
      <Modal modalShow={modalBtn} setModalBtn={setModalBtn} />
    </div>
  );
};

export default Home;
