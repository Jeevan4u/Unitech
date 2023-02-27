import React from "react";
import { useLocation } from "react-router-dom";
import BannerDetails from "../../Components/BannerDetails";
import Flexservices from "../Flexservices/Flexservices";
import Vision from "./Visions/Vision";
import BannerSection from "./Banner/BannerSection";
import Mission from "./Mission/Mission";
import Values from "./Values/Values";
import BrandResources from "./BrandResources/BrandResources";
import Details from "../../Components/Details";
import AboutImageGallery from "./AboutImageGall/AboutImageGallery";
import Staytuned from "../StayTuned/Staytuned";
const AboutPage = () => {
  const bannerDetailsData = {
    heading: "We help to create strategies, design and develop",
    desc1:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
    desc2:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
  };

  const aboutDetails = {
    heading: "Team",
    title: "People behind all creative works & working environment",
    leftHeading: `We believe in team work`,
    // desc1:
    //   "Unitech Media is a mass exposure station, which stands for overall solution regarding branding and activation with concern field specialists for online as well as offline media. We believe that a strong and long-lasting relation is the key to success for every business. It hasbeen our pleasure to help companies in building connection with their clients and keep their clients engaged with the brand. ",
    button: "See our team",
  };
  return (
    <>
      <BannerSection />

      <BannerDetails bannerData={bannerDetailsData} />
      <Flexservices />
      <Vision />
      <Mission />
      <Values />
      <BrandResources />
      <div className="team-fix desktop:py-10 desktop:pt-[150px] desktop:px-16 desktop:pb-[96px] tablet:py-8">
        <Details details={aboutDetails} />
      </div>
      <AboutImageGallery />
      <Staytuned />
    </>
  );
};

export default AboutPage;
