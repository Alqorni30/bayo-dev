import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import "animate.css/animate.min.css";
import { allProject } from "../data";

const CardProject = () => {
  // Balik urutan array allProject
  const reversedProjects = [...allProject].reverse();

  return (
    <>
      <div className="mt-4">
        <h6 className="flex items-center gap-2 font-semibold mb-6">
          <AiOutlineProject className="text-lg" /> Projects
        </h6>
        <div className="flex flex-wrap gap-4 justify-center animate__animated animate__fadeInUp">
          {reversedProjects.map((all) => {
            if (all.image) {
              return (
                <div
                  className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  key={all.title}
                >
                  <div>
                    <img
                      className="rounded-t-lg w-full"
                      src={all.image}
                      alt={all.alt}
                      width={300}
                    />
                  </div>
                  <div className="p-3">
                    <div>
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {all.title}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {all.desc}
                      </p>
                    </div>
                    <div className="flex gap-3 mb-4 p-2 rounded-xl">
                      {all.tech1 && (
                        <img
                          className="bg-slate-200 rounded-lg p-1"
                          src={all.tech1}
                          alt={all.alt1}
                          width="30"
                          height="30"
                        />
                      )}
                      {all.tech2 && (
                        <img
                          className="bg-slate-200 rounded-lg p-1"
                          src={all.tech2}
                          alt={all.alt2}
                          width="30"
                          height="30"
                        />
                      )}
                      {all.tech3 && (
                        <img
                          className="bg-slate-200 rounded-lg p-1"
                          src={all.tech3}
                          alt={all.alt3}
                          width="30"
                          height="30"
                        />
                      )}
                      {all.tech4 && (
                        <img
                          className="bg-slate-200 rounded-lg p-1"
                          src={all.tech4}
                          alt={all.alt4}
                          width="30"
                          height="30"
                        />
                      )}
                    </div>
                    <button>
                      <a
                        href={all.link}
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover-bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                      >
                        {all.preview}
                      </a>
                    </button>
                  </div>
                </div>
              );
            }
            return null; // Jika image tidak ada dalam data, return null untuk menghindari rendering
          })}
        </div>
      </div>
    </>
  );
};

export default CardProject;
