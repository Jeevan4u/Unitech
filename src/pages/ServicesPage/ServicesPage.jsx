import React from "react";
import Banner from "../../Components/Banner";
import ServicesBanner from "../../assist/Images/ServicesBanner.png";
import BannerDetails from "../../Components/BannerDetails";
import ServicesCards from "./ServicesCards/ServicesCards";
import AllServices from "./AllServices/AllServices";
import ServicesCreateProcess from "./ServicesCreateProcess/ServicesCreateProcess";
import Together from "./ServicesTogether/Together";
import ServicesTesto from "./ServicesTestomonial/ServicesTesto";
import Staytuned from "../StayTuned/Staytuned";

const ServicesPage = () => {
  const servicesBannerData = {
    imgs: ServicesBanner,
    topic: "Services",
    subtopic: "Home > Services",
  };

  const servicesBannerDetails = {
    heading: "We help to create strategies, design and develop",
    desc1:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam era ",
  };

  return (
    <div className="ServicesPageSection">
      <Banner data={servicesBannerData} />
      <BannerDetails bannerData={servicesBannerDetails} />
      <ServicesCards />
      <AllServices />
      <ServicesCreateProcess />
      <Together />
      <ServicesTesto />
      <Staytuned />
    </div>
  );
};

export default ServicesPage;
