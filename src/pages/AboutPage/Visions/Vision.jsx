import React from "react";
import Moto from "../../../Components/Moto";
const Vision = () => {
  const dataMotoDetails = {
    heading: "Our Vision",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    cardItems: [
      {
        cardHead: "Innovation",
        cardBody:
          "We see things in a new light, giving you an edge against the competition.",
      },
      {
        cardHead: "Innovation",
        cardBody:
          "We see things in a new light, giving you an edge against the competition.",
      },
      {
        cardHead: "Innovation",
        cardBody:
          "We see things in a new light, giving you an edge against the competition.",
      },
    ],
    CompanyDesc:
      "Unitech is a team of creators, strategists, developers and communicators with one mission: to bring ideas into reality",
  };
  return (
    <div>
      <Moto dataMoto={dataMotoDetails} />
    </div>
  );
};

export default Vision;
