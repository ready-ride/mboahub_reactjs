import React from 'react';

import Banner from '../../components/Banner/Banner'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import LatestProperty from '../../components/LatestProperty/LatestProperty';
import WhyUsSection from './WhyUsSection/WhyUsSection';

import './home.css';
import BestCities from './BestCities/BestCities';
import PropertyAgentSection from '../../components/PropertyAgent/PropertyAgentSection';
import CountSection from './CountSection/CountSection';
import TestimonialSection from './TestimonialSection/TestimonialSection';
import NewsLetterSection from './NewsLetterSection/NewsLetterSection';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/navbar/Navbar';


export const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Banner />
      <BreadCrumb />
      <LatestProperty />
      <WhyUsSection />
      <BestCities />
      <PropertyAgentSection />
      <CountSection />
      <TestimonialSection />
      <NewsLetterSection />
      <Footer />
    </div>
  )
}
