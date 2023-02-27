import React from "react";

const Staytuned = () => {
  return (
    <div className="container bg-[#E4F4FF]">
      <div className="staytuned-container pt-[71px] pb-[74px]">
        <div className="sad flex justify-around items-center flex-wrap desktop:flex-nowrap">
          <div className="topic">
            <h1 className="font-[600] text-[32px] leading-[38.4px]">
              Stay Tuned need to pass Props
            </h1>
          </div>
          <div className="input-feild-content flex py-2 tablet:flex-nowrap">
            <inputs
              type="email"
              className="w-[480px] bg-transparent border border-[#707070] appearance-none py-[20px] pl-[8px] focus:outline-red-500 mr-[8px] focus:pl-[20px] focus:transition-all transition-all tablet:w-full px-[5rem]"
              placeholder="Your email address"
            />
            <button className="py-[16px] px-[24px] bg-[#ED1C24] text-[#fffff]  font-[500] text-[18px] leading-[27px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staytuned;
