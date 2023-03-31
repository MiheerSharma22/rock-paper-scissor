import React, { useState } from "react";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissor from "../images/icon-scissors.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ selected,score,setScore }) => {

  const navigate = useNavigate();
  let [houseSelection, setHouseSelection] = useState('');
  const [win , SetWin] = useState("");
  const selections = ['rock', 'paper', 'scissor'];

    // randomly generating a string from 'rock' , 'paper' and 'scissor'
  function randomSelection() {
    let random = selections[Math.floor(Math.random()* 3)]  
    console.log("Setting houseSelection to : ", random);
    setHouseSelection(random);
  }

  // finding the winner
  const findWinner = () => {
    if ((selected === "paper" && houseSelection === "rock" ) || 
        (selected === "rock" && houseSelection === "scissor") ||
        (selected === "scissor" && houseSelection === "paper")) {
            setScore(score + 1)
            SetWin("won");
    }
    else if(selected === houseSelection) {
        SetWin("tie");
    }
    else {
        SetWin("lost");
    }
    console.log("Selected: " , selected);
    console.log("House Selection: ", houseSelection);
  }

  useEffect(() => {
    randomSelection();
  },[]);

  useEffect(() => {
    findWinner();
  },[houseSelection]);

  return (
    <div className="min-w-[50%] flex justify-between mt-[7rem]">
      {/* user selected option */}
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-white tracking-wider text-xl">You Picked</p>
        <div
          className={`rock-button bg-white rounded-full w-[180px] aspect-square  grid place-items-center border-[20px]  ${
            selected === "rock" ? "border-red-500"
            : selected === "paper" ? "border-blue-500" : "border-yellow-400"}`} >
          <img
            src={
              selected === "rock" ? rock
                : selected === "paper" ? paper : scissor }
            draggable="false"
            className="w-[80px]" />
        </div>
      </div>


        {/* Displaying the winner */}
      <div className="flex flex-col justify-center gap-5">
        {
            win === "won" ? <span className="text-5xl font-bold text-white uppercase">You won</span> : null ||
            win === "lost" ? <span className="text-5xl font-bold text-white uppercase ">You lose</span> : null ||
            win === "tie" ? <span className="text-5xl font-bold text-white uppercase text-center">Tie</span> : null
        }
        <button className="py-[0.3rem] px-[1.5rem] rounded-md bg-headerOutline font-medium text-lg text-white" onClick={() => {navigate("/")}}>
            Play Again
        </button>
      </div>


      {/* computer selected option */}
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-white tracking-wider text-xl">House Picked</p>
        <div
          className={`rock-button bg-white rounded-full w-[180px] aspect-square  grid place-items-center border-[20px]  ${
            houseSelection === "rock"
              ? "border-red-500"
              : houseSelection === "paper"
              ? "border-blue-500"
              : "border-yellow-400"
          }`}>
          <img
            src={
                houseSelection === "rock" ? rock
                : houseSelection === "paper"
                ? paper
                : scissor}
            draggable="false"
            className="w-[80px]"/>
        </div>
      </div>
    </div>
  );
};
export default Result;