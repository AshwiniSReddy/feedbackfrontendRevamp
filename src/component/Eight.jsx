



// Eight.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "../features/survey/surveySlice"; // adjust path if needed

function Eight({ onNext,onHome }) {
  const dispatch = useDispatch();
  const qaList = useSelector((s) => s.survey.qaList); // grab full answers
  const saved = qaList[6]?.answer;

  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (typeof saved === "string") setDesc(saved);
  }, [saved]);

  const handleNext = async () => {
    // 1. Save to Redux
    dispatch(setAnswer({ questionIndex: 6, answer: desc.trim() }));

    // 2. Build payload (your backend expects { feedback: [...] })
    // const payload = {
    //   feedback: qaList.map((q, idx) =>
    //     idx === 6 ? { ...q, answer: desc.trim() } : q
    //   ),
    // };

    const payload = {
  feedback: qaList.map((q, idx) => {
    let ans = q.answer;

    // For question 6 (text input)
    if (idx === 6) ans = desc.trim();

    // Convert arrays/objects to string
    if (Array.isArray(ans)) ans = ans.join(', ');
    else if (typeof ans === 'object' && ans !== null) ans = JSON.stringify(ans);

    return {
      question: q.question,
      answer: ans
    };
  })
};


    try {
      setLoading(true);
      setMessage(null);

      const res = await fetch("http://3.109.132.143/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Failed: ${res.status}`);
      }

      const data = await res.json();
      setMessage("✅ Feedback submitted successfully!");
      console.log("Saved:", data);

      // 3. Move to next page (if needed)
      setTimeout(() => {
        onNext?.();
      }, 1700);
      
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to submit feedback");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col min-h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden text-black'>
      <div className="flex flex-col items-start w-full px-28 py-28 gap-44 relative h-[20%]">
          <div className="absolute top-0 right-0 px-22 py-15" onClick={onHome}>
          <img
            src="/home_button.svg"
            alt="home"
            className="w-[85px] cursor-pointer"
          />
        </div>
        <div className="leading-[100%] h-[40%] font-oxanium-custom text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
          <div>Anything else we </div>
          <div>should know?</div>
        </div>

        <div className="flex flex-col justify-start gap-28 w-full font-inter-custom">
          <div className="w-full">
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Enter your description"
              className="w-full border-0 border-b-2 border-black/40 focus:border-blue-500 focus:ring-0 outline-none placeholder-gray-400 text-xl md:text-3xl bg-transparent"
            />
          </div>

          <button
            onClick={handleNext}
            disabled={loading}
            type="button"
            className="py-10 px-10 w-[20rem] text-4xl font-medium text-gray-900 bg-transparent rounded-full border border-black/20 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-100 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {message && (
            <p className="mt-4 text-lg text-center">
              {message}
            </p>
          )}
        </div>
      </div>
      <div className="absolute left-0 bottom-0 right-20">
        <img src="/rocket.svg" alt="rocket" />
      </div>
      <div className="absolute left-24 bottom-0 right-20">
        <img src="/astroeight.png" alt="Astroeight" />
      </div>
    </div>
  );
}

export default Eight;
