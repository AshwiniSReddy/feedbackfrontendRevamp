// import React from "react";
// import { useState } from "react";
// import { useId } from "react";
// import Checklist from "./Checklist";

// function Sixthpage({onNext}) {
//   const options = [
//     "Visiting the Makerspace and building something",
//     "Making a donation",
//     "Volunteering at Parsec",
//     "Following Param on Social Media",
//     "Signing up for a Param Workshop",
//   ];
//   const [selected, setSelected] = useState([]);
//   const hasSelection = selected.length > 0;

//   return (
//     <div className='flex flex-col min-h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden'>
//       <div className="flex flex-col items-start w-full px-28 py-28 gap-20 relative h-[20%]">
//         <div className="leading-[100%] h-[40%] font-oxanium text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
//           <div>What’s next? 👀</div>
//         </div>
//       </div>
//       <div className="flex flex-col gap-16 items-start w-full px-28 h-[40%]">
//         <Checklist items={options} value={selected} onChange={setSelected} />
        
//         {hasSelection && (
//           <button
//             onClick={handleNext}
//             type="button"
//             className="py-8 px-10 w-[20rem] text-2xl font-medium text-gray-900 bg-transparent rounded-full border border-black/20 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-100 transition"
//           >
//             Next
//           </button>
//         )}
//       </div>

//       <div className="absolute left-0 right-1/3 bottom-0 flex">
//         <img src="/astrosixt.png" alt="sixth" srcset="" />
//       </div>
//       <div className="absolute top-1/3 -right-32 w-1/3 h-1/3">
//         <img src="/mars.svg" alt="mars" srcset=""  />
//       </div>
//       <div className="absolute top-1/2 right-6 h-[50%]">
//             <img src="/line.svg" alt="line" srcset="" />
//       </div>
//     </div>
//   );
// }

// export default Sixthpage;


// Sixthpage.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAnswer } from "../features/survey/surveySlice"; // <-- adjust path
import Checklist from "./Checklist";

function Sixthpage({ onNext }) {
  const options = [
    "Visiting the Makerspace and building something",
    "Making a donation",
    "Volunteering at Parsec",
    "Following Param on Social Media",
    "Signing up for a Param Workshop",
  ];

  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);
  const hasSelection = selected.length > 0;

  // keep Redux qaList[4].answer updated (store as array; or join to a string)
  const handleChange = (next) => {
    setSelected(next);
    // store array:
    dispatch(setAnswer({ questionIndex: 4, answer: next }));
    // OR store as a comma-separated string:
    // dispatch(setAnswer({ questionIndex: 4, answer: next.join(", ") }));
  };

  const handleNext = () => {
    // ensure latest value is saved, then advance
    dispatch(setAnswer({ questionIndex: 4, answer: selected }));
    onNext?.();
  };

  return (
    <div className='flex flex-col min-h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden'>
      <div className="flex flex-col items-start w-full px-28 py-28 gap-20 relative h-[20%]">
        <div className="leading-[100%] h-[40%] font-oxanium text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
          <div>What’s next? 👀</div>
        </div>
      </div>

      <div className="flex flex-col gap-16 items-start w-full px-28 h-[40%]">
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

      <div className="absolute left-0 right-1/3 bottom-0 flex">
        <img src="/astrosixt.png" alt="sixth" />
      </div>
      <div className="absolute top-1/3 -right-32 w-1/3 h-1/3">
        <img src="/mars.svg" alt="mars" />
      </div>
      <div className="absolute top-1/2 right-6 h-[50%]">
        <img src="/line.svg" alt="line" />
      </div>
    </div>
  );
}

export default Sixthpage;

