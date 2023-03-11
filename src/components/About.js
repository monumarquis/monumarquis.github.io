import React, { useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Highlight, Box, Text, Flex, Heading, ListItem, Link as MyLink, ListIcon, List } from '@chakra-ui/react'
import "./common.css";
import Image from "../assets/img/About/Image.gif";
import VanillaTilt from 'vanilla-tilt';
import { Link } from "react-scroll";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { HiCheckCircle } from "react-icons/hi"
const bs = {
  border: "1px solid #35B4E2",
  borderRadius: "7%",
  margin: "auto"
}

const options = {
  scale: 1.1,
  speed: 1000,
  max: 30
};

const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="section bg-tertiary pt-10 " id="about"   >
      <Tilt options={options} />
      <Tabs variant='soft-rounded' align="center"  >
        <TabList>
          <Tab _selected={{ color: 'white', bg: 'red.400' }} bg={"#fff"} color={"000"} ml={["3", "3", "5", "7", "10"]} className='boxShadow' _hover={{ bg: '#F08E8B', color: 'white' }} >About</Tab>
          <Tab _selected={{ color: 'white', bg: 'red.400' }} bg={"#fff"} color={"000"} ml={["3", "3", "5", "7", "10"]} className='boxShadow' _hover={{ bg: '#F08E8B', color: 'white' }}>Experience</Tab>
        </TabList>
        <div className="container mx-auto mt-20" data-aos="fade-up" data-aos-duration="2000">
          <div className="flex flex-col xl:flex-row gap-24">
            <img style={bs} className="lg:hidden h-full w-[370px]" src={'https://i.ibb.co/CvgCGgC/Picsart-23-01-06-19-52-24-727.png'} alt={'Monu'} />
            <img
              className=" hidden lg:block object-cover h-full w-[450px] md:mx-auto lg:mx-auto rounded-2xl coderImage"
              src={Image}
              alt="Monu"
            />

            <TabPanels>
              {/* About Panel */}
              <TabPanel>
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
                    <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Contact me</span>
                    </button>
                  </Link>
                </div>
              </TabPanel>
              {/* Experience Panel */}
              <TabPanel>
                <Flex flexDir={"column"} className="boxShadow" w={["100%","100%","600px","600px","500px"]} bg="#fff" py="7" borderRadius={"10"} textAlign={[null,null,null,"left",null]}  >
                  {/* Heading */}
                  <Flex flexDir={["column","column","row","row","row"]} w="90%" margin={"auto"} justifyContent={"space-between"} >
                    <Flex flexDir={"column"}  >
                      <Heading fontSize={"19"} color="red.400"  textAlign={"left"} >Success webtech Pvt Ltd</Heading>
                      <Text color={"#555755"} as='i' textAlign={"left"} fontWeight={"450"} >Full Stack Developer</Text>
                    </Flex>
                    <Flex flexDir={"column"} mt={["5","5",0,0,0]}   >
                      <Text color={"#555755"} textAlign={["left","left",null,null,null]} fontSize={"15"} fontWeight={"500"} >Delhi, Uttam Nagar</Text>
                      <Text color={"#555755"} textAlign={["left","left",null,null,null]} fontSize={"15"} fontWeight={"500"} as='i'>Sep 2022 - Jan 2022 </Text>
                    </Flex>
                  </Flex>
                  {/* Desciption of experience */}
                  <List spacing={3} w="90%" m="auto" mt="5" >
                    <ListItem color={"#717572"} textAlign={"left"} fontSize={"14"} fontWeight={"500"}>
                      <ListIcon as={HiCheckCircle} color='red.400' />
                      Developed and maintained web applications using languages such as HTML, CSS, JavaScript and ReactJS
                    </ListItem>
                    <ListItem color={"#717572"} textAlign={"left"} fontSize={"14"} fontWeight={"500"} >
                      <ListIcon as={HiCheckCircle} color='red.400' />
                      This opportunity has allowed me to apply my knowledge and learn from experienced professionals in the industry
                    </ListItem>
                    <ListItem color={"#717572"} textAlign={"left"} fontSize={"14"} fontWeight={"500"}>
                      <ListIcon as={HiCheckCircle} color='red.400' />
                      Implemented responsive designs
                    </ListItem>
                    <ListItem color={"#717572"} textAlign={"left"} fontSize={"14"} fontWeight={"500"}>
                      <ListIcon as={HiCheckCircle} color='red.400' />
                      Developed successwebtech website <MyLink isExternal={true} color='red.400' href='https://www.successwebtech.com/'>
                      www.successwebtech.com
                      </MyLink> 
                    </ListItem>
                  </List>
                </Flex>
              </TabPanel>
            </TabPanels>


          </div>
        </div>
      </Tabs>
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
    <Text color="#fff" fontWeight='bold' mb="5" mt="15" fontSize={["20","20","30","40","40"]} textAlign={"center"} >
      <Highlight
        query={['About', 'Experience']}
        styles={{ color: 'red.400' }}
      >
        All About Me  & My Experience
      </Highlight>
    </Text>
  </Box>
}
export default About;
