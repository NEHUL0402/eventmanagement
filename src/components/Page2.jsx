import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);
    {
        /*page2 */
      }
      useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".page2", // Element to trigger the animation
            start: "top 100%", // Start when the top of .page2 reaches the top of the viewport
            end: "bottom 90%", // End when the bottom of .page2 reaches the top of the viewport
            scrub: true, // Smooth animation as you scroll
            toggleActions: "play none none reverse", // Play on enter, reverse on leave
            markers: false, // Set to true to see the start and end markers
            once: true, // Animation will only happen once
          },
        });
        tl.to(".page2h1", {
          duration: 2,
          opacity: 1,
          ease: "expo.in",
          scale: 1,
        });
        tl.to(".page2btn", {
          duration: 0.8,
          delay: -0.2,
          opacity: 1,
          ease: "power1",
          scale: 1,
        });
        tl.to(".page2icons", {
          duration: 0.8,
          delay: -0.16,
          opacity: 1,
          ease: "power1",
          scale: 1,
        });
      });
  return (
    <div
    
    className="page2 w-full h-screen flex flex-col bg-[#f7f7f7] items-center justify-center"
    style={{ scrollBehavior: "smooth" }}
  >
    <div className="page2btn flex gap-5 mb-10 opacity-0">
      <button className="bg-white text-yellow-700 px-3 py-1 rounded-3xl">
        Trusted by +1,000 businesses
      </button>
      <button className="bg-white text-yellow-700 px-3 py-1 rounded-3xl">
        +500 event planned
      </button>
    </div>
    <div className="page2h1 text-center opacity-0">
      <h1 className="text-7xl opacity-40">Well-planed events</h1>
      <h1 className="text-7xl">trusted by many</h1>
    </div>
    <div className="page2icons w-[60%] mt-14 opacity-0">
      <img src="/logo.png" alt="" />
    </div>
  </div>
  )
}

export default Page2