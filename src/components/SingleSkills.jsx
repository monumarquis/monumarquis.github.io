import { Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const SingleSkills = ({ image, skill }) => {
const [hover,setHover] = useState(false)
    function MouseOver() {
        setHover(true)
    }
    function MouseOut() {
        setHover(false)
    }

    return (
        <Flex onMouseOver={MouseOver} borderRadius={"5"} onMouseOut={MouseOut} className={hover ?'boxShadow':'boxShadow1'} pt="5" pb="2" flexDir={"column"} h="180px" alignItems={"center"} justifyContent={"center"}   >
            <Image width={"75%"} height={"70%"} src={image} alt={skill} />
            <Text fontWeight={"500"} mt="3" >{skill}</Text>
        </Flex>
    )
}

export default SingleSkills