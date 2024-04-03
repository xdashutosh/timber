import { Card, CardBody, HStack, Heading,  Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaBookOpen, FaLightbulb } from 'react-icons/fa'
import { MdOutlineSportsHandball } from "react-icons/md";

const Service = () => {

    const service = [
        "Quailty Education","Exploring Labs","Compititive Sports" 
              ];
            
              const [currentservice, setCurrentservice] = useState(service[0]);
              const [index, setIndex] = useState(0);
            
              useEffect(() => {
                const intervalId = setInterval(() => {
                  setIndex((prevIndex) => (prevIndex + 1) % service.length);
                }, 2000); // Switch image every 2 seconds
            
                return () => clearInterval(intervalId); // Clear interval on component unmount
              }, [service.length]);
            
              useEffect(() => {
                setCurrentservice(service[index]);
              }, [index]);
  return (
   <Stack direction={['column-reverse','row']} alignItems={'center'} my={12} mx={8}>
    <VStack w={'full'}>
        <HStack>
        <Card maxW='xs' borderBottom={'2px solid orange'}>
  <CardBody>
    <Stack mt='6' spacing='3' alignItems={'center'}>
      <FaBookOpen size={48} color='orange'/>
      <Text textAlign={'center'}>
Books expand minds, evoke emotions, and offer endless adventures within pages.
      </Text>
    </Stack>
  </CardBody>
</Card>

<Card maxW='xs' borderBottom={'2px solid orange'}>
  <CardBody>
    <Stack mt='6' spacing='3' alignItems={'center'}>
      <FaLightbulb size={48} color='orange'/>
      <Text textAlign={'center'}>
Ideas ignite innovation, shape perspectives, and propel human progress forward.
      </Text>
    </Stack>
  </CardBody>
</Card>

        </HStack>

        <Card maxW='xs' borderBottom={'2px solid orange'}>
  <CardBody>
    <Stack mt='6' spacing='3' alignItems={'center'}>
      <MdOutlineSportsHandball size={48} color='orange'/>
      <Text textAlign={'center'}>
        
Sports inspire teamwork, foster discipline, and celebrate human achievement and athleticism.

      </Text>
    </Stack>
  </CardBody>
</Card>
    </VStack>
    <VStack justifycontent="center" w="full" h={'full'} alignItems="center"> 
  <Heading fontSize={'lg'} textColor={'orange'}>We Provide?</Heading>
  <Heading>{currentservice}</Heading>
    </VStack>
   </Stack>
  )
}

export default Service