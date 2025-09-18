// SeventhPage.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "../features/survey/surveySlice"; // adjust path

function SeventhPage({ onNext }) {
  const dispatch = useDispatch();

  // Prefill if user came back to this page
  const saved = useSelector((s) => s.survey.qaList[5]?.answer); // may be "", or {phone,email}
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (saved && typeof saved === "object") {
      setPhone(saved.phone ?? "");
      setEmail(saved.email ?? "");
    }
  }, [saved]);

  // Soft validation (optional hints only)
  const phoneLooksBad =
    phone.trim().length > 0 && !/^\+?[0-9\s\-()]{7,}$/.test(phone.trim());
  const emailLooksBad =
    email.trim().length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleNext = () => {
    // Save to Redux (both fields optional)
    dispatch(
      setAnswer({
        questionIndex: 5,
        answer: { phone: phone.trim(), email: email.trim() },
      })
    );
    onNext?.();
  };

  return (
    <div className='flex flex-col min-h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden'>
      <div className="flex flex-col items-start w-full px-28 py-28 gap-10 relative">
        <div className="leading-[100%] font-oxanium text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
          <div>Let’s stay in touch?</div>
        </div>

        <div className="text-sm md:text-xl lg:text-2xl text-justify">
          <div>We’ll only use your contact information to share updates</div>
          <div>about upcoming events and opportunities at Parsec.</div>
        </div>

        {/* Phone */}
        <div className="w-full max-w-3xl flex flex-col gap-3 mt-6">
          <label className="text-2xl md:text-3xl lg:text-4xl">Phone number</label>
          <div className="w-full border border-black rounded-2xl px-4 py-4">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full bg-transparent outline-none text-xl md:text-2xl"
            />
          </div>
          {phoneLooksBad && (
            <p className="text-red-600 text-sm">That doesn’t look like a phone number.</p>
          )}
        </div>

        {/* Email */}
        <div className="w-full max-w-3xl flex flex-col gap-3 mt-4">
          <label className="text-2xl md:text-3xl lg:text-4xl">Email</label>
          <div className="w-full border border-black rounded-2xl px-4 py-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-transparent outline-none text-xl md:text-2xl"
            />
          </div>
          {emailLooksBad && (
            <p className="text-red-600 text-sm">That doesn’t look like an email address.</p>
          )}
        </div>

        <div className="mt-8">
          <button
            onClick={handleNext}
            type="button"
            className="py-6 px-10 w-[20rem] text-2xl font-medium rounded-full border
                       text-gray-900 bg-transparent border-black/20
                       hover:bg-gray-100 hover:text-black
                       focus:outline-none focus:ring-4 focus:ring-gray-100 transition"
          >
            Next
          </button>
        </div>
      </div>

      <div className="absolute left-0 bottom-0">
        <img src="/bag.svg" alt="bag" />
      </div>
      <div className="absolute left-60 bottom-0">
        <img src="/Astroseventh.svg" alt="astronaut" />
      </div>
    </div>
  );
}

export default SeventhPage;
