
import { useEffect, useState } from "react";
import { Provider,useDispatch } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Firstpage from './component/Fifthpage'
import SecondPage from "./component/SecondPage";
import Third from './component/Third'
import FourthPage from "./component/fourthPage";
import Fifthpage from "./component/Fifthpage";
import Sixthpage from './component/Sixthpage'
import SeventhPage from './component/SeventhPage'
import Eight from './component/Eight'
import NinethPage from "./component/NinethPage";
import { resetSurvey } from "./features/survey/surveySlice";

// Wrapper to allow useNavigate for NinethPage
function NinethPageWrapper({onHome,isActive}) {
 
  return <NinethPage onHome={onHome} isActive={isActive} />;
}

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
                  <NinethPageWrapper onHome={onHome} isActive={page === 8}  />
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
