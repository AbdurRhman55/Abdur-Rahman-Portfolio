import React from 'react'
import ServicesHero from '../Components/Services/ServiceHero'
import Navbar from '../Components/Home/Navbar/Navbar'
import ServicesExperties from '../Components/Services/ServicesExperties'
import Process from'../Components/Services/Process'
import WhyChooseMe from '../Components/Services/WhyChooseUs'
import Pricing from '../Components/Services/Pricing'
import CTASection from '../Components/Home/CTASection/CTASection'
import Footer from '../Components/Home/Footer/Footer'


function Services() {
  return (
    <div>
      <Navbar />
      <ServicesHero />
      <ServicesExperties />
      <Process />
      <WhyChooseMe />
      <Pricing />
      <CTASection />
      <Footer />
    </div>
  )
}

export default Services
