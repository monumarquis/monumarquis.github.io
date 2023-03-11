import React from 'react';

// import icons
import { social } from '../data';

const Socials = () => {
  return (
    <ul className='flex space-x-6 '>
      {social.map((item, index) => {
        return (
          <li
            className='flex justify-center items-center text-red-400 text-2xl hover:text-white hover:bg-red-400 bg-white border-solid p-3 rounded'
            key={index}
          >
            <a className='text-xl' href={item.href} target={"blank"}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
