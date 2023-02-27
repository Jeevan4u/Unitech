import React from "react";
import Banner from "../../../Components/Banner";
import Banner1 from "../../../assist/Images/Banner1.png";
const BannerSection = () => {
  const bannerData = {
    imgs: Banner1,
    topic: "About Us",
    subtopic: "Home > About Us",
  };
  return (
    <>
      <Banner data={bannerData} />
    </>
  );
};

export default BannerSection;
