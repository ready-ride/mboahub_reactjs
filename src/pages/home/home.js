import React from 'react'
import Banner from '../../components/Banner/Banner'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import LatestProperty from '../../components/LatestProperty/LatestProperty'

export const Home = () => {
  return (
    <div>
      <Banner />
      <BreadCrumb />
      <LatestProperty />
    </div>
  )
}
