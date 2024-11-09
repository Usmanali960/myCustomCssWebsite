import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './about/About'
import Courses from './courses/Courses'
import ContactSection from './contact/Contact'
import Footer from './components/Footer'

function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Courses/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default page
