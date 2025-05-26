import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export const useLocomotiveScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.2, // adjust scroll speed
      lerp: 0.1,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return scrollRef;
};
