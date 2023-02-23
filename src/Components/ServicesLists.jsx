import React from "react";

const ServicesLists = ({ servicesDetails }) => {
  return (
    <div className="servicesWrapper flex">
      <div className="servicesImgWrapper h-[200px] w-[200px]">
        <img src={servicesDetails.img} alt="" />
      </div>
      <div className="right-contents w-[278px] pl-[27px]">
        <div className="servicesTitle">
          <p className="font-[400] text-[14px] leading[21px] text-[#0F5E9A]">
            {servicesDetails.title}
          </p>
          <h3 className="font-[600] text-[18px] leading[27px] pt-[3px] pb-[5px]">
            {servicesDetails.head}
          </h3>
          <h5 className="font-[400] text-[14px] leading[21px] pb-[12px]">
            {servicesDetails.content}
          </h5>
          <button className="font-[400] text-[16px] leading[24px] text-[#ED1C24] border-b-2 border-[#ED1C24]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesLists;
