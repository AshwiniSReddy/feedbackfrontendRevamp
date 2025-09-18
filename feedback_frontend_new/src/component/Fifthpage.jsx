import React from "react";
import { useState } from "react";
import { useId } from "react";
import Checklist from "./Checklist";

function Fifthpage() {
  const options = [
    "I would recommend Parsec to friends",
    "I would recommend Parsec to family",
    "I would recommend Parsec to a school",
    "I saw science from a new perspective",
    "I had a fun and engaging time",
  ];
  const [selected, setSelected] = useState([]);

  return (
    <div className='flex flex-col min-h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden'>
      <div className="flex flex-col items-start w-full px-28 py-28 gap-20 relative h-[20%]">
        <div className="leading-[100%] h-[40%] font-oxanium text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
          <div>Choose everything</div>
          <div>that applies ?</div>
        </div>
      </div>
      <div className="flex flex-col items-start w-full px-28 h-[40%]">
        <Checklist items={options} value={selected} onChange={setSelected} />
        {/* Debug / submit */}
        {/* <pre className="mt-6 text-9xl text-gray-500">
            {JSON.stringify(selected, null, 2)}
          </pre> */}
      </div>
      <div className="absolute left-0 right-0 bottom-0">
        <img src="/astrofifth.png" alt="fifth" srcset="" />

      </div>
    </div>
  );
}

export default Fifthpage;
