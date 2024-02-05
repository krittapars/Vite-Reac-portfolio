import { useState } from 'react'
import './App.css'
import AnimatedCursor from 'react-animated-cursor'


import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Numbers from './components/Numbers/Numbers'
import Testimonials from './components/Testimonials/Testimonials'
import Contect from './components/Contect/Contect'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='0, 65, 125'
      outerAlpha={0.2}
      innerScale={0.5}
      outerStyle={
        {border: '3px solid #fff'}

      }
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <Navbar/>
      <Hero/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Numbers/>
      <Testimonials/>
      <Contect/>
      <Footer/>
      

    </>
  )
}

export default App