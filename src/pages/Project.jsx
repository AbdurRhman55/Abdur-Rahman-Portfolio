import React from 'react'
// import Hero from '../Components/Project/Hero'
import Navbar from '../Components/Home/Navbar/Navbar'
import ProjectsHero from '../Components/Project/ProjectHero'
import ProjectFilters from '../Components/Project/ProjectFIlters.jsx'
import Projects from '../Components/Project/Projects.jsx'

function Project() {
  return (
    <div>
        <Navbar/>
        <ProjectsHero />
        <ProjectFilters />
        <Projects />
    </div>
  )
}

export default Project
