/* eslint-disable import/prefer-default-export */
import React from 'react'

import Banner from '../../components/Banner/Banner'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import LatestProperty from '../../components/LatestProperty/LatestProperty'
import WhyUsSection from './WhyUsSection/WhyUsSection'

import './home.css'
import BestCities from './BestCities/BestCities'
import PropertyAgentSection from '../../components/PropertyAgent/PropertyAgentSection'
import CountSection from './CountSection/CountSection'
import TestimonialSection from './TestimonialSection/TestimonialSection'
import NewsLetterSection from './NewsLetterSection/NewsLetterSection'
import Footer from '../../components/layouts/Footer/Footer'
import MapComponent from '../../components/MapComponent/MapComponent'

export const Home = () => (
  <div className='home'>
    <Banner />
    <BreadCrumb />
    <LatestProperty />
    <MapComponent />
    <WhyUsSection />
    <BestCities />
    <PropertyAgentSection />
    <CountSection />
    <TestimonialSection />
    <NewsLetterSection />
    <Footer />
  </div>
)
