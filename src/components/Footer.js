import React from 'react';

// import social data
import { social } from '../data';

// import logo
import Logo from '../assets/img/Logo.png';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12 nana'>
             <div className='waves'>
                <div className='wave' id='wave1'></div>
                <div className='wave' id='wave2'></div>
                <div className='wave' id='wave3'></div>
                <div className='wave' id='wave4'></div>
             </div>
     
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
          <a  href="#">
          <img  src={Logo} alt="Logo" style={{"width":"60px"}} />
           </a>
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; 2022 Monu Yadav | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

