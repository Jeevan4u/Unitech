import React from "react";
import Work from "../../../Components/Banner";
import WorkIMG from "../../../assist/Images/WorkBanner.png";
const Workbanner = () => {
  const workBannerData = {
    imgs: WorkIMG,
    topic: "Contact Us",
    subtopic: "Home > Contact",
  };
  return (
    <>
      <Work data={workBannerData} />
    </>
  );
};

export default Workbanner;
