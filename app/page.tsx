"use client"

import Scaffold from '@/components/Scaffold'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";


export default function Home() {
  return (
    <Scaffold>
      {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
      <div className="text-center lg:w-2/3 w-full">
        <motion.h1 initial={{opacity: 0, y:20}} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.8 }} className='text-8xl font-semibold mb-6'>Blockbase</motion.h1>
        <motion.h2 initial={{opacity: 0, y:20}} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.8, delay: 0.4 }} className='text-4xl '>Secure E-Vault for all your needs.</motion.h2>            <div className="flex justify-center">
        
        <motion.div initial={{opacity: 0, y:20}} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.8, delay: 0.6 }} className='mt-8'>
          <Button className='mx-2'>Explore Chains</Button>
          <Button className='mx-2'>Learn More</Button>
        </motion.div>
        </div>
      </div>
    </Scaffold>
  )
}
