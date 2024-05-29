import { footerLogo } from "../assets/images"
import { footerLinks,socialMedia } from "../constants"
import { copyrightSign } from "../assets/icons"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <motion.img 
              src={footerLogo} 
              alt="footer logo" 
              width={150} 
              height={46} 
              initial={{opacity:0, x: -50}}
              whileInView={{opacity:1, x: 0}}
              transition={{duration:.5 }} 
              viewport={{once:true, }}
            />
          </a>
          <motion.p 
            className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm"
            initial={{opacity:0, x: -50}}
            whileInView={{opacity:1, x: 0}}
            transition={{duration:.5, delay: .5 }} 
            viewport={{once:true, }}
          >Get your shoes ready for the nw term at your nearest Nike store. Find your perfect size in store. Get rewards.
          </motion.p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((item,index) => (
              <motion.div 
                className="bg-white p-2.5 rounded-full"
                initial={{opacity:0, x: -50}}
                whileInView={{opacity:1, x: 0}}
                transition={{duration:.5, delay: (index/3)+1 }} 
                viewport={{once:true, }}
              >
                <img src={item.src} alt={item.alt} width={24} height={24} />
              </motion.div>
            ))}
          </div> 
        </div>


        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map(item => (
            <div key={item}>
              <h4 className="text-white font-montserrat text-2xl leading-normal mb-6">{item.title}</h4>
              <ul >
                {item.links.map(link => (
                  <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                    <a href={link.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img src={copyrightSign} alt="Copy right" width={20} height={20} className="rounded-full m-0"/>
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer