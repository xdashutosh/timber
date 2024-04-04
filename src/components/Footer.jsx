import { HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import sls from "../images/sls.png"
const Footer = () => {
  return (
    <VStack  mt={8}>
    <VStack p={4} w={'full'}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2770393286055!2d77.4499354!3d28.531391499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce941cd58935f%3A0xe7fc6fdcd86eaf8e!2sShri%20ram%20timber%20and%20paints-%20Plywood%20dealer%20in%20greater%20noida!5e0!3m2!1sen!2sin!4v1712176317821!5m2!1sen!2sin"
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
      <Stack direction={['column','row']} textColor={'white'} w={'full'} p={4} alignItems={'center'} justifyContent={'space-around'} backgroundImage={'https://img.freepik.com/premium-photo/black-wooden-texture-backgrounds-graphic-design-digital-art-parquet-wallpaper-soft-blur_41691-6280.jpg'}>
     {/* <Heading p={4}>Shri Ram Timber&Paints </Heading> */}
        <VStack alignItems={'center'}  justifyContent={'center'} >
            <Heading>ShriRam Timbers</Heading>
            <Text textAlign={'center'} w={['100%','60%']}>📍 Habibpur near Suthyana Bus Stop, Greater Noida </Text>
        </VStack>

        <VStack alignItems={'center'}  justifyContent={'center'}>
            <Heading>Contacts</Heading>
            <Text textAlign={'center'}  ><b>📨</b>gargneeraj2ga@gmail.com</Text>
            <Text textAlign={'center'} ><b>📞</b>8800464310, 8826363310</Text>
        </VStack>

        <VStack alignItems={'center'}  justifyContent={'center'}>
            <Heading fontSize={'xl'}>Mode of payment</Heading>
            <Text  textAlign={'center'}>Cash</Text>
            <Text  textAlign={'center'}>Cheques</Text>
            <Text textAlign={'center'}>Credit Card</Text>
            <Text textAlign={'center'}>Visa Card</Text>
        </VStack>
      </Stack>
      </VStack>
  )
}

export default Footer
