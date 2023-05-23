import React, { useState, useEffect } from 'react';
import GooglePlaces from '../../../components/apis/GooglePlaces/GooglePlaces';
import FormInput from '../../../components/forms/FormInput';
import SelectInput from '../../../components/forms/SelectInput';
import TextAreaInput from '../../../components/forms/TextAreaInput';

import { IoMdInformation } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';

import './NewListing.css';
import { userStatus } from '../../../services/UserServices';
import { Navigate } from 'react-router-dom';
import { useUploadImage } from '../../../hooks/images/useUploadImage';
import { useHouseCreate } from '../../../hooks/houses/useHouseCreate';

function NewListing() {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });
    let token = userStatus();
    token = token && token.token;

    if(!token){
       return <Navigate to="/signin" />
    }
    const { files, urls, imageLoading, handleFileChange, uploadImage } = useUploadImage();
    const { handleChange, handleSelect, handleCreateHouse, error, houseloading, response, data } = useHouseCreate(urls);
    
    const houseOptions = [
        {label: 'Select house type', value: ''},
        {label: 'Single Room', value: 'single_room'},
        {label: 'Studio', value: 'studio'},
        {label: 'Apartment', value: 'apartment'},
        {label: 'Villa', value: 'villa'},
        {label: 'Hotel', value: 'hotel'},
      ]
    
  let addressArr = '';

  useEffect(() => {
    addressArr = address.split(', ');
    data.city = address.split(', ')[0];
    data.street = address;
    data.lat = coordinates.lat;
    data.lng = coordinates.lng;
    data.country = addressArr[addressArr.length - 1];
  }, [address, coordinates]);

  return (
    <div className='new-listing'>
        <h5 className='my-2 pb-4 border-bottom'>ADD LISTING</h5>
        <form>
            <div className='listing-info shadow'>
                <h6><span className="text-blue text-bold"><IoMdInformation /></span>Basic Informations</h6>
                <div className='row'>
                    <div className='col-md-4'>
                         <FormInput
                            type="text"
                            name="listing_name"
                            placeholder="Title of your listing"
                            label="Listing Title"
                            data={data.listing_name}
                            handleChange={handleChange}
                         />
                    </div>
                    <div className='col-md-4 mt-4'>
                        <SelectInput
                          label="Home Type"
                          options={houseOptions}
                          name="home_type"
                          data={data.home_type}
                          handleSelect={handleSelect}
                        />
                    </div>
                    <div className='col-md-4'>
                        <FormInput
                          type="text"
                          name="cost"
                          placeholder="Listing Price"
                          label="Listing Price"
                          data={data.cost}
                          handleChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className='listing-info shadow'>
                <div className="text-blue text-bold d-flex">
                  <GoLocation />
                  <h6 className='ml-2'>Location of Listing</h6>
                </div>
                <div className='row'>
                  <div className='col-md-12'>
                    <GooglePlaces address={address} setAddress={setAddress} coordinates={coordinates} setCoordinates={setCoordinates} />
                  </div>
                  <div className='col-md-6'>
                    <FormInput
                      type="text"
                      name="city"
                      placeholder="City"
                      label="City"
                      data={data.city }
                      handleChange={handleChange}
                    />
                  </div>
                  <div className='col-md-6'>
                    <FormInput
                      type="text"
                      name="country"
                      placeholder="Enter Country"
                      label="Listing Country"
                      data={data.country}
                      handleChange={handleChange}
                    />
                  </div>
                </div>
            </div>
            <div className='listing-info shadow'>
                <h6>Listing Details</h6>
                <div className='row'>
                    <div className='col-md-6'>
                      <div className='row'>
                          <div className='col-md-6'>
                            <FormInput
                                type="text"
                                name="num_bed_rooms"
                                placeholder="No. of bedrooms"
                                label="Bedrooms"
                                data={data.num_bed_rooms}
                                handleChange={handleChange}
                            />
                          </div>
                          <div className='col-md-6'>
                            <FormInput
                                type="text"
                                name="sitting_room"
                                placeholder="No. of Sitting Room"
                                label="Sitting rooms"
                                data={data.sitting_room}
                                handleChange={handleChange}
                            />
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md-6'>
                            <SelectInput
                                name="parking"
                                label="Garage"
                                data={data.parking}
                                options={[{label: 'Has Parking', value: true}, {label: 'No Parking', value: false}]}
                                handleSelect={handleSelect}
                            />
                          </div>
                          <div className='col-md-6'>
                            <SelectInput
                                name="kitchen"
                                label="Kitchen ?"
                                data={data.kitchen}
                                options={[{label: 'Has Kitchen', value: true}, {label: 'No Kitchen', value: false}]}
                                handleSelect={handleSelect}
                            />
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md-6 mt-3'>
                            <SelectInput
                                name="fence"
                                label="Fenced ?"
                                data={data.fence}
                                options={[{label: 'Is Fenced', value: true}, {label: 'Not Fenced', value: false}]}
                                handleSelect={handleSelect}
                            />
                          </div>
                          <div className='col-md-6'>
                            <FormInput
                                type="text"
                                name="num_toilets"
                                placeholder="No. of Toilets"
                                label="Toilets"
                                data={data.num_toilets}
                                handleChange={handleChange}
                            />
                          </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                        <TextAreaInput data={data.summary} handleChange={handleChange} label="Listing Details" name="summary" />
                    </div>
                </div>
            </div>
            <div className='listing-info shadow'>
                <div className='d-flex flex-wrap'>
                    { urls && urls.map((url, i) => <img alt='house-thumbnail' key={i} width="50px" className='img img-thumbnail m-1' src={url}/> )}
                    { imageLoading && 'uploading ...'}
                </div>
                <h6>Image Upload</h6>
                <div className='row'>
                    <div className='col-md-8 '>
                        <div className="form-group">
                            <input
                                type="file"
                                className="form-control"
                                disabled={urls && urls.length >= 10}
                                onChange={handleFileChange}
                                multiple
                            />
                        </div>
                    </div>
                    <div className='col-md-4'>
                      <button disabled={(files.length === 0)} type="button" className="btn btn-primary btn-block" onClick={ uploadImage } > { imageLoading ? '...' : 'Upload'}</button>
                    </div>
                </div>
                <span className="text-danger">{ error && error }</span><br />
                <button disabled={ imageLoading } className='btn btn-primary mt-4' onClick={handleCreateHouse}>{ houseloading && '...' }Add House</button>
                { response  && <div className="text-blue">House created successfully !!</div> }
            </div>
        </form>
    </div>
  )
}

export default NewListing;
