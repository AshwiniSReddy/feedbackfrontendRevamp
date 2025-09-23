// import React, { useRef, useState } from "react";
// import VerticalTimeSlider from "./VerticalTimeSlider";

// function FourthPage() {
//   const [hours, setHours] = useState(0);    // 0 | 2.5 | 5
//   const [dragging, setDragging] = useState(false);
//   const [draggingUp, setDraggingUp] = useState(false);

//   // track last reported position to detect direction
//   const lastPosRef = useRef(0);

//   const handleDragStart = () => {
//     setDragging(true);
//     setDraggingUp(false);
//     lastPosRef.current = 0; // will be set on first onDrag call
//   };

//   const handleDrag = (posPx) => {
//     // posPx is "px from bottom" → increasing means moving UP
//     if (lastPosRef.current !== 0) {
//       setDraggingUp(posPx > lastPosRef.current);
//     }
//     lastPosRef.current = posPx;
//   };

//   const handleDragEnd = () => {
//     setDragging(false);
//     // keep draggingUp unchanged; we rely on hours>0 to keep GIF visible
//   };

//   // Show GIF while dragging upward OR after release if value > 0
//   const showGif = (dragging && draggingUp) || hours > 0;

//   return (
//     <div className='flex flex-col min-h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden'>
//       <div className="flex flex-col items-start w-full px-28 py-28 gap-20 relative">
//         <div className="leading-[100%] h-[40%] font-oxanium text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
//           <div>Roughly how much</div>
//           <div>time did you spend at</div>
//           <div>the gallery?</div>
//         </div>

//         <div className="h-[60%] flex items-start gap-10 relative">
//           <VerticalTimeSlider
//             value={hours}
//             onChange={setHours}
//             height={Math.max(560, Math.min(window.innerHeight * 0.85, 1000))}
//             images={{ clock: "/clock.png" }}
//             thumbMin={60}
//             thumbMax={200}
//             scaleEasePower={2.2}
//             onDragStart={handleDragStart}
//             onDrag={handleDrag}
//             onDragEnd={handleDragEnd}
//           />

//           <div className="mt-8 text-xl">
//             Selected: <b>{hours === 5 ? "5+ Hours" : `${hours} Hours`}</b>
//           </div>

//         </div>

//           {showGif && (
//             <img
//               src="/astronautfloating.gif"
//               alt="Astronaut floating"
//               className="absolute right-0 top-[20%] w-[100%] h-[80%] z-10 pointer-events-none select-none"
//             />
//           )}
//       </div>
//     </div>
//   );
// }

// export default FourthPage;

// FourthPage.jsx
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setAnswer } from "../features/survey/surveySlice";
import VerticalTimeSlider from "./VerticalTimeSlider";

function FourthPage({ onNext }) {
  const dispatch = useDispatch();
  const [hasMoved, setHasMoved] = useState(false);
  const [hours, setHours] = useState(0); // 0 | 2.5 | 5
  const [dragging, setDragging] = useState(false);
  const [draggingUp, setDraggingUp] = useState(false);
  const lastPosRef = useRef(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const handleDragStart = () => {
    setDragging(true);
    setDraggingUp(false);
    lastPosRef.current = 0;
  };

  const handleDrag = (posPx) => {
    if (lastPosRef.current !== 0) {
      setDraggingUp(posPx > lastPosRef.current);
    }
    lastPosRef.current = posPx;
  };

  const handleDragEnd = () => {
    setDragging(false);
    // no-op; we save to Redux in onChange when the slider snaps
    if (!hasMoved) {
      setHasMoved(true);

      // Show Next button after a delay (e.g., 2 seconds)
      setTimeout(() => {
        setShowNextButton(true);
      }, 2200); // 2000ms = 2 seconds
    }
  };

  // Show GIF while dragging upward OR after release if value > 0
  const showGif = (dragging && draggingUp) || hours > 0;

  return (
    <div className='flex flex-col min-h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden'>
      <div className="flex flex-col items-start w-full px-28 py-28 gap-20 relative">
        <div className="leading-[100%] h-[40%] font-oxanium-custom text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
          <div>Roughly how much</div>
          <div>time did you spend at</div>
          <div>the gallery?</div>
        </div>

        <div className="h-[60%] flex items-start gap-10 relative font-oxanium-custom">
          <VerticalTimeSlider
            value={hours}
            onChange={(v) => {
              // v is 0 | 2.5 | 5 (snapped). Update local UI state…
              setHours(v);
              // …and store it in Redux QA list at question #2
              // if you want "5+" instead of 5, do: const ans = v === 5 ? "5+" : String(v);
              dispatch(setAnswer({ questionIndex: 2, answer: String(v) }));
              // setTimeout(() => {
              //   onNext?.();
              // }, 2000);
            }}
            height={Math.max(560, Math.min(window.innerHeight * 0.8, 1200))}
            images={{ clock: "/clock.png" }}
            thumbMin={60}
            thumbMax={200}
            scaleEasePower={2.2}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={() => {
              handleDragEnd();
              // if (!hasMoved) {
              //   setHasMoved(true);
              //   setTimeout(() => {
              //     onNext?.();
              //     setHasMoved(false); // reset for next interaction
              //   }, 2000); // 2-second delay
              // }
            }}
          />

          <div className="mt-8 text-xl">
            Selected: <b>{hours === 5 ? "5+ Hours" : `${hours} Hours`}</b>
          </div>
        </div>

        {showGif && (
          <img
            src="/floating_char.gif"
            alt="Astronaut floating"
            className="absolute right-0 top-[15%] w-[100%] h-[80%] max-w-none z-10 pointer-events-none select-none"
          />
        )}

        {showNextButton && (
          <button
            onClick={() => {
              onNext?.();
              setHasMoved(false);
              setShowNextButton(false);
            }}
            className="absolute bottom-10 right-10 py-8 px-10 w-[20rem] text-4xl font-medium rounded-full border
               text-gray-900 bg-transparent border-black/20
               hover:bg-gray-100 hover:text-black
               focus:outline-none focus:ring-4 focus:ring-gray-100 transition font-inter-custom"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default FourthPage;
