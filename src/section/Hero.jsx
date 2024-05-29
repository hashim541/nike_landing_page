import Button from "../component/Button"
import { bigShoe1 } from '../assets/images'
import { arrowRight } from '../assets/icons'
import ShoeCard from "../component/ShoeCard"
import { statistics, shoes } from "../constants"
import { useEffect, useState, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

const Hero = () => {

  const [bigShoe,setBigShoe] = useState(bigShoe1)
  const control = useAnimation()
  const isFirstRendered = useRef(false)

  useEffect(()=>{
    if(isFirstRendered.current){
      control.start({opacity:1, x: 0,  transition: { duration: 0.5, delay: 1 }})
      isFirstRendered.current = false
    }
    else
    control.start({opacity:1, x: 0,  transition: { duration: 0.5, delay: .1 }})
  },[bigShoe, control])

  const changeBigShoe = ( shoe ) => {
    control.start({ opacity: 0, x: 100,  transition: { duration: 0.5, delay: .1 }}).then(() => {
      setBigShoe(shoe);
    });
  }

  return (
    <section 
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >

    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <motion.p 
        className="text-xl font-montserrat text-coral-red "
        initial={{opacity:0, y: -10}}
        animate={{opacity:1, y: 0}}
        transition={{duration:.5, delay: .6}}
        viewport={{once:true}}
      >
        Our Summer Collection
      </motion.p>
      <motion.h1 
        className=" z-10 mt-10 font-palanquin font-bold text-8xl max-sm:text-[72px] max-sm:leading-0"
        initial={{opacity:0, x: -100}}
        animate={{opacity:1, x: 0}}
        transition={{duration:.5, delay: .5}}  
      >
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
        <br />
        <span><span className="text-coral-red inline-block mt-3">Nike</span> Shoes</span>
      </motion.h1>
      <motion.p 
        className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-8 sm:max-w-sm"
        initial={{opacity:0, x: -50}}
        animate={{opacity:1, x: 0}}
        transition={{duration:.5, delay: .6}}
      >Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</motion.p>
      <Button label={'Shop now'} iconUrl={arrowRight} delay={1} />

      <div className="flex w-full justify-start items-start flex-wrap mt-20 gap-16">
        {statistics.map(item => (
          <motion.div 
            key={item.label} 
            className="flex flex-col items-center"
            initial={{opacity:0, x: -100}}
            animate={{opacity:1, x: 0}}
            transition={{duration:.5, delay: .5}}
          >
            <p className="text-4xl font-palanquin font-bold">{item.value}</p>
            <p className="text-2xl font-montserrat text-slate-gray leading-7">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
    
    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen  max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
      <motion.img 
        src={bigShoe} 
        alt="shoe collection" 
        width={610} 
        height={500} 
        className="object-contain relative z-10 cursor-pointer"
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        initial={{opacity:0, x: 100}}
        animate={control}
        
      />

      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] sm:px-6">
        {shoes.map((shoe, i) => (
          <motion.div 
            key={shoe.thumbnail}
            initial={{opacity:0, y: 50}}
            animate={{opacity:1, y: 0}}
            transition={{duration:.5, delay: ((i/10)+.2)+1.5}}
          >
            <ShoeCard 
              imgUrl={shoe.bigShoe} 
              thumbnail={shoe.thumbnail} 
              changeBigShoe={changeBigShoe}
              bigShoe={bigShoe}
            />
          </motion.div>
        ))}
      </div>
    </div>
    
    </section>
  )
}

export default Hero