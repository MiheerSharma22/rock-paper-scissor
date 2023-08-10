import React from "react";
import { Link } from "react-router-dom";

const PrivateRoute = ({ selected, children }) => {
  if (selected === "") {
    return (
      <div className="min-w-[50%] flex justify-center mt-[7rem]">
        <Link to={"/"}>
          <button className="py-[0.3rem] px-[1.5rem] rounded-md bg-headerOutline font-medium text-lg text-white">
            Play Again
          </button>
        </Link>
      </div>
    );
  } else {
    return children;
  }
};

export default PrivateRoute;
