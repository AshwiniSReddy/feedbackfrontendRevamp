import { useState,useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Firstpage from "./component/Firstpage";
import SecondPage from "./component/SecondPage";
import Third from "./component/Third";
import FourthPage from "./component/fourthPage";
import Fifthpage from "./component/Fifthpage";
import "./App.css";
import Sixthpage from "./component/Sixthpage";
import Eight from "./component/eight";

function App() {
const sectionsRef = useRef([]);

  const scrollToIndex = (i) => {
    sectionsRef.current[i]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const onNext = (currentIdx) => scrollToIndex(currentIdx + 1);

  return (
    <Provider store={store}>
 
     <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className="snap-start h-full"
        >
          <Firstpage onNext={() => onNext(0)} />
        </section>

        {/* Page 2 (uncomment when you have it) */}
        
        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className="snap-start h-full"
        >
          <SecondPage onNext={() => onNext(1)} />
        </section>

         <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className="snap-start h-full"
        >
          <Third onNext={() => onNext(2)} />
        </section>

          <section
          ref={(el) => (sectionsRef.current[3] = el)}
          className="snap-start h-full"
        >
          <FourthPage onNext={() => onNext(3)} />
        </section>

         <section
          ref={(el) => (sectionsRef.current[4] = el)}
          className="snap-start h-full"
        >
          <Fifthpage onNext={() => onNext(4)} />
        </section>

          <section
          ref={(el) => (sectionsRef.current[5] = el)}
          className="snap-start h-full"
        >
          <Sixthpage onNext={() => onNext(5)} />
        </section>
         <section
          ref={(el) => (sectionsRef.current[6] = el)}
          className="snap-start h-full"
        >
          <Eight onNext={() => onNext(6)} />
        </section>
      
   
    </Provider>
  );
}

export default App;
