import React from "react";
import "./ScoreCard.css";

const ScoreCard = ({ score }) => {
  return (
    <div className="score-card-container flex min-w-[90%] md:min-w-[50%] py-[1rem] px-[1rem] justify-between items-center border-[3px] border-headerOutline rounded-xl">
      <div className="heading text-white font-extrabold  flex flex-col text-[1.2rem] md:text-[2rem] uppercase h-fit w-[16%] p-0 gap-0 leading-none">
        <p>Rock Paper Scissors</p>
      </div>

      <div className="scoreboard bg-[#fffffff2] min-w-[30%] md:min-w-[20%] p-[0.5rem] md:gap-3 flex flex-col rounded-md leading-none">
        <span className="uppercase tracking-widest grid place-items-center text-scoreText  font-[600] text-sm pt-[0.25rem]">
          Score
        </span>
        <p className=" h-full grid place-items-center text-[2.75rem] text-darkText font-extrabold ">
          {score}
        </p>
      </div>
    </div>
  );
};

export default ScoreCard;
