import React from "react";
import clock from "../assist/Images/clock.png";
const CarrerCard = ({ jobData }) => {
  return (
    <div className="SingleCardWrapper  pt-[37px] pl-[28px] pr-[44px] hover:bg-[#F8F8F8] hover:duration-150 hover:transition-all border">
      <div className="job-contents">
        <div className="job-status mb-[11px]">
          <h3
            className={`text-[15.45px] leading-[23.18px] tracking-[15%] font-[500] ${
              jobData.color ? "text-[#1072BC]" : "text-[#707070]"
            }`}
          >
            {jobData.status}
          </h3>
        </div>
        <div className="job-type mb-[14px]">
          <h3 className="font-[600] text-[18px] leading-[27px]">
            {jobData.jobtype}
          </h3>
        </div>
        <div className="job-desc mb-[22px]">
          <h3 className="font-[400] text-[16px] leading-[24px] tracking-[1.5%] max-w-[254px] break-words">
            {jobData.desc}
          </h3>
        </div>
        <div className="job-time flex mb-[41px] text-center items-center">
          <div className="icon mr-2">
            <img src={clock} alt="" />
          </div>
          <div className="job-time-desc">
            <h5>{jobData.time}</h5>
          </div>
        </div>
        <div className="button appearance-none text-[#ED1C24] underline mb-[40px] cursor-pointer">
          View details
        </div>
      </div>
    </div>
  );
};

export default CarrerCard;
