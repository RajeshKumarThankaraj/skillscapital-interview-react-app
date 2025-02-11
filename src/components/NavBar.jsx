import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ item, activeNav, setActiveNav }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary-subtle">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav w-100 justify-content-between">
            {item.length &&
              item.map((elem, i) => {
                return (
                  <li
                    className={`nav-item ${activeNav === i ? "active" : ""}`}
                    key={i}
                  >
                    <Link
                      className="nav-link active"
                      aria-current={elem}
                      onClick={() => setActiveNav(i)}
                      to={`/${elem.toLowerCase()}`}
                    >
                      {elem}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
