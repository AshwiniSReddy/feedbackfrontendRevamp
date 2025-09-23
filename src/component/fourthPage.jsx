// // import React, { useRef, useState } from "react";
// // import VerticalTimeSlider from "./VerticalTimeSlider";

// // function FourthPage() {
// //   const [hours, setHours] = useState(0);    // 0 | 2.5 | 5
// //   const [dragging, setDragging] = useState(false);
// //   const [draggingUp, setDraggingUp] = useState(false);

// //   // track last reported position to detect direction
// //   const lastPosRef = useRef(0);

// //   const handleDragStart = () => {
// //     setDragging(true);
// //     setDraggingUp(false);
// //     lastPosRef.current = 0; // will be set on first onDrag call
// //   };

// //   const handleDrag = (posPx) => {
// //     // posPx is "px from bottom" → increasing means moving UP
// //     if (lastPosRef.current !== 0) {
// //       setDraggingUp(posPx > lastPosRef.current);
// //     }
// //     lastPosRef.current = posPx;
// //   };

// //   const handleDragEnd = () => {
// //     setDragging(false);
// //     // keep draggingUp unchanged; we rely on hours>0 to keep GIF visible
// //   };

// //   // Show GIF while dragging upward OR after release if value > 0
// //   const showGif = (dragging && draggingUp) || hours > 0;

// //   return (
// //     <div className='flex flex-col min-h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden'>
// //       <div className="flex flex-col items-start w-full px-28 py-28 gap-20 relative">
// //         <div className="leading-[100%] h-[40%] font-oxanium text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
// //           <div>Roughly how much</div>
// //           <div>time did you spend at</div>
// //           <div>the gallery?</div>
// //         </div>

// //         <div className="h-[60%] flex items-start gap-10 relative">
// //           <VerticalTimeSlider
// //             value={hours}
// //             onChange={setHours}
// //             height={Math.max(560, Math.min(window.innerHeight * 0.85, 1000))}
// //             images={{ clock: "/clock.png" }}
// //             thumbMin={60}
// //             thumbMax={200}
// //             scaleEasePower={2.2}
// //             onDragStart={handleDragStart}
// //             onDrag={handleDrag}
// //             onDragEnd={handleDragEnd}
// //           />

// //           <div className="mt-8 text-xl">
// //             Selected: <b>{hours === 5 ? "5+ Hours" : `${hours} Hours`}</b>
// //           </div>

// //         </div>

// //           {showGif && (
// //             <img
// //               src="/astronautfloating.gif"
// //               alt="Astronaut floating"
// //               className="absolute right-0 top-[20%] w-[100%] h-[80%] z-10 pointer-events-none select-none"
// //             />
// //           )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default FourthPage;

// // FourthPage.jsx
// import React, { useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import { setAnswer } from "../features/survey/surveySlice";
// import VerticalTimeSlider from "./VerticalTimeSlider";

// function FourthPage({ onNext }) {
//   const dispatch = useDispatch();
//   const [hasMoved, setHasMoved] = useState(false);
//   const [hours, setHours] = useState(0); // 0 | 2.5 | 5
//   const [dragging, setDragging] = useState(false);
//   const [draggingUp, setDraggingUp] = useState(false);
//   const lastPosRef = useRef(0);
//   const [showNextButton, setShowNextButton] = useState(false);
//   const handleDragStart = () => {
//     setDragging(true);
//     setDraggingUp(false);
//     lastPosRef.current = 0;
//   };

//   const handleDrag = (posPx) => {
//     if (lastPosRef.current !== 0) {
//       setDraggingUp(posPx > lastPosRef.current);
//     }
//     lastPosRef.current = posPx;
//   };

//   const handleDragEnd = () => {
//     setDragging(false);
//     // no-op; we save to Redux in onChange when the slider snaps
//     if (!hasMoved) {
//       setHasMoved(true);

//       // Show Next button after a delay (e.g., 2 seconds)
//       setTimeout(() => {
//         setShowNextButton(true);
//       }, 2200); // 2000ms = 2 seconds
//     }
//   };

//   // Show GIF while dragging upward OR after release if value > 0
//   const showGif = (dragging && draggingUp) || hours > 0;

//   return (
//     <div className='flex flex-col min-h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden'>
//       <div className="flex flex-col items-start w-full px-28 py-28 gap-20 relative">
//         <div className="leading-[100%] h-[40%] font-oxanium-custom text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
//           <div>Roughly how much</div>
//           <div>time did you spend at</div>
//           <div>the gallery?</div>
//         </div>

