import { reviews } from "../constants"
import ReviewCard from "../component/ReviewCard"
import { motion } from "framer-motion"

const CustomerReviews = () => {
  return (
    <section className='max-conatiner '>
      <motion.h3 
        className='font-palanquin text-center font-bold text-4xl'
        initial={{opacity:0, y: -50}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration:.5, }} 
        viewport={{once:true, }}
      >
      What Our <span className='text-coral-red'>Customers</span> Say?
      </motion.h3>
      <motion.p 
        className='text-center info-text m-auto mt-4 max-w-lg'
        initial={{opacity:0, y: 50}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration:.5, delay: .5 }} 
        viewport={{once:true, }}
      >Here genuine stories fron our satisfied customer about their exceptional experiences with us.
      </motion.p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard key={review.customerName} index={index} {...review} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews