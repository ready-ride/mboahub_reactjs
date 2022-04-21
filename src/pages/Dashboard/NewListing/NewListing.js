import React, { useState } from 'react';
// import GooglePlaces from '../../../components/apis/GooglePlaces/GooglePlaces';
import FormInput from '../../../components/forms/FormInput';
import SelectInput from '../../../components/forms/SelectInput';
import TextAreaInput from '../../../components/forms/TextAreaInput';

import { createHouses } from '../../../services/HouseServices';

import { IoMdInformation } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';

import './NewListing.css';
import { userStatus } from '../../../services/UserServices';
import { Navigate } from 'react-router-dom';

function NewListing() {

    let token = userStatus();
    token = token && token.token;

    if(!token){
       return <Navigate to="/signin" />
    }
    const [files, setFiles] = useState("");
    const [urls, setUrls] = useState([]);
    const [imageLoading, setImageLoading] = useState(false);

    const [data, setData] = useState({});
    const [response, setResponse] = useState();
    const [error, setError] = useState();
    const [houseloading, setHouseLoading] = useState(false);

    const uploadImage = e => {
        e.preventDefault();
        setImageLoading(true);
        Object.entries(files).map(image => {
            const data = new FormData()
            data.append("file", image[1])
            data.append("upload_preset", process.env.REACT_APP_HOUSE_PRESET)
            data.append("cloud_name",process.env.REACT_APP_CLOUDINARY_NAME)

            fetch(process.env.REACT_APP_CLOUDINARY_URL, {method:"post", body: data})
                .then(resp => resp.json())
                .then(data => {
                    setUrls(prevState => ([...prevState, data.url]));
                })
                .catch(err => console.log(err))

                return 0;
            })

        setImageLoading(false);
        setFiles("");

        return 0;
    }

    const  handleFileChange = e => {
       setFiles(e.target.files);
      }

    const handleCreateHouse = e => {
        e.preventDefault();

        setHouseLoading(true);

    const houseData = {
        listing_name: data.listing_name,
        summary: data.summary,
        home_type: data.home_type || '',
        cost: data.cost,
        location: {
            city: data.city,
            street: data.street,
        },
        properties: {
            num_bed_rooms: data.num_bed_rooms,
            sitting_room: data.sitting_room,
            parking: data.parking,
            kitchen: data.kitchen,
            fence: data.fence,
            num_toilets: data.num_toilets,
        },
        images: urls,
    };

        (async() => {
            let res = await createHouses(houseData, token);
            setHouseLoading(false);
            if (Object.keys(res).includes('error')) {
                setError(res['error']);
            }else {
                setResponse(res);
            }
          })();
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSelect = e => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const houseOptions = [
        {label: 'Select house type', value: ''},
        {label: 'Single Room', value: 'single_room'},
        {label: 'Studio', value: 'studio'},
        {label: 'Apartment', value: 'apartment'},
        {label: 'Villa', value: 'villa'},
        {label: 'Hotel', value: 'hotel'},
      ]

  return (
    <div className='new-listing'>
        <h5 className='my-2 pb-4 border-bottom'>ADD LISTING</h5>
        <form>
            <div className='listing-info shadow'>
                <h6><span className="text-blue text-bold"><IoMdInformation /></span>Basic Informations</h6>
                <div className='row'>
                    <div className='col-md-4 mt-2'>
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
                    <div className='col-md-4 mt-2'>
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
                <h6><span className="text-blue text-bold"><GoLocation /></span>Location of Listing</h6>
                <div className='row'>
                    <div className='col-md-6'>
                         <FormInput
                            type="text"
                            name="city"
                            placeholder="City"
                            label="City"
                            data={data.city}
                            handleChange={handleChange}
                         />
                    </div>
                    <div className='col-md-6'>
                        <FormInput
                            type="text"
                            name="street"
                            placeholder="Enter Sreet"
                            label="Listing Street"
                            data={data.street}
                            handleChange={handleChange}
                         />
                    </div>
                    <div className='col-md-12'>
                      {/* <GooglePlaces /> */}
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
                      <button disabled={(files.length === 0)} type="button" className="btn btn-primary btn-block" onClick={ uploadImage } > Upload{ imageLoading && '...'}</button>
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
