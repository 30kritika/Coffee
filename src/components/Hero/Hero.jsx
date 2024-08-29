import { useState } from "react";
import BgImage from "/src/images/bg-slate.png";
import center from "/src/images/aq.png"
import Navbar from '/src/components/Navbar/Navbar'
import {motion} from "framer-motion"
import { FaFacebookF, FaTwitter,FaInstagram } from "react-icons/fa";


const bgImage={
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}
const Hero = () => {
  const [sidebar, setSidebar]= useState(false);

  return (
    <main style={bgImage}>
      <section className='relative min-h-[750px] w-full'>
        <div className='container'>
        {/* navbar section */}
        <Navbar sidebar={sidebar} setSidebar= {setSidebar}/>
        {/* hero section */}
          <div className='grid grid-cols-1 md:grid-cols-2 
          lg:grid-cols-3 place-items-center min-h-[850px]'>

            {/* text container */}
            <div className="text-beige1 mt-[100px] md:mt-0 p-4 
              space-y-28">
              <motion.h1 initial={{opacity:0, y: -100}} 
                animate={{opacity:1, y:0}} 
                transition={{
                  type:"spring" ,
                  stiffness:100, 
                  damping:10, 
                  delay:1}}
                className="text-7xl font-bold leading-tight ml-14">
                Sip Savvy</motion.h1>
              <motion.div
               initial={{opacity:0, y:100}}
               animate={{opacity:1, y:0}}
               transition={{
                type:"spring",
                stiffness:100,
                damping:10,
                delay:1.2,
               }}
               className="relative ">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Coffee Lifestyle Lovers,</h1>
                  <h1 className="text-sm opacity-68 leading-loose">
                  Lorem ipsum dolor sit, amet consectetur adipisicing
                   elit. Delectus aspernatur, cumque eos neque dolorem 
                   architecto deserunt quis voluptatibus in quisquam quia
                   ducimus</h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px]  
                 bg-gray-900/25"></div>
              </motion.div>
            </div>
            {/* image container */}
            <div className="relative">
              <motion.img 
              initial={{opacity:0, scale:0}}
               animate={{opacity:1,scale:1}}
               transition={{
                type:"spring",
                stiffness:100,
                damping:10,
                delay:0.4,
               }}
              src={center} alt=""  className="relative z-40 h-[500px] 
                md:h-[600px] img-shadow"/>
            </div>

            {/*big text section*/}
            <motion.div 
            initial={{opacity:0, x:-100}}
               animate={{opacity:1, x:0}}
               transition={{
                type:"spring",
                stiffness:100,
                damping:10,
                delay: 0.8,
               }}
            className="absolute -top-0.5 left-[810px] z-[1]">
              <h1 className="text-[140px] scale-150 font-bold
                 text-brown1/40 leading-none">
              Sip <br/>Savvy
              </h1>
            </motion.div>
          </div>
          {/* third div section */}
          <div></div>
        </div>

        {/* side bar menu section */}
        {
          sidebar &&(
            <motion.div 
              initial={{x:"100%"}}
              whileInView={{x:0}}
              className="absolute top-0 right-0 w-[140px] 
            h-full bg-gradient-to-b from-beige2/80 to-beige2/80 
            backdrop--sm z-10">
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center 
                items-center gap-6 text-leftdark">
                {/* social icons */}
                <div className="inline-block p-2 rounded-full 
                  cursor-pointer border border-black">
                  <FaFacebookF className="text-2xl"/>
                </div>
                <div className="inline-block p-2 rounded-full 
                  cursor-pointer border border-black">
                  <FaTwitter className="text-2xl"/>
                </div>
                <div className="inline-block p-2 rounded-full 
                  cursor-pointer border border-black">
                  <FaInstagram className="text-2xl"/>
              </div>

            </div>
          </div>
        </motion.div>
          )
        }
        
      </section>
    </main>
  )
}

export default Hero
