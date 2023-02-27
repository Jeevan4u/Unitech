import React, { useState } from "react";
import Logo from "../assist/Images/unitech logo 2.png";
import ham from "../assist/Images/ham_small.png";
const Navbar = () => {
  const navItems = [
    "Home",
    "About US ",
    "Work",
    "Services",
    "Carrer",
    "Blog",
    "Contact",
  ];

  const showitems = () => console.log("hellow");
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <div className="navbar relative z-1 flex align-middle pt-[21px] pb-[22.12px] max-w-[1248px] mx-auto tablet:justify-around  desktop:justify-between">
        <div className="logo">
          <div className="img-container">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div
          className={`nav-items flex justify-between items-center w-[737px] tablet:${
            show === true
              ? "flex flex-col justify-evenly absolute top-20 left-0 h-screen w-screen bg-white z-[9999]"
              : "hidden"
          } hidden desktop:flex`}
        >
          {navItems.map((items, i) => {
            return (
              <div className="nav-links " key={i}>
                <h1 className="nav-text ">{items}</h1>
              </div>
            );
          })}
        </div>
        <div className="hamburger hidden tablet:block pt-[5px] z-[99999] desktop:hidden">
          <img src={ham} alt="" onClick={() => setShow(!show)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
