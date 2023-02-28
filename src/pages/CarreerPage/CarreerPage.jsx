import React from "react";
import CareerDetails from "./CareerBannerDetails/CareerDetails";
import CareerImage from "./CareerImageSection/CareerImage";
import VacancyCards from "./CarrerVacany/VacancyCards";
import WorkWithUs from "./CarrerWork/WorkWithUs";
import Subscribe from "../StayTuned/Staytuned";
const CarreerPage = () => {
  return (
    <>
      <CareerImage />
      <CareerDetails />
      <VacancyCards />
      <WorkWithUs />
      <Subscribe />
    </>
  );
};

export default CarreerPage;
