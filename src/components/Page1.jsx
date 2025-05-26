import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Page1 = () => {
  gsap.registerPlugin(ScrollTrigger);

     /*page1 */
  
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".page1", {
      duration: 0.8,
      opacity: 1,
      ease: "power1",
      scale: 1,
    });
    tl.to(".headingpage1h1", {
      duration: 0.5,
      opacity: 1,
      ease: "power1",
      y: 0,
    });
    tl.to(".headingpage1h4", {
      duration: 0.5,
      opacity: 1,
      ease: "power1",
      y: 0,
    });
    tl.to(".leftpage1", {
      duration: 0.3,
      opacity: 1,
      ease: "power1",
      y: 0,
    });
    tl.to(".rightpage1", {
      duration: 0.3,
      opacity: 1,
      ease: "power1",
      y: 0,
    });
  });



  return (

    <div
    className="page1 h-screen bg-cover bg-center flex flex-col justify-end px-20 py-6 pb-20 scale-[1.3]"
    style={{
      backgroundImage:
        "linear-gradient(to top, rgba(20, 20, 20, 0.99), transparent), url('/first.webp')",
    }}
  >
    <div className="headingpage1 text-white flex flex-col gap-4 pt-32 ">
      <h1 className="headingpage1h1 text-7xl w-[65%] text-gray-200 opacity-0">
        Your trusted partner for extraordinary events
      </h1>
      <h4 className="headingpage1h4 text-xl w-[45%] text-gray-300 font-light opacity-0">
        We specialize in creating seamless, stress-free event that leave a
        lasting impression on you and your guests
      </h4>
      <div className="flex justify-between mt-4 items-bottom">
        <div className="leftpage1 flex gap-4 opacity-0">
          <button className="bg-white text-black px-5 py-3 rounded-3xl">
            Schedule a call →
          </button>
          <button className="bg-black opacity-60 px-5 py-3 rounded-3xl text-white">
            View Pricing
          </button>
        </div>
        <div className="rightpage1 mr-5 opacity-0">
          <button className="text-lg font-light border-b-1 pb-1">
            Start exploring ↓
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Page1