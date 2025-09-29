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
        className="dialog-box w-[970px] max-w-[90%] h-auto bg-white p-10 rounded-2xl shadow-xl flex flex-col gap-6 text-center"
        onClick={(e) => e.stopPropagation()} // stop bubbling inside
      >
        <h2 className="text-3xl font-bold text-gray-800">🚀 Mars Mission paused...</h2>

        <p className="text-lg text-gray-600">
          Hey there! We haven’t seen any activity for a while.
          Want to pick up where you left off?
        </p>

        <div className="flex justify-center gap-8 mt-6">
          <button
            onClick={onHome}
            className="py-4 px-8 w-48 text-xl font-medium rounded-full border
                       text-gray-900 bg-gray-100 border-black/20
                       hover:bg-gray-200 hover:text-black
                       focus:outline-none focus:ring-4 focus:ring-gray-200 transition"
          >
            Home
          </button>

          <button
            onClick={hide}
            className="py-4 px-8 w-48 text-xl font-medium rounded-full
                       bg-blue-600 text-white
                       hover:bg-blue-700
                       focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
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
