// Third.jsx
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setAnswer } from "../features/survey/surveySlice";


function Third({ onNext, onHome }) {
  const dispatch = useDispatch();

  const options = [
    "Google Search",
    "Word of Mouth",
    "Social Media",
    "School",
    "Other",
  ];

  const pick = (label) => {
    dispatch(setAnswer({ questionIndex: 1, answer: label }));
    onNext?.();
  };

 
  return (
    <div className="flex flex-col min-h-full w-full bg-[url('/background.svg')] bg-cover bg-no-repeat items-center relative overflow-hidden text-black">
      <div className="flex flex-col items-start w-full px-28 py-28 gap-20 relative">
        {/* Home button */}
        <div className="absolute top-0 right-0 px-22 py-15" onClick={onHome}>
          <img
            src="/home_button.svg"
            alt="home"
            className="w-[85px] cursor-pointer"
          />
        </div>

        {/* Question */}
        <div className="leading-[100%] h-[40%] font-oxanium text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
          <div>How did you find out </div>
          <div>about PARSEC </div>
          <div>Jayanagar?</div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col h-[60%] w-full gap-16 font-inter-custom">
          <div className="flex gap-3.5 justify-between w-full">
            <button
              onClick={() => pick(options[0])}
              className="py-10 px-10 w-[50%] text-4xl font-medium text-gray-900 bg-white rounded-full border border-black/20 hover:bg-gray-100"
            >
              {options[0]}
            </button>

            <button
              onClick={() => pick(options[1])}
              className="py-10 px-10 w-[50%] text-4xl font-medium text-gray-900 bg-white rounded-full border border-black/20 hover:bg-gray-100"
            >
              {options[1]}
            </button>
          </div>

          <div className="flex gap-3.5 justify-between w-full">
            <button
              onClick={() => pick(options[2])}
              className="py-10 px-10 w-[50%] text-4xl font-medium text-gray-900 bg-white rounded-full border border-black/20 hover:bg-gray-100"
            >
              {options[2]}
            </button>

            <button
              onClick={() => pick(options[3])}
              className="py-10 px-10 w-[50%] text-4xl font-medium text-gray-900 bg-white rounded-full border border-black/20 hover:bg-gray-100"
            >
              {options[3]}
            </button>
          </div>

          <div className="flex gap-3.5 justify-between w-full">
            <button
              onClick={() => pick(options[4])}
              className="py-10 px-10 w-[50%] text-4xl font-medium text-gray-900 bg-white rounded-full border border-black/20 hover:bg-gray-100"
            >
              {options[4]}
            </button>
          </div>
        </div>
      </div>

      {/* Astronaut image */}
      <div className="absolute left-0 -bottom-[2%] right-1/4">
        <img src="/astrothirdpage.png" alt="astronaut" className="w-[100rem]" />
      </div>

  
    </div>
  );
}

export default Third;
