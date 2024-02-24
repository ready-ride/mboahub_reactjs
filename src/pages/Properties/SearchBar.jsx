import React, { useContext, useState } from 'react';
// import RangeSlider from 'react-range-slider-input';
import { AiOutlineSearch } from 'react-icons/ai';
import FormInput from '../../components/forms/FormInput';
import SelectInput from '../../components/forms/SelectInput';
import { SearchInputContext } from '../../contexts/SearchInputContext';
import './styles.css';

const SearchBar = () => {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [homeType, setHomeType] = useState('');
  // const [value, setValue] = useState([30, 60]);

  const { inputObj, setInputObj } = useContext(SearchInputContext);

  const houseOptions = [
    { label: 'Select house type', value: '' },
    { label: 'Single Room', value: 'single_room' },
    { label: 'Studio', value: 'studio' },
    { label: 'Apartment', value: 'apartment' },
    { label: 'Villa', value: 'villa' },
    { label: 'Hotel', value: 'hotel' },
  ];

  const filterHouse = (e) => {
    e.preventDefault();
    setInputObj({
      ...inputObj, city, street, country, homeType,
    });
  };

  return (
    <div className="w-100 bg-white search-bar">
      <div className="search-bar-content">
        <strong className="mx-2 mt-2">Search:</strong>
        <div className="mt-2">
          <FormInput
            type="text"
            name="street"
            placeholder="Street address"
            data={street}
            handleChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="mt-2 mx-2">
          <FormInput type="text" name="city" placeholder="All Cities" data={city} handleChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="mt-2 mx-2">
          <FormInput
            type="text"
            name="country"
            placeholder="All Countries"
            data={country}
            handleChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="mt-2 mx-2">
          <SelectInput options={houseOptions} name="homeType" data={homeType} handleSelect={(e) => setHomeType(e.target.value)} />
        </div>
        <button type="button" onClick={filterHouse} className="bg-primary rounded py-2 text-small text-bold text-white">
          Search&nbsp;&nbsp;
          <AiOutlineSearch />
          {/* <RangeSlider value={value} onInput={setValue} /> */}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
