import React, { useState } from "react";
import { useSelector } from "react-redux";

import { featuredData } from "../Data/featuredData";
import { useNavigate } from "react-router-dom";

const AutoComplete = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [enteredText, setEnteredText] = useState("");
  const { searchTextEntered } = useSelector((state) => state.searchText);
  const [filteredResults, setFilteredResults] = useState([
    ...searchTextEntered,
  ]);

  const featuredDataNames = featuredData.map((elem) =>
    elem.kpiName.toLowerCase()
  );
  console.log(featuredDataNames);
  const savedTextRemoveHandler = (removeText) => {
    setFilteredResults(filteredResults.filter((elem) => elem !== removeText));
  };

  const searchInputChangeHandler = (val) => {
    val.trim().length === 0 && navigate(`/kpi`);
    setEnteredText(val);
    const filteredVal = featuredDataNames.findIndex((item) =>
      item.toLowerCase().includes(enteredText.toLowerCase())
    );
    filteredVal !== -1 && navigate(`/kpi/${filteredVal}`);
  };

  return (
    <div className="autoComplete">
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
          value={enteredText}
          placeholder="Type to search..."
          aria-label="Search-Text"
          onChange={(event) => searchInputChangeHandler(event.target.value)}
          onFocus={() => setShowDropdown(!showDropdown)}
          onBlur={() =>
            !enteredText.trim().length && setShowDropdown(!showDropdown)
          }
          autoComplete="on"
          style={{
            position: "relative",
          }}
        />
      </div>
      {filteredResults.length > 0 && showDropdown && (
        <ul>
          {filteredResults.map((elem, i) => {
            return (
              <li
                key={i}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                }}
                className="d-flex justify-content-between"
              >
                <button
                  className="dropdownText"
                  onMouseDown={() => {
                    setShowDropdown(!showDropdown);
                    searchInputChangeHandler(elem);
                  }}
                >
                  {elem}
                </button>
                <button
                  className="closeBtn"
                  onMouseDown={() => savedTextRemoveHandler(elem)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