//         <div className="h-[60%] flex items-start gap-10 relative font-oxanium-custom">
//           <VerticalTimeSlider
//             value={hours}
//             onChange={(v) => {
//               // v is 0 | 2.5 | 5 (snapped). Update local UI state…
//               setHours(v);
//               // …and store it in Redux QA list at question #2
//               // if you want "5+" instead of 5, do: const ans = v === 5 ? "5+" : String(v);
//               dispatch(setAnswer({ questionIndex: 2, answer: String(v) }));
//               // setTimeout(() => {
//               //   onNext?.();
//               // }, 2000);
//             }}
//             height={Math.max(560, Math.min(window.innerHeight * 0.8, 1200))}
//             images={{ clock: "/clock.png" }}
//             thumbMin={60}
//             thumbMax={200}
//             scaleEasePower={2.2}
//             onDragStart={handleDragStart}
//             onDrag={handleDrag}
//             onDragEnd={() => {
//               handleDragEnd();
//               // if (!hasMoved) {
//               //   setHasMoved(true);
//               //   setTimeout(() => {
//               //     onNext?.();
//               //     setHasMoved(false); // reset for next interaction
//               //   }, 2000); // 2-second delay
//               // }
//             }}
//           />

//           {/* <div className="mt-8 text-xl">
//             Selected: <b>{hours === 5 ? "5+ Hours" : `${hours} Hours`}</b>
//           </div> */}
//         </div>

//         {showGif && (
//           <img
//             src="/floating_char.gif"
//             alt="Astronaut floating"
//             className="absolute right-0 top-[15%] w-[100%] h-[80%] max-w-none z-10 pointer-events-none select-none"
//           />
//         )}

//         {showNextButton && (
//           <button
//             onClick={() => {
//               onNext?.();
//               setHasMoved(false);
//               setShowNextButton(false);
//             }}
//             className="absolute bottom-10 right-10 py-8 px-10 w-[20rem] text-4xl font-medium rounded-full border
//                text-gray-900 bg-transparent border-black/20
//                hover:bg-gray-100 hover:text-black
//                focus:outline-none focus:ring-4 focus:ring-gray-100 transition font-inter-custom"
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FourthPage;


// // FourthPage.jsx
// import React, { useRef, useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setAnswer } from "../features/survey/surveySlice";
// import VerticalTimeSlider from "./VerticalTimeSlider";

// function FourthPage({ onNext }) {
//   const dispatch = useDispatch();

//   // slider/answer state
//   const [hours, setHours] = useState(0); // 0 | 2.5 | 5
//   const [hasMoved, setHasMoved] = useState(false);
//   const [showNextButton, setShowNextButton] = useState(false);

//   // The height we pass to the slider — keep a variable so positioning uses same number
//   const sliderHeight = Math.max(560, Math.min(window.innerHeight * 0.8, 1200));

//   // sliderPos is "px from bottom" reported by VerticalTimeSlider onDrag
//   const [sliderPos, setSliderPos] = useState(
//     // initialize based on initial hours
//     hours === 5 ? sliderHeight : hours === 2.5 ? sliderHeight / 2 : 0
//   );

//   // ensure sliderPos stays consistent after hours changes (when slider snaps)
//   useEffect(() => {
//     const snapped = hours === 5 ? sliderHeight : hours === 2.5 ? sliderHeight / 2 : 0;
//     setSliderPos(snapped);
//   }, [hours, sliderHeight]);

//   const handleDragStart = () => {
//     // optional: any UI setup when drag starts
//   };

//   const handleDrag = (posPx) => {
//     // posPx is px from bottom (0..sliderHeight)
//     setSliderPos(posPx);
//   };

//   const handleDragEnd = () => {
//     // show Next after one drag interaction (example behavior)
//     if (!hasMoved) {
//       setHasMoved(true);
//       setTimeout(() => setShowNextButton(true), 2200);
//     }
//   };

//   // called when the slider snaps to a value (0 | 2.5 | 5)
//   const onSliderChange = (v) => {
//     setHours(v);
//     dispatch(setAnswer({ questionIndex: 2, answer: String(v) }));
//     // set sliderPos to snapped position immediately
//     const snapped = v === 5 ? sliderHeight : v === 2.5 ? sliderHeight / 2 : 0;
//     setSliderPos(snapped);
//   };

