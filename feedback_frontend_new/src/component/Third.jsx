// Third.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { setAnswer } from "../features/survey/surveySlice"; // <-- adjust the path to your slice

function Third({ onNext }) {
  const dispatch = useDispatch();

  // Options for "How did you find out about Parsec Jayanagar?"
  const options = ["Google Search", "Word of Mouth", "Social Media", "School", "Other"];

  const pick = (label) => {
    // update answer for question index 1
    dispatch(setAnswer({ questionIndex: 1, answer: label }));
    // go to next page
    onNext?.();
  };

  return (
    <div className='flex flex-col min-h-full w-full bg-[url("/background.svg")] bg-cover bg-no-repeat items-center relative overflow-hidden'>
      <div className="flex flex-col items-start w-full px-28 py-28 gap-20 relative">
        <div className="leading-[100%] h-[40%] font-oxanium text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
          <div>How did you find out </div>
          <div>about PARSEC </div>
          <div>Jayanagar?</div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col h-[60%] w-full gap-6">
          <div className="flex gap-3.5 justify-between">
            <button
              onClick={() => pick(options[0])}
              className="py-4 px-10 w-[20rem] text-2xl font-medium text-gray-900 bg-white rounded-full border border-black/20 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-100"
            >
              {options[0]}
            </button>

            <button
              onClick={() => pick(options[1])}
              className="py-4 px-10 w-[20rem] text-2xl font-medium text-gray-900 bg-white rounded-full border border-black/20 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-100"
            >
              {options[1]}
            </button>
          </div>

          <div className="flex gap-3.5 justify-between">
            <button
              onClick={() => pick(options[2])}
              className="py-4 px-10 w-[20rem] text-2xl font-medium text-gray-900 bg-white rounded-full border border-black/20 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-100"
            >
              {options[2]}
            </button>

            <button
              onClick={() => pick(options[3])}
              className="py-4 px-10 w-[20rem] text-2xl font-medium text-gray-900 bg-white rounded-full border border-black/20 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-100"
            >
              {options[3]}
            </button>
          </div>

          <div className="flex gap-3.5 justify-between">
            <button
              onClick={() => pick(options[4])}
              className="py-4 px-10 w-[20rem] text-2xl font-medium text-gray-900 bg-white rounded-full border border-black/20 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-100"
            >
              {options[4]}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 right-1/4">
        <img src="/astrothirdpage.png" alt="astronaut" />
      </div>
    </div>
  );
}

export default Third;
