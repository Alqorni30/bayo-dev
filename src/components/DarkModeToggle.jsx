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
          className="bg-gray-800 hover:bg-gray-600 text-white p-2 rounded-full mr-4 lg:mr-0 text-lg lg:bottom-2 lg:right-4 lg:absolute cursor-pointer" 
        >
          {isDarkMode ? <BsFillSunFill/> : <BsFillMoonStarsFill/>}
        </button>
      </div>
    </>
  );
};

export default DarkModeToggle;
