import React from "react";

function Firstpage({onNext}) {
  return (
    <div className='flex flex-col min-h-full w-full bg-[url("/background.svg")] bg-cover bg-no-repeat px-8 py-28 items-center relative overflow-hidden text-black'>
      <div className="flex flex-col py-24 px-12  items-start text-left  w-full gap-[1rem] overflow-hidden">
        <div className="text-justify w-full">
          <p className="leading-[100%]  font-oxanium-custom text-[3rem] md:text-[4rem] lg:text-[5rem]">
           Help launch Parsec to {" "}
          </p>
        </div>
        <div className="leading-[100%] font-unica-custom font-bold   text-[12rem] md:text-[15rem] lg:text-[20rem] text-left">
          <p>MARS</p>
        </div>
        <div className="text-black-400 text-3xl  ">
          <p className="text-4xl font-inter-custom text-left  max-w-[32ch]">
         Your thoughts, opinions, and suggestions matter to us. With your feedback we will improve, grow and push our boundaries to see our dreams come true.
          </p>
        </div>
        <div className="flex items-center py-3.5">
          <button
           onClick={onNext}
            type="button"
            className="py-8 px-10 me-2 w-[20rem] mb-2 text-4xl font-medium font-inter-custom text-white-900 focus:outline-none bg-transparent rounded-full border-2 border-black-200 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 "
          >
            Begin
          </button>
        </div>


        {/* Bottom-center block */}
        <div className="absolute w-screen bottom-2 left-1/2 -translate-x-1/2 flex  justify-end items-end  ">
       
          <div className="relative w-[560px] md:w-[720px] lg:w-[880px] flex  justify-end items-end ">
            <img
              src="/mars.svg"
              alt="Mars"
              className="block w-[80%] h-auto animate-tilt90 "
            />

            {/* Astronaut width is a % of wrapper width */}
            
         <img
              src="/astronautWalking.gif"
              alt="Astronaut"
              className="
        absolute z-10
        w-[100%] md:w-[100%] lg:w-[100%]
        bottom-[90%]
        left-[70%] -translate-x-1/2 translate-y-[6px]
        select-none pointer-events-none 
      "
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstpage;
