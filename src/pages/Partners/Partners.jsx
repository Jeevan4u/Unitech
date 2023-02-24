import React from "react";
import PrintSewa from "../../assist/Images/Printsewalogo.png";
import featherlogo from "../../assist/Images/featherlogo.png";
const Partners = () => {
  return (
    <div className="contaner bg-[#F8F8F8]">
      <div className="topic flex flex-col place-content-center pt-[66px]">
        <h1 className="align-middle text-center font-[600] leading-[38.4px] text-[32px]">
          Our Associated Partners
        </h1>
        <div className="img-container flex justify-center mt-[47px] mb-[43px]">
          <div className="printsewa w-[208px] self-center">
            <img src={PrintSewa} alt="" className="w-full" />
          </div>
          <div className="printsewa w-[133px] ml-[107px]">
            <img src={featherlogo} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partners;
