import React from "react";
import Workbanner from "./WorkBanner/Workbanner";
import WorkBannerDetails from "../../Components/BannerDetails";
import Workfilter from "./WorkFilter/Workfilter";
import WorknewsLetter from "../StayTuned/Staytuned";
import Details from "../../Components/Details";
import Client from "../Clients/Client";
const Work = () => {
  const workBannerDetails = {
    heading: "We make things to change things",
    desc1:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam era ",
  };

  const workdetailsData = {
    heading: "Clients",
    title: "Working hard to build the trust",
    leftHeading: "Our Valuable Clients",
    // desc1:
    //   "Unitech Media is a mass exposure station, which stands for overall solution regarding branding and activation with concern field specialists for online as well as offline media. We believe that a strong and long-lasting relation is the key to success for every business. It hasbeen our pleasure to help companies in building connection with their clients and keep their clients engaged with the brand. ",
    // button: "About",
    // link: "about",
  };
  return (
    <div>
      <Workbanner />
      <WorkBannerDetails bannerData={workBannerDetails} />
      <Workfilter />
      <WorknewsLetter />
      {/* <div className="detail-fix laptop:pt-[80px] laptop:pb-[99px] ">
        <Details details={workdetailsData} />
      </div> */}
      <Client />
    </div>
  );
};

export default Work;
