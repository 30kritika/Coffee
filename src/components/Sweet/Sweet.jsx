import { motion } from "framer-motion"
import cheesecake from '/src/images/cheesecake.png'
import tira from '/src/images/tiramisu.png'
import macron from '/src/images/macron.png'

const proData=[
    {
        id:1,
        image:cheesecake,
        title:"Pudding",
        subtitle:"lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id:2,
        image:tira,
        title:"Croissants",
        subtitle:"lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id:3,
        image:macron,
        title:"Macron",
        subtitle:"lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

const cardVar={
    hidden:{opacity:0, y:20},
    visible:{
        opacity:1,
        y:0,
        transition:{
            type:"spring",
            stiffness:150,
            damping:10,
            ease:"easeInOut",
        }
    }
}
const Sweet = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className=" text-center max-w-lg mx-auto space-y-2">
        <motion.h1 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{
                type:"spring",
                stiffness:150,
                damping:10,
                delay:0.2,
            }}
            className="text-4xl font-bold text-lightGray">
            Sweet <span className="text-lightbrown">Sensations.</span>
        </motion.h1>
        <motion.p 
            initial={{opacity:0, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{
                type:"spring",
                stiffness:150,
                damping:10,
                delay:0.6,
            }}
            className="text-1xl opacity-55">Indulge in Our Sweetest Creations</motion.p>
      </div>

      {/* card section */}
      <motion.div variants={cardVar} 
        initial="hidden"
        whileInView={"visible"}
        viewport={{amount:0.8}}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {proData.map((product) =>(
            <motion.div variants={cardVar} className="text-center p-4 space-y-7" key={product.id}>
                <img className="w-50 h-80 object-cover ml-12 img-shadow2 max-w-[500px] 
                    mx-auto hover:scale-110 duration-300 cursor-pointer" src={product.image} />
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-center text-brown1">{product.title}</h1>
                    <p className="text-darkGray">{product.subtitle}</p>
                </div>
            </motion.div>
        ))}
      </motion.div>

    </div>
  )
}

export default Sweet
