import { HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import sls from "../images/sls.png"
const Footer = () => {
  return (
    <VStack  mt={8}>
    <VStack p={4} w={'full'}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.3937805088426!2d77.50009762468324!3d29.475707545294647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c21ae9d67569b%3A0x814cd97554be65b5!2sSLS%20Memorial%20Public%20School!5e0!3m2!1sen!2sin!4v1709883241222!5m2!1sen!2sin"
      width="100%"
      height="300"
      style={{
        border: "1",
      }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </VStack>
      <Stack direction={['column','row']} w={'full'} p={2} alignItems={'center'} justifyContent={'space-evenly'} bgColor={'#fdba74'}>
        <Image src={sls} h={36} w={36}/>
        <VStack alignItems={'center'}  justifyContent={'center'} >
            <Heading>Address</Heading>
            <Text textAlign={'center'} w={['100%','60%']}>S.L.S Memorial Public School, Budina kalan , Muzaffarnagar (U.P.)</Text>
        </VStack>

        <VStack alignItems={'center'}  justifyContent={'center'}>
            <Heading>Contacts</Heading>
            <Text textAlign={'center'}  ><b>Email:</b>shrilakhi2014@gmail.com</Text>
            <Text textAlign={'center'} ><b>Mobile:</b>+91 - 7037990603</Text>
        </VStack>

        <VStack alignItems={'center'}  justifyContent={'center'}>
            <Heading>Links</Heading>
            <Text  textAlign={'center'}>Addmission process</Text>
            <Text  textAlign={'center'}>Contact Us</Text>
            <Text textAlign={'center'}>About us</Text>
        </VStack>
      </Stack>
      </VStack>
  )
}

export default Footer
