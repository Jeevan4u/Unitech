import React from "react";
import Pause from "../assist/Images/Pause.png";
const Testimonialsslider = ({ testomonialDetail }) => {
  console.log(testomonialDetail.topic);
  return (
    <div className="testomonitalCard">
      <div className="backdrop-img ">
        <div className="topic  relative max-w-[253px]">
          <h1 className="text-[32px] leading-[38.4px] font-[600]">
            {testomonialDetail.topic}
          </h1>
          <img
            className="absolute top-[-20px] left-5 -z-10"
            src={Pause}
            alt=""
          />
        </div>

        <div className="testomonialDesc max-w-[472px] py-[33px]">
          <h5 className="text-[16px] leading-[24px] font-[400] tracking-[1.5%] ">
            {testomonialDetail.desc}
          </h5>
        </div>
        <div className="smallCard flex justify-start items-center">
          <div className="round-img">
            <img src={testomonialDetail.roundImg} alt="" />
          </div>
          <div className="img-desc pl-[33px]">
            <h5 className="text-[14px] leading-[27px] font-[600] ">
              {testomonialDetail.name}
            </h5>
            <p className="text-[14px] leading-[21px] font-[400] tracking-[1.5%]">
              {testomonialDetail.detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonialsslider;
