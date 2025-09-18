import React from "react";

function SecondPage() {
  return (
    <div className='flex flex-col min-h-full w-full bg-[url("/background.svg")] bg-cover bg-no-repeat items-center relative overflow-hidden'>
      <div className="absolute right-0 -top-[10%] w-[30%]">
        <img src="/earth.png" alt="" srcset="" />
      </div>
      <div className="absolute right-[4%] top-0">
        <img src="/astronaut.svg" alt="" srcset="" />
      </div>

      <div className="flex items-start w-full px-28 py-28 relative">
        <div className="leading-[100%] font-oxanium text-[3rem] md:text-[4rem] lg:text-[5rem] text-justify flex flex-col gap-1.5">
          <div>Which gallery was</div>
          <div>your personal</div>
          <div>Favourite?</div>
        </div>
      </div>
      <div className="flex flex-col w-full flex-wrap justify-center gap-20 px-28">
        <div className="flex gap-20 w-full ">
          <div className="w-1/2 h-80 bg-gray-300 flex flex-col justify-end">
            <div className="bg-gray-800 text-white text-center py-5 text-sm">
              Kinetic Gallery
            </div>
          </div>
          <div className="w-1/2 h-80 bg-gray-300 flex flex-col justify-end">
            <div className="bg-gray-800 text-white text-center py-5 text-sm">
              Tactile Gallery
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="w-1/2 h-80 bg-gray-300 flex flex-col justify-end">
            <div className="bg-gray-800 text-white text-center py-5 text-sm">
              Navrasa Gallery
            </div>
          </div>
          <div className="w-1/2 h-80 bg-gray-300 flex flex-col justify-end">
            <div className="bg-gray-800 text-white text-center py-5 text-sm">
              Puzzle Gallery
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="w-1/2 h-80 bg-gray-300 flex flex-col justify-end">
            <div className="bg-gray-800 text-white text-center py-5 text-sm">
              Light Gallery
            </div>
          </div>

          {/* Card 6 */}
          <div className="w-1/2 h-80 bg-gray-300 flex flex-col justify-end">
            <div className="bg-gray-800 text-white text-center py-5 text-sm">
              Digital Gallery
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
