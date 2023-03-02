import React from "react";
import Details from "../../Components/Details";
const Portfolio = () => {
  const portfolioData = {
    heading: "Portfolio",
    title: "Work that excites & motivate us",
    leftHeading: `Innovative &  User Centeric Focused`,
    // desc1:
    //   "Unitech Media is a mass exposure station, which stands for overall solution regarding branding and activation with concern field specialists for online as well as offline media. We believe that a strong and long-lasting relation is the key to success for every business. It hasbeen our pleasure to help companies in building connection with their clients and keep their clients engaged with the brand. ",
    button: "Our Works",
    link: "work",
  };
  return (
    <div className="Portfolio-wrapper container content-wrapper max-w-[1132px] mx-auto pt-[120px] pb-[80px]">
      <Details details={portfolioData} />
    </div>
  );
};

export default Portfolio;
