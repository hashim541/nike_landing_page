import Button, { SecondaryButton } from "../component/Button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import { motion } from "framer-motion"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <motion.img 
          src={offer} 
          alt="offer" 
          width={773} 
          height={687} 
          className="object-contain w-full" 
          initial={{opacity:0, x: -100}}
          whileInView={{opacity:1, x: 0}}
          transition={{duration:.5, }} 
          viewport={{once:true, }}
        />
      </div>


      <div className="flex flex-1 flex-col">
        
        <motion.h2 
          className="font-palanquin capitalize font-bold lg:max-w-lg text-4xl"
          initial={{opacity:0, x: 100}}
          whileInView={{opacity:1, x: 0}}
          transition={{duration:.5, }} 
          viewport={{once:true, }}
        >
           <span className="text-coral-red inline-block mt-3">Special</span> offers
        </motion.h2>
        <motion.p 
          className="mt-7 lg:max-w-lg info-text"
          initial={{opacity:0, x: 50}}
          whileInView={{opacity:1, x: 0}}
          transition={{duration:.5, delay: .5}} 
          viewport={{once:true, }}
        >Embark on a shoppong journey that redefines your experience with the unbeatable deals. From premier selections to incredible savings, we offer unparallel value that sets us apart.
        </motion.p>
        <motion.p 
          className="mt-4 lg:max-w-lg info-text"
          initial={{opacity:0, x: 50}}
          whileInView={{opacity:1, x: 0}}
          transition={{duration:.5, delay: .5}} 
          viewport={{once:true, }}
        >Naviagate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. your journey with ys is nothing sotr of exceptational.
        </motion.p>
        <div className="mt-11 flex gap-4">
          <Button label={'Shop now'} iconUrl={arrowRight} delay={1}/>
          <SecondaryButton label={'Learn more'} />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers