import React from "react";

function NinethPage({ onNext }) {
  return (
    <div className='flex flex-col h-full bg-[url("/background.svg")] bg-no-repeat bg-cover items-center relative overflow-hidden'>
      <div className="flex flex-col justify-center items-start w-full px-28 py-28 gap-10 relative h-full">
        <div className="leading-[100%] font-oxanium text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
          <div>Mission Just</div>
          <div>Began! 🚀</div>
        </div>
        <div className="flex justify-start  w-full box-border ">
          <div className="flex flex-col items-start gap-6 w-[60%] border-box">
            <div className="flex flex-col items-start text-justify text-[1rem] md:text-[1.4rem] lg:text-[1.8rem] ">
              <div>Thank you! 🚀</div>
              <div>Your feedback is the launch fuel that </div>
              <div> will power Parsec all the way to Mars.</div>
            </div>
            <div className="flex flex-col items-start text-justify text-[1rem] md:text-[1.4rem] lg:text-[1.8rem] ">
              <div>Thanks for being part of our crew —</div>
              <div>we can’t wait to share the journey with </div>
              <div>you!</div>
            </div>
          </div>
          <div className="flex justify-center w-[40%] relative">
            <div className="w-full justify-center relative ">
              <img
                src="/suitcase.svg"
                alt="auitcase"
                width={"100%"}
                height={"100%"}
                srcset=""
              />
              <img
                className="absolute top-10 left-5 "
                src="/Qr.svg"
                alt="auitcase"
                width={"90%"}
                height={"90%"}
                srcset=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <button
            onClick={onNext}
            type="button"
            className="py-8 px-10 me-2 w-[20rem] mb-2 text-2xl font-medium text-gray-900 focus:outline-none bg-transparent rounded-full border border-black-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Home
          </button>
        </div>
      </div>

      <div className="absolute left-0 bottom-0">
        <img src="/Astroninth.png" alt="Astroninth" srcset="" height={"100%"} />
      </div>
      <div className="absolute -top-48  -left-48">
        <img src="/mars.svg" alt="mars" srcset="" />
      </div>
      <div className="absolute top-60 right-20">
        <img src="/rocketbuilding.svg" alt="rocketbuilding" srcset="" height={"100%"} />
      </div>
    </div>
  );
}

export default NinethPage;
