import React from "react";
import CarrerCard from "../../../Components/CarrerCard";

const VacancyCards = () => {
  const CarrerCardDatasIntern = [
    {
      status: "Job fulfilled",
      jobtype: "Content Writer",
      desc: "WebsiteWe're looking for an enthusiastic Content Writer to join our growing SEO team",
      time: "Full Time",
      color: false,
    },
    {
      status: "Job fulfilled",
      jobtype: "Graphic Designer",
      desc: "WebsiteWe're looking for an enthusiastic Content Writer to join our growing SEO team",
      time: "Full Time",
      color: true,
    },
    {
      status: "Job Open",
      jobtype: "Web Developer",
      desc: "WebsiteWe're looking for an enthusiastic Content Writer to join our growing SEO team",
      time: "Full Time",
      color: true,
    },
  ];
  const CarrerCardDatasEmployee = [
    {
      status: "Job fulfilled",
      jobtype: "Content Writer",
      desc: "WebsiteWe're looking for an enthusiastic Content Writer to join our growing SEO team",
      time: "Full Time",
      color: false,
    },
    {
      status: "Job Open",
      jobtype: "Graphic Designer",
      desc: "WebsiteWe're looking for an enthusiastic Content Writer to join our growing SEO team",
      time: "Full Time",
      color: true,
    },
    {
      status: "Job fulfilled",
      jobtype: "Web Developer",
      desc: "WebsiteWe're looking for an enthusiastic Content Writer to join our growing SEO team",
      time: "Full Time",
      color: false,
    },
  ];

  return (
    <div className="Card-container desktop:px-[150px] my-5 mb-[133px]">
      <div className="heading-container text-center desktop:text-start desktop:pl-[70px] mb-[24px]">
        <h1 className="text-[20px] font-[600] leading-[30px]">
          Be our Intern : Join and Learn
        </h1>
      </div>
      <div className="flex flex-wrap justify-center desktop:justify-evenly gap-5 mb-[67px]">
        {CarrerCardDatasIntern.map((data, i) => (
          <CarrerCard jobData={data} />
        ))}
      </div>
      <div className="heading-container text-center desktop:text-start desktop:pl-[70px] mb-[24px]">
        <h1 className="text-[20px] font-[600] leading-[30px]">
          Be our Employee
        </h1>
      </div>
      <div className="flex flex-wrap justify-center desktop:justify-evenly gap-5 mb-[67px]">
        {CarrerCardDatasEmployee.map((data, i) => (
          <CarrerCard jobData={data} />
        ))}
      </div>
    </div>
  );
};

export default VacancyCards;
