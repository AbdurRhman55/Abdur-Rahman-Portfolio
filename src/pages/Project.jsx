import React from 'react'
// import Hero from '../Components/Project/Hero'
import Navbar from '../Components/Home/Navbar/Navbar'
import ProjectsHero from '../Components/Project/ProjectHero'
// import ProjectFilters from '../Components/Project/ProjectFIlters.jsx'
import Projects from '../Components/Project/Projects.jsx'
import Testimonials from '../Components/Project/Testimonials.jsx'
import Footer from '../Components/Home/Footer/Footer.jsx'
import CTASection from '../Components/Home/CTASection/CTASection.jsx'

function Project() {
  return (
    <div>
        <Navbar/>
        <ProjectsHero />
        <Projects />
        <Testimonials />
        <CTASection />
        <Footer />
    </div>
  )
}

export default Project
