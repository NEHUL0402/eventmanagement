import React, { useEffect, useState } from "react";
const sectionStyles = {
  section1: {
    textColor: "text-white",
    linkColor: "text-slate-100",
    bgColor: "bg-transparent",
  },
  section2: {
    textColor: "text-black",
    linkColor: "text-black",
    bgColor: "bg-white/30 backdrop-blur-md",
  },
  section3: {
    textColor: "text-black",
    linkColor: "text-black",
    bgColor: "bg-[#f7f7f7]",
  },
  section4: {
    textColor: "text-white",
    linkColor: "text-white",
    bgColor: "bg-none",
  },
  section5: {
    textColor: "text-black",
    linkColor: "text-slate-600",
    bgColor: "bg-[#f7f7f7]",
  },
  section6: {
    textColor: "text-black",
    linkColor: "text-black",
    bgColor: "bg-orange-100",
  },
  section7: {
    textColor: "text-white",
    linkColor: "text-white",
    bgColor: "bg-gray-800",
  },
  section8: {
    textColor: "text-white",
    linkColor: "text-slate-200",
    bgColor: "bg-transparent",
  },
};

const Navbar = () => {

    const [activeSection, setActiveSection] = useState("section1");

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            const visibleSections = entries
              .filter((entry) => entry.isIntersecting)
              .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      
            if (visibleSections.length > 0) {
              setActiveSection(visibleSections[0].target.id);
            }
          },
          {
            root: null,
            rootMargin: "0px 0px -50% 0px", // prioritize top 50% of viewport
            threshold: 0.2,
          }
        );
      
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));
      
        return () => {
          sections.forEach((section) => observer.unobserve(section));
        };
      }, []);
      
    
      const isBlurredSection = [
        "section2",
        "section3",
        "section4",
        "section5",
        "section6",
        "section7",
      ].includes(activeSection);

  return (
    <div
      className={`navbar flex justify-between items-center px-20 py-5 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isBlurredSection ? "bg-white/30 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <h1
        className={`text-2xl tracking-wide drop-shadow-lg ${
          isBlurredSection ? "text-black" : "text-white"
        }`}
      >
        Planza ℗
      </h1>
      <div className="links flex gap-10 opacity-80">
        {["Events", "Projects", "Pricing", "Contacts"].map((item, i) => (
          <h3
            key={i}
            className={`text-md cursor-pointer transition-colors ${
              isBlurredSection ? "text-black" : "text-white"
            }`}
          >
            {item}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
