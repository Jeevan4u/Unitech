import React, { useState } from "react";
import BlogCards from "./CarrerCard";
import BlogCardimg1 from "../assist/Images/BlogCardimg1.png";
import BlogCardimg2 from "../assist/Images/BlogCardimg2.png";
import BlogCardimg3 from "../assist/Images/BlogCardimg3.png";
import BlogCardimg4 from "../assist/Images/BlogCardimg2.png";
import BlogCardimg5 from "../assist/Images/BlogCardimg1.png";
import BlogCardimg6 from "../assist/Images/BlogCardimg3.png";
import Blogcard from "./Blogcard";
import { act } from "react-dom/test-utils";
const FilterCards = () => {
  //   const filterData = {
  //     all: "all",
  //     Brand: "Branding",
  //     Creative: "Creative",
  //     Dev: "Development",
  //   };
  const [data, setData] = useState("All");
  const [active, setActive] = useState("false");

  const BlogCardsItems = [
    {
      img: BlogCardimg1,
      topic: "Video for marketing",
      head: "How to create high converting......",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sevoluptua. At vero eos et accusam et justo duo dolores et ea ",
      type: "Branding",
    },
    {
      img: BlogCardimg2,
      topic: "Video for marketing",
      head: "How to create high converting......",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sevoluptua. At vero eos et accusam et justo duo dolores et ea ",
      type: "Creative",
    },
    {
      img: BlogCardimg3,
      topic: "Video for marketing",
      head: "How to create high converting......",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sevoluptua. At vero eos et accusam et justo duo dolores et ea ",
      type: "Creative",
    },
    {
      img: BlogCardimg4,
      topic: "Video for marketing",
      head: "How to create high converting......",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sevoluptua. At vero eos et accusam et justo duo dolores et ea ",
      type: "Branding",
    },
    {
      img: BlogCardimg5,
      topic: "Video for marketing",
      head: "How to create high converting......",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sevoluptua. At vero eos et accusam et justo duo dolores et ea ",
      type: "Development",
    },
    {
      img: BlogCardimg6,
      topic: "Video for marketing",
      head: "How to create high converting......",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sevoluptua. At vero eos et accusam et justo duo dolores et ea ",
      type: "Creative",
    },
  ];
  //   const allCards = (
  //     <>
  //       <div className="flex flex-wrap gap-5 justify-evenly">
  //         {BlogCardDatasIntern.map((data, i) => (
  //           <BlogCards jobData={data} />
  //         ))}
  //       </div>
  //     </>
  //   );
  //   const filterCardsData = BlogCardDatasIntern.filter((jobs) => {
  //     if (data === "All") {
  //       return jobs;
  //     }
  //     if (jobs.jobtype === "Web Developer") {
  //       return jobs.jobtype;
  //     }
  //   });

  //   console.log(filterCardsData);

  const filterItems = BlogCardsItems.filter((items) => items.type === data);

  console.log(filterItems);
  console.log(data);

  return (
    <div className="FilterBy">
      <div className="filter-contents flex">
        <h1 className="font-[600] text-[18px] leading-[27px] mr-[40px]">
          Filter By :
        </h1>
        <div className="filter-cat flex gap-7 ">
          <h1
            className={`${active === true && "text-[#ED1C24]"}`}
            onClick={() => {
              setData("All");
              setActive(!active);
            }}
          >
            All
          </h1>
          <h1
            onClick={() => {
              setData("Branding");
            }}
          >
            /Branding
          </h1>
          <h1 onClick={() => setData("Creative")}>/Creative</h1>
          <h1 onClick={() => setData("Development")}>/Development</h1>
        </div>
      </div>
      <div className="allcards flex flex-wrap gap-5 justify-center desktop:justify-evenly tablet:justify-around px-10">
        {data === "All"
          ? BlogCardsItems.map((data, i) => <Blogcard BlogcardData={data} />)
          : filterItems.map((data, i) => <Blogcard BlogcardData={data} />)}
      </div>
    </div>
  );
};

export default FilterCards;
