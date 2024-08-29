import { motion } from "framer-motion"
import egg from '/src/images/egg.png'
import salad from '/src/images/salad.png'
import at from '/src/images/at.png'

const proData=[
    {
        id:1,
        image:egg,
        title:"Omelette",
        subtitle:"lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id:2,
        image:salad,
        title:"Fresh Salad",
        subtitle:"lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id:3,
        image:at,
        title:"Avocado Toast",
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
const Break = () => {
  return (
    <div className="container my-16 space-y-4 bg-beige1">
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
            Breakfast <span className="text-brown1">Bites.</span>
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
            className="text-1xl opacity-55">A Visual Journey Through Our Morning Menu</motion.p>
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

export default Break
