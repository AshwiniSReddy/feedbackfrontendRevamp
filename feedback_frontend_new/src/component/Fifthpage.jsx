// import React from "react";
// import { useState } from "react";
// import { useId } from "react";
// import Checklist from "./Checklist";

// function Fifthpage({onNext}) {
//   const options = [
//     "I would recommend Parsec to friends",
//     "I would recommend Parsec to family",
//     "I would recommend Parsec to a school",
//     "I saw science from a new perspective",
//     "I had a fun and engaging time",
//   ];
//   const [selected, setSelected] = useState([]);
//    const hasSelection = selected.length > 0;

//   return (
//     <div className='flex flex-col min-h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden'>
//       <div className="flex flex-col items-start w-full px-28 py-28 gap-20 relative h-[20%]">
//         <div className="leading-[100%] h-[40%] font-oxanium text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
//           <div>Choose everything</div>
//           <div>that applies ?</div>
//         </div>
//       </div>
//       <div className="flex flex-col items-start w-full gap-14 px-28 h-[40%]">
//         <Checklist items={options} value={selected} onChange={setSelected} />
//        {hasSelection && (
//           <button
//             onClick={onNext}
//             type="button"
//             className="py-8 px-10 w-[20rem] text-2xl font-medium text-gray-900 bg-transparent rounded-full border border-black/20 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-100 transition"
//           >
//             Next
//           </button>
//         )}
//       </div>
//       <div className="absolute left-0 right-0 bottom-0">
//         <img src="/astrofifth.png" alt="fifth" srcset="" />
//       </div>
//     </div>
//   );
// }

// export default Fifthpage;


// Fifthpage.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAnswer } from "../features/survey/surveySlice"; // adjust path
import Checklist from "./Checklist";

function Fifthpage({ onNext }) {
  const options = [
    "I would recommend Parsec to friends",
    "I would recommend Parsec to family",
    "I would recommend Parsec to a school",
    "I saw science from a new perspective",
    "I had a fun and engaging time",
  ];

  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);
  const hasSelection = selected.length > 0;

  // keep Redux qaList[3].answer updated with the current array
  const handleChange = (next) => {
    setSelected(next);
    // store the array; if you prefer a string, use next.join(", ")
    dispatch(setAnswer({ questionIndex: 3, answer: next }));
  };

  const handleNext = () => {
    // (optional) ensure latest selection is stored, then advance
    dispatch(setAnswer({ questionIndex: 3, answer: selected }));
    onNext?.();
  };

  return (
    <div className='flex flex-col min-h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden'>
      <div className="flex flex-col items-start w-full px-28 py-28 gap-20 relative h-[20%]">
        <div className="leading-[100%] h-[40%] font-oxanium text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
          <div>Choose everything</div>
          <div>that applies ?</div>
        </div>
      </div>

      <div className="flex flex-col items-start w-full gap-14 px-28 h-[40%]">
        <Checklist items={options} value={selected} onChange={handleChange} />

        {hasSelection && (
          <button
            onClick={handleNext}
            type="button"
            className="py-8 px-10 w-[20rem] text-2xl font-medium text-gray-900 bg-transparent rounded-full border border-black/20 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-100 transition"
          >
            Next
          </button>
        )}
      </div>

      <div className="absolute left-0 right-0 bottom-0">
        <img src="/astrofifth.png" alt="fifth" />
      </div>
    </div>
  );
}

export default Fifthpage;

