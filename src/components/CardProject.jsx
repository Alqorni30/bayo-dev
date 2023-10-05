import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import course from "../assets/projects/Course.png";
import bimbel from "../assets/projects/Bimbel.png";
import umkm from "../assets/projects/Umkm.png";
import gallery from "../assets/projects/gallery.png";
import nft from "../assets/projects/Nft.png";
import portofolio from "../assets/projects/portofolio.png";
import movie from "../assets/projects/movie.png";
import 'animate.css/animate.min.css';


const CardProject = (props) => {


  return (
    <>
      <div className="mt-4">
        <h6 className="flex items-center gap-2 font-semibold mb-6">
          <AiOutlineProject className="text-lg"/> {props.tittle}
        </h6>
        <div className="flex flex-wrap gap-4 justify-center animate__animated animate__fadeInUp">
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://web-course-reactvitejs.netlify.app//" target="_blank">
              <img className="rounded-t-lg w-full" src={course} alt="Course" width={300}/>
            </a>
            <div className="p-3">
              <a href="https://web-course-reactvitejs.netlify.app//" target="_blank">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Course online
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Tersedia kelas online untuk upgrade skillmu!!
              </p>
              <a
                href="https://web-course-reactvitejs.netlify.app//" target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Demo
                
              </a>
            </div>
          </div>
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://bimbel-all-className.vercel.app/" target="_blank">
              <img className="rounded-t-lg w-full" src={bimbel} alt="Bimbel" width={300}/>
            </a>
            <div className="p-3">
              <a href="https://bimbel-all-className.vercel.app/" target="_blank">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Bimbel AllclassName
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Bimbingan Belajar untuk SD,SMP,SMA, dan Gapyear
              </p>
              <a
                href="https://bimbel-all-className.vercel.app/" target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Demo
                
              </a>
            </div>
          </div>
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://bayocrisypy.netlify.app/" target="_blank">
              <img className="rounded-t-lg w-full" src={umkm} alt="Umkm" width={300} />
            </a>
            <div className="p-3">
              <a href="https://bayocrisypy.netlify.app/" target="_blank">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Crispy.id
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Pesan cemilan favoritmu diwebsite ini
              </p>
              <a
                href="https://bayocrisypy.netlify.app/" target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Demo
                
              </a>
            </div>
          </div>
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href=" https://alqorni30.github.io/landingpage-Tailwindcss/" target="_blank">
              <img className="rounded-t-lg w-full" src={nft} alt="Umkm" width={300} />
            </a>
            <div className="p-3">
              <a href=" https://alqorni30.github.io/landingpage-Tailwindcss/" target="_blank">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Tweak AI
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Company Profile memamerkan Bermacam-macam NFT
              </p>
              <a
                href=" https://alqorni30.github.io/landingpage-Tailwindcss/" target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Demo
                
              </a>
            </div>
          </div>
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://portfolio-alqorni.vercel.app/" target="_blank">
              <img className="rounded-t-lg w-full" src={portofolio} alt="portofolio" width={300} />
            </a>
            <div className="p-3">
              <a href="https://portfolio-alqorni.vercel.app/" target="_blank">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Portofolio
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Personal website Portofolio with tailwind css.
              </p>
              <a
                href="https://portfolio-alqorni.vercel.app/" target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Demo
                
              </a>
            </div>
          </div>
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://gallery-bayo.vercel.app/" target="_blank">
              <img className="rounded-t-lg w-full" src={gallery} alt="gallery" width={300} />
            </a>
            <div className="p-3">
              <a href="https://gallery-bayo.vercel.app/" target="_blank">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Gallery
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Gallery with Html, CSS , and Javascript.
              </p>
              <a
                href="https://gallery-bayo.vercel.app/" target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Demo
                
              </a>
            </div>
          </div>
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://bayocrisypy.netlify.app/" target="_blank">
              <img className="rounded-t-lg w-full" src={movie} alt="movie" width={300} />
            </a>
            <div className="p-3">
              <a href="https://bayocrisypy.netlify.app/" target="_blank">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Bayo film
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Slicing Web Movie with React js.
              </p>
              <a
                href="https://bayocrisypy.netlify.app/" target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Demo
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProject;
