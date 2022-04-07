import React from 'react';
import './SelectInput.css';

function SelectInput({name, data, label, handleSelect}) {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select value={data||''}  className="select-input form-control mt-2" id={name} name={name} onSelect={handleSelect}>
            <option>Single Room</option>
            <option>Studio</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Hotel</option>
        </select>
    </div>
  )
}

export default SelectInput