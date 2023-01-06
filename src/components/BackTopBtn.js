import React, { useState, useEffect } from 'react';

// import link
import { Link, animateScroll as scroll } from 'react-scroll';
// import icon
import { BsHandIndexThumb } from 'react-icons/bs'

const BackTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  {
    return (
      show && (
        <div>
           <button
          onClick={() => scrollToTop()}
          className=' animate-bounce  bg-accent lk hover:bg-accent-hover text-white w-12 h-12 rounded-full fixed right-24 bottom-24 cursor-pointer flex justify-center items-center transition-all '
        >
          <BsHandIndexThumb className='w-6 h-6' />
        </button>
        </div>
      )
    );
  }
};

export default BackTopBtn;
