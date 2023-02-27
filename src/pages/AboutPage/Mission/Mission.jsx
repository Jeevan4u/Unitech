import React from "react";
import Moto from "../../../Components/Moto";

const Mission = () => {
  const dataMissionDetails = {
    heading: "Our Mission",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    cardItems: [
      {
        cardBody:
          "We make your brand and your marketing mission matter, Why? Because when something matters, people act, when  people act brands become engaging and  audiences transform.",
      },
      {
        cardBody:
          "We help brands discover the potential of their story and bridge the gap to their audience and how your story fits into their lives. ",
      },
    ],
  };
  return (
    <>
      <Moto dataMoto={dataMissionDetails} />
    </>
  );
};

export default Mission;
