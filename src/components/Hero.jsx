import { Button, Card, CardBody, CardFooter, Flex, HStack, Heading, Image, Stack, Tag, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react';
import { FaPhone, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {

    const images = [
'https://mpghardware.com/img/s4.jpg','https://mpghardware.com/img/s1.jpg','https://mpghardware.com/img/s3.jpg','https://img.staticmb.com/mbcontent/images/crop/uploads/2023/1/kitchen-design-ideas_0_1200.jpg'
      ];
    
      const [currentImage, setCurrentImage] = useState(images[0]);
      const [index, setIndex] = useState(0);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Switch image every 2 seconds
    
        return () => clearInterval(intervalId); // Clear interval on component unmount
      }, [images.length]);
    
      useEffect(() => {
        setCurrentImage(images[index]);
      }, [index]);
    

  return (
    <section>

    <Card m={['2','8']}
    
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    shadow={'lg'}
    h={['100%','100%']}
    boxSizing='border-box'
    mt={['30vh','25vh']}

    
    >
    <Image
      objectFit='cover'
      minW={{ base: '100%', sm: '60vw' }}
      minH={{ base: '30vh', sm: '50vh' }}
      src={currentImage}
      alt='Caffe Latte'
      rounded={'lg'}
      
      />
    <Stack>
  <aside>
      <CardBody>
        <Heading size={'lg'} className='heroHeading'>
          Shree Ram Timbers & Paints
          </Heading>

        <Text py='4'>
        <Text display={'inline'} textColor={'orange'}><b>ShreeRam Timbers </b>&nbsp;</Text> 
        Shree Ram Timbers and Paints offers premium quality timber products and a vast selection of paints for your home and commercial needs. With expert advice, reliable service, and competitive prices, we're your trusted partner for all your construction and renovation projects. Experience excellence with us.
        </Text>
        <Flex wrap={'wrap'} gap={4}>
        <Tag size="md" variant="subtle" colorScheme="gray">
        Laminates
    </Tag>

    <Tag size="md" variant="subtle" colorScheme="gray">
    Mdf board
    </Tag>
      
    <Tag size="md" variant="subtle" colorScheme="gray">
        Plywood/Blockboard
      </Tag>
      <Tag size="md" variant="subtle" colorScheme="gray">
        Shuttering Plywood
      </Tag>
      <Tag size="md" variant="subtle" colorScheme="gray">
        Timber Wood
      </Tag>
      <Tag size="md" variant="subtle" colorScheme="gray">
        Packaging Plywood
      </Tag>
      <Tag size="md" variant="subtle" colorScheme="gray">
        Furniture Hardware
      </Tag>

        </Flex>
        <Button variant={'outline'} mt={4} >
          <a href='https://maps.app.goo.gl/y7dvjCJmA3i7MgXc9' target="_blank">
          📍 Echotech3, Habibpur, Greater Noida
          </a>
        </Button>
      </CardBody>
  </aside>
  
      <CardFooter>
        <VStack>

        <Button variant='solid' colorScheme='orange'>
          <Link to='/contact'>
          ENQUIRE NOW
          </Link>
        </Button>

       <HStack>
        <FaUser/>
       <Text fontWeight={'bolder'}>NEERAJ GARG, SUBH GARG</Text>
        </HStack>
        <HStack>
          <FaPhone/>
        <Text fontWeight={'bolder'}>8826363310, 8800464310</Text>
          </HStack> 
      
        </VStack>
      </CardFooter>
    </Stack>
  </Card>
      </section>
  )
}

export default Hero