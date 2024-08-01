
import video from '../assets/hero.mp4';
import logo from '../assets/logo.png';
import {motion} from 'framer-motion';




export const HeroSection = () => {
  return (
   <section className='relative flex h-screen items-center justify-center'>
     <div className='absolute inset-0 -z-20 h-full w-full overflow-hidden'>


      <video src={video} className='object-cover absolute insert-0 -z-20 h-full w-full overflow-hidden rounded-lg ' autoPlay loop muted playsInline  >
  
      </video>
  
      <div className="absolute inset-0 -z-5 bg-gradient-to-b from-transparent from to-80% to-black">

      <div className="relative z-20 flex h-screen items-center justify-center">
         <motion.img initial={{opacity:0,y:50}} animate={{opacity:1, y:0}} transition={{duration:0.5}} src={logo} alt="logo" className='w-[100%]  h-[74%] md:w-[65%] md:h-[100%] sm:w-[85%] sm:h-[68%] p-4 -z-10  object-cover'/>
      </div>
        
      </div>
     
    </div>
   </section>
  )
}





