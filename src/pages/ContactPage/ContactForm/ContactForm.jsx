import React from "react";
import { useNavigate } from "react-router-dom";
const ContactForm = () => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <div className="Form desktop:ml-[149px] desktop:mr-[253px] pb-[128px] laptop:mx-[80px] mx-7">
      <form action="">
        <div className="contactFormWrapper">
          <div className="form-contents mb-[42px] ">
            <h1 className="font-[600] text-[20px] leading-[30px] mb-[7px]">
              Send us message instead
            </h1>
            <h3 className="font-[400] text-[16px] leading-[24px] tracking-[1.5%]">
              For Job Opportunites, Please{" "}
              <span
                className="underline text-[#ED1C24] "
                onClick={() => navigate("/career")}
              >
                click here
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-1 desktop:grid-cols-2 laptop:grid-cols-2">
            <div className="form-left order-2 desktop:order-1 laptop:order-1">
              <div className="Name mb-[18px]">
                <label
                  htmlFor=""
                  className="text-[#707070] text-[18px] leading-[27px] font-[600] mb-[7px]"
                >
                  Name*
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full py-[19px] pl-[8px] appearance-none border border-[#707070] rounded text-gray-700  focus:shadow-sm focus:pl-8 focus:transition-all tablet:w-full transition-all"
                />
              </div>
              <div className="Email mb-[18px]">
                <label
                  htmlFor=""
                  className="text-[#707070] text-[18px] leading-[27px] font-[600] mb-[7px]"
                >
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full py-[19px] pl-[8px] appearance-none border border-[#707070] rounded text-gray-700  focus:shadow-sm focus:pl-8 focus:transition-all tablet:w-full transition-all"
                />
              </div>
              <div className="phone mb-[18px]">
                <label
                  htmlFor=""
                  className="text-[#707070] text-[18px] leading-[27px] font-[600] mb-[7px]"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Enter Email"
                  pattern="[0-9]{3}-[0-9]{10}"
                  required
                  className="w-full py-[19px] pl-[8px] appearance-none border border-[#707070] rounded text-gray-700  focus:shadow-sm focus:pl-8 focus:transition-all tablet:w-full transition-all"
                />
              </div>
              <div className="agreement flex mb-[14px]">
                <input type="checkbox" className="mr-[16px]" required />
                <h5>i agree all terms and conditions</h5>
              </div>
              <div className="agreement flex mb-[65px]">
                <input type="checkbox" className="mr-[16px] " required />
                <h5>
                  i want to receive all the updates about offers and promotion
                  from unitech
                </h5>
              </div>
              <button className="py-[16px] px-[24px] bg-[#ED1C24] text-white">
                Submit
              </button>
            </div>
            <div className="form-right desktop:ml-[40px] laptop:ml-[40px] mt-[10px] order-1">
              <div className="Name mb-[18px]">
                <label
                  htmlFor=""
                  className="text-[#707070] text-[18px] leading-[27px] font-[600] mb-[7px]"
                >
                  Message Title
                </label>
                <input
                  type="text"
                  placeholder="Enter Title here"
                  className="w-full py-[19px] pl-[8px] appearance-none border border-[#707070] rounded text-gray-700  focus:shadow-sm focus:pl-8 focus:transition-all tablet:w-full transition-all"
                />
              </div>
              <div className="Name mb-[18px]">
                <label
                  htmlFor=""
                  className="text-[#707070] text-[18px] leading-[27px] font-[600] mb-[7px]"
                >
                  Message Title
                </label>
              </div>
              <textarea
                name=""
                id=""
                className="border-[1px] b w-full h-[197px] pl-5 pt-5 focus:border-black"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
