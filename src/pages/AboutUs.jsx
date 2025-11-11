import React from 'react'
import Navbar from '../components/navbar.jsx'
import Header from '../components/Header.jsx'
import AboutUsSection from '../components/About_HayMarketPubliser.jsx'
import OurMission from '../components/OurMission.jsx'
import OurCoreValues from '../components/OurCoreValues.jsx'
import WhyChooseHaymarket from '../components/AboutUs-WhyChooseUs.jsx'
import ContactFooter from '../components/ContactFooter.jsx'
import FooterForm from '../components/FooterForm.jsx'
import Logobar2 from '../components/Logo.jsx'
import Disclaimer2 from '../components/Disclaimerfooter.jsx'
import Form from '../components/Form.jsx'

const AboutUs = () => {
  return (
    <>
      <Header />
      <Navbar />
      <AboutUsSection />
      <OurMission />
      <OurCoreValues />
      <WhyChooseHaymarket />
      <Form />
      <Logobar2 />
      <FooterForm />
      <ContactFooter />
      <Disclaimer2 />
    </>
  )
}

export default AboutUs