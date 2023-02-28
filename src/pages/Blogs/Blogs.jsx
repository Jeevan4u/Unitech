import React from "react";
import Details from "../../Components/Details";
import "./styles.css";
import Blogitem from "../../Components/Blogitem";
import BlogcardImg1 from "../../assist/Images/Blogcard1.png";
import BlogcardImg2 from "../../assist/Images/Blogcard2.png";
import BlogcardImg3 from "../../assist/Images/Blogcard3.png";
const Blogs = () => {
  const blogData = {
    heading: "Latest Blogs",
    title: "From design trends to hot topics",
    leftHeading: `Explore our articles
    and events`,
    // desc1:
    //   "Unitech Media is a mass exposure station, which stands for overall solution regarding branding and activation with concern field specialists for online as well as offline media. We believe that a strong and long-lasting relation is the key to success for every business. It hasbeen our pleasure to help companies in building connection with their clients and keep their clients engaged with the brand. ",
    button: "Explore blogs",
  };

  const BlogitemsData = [
    {
      imgs: BlogcardImg1,
      info: "Corporate Design Tips",
      title: "How to make your design breathe?",
      desc: "If you want a corporate look for your design, you must be sure that your design has enough space to breathe. A design should not contain any unnecessary element until and unless it has value or looks pleasant.",
    },
    {
      imgs: BlogcardImg2,
      info: "Tips for Visual Effrect",
      title: "Know the design setting",
      desc: "Before you dive into the pool of brainstorm for any graphic design, you must know the basic tips for visuals.",
    },
    {
      imgs: BlogcardImg3,
      info: "Post Design Tips",
      title: "Use message focus strategy",
      desc: "Making post might be confusing as it has fix size ad display device. You must be sure that your design matters are visible in all the devices including hand phone.",
    },
  ];
  return (
    <div className="container">
      <div className="blog-container-fix  mt-[140px] mb-[109px]">
        <Details details={blogData} />
      </div>
      <div className="blogmaincards mb-[211px]">
        <div className="flex-container flex justify-center gap-10 flex-wrap">
          {BlogitemsData.map((data, i) => {
            return (
              <>
                <Blogitem details={data} left={true} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
