import React, { useState } from "react";
import Logo from "../assist/Images/unitech logo 2.png";
import ham from "../assist/Images/ham_small.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navItems = [
    { title: "Home", link: "/" },
    { title: "ABOUT US", link: "/about" },
    { title: "WORK", link: "/work" },
    { title: "SERVICES", link: "/services" },
    { title: "CAREER", link: "/career" },
    { title: "BLOG", link: "/blog" },
    { title: "CONTACT", link: "/contact" },
  ];

  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <>
      <div className="container">
        <div className="navbar relative z-1 flex align-middle pt-[21px] pb-[22.12px] max-w-[1248px] mx-auto tablet:justify-around  desktop:justify-between phone:justify-between">
          <div className="logo">
            <div className="img-container">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div
            className={`nav-items hidden justify-between items-center  w-[737px]  tablet:${
              show &&
              "block tablet:text-center  tablet:absolute tablet:h-screen tablet:w-screen tablet:bg-white"
            } desktop:flex`}
          >
            {navItems.map((items, i) => {
              return (
                <ul className="nav-links appearance-none" key={i}>
                  <Link to={items.link} className="nav-text ">
                    {items.title}
                  </Link>
                </ul>
              );
            })}
          </div>
          <div className="hamburger hidden tablet:block pt-[5px] z-[99999] desktop:hidden phone:block mr-5">
            <img src={ham} alt="" onClick={() => setShow(!show)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
