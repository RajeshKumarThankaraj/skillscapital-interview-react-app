import React from "react";

import pieChart from "../assets/images/pie-chart.svg";
import lineChart from "../assets/images/line-chart.jpg";
import bubbleChart from "../assets/images/bubble-chart.svg";
import barChart from "../assets/images/bar-chart.png";
import Card from "../components/Card";

const Layouts = () => {
  const obj = [
    {
      img: pieChart,
      title: "Pie Chart",
    },
    {
      img: lineChart,
      title: "Line Chart",
    },
    {
      img: bubbleChart,
      title: "Bubble Chart",
    },
    {
      img: barChart,
      title: "Bar Chart",
    },
  ];
  return (
    <>
      {obj.map((elem, i) => {
        return <Card cardTitle={elem.title} img={elem.img} key={i} />;
      })}
    </>
  );
};

export default Layouts;
