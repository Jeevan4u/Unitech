import React from "react";
import Details from "../../Components/Details";
import cardImage1 from "../../assist/Images/cardImage1.png";
import cardIcon1 from "../../assist/Images/cardIcon1.png";
import Cricle from "../../assist/Images/criclearrow.png";
import line from "../../assist/Images/line.png";
const Creative = () => {
  const data = {
    heading: "Our Creative Process",
    title:
      "Fusing Creativity With Marketing & Technology To Drive Business Growth",
    creative: [
      {
        imgs: cardImage1,
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
    <>
      <div className="container pt-[161px] ">
        <Details details={data} />
        <div className="content-wrapper flex justify-around px-10 mt-6">
          <div className="left-content text-[#004A80] text-[36px] font-[700]">
            <h1>Ideas into reality</h1>
          </div>
        </div>
        <div className="line pt-20 pl-20 ">
          <img src={line} alt="" />
        </div>
      </div>
    </>
  );
};

export default Creative;
