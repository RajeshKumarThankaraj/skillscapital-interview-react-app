import React from "react";

const SubHeaderComponent = ({
  title,
  badge,
  subTitle,
  description,
  hashTags,
}) => {
  return (
    <div className="d-flex flex-column gap-3">
      <h2 className="headerTitle">{title}</h2>
      <h5 className="headerSubTitle">{subTitle}</h5>
      <p className="description">{description}</p>
    </div>
  );
};

export default SubHeaderComponent;
