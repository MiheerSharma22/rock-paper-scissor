import React, { useState } from "react";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissor from "../images/icon-scissors.svg";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Result = ({ selected, score, setScore }) => {
  const navigate = useNavigate();
  let [houseSelection, setHouseSelection] = useState("");
  const [win, SetWin] = useState("");
  const selections = ["rock", "paper", "scissor"];
  const [showPlayAgain, setShowPlayAgain] = useState(false);

  // randomly generating a string from 'rock' , 'paper' and 'scissor'
  function randomSelection() {
    setTimeout(() => {
      let random = selections[Math.floor(Math.random() * 3)];
      setHouseSelection(random);
    }, 2000);
  }

  // finding the winner
  const findWinner = () => {
    if (
      (selected === "paper" && houseSelection === "rock") ||
      (selected === "rock" && houseSelection === "scissor") ||
      (selected === "scissor" && houseSelection === "paper")
    ) {
      setScore(score + 1);
      SetWin("won");
    } else if (selected === houseSelection) {
      SetWin("tie");
    } else {
      SetWin("lost");
    }
  };

  useEffect(() => {
    randomSelection();
  }, []);

  useEffect(() => {
    findWinner();
  }, [houseSelection]);

  return (
    <div className="min-w-[50%] max-w-[90%] flex flex-row justify-around mt-[2.5rem] md:mt-[6rem] gap-10 md:gap-[1.2rem] flex-wrap">
      {/* user selected option */}
      <div className="flex flex-col justify-center items-center gap-5 order-first">
        <p className="text-white tracking-wider text-xl">You Picked</p>
        <div
          className={`rock-button bg-[#fffffff0] rounded-full w-[100px] md:w-[180px] aspect-square  grid place-items-center border-[10px] md:border-[20px]  ${
            selected === "rock"
              ? "border-[#DC2E4E] shadow-[0px_6px_0px_0px_rgba(184,33,60,1)] md:shadow-[0px_10px_0px_0px_rgba(184,33,60,1)]"
              : selected === "paper"
              ? "border-[#4865F4] shadow-[0px_6px_0px_0px_rgba(28,57,201,1)] md:shadow-[0px_10px_0px_0px_rgba(28,57,201,1)]"
              : "border-[#EC9E0E] shadow-[0px_6px_0px_0px_rgba(156,107,16,1)] md:shadow-[0px_10px_0px_0px_rgba(156,107,16,1)]"
          }`}
        >
          <img
            src={
              selected === "rock"
                ? rock
                : selected === "paper"
                ? paper
                : scissor
            }
            draggable="false"
            className="w-[40px] md:w-[80px]"
            alt="user-selection"
          />
        </div>
      </div>

      {/* Displaying the winner */}
      {/* checking if houseSelection is not empty then after a delay of 0.5 seconds showing play Again button */}
      {houseSelection !== "" &&
        setTimeout(() => setShowPlayAgain(true), 500) &&
        showPlayAgain && (
          <div className="flex flex-col justify-center items-center gap-3 md:gap-5 md:my-0 my-[1.5rem] order-last md:order-1">
            {win === "won" ? (
              <span className="text-[3.5rem] md:text-5xl font-bold text-white uppercase text-center">
                You won
              </span>
            ) : null || win === "lost" ? (
              <span className="text-[3.5rem] md:text-5xl font-bold text-white uppercase text-center">
                You lose
              </span>
            ) : null || win === "tie" ? (
              <span className="text-[3.5rem] md:text-5xl font-bold text-white uppercase text-center">
                Tie
              </span>
            ) : null}
            <Link to={"/"}>
              <button className="py-[0.3rem] md:py-[0.3rem] px-[1.2rem] md:px-[1.5rem] rounded-md text-headerOutline font-semibold tracking-[0.2em]  text-md  bg-white uppercase hover:text-red-500 transition-all duration-150">
                Play Again
              </button>
            </Link>
          </div>
        )}

      {/* computer selected option */}
      <div
        className={`flex flex-col  items-center ${
          houseSelection === "" ? "gap-10" : "gap-5"
        } md:order-last`}
      >
        <p className="text-white tracking-wider text-xl">House Picked</p>
        {
          // if houseSelection is not blank then show its selection else show a black placeholder
          houseSelection !== "" ? (
            <div
              className={`rock-button bg-[#fffffff0] rounded-full w-[100px] md:w-[180px] aspect-square  grid place-items-center border-[10px] md:border-[20px]  ${
                houseSelection === "rock"
                  ? "border-[#DC2E4E] shadow-[0px_6px_0px_0px_rgba(184,33,60,1)] md:shadow-[0px_10px_0px_0px_rgba(184,33,60,1)]"
                  : houseSelection === "paper"
                  ? "border-[#4865F4] shadow-[0px_6px_0px_0px_rgba(28,57,201,1)] md:shadow-[0px_10px_0px_0px_rgba(28,57,201,1)]"
                  : "border-[#EC9E0E] shadow-[0px_6px_0px_0px_rgba(156,107,16,1)] md:shadow-[0px_10px_0px_0px_rgba(156,107,16,1)]"
              }`}
            >
              <img
                src={
                  houseSelection === "rock"
                    ? rock
                    : houseSelection === "paper"
                    ? paper
                    : scissor
                }
                draggable="false"
                className="w-[40px] md:w-[80px]"
                alt="random-selection"
              />
            </div>
          ) : (
            // showing black placeholder to show a little delay in random house  selection
            <div
              className={` bg-[#00000029] rounded-full w-[70px] md:w-[150px] aspect-square  `}
            ></div>
          )
        }
      </div>
    </div>
  );
};
export default Result;
