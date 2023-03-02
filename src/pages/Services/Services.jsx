import React from "react";
import Details from "../../Components/Details";
import ServicesLists from "../../Components/ServicesLists";
import Img1 from "../../assist/Images/Digital.png";
import Img2 from "../../assist/Images/illus.png";
import Img3 from "../../assist/Images/Web.png";
import Img4 from "../../assist/Images/SEO.png";
const Services = () => {
  const servicesData = {
    heading: "Our Services",
    title: "For both startups and GIANT business",
    leftHeading: "A Flexible & Adaptive Approach",
    // desc1:
    //   "Unitech Media is a mass exposure station, which stands for overall solution regarding branding and activation with concern field specialists for online as well as offline media. We believe that a strong and long-lasting relation is the key to success for every business. It hasbeen our pleasure to help companies in building connection with their clients and keep their clients engaged with the brand. ",
    button: "Explore services",
    link: "services",
  };

  const servicesCardDetails = [
    {
      img: Img1,
      title: "Digital Marketing",
      head: "SEO, SEM & SMM",
      content:
        "Digital Marketing brings brand to life with regular activities. Tracking the crowd and presenting the product is the main goal.",
    },
    {
      img: Img2,
      title: "Printing",
      head: "Offset, Digital, Screen, Itching",
      content:
        "Coming across the design that speaks your brand, we can provide quality print to meet your company specialty.  ",
    },
    {
      img: Img3,
      title: "Website Development ",
      head: "Web &  Apps",
      content:
        "Building web & apps covers development, from business analysis, planning, UI/UX design, testing and deployment.",
    },
    {
      img: Img4,
      title: "Graphic Design",
      head: "Creatives and illustrations",
      content:
        "Creativity in anything can easily attract the attention and it takes a lot to create something outstanding.",
    },
  ];
  return (
    <>
      <div className="container bg-[#F2F2F2] pb-[175px]">
        <div className=" pt-[139px] pl-[225px] pb-[80px] tablet:pl-[60px]">
          <Details details={servicesData} />
        </div>
        <div className="sub-container max-w-[1123px] mx-auto">
          <div className="servicesCards flex flex-wrap justify-between gap-20 tablet:justify-center">
            {servicesCardDetails.map((data, i) => (
              <ServicesLists servicesDetails={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
