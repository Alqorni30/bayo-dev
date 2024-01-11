import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const Up = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-5 right-5 bg-gray-800 dark:bg-white rounded-lg cursor-pointer p-2 z-50"
          onClick={scrollToTop}
        >
          <FaChevronUp className="text-2xl text-white dark:text-gray-800" />
        </button>
      )}
    </>
  );
};

export default Up;
