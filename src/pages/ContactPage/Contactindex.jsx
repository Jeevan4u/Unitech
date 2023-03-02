import React from "react";
import Banner from "../../Components/Banner";
import ContactIMG from "../../assist/Images/ContactIMG2.png";
import ContactCard from "../../Components/ContactCard";
import ContactCardlists from "./ContactCardlists/ContactCardlists";
import ContactForm from "./ContactForm/ContactForm";
import ContactNewsLetter from "../StayTuned/Staytuned";
const Contactindex = () => {
  const contactData = {
    imgs: ContactIMG,
    topic: "Contact Us",
    subtopic: "Home > Contact",
  };

  return (
    <div>
      <Banner data={contactData} />
      <ContactCardlists />
      <ContactForm />
      <ContactNewsLetter />
    </div>
  );
};

export default Contactindex;
