import React from 'react';
import FormInput from '../../../components/forms/FormInput';
import SelectInput from '../../../components/forms/SelectInput';
import TextAreaInput from '../../../components/forms/TextAreaInput';
import './NewListing.css';

function NewListing() {
  return (
    <div className='new-listing'>
        <h5 className='my-4 pb-4 border-bottom'>ADD LISTING</h5>
        <form>
            <div className='listing-info shadow'>
                <h6>Basic Informations</h6>
                <div className='row'>
                    <div className='col-md-4'>
                         <FormInput
                            type="text"
                            name="listing_name"
                            placeholder="Title of your listing"
                            label="Listing Title"
                            data=""
                            handleChange=""
                         />
                    </div>
                    <div className='col-md-4'>
                        <SelectInput label="Home Type" name="home_type" />
                    </div>
                    <div className='col-md-4'>
                        <FormInput
                            type="text"
                            name="cost"
                            placeholder="Listing Price"
                            label="Listing Price"
                            data=""
                            handleChange=""
                         />
                    </div>
                </div>
            </div>
            <div className='listing-info mt-4 shadow'>
                <h6>Location of Listing</h6>
                <div className='row'>
                    <div className='col-md-6'>
                         <FormInput
                            type="text"
                            name="city"
                            placeholder="City"
                            label="City"
                            data=""
                            handleChange=""
                         />
                    </div>
                    <div className='col-md-6'>
                        <FormInput
                            type="text"
                            name="street"
                            placeholder="Enter Sreet"
                            label="Listing Street"
                            data=""
                            handleChange=""
                         />
                    </div>
                </div>
            </div>
            <div className='listing-info mt-4 shadow'>
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
                                data=""
                                handleChange=""
                            />
                          </div>
                          <div className='col-md-6'>
                            <FormInput
                                type="text"
                                name="sitting_room"
                                placeholder="No. of Sitting Room"
                                label="Sitting rooms"
                                data=""
                                handleChange=""
                            />
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md-6'>
                            <FormInput
                                type="text"
                                name="parking"
                                placeholder="Parking available?"
                                label="Garage"
                                data=""
                                handleChange=""
                            />
                          </div>
                          <div className='col-md-6'>
                            <FormInput
                                type="text"
                                name="kitchen"
                                placeholder="Kitchen available?"
                                label="Kitchen ?"
                                data=""
                                handleChange=""
                            />
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md-6'>
                            <FormInput
                                type="text"
                                name="fence"
                                placeholder="Fence available?"
                                label="Fenced ?"
                                data=""
                                handleChange=""
                            />
                          </div>
                          <div className='col-md-6'>
                            <FormInput
                                type="text"
                                name="num_toilets"
                                placeholder="No. of Toilets"
                                label="Toilets"
                                data=""
                                handleChange=""
                            />
                          </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                        <TextAreaInput label="Listing Details" name="summary" />
                    </div>
                </div>
            </div>
            <div className='listing-info mt-4 shadow'>
                <h6>Image Upload</h6>
                <div className='row'>
                    <div className='col-md-10 col-md-offset-1'>
                    <div>
                        <label for="formFileLg" class="form-label">Large file input example</label>
                        <input class="form-control form-control-lg" id="formFileLg" type="file"/>
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary mt-4'>Save changes</button>
            </div>
        </form>
    </div>
  )
}

export default NewListing
