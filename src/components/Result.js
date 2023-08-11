import React, { useState } from "react";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissor from "../images/icon-scissors.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ selected, score, setScore }) => {
  const navigate = useNavigate();
  let [houseSelection, setHouseSelection] = useState("");
  const [win, SetWin] = useState("");
  const selections = ["rock", "paper", "scissor"];

  // randomly generating a string from 'rock' , 'paper' and 'scissor'
  function randomSelection() {
    setTimeout(() => {
      let random = selections[Math.floor(Math.random() * 3)];
      console.log("random: ", random);
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
    <div className="min-w-[50%] flex flex-col md:flex-row justify-between mt-[2.5rem] md:mt-[7rem] gap-[1.2rem]">
      {/* user selected option */}
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-white tracking-wider text-xl">You Picked</p>
        <div
          className={`rock-button bg-white rounded-full w-[100px] md:w-[180px] aspect-square  grid place-items-center border-[12px] md:border-[20px]  ${
            selected === "rock"
              ? "border-red-500 shadow-[0px_7px_0px_0px_rgba(181,51,51,1)] md:shadow-[0px_10px_0px_0px_rgba(181,51,51,1)]"
              : selected === "paper"
              ? "border-blue-500 shadow-[0px_7px_0px_0px_rgba(16,81,133,1)] md:shadow-[0px_10px_0px_0px_rgba(16,81,133,1)]"
              : "border-yellow-400 shadow-[0px_7px_0px_0px_rgba(194,140,23,1)] md:shadow-[0px_10px_0px_0px_rgba(194,140,23,1)]"
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
      {houseSelection !== "" &&
        setTimeout(() => {
          <div className="flex flex-col justify-center gap-5 md:my-0 my-[1.5rem]">
            {win === "won" ? (
              <span className="text-3xl md:text-5xl font-bold text-white uppercase text-center">
                You won
              </span>
            ) : null || win === "lost" ? (
              <span className="text-3xl md:text-5xl font-bold text-white uppercase text-center">
                You lose
              </span>
            ) : null || win === "tie" ? (
              <span className="text-3xl md:text-5xl font-bold text-white uppercase text-center">
                Tie
              </span>
            ) : null}
            <button
              className="py-[0.2rem] md:py-[0.3rem] px-[0.75rem] md:px-[1.5rem] rounded-md bg-headerOutline font-medium text-lg text-white"
              onClick={() => {
                navigate("/");
              }}
            >
              Play Again
            </button>
          </div>;
        }, 1000)}

      {/* computer selected option */}
      <div
        className={`flex flex-col  items-center ${
          houseSelection === "" ? "gap-10" : "gap-5"
        }`}
      >
        <p className="text-white tracking-wider text-xl">House Picked</p>
        {
          // if houseSelection is not blank then show its selection else show a black placeholder
          houseSelection !== "" ? (
            <div
              className={`rock-button bg-white rounded-full w-[100px] md:w-[180px] aspect-square  grid place-items-center border-[12px] md:border-[20px]  ${
                houseSelection === "rock"
                  ? "border-red-500 shadow-[0px_7px_0px_0px_rgba(181,51,51,1)] md:shadow-[0px_10px_0px_0px_rgba(181,51,51,1)]"
                  : houseSelection === "paper"
                  ? "border-blue-500 shadow-[0px_7px_0px_0px_rgba(16,81,133,1)] md:shadow-[0px_10px_0px_0px_rgba(16,81,133,1)]"
                  : "border-yellow-400 shadow-[0px_7px_0px_0px_rgba(194,140,23,1)] md:shadow-[0px_10px_0px_0px_rgba(194,140,23,1)]"
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
              className={` bg-[#00000045] rounded-full w-[50px] md:w-[90px] aspect-square  `}
            ></div>
          )
        }
      </div>
    </div>
  );
};
export default Result;
