import React from 'react'
import Navbar from '../../layout/Navbar'
import Banner from '../LandingPage/Banner'
import About from '../About/About'
import Flexservices from '../Flexservices/Flexservices'
import Portfolio from '../Portfolio/Portfolio'
import Product from '../Product/Product'
import Creative from '../CreativePage/Creative'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'
import Team from '../Team/Team'
import Client from '../Clients/Client'
import Partners from '../Partners/Partners'
import Blogs from '../Blogs/Blogs'
import Staytuned from '../StayTuned/Staytuned'
import Footer from '../../layout/Footer'
export default function Home() {
  return (
    <>
      
      <Banner />
      <About/>
      <Flexservices/>
      <Portfolio/>
      <Product/>
      <Creative/>
      <Services/>
      <Testimonials/>
      <Team/>
      <Client/>
      <Partners/>
      <Blogs/>
      <Staytuned/>
      {/* <Footer/> */}
    </>
  )
}
