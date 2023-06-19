import React, {useState} from 'react';
import RangeSlider from 'react-range-slider-input';
import FormInput from '../../components/forms/FormInput';
import SelectInput from '../../components/forms/SelectInput';

const SearchBar = () => {
  const [address, setAddress] = useState();
  const [status, setStatus] = useState('All Statuses');
  const [city, setCity] = useState('All Cities');
  const [category, setCategory] = useState('All Categories');
  const [value, setValue] = useState([30, 60]);

  const houseOptions = [
    { label: 'Select house type', value: '' },
    { label: 'Single Room', value: 'single_room' },
    { label: 'Studio', value: 'studio' },
    { label: 'Apartment', value: 'apartment' },
    { label: 'Villa', value: 'villa' },
    { label: 'Hotel', value: 'hotel' },
  ];

  return (
    <div className="row w-100 bg-white">
    <div className="col-md-12">
      <div className="d-flex align-items-center">
        <strong className="mx-4 mt-2">Search:</strong>
        <div className="col-md-2 mt-2 mx-2">
          <FormInput
            type="text"
            name="address"
            placeholder="Address, Street, State... "
            data={address}
            handleChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="col-md-2 mt-2 mx-2">
          <SelectInput
            options={houseOptions}
            name="status"
            data={status}
            handleSelect={(e) => setStatus(e.target.value)}
          />
        </div>
        <div className="col-md-2 mt-2 mx-2">
          <SelectInput
            options={houseOptions}
            name="city"
            data={city}
            handleSelect={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="col-md-1 mt-2 mx-2">
          <SelectInput
            options={houseOptions}
            name="categories"
            data={category}
            handleSelect={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="col-md-2 mx-2">
          <RangeSlider value={value} onInput={setValue} />
        </div>
        <div className="col-md-2 mx-2 text-small">
          <span>ADVANCED SEARCH</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SearchBar