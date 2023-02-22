import React from "react";
import Maskimage from "../../assist/Images/maskimage.png";
import "./banner.css";

const Banner = () => {
  return (
    <div className="header-wrapper  bg-[#E4F4FF]">
      <div className="header-contents max-w-[1248px] mx-auto flex justify-between">
        <div className="header-texts pt-[228px]">
          <div className="header-text">
            <p className="text-[15.45px] tracking-[0.15em] leading-[23px] text-[#707070]">
              WELCOME TO UNITECH
            </p>
          </div>
          <div className="header-add max-w-[547px]">
            <h1 className="text-[45px] text-dblue leading-[54px]">
              Create high Converting advertisement
            </h1>
          </div>
          <div className="header-btn pt-4 pb-[244px]">
            <button className="border-solid border-[1px] border-red-600 py-[16px] px-[24px] text-red-600 font-[700] text-[18px] leading-[27px]">
              Learn more
            </button>
          </div>
        </div>
        <div className="header-img-container">
          <div className="img">
            <img src={Maskimage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
