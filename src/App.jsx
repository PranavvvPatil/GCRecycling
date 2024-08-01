import React from 'react'
import { HeroSection } from './components/HeroSection'
import Navbar from './components/Navbar'
import About from './components/About'
import Mission from './components/Mission'
import Team2 from './components/Team2'
import Awards from './components/Awards'
import Gallery from './components/Gallery'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <HeroSection/>
      <Navbar/>
      <About/>
      <Mission/>
      <Team2/>
      <Awards/>
      <Gallery/>
      <ContactSection/>
      <Footer/>
      
    </main>
  )
}

export default App
