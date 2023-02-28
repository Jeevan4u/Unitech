import React from "react";

const Authorcard = ({ Author }) => {
  return (
    <div className="author-card flex">
      <div className="profile-img-container h-[52px] w-[52px] rounded-full mr-[14px]">
        <img src={Author.img} alt="" />
      </div>
      <div className="text-contents ">
        <div className="author-name">
          <h1 className="text-[18px] leading-[27px] font-[600]">
            {Author.Name}
          </h1>
        </div>
        <div className="updated flex">
          <h5 className="mr-[20px] text-[14px] leading-[21px] font-[400]">
            Updated {Author.time}
          </h5>
          <p className="text-[14px] leading-[21px] font-[400]">
            {Author.duration} read
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authorcard;
