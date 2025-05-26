import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {useLenis} from "./hooks/lenis";


const App = () => {

  return (
    <div className="min-h-screen w-full relative">
      <Navbar/>

      {/* Sections */}
      <section id="section1" className="min-h-screen">
        <Page1 />
      </section>
      <section id="section2" className="min-h-screen">
        <Page2 />
      </section>
      <section id="section3" className="min-h-screen">
        <Page3 />
      </section>
      <section id="section4" className="min-h-screen">
        <Page4 />
      </section>
      <section id="section5" className="min-h-screen">
        <Page5 />
      </section>
      <section id="section6" className="min-h-screen">
        <Page6 />
      </section>
      <section id="section7" className="min-h-screen">
        <Page7 />
      </section>
      <section id="section8" className="min-h-screen">
        <Footer />
      </section>
    </div>
  );
};

export default App;
