import React, { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import { gsap } from "gsap";

import Navbar from "../components/Navbar";

import resume from '../Resume.pdf'


function Resume() {
  const { theme } = useContext(ThemeContext);
  const animateRef = useRef();

  useEffect(() => {
    gsap.from(animateRef.current, { y: '-200%', rotation: "+=360" });
  }, []);

  return (
    <div className={"container-fluid p-0 min-height" + theme.bkgrndClr2}>

      <Navbar />

      <div className="m-5" ref={animateRef}>
        <div className={"text-center p-2 border-5 rounded shadow " + theme.bkgrndClr1}>
          <h4 className={"display-5" + theme.txtClr1}>Maximilian A. Lewis</h4>
          <p className={"display-6" + theme.txtClr1}>Computer Science Undergraduate & Junior Fullstack Developer</p>
          <a href={resume} ><button className={"btn btn-outline-dark btn-lg btn-block shadow-sm" + theme.txtClr1 + theme.bkgrndClr3}>Download PDF // OLD</button></a>
        </div>
      </div>


      {/* need to write resume out or have it display the pdf */}

    </div>
  )
}

export default Resume