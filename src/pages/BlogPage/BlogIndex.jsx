import React from "react";
import Banner from "../../Components/Banner";
import Blogbanner from "./BlogBanner/Blogbanner";
import SingleBlog from "./SingleBlog/SingleBlog";
import BlognewsLetter from "../StayTuned/Staytuned";
const BlogIndex = () => {
  return (
    <div className="Blog-page">
      <Blogbanner />
      <SingleBlog />
      <BlognewsLetter />
    </div>
  );
};

export default BlogIndex;
