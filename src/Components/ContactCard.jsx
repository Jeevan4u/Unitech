import React from "react";

const ContactCard = ({ ContactCardDetails }) => {
  return (
    <div>
      <div className="contactCardWrapper flex">
        <div className="icon-clock mr-[24px]">
          <img src={ContactCardDetails.img} alt="" />
        </div>
        <div className="card-contents">
          <h3 className="mb-[2px] font-[500] text-[15.45px] leading-[23.18px] tracking-[15%] text-[#707070]">
            {ContactCardDetails.topic}
          </h3>
          <h1 className="mb-[10px] font-[600] text-[18px] leading-[27px] ">
            {ContactCardDetails.heading}
          </h1>
          <p className="mb-[21px] w-[252px] font-[400] text-[14px] leading-[21px] ">
            {ContactCardDetails.desc}
          </p>

          {ContactCardDetails.time ? (
            <h2 className="font-[600] text-[20px] leading-[30px] text-[#ED1C24]">
              {ContactCardDetails.time}
            </h2>
          ) : ContactCardDetails.extra ? (
            <div className="contactnumbers flex justify-between">
              <div className="sales">
                <h5 className="text-[400] font-[14px] leading-[21px]">
                  {ContactCardDetails.extra}
                </h5>
                <h5 className="text-[20px] font-[600] leading-[30px] text-[#ED1C24]">
                  {ContactCardDetails.extranumber}
                </h5>
              </div>
              <div className="marketing">
                <h5 className="text-[400] font-[14px] leading-[21px]">
                  {ContactCardDetails.extra2}
                </h5>
                <h1 className="text-[20px] font-[600] leading-[30px] text-[#ED1C24]">
                  {ContactCardDetails.extranumber2}
                </h1>
              </div>
            </div>
          ) : ContactCardDetails.loc ? (
            <h2 className="font-[600] text-[20px] leading-[30px] text-[#ED1C24]">
              {ContactCardDetails.loc}
            </h2>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
