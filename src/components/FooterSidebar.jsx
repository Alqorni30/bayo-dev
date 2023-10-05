import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTiktokFill} from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";


const FooterSidebar = () => {
  return (
    <>
      <div className="md:mt-4 my-3 md:p-2 text-black dark:text-white">
        <p className="mb-4 hidden md:block">Let`s Connect</p>
        <div className="flex text-2xl">
            <a href="https://hervinsa.github.io/"><AiOutlineGithub className="mr-4"/></a>
            <a href="https://www.linkedin.com/in/hervinsa-alqorni-472b89252"><AiFillLinkedin className="mr-4"/></a>
            <a href="https://instagram.com/99hal.b?igshid=MzRlODBiNWFlZA=="><AiOutlineInstagram className="mr-4"/></a>
            <a href="tiktok.com/@_99hal.b"><RiTiktokFill className="mr-4"/></a>
            <a href="vinnbayo@gmail.com"><AiOutlineMail className="mr-4"/></a>
        </div>
      </div>
    </>
  );
};

export default FooterSidebar;
