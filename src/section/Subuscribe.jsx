import Button from "../component/Button"
import { motion } from "framer-motion"

const Subuscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-evenly items-center max-lg: flex-col gap-10 py-10">
      <motion.h3 
        className='font-palanquin text-center font-bold text-4xl'
        initial={{opacity:0, y: -50}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration:.5 }} 
        viewport={{once:true, }}
      >Sign up for <span className='text-coral-red'>Updates</span> & Newslettwer
      </motion.h3>
      <motion.div 
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
        initial={{opacity:0, y: 50}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration:.5, delay: .5 }} 
        viewport={{once:true, }}  
      >
        <input type="text" placeholder="Subscribe@nike.com" className="input" />
        <Button label={'Sign up'} delay={1}/>
      </motion.div>
    </section>
  )
}

export default Subuscribe