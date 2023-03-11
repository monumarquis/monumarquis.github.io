import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
// import components
import Projects from './Projects';
import VanillaTilt from 'vanilla-tilt';
import { Box, Highlight, Text } from '@chakra-ui/react';
const options = {
  scale: 1.1,
  speed: 1000,
  max: 30
};

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id='portfolio' className=' section bg-white min-h-[1400px]'  >
      <div className='container mx-auto' data-aos="fade-up" data-aos-duration="1600">
        <div className='flex flex-col items-center text-center'>
          <Tilt options={options} />
        </div>
        <Projects />
      </div>
    </section>
  );
};


function Tilt(props) {
  const { options } = props;
  const tilt = React.useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <Box w={"50%"} ref={tilt} m="auto" >
    <Text color="#000" fontWeight='bold' mb="20" mt="15" fontSize={["25","25","40","40","40"]} textAlign={"center"} >
      <Highlight
        query={['My', 'Projects']}
        styles={{ color: 'red.400' }}
      >
        My Top Projects
      </Highlight>
    </Text>
  </Box>
}
export default Portfolio;
