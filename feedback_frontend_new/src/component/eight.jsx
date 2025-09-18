// Eight.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "../features/survey/surveySlice"; // ← adjust path if needed

function Eight({ onNext }) {
  const dispatch = useDispatch();
  // read any existing saved answer (may be "" or a string)
  const saved = useSelector((s) => s.survey.qaList[6]?.answer);

  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (typeof saved === "string") setDesc(saved);
  }, [saved]);

  const handleNext = () => {
    // store the text in qaList[6].answer
    dispatch(setAnswer({ questionIndex: 6, answer: desc.trim() }));
    onNext?.();
  };

  // (optional) save on each keystroke instead of only on Next:
  // const handleChange = (e) => {
  //   const v = e.target.value;
  //   setDesc(v);
  //   dispatch(setAnswer({ questionIndex: 6, answer: v }));
  // };

  return (
    <div className='flex flex-col min-h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden'>
      <div className="flex flex-col items-start w-full px-28 py-28 gap-44 relative h-[20%]">
        <div className="leading-[100%] h-[40%] font-oxanium text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
          <div>Any other feedback?</div>
        </div>

        <div className="flex flex-col justify-start gap-28 w-full">
          <div className="w-full">
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}  // or use handleChange for live saving
              placeholder="Enter your description"
              className="w-full border-0 border-b-2 border-black/40 focus:border-blue-500 focus:ring-0 outline-none placeholder-gray-400 text-xl md:text-2xl bg-transparent"
            />
          </div>

          <button
            onClick={handleNext}
            type="button"
            className="py-8 px-10 w-[20rem] text-2xl font-medium text-gray-900 bg-transparent rounded-full border border-black/20 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-100 transition"
          >
            Next
          </button>
        </div>
      </div>

      <div className="absolute left-24 bottom-0 right-20">
        <img src="/astroeight.png" alt="Astroeight" />
      </div>
    </div>
  );
}

export default Eight;
