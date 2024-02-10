/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

import TextButton from '../common/TextButton/TextButton'
import PropertyItem from '../PropertyItem/PropertyItem'

import './LatestProperty.css'
import { useFetchHouses } from '../../hooks/houses/useFetchHouses'

function LatestProperty() {
  const [item, setItem] = useState('all')

  const navigate = useNavigate()

  const { houses, houseloading } = useFetchHouses()

  const allStyle = item === 'all' ? 'latest-property-header-item-active' : 'latest-property-header-item'
  const forSaleStyle = item === 'for_sale' ? 'latest-property-header-item-active' : 'latest-property-header-item'
  const forRent = item === 'for_rent' ? 'latest-property-header-item-active' : 'latest-property-header-item'

  return (
    <div className='latest-property'>
      <div className='container'>
        <div className='latest-property-header'>
          <div className='latest-property-header-left my-2'>
            <span className='primary-heading'>BROWSE HOT OFFERS</span>
            <br />
            <span className='secondary-heading'>Latest Properties</span>
          </div>
          <div className='latest-property-header-right my-2 rounded'>
            <span onClick={() => setItem('all')} className={allStyle}>
              All Categories
            </span>
            <span onClick={() => setItem('for_sale')} className={forSaleStyle}>
              For Sale
            </span>
            <span onClick={() => setItem('for_rent')} className={forRent}>
              For rent
            </span>
          </div>
        </div>
        <div className='latest-property-items row'>
          {houseloading ? (
            <div className='mx-auto'>
              <Oval color='#00BFFF' height={200} width={200} />
            </div>
          ) : (
            houses &&
            houses.map(
              (house, i) =>
                i < 8 && (
                  <div key={i} className='col-sm'>
                    <PropertyItem house={house} key={house.id} />
                  </div>
                )
            )
          )}
        </div>
        <div onClick={() => navigate('/properties')}>
          <TextButton text='View all properties' />
        </div>
      </div>
    </div>
  )
}

export default LatestProperty
