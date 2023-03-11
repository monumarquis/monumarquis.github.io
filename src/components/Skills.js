import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import VanillaTilt from 'vanilla-tilt';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Highlight, Text, SimpleGrid, Box } from '@chakra-ui/react'
import { FrontendSkills, BackendSkills, AllSkills } from '../data';
import { useEffect } from 'react';
import SingleSkills from './SingleSkills';
const options = {
  scale: 1.1,
  speed: 1000,
  max: 30
};

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="skills" className='bg-["#fff"] py-12' >
      <Tilt options={options} />
      <div className='container mx-auto' data-aos="fade-up" data-aos-duration="1600">
        <Tabs variant='soft-rounded' align='center' >
          {/* All Tabs Navigation */}
          <TabList mb="5" >
            <Tab _selected={{ color: 'white', bg: 'red.400' }} ml={["3", "3", "5", "7", "10"]} className='boxShadow' _hover={{ color: 'white', bg: 'red.400' }} >All</Tab>
            <Tab _selected={{ color: 'white', bg: 'red.400' }} ml={["3", "3", "5", "7", "10"]} className='boxShadow' _hover={{ color: 'white', bg: 'red.400' }}>Frontend</Tab>
            <Tab _selected={{ color: 'white', bg: 'red.400' }} ml={["3", "3", "5", "7", "10"]} className='boxShadow' _hover={{ color: 'white', bg: 'red.400' }}>Backend</Tab>
          </TabList>

          {/* All tabs Show */}

          <TabPanels>
            {/* All Skills */}
            <TabPanel>
              <SimpleGrid columns={[2, 2, 4, 5, 6, 7]} spacing={10}>
                {
                  AllSkills.map((el) => <SingleSkills skill={el.skill} image={el.image} />)
                }

              </SimpleGrid>
            </TabPanel>
            {/* Frontend SKills */}
            <TabPanel>
              <SimpleGrid columns={[2, 3, 4, 5, 6, 7]} spacing={10}>
                {
                  FrontendSkills.map((el) => <SingleSkills skill={el.skill} image={el.image} />)
                }

              </SimpleGrid>
            </TabPanel>
            {/* Backend Skills */}
            <TabPanel>
              <SimpleGrid columns={[2, 2, 4, 5, 6, 7]} spacing={10}>
                {
                  BackendSkills.map((el) => <SingleSkills skill={el.skill} image={el.image} />)
                }

              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
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
    <Text fontWeight='bold' mb="5" mt="15" fontSize={"40"} textAlign={"center"} >
      <Highlight  query='Skills' styles={{ color: "red.400" }}  >
        My  Skills
      </Highlight>
    </Text></Box>
}
export default Skills;
