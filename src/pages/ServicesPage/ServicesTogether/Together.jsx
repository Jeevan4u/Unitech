import React from "react";

const Together = () => {
  return (
    <>
      <div className="desktop:container letsMakeSEction bg-[#E4F4FF] px-10 py-[66px]">
        <div className="flex items-center flex-wrap desktop:justify-around tablet:justify-evenly">
          <h1 className="text-[32px] font-[600] leading-[38.4px]">
            Lets make something <br /> great together
          </h1>
          <button className="bg-[#ED1C24] py-[16px] px-[24px] text-white">
            Start A project
          </button>
        </div>
      </div>
    </>
  );
};

export default Together;
