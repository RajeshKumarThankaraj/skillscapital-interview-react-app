import React from "react";

const Header = ({ title, subTitle }) => {
  return (
    <div className="d-flex flex-column gap-3">
      <h2 className="headerTitle">{title}</h2>
      <h5 className="headerSubTitle">{subTitle}</h5>
    </div>
  );
};

export default Header;
