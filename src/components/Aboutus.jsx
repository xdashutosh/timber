import {Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import c1 from '../images/c1.jpeg'


const Aboutus = () => {
  return (
   <VStack mt={['20vh','25vh']} >
    <VStack>
        <Image src={c1} height={['40vh','60vh']} w={'90vw'}/>
    </VStack>
    <VStack p={8} >
    <Image src={'https://gifdb.com/images/high/the-more-you-know-book-z9hnav8reuapmd81.gif'} h={28} w={28}/>

<Text fontSize={'xl'} textAlign={'center'}>SLS Memorial Public School is an esteemed English medium institution committed to nurturing young minds with excellence and integrity. Situated in a serene environment, our school provides a conducive atmosphere for holistic development. With a rich heritage of academic excellence and a progressive approach to education, we empower students to excel in academics, sports, arts, and leadership.

Our dedicated faculty members foster a culture of innovation and critical thinking, encouraging students to explore their potential and pursue their passions. We offer a comprehensive curriculum that integrates modern pedagogy with traditional values, preparing students to navigate the complexities of the modern world with confidence and resilience.

At SLS Memorial Public School, we prioritize individualized attention and personalized learning experiences, ensuring that each student receives the support they need to thrive. We promote inclusivity, diversity, and cultural understanding, fostering a sense of community and belonging among our students.

With state-of-the-art facilities and a commitment to continuous improvement, SLS Memorial Public School is dedicated to shaping responsible global citizens who will make a positive impact on society. Join us on this journey of excellence and discovery.</Text>
    </VStack>
   </VStack>
  )
}

export default Aboutus
