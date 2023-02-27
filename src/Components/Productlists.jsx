import React from "react";

const Productlists = ({ data }) => {
  return (
    <div className="img-container relative group overflow-hidden flex-grow-1">
      <img
        src={data.img}
        alt=""
        className="group-hover:scale-125 transition ease-in-out duration-1500"
      />
      <div className="text-overlay absolute w-full h-full bg-black opacity-[0] top-0 left-0 flex flex-col place-content-center transition ease-in-out delay-75  group-hover:opacity-[0.75] ">
        <h3 className="text-center text-white text-[18px] font-[700] leading-10 tracking-widest ">
          {data.name}
        </h3>
        <h5 className="text-center items-center text-white">{data.title}</h5>
      </div>
    </div>
  );
};

export default Productlists;
