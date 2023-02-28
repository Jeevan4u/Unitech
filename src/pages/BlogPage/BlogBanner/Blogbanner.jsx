import React from "react";
import Banner from "../../../Components/Banner";
import BlogImg from "../../../assist/Images/BlogBanner.png";
const Blogbanner = () => {
  const BlogbannerData = {
    imgs: BlogImg,
    topic: "About Us",
    subtopic: "Home > About Us",
  };
  return (
    <>
      <Banner data={BlogbannerData} />
    </>
  );
};

export default Blogbanner;
