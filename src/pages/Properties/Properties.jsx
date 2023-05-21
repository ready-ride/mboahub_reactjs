import React, {useState} from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { PageWrapper } from './style';
import FormInput from '../../components/forms/FormInput';
import SelectInput from '../../components/forms/SelectInput';
import MapComponent from '../../components/MapComponent/MapComponent';
import { useFetchHouses } from '../../hooks/houses/useFetchHouses';
import PropertyItem from '../../components/PropertyItem/PropertyItem';
import { Oval } from 'react-loader-spinner';
const Properties = () => {
  const [address, setAddress] = useState();
  const [status, setStatus] = useState('All Statuses');
  const [city, setCity] = useState('All Cities');
  const [category, setCategory] = useState('All Categories');
  const [value, setValue] = useState([30, 60]);

  const {handlePageClickPrev, handlePageClickNext, num_pages, params, houses, houseloading } = useFetchHouses();

  const houseOptions = [
    {label: 'Select house type', value: ''},
    {label: 'Single Room', value: 'single_room'},
    {label: 'Studio', value: 'studio'},
    {label: 'Apartment', value: 'apartment'},
    {label: 'Villa', value: 'villa'},
    {label: 'Hotel', value: 'hotel'},
  ]

  return (
    <PageWrapper>
      <div className='row w-100 position-fixed bg-white'>
        <div className='col-md-12'>
          <div className='d-flex align-items-center'>
            <strong className='mx-4 mt-2'>Search:</strong>
            <div className='col-md-2 mt-2 mx-2'>
              <FormInput
                type="text"
                name="address"
                placeholder='Address, Street, State... '
                data={address}
                handleChange={e => setAddress(e.target.value)} />
            </div>
            <div className='col-md-2 mt-2 mx-2'>
              <SelectInput
                options={houseOptions}
                name="status"
                data={status}
                handleSelect={e => setStatus(e.target.value)} />
            </div>
            <div className='col-md-2 mt-2 mx-2'>
              <SelectInput
                options={houseOptions}
                name="city"
                data={city}
                handleSelect={e => setCity(e.target.value)} />
            </div>
            <div className='col-md-1 mt-2 mx-2'>
              <SelectInput
                options={houseOptions}
                name="categories"
                data={category}
                handleSelect={e => setCategory(e.target.value)} />
            </div>
            <div className='col-md-2 mx-2'>
              <RangeSlider value={value} onInput={setValue} />
            </div>
            <div className='col-md-2 mx-2 text-small'>
              <span>ADVANCED SEARCH</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', top: 100, zIndex: -100 }}>
        <div className='position-fixed w-50'>
          <MapComponent />
        </div>
        <div className='position-absolute mx-2 end-0 d-flex w-50 flex-wrap row'>
          {houseloading ?
            <div className='mx-auto col-md-6'>
              <Oval color="#00BFFF" height={200} width={200} />
            </div>
            :
            houses && houses.map((house, i) => {
              return <div key={i} className='col-sm'><PropertyItem house={house} key={house.id} /></div>;
            })}
            <div className='ml-4'>
              {params.page > 0 &&
                <>
                  <span className='rounded bg-white border border-primary text-primary p-2 mx-2'>{1}</span>
                  <span className='text-primary p-2 mx-2'>...</span>
                  <button className='bg-primary text-white p-1' onClick={handlePageClickPrev}>Prev</button>
                </>}
              <span className='bg-white text-primary p-2 border mx-1 rounded border-primary'>{params.page + 1}</span>
              {params.page < num_pages - 1 &&
                <>
                  <button className='bg-primary text-white p-1' onClick={handlePageClickNext}>Next</button>
                  <span className='text-primary p-2 mx-2'>...</span>
                  <span className='rounded bg-white border border-primary text-primary p-2 mx-2'>{num_pages}</span>
                </>}
            </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Properties;