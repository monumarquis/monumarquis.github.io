import React, { useState } from 'react';

// import icons
import { XIcon } from '@heroicons/react/outline';
import { MenuAlt3Icon } from '@heroicons/react/outline';

// import navigation data
import { navigation } from '../data';

// import components
import Socials from './Socials';

// import framer
import { motion } from 'framer-motion';

// import Link
import { Link } from 'react-scroll';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className='relative z-100'>
      <div
        onClick={() => setIsOpen(true)}
        className='cursor-pointer text-white z-100'
      >
        <MenuAlt3Icon className='w-8 h-8' />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-tertiary fixed top-0 right-0'
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : ''}
        className={`${isOpen ? 'right-0' : 'right-full'
          } fixed top-10 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 pt-40 mb-10`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className='cursor-pointer absolute top-0 right-5 '
        >
          <XIcon className='w-8 h-8 hover:text-accent' />
        </div>
        {navigation.map((item, idx) => {
          return (
            <li key={idx} className='mb-3'>
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className='text-xl cursor-pointer capitalize hover:text-accent'
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <li className="text-white hover:text-accent text-xl cursor-pointer mb-10" >
          <a href="https://drive.google.com/file/d/18Pxv_xnL2onLThvIK8ofNl5vKKuN1DND/view" target="_blank">Resume</a>
        </li>
        <Socials />
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
