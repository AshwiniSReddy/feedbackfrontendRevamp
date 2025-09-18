// import { useState,useRef } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { Provider } from "react-redux";
// import { store } from "./store/store";
// import Firstpage from "./component/Firstpage";
// import SecondPage from "./component/SecondPage";
// import Third from "./component/Third";
// import FourthPage from "./component/fourthPage";
// import Fifthpage from "./component/Fifthpage";
// import "./App.css";
// import Sixthpage from "./component/Sixthpage";

// import SeventhPage from "./component/SeventhPage";
// import Eight from "./component/eight";
// import NinethPage from "./component/NinethPage";

// function App() {
// const sectionsRef = useRef([]);

//   const scrollToIndex = (i) => {
//     sectionsRef.current[i]?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   const onNext = (currentIdx) => scrollToIndex(currentIdx + 1);

//   return (
//     <Provider store={store}>
 
//      <section
//           ref={(el) => (sectionsRef.current[0] = el)}
//           className="snap-start h-full"
//         >
//           <Firstpage onNext={() => onNext(0)} />
//         </section>

//         {/* Page 2 (uncomment when you have it) */}
        
//         <section
//           ref={(el) => (sectionsRef.current[1] = el)}
//           className="snap-start h-full"
//         >
//           <SecondPage onNext={() => onNext(1)} />
//         </section>

//          <section
//           ref={(el) => (sectionsRef.current[2] = el)}
//           className="snap-start h-full"
//         >
//           <Third onNext={() => onNext(2)} />
//         </section>

//           <section
//           ref={(el) => (sectionsRef.current[3] = el)}
//           className="snap-start h-full"
//         >
//           <FourthPage onNext={() => onNext(3)} />
//         </section>

//          <section
//           ref={(el) => (sectionsRef.current[4] = el)}
//           className="snap-start h-full"
//         >
//           <Fifthpage onNext={() => onNext(4)} />
//         </section>

//           <section
//           ref={(el) => (sectionsRef.current[5] = el)}
//           className="snap-start h-full"
//         >
//           <Sixthpage onNext={() => onNext(5)} />
//         </section>
//          <section
//           ref={(el) => (sectionsRef.current[6] = el)}
//           className="snap-start h-full"
//         >
//           <SeventhPage onNext={() => onNext(6)} />
//         </section>
//          <section
//           ref={(el) => (sectionsRef.current[7] = el)}
//           className="snap-start h-full"
//         >
//           <Eight onNext={() => onNext(7)} />
//         </section>
//           <section
//           ref={(el) => (sectionsRef.current[8] = el)}
//           className="snap-start h-full"
//         >
//           <NinethPage onNext={() => onNext(8)} />
//         </section>
      
   
//     </Provider>
//   );
// }

// export default App;


// App.jsx
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

import Firstpage from "./component/Firstpage";
import SecondPage from "./component/SecondPage";
import Third from "./component/Third";
import FourthPage from "./component/fourthPage";
import Fifthpage from "./component/Fifthpage";
import Sixthpage from "./component/Sixthpage";
import SeventhPage from "./component/seventhPage";
import Eight from "./component/eight";
import NinethPage from "./component/NinethPage";

export default function App() {
  const [page, setPage] = useState(0);          // 0..8 (9 pages)
  const total = 9;

  const onNext = (cur) => setPage((p) => Math.min(p + 1, total - 1));
  const onBack = () => setPage((p) => Math.max(p - 1, 0));

  // Optional: hard block wheel/touch scrolling
  useEffect(() => {
    const stop = (e) => e.preventDefault();
    window.addEventListener("wheel", stop, { passive: false });
    window.addEventListener("touchmove", stop, { passive: false });
    return () => {
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchmove", stop);
    };
  }, []);

  return (
    <Provider store={store}>
      {/* Viewport: no manual scroll */}
      <div className="relative h-screen w-screen overflow-hidden">
        {/* Track: move vertically instead of scrolling */}
        <div
          className="h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(-${page * 100}vh)` }}
        >
          {/* Each page is full height and stacked vertically */}
          <section className="h-screen w-screen">
            <Firstpage onNext={() => onNext(0)} />
          </section>

          <section className="h-screen w-screen">
            <SecondPage onNext={() => onNext(1)} />
          </section>

          <section className="h-screen w-screen">
            <Third onNext={() => onNext(2)} />
          </section>

          <section className="h-screen w-screen">
            <FourthPage onNext={() => onNext(3)} />
          </section>

          <section className="h-screen w-screen">
            <Fifthpage onNext={() => onNext(4)} />
          </section>

          <section className="h-screen w-screen">
            <Sixthpage onNext={() => onNext(5)} />
          </section>

          <section className="h-screen w-screen">
            <SeventhPage onNext={() => onNext(6)} />
          </section>

          <section className="h-screen w-screen">
            <Eight onNext={() => onNext(7)} />
          </section>

          <section className="h-screen w-screen">
            <NinethPage onNext={() => onNext(8)} />
          </section>
        </div>

        {/* (Optional) back button if you ever want it */}
        {/* <button onClick={onBack} className="absolute left-4 top-4">Back</button> */}
      </div>
    </Provider>
  );
}
