import React from "react";
import "./Home.css";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissor from "../images/icon-scissors.svg";
import { useNavigate } from "react-router-dom";

const Home = ({ setSelected }) => {
  const navigate = useNavigate();

  const clickHandler = (event) => {
    setSelected(event.target.name);
    navigate("/result");
  };

  return (
    <div className="relative w-[250px] h-[220px] mt-[6rem] icons-container">
      <button
        className="rock-button bg-[#fffffff0] shadow-[0px_7px_0px_0px_rgba(184,33,60,1)] rounded-full w-[120px] md:w-[150px] aspect-square absolute top-[-2rem] md:top-[-3.5rem] left-[-2rem] md:left-[-3.5rem] grid place-items-center border-[17px] border-[#DC2E4E]"
        onClick={clickHandler}
        name="rock"
      >
        <img src={rock} draggable="false" name="rock" alt="rock" />
      </button>

      <button
        className="rock-button bg-[#fffffff0] shadow-[0px_7px_0px_0px_rgba(28,57,201,1)] rounded-full w-[120px] md:w-[150px] aspect-square absolute top-[-2rem] md:top-[-3.5rem] right-[-2rem] md:right-[-3.5rem] grid place-items-center border-[17px] border-[#4865F4] "
        onClick={clickHandler}
        name="paper"
      >
        <img src={paper} draggable="false" name="paper" alt="paper" />
      </button>

      <button
        className="rock-button bg-[#fffffff0] shadow-[0px_7px_0px_0px_rgba(156,107,16,1)] rounded-full w-[120px] md:w-[150px] aspect-square absolute bottom-[-2rem] md:bottom-[-3.5rem] left-[25%] md:left-[20%] grid place-items-center border-[17px] border-[#EC9E0E]"
        onClick={clickHandler}
        name="scissor"
      >
        <img src={scissor} draggable="false" name="scissor" alt="scissor" />
      </button>
    </div>
  );
};

export default Home;
