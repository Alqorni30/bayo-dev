import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Aboutcontent from '../components/Aboutcontent';

const Aboutpage = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ">
          <Aboutcontent />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Aboutpage