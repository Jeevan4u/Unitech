import React from "react";
import Details from "../../Components/Details";
import Testimonialsslider from "../../Components/Testimonialsslider";
import RoundImg from "../../assist/Images/roundImg.png";
const Testimonials = () => {
  const TestimonialsData = {
    heading: "Testimonials",
    title: "What our client says",
    leftHeading: `Reviews
    as you say`,
    // desc1:
    //   "Unitech Media is a mass exposure station, which stands for overall solution regarding branding and activation with concern field specialists for online as well as offline media. We believe that a strong and long-lasting relation is the key to success for every business. It hasbeen our pleasure to help companies in building connection with their clients and keep their clients engaged with the brand. ",
    // button: "Our Works",
  };
  const TestimonialSliderData = {
    topic: "Very intuitive team.",
    desc: "Our company has been working with Unitech team for two years and more, it is such a relief to be connected with team and get the creative output that goes beyond the imagination. I am very fond of these talented people and love what they do.",
    name: "DR.MILAN GAUTAM",
    detail: "Director, Keyone International",
    roundImg: RoundImg,
    // desc1:
    //   "Unitech Media is a mass exposure station, which stands for overall solution regarding branding and activation with concern field specialists for online as well as offline media. We believe that a strong and long-lasting relation is the key to success for every business. It hasbeen our pleasure to help companies in building connection with their clients and keep their clients engaged with the brand. ",
    // button: "Our Works",
  };
  return (
    <div className="container pt-[121px] pb-[146px]">
      <Details details={TestimonialsData} />

      <div className="grid grid-cols-2 pt-5">
        <div className="col-1 pl-[203px]">
          <Testimonialsslider testomonialDetail={TestimonialSliderData} />
        </div>
        <div className="col-1 bg-green-600">hellow</div>
      </div>
    </div>
  );
};

export default Testimonials;
