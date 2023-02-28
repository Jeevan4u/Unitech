import { React } from "react";
import { useSwiper } from "swiper/react";
import Cricle from "../assist/Images/criclearrow.png";
export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button className="w-full mt-10" onClick={() => swiper.slideNext()}>
      <img
        src={Cricle}
        alt=""
        className="tablet:mx-auto desktop:mx-0
      "
      />
    </button>
  );
}
