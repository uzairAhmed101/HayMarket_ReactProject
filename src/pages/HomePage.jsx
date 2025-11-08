import React from 'react'
import { Link } from 'react-router-dom'
// import Disclaimer from '../components/Disclaimer.jsx'/
import HeroSection from '../components/BannerSection.jsx'
import Navbar from '../components/navbar.jsx'
import Header from '../components/Header.jsx'
import LetsTheWorldKnow from '../components/letsTheWorldKnow.jsx'
import LogoBar from '../components/LogoBar.jsx'
import OurServices from '../components/ourServices.jsx'
import NeedAssitance from '../components/needAssitance.jsx'
import WhyChooseUs from '../components/whyChooseUs.jsx'
import Section7 from '../components/Section7.jsx'
import Blogs from '../components/Blogs.jsx'
import Form from '../components/Form.jsx'
import ContactFooter from '../components/ContactFooter.jsx'
import FooterForm from '../components/FooterForm.jsx'
import Logobar2 from '../components/Logo.jsx'
import Disclaimer2 from '../components/Disclaimerfooter.jsx'

// Force redeploy to fix import issues

const HomePage = () => {
    return (
      <div>
        <Header />
        <Navbar />
        <HeroSection />
        <LogoBar />
        <LetsTheWorldKnow />
        <OurServices />
        <NeedAssitance />
        <WhyChooseUs />
        <Section7 />
        <Blogs />
        <Form />
        <Logobar2 />
        <FooterForm />
        <ContactFooter />
        <Disclaimer2 />
      </div>
  )
}

export default HomePage