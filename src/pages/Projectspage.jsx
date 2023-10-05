import React from "react";
import Projectcontent from "../components/Projectcontent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ">
          <Projectcontent />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Projects;
