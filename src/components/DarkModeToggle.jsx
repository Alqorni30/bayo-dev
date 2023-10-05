import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Cek local storage saat komponen dimuat
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    // Terapkan dark mode pada elemen <body>
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    
    // Simpan mode ke dalam localStorage
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <div>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-800 hover:bg-gray-600 text-white p-2 rounded-full mr-4 md:mr-0 text-lg md:bottom-2 md:right-4 md:absolute cursor-pointer" 
        >
          {isDarkMode ? <BsFillSunFill/> : <BsFillMoonStarsFill/>}
        </button>
      </div>
    </>
  );
};

export default DarkModeToggle;
