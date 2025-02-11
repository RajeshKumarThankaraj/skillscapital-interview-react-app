import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Modal from "../components/Modal";
import AutoComplete from "../components/AutoComplete";

import { featuredData } from "../Data/featuredData";

const Home = () => {
  const [modalBtn, setModalBtn] = useState(false);
  const [requestBtn, setRequestBtn] = useState(false);
  const naviItems = ["Featured", "KPI", "Layouts", "Storyboards"];
  const [activeNav, setActiveNav] = useState(0);

  return (
    <>
      <div className="home d-flex flex-column gap-3">
        <Header
          title="Library"
          subTitle="Browser for assets needed to report and present analysis."
        />
        <AutoComplete />
        <NavBar
          item={naviItems}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />
        <Modal modalShow={modalBtn} setModalBtn={setModalBtn} />
      </div>
      <div className="headerBtnContainer d-flex justify-content-end">
        <button
          type="button"
          className="homeButton"
          data-bs-toggle="modal"
          data-bs-target="#requestBtnAccessModal"
          onClick={() => setRequestBtn(!requestBtn)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-box-seam"
            viewBox="0 0 16 16"
          >
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
          </svg>
          Request
        </button>
        {!requestBtn && (
          <div
            className={`modal ${requestBtn ? "show" : "fade"}`}
            id="requestBtnAccessModal"
            tabIndex="-1"
            aria-labelledby="requestBtnAccessModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5"
                    id="requestBtnAccessModalLabel"
                  >
                    Request new KPI access
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label="Large select example"
                  >
                    <option defaultValue="select KPI">Select KPI</option>
                    {featuredData.map((elem, i) => {
                      return (
                        <option value={elem.kpiName} key={i}>
                          {elem.kpiName}
                        </option>
                      );
                    })}
                  </select>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Please enter the Business Justifiaction for access"
                      id="floatingTextarea2"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label htmlFor="floatingTextarea2">
                      Business Justifiaction
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => setRequestBtn(!requestBtn)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-dismiss="modal"
                    onClick={() => setRequestBtn(!requestBtn)}
                  >
                    Request Access
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
