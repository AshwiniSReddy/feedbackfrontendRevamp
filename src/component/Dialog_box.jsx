// Dialog_box.jsx
import React from "react";
import { createPortal } from "react-dom";

function Dialogbox({ hide, onHome }) {
  return createPortal(
    // Backdrop
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-[9999]"
      onClick={hide} // clicking backdrop closes dialog
    >
      {/* Dialog box */}
      <div
        className="dialog-box w-[600px] max-w-[90%] h-auto bg-white p-10 rounded-2xl shadow-xl flex flex-col gap-4 text-center"
        onClick={(e) => e.stopPropagation()} // stop bubbling inside
      >
        <h2 className="text-3xl font-bold text-gray-800 font-oxanium-custom">🚀 Mars Mission paused...</h2>
       <div className="font-inter-custom">
           <p className="text-lg text-black">
          Hey there! We haven’t seen any activity for 
        </p>
        <p className="text-lg text-black">
          a while.
          Want to pick up where you left off?
        </p>

       </div>
       
        <div className="flex justify-end gap-8 mt-6">
          <button
            onClick={onHome}
            className="py-4 px-8 w-32 text-xl font-medium rounded-full border
                       text-black-900 bg-transparent-100 border-black/20
                       hover:bg-gray-200 hover:text-black
                       focus:outline-none focus:ring-4 focus:ring-gray-200 transition"
          >
            Home
          </button>

          <button
            onClick={hide}
             className="py-4 px-8 w-32 text-xl font-medium rounded-full border
                       text-black-900 bg-transparent-100 border-black/20
                       hover:bg-gray-200 hover:text-black
                       focus:outline-none focus:ring-4 focus:ring-gray-200 transition"
          >
            Yes
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Dialogbox;
