import React, { useEffect, useRef } from "react";

const LocomotiveScrollProvider = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Wait for locomotive scroll script to load
    if (!window.LocomotiveScroll) return;

    const scroll = new window.LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1, // scroll speed multiplier; adjust as needed
    });

    // Cleanup on unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    // The scroll container must have this attribute for Locomotive to work
    <div data-scroll-container ref={containerRef} style={{ overflow: "hidden" }}>
      {children}
    </div>
  );
};

export default LocomotiveScrollProvider;
