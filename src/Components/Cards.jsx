import React from "react";
const Cards = ({ mainCards }) => {
  console.log("Cards Items ", mainCards);
  return (
    <>
      <div className="Cards flex justify-between pt-10 pb-[129px] tablet:flex-wrap">
        <div className="cards-wrapper w-[235px]">
          <div className="card-icon py-5">
            <img src={mainCards.id} alt="" />
          </div>
          <div className="crad-title text-[18px] text-[#1072BC] leading-[27px]">
            {mainCards.title}
          </div>
          <div className="card-sub text-[14px] leading-[21px]">
            {mainCards.sub}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
