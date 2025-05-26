import React, { useRef, useState } from "react";

const Page6 = () => {
  const [cursorStyle, setCursorStyle] = useState({ top: 0, left: 0, opacity: 0 });
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);

  const handleMouseMove = (e, containerRef) => {
    const bounds = containerRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    setCursorStyle({
      top: y,
      left: x,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setCursorStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="w-full bg-black flex flex-col gap-16 pb-30">
      {/* Heading */}
      <div className="pt-40 flex flex-col gap-8 justify-center items-center">
        <h4 className="text-yellow-400 text-center text-lg">PROJECTS</h4>
        <h1 className="text-white text-6xl text-center w-[70%]">
          Take a glimpse at the events we’ve proudly crafted to perfection
        </h1>
      </div>

      {/* First Image Container */}
      <div className="px-20 w-[80%]">
        <div
          className="w-full h-[75vh] rounded-2xl overflow-hidden relative group cursor-none"
          ref={containerRef1}
          onMouseMove={(e) => handleMouseMove(e, containerRef1)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="followcursor px-5 py-5 absolute z-50 pointer-events-none"
            style={{
              transform: "translate(-50%, -50%)",
              top: cursorStyle.top,
              left: cursorStyle.left,
              opacity: cursorStyle.opacity,
            }}
          >
            <i className="ri-navigation-fill bg-white px-5 py-5 rounded-full text-2xl"></i>
          </div>
          <img
            src="/wedding-bg.avif"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105 group-hover:blur-sm"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between mt-5">
          <h1 className="text-white text-xl">Eternal Elegance Wedding in Tuscany</h1>
          <h1 className="text-white opacity-50 text-lg">Weddings</h1>
        </div>
      </div>

      {/* Second Image Container */}
      <div className="px-20 w-full flex flex-col justify-end items-end">
        <div
          className="w-[59%] h-[60vh] rounded-2xl overflow-hidden relative group cursor-none"
          ref={containerRef2}
          onMouseMove={(e) => handleMouseMove(e, containerRef2)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="followcursor px-5 py-5 absolute z-50 pointer-events-none"
            style={{
              transform: "translate(-50%, -50%)",
              top: cursorStyle.top,
              left: cursorStyle.left,
              opacity: cursorStyle.opacity,
            }}
          >
            <i className="ri-navigation-fill bg-white px-5 py-5 rounded-full text-2xl"></i>
          </div>
          <img
            src="/8.avif"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105 group-hover:blur-sm"
            alt=""
          />
        </div>

        <div className="flex items-center justify-between mt-5 w-full">
          <h1 className="text-white text-lg border-b border-white pb-2">All Projects →</h1>
          <h1 className="text-white text-xl">Vintage Chic 50th Birthday Bash</h1>
          <h1 className="text-white opacity-50 text-lg">Private Parties</h1>
        </div>
      </div>
    </div>
  );
};

export default Page6;
