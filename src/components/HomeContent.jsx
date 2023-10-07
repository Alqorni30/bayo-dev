import React from "react";
import { BsDownload } from "react-icons/bs";
import Skills from "./Skills";
import cv from "../assets/Cv/AlqorniCV.pdf";
import FooterSidebar from "./FooterSidebar";
import "animate.css/animate.min.css";
import CardLastProject from "./CardLastProject";
import { AiOutlineProject } from "react-icons/ai";

const HomeContent = () => {
  return (
    <>
      <div className="p-8 bg-slate-100  w-full min-h-screen dark:bg-gray-700 dark:text-white ">
        <div className="container ">
          <h1 className="font-bold text-3xl md:text-4xl mb-2 animate__animated animate__fadeInUp">
            Hi There 👋, I'm Alqorni🤝
          </h1>
          <p className="font-semibold mb-4 animate__animated animate__fadeInUp">
            Junior Frontend Web Developer
          </p>
          <FooterSidebar />
          <p className="w-full leading-6 mb-4 text-gray-700 dark:text-gray-400">
            I am a Junior Frontend Web Developer who has a passion for Web
            Development, one of my life mottos is "Don't rush the process, trust
            that great things take time" which means don't rush the process,
            believe that great things take time.
          </p>
          <button>
            <a
              href={cv}
              target="_blank"
              className="flex items-center gap-2 py-3 px-4 text-white text-sm rounded-lg bg-indigo-600 font-semibold hover:bg-indigo-700"
            >
              <BsDownload />
              Download CV
            </a>
          </button>
        </div>
        <hr className="mt-4 border-1 border-black dark:border-slate-400" />
        <Skills />
        <div className="mt-4">
          <h6 className="flex items-center gap-2 font-semibold mb-6">
            <AiOutlineProject className="text-lg" /> Lattest Projects
          </h6>
          <div className="flex flex-wrap gap-4 justify-center animate__animated animate__fadeInUp">
            <CardLastProject/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
