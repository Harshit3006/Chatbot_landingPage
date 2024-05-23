import React from 'react'
import { motion } from 'framer-motion'

const TransitionEffect = () => {
  return (
    <>
        <motion.div className=' fixed top-0 bottom-0 w-screen h-screen right-full bg-pink-500 z-30'
        initial={{x: "100% ", width: "100%"}}
        animate={{x:"0%", width: "0%"}}
        exit={{x:["0%", "100%"], width:["0%", "100%"]}}
        transition={{duration: "0.5" , ease:"easeInOut"}}
        ></motion.div>
        <motion.div className=' fixed top-0 bottom-0 w-screen h-screen right-full bg-white z-20'
        initial={{x: "100% ", width: "100%"}}
        animate={{x:"0%", width: "0%"}}
        transition={{duration: "0.5" , ease:"easeInOut" , delay: "0.2"}}
        ></motion.div>
        <motion.div className=' fixed top-0 bottom-0 w-screen h-screen right-full bg-black z-10'
        initial={{x: "100% ", width: "100%"}}
        animate={{x:"0%", width: "0%"}}
        transition={{duration: "0.5" , ease:"easeInOut" , delay: "0.4"}}
        ></motion.div>
    </>
  )
}

export default TransitionEffect
