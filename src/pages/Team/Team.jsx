import React from "react";
import Teams from "../../assist/Images/Ourteam.png";
import Details from "../../Components/Details";
const Team = () => {
  const TeamData = {
    heading: "Our Team",
    title: "People behind all INNOVATIVE IDEAS & creative works ",
    // leftHeading: `Reviews
    //     as you say`,
    // desc1:
    //   "Unitech Media is a mass exposure station, which stands for overall solution regarding branding and activation with concern field specialists for online as well as offline media. We believe that a strong and long-lasting relation is the key to success for every business. It hasbeen our pleasure to help companies in building connection with their clients and keep their clients engaged with the brand. ",
    // button: "Our Works",
  };
  return (
    <div className="container">
      <div className="grid  tablet:grid-cols-1 desktop:grid-cols-2">
        <div className="col-span-1 tablet:pt-[123px] desktop:pt-0">
          <div className="img-container">
            <img src={Teams} alt="" className="mx-auto object-cover" />
          </div>
        </div>
        <div className="col-span-1 pt-[123px] pl-[61px] bg-[#F2F2F2] tablet:pt-[6rem] pl-10 desktop:pt-16">
          <div className="flex  mb-[91px] tablet:mb-3">
            <Details details={TeamData} />
          </div>
          <h1 className="text-[36px] font-[700] leading-[43px] text-[#004A80] w-[323px] mb-[105px] tablet:mb-8 mx-auto mt-32">
            Team work is our greatest asset
          </h1>
          <div className="button-container flex tablet:justify-center my-10">
            <button className="bg-[#ED1C24] text-white py-[16px] px-[24px] appearance-none">
              Know our team
            </button>
            <button className="bg-transparent border-[2px] border-[#ED1C24] ml-[20px] text-[#ED1C24] py-[16px] px-[24px] appearance-none">
              Careers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
