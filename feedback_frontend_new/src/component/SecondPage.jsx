// SecondPage.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "../features/survey/surveySlice";

function SecondPage({ onNext }) {
  const dispatch = useDispatch();

  // question 0 = "Which gallery was your personal favorite?"
  const galleryNames = useSelector(
    (state) => state.survey.display_qaList[0].display_names
  );

  const handlePick = (label) => {
    // update answer for question index 0
    dispatch(setAnswer({ questionIndex: 0, answer: label }));
    // go to next screen
    onNext?.();
  };

  return (
    <div className='flex flex-col min-h-full w-full bg-[url("/background.svg")] bg-cover bg-no-repeat items-center relative overflow-hidden'>

      {/* Decorations */}
      <div className="absolute right-0 -top-[10%] w-[30%]">
        <img src="/earth.png" alt="" />
      </div>
      <div className="absolute right-[4%] top-0">
        <img src="/astronaut.svg" alt="" />
      </div>

      {/* Heading */}
      <div className="flex items-start w-full px-28 py-28 relative">
        <div className="leading-[100%] font-oxanium text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
          <div>Which gallery was</div>
          <div>your personal</div>
          <div>favourite?</div>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full px-28 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-16">
        {galleryNames.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => handlePick(name)}
            className="
              group relative h-80 w-full overflow-hidden rounded-xl
              bg-gray-300 text-left focus:outline-none
              ring-0 focus:ring-2 focus:ring-sky-400
              transition
            "
          >
            {/* placeholder image area */}
            <div className="absolute inset-0 bg-gray-300 group-hover:brightness-95" />

            {/* footer label */}
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800/95 text-white text-center py-5 text-lg">
              {name}
            </div>

            {/* hover border accent */}
            <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 group-hover:ring-gray-500/60 pointer-events-none" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default SecondPage;
