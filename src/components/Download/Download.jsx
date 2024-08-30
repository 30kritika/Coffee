import back from '/src/images/download.jpg'
import app from '/src/images/app_store.png'
import play from '/src/images/play_store.png'
import { motion } from 'framer-motion'

const BannerStyle={
  backgroundImage:`url(${back})`,
  backgroundSize:"cover",
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat",
  height:"190px",
  width:"100%",
};
const Download = () => {
  return (
    <div className='container my-14'>
      <div style={BannerStyle} className='sm:min-h-[400px]
        sm:flex sm:justify-end sm:items-center rounded-xl'>
          <div>
            <div className='space-y-6 max-w-xl mx-auto'>
              <motion.h1 
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:0.2,
                }}
                className='text-4xl font-bold text-center sm:text-4xl '>Download the app</motion.h1>
              <motion.p 
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{
                type:"spring",
                stiffness:100,
                damping:10,
                delay:0.2,
                }}
                className='text-center sm:px-20'>Lorem ipsum dolor sit amet consedolor sit amet 
                consectetur adipisicing elit. Officiis {" "}
              </motion.p>
              {/* images link */}
              <motion.div
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{
                type:"spring",
                stiffness:100,
                damping:10,
                delay:0.2,
                }} 
                className='flex justify-center items-center gap-4'>
                <a href='#' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'><img src={app} /></a>
                <a href='#' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'><img src={play} /></a>
              </motion.div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Download
