import React from "react";

const Banner = ({ data }) => {
  return (
    <div className="banner-container">
      <div className="banner-img-container relative">
        <img className="w-full" src={data.imgs} alt="" />

        <div className="img-overlay absolute h-full w-full top-0 left-0 bg-[#00000099] flex items-end desktop:pl-[149px] desktop:pb-[32px] tablet:pl-[80px] pb-[20px]">
          <div className="text-content text-white relative">
            <h3 className="text-[32px] font-[600] leading-[38.4px] mb-[9px] pt-[24px] after:absolute after:top-0 after:left-0 after:content-[''] after:h-[4px] after:w-[44px] after:bg-[#ffffff]">
              {data.topic}
            </h3>
            <h5 className="text-[14px] font-[400] leading-[21px]">
              {data.subtopic}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
