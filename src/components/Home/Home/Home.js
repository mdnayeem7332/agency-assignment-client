import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurClients from '../OurClients/OurClients';
import OurWorks from '../OurWorks/OurWorks';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <OurClients/>
            <Services/>
            <OurWorks/>
            <Reviews/>
            <ContactForm/>
            <Footer/>
        </div>
    );
};

export default Home;