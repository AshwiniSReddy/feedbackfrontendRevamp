


// FourthPage.jsx
import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAnswer } from "../features/survey/surveySlice";
import VerticalTimeSlider from "./VerticalTimeSlider";

function FourthPage({ onNext,onHome }) {
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
    <div className='flex flex-col min-h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden text-black'>
      <div className="flex flex-col items-start w-full px-28 py-28 gap-20 relative">
          <div className="absolute top-0 right-0 px-22 py-15" onClick={onHome}>
          <img
            src="/home_button.svg"
            alt="home"
            className="w-[85px] cursor-pointer"
          />
        </div>
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