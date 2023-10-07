import React from "react";
import CardProject from "./CardProject";


const Projectcontent = () => {
  return (
    <>
      <div className="p-8 bg-slate-100 w-full min-h-screen dark:bg-gray-700">
        <div className="container dark:text-white">
          <h1 className="font-bold text-2xl text-center md:text-4xl mb-2">
            My Projects
          </h1>
          <p className="text-center">
            Showcasing several projects that I created while I was studying in
            the field of web development.
          </p>
          <hr className="mt-4 border-1 border-black dark:border-slate-400" />
          <CardProject />
        </div>
      </div>
    </>
  );
};

export default Projectcontent;
