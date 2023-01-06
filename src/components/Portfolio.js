import React, { useEffect } from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
 
  return (
    <section id='portfolio' className=' section bg-white min-h-[1400px]'  >
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className=' bg-primary p-10 w-2xl section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My Top Projects
          </h2>
          <p className='subtitle '>
           Have a look in  my top projects 
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
