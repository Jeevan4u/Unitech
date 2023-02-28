import React from "react";
import AboutImage from "../../../Components/AboutImage";
import aboutImg1 from "../../../assist/Images/AboutImg1.png";
import aboutImg2 from "../../../assist/Images/AboutImg2.png";
import aboutImg3 from "../../../assist/Images/AboutImg3.png";
import aboutImg4 from "../../../assist/Images/AboutImg4.png";
import aboutImg5 from "../../../assist/Images/AboutImg5.png";
import aboutImg6 from "../../../assist/Images/AboutImg6.png";
const AboutImageGallery = () => {
  const aboutImageData = [
    {
      imgs: aboutImg1,
      name: "Suraj Rai",
      pos: "CEO",
    },
    {
      imgs: aboutImg2,
      name: "Suraj Rai",
      pos: "CEO",
    },
    {
      imgs: aboutImg3,
      name: "Suraj Rai",
      pos: "CEO",
    },
    {
      imgs: aboutImg4,
      name: "Suraj Rai",
      pos: "CEO",
    },
    {
      imgs: aboutImg5,
      name: "Suraj Rai",
      pos: "CEO",
    },
    {
      imgs: aboutImg6,
      name: "Suraj Rai",
      pos: "CEO",
    },
  ];
  return (
    <div className="Image-container desktop:px-[150px]">
      <div className="img-text-container flex text-center gap-5 flex-wrap justify-center desktop:justify-evenly mb-[128px]">
        {aboutImageData.map((data, i) => (
          <AboutImage aboutImageData={data} />
        ))}
      </div>

      {/* <AboutImage aboutImageData={aboutImageData} /> */}
    </div>
  );
};

export default AboutImageGallery;
