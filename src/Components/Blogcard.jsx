import React from "react";

const Blogcard = ({ BlogcardData }) => {
  return (
    <div className="BlogCard max-w-[311px]">
      <div className="CardWrapper py-[31px]">
        <div className="img-container mb-[19px]">
          <img src={BlogcardData.img} alt="" />
        </div>
        <div className="card-contents px-1">
          <h5 className="text-[#0F5E9A] text-[14px] font-[400] leading-[21px] mb-[8px]">
            {BlogcardData.topic}
          </h5>
          <h3 className="text-[18px] font-[600] leading-[27px] mb-[16px]">
            {BlogcardData.head}
          </h3>
          <p className="text-[14px] font-[400] leading-[21px] mb-[16px]">
            {BlogcardData.desc}
          </p>
          <button className="appearance-none text-[#ED1C24] underline mb-[31px]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