//   // compute fraction 0..1 from posPx
//   const fraction = sliderHeight ? sliderPos / sliderHeight : 0;
//   // clamp to 0..1
//   const fracClamped = Math.max(0, Math.min(1, fraction));

//   // Map fraction to a percent of vertical travel for the astronaut.
//   // When fraction=0 -> astronaut at bottom; fraction=1 -> astronaut near top.
//   // adjust travelRangePercent to suit how much space you want the astronaut to move.
//   const travelRangePercent = 55; // astronaut will move across 0..55% of container height
//   const bottomPercent = fracClamped * travelRangePercent;

//   return (
//     <div className='flex flex-col min-h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden'>
//       <div className="flex flex-col items-start w-full px-28 py-28 gap-20 relative">
//         <div className="leading-[100%] h-[40%] font-oxanium-custom text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
//           <div>Roughly how much</div>
//           <div>time did you spend at</div>
//           <div>the gallery?</div>
//         </div>

//         <div className="h-[60%] flex items-start gap-10 relative font-oxanium-custom">
//           <VerticalTimeSlider
//             value={hours}
//             onChange={onSliderChange}
//             height={sliderHeight}
//             images={{ clock: "/clock.png" }}
//             thumbMin={60}
//             thumbMax={200}
//             scaleEasePower={2.2}
//             onDragStart={handleDragStart}
//             onDrag={handleDrag}      // continuous updates => sliderPos will change
//             onDragEnd={handleDragEnd}
//           />
// {/* 
//           <div className="mt-8 text-xl">
//             Selected: <b>{hours === 5 ? "5+ Hours" : `${hours} Hours`}</b>
//           </div> */}
//         </div>

//         {/* Astronaut image — position it absolutely and move bottom by percent */}
//         <div
//           className="absolute right-20 z-20 pointer-events-none"
//           // adjust width/height as needed
//           style={{
//             // bottom percent drives vertical movement; add an offset so it never clips
//             bottom: `calc(${bottomPercent}% + 10px)`,
//             width: "80%",     // tune size
//             maxWidth: "500px",
//             transform: `translateY(0)`,
//             transition: "bottom 120ms linear", // smooth as slider moves; while dragging we get many updates
//           }}
//         >
//           <img
//             src="/astro_ninth.svg" // or your astronaut image
//             alt="Astronaut"
//             style={{ width: "100%", height: "auto", display: "block" }}
//             draggable={false}
//           />
//         </div>

//         {showNextButton && (
//           <button
//             onClick={() => {
//               onNext?.();
//               setHasMoved(false);
//               setShowNextButton(false);
//             }}
//             className="absolute -bottom-24 right-10 py-8 px-10 w-[20rem] text-4xl font-medium rounded-full border
//                text-gray-900 bg-transparent border-black/20
//                hover:bg-gray-100 hover:text-black
//                focus:outline-none focus:ring-4 focus:ring-gray-100 transition font-inter-custom"
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FourthPage;


// // FourthPage.jsx
// import React, { useRef, useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setAnswer } from "../features/survey/surveySlice";
// import VerticalTimeSlider from "./VerticalTimeSlider";

// function FourthPage({ onNext }) {
//   const dispatch = useDispatch();

//   const [hours, setHours] = useState(0);
//   const [hasMoved, setHasMoved] = useState(false);
//   const [showNextButton, setShowNextButton] = useState(false);

//   const sliderHeight = Math.max(560, Math.min(window.innerHeight * 0.8, 1200));
//   const [sliderPos, setSliderPos] = useState(
//     hours === 5 ? sliderHeight : hours === 2.5 ? sliderHeight / 2 : 0
//   );

//   useEffect(() => {
//     const snapped = hours === 5 ? sliderHeight : hours === 2.5 ? sliderHeight / 2 : 0;
//     setSliderPos(snapped);
//   }, [hours, sliderHeight]);

//   // refs for rAF + DOM writes
//   const astroRef = useRef(null);
//   const rafRef = useRef(null);
//   const sliderPosRef = useRef(sliderPos);

//   useEffect(() => {
//     sliderPosRef.current = sliderPos;
//     cancelAnimationFrame(rafRef.current);
//     rafRef.current = requestAnimationFrame(() => {
//       updateAstroTransform();
//       rafRef.current = null;
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [sliderPos]);

