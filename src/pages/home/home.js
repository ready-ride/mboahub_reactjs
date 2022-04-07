import React from 'react'
import Banner from '../../components/Banner/Banner'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import LatestProperty from '../../components/LatestProperty/LatestProperty';

import './home.css';


export const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <BreadCrumb />
      <LatestProperty />
    </div>
  )
}
