import React from 'react'
import { motion, useScroll } from 'framer-motion';

const LiIcon = ({reference}) => {

    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    
      });

  return (
    <figure className='absolute left-0 stroke-black'>
        <svg width='75' height='75' viewBox='0 0 100 100' className=' -rotate-90'>
            <circle cx='75' cy='50' r='20' className=' stroke-pink-600 stroke-1 fill-none'></circle>
            <motion.circle cx='75' cy='50' r='20' className='  stroke-[5px] fill-white'
            style={{
                pathLength: scrollYProgress
            }}></motion.circle>
            <circle cx='75' cy='50' r='10' className='  stroke-1 fill-pink-600'></circle>
        </svg>
    </figure>
  )
}

export default LiIcon
