import React from "react";

const AboutImage = ({ aboutImageData }) => {
  console.log(aboutImageData);
  return (
    <div className="ImgCard">
      <img src={aboutImageData.imgs} alt="" />
      <h2 className="font-[600] text-[20px] leading-[30px]">
        {aboutImageData.name}
      </h2>
      <p className="font-[400] text-[14px] leading-[21px] text-[#1072BC] ">
        {aboutImageData.pos}
      </p>
    </div>
  );
};

export default AboutImage;
