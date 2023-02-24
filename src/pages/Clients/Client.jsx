import React from "react";
import "./styles.css";
import ClientImg from "../../assist/Images/Clients.png";
import Details from "../../Components/Details";
const Client = () => {
  const ClientData = {
    heading: "Clients",
    title: "Working hard to build the Relation",
    leftHeading: `Our Valuable
    Clients`,
    // desc1:
    //   "Unitech Media is a mass exposure station, which stands for overall solution regarding branding and activation with concern field specialists for online as well as offline media. We believe that a strong and long-lasting relation is the key to success for every business. It hasbeen our pleasure to help companies in building connection with their clients and keep their clients engaged with the brand. ",
    // button: "Our Works",
  };
  return (
    <div className="container">
      <div className="client-fix max-w-[859.26px] mx-auto pt-[146px] mb-[107px]">
        <Details details={ClientData} />
      </div>
      <div className="Client-img-container max-w-[1000px] mx-auto mb-[155px]">
        <img src={ClientImg} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Client;
