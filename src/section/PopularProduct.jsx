import { products } from "../constants"
import PopularProductCard from "../component/PopularProductCard"
import { motion } from "framer-motion"


const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <motion.h2 
          className="text-4xl font-palanquin font-bold"
          initial={{opacity:0, y: -50}}
          whileInView={{opacity:1, y: 0}}
          transition={{duration:.5, delay: .5}} 
          viewport={{once:true, }}
          >Our <span className="text-coral-red">Popular</span> Products
        </motion.h2>
        <motion.p 
          className="lg:max-w-lg mt-2 font-montserrat text-slate-gray"
          initial={{opacity:0, y: 30}}
          whileInView={{opacity:1, y: 0}}
          transition={{duration:.5, delay: .5}} 
          viewport={{once:true}}
          >Experience top-notch quality and style with our sought-after selections. Discover a world of comfort design and value
        </motion.p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 place-items-center">
        {products.map( (product, index) => (
          <PopularProductCard key={product.name} index={index} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProduct