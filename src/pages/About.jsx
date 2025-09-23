import React from 'react'
import Navbar from '../Components/Home/Navbar/Navbar'
import AboutHero from '../Components/About/AboutHero'
import Skills from '../Components/About/Skills'
import Experience from '../Components/About/Experience'
import CTASection from '../Components/Home/CTASection/CTASection'
import Footer from '../Components/Home/Footer/Footer'

function About() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <Skills />
      <Experience />
      <CTASection />
      <Footer />
    </div>
  )
}

export default About
