import React from 'react'
import Contact from '../../components/contact/Contact'
import Department from '../../components/departments/Department'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Service from '../../components/services/Service'

function Landing() {
  return (
    <div>
      <Navbar />
      <Header />
      <Department />
      <Service />
      <Contact />
      <Footer />
    </div>
  )
}

export default Landing
