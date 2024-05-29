import { motion } from "framer-motion"

const ServiceCard = ({ imgURL, label, subtext, index }) => {
  return (
    <motion.div 
      className="flex-1 sm:w-[350px] sm:min-w[350px] min-w-64 w-full rounded-[20px] shadow-3xl px-10 py-16"
      initial={{opacity:0, y: 50}}
      whileInView={{opacity:1, y: 0}}
      transition={{duration:.5, delay: (index/3)}} 
      viewport={{once:true, }}
    >
      <div className="w-11 h-11 flex  justify-center items-center bg-coral-red rounded-full">
          <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl font-bold">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </motion.div>
  )
}

export default ServiceCard