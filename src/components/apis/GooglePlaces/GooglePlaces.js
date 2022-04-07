import React from "react";
import './GooglePlaces.css';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

export default function GooglePlaces() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <div className="google-places">
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="row">
             <div className="col-md-6">
             <label htmlFor="address">Address</label>
                <input id="address" className="border bg-gray rounded form-control" {...getInputProps({ placeholder: "Enter address" })} />
                <div>
                    {loading ? <div>...loading</div> : null}

                    {suggestions.map(suggestion => {
                      const style = {
                        backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                      };

                      return (
                        <div {...getSuggestionItemProps(suggestion, { style })}>
                          {suggestion.description}
                        </div>
                      );
                    })}
                </div>
             </div>
            <div className="col-md-6">
              <span>Latitude: {coordinates.lat}</span>
              <span>Longitude: {coordinates.lng}</span>
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};
