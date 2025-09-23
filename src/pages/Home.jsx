import Hero from "../Components/Home/Hero/Hero";
import Navbar from "../Components/Home/Navbar/Navbar";
import Achievement from '../Components/Home/Achievement/Achievements';
import Aboutsection from '../Components/Home/About/Aboutsection';
import CTASection from '../Components/Home/CTASection/CTASection';
import Footer from '../Components/Home/Footer/Footer';



function Home() {
  return (
    <div  className='bg-gradient-to-br from-gray-900 to-black '>
      <Navbar />
      <Hero />
      <Achievement />
      <Aboutsection />
      <CTASection />
      <Footer />

    </div>
  )
}

export default Home
