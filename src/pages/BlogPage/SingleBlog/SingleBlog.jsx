import React, { useEffect, useState } from "react";
import Authorcard from "../../../Components/Authorcard";
// import Authorcard from "../../../Components/Authorcard";
import img1 from "../../../assist/Images/authorIMg.png";

const SingleBlog = () => {
  const [date, setDate] = useState();

  useEffect(() => {
    let date = new Date();
    let month = date.getMonth();
    let day = "/" + date.getDay();
    let year = "/" + date.getFullYear();

    setDate(month + day + year);
  }, []);

  const AuthordCardData = {
    img: img1,
    Name: "Abinash Rai",
    time: date,
    duration: "5 min",
  };
  return (
    <div className="SingleBlog pt-[81px] desktop:pl-[156px]  pl-5">
      <div className="author-card ">
        <Authorcard Author={AuthordCardData} />
        <div className="main-blog mt-[48px] flex flex-col">
          <h1 className="font-[600] text-[32px] text-[#004A80] leading-[38.4px]  mb-[24px]">
            How to create a high converting advertisement
          </h1>
          <h3 className="font-[600] text-[20px]  leading-[30px] desktop:max-w-[630px] mb-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            viverra vulputate ut duis commodo id hac habitant risus.
          </h3>
          <h5 className="font-[400] text-[16px]  leading-[24px] tracking-[1.5%] desktop:max-w-[942px] mb-[43px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
            eros, adipiscing at amet tellus lacus semper lectus bibendum. Nibh
            consectetur augue mauris sed bibendum tristique sit nulla nibh.
            Lobortis mi pulvinar mauris volutpat, cursus. Ac viverra massa
            molestie nulla sed morbi elit tincidunt maecenas. Sagittis,
            fringilla consectetur vitae amet, auctor facilisis. Sed pretium
            malesuada sed tincidunt ipsum pulvinar tristique tortor quis. Ac
            feugiat sed a sem amet. Dictum enim porttitor eget orci dignissim
            sem volutpat. Nec enim arcu, vestibulum id cursus erat. Massa risus
            nibh vitae dignissim ac. Eget pellentesque eleifend sagittis purus
            ut lectus dignissim velit.
          </h5>
        </div>
        <button className="appearance-none text-[#ED1C24] underline mb-[49px]">
          Read More
        </button>
        <hr className="text-lg mb-4 border-[2px]" />
      </div>
      <div className="Explore">
        <h1 className="text-[36px] font-[700] leading-[43.2px] text-[#004A80] pt-[80px] desktop:max-w-[354px] mb-[89px]">
          Explore our articles and events
        </h1>
      </div>
    </div>
  );
};

export default SingleBlog;
