import React from 'react'

import { BiSupport } from 'react-icons/bi'

import './WhyUsSection.scss'

import WhyUsSectionItem from './WhyUsSectionItem'

const twentyFourSupport = 'Round-the-clock assistance: We provide 24/7 support to ensure you have a smooth and hassle-free experience.'
const userAdminPanel =
  'Convenient management: Our user admin panel gives you complete control over your real estate activities. Easily manage your listings, view analytics, and track user interactions.'
const securePayments = 'Our secure payments panel ensures the safety and confidentiality of your financial transactions.'

function WhyUsSection() {
  return (
    <div className='main-margin'>
      <div className='why-us-section mx-4 d-flex align-items-center justify-content-between'>
        <div>
          <div className='secondary-heading'>Why Choose Our Properties</div>
          <div className='tertiary-heading'>Check video presentation to find out more about us .</div>
          <WhyUsSectionItem title='24 Hours Support' content={twentyFourSupport} icon={<BiSupport size='30' />} />
          <WhyUsSectionItem title='User Admin Panel' content={userAdminPanel} icon={<BiSupport size='30' />} />
          <WhyUsSectionItem title='Secure Payments Panel' content={securePayments} icon={<BiSupport size='30' />} />
        </div>
        <div>
          <img src='/photos/why-us-1.webp' alt='about_us' width='100%' />
        </div>
      </div>
    </div>
  )
}

export default WhyUsSection
