import "./App.css";
import ScoreCard from "./components/ScoreCard";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Result from "./components/Result";
import PrivateRoute from "./components/PrivateRoute";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="wrapper flex flex-col justify-center items-center relative">
      <ScoreCard score={score} />

      <Routes>
        <Route path="/" element={<Home setSelected={setSelected} />} />
        <Route
          path="/result"
          element={
            <PrivateRoute selected={selected}>
              <Result selected={selected} score={score} setScore={setScore} />
            </PrivateRoute>
          }
        />
      </Routes>

      <div className="w-full mt-[7rem] text-center md:text-right md:pr-[3rem]">
        <button
          className="px-[2rem] py-[0.4rem] rounded-md text-white uppercase font-[500]  tracking-wide border border-white"
          onClick={() => {
            setShowRules(true);
          }}
        >
          Rules
        </button>
        <Modal showRules={showRules} onClose={() => setShowRules(false)} />
      </div>
    </div>
  );
}

export default App;
