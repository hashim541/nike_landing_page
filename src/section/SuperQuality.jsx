import { shoe8 } from "../assets/images"
import Button from "../component/Button"
import { motion } from "framer-motion"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        
        <motion.h2 
          className="font-palanquin capitalize font-bold lg:max-w-lg text-4xl"
          initial={{opacity:0, x: -100}}
          whileInView={{opacity:1, x: 0}}
          transition={{duration:.5, delay: .5}} 
          viewport={{once:true, }}
        >
          We provide you 
           <span className="text-coral-red inline-block mt-3">&nbsp;Super </span>
          <span className="text-coral-red inline-block mt-3"> Quality </span> Shoes
        </motion.h2>
        <motion.p 
          className="mt-4 lg:max-w-lg info-text"
          initial={{opacity:0, x: -50}}
          whileInView={{opacity:1, x: 0}}
          transition={{duration:.5, delay: .7}} 
          viewport={{once:true, }}
        >Ensuring premium comfort and style, Our meticulously created footwear designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </motion.p>
        <motion.p 
          className="mt-6 lg:max-w-lg info-text"
          initial={{opacity:0, x: -50}}
          whileInView={{opacity:1, x: 0}}
          transition={{duration:.5, delay: .7}} 
          viewport={{once:true, }}
        >Our dedication to detail and excellence ensures your satisfaction.
        </motion.p>
        <div className="mt-11">
          <Button label={'View details'} delay={1.5} />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <motion.img 
          src={shoe8} 
          alt="shoe" 
          width={517} 
          height={522} 
          className="object-contain" 
          initial={{opacity:0, x: 100}}
          whileInView={{opacity:1, x: 0}}
          transition={{duration:.5, delay: 1}} 
          viewport={{once:true, }}
        />
      </div>
    </section>
  )
}

export default SuperQuality