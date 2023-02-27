import React from "react";

const BannerDetails = ({ bannerData }) => {
  return (
    <div className="grid tablet:grid-row-2 desktop:grid-cols-2 pt-[78px] pb-[106px] place-items-center px-5">
      <div className="Heading-container">
        <h1 className="font-[700] text-[36px] leading-[43.2px]  text-[#004A80] desktop:w-[438px] desktop:mx-auto tablet:text-center tablet:mb-8">
          {bannerData.heading}
        </h1>
      </div>
      <div className="heading-desc desktop:pr-[152px] tablet:px-8">
        <h3 className="mb-[32px] font-[400] text-[16px] leading-[24px] tracking-[1.5%]">
          {bannerData.desc1}
        </h3>

        {bannerData.desc2 && (
          <h3 className="font-[400] text-[16px] leading-[24px] tracking-[1.5%]">
            {bannerData.desc2}
          </h3>
        )}
      </div>
    </div>
  );
};

export default BannerDetails;
