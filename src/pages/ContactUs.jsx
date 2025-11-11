import React from 'react'
import Navbar from '../components/navbar.jsx'
import Header from '../components/Header.jsx'
import GetInTouchSection from '../components/GetInTouchWIthUs.jsx'
import ContactUsWhyChooseUs from '../components/ContactUs-WhyChooseUs.jsx'
import ContactUs_Location from '../components/ContactUs_Location.jsx'
import ContactFooter from '../components/ContactFooter.jsx'
import FooterForm from '../components/FooterForm.jsx'
import Logobar2 from '../components/Logo.jsx'
import Disclaimer2 from '../components/Disclaimerfooter.jsx'
import Form from '../components/Form.jsx'

const ContactUs = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <GetInTouchSection />
        <ContactUsWhyChooseUs />
        <ContactUs_Location />
        <Form />
        <ContactFooter />
        <FooterForm />
        <Logobar2 />
        <Disclaimer2 />
    </div>
    
  )
}

export default ContactUs