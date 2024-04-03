import React from 'react'
import Hero from './Hero'
import Service from './Service'
import LifeAt from './LifeAt'
import Makers from './Makers'
import { Button } from '@chakra-ui/react'
import ChatButton from './ChatButton'
import Footer from './Footer'

const Home = () => {
  return (
   <>
   <Hero/>
   <Service/>
   <LifeAt/>
   <Makers/>
   <ChatButton />
   <Footer/>

   </>
  )
}

export default Home
