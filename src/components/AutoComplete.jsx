import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { featuredData } from "../Data/featuredData";
import { removeSearchTextEntered } from "../store/slice";

const AutoComplete = () => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [enteredText, setEnteredText] = useState("");
  const { searchTextEntered } = useSelector((state) => state.searchText);
  const [enteredTextSearch, setEnteredTextSearch] = useState([]);
  const [filteredResults, setFilteredResults] = useState([
    ...searchTextEntered,
  ]);
  console.log("showDropdown");
  console.log(showDropdown);
  console.log(searchTextEntered);
  const featuredDataNames = featuredData.map((elem) => elem.kpiName);
  const savedTextRemoveHandler = (removeText, event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(removeText);
    setFilteredResults(filteredResults.filter((elem) => elem !== removeText));
    dispatch(removeSearchTextEntered(removeText));
  };
  const selectInput = (val) => {
    console.log("Updating val in Input field");
    console.log(val);
    searchInputChangeHandler(val);
    setEnteredText(val);
    setShowDropdown(false);
  };
  const searchInputChangeHandler = (val) => {
    console.log(val);
    setEnteredText(val);

    if (val.trim() === "") {
      setEnteredText("");
    } else {
      setEnteredTextSearch((prev) => [
        ...prev,
        ...featuredDataNames.filter((elem) =>
          elem.toLowerCase().includes(val.toLowerCase())
        ),
      ]);
      setFilteredResults(
        searchTextEntered.filter((elem) =>
          elem.toLowerCase().includes(val.toLowerCase())
        )
      );
    }

    console.log("filteredResults");
    console.log(filteredResults);
    console.log(enteredTextSearch);
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
      </div>
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
      {filteredResults.length && showDropdown && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            position: "absolute",
            width: "50%",
            background: "white",
            border: "1px solid #ccc",
            maxHeight: "150px",
            overflowY: "auto",
            zIndex: 100,
          }}
        >
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
                  onMouseDown={() => selectInput(elem)}
                >
                  {elem}
                </button>
                <button
                  className="closeBtn"
                  onMouseDown={(event) => savedTextRemoveHandler(elem, event)}
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