//   // percent of parent height the astronaut should travel
//   const travelRangePercent = 55; // keep this as before

//   // NEW: pixel-based transform: compute container height and map fraction -> px
//   const updateAstroTransform = () => {
//     const pos = sliderPosRef.current;
//     const frac = sliderHeight ? pos / sliderHeight : 0;
//     const fracClamped = Math.max(0, Math.min(1, frac));

//     if (!astroRef.current) return;
//     // container that positions the astro (closest positioned ancestor)
//     const container = astroRef.current.parentElement; // your layout places astro inside page wrapper
//     const containerHeight = container ? container.getBoundingClientRect().height : window.innerHeight;

//     // compute total travel in px (e.g., 55% of container height)
//     const travelPx = (travelRangePercent / 100) * containerHeight;

//     // compute translateY: 0 -> bottom (no translate), positive -> move up (negative translateY)
//     const translateYpx = -fracClamped * travelPx;

//     // Write GPU-friendly transform (use translate3d)
//     astroRef.current.style.transform = `translate3d(0, ${translateYpx}px, 0)`;
//   };

//   const startRafLoop = () => {
//     if (rafRef.current) return;
//     const step = () => {
//       updateAstroTransform();
//       rafRef.current = requestAnimationFrame(step);
//     };
//     rafRef.current = requestAnimationFrame(step);
//   };

//   const stopRafLoop = () => {
//     if (rafRef.current) {
//       cancelAnimationFrame(rafRef.current);
//       rafRef.current = null;
//     }
//   };

//   const handleDragStart = () => {
//     if (astroRef.current) astroRef.current.style.transition = "none";
//     startRafLoop();
//   };

//   const handleDrag = (posPx) => {
//     sliderPosRef.current = posPx;
//     setSliderPos(posPx);
//   };

//   const handleDragEnd = () => {
//     stopRafLoop();
//     if (astroRef.current) {
//       astroRef.current.style.transition = "transform 220ms linear";
//       updateAstroTransform();
//     }
//     if (!hasMoved) {
//       setHasMoved(true);
//       setTimeout(() => setShowNextButton(true), 1000);
//     }
//   };

//   const onSliderChange = (v) => {
//     setHours(v);
//     dispatch(setAnswer({ questionIndex: 2, answer: String(v) }));
//     const snapped = v === 5 ? sliderHeight : v === 2.5 ? sliderHeight / 2 : 0;
//     setSliderPos(snapped);
//     sliderPosRef.current = snapped;
//     if (astroRef.current) astroRef.current.style.transition = "transform 220ms linear";
//     cancelAnimationFrame(rafRef.current);
//     rafRef.current = requestAnimationFrame(() => {
//       updateAstroTransform();
//       rafRef.current = null;
//     });
//   };

//   useEffect(() => {
//     return () => stopRafLoop();
//   }, []);

//   return (
//     <div className='flex flex-col min-h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden'>
//       <div className="flex flex-col items-start w-full px-28 py-28 gap-20 relative">
//         <div className="leading-[100%] h-[40%] font-oxanium-custom text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
//           <div>Roughly how much</div>
//           <div>time did you spend at</div>
//           <div>the gallery?</div>
//         </div>

//         <div className="h-[60%] flex items-start gap-10 relative font-oxanium-custom">
//           <VerticalTimeSlider
//             value={hours}
//             onChange={onSliderChange}
//             height={sliderHeight}
//             images={{ clock: "/clock.png" }}
//             thumbMin={60}
//             thumbMax={200}
//             scaleEasePower={2.2}
//             onDragStart={handleDragStart}
//             onDrag={handleDrag}
//             onDragEnd={handleDragEnd}
//           />
//         </div>

//         <div
//           ref={astroRef}
//           className="absolute right-20 bottom-0 z-20 pointer-events-none"
//           style={{
//             width: "80%",
//             maxWidth: "500px",
//             transform: "translate3d(0, 0, 0)",
//             transition: "transform 220ms linear",
//             willChange: "transform",
//           }}
//         >
//           <img
//             src="/astro_ninth.svg"
//             alt="Astronaut"
//             style={{ width: "100%", height: "auto", display: "block" }}
//             draggable={false}
//           />
//         </div>

