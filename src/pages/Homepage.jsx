import React from "react";
import Sidebar from "../components/Sidebar";
import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Homepage = () => {
  return (
    <>
      <Navbar/>
      <div className="flex">
          <Sidebar />
          <div className="flex-1 ">
            <HomeContent />
            <Footer/>
          </div>
      </div>
    </>
  );
};

export default Homepage;
