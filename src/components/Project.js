import React from 'react';
import '.././App.css'
const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center  bg-white rounded-2xl card mb-20 ' >
      
      <div className='mb-8 box-content h-200 w-200  '>
        <img className='rounded-2xl h-200 w-200' src={item.image} alt='' />
      </div>
      <p className='capitalize text-tertiary text-sm mb-3 font-semibold'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3 text-secondary '>{item.name}</h3>
      <p className='text-secondary max-w-md '>
    {item.desc}
      </p>
      <div className='flex flex-coloumn items-center text-center  mt-10'>
     
     <a href={item.source} target="_blank"  className="rounded-xl relative mr-5 rounded px-5 py-2.5 overflow-hidden group bg-yellow-500 relative hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition-all ease-out duration-300">
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative">Source Code</span>
       </a>
     <a href={item.live} target="_blank" className=" rounded-xl relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative color-white">Live Demo</span>
       </a>
       
      </div>
    </div>
  );
};

export default Project;
