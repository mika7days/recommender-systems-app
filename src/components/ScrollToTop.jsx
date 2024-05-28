import React, { useState, useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`text-[#EF720A] fixed text-[43px] right-[45%] top-4 lg:top-3 z-10 lg:text-5xl transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 -z-10"
      }`}
    >
      <BsArrowUpCircleFill onClick={handleClick} className="cursor-pointer" />
    </div>
  );
};

export default ScrollToTop;
