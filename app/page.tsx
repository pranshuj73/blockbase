"use client"

import Scaffold from '@/components/Scaffold'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <Scaffold>
      <motion.h1 initial={{opacity: 0, y:20}} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.8 }} className='text-8xl font-semibold mb-6'>Blockbase</motion.h1>
      <motion.h2 initial={{opacity: 0, y:20}} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.8, delay: 0.4 }} className='text-4xl '>Secure E-Vault for all your needs.</motion.h2>
    </Scaffold>
  )
}
