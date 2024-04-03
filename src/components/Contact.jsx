import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  HStack,
  Heading,
  Text,
  Stack
} from "@chakra-ui/react";

const Contact = () => {
 const [name,setname] = useState(null);
 const [phone,setphone] = useState(null);
 const [email,setemail] = useState(null);
const [msg,setmsg] = useState(null);
 
  const  handleSubmit = () => {
    // Replace '123456789' with the recipient's phone number
    const phoneNumber = '8800464310';

    // Replace 'Hello, how can I help you?' with your desired message
    
   
const senddata = `hello! I am ${name}\n and ${msg} Contact me on \n ${phone}\n ${email} `;

// Construct the WhatsApp API URL

const whatsappBaseUrl = 'https://api.whatsapp.com/send';
    
   
const encodedMessage = encodeURIComponent(senddata);
    const whatsappUrl = `${whatsappBaseUrl}?phone=${phoneNumber}&text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.location.href = whatsappUrl;

  
  }





  return (
    <VStack w={'full'} m={4} alignItems={'center'} bgImage={''} mt={['25vh','20vh']}>
        <VStack my={4}>
        <Heading letterSpacing={'widest'}>Contact Shree Ram TIMBER & Paints</Heading>
        <Text fontSize={'xl'} w={'50%'} textAlign="center">Incepted in the year 2012, Shree Ram Timber & Paints is a leading Wholesale Trader of Wooden Plywood, Teak Wood, Plywood Boards, Wooden Flush Doors, etc. We work with a customer’s approach and focus on satisfying our clients by providing them with effective solutions. Our superior quality products are made with quality material. With our advanced production techniques, we meet the ever increasing needs of clients in this industry.

</Text>
        </VStack>
<VStack alignItems={'start'}> 
    <Stack direction={['column','row']}>
     <Input type="text" placeholder='Your name..' value={name} onChange={(e)=>setname(e.target.value)} />
     <Input type='email'  placeholder='Your email..' value={email} onChange={(e)=>setemail(e.target.value)} />
     <Input type='number'  placeholder='Your phone number' value={phone} onChange={(e)=>setphone(e.target.value)}/>
    </Stack>

    <FormLabel>Message</FormLabel>
    <Textarea placeholder='write your message...'  size='lg' value={msg} onChange={(e)=>setmsg(e.target.value)}/>
    <Button variant="solid" colorScheme='orange' onClick={handleSubmit} px={4}>Send</Button>
</VStack>
    </VStack>
  );
};

export default Contact;
