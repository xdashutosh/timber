import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react';

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