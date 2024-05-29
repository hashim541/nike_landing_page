import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'
import { headerLogo } from '../assets/images'

import { motion } from 'framer-motion'
import Button from './Button'

const Nav = () => {
  return (
    <motion.header 
      className='padding-x py-8 absolute z-10 w-full'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}  
    >
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29}/>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map(item => (
            <li key={item.label}>
              <a href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="hamburger" width={25} height={25}/>
        </div>

          <div className='max-lg:hidden block'>
          <Button label={'Sign in'} />

          </div>
      </nav>
    </motion.header>
  )
}

export default Nav