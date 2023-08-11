import React from "react";
import rules from "../images/image-rules.svg";
import close from "../images/x-symbol.svg";
import { createPortal } from "react-dom";

function Modal({ showRules, onClose }) {
  return (
    showRules &&
    createPortal(
      <div className="top-0 left-0 right-0 bottom-0 bg-[#00000088] absolute flex felx-col justify-center items-center">
        <div className="bg-[#fff] w-[90%] h-[60%] md:px-[1rem] md:w-[30%] md:h-[55%] flex flex-col justify-around items-center rounded-lg">
          {/* rules heading and close button */}
          <div className="flex w-full justify-between px-4 items-center">
            <p className="text-headerOutline font-extrabold text-2xl">Rules</p>
            <button
              onClick={onClose}
              className="rounded-full p-[0.75rem] hover:bg-[#00000032] transition-all duration-200"
            >
              <img src={close} alt="close-button" className="w-[1rem]" />
            </button>
          </div>

          {/* rules image */}
          <img src={rules} alt="rules" />
        </div>
      </div>,
      document.body
    )
  );
}

export default Modal;
