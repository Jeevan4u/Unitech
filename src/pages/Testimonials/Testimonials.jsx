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
    <div className="container pt-[121px]">
      <Details details={TestimonialsData} left={true} />
      <div className="grid grid-cols-2 pt-5 tablet:px-[10px]">
        <div className="col-1 pl-[203px] tablet:pl-[50px]">
          <Testimonialsslider testomonialDetail={TestimonialSliderData} />
        </div>
        <div className="col-1">
          <div className="testo-form">
            <div className="testo-content">
              <div className="testo-topic">
                <h3 className="font-[500] text-[16px] leading-[27px] text-[#1072BC]">
                  Hey,Love our work ?
                </h3>
              </div>
              <div className="testo-topic-desc">
                <h3 className="font-[500] text-[18px] leading-[27px]">
                  Submit your testimonial here if you’ve worked with us
                </h3>
              </div>
            </div>
            <div className="main-form">
              <form className="bg-white rounded  pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-[480px] py-[19px] pl-[8px] appearance-none border rounded text-gray-700 focus:outline-none focus:shadow-sm focus:pl-8 focus:transition-all tablet:w-full"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-[480px] py-[19px] pl-[8px] appearance-none border rounded text-gray-700 focus:outline-none focus:shadow-sm focus:pl-8 focus:transition-all tablet:w-full"
                  />
                </div>
                <div className="mb-[60px]">
                  <textarea
                    type="text-area"
                    placeholder="Comments"
                    className="w-[480px] py-[19px] pl-[8px] appearance-none border rounded text-gray-700 focus:outline-none focus:shadow-sm pb-[63px] focus:pl-8 focus:transition-all tablet:w-full"
                  />
                </div>
                <div className="button">
                  <button
                    className="bg-transparent hover:bg-[#ED1C24] text-[#ED1C24] font-semibold hover:text-white py-2 px-4 transition-all hover:px-8 border border-black hover:border-transparent rounded "
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
