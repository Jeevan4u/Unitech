import React from "react";
import Details from "../../../Components/Details";
import cardImage1 from "../../../assist/Images/ServicesCreative1.png";
import cardImage2 from "../../../assist/Images/ServicesCreative2.png";
import cardIcon1 from "../../../assist/Images/cardIcon1.png";

const ServicesCreateProcess = () => {
  const servicesdata = {
    heading: "Our Creative Process",
    title:
      "Fusing Creativity With Marketing & Technology To Drive Business Growth",
    secondTitle: "From Concept to Reality",
    creative: [
      {
        imgs: cardImage1,
        cicon: cardIcon1,
        main: "Understanding",
        sub: "Intercation",
        para: "Deep study of product, ideal customers and competitors for setting goals.",
      },
      {
        imgs: cardImage2,
        cicon: cardIcon1,
        main: "Understanding",
        sub: "Intercation",
        para: "Deep study of product, ideal customers and competitors for setting goals.",
      },
      {
        imgs: cardImage1,
        cicon: cardIcon1,
        main: "Understanding",
        sub: "Intercation",
        para: "Deep study of product, ideal customers and competitors for setting goals.",
      },
    ],
  };
  return (
    <div className="ServicesCreative">
      <Details details={servicesdata} />
    </div>
  );
};

export default ServicesCreateProcess;
