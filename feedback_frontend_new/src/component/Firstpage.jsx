import React from "react";

function Firstpage({onNext}) {
  return (
    <div className='flex flex-col min-h-full w-full bg-[url("/background.svg")] bg-cover bg-no-repeat px-8 py-28 items-center relative overflow-hidden'>
      <div className="flex-1 flex-col py-24 px-12  items-start text-left space-y-6 w-full gap-1.5 overflow-hidden">
        <div className="text-justify w-full">
          <h2 className="leading-[100%] font-oxanium text-[4rem] md:text-[5rem] lg:text-[7rem] ">
            Help Parsec reach{" "}
          </h2>
        </div>
        <div className="leading-[100%] font-oxanium  text-[3rem] md:text-[4rem] lg:text-[5rem]  text-justify">
          <h1>MARS</h1>
        </div>
        <div className="text-black-400 text-3xl  ">
          <p className="text-4xl  text-justify  max-w-[32ch]">
            Your thoughts, opinions, and suggestions matter to us. Only with
            your feedback can we grow, improve, and truly reach our dreams.
          </p>
        </div>
        <div>
          <button
           onClick={onNext}
            type="button"
            className="py-4 px-10 me-2 w-[20rem] mb-2 text-2xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-black-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
