import React from "react";
import Banner from "../../Components/Banner";
import Blogbanner from "./BlogBanner/Blogbanner";
import SingleBlog from "./SingleBlog/SingleBlog";

const BlogIndex = () => {
  return (
    <div className="Blog-page">
      <Blogbanner />
      <SingleBlog />
    </div>
  );
};

export default BlogIndex;
