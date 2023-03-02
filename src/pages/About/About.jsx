import React from "react";
import "./About.css";
import Brand from "../../assist/Images/Branding.png";
import Activate from "../../assist/Images/Activation.png";
import App from "../../assist/Images/App.png";
import Market from "../../assist/Images/Marketing.png";
import Details from "../../Components/Details";
import Cards from "../../Components/Cards";
const About = () => {
  const CardsItems = [
    {
      id: Brand,
      title: "Branding",
      sub: "A company must have defined brand mission, vision and values which must be carried out in all most every step of brand reflection.",
    },
    {
      id: Activate,
      title: "Activation",
      sub: "Activation brings brand to life and connects to customer in a deep and meaningful level. It is done with understanding company, product, ideal customers and competitors.",
    },
    {
      id: App,
      title: "Web & Apps",
      sub: "Coming across the design that speaks your brand, we can provide you the fine quality print that resembles your company specialty.",
    },
    {
      id: Market,
      title: "Digital Marketing",
      sub: "Coming across the design that speaks your brand, we can provide you the fine quality print that resembles your company specialty. ",
    },
  ];

  // const Cards = (
  //   <div className="Cards flex justify-between pt-10 pb-[129px] tablet:flex-wrap">
  //     {CardsItems.map((data, i) => {
  //       return (
  //         <div className="cards-wrapper w-[235px]" key={i}>
  //           <div className="card-icon py-5">
  //             <img src={data.id} alt="" />
  //           </div>
  //           <div className="crad-title text-[18px] text-[#1072BC] leading-[27px]">
  //             {data.title}
  //           </div>
  //           <div className="card-sub text-[14px] leading-[21px]">
  //             {data.sub}
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  // const heading = <>About Us</>;
  // const title = <>WE CREATE SOMETHING VERY TRENDY AND ------ </>;
  // const button = <> About Us</>;
  // const leftHeading = <>We Help to grow your buisness</>;
  // const desc1 = (
  //   <>
  //     Unitech Media is a mass exposure station, which stands for overall
  //     solution regarding branding and activation with concern field specialists
  //     for online as well as offline media. We believe that a strong and
  //     long-lasting relation is the key to success for every business. It has
  //     been our pleasure to help companies in building connection with their
  //     clients and keep their clients engaged with the brand.
  //   </>
  // );
  const detailsData = {
    heading: "About Us",
    title: "WE CREATE SOMETHING VERY TRENDY AND ------",
    leftHeading: "We Help to grow your buisness",
    desc1:
      "Unitech Media is a mass exposure station, which stands for overall solution regarding branding and activation with concern field specialists for online as well as offline media. We believe that a strong and long-lasting relation is the key to success for every business. It hasbeen our pleasure to help companies in building connection with their clients and keep their clients engaged with the brand. ",
    button: "About",
    link: "about",
  };

  return (
    <div className="container">
      <div className="content-wrapper max-w-[1132px] mx-auto pt-[120px] ">
        <Details
          // heading={heading}
          // title={title}
          // button={button}
          // leftHeading={leftHeading}
          // desc1={desc1}
          details={detailsData}
        />
        {/* <div className="main-cards-wrapper tablet:px-10">{Cards}</div> */}
        <div className="main-cards-wrapper flex flex-wrap gap-5 justify-center tablet:px-10 tablet:justify-evenly desktop:justify-evenly">
          {CardsItems.map((data, i) => (
            <Cards mainCards={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
