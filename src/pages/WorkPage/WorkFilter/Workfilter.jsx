import React, { useState } from "react";
import Productlists from "../../../Components/Productlists";
import WorkImg1 from "../../../assist/Images/WorkImg1.png";
import WorkImg2 from "../../../assist/Images/WorkImg2.png";
import WorkImg3 from "../../../assist/Images/WorkImg3.png";
import WorkImg4 from "../../../assist/Images/WorkImg4.png";
import WorkImg5 from "../../../assist/Images/WorkImg5.png";
import WorkImg6 from "../../../assist/Images/WorkImg6.png";

const Workfilter = () => {
  const [data, setData] = useState("All");
  const workDataobj = [
    {
      name: "Medicine",
      title: "Hosp",
      img: WorkImg1,
      type: "Branding",
    },
    {
      name: "Cash",
      title: "bank",
      img: WorkImg2,
      type: "Creative",
    },
    {
      name: "Project",
      title: "Category",
      img: WorkImg3,
      type: "Branding",
    },

    {
      name: "Project",
      title: "Category",
      img: WorkImg4,
      type: "Development",
    },
    {
      name: "Project",
      title: "Category",
      img: WorkImg5,
      type: "Creative",
    },
    {
      name: "Project",
      title: "Category",
      img: WorkImg6,
      type: "Development",
    },
    {
      name: "Project",
      title: "Category",
      img: WorkImg2,
      type: "Branding",
    },

    {
      name: "Project",
      title: "Category",
      img: WorkImg4,
      type: "Development",
    },
    {
      name: "Medicine",
      title: "Hosp",
      img: WorkImg1,
      type: "Branding",
    },
    {
      name: "Cash",
      title: "bank",
      img: WorkImg2,
      type: "Creative",
    },
    {
      name: "Project",
      title: "Category",
      img: WorkImg3,
      type: "Branding",
    },

    {
      name: "Project",
      title: "Category",
      img: WorkImg4,
      type: "Development",
    },
    {
      name: "Project",
      title: "Category",
      img: WorkImg5,
      type: "Creative",
    },
    {
      name: "Project",
      title: "Category",
      img: WorkImg6,
      type: "Development",
    },
  ];

  const filterItems = workDataobj.filter((items) => items.type === data);
  console.log(filterItems);
  console.log(data);
  return (
    <div className="desktop:pl-[150px] mb-[42px]">
      <div className="filter-contents flex">
        <h1 className="font-[600] text-[18px] leading-[27px] mr-[40px]">
          Filter By :
        </h1>
        <div className="filter-cat flex gap-7 ">
          <h1
            className={`${data === "All" && "text-[#ED1C24]"}`}
            onClick={() => {
              setData("All");
            }}
          >
            All
          </h1>
          <h1
            className={`${data === "Branding" && "text-[#ED1C24]"}`}
            onClick={() => {
              setData("Branding");
            }}
          >
            /Branding
          </h1>
          <h1
            className={`${data === "Creative" && "text-[#ED1C24]"}`}
            onClick={() => setData("Creative")}
          >
            /Creative
          </h1>
          <h1
            className={`${data === "Development" && "text-[#ED1C24]"}`}
            onClick={() => setData("Development")}
          >
            /Development
          </h1>
        </div>
      </div>
      <div className="container flex flex-wrap justify-center gap-5">
        {data === "All"
          ? workDataobj.map((item, i) => <Productlists data={item} />)
          : filterItems.map((filteItem, i) => (
              <Productlists data={filteItem} />
            ))}
        {/* {filterItems.map((item) => (
          <Productlists data={item} />
        ))} */}
      </div>
    </div>
  );
};

export default Workfilter;
