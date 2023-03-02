import React from "react";
import ContactCard from "../../../Components/ContactCard";
import ClockContact from "../../../assist/Images/ClockContact.png";
const ContactCardlists = () => {
  const contactCards = [
    {
      img: ClockContact,
      topic: "Hours",
      heading: "Working Hours",
      desc: "Rounding up a bunch of specific designs and talking about the merits of each is the perfect way to find common ",
      time: "09-18hr",
    },
    {
      img: ClockContact,
      topic: "Call",
      heading: "Our Specific Department",
      desc: "Rounding up a bunch of specific designs and talking about the merits of each is the perfect way to find ",
      extra: "sales",
      extranumber: "01-4234567",
      extra2: "Marketing",
      extranumber2: "01-4234522",
    },
    {
      img: ClockContact,
      topic: "Visit",
      heading: "Our Location",
      desc: "Rounding up a bunch of specific designs and talking about the merits of each is the perfect way to find common  ",
      loc: "Get direction",
    },
  ];
  return (
    <>
      <div className="AllCardWrapper flex gap-5 flex-wrap desktop:justify-evenly pt-[83px] mb-[128px] justify-center">
        {contactCards.map((data, i) => (
          <div className="contactCards" key={i}>
            <ContactCard ContactCardDetails={data} />
          </div>
        ))}
      </div>
      <div className="noteContainer  desktop:pl-[149px] my-5 mb-[128px]">
        <h3 className="font-[400] text-[24px] leading-[24px] tracking-[1.5%] px-10 text-center desktop:text-start laptop:text-start relative before:absolute before:bg-black before:h-1 before:w-20 before:top-0 py-5">
          Note : Every Friday the working hours may differ
        </h3>
      </div>
      {/* <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=nepal unitech&t=&z=10&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="yes"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div> */}
      <div className="w-full mb-[128px] border-[2px] border-black">
        <iframe
          className="w-full h-[200px] tablet:h-[300px] desktop:h-[500px]"
          frameborder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=nepal%20unitech+(Unitech)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            area maps
          </a>
        </iframe>
      </div>
    </>
  );
};

export default ContactCardlists;
