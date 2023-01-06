import { Box, Container, Heading, Stack } from '@chakra-ui/react'
import GitHubCalendar from 'react-github-calendar';

import React from 'react'

const Github = () => {
  return (
  <Container maxW={"100%"} centerContent mb="10">
    <Heading mt='10' mb={5} color='pink.500' fontSize={["20px","25px","30px"]}>My Github Stat's</Heading>
      <Stack direction={["column",'column',"row","row"]} spacing='10px' >
        <Box>
            <img src="https://github-readme-stats.vercel.app/api?username=monumarquis&show_icons=true&locale=en&theme=radical" alt="monumarquis" height="139" />
        </Box>
        <Box>
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=monumarquis&show_icons=true&locale=en&theme=radical" alt="monumarquis" />
        </Box>
      </Stack>
      <Heading mt='10' mb={5} color='pink.500' fontSize={["20px","25px","30px"]}>My Github Calendar</Heading>
     <Box mt={"10"}>
     <GitHubCalendar username="monumarquis" year={'2022'} />
     </Box>
  </Container>
  )
}

export default Github