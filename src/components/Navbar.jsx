import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import foto from "../assets/foto.png";
import { FcApproval } from "react-icons/fc";
import { BiSolidHome } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { AiOutlineSolution } from "react-icons/ai";
import { FaIdBadge } from "react-icons/fa";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="bg-gray-800 p-3 border-b-2 sticky top-0 md:hidden ">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex text-white gap-4 font-bold">
              <img
                src={foto}
                alt="foto bayo"
                width={50}
                height={40}
                className=" z-20 border-solid border-2 border-white rounded-full "
              />
              <h5 className="font-semibold flex justify-center items-center gap-2">
                Alqorni Bayo <FcApproval className="text-xl" />
              </h5>
            </div>
            <div className="flex ">
              <DarkModeToggle />

              <button className="text-white" onClick={toggleMenu}>
                {menuOpen ? (
                  /* Menampilkan tombol tutup (X) saat menu terbuka */
                  <AiOutlineClose className="text-2xl" />
                ) : (
                  /* Menampilkan tombol hamburger saat menu tertutup */
                  <RiMenu3Fill className="text-2xl" />
                )}
              </button>
            </div>
          </div>

          {menuOpen && (
            <ul className="lg:hidden flex  flex-col space-y-4 mt-4 text-white ">
              <li className="hover:bg-gray-500 p-2 cursor-pointer rounded">
                <Link to="/" className="flex items-center gap-2">
                  <BiSolidHome /> Home
                </Link>
              </li>
              <li className="hover:bg-gray-500 p-2 cursor-pointer rounded">
                <Link to="/about" className="flex items-center gap-2">
                  <AiOutlineSolution />
                  About
                </Link>
              </li>
              <li className="hover:bg-gray-500 p-2 cursor-pointer rounded">
                <Link to="/projects" className="flex items-center gap-2">
                  <GoProjectSymlink />
                  Project
                </Link>
              </li>
              <button className="mt-2">
                <a
                  href="https://api.whatsapp.com/send?phone=6281234567890&text=Hi%20Vinn"
                  target="_blank"
                  className="flex items-center gap-2 py-3 px-4 text-white text-sm rounded-lg bg-indigo-600 font-semibold hover:bg-indigo-700"
                >
                  Hire Me
                </a>
              </button>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
