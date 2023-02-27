import React from "react";
import Logouni from "../../../assist/Images/Logouni.png";
import UniIcon from "../../../assist/Images/uniIcon.png";
const BrandResources = () => {
  const colorsData = [
    {
      colorID: "#1072BC",
      colorName: "Primary Color",
    },
    {
      colorID: "#ED1C24",
      colorName: "Secondary Color",
    },
    {
      colorID: "#E4F4FF",
      colorName: "Surface Color 1",
    },
    {
      colorID: "#F8F8F8",
      colorName: "Surface Color 2",
    },
    {
      colorID: "#004A80",
      colorName: "Dark Shade of Primary",
    },
  ];
  return (
    <div className="Brand-container desktop:pt-[88px] desktop:px-[250px] desktop:pb-[89px] bg-[#F2F2F2] tablet:py-10 tablet:px-10 py-10 px-10 ">
      <div className="Brand-content">
        <h1 className="font-[600] text-[32px] leading-[38.4px] mb-[26px]">
          Brand Resources
        </h1>
        <h3 className="font-[400] text-[16px] leading-[24px] tracking-[1.5%] mb-[21px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren,{" "}
        </h3>
        <div className="button-container flex ">
          <button className="appearance-none underline text-[#ED1C24] font-[400] text-[16px] leading-[24px]">
            View Our Brand Identity
          </button>
          <button className="appearance-none underline text-[#ED1C24] font-[400] text-[16px] leading-[24px] ml-[32px]">
            Download brand resources
          </button>
        </div>
      </div>
      <div className="logo-container desktop:pt-[45px] py-7">
        <div className="logo pb-[25px]">
          <h3 className="font-[600] text-[20px] leading-[30px]">Logo</h3>
        </div>
        <img src={Logouni} alt="" />
      </div>
      <div className="colors desktop:pt-[64px]">
        <h3 className="font-[600] text-[20px] leading-[30px]">Colors</h3>
        <div className="colors-card pt-[26px] flex flex-wrap gap-7 justify-center desktop:justify-evenly desktop:flex-nowrap tablet:flex-nowrap tablet:justify-between">
          {colorsData.map((data, i) => (
            <div className="CardCont flex flex-col justify-center align-middle">
              <div
                className={`circleDiv h-[42px] w-[42px] bg-[${data.colorID}] rounded-full border-2 border-black`}
              ></div>
              <div className="color-name py-3 text-[14px] font-[400] leading-[21px]">
                {data.colorName}
              </div>
              <div className="color-id text-[#828282] text-[14px] font-[400] leading-[22.4px] pb-[64px]">
                {data.colorID}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="icon-container">
        <h2 className="text-[20px] font-[600] leading-[30px] pb-[27px]">
          Icons
        </h2>
        <img src={UniIcon} alt="" />
      </div>
    </div>
  );
};

export default BrandResources;