//         {showNextButton && (
//           <button
//             onClick={() => {
//               onNext?.();
//               setHasMoved(false);
//               setShowNextButton(false);
//             }}
//             className="absolute -bottom-24 right-10 py-8 px-10 w-[20rem] text-4xl font-medium rounded-full border
//                text-gray-900 bg-transparent border-black/20
//                hover:bg-gray-100 hover:text-black
//                focus:outline-none focus:ring-4 focus:ring-gray-100 transition font-inter-custom"
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FourthPage;


// FourthPage.jsx
import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAnswer } from "../features/survey/surveySlice";
import VerticalTimeSlider from "./VerticalTimeSlider";

function FourthPage({ onNext }) {
  const dispatch = useDispatch();

  const stepValues = [0, 0.5, 1, 1.5, 2]; // 5-step values
  const [hours, setHours] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const sliderHeight = Math.max(560, Math.min(window.innerHeight * 0.8, 1200));
  const [sliderPos, setSliderPos] = useState(0);

  useEffect(() => {
    const idx = stepValues.indexOf(hours);
    const snapped = idx >= 0 ? (idx / (stepValues.length - 1)) * sliderHeight : 0;
    setSliderPos(snapped);
  }, [hours, sliderHeight]);

  const astroRef = useRef(null);
  const rafRef = useRef(null);
  const sliderPosRef = useRef(sliderPos);

  useEffect(() => {
    sliderPosRef.current = sliderPos;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      updateAstroTransform();
      rafRef.current = null;
    });
  }, [sliderPos]);

  const travelRangePercent = 55;

  const updateAstroTransform = () => {
    const pos = sliderPosRef.current;
    const frac = sliderHeight ? pos / sliderHeight : 0;
    const fracClamped = Math.max(0, Math.min(1, frac));

    if (!astroRef.current) return;
    const container = astroRef.current.parentElement;
    const containerHeight = container ? container.getBoundingClientRect().height : window.innerHeight;
    const travelPx = (travelRangePercent / 100) * containerHeight;
    const translateYpx = -fracClamped * travelPx;

    astroRef.current.style.transform = `translate3d(0, ${translateYpx}px, 0)`;
  };

  const startRafLoop = () => {
    if (rafRef.current) return;
    const step = () => {
      updateAstroTransform();
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  };

  const stopRafLoop = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const handleDragStart = () => {
    if (astroRef.current) astroRef.current.style.transition = "none";
    startRafLoop();
  };

  const handleDrag = (posPx) => {
    sliderPosRef.current = posPx;
    setSliderPos(posPx);
  };

  const handleDragEnd = () => {
    stopRafLoop();
    if (astroRef.current) {
      astroRef.current.style.transition = "transform 220ms linear";
      updateAstroTransform();
    }
    if (!hasMoved) {
      setHasMoved(true);
      setTimeout(() => setShowNextButton(true), 1000);
    }
  };

  const onSliderChange = (v) => {
    setHours(v);
    dispatch(setAnswer({ questionIndex: 2, answer: String(v) }));

    const idx = stepValues.indexOf(v);
    const snapped = idx >= 0 ? (idx / (stepValues.length - 1)) * sliderHeight : 0;
    setSliderPos(snapped);
    sliderPosRef.current = snapped;

    if (astroRef.current) astroRef.current.style.transition = "transform 220ms linear";
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      updateAstroTransform();
      rafRef.current = null;
    });
  };

  useEffect(() => () => stopRafLoop(), []);

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
            onChange={onSliderChange}
            height={sliderHeight}
            images={{ clock: "/clock.png" }}
            thumbMin={60}
            thumbMax={200}
            scaleEasePower={2.2}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            stepLabels={["0 hr", "0.5 hr", "1 hr", "1.5 hr", "2 hr"]}
          />
        </div>

        <div
          ref={astroRef}
          className="absolute right-20 bottom-0 z-20 pointer-events-none"
          style={{
            width: "80%",
            maxWidth: "500px",
            transform: "translate3d(0, 0, 0)",
            transition: "transform 220ms linear",
            willChange: "transform",
          }}
        >
          <img
            src="/astro_ninth.svg"
            alt="Astronaut"
            style={{ width: "100%", height: "auto", display: "block" }}
            draggable={false}
          />
        </div>

        {showNextButton && (
          <button
            onClick={() => {
              onNext?.();
              setHasMoved(false);
              setShowNextButton(false);
            }}
            className="absolute -bottom-24 right-10 py-8 px-10 w-[20rem] text-4xl font-medium rounded-full border
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

////hdhdj