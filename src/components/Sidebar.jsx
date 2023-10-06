import React from "react";
import foto from "../assets/foto.png";
import { FcApproval } from "react-icons/fc";
import { BiSolidHome } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { AiOutlineSolution } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import FooterSidebar from "./FooterSidebar";
import DarkModeToggle from "./DarkModeToggle";

const Sidebar = () => {
  return (
    <>
      <div className="dark:bg-gray-800 bg-slate-200  h-screen w-64  flex-shrink-0 top-0 sticky hidden md:block">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-b-lg h-[110px] relative z-10">
          <p className="text-center text-base font-semibold text-black p-3">
            Welcome
          </p>
          <DarkModeToggle />
        </div>
        <div className="flex flex-col items-center mt-[-40px] text-black dark:text-white">
          <img
            src={foto}
            alt="foto bayo"
            width={80}
            height={50}
            className=" z-20 border-solid border-2 border-black dark:border-white rounded-full mb-3"
          />
          <h5 className="font-semibold flex justify-center items-center gap-2">
            Alqorni Bayo <FcApproval className="text-xl" />
          </h5>
          <p className="text-sm font-light">@99hal.b</p>
        </div>
        <hr className="mt-6 border-1 border-black dark:border-slate-400" />
        <ul className="p-2 text-black dark:text-white">
          <li className="hover:bg-gray-400 p-2 cursor-pointer rounded">
            <NavLink to="/" className="flex items-center gap-2">
              <BiSolidHome /> Home
            </NavLink>
          </li>
          <li className="hover:bg-gray-400 p-2 cursor-pointer rounded">
            <NavLink to="/projects" className="flex items-center gap-2">
              <GoProjectSymlink />
              Project
            </NavLink>
          </li>
          <li className="hover:bg-gray-400 p-2 cursor-pointer rounded">
            <NavLink to="/about" className="flex items-center gap-2">
              <AiOutlineSolution />
              About
            </NavLink>
          </li>
          <button className="mt-3">
            <a
              href="https://api.whatsapp.com/send?phone=6281234567890&text=Hi%20Vinn"
              target="_blank"
              className="flex items-center gap-2 py-3 px-4 text-white text-sm rounded-lg bg-indigo-600 font-semibold hover:bg-indigo-700"
            >
              Hire Me
            </a>
          </button>
        </ul>
        <hr className="mt-2 border-1 border-black dark:border-slate-400" />
        <FooterSidebar />
        <div className="text-black dark:text-white">
          <hr className="mt-4 border-1 border-black hidden md:block dark:border-slate-400" />
          <p className="mt-5 text-center text-sm hidden md:block">
            &copy; 2023 Copyright By <strong> Alqorni Bayo</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
