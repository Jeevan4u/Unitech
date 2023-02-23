import React from "react";
// import cardImage1 from "../assist/Images/cardImage1.png";
const Details = ({ details }) => {
  return (
    <div className="about-content flex justify-around">
      <div className="About-conent w-[335px]">
        <h3 className="text-[32px] font-[700] pt-2">
          {/* About Us */} {details.heading}
        </h3>
        <h4 className="text-[20px] text-[#1072BC] ">
          {/* WE CREATE SOMETHING VERY TRENDY AND ------ */}
          {details.title}
        </h4>
        {details.button && (
          <div className="button pt-5">
            <button className="border-solid border-[1px] border-red-600 py-[16px] px-[24px] text-red-600 font-[700] text-[18px] leading-[27px] border-r-2">
              {/* About Us */}
              {details.button}
            </button>
          </div>
        )}
      </div>
      <div className="About-desc-content w-[599px]">
        <div className="about-head w-[545px] pb-3">
          <h1 className="text-[36px] text-[#004A80] font-[700] leading-[43.2px]">
            {/* We Help to grow your buisness */}
            {details.leftHeading}
          </h1>
        </div>
        {details.desc1 ? (
          <div className="about-body">
            <p className="font-[400] text-[16px] leading-[24px] tracking-[1.5%] ">
              {/* Unitech Media is a mass exposure station, which stands for overall
            solution regarding branding and activation with concern field
            specialists for online as well as offline media. */}
              {details.desc1}
            </p>
          </div>
        ) : details.creative ? (
          <div className="allCards flex">
            {details.creative.map((data, i) => (
              <div className="cardWrapper" key={i}>
                <div className="card-img-wrapper px-2">
                  <img src={data.imgs} alt="" />
                </div>
                <div className="card-title flex py-5">
                  <div className="card-icon pt-3 px-3">
                    <img src={data.cicon} alt="" />
                  </div>
                  <div className="card-main-title pl-3">
                    <h5 className="font-[600] text-[18px] leading-[27px]">
                      {data.main}
                    </h5>
                    <p className="font-[400] text-[14px] leading-[21px] text-[#0F5E9A]">
                      {data.sub}
                    </p>
                  </div>
                </div>
                <div className="card-sub-title w-[330px] mx-auto">
                  <h5 className="font-[400] text-[14px] leading-[21px]">
                    Deep study of product, ideal customers and competitors for
                    setting goals.
                  </h5>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Details;
