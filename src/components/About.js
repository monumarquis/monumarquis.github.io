import React, { useEffect } from "react";
import "./common.css";
// import img
import Image from "../assets/img/About/Image.gif";
import { Link } from "react-scroll";
// import Monu from "../assets/img/Monu.png"
import AOS from 'aos'
import 'aos/dist/aos.css'
const bs = {
  border:"1px solid #35B4E2",
  borderRadius:"7%",
  margin:"auto"
}
// import Image from '../assets/img/about.webp';
// const Image = 'https://images.squarespace-cdn.com/content/v1/5769fc401b631bab1addb2ab/1541580611624-TE64QGKRJG8SWAIUS7NS/coding-freak.gif'
const About = () => {
  return (
    <section className="section bg-tertiary" id="about" >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img style={bs} className="lg:hidden h-full w-[370px]" src={'https://i.ibb.co/CvgCGgC/Picsart-23-01-06-19-52-24-727.png'} alt={'Monu'}/>
          <img
            className=" hidden lg:block object-cover h-full w-[450px] md:mx-auto lg:mx-0 rounded-2xl coderImage"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
               Monu Yadav
              </h2>
              <p className="mb-4 text-accent font-semibold papa"><span>Full-Stack</span> Web <span>Developer</span></p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
              Full-Stack Web Developer with the ability to learn and collaborate in rapidly changing environments and compositions. Worked through 1000+ hours of Bootcamp structure learning JavaScript, Node.Js, React.Js, MongoDB, Express, HTML5, and CSS3. <br />
                <br />
                I'm deep into the Web Development & looking forward to upgrade
                my skills in a challenging work environment.
              </p>
            </div>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="transition-all duration-300"
              to={"contact"}
            >
              <button  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Contact me</span>
             </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
