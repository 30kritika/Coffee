import React from 'react'
import logo from '/src/images/logo.png'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from 'framer-motion';

const Navbar = ({sidebar, setSidebar}) => {
  return (
    <nav className='absolute top-0 left-0 w-full pt-10 text-beige1 z-40'>
      <div className='container'>
        <div className='flex justify-between items-center'>
            {/* logo section */}
            <motion.h1 
                initial={{opacity:0, y:-100}}
                animate={{opacity:1, y:0}}
                transition={{
                type:"spring",
                stiffness:100,
                damping:10,
                delay:0.2,
               }}
                className='text-2xl font-semibold'>
                <span className='text-lightbrown '>developer</span> beans.</motion.h1>
            {/* <img src={logo} alt=''/> */}
            {/* hamburger mennu section */}
            <motion.div
                initial={{opacity:0, y:-100}}
                animate={{opacity:1, y:0}}
                transition={{
                type:"spring",
                stiffness:100,
                damping:10,
                delay:0.2,
               }}
                onClick={()=> setSidebar(!sidebar)}
               >
                
                <HiOutlineMenuAlt3 className="text-3xl cursor-pointer text-brown1" />
            </motion.div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
