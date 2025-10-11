

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAnswer } from "../features/survey/surveySlice";

function Third({ onNext, onHome }) {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");

  const options = [
    "Friends/Family/Word of mouth",
    "Newspaper/Poster/Advertisement/Coupon",
    "Param events or stalls",
    "Social Media/Instagram",
  ];

  const pick = (label) => {
    setSelected(label);
    dispatch(setAnswer({ questionIndex: 1, answer: label }));
    onNext?.();
  };

  return (
    <div className="flex flex-col min-h-full w-full bg-[url('/background.svg')] bg-cover bg-no-repeat items-center relative overflow-hidden text-black">
      <div className="flex flex-col items-start w-full px-16 lg:px-28 py-20 lg:py-28 gap-20 relative">
        
        {/* Home button */}
        <div className="absolute top-0 right-0 px-6 py-6" onClick={onHome}>
          <img
            src="/home_button.svg"
            alt="home"
            className="w-[85px] cursor-pointer"
          />
        </div>

        {/* Question */}
        <div className="leading-[100%] font-oxanium text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] text-left flex flex-col gap-2">
          <div>How did you find out</div>
          <div>about PARSEC</div>
          <div>Jayanagar?</div>
        </div>

        {/* Options */}
        <div className="flex flex-col w-full gap-8 font-inter-custom">
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => pick(opt)}
              className={`py-8 px-10 text-left text-2xl lg:text-3xl font-medium rounded-full border border-black/20 transition-all duration-200
                ${
                  selected === opt
                    ? "bg-gray-200 border-gray-500 scale-[1.02]"
                    : "bg-white hover:bg-gray-100"
                }`}
            >
              {opt}
            </button>
          ))}
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
