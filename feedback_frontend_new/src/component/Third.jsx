import React from "react";

function Third() {
  return (
    <div className='flex flex-col min-h-full w-full bg-[url("/background.svg")] bg-cover bg-no-repeat items-center relative overflow-hidden'>
      <div className="flex flex-col items-start w-full px-28 py-28 gap-20 relative">
        <div className="leading-[100%] h-[40%] font-oxanium text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
          <div>How did you find out </div>
          <div>about PARSEC </div>
          <div>Jayanagar ?</div>
        </div>
        <div className="flex flex-col h-[60%] w-full flex-wrap justify-center  gap-20 ">
          <div className="flex gap-3.5 justify-between">
            <div><button className="py-4 px-10 me-2 w-[20rem] mb-2 text-2xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-black-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Google Search</button></div>
            <div><button className="py-4 px-10 me-2 w-[20rem] mb-2 text-2xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-black-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Word of Mouth</button></div>
          </div>
          <div className="flex gap-3.5 justify-between">
            <div><button className="py-4 px-10 me-2 w-[20rem] mb-2 text-2xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-black-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Social Media</button></div>
            <div><button className="py-4 px-10 me-2 w-[20rem] mb-2 text-2xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-black-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">School</button></div>
          </div>
          <div className="flex gap-3.5 justify-between">
            <div><button className="py-4 px-10 me-2 w-[20rem] mb-2 text-2xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-black-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Other</button></div>

          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 right-1/4 ">
           <img src="/astrothirdpage.png" alt="" srcset="" />
      </div>
    </div>
  );
}

export default Third;
