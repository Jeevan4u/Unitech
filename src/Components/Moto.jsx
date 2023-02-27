import React from "react";

const Moto = ({ dataMoto }) => {
  return (
    <div className="Moto-container">
      <div className="contents-wrapper flex flex-col px-10 pt-[60px] pb-[32px] text-center desktop:text-start tablet:text-start desktop:w-[879px] desktop:mx-auto tablet:w-full mx-auto">
        <div className="Moto-Heading pb-[24px]">
          <h1 className="font-[600] text-[32px] leading-[38.4px]">
            {dataMoto.heading}
          </h1>
        </div>
        <div className="Moto-desc mb-[48px]">
          <h5 className="font-[400] text-[16px] leading-[24px] tracking-[1.5%]">
            {dataMoto.desc}
          </h5>
        </div>
        <div className="Moto-cards mb-[64px] flex gap-5 flex-wrap justify-center tablet:justify-center desktop:flex-nowrap">
          {dataMoto.cardItems.map((data, i) => {
            return (
              <div className="cardContainer bg-[#E4F4FF] max-w-[290px]" key={i}>
                <div className="cardContents pt-[31px] pl-[19px]">
                  <div className="cardHead mb-[14px]">
                    {data.cardHead && (
                      <h3 className="font-[600] text-[18px] leading-[27px]">
                        {data.cardHead}
                      </h3>
                    )}
                  </div>
                  <div className="cardBody mb-[30px] pr-[32px]">
                    <h5 className="font-[400] text-[14px] leading-[21px]">
                      {data.cardBody}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {dataMoto.CompanyDesc && (
          <div className="Company-desc">
            <h1 className="font-[700] text-[36px] leading-[43px] text-[#004A80]">
              {dataMoto.CompanyDesc}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Moto;
