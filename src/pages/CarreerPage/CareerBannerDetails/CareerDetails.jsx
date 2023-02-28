import React from "react";
import CarrerBannerDetails from "../../../Components/BannerDetails";
const CareerDetails = () => {
  const CareerBannerDetails = {
    heading: "Explore within yourself",
    desc1:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ",
  };
  return (
    <div>
      <CarrerBannerDetails bannerData={CareerBannerDetails} />
    </div>
  );
};

export default CareerDetails;
