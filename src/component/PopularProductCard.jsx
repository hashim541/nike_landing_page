import { star } from "../assets/icons"
import { motion } from "framer-motion"

const PopularProductCard = ({ imgURL, name, price, rating, index }) => {
  return (
    <motion.div 
      className="flex flex-1 flex-col w-full max-sm:w-full sm:justify-center  items-center"
      initial={{opacity:0, y: -50}}
      whileInView={{opacity:1, y: 0}}
      transition={{duration:.5, delay: ((index/3)+.5)+.5}} 
      viewport={{once:true, }}  
    >
        <img src={imgURL} alt={name} width={280} height={280} className="object-contain" />
        <p className="mt-8 flex justify-start items-center gap-2.5">
            <img src={star} alt="rating" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">{rating}</p>
        </p>
        <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">{name}</h3>
        <p className="mt-1 font-montserrat font-semibold text-coral-red text-xl leading-normal">{price}</p>
    </motion.div>
  )
}

export default PopularProductCard