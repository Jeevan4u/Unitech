import React from "react";
const Blogitem = ({ details, left }) => {
  return (
    <div className="blogCard w-[342px] bg-[#F8F8F8]">
      <div className="img-text-wrapper">
        <div className="img-wrapper relative">
          <img src={details.imgs} alt="" className="mx-auto" />
          <div className="text-content text-black bg-white absolute top-[5px] right-[25px] flex flex-col items-center w-[40px] h-[48px]">
            <h5>21</h5>
            <p>APR</p>
          </div>
        </div>
        <div className="text-wrapper mt-[19px] pl-[23px]">
          <p className="leading-[21px] text-[14px] font-[400] text-[#0F5E9A] mb-[8px]">
            {details.info}
          </p>
          <h1 className="font-[600] text-[18px] leading-[27px] mb-[9px]">
            {details.title}
          </h1>
          <h5 className="font-[400] text-[14px] leading-[21px]">
            {details.desc}
          </h5>
          <button className="font-[400] text-[16px] leading-[24px] text-[#ED1C24] appearance-none underline mt-[20px]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogitem;
