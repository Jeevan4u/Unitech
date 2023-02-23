import React from "react";
import Case from "../../assist/Images/Briefcase.png";
import Rocket from "../../assist/Images/Rocket.png";
import User from "../../assist/Images/User.png";
const Flexservices = () => {
  const cardsData = [
    {
      id: Case,
      number: "50+",
      title: "CORPORATE CLIENTS",
    },
    {
      id: Rocket,
      number: "25000+",
      title: "PROJECTS",
    },
    {
      id: User,
      number: "500+",
      title: "INDIVIDUAL CLIENTS",
    },
  ];

  const services = (
    <>
      {cardsData.map((data, i) => {
        return (
          <div
            className="cards-wrapper flex flex-col justify-center align-middle text-center"
            key={i}
          >
            <div className="icon-container">
              <img className="mx-auto py-2" src={data.id} alt="" />
            </div>
            <div className="number text-red-600 text-[36px] font-[700] leading-[43.2px]">
              {data.number}
            </div>
            <div className="title text-[#0F5E9A] font-[400] leading-[30px]">
              {data.title}
            </div>
          </div>
        );
      })}
    </>
  );
  return (
    <div className="container bg-[#E4F4FF] pt-[52px] pb-[45.43px]">
      <div className="max-w-[799px] flex justify-between mx-auto">
        {services}
      </div>
    </div>
  );
};

export default Flexservices;
