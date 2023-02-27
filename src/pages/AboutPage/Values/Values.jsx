import React from "react";
import Moto from "../../../Components/Moto";

const Values = () => {
  const dataVisionDetails = {
    heading: "Our Values",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    cardItems: [
      {
        cardHead: "Commitment",
        cardBody:
          "We take responsibility and accountability seriously. We are committed to delivering  only the best.",
      },
      {
        cardHead: "Community",
        cardBody:
          "We pride ourselves on creating a positive and ethical work environment.",
      },
      {
        cardHead: "Innovation",
        cardBody:
          "We like to think outside the box, challenge ourselves with cons- tructive feedback and act before others do so we remain one step ahead..",
      },
      {
        cardHead: "Excellence",
        cardBody: "We deliver exceptional results, always.",
      },
    ],
  };
  return (
    <>
      <Moto dataMoto={dataVisionDetails} />
    </>
  );
};

export default Values;
