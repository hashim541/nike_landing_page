import { motion } from "framer-motion"

const Button = ({label, iconUrl, delay = .5}) => {
  return (
    <motion.button 
      className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg rounded-full leading-none bg-coral-red text-white border-coral-red"
      initial={{opacity:0, x: -50}}
      whileInView={{opacity:1, x: 0}}
      transition={{duration:.5, delay}} 
      viewport={{once:true, }}
    >
        {label}
        {iconUrl && 
        <img 
            src={iconUrl} 
            alt={label} 
            className="ml-2 rounded-full w-5 h-5"    
        /> }
    </motion.button>
  )
}

export const SecondaryButton = ({ label, iconUrl }) => {
  return (
    <motion.button 
      className="flex justify-center items-center gap-2 px-7 py-4 border border-slate-gray font-montserrat text-lg rounded-full leading-none text-slate-gray "
      initial={{opacity:0, x: -50}}
      whileInView={{opacity:1, x: 0}}
      transition={{duration:.5, delay: 1.5}} 
      viewport={{once:true, }}
    >
        {label}
        {iconUrl && 
        <img 
            src={iconUrl} 
            alt={label} 
            className="ml-2 rounded-full w-5 h-5"    
        /> }
    </motion.button>
  )
}

export default Button