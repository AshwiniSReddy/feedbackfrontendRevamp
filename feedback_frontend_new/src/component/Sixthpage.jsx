import React from "react";
import { useState } from "react";
import { useId } from "react";
import Checklist from "./Checklist";

function Sixthpage() {
  const options = [
    "Visiting the Makerspace and building something",
    "Making a donation",
    "Volunteering at Parsec",
    "Following Param on Social Media",
    "Signing up for a Param Workshop",
  ];
  const [selected, setSelected] = useState([]);

  return (
    <div className='flex flex-col min-h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden'>
      <div className="flex flex-col items-start w-full px-28 py-28 gap-20 relative h-[20%]">
        <div className="leading-[100%] h-[40%] font-oxanium text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
          <div>What’s next? 👀</div>
        </div>
      </div>
      <div className="flex flex-col items-start w-full px-28 h-[40%]">
        <Checklist items={options} value={selected} onChange={setSelected} />
      </div>

      <div className="absolute left-0 right-1/3 bottom-0 flex">
        <img src="/astrosixt.png" alt="sixth" srcset="" />
      </div>
      <div className="absolute top-1/3 -right-32 w-1/3 h-1/3">
        <img src="/mars.svg" alt="mars" srcset=""  />
      </div>
      <div className="absolute top-1/2 right-6 h-[50%]">
            <img src="/line.svg" alt="line" srcset="" />
      </div>
    </div>
  );
}

export default Sixthpage;
