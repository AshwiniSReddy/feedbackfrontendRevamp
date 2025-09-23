

// // App.jsx
// import { useEffect, useState } from "react";
// import { Provider } from "react-redux";
// import { store } from "./store/store";

// import Firstpage from "./component/Firstpage";
// import SecondPage from "./component/SecondPage";
// import Third from "./component/Third";
// import FourthPage from "./component/fourthPage";
// import Fifthpage from "./component/Fifthpage";
// import Sixthpage from "./component/Sixthpage";
// import SeventhPage from "./component/seventhPage";
// import Eight from "./component/eight";
// import NinethPage from "./component/NinethPage";

// export default function App() {
//   const [page, setPage] = useState(0); // 0..8 (9 pages)
//   const total = 9;

//   const onNext = (cur) => setPage((p) => Math.min(p + 1, total - 1));
//   const onBack = () => setPage((p) => Math.max(p - 1, 0));
// const goToPage = (i) => setPage(Math.min(Math.max(i, 0), total - 1));


//   // Optional: hard block wheel/touch scrolling
//   useEffect(() => {
//     const stop = (e) => e.preventDefault();
//     window.addEventListener("wheel", stop, { passive: false });
//     window.addEventListener("touchmove", stop, { passive: false });
//     return () => {
//       window.removeEventListener("wheel", stop);
//       window.removeEventListener("touchmove", stop);
//     };
//   }, []);

//   return (
//     <Provider store={store}>
//       {/* Viewport: no manual scroll */}
//       <div className="relative h-screen w-screen overflow-hidden">
//         {/* Track: move vertically instead of scrolling */}
//         <div
//           className="h-full w-full transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateY(-${page * 100}vh)` }}
//         >
//           {/* Each page is full height and stacked vertically */}
//           <section className="h-screen w-screen">
//             <Firstpage onNext={() => onNext(0)} />
//           </section>

//           <section className="h-screen w-screen">
//             <SecondPage onNext={() => onNext(1)} />
//           </section>

//           <section className="h-screen w-screen">
//             <Third onNext={() => onNext(2)} />
//           </section>

//           <section className="h-screen w-screen">
//             <FourthPage onNext={() => onNext(3)} />
//           </section>

//           <section className="h-screen w-screen">
//             <Fifthpage onNext={() => onNext(4)} />
//           </section>

//           <section className="h-screen w-screen">
//             <Sixthpage onNext={() => onNext(5)} />
//           </section>

//           <section className="h-screen w-screen">
//             <SeventhPage onNext={() => onNext(6)} />
//           </section>

//           <section className="h-screen w-screen">
//             <Eight onNext={() => onNext(7)} />
//           </section>

//           <section className="h-screen w-screen">
//             <NinethPage onNext={() => goToPage(0)} />
//           </section>
//         </div>

//         {/* (Optional) back button if you ever want it */}
//         {/* <button onClick={onBack} className="absolute left-4 top-4">Back</button> */}
//       </div>
//     </Provider>
//   );
// }


import { useEffect, useState } from "react";
import { Provider,useDispatch } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Firstpage from "./component/Firstpage";
import SecondPage from "./component/SecondPage";
import Third from "./component/Third";
import FourthPage from "./component/fourthPage";
import Fifthpage from "./component/Fifthpage";
import Sixthpage from "./component/Sixthpage";
import SeventhPage from "./component/seventhPage";
import Eight from "./component/eight";
import NinethPage from "./component/NinethPage";
import { resetSurvey } from "./features/survey/surveySlice";

// Wrapper to allow useNavigate for NinethPage
function NinethPageWrapper({onHome}) {
  const navigate = useNavigate();
  return <NinethPage onHome={onHome} />;
}

// export default function App() {
//     const dispatch = useDispatch();
//   const [page, setPage] = useState(0); // 0..8 (9 pages)
//   const total = 9;
//     const [resetKey, setResetKey] = useState(0); // used to remount pages
//   const onNext = () => setPage((p) => Math.min(p + 1, total - 1));
//   const onHome =() => {
//     dispatch(resetSurvey());
//     setResetKey((k) => k + 1); // trigger remount
//     setPage(0);
//   };


//   // Optional: block wheel/touch scrolling
//   useEffect(() => {
//     const stop = (e) => e.preventDefault();
//     window.addEventListener("wheel", stop, { passive: false });
//     window.addEventListener("touchmove", stop, { passive: false });
//     return () => {
//       window.removeEventListener("wheel", stop);
//       window.removeEventListener("touchmove", stop);
//     };
//   }, []);

//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div className="relative h-screen w-screen overflow-hidden">
//                 <div
//                   className="h-full w-full transition-transform duration-700 ease-in-out"
//                   style={{ transform: `translateY(-${page * 100}vh)` }}
//                 >
//                   <section className="h-screen w-screen">
//                     <Firstpage onNext={onNext} />
//                   </section>

//                   <section className="h-screen w-screen">
//                     <SecondPage onNext={onNext} />
//                   </section>

//                   <section className="h-screen w-screen">
//                     <Third onNext={onNext} />
//                   </section>

//                   <section className="h-screen w-screen">
//                     <FourthPage onNext={onNext} />
//                   </section>

//                   <section className="h-screen w-screen">
//                     <Fifthpage onNext={onNext} />
//                   </section>

//                   <section className="h-screen w-screen">
//                     <Sixthpage onNext={onNext} />
//                   </section>

//                   <section className="h-screen w-screen">
//                     <SeventhPage onNext={onNext} />
//                   </section>

//                   <section className="h-screen w-screen">
//                     <Eight onNext={onNext} />
//                   </section>

//                   <section className="h-screen w-screen">
//                     <NinethPageWrapper  onHome={onHome}/>
//                   </section>
//                 </div>
//               </div>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   );
// }


// AppInner.jsx (can be inside same file)
function AppInner() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const total = 9;

  const onNext = () => setPage((p) => Math.min(p + 1, total - 1));
  const onHome = () => {
    dispatch(resetSurvey());
    setResetKey((k) => k + 1);
    setPage(0);
  };

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div
              key={resetKey}
              className="relative h-screen w-screen overflow-hidden"
            >
              <div
                className="h-full w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${page * 100}vh)` }}
              >
                <section className="h-screen w-screen">
                  <Firstpage onNext={onNext} />
                </section>

                <section className="h-screen w-screen">
                  <SecondPage onNext={onNext} />
                </section>

                <section className="h-screen w-screen">
                  <Third onNext={onNext} />
                </section>

                <section className="h-screen w-screen">
                  <FourthPage onNext={onNext} />
                </section>

                <section className="h-screen w-screen">
                  <Fifthpage onNext={onNext} />
                </section>

                <section className="h-screen w-screen">
                  <Sixthpage onNext={onNext} />
                </section>

                <section className="h-screen w-screen">
                  <SeventhPage onNext={onNext} />
                </section>

                <section className="h-screen w-screen">
                  <Eight onNext={onNext} />
                </section>

                <section className="h-screen w-screen">
                  <NinethPageWrapper onHome={onHome} />
                </section>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}


export default function App() {
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}
