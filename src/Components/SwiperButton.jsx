import { React } from "react";
import { useSwiper } from "swiper/react";
import Cricle from "../assist/Images/criclearrow.png";
export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <img src={Cricle} alt="" />
    </button>
  );
}
