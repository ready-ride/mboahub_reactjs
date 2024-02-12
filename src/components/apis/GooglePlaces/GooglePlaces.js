/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './GooglePlaces.css';

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Oval } from 'react-loader-spinner';

export default function GooglePlaces({ address, setAddress, setCoordinates }) {
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <div className="google-places">
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
        {({
          getInputProps, suggestions, getSuggestionItemProps, loading,
        }) => (
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="address" className="text-small text-dark-blue mb-2">
                Address
              </label>
              <input
                id="address"
                style={{ backgroundColor: '#F4F7FB' }}
                className="border rounded form-control"
                {...getInputProps({ placeholder: 'Enter address' })}
              />
              <div>
                {loading ? (
                  <div>
                    <Oval color="#00BFFF" height={50} width={50} />
                  </div>
                ) : null}

                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                  };

                  return (
                    <div
                      key={suggestion.index}
                      style={style}
                      {...getSuggestionItemProps(suggestion)}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
