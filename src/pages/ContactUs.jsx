import React from 'react'
import Navbar from '../Components/Home/Navbar/Navbar'
import ContactUsHero from '../Components/ContactUs/ContactUsHero'
import Form from '../Components/ContactUs/Form'
import Footer from '../Components/Home/Footer/Footer'

function ContactUs() {
  return (
    <div>
      <Navbar />
      <ContactUsHero />
      <Form />
      <Footer />
    </div>
  )
}

export default ContactUs
