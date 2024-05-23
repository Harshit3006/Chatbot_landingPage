import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink 
        href='/' 
        className='p-3 flex items-center justify-center bg-black text-white rounded-full text-2xl font-bold mt-2.5' 
        whileHover={{
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition: {duration: 1, repeat: Infinity}
        }}>
            MindHarbour
        </MotionLink>
      
    </div>
  )
}

export default Logo
