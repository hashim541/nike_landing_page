import { star } from "../assets/icons"
import { motion } from "framer-motion"
const ReviewCard = ({
    imgURL, customerName, rating, feedback, index
}) => {
  return (
    <motion.div 
      className="flex justify-center items-center flex-col bg-white p-8 rounded-lg shadow-xl"
      initial={{opacity:0, y: 50}}
      whileInView={{opacity:1, y: 0}}
      transition={{duration:.5, delay: (index/3)+1 }} 
      viewport={{once:true, }}
    >
      <img src={imgURL} alt={customerName} width={120} height={120} className="rounded-full object-cover" />
      <p className="info-text mt-6 text-center max-w-lg">{feedback}</p>
      <div className="flex justify-center items-center mt-4">
          <img src={star} alt="star" width={24} height={24} className="object-contain m-0" />
          <p className="font-montserrat text-lg ml-3 text-slate-gray">{rating}</p>
      </div>
      <h3 className="mt-6 text-lg font-palanquin font-bold text-center">{customerName}</h3>
    </motion.div>
  )
}

export default ReviewCard