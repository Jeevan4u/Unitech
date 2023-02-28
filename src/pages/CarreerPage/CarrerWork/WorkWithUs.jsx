import React from "react";
import Images1 from "../../../assist/Images/img1.png";
import Images2 from "../../../assist/Images/img2.png";
import Images3 from "../../../assist/Images/img3.png";
const WorkWithUs = () => {
  const dataImages = [
    {
      img1: Images1,
    },
    {
      img1: Images2,
    },
    {
      img1: Images3,
    },
  ];
  return (
    <div className="WorkwithUs desktop:container desktop:px-[125px] px-12">
      <div className="work-contents ">
        <h1 className="mb-[28px] font-[600] text-[32px] leading-[38.4px]">
          What its like to work at Unitech
        </h1>
        <h5 className="font-[400] text-[16px] leading-[24px] tracking-[1.5%] mb-[48px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr
        </h5>

        <h1 className="mb-[28px] font-[600] text-[32px] leading-[38.4px]">
          Corporate culture
        </h1>
        <h5 className="font-[400] text-[16px] leading-[24px] tracking-[1.5%] mb-[40px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr
        </h5>
      </div>
      <div className="work-imgs mb-[128px] ">
        <div className="img-container flex flex-wrap gap-5 justify-center tablet:justify-evenly desktop:justify-between overflow-hidden">
          {dataImages.map((data, i) => (
            <div className="single-img overflow-hidden">
              <img
                src={data.img1}
                alt=""
                className="object-cover hover:transform hover:scale-150 hover:duration-500 hover:transition-all scale-100 transition ease-linear"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
