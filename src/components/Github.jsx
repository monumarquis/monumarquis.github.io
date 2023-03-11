import { Box, Container, Flex, Highlight, Stack, Text } from '@chakra-ui/react'
import GitHubCalendar from 'react-github-calendar';
import AOS from 'aos'
import VanillaTilt from 'vanilla-tilt';
import 'aos/dist/aos.css'
import React from 'react'
import { useEffect } from 'react';

const Github = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const options = {
    scale: 1.1,
    speed: 1000,
    max: 30
  };

  return (
    <Container maxW={"100%"} mb="10" data-aos="fade-up" data-aos-duration="1600" id="github" centerContent >
      <Tilt1 options={options} />
      <Stack direction={["column", 'column', "row", "row"]} spacing='20px' justifyContent={"center"} >
        <Tilt options={options} url="https://github-readme-stats.vercel.app/api?username=monumarquis&show_icons=true&locale=en&theme=radical" />
        <Tilt options={options} url="https://github-readme-streak-stats.herokuapp.com/?user=monumarquis&show_icons=true&locale=en&theme=radical" />
      </Stack>
      <Tilt2 options={options} />
      <Tilt3 options={options} />

    </Container>
  )
}

function Tilt3(props) {
  const { options } = props;
  const tilt = React.useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <Flex ref={tilt} w={["90%", "90%", "70%", "70%", "67%"]} m="auto" textAlign="center" >
    <GitHubCalendar username="monumarquis" color="red" transformTotalCount={false} />
  </Flex>
}

function Tilt(props) {
  const { options, url } = props;
  const tilt = React.useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt}>
    <img src={url} alt="monumarquis" />
  </div>;
}

function Tilt1(props) {
  const { options } = props;
  const tilt = React.useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <Box w={"50%"} ref={tilt} m="auto" >
    <Text color="#000" fontWeight='bold' mb="20" mt="15" fontSize={["25", "25", "25", "35", "40"]} textAlign={"center"} >
      <Highlight
        query={'Github'}
        styles={{ color: 'red.400' }}
      >
        My Github Stat's
      </Highlight>
    </Text>
  </Box>
}
function Tilt2(props) {
  const { options } = props;
  const tilt = React.useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <Box w={"50%"} ref={tilt} m="auto" mt="10" >
    <Text color="#000" fontWeight='bold' mb="10" mt="15" fontSize={["25", "25", "25", "35", "40"]} textAlign={"center"} >
      <Highlight
        query={'Github'}
        styles={{ color: 'red.400' }}
      >
        My Github Calendar
      </Highlight>
    </Text>
  </Box>
}
export default Github