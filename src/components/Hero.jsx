import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react';
import c1 from '../images/c1.jpeg'
import c3 from '../images/c3.jpeg'
import c4 from '../images/c4.jpeg'
import c6 from '../images/c6.jpeg'
const Hero = () => {

    const images = [
c1,c3,c4,c6
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
    mt={['20vh','25vh']}

    
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
          S.L.S Memorial Public School
          </Heading>

        <Text py='4'>
        <Text display={'inline'} textColor={'orange'}><b>S.L.S</b>&nbsp;</Text> 
An english medium school, catering to students, provides a holistic education framework aligned with the  Education curriculum. Emphasizing academic excellence, it fosters intellectual, social, and emotional growth. With a learner-centric approach, the school offers a diverse range of subjects and co-curricular activities to ensure a well-rounded development. Qualified faculty members employ innovative teaching methodologies to facilitate comprehensive learning experiences. The school's supportive environment encourages curiosity, critical thinking, and ethical values, nurturing students to become responsible global citizens.
        </Text>
        <Heading size={'sm'}>
        Clean Enviroment ,Healthy Food, Simple Registration.
        </Heading>
        <Heading color={'gray'} size={'xs'} mt={4} w={'30%'}>
        Near Dholra Bus Stand, Budina kalan, Muzaffarnagar
        </Heading>
      </CardBody>
  </aside>
  
      <CardFooter>
        <Button variant='solid' colorScheme='orange'>
          Addmission Now
        </Button>
      </CardFooter>
    </Stack>
  </Card>
      </section>
  )
}

export default Hero