import React from 'react';
import BackgroundSlider from 'react-background-slider';

import { AiOutlineSearch } from 'react-icons/ai';

import './Banner.css';

function Banner() {
  return (
    <section className='banner-section position-relative'>
        <div className='bg-light-dark'></div>
        <div className='banner-content container'>
            <strong>Real Estate Searching Platform</strong>
            <p>Find The House of Your Dream<br />Using Our Platform</p>
            <div className='row mb-4'>
               <div className='col-sm-12 col-md-8'>
                  <div className='form-section row'>
                      <input type="text" name="search_item" className='col-md-4' placeholder='What are you looking for?' />
                      <select name="search_item" className='col-md-3'>
                          <option id="all_statuses">All Statuses</option>
                          <option id="for_rent">For rent</option>
                          <option id="for_sale">For sale</option>
                      </select>
                      <select name="search_item" className='col-md-3'>
                          <option id="all_statuses">All Cities</option>
                          <option id="for_rent">For rent</option>
                          <option id="for_sale">For sale</option>
                      </select>
                      <button type='button' className='bg-blue col-md-2 text-small text-bold text-white'>
                        Search&nbsp;&nbsp;
                        <AiOutlineSearch />
                      </button>
                  </div>
               </div>
            </div>
            <strong className='text-white text-bold'>Need more search options ?</strong>
            <span className='advanced-search'>Advanced Search</span>
        </div>
        <BackgroundSlider
          images={['/photos/banner-photo.jpg', 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg']}
          duration={7} transition={2} />
    </section>
  )
}

export default Banner;
