import React from 'react'
import { Link } from 'react-router-dom'

import { Oval } from 'react-loader-spinner'
import { MdOutlineDeleteForever } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import Rating from '../../../components/common/Rating/Rating'
import LocationInfo from '../../../components/common/LocationInfo/LocationInfo'
import { useFetchMyHouses } from '../../../hooks/houses/useFetchMyHouses'

function AllMyListings() {
  const { houses, houseloading } = useFetchMyHouses()

  return (
    <div>
      <strong className='text-dark-blue mb-4'>YOUR LISTINGS</strong>
      <hr />
      <input type='search' placeholder='Search' className='form-control border w-25 my-4' />
      {houseloading && <Oval color='#00BFFF' height={80} width={80} />}
      {houses && (
        <div className='d-flex-between-center'>
          {houses.map((house, i) => (
            <div key={i} className='house-preview border shadow rounded'>
              <div className='image-container'>
                <img src={house.images[0]} alt='house' />
                <button className='btn btn-primary'>
                  <Link to={`${house.id}`}>View</Link>
                </button>
              </div>
              <div className='house-preview-content'>
                <div className='p-2'>
                  <strong className='text-small text-gray'>{house.listing_name}</strong>
                  <br />
                  <LocationInfo address={house.location} text_color='lightgray' />
                  <Rating />
                </div>
                <div className='listing-actions'>
                  <span className='text-small views'>Viewed - 645</span>
                  <div className='listing-actions-items'>
                    <span>
                      <FiEdit color='#3270FC' />
                    </span>
                    <span>
                      <FiEdit color='#3270FC' />
                    </span>
                    <span>
                      <MdOutlineDeleteForever color='#3270FC' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {houses && houses.length === 0 && <h5 className='text-blue'>YOU HAVE NO LISTINGS</h5>}
    </div>
  )
}

export default AllMyListings
