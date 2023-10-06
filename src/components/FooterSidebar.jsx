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
            <a href="https://github.com/Alqorni30" target="_blank"><AiOutlineGithub className="mr-4"/></a>
            <a href="https://www.linkedin.com/in/hervinsa-alqorni-472b89252" target="_blank"><AiFillLinkedin className="mr-4"/></a>
            <a href="https://instagram.com/99hal.b?igshid=MzRlODBiNWFlZA==" target="_blank"><AiOutlineInstagram className="mr-4"/></a>
            <a href="https://www.tiktok.com/@_99hal.b" target="_blank"><RiTiktokFill className="mr-4"/></a>
            <a href="mailto:vinnbayo@gmail.com" target="_blank"><AiOutlineMail className="mr-4"/></a>
        </div>
      </div>
    </>
  );
};

export default FooterSidebar;
