import React from "react";
import "./common.css";
import "aos/dist/aos.css";
import Type from "./Type";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[110vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-20">
          <div className="flex-1 flex flex-col items-center lg:items-start scale-up-center ">
            <Type/>
            {/* <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              
            </p > */}
                <a  href="https://drive.google.com/uc?export=download&id=18Pxv_xnL2onLThvIK8ofNl5vKKuN1DND" target={"blank"} className="relative inline-flex bg-white items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative">Download Resume</span>
           </a>
          </div>
          <div className="hidden sm:flex flex-1 justify-end items-end max-w-lg">
            <img className="slide-up-center imageMonu rounded-full mb-10  bg-white " src={"https://i.ibb.co/CvgCGgC/Picsart-23-01-06-19-52-24-727.png"} alt="Monu" />
            {/* <MyProfile /> */}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
