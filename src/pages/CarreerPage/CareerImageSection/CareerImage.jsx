import React from "react";
import ServicesBanner from "../../../Components/Banner";
import CarrerBanner from "../../../assist/Images/CarrerBanner.png";
const CareerImage = () => {
  const CareerBannerData = {
    imgs: CarrerBanner,
    topic: "Careers",
    subtopic: "Home > Careers",
  };
  return (
    <div>
      <ServicesBanner data={CareerBannerData} />
    </div>
  );
};

export default CareerImage;
