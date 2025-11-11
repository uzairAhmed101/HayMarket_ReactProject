import React from 'react'
import { Link } from 'react-router-dom'
// import Disclaimer from '../components/Disclaimer.jsx'
import HeroSection from '../components/BannerSection.jsx'
import Navbar from '../components/navbar.jsx'
import Header from '../components/Header.jsx'
import LogoBar from '../components/LogoBar.jsx'
import HowHiring from '../components/HowHiringWriter.jsx'
import CreateBio from '../components/CreateABIo.jsx'
import PublicFigure from '../components/PublicFigureBio.jsx'
import PersonalBio from '../components/PersonalBioWriting.jsx'
import ContactUsForBio from '../components/ContactUsToCreateBio.jsx'
import Portfolio from '../components/OurPorfolio.jsx'
import ServiceWhyChooseUs from '../components/Service-WhyChooseUs.jsx'
import Testimonials from '../components/ServiceTestimonial.jsx'
import ServiceFaqs from '../components/ServiceFaqs.jsx'
import GetInTouchToday from '../components/GetInTouch.jsx'
import ContactFooter from '../components/ContactFooter.jsx'
import FooterForm from '../components/FooterForm.jsx'
import Logobar2 from '../components/Logo.jsx'
import Disclaimer2 from '../components/Disclaimerfooter.jsx'
import Form from '../components/Form.jsx'

const ServicePage = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <HeroSection />
        <LogoBar />
        <HowHiring />
        <CreateBio />
        <PublicFigure />
        <PersonalBio />
        <ContactUsForBio />
        <Portfolio />
        <ServiceWhyChooseUs />
        <Testimonials />
        <ServiceFaqs />
        <GetInTouchToday />
        <Form />
        <FooterForm />
        <Logobar2 />
        <ContactFooter />
        <Disclaimer2 />
    </div>
  )
}

export default ServicePage