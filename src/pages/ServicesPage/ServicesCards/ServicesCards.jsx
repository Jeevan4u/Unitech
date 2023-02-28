import React from "react";
import Cards from "../../../Components/Cards";
import Brand from "../../../assist/Images/Branding.png";
import Activate from "../../../assist/Images/Activation.png";
import App from "../../../assist/Images/App.png";
import Market from "../../../assist/Images/Marketing.png";
const ServicesCards = () => {
  const CardsItemsServices = [
    {
      id: Brand,
      title: "Branding",
      sub: "A company must have defined brand mission, vision and values which must be carried out in all most every step of brand reflection.",
    },
    {
      id: Activate,
      title: "Activation",
      sub: "Activation brings brand to life and connects to customer in a deep and meaningful level. It is done with understanding company, product, ideal customers and competitors.",
    },
    {
      id: App,
      title: "Web & Apps",
      sub: "Coming across the design that speaks your brand, we can provide you the fine quality print that resembles your company specialty.",
    },
    {
      id: Market,
      title: "Digital Marketing",
      sub: "Coming across the design that speaks your brand, we can provide you the fine quality print that resembles your company specialty. ",
    },
  ];
  return (
    <>
      <div className="main-cards-wrapper flex flex-wrap gap-5 justify-center tablet:px-10 tablet:justify-evenly desktop:justify-evenly">
        {CardsItemsServices.map((data, i) => (
          <>
            <Cards mainCards={data} />
          </>
        ))}
      </div>
    </>
  );
};

export default ServicesCards;
