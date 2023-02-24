import React from "react";
import img1 from "../assist/Images/fb.png";
import img2 from "../assist/Images/camera.png";
import img3 from "../assist/Images/linkn.png";
import img4 from "../assist/Images/yt.png";
import img5 from "../assist/Images/be.png";
import unitechlogoWhite from "../assist/Images/unitechlogowhite1.png";
import Group from "../assist/Images/group.png";
const Footer = () => {
  return (
    <div className="container bg-[#004A80] overflow-hidden">
      <div className="footer__container pt-[169px] max-w-[1200px] mx-auto">
        <div className="footer__contents grid grid-cols-3 relative">
          <div className="col-1 ">
            <div className="img-container mb-[22px] w-[206px]">
              <img src={unitechlogoWhite} alt="" className="object-cover" />
            </div>
            <div className="company-des mb-[70px]">
              <h3 className="font-[400] text-[16px] leading-[24px] tracking-[1.5%] text-[#ffff]">
                We believe change is possible through creativity and our mission
                is to change the Branding concept to the next level of effective
                standard; that stands simple and grand at the same time.
              </h3>
            </div>
            <div className="contact-wrapper">
              <div className="h2 font-[600] text-[18px] leading-[27px] text-white">
                +977 14 568111, 4593222 <br />
                hello@unitechmedia.com.np <br />
                Bhatkeko pul, Kathmandu, 44600
              </div>
            </div>
          </div>
          <div className="col-2 mt-[160px] flex flex-col items-center">
            <div className="h2 font-[600] text-[18px] leading-[27px] text-white mb-[16px]">
              Quick Links
            </div>
            <div className="link-items ">
              <div className="links font-[500] text-[14px] leading-[21px] text-white">
                About us
              </div>
              <div className="links font-[500] text-[14px] leading-[21px] text-white">
                Our Works
              </div>
              <div className="links font-[500] text-[14px] leading-[21px] text-white">
                Team
              </div>
              <div className="links font-[500] text-[14px] leading-[21px] text-white">
                Contact us
              </div>
              <div className="links font-[500] text-[14px] leading-[21px] text-white">
                Brand Resources
              </div>
              <div className="links font-[500] text-[14px] leading-[21px] text-white">
                Services
              </div>
            </div>
          </div>
          <div className="col-3 mt-[200px]">
            <h2 className="links font-[600] text-[18px] leading-[27px] text-white mb-[16px]">
              Userful Links
            </h2>
            <div className="useful-desc">
              <h5 className="font-[500] text-[14px] leading-[21px] text-white">
                Engaging user content for high traffic. Design trends for 2020.
                Apps of Nepal with best UX design. Engaging user content for
                high traffic.
              </h5>
            </div>
          </div>
          <img src={Group} alt="" className="absolute top-[-100px] right-0" />
        </div>
        <div className="footer__icons flex flex-col items-center">
          <div className="icons flex w-[249px] justify-between pt-[99px] mb-[20px]">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
          </div>
          <div className="final">
            <h4 className="font-[400] text-[16px] leading-[24px] tracking-[1.5%] text-white align-middle mb-[28px]">
              © 2021 by Unitech | All rights reserved
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
