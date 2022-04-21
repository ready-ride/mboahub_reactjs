import React from 'react';
import './SelectInput.css';

function SelectInput({name, data, label, handleSelect}) {
  return (
    <div className="form-group">
        <label htmlFor={name} className="text-small text-dark-blue">{label}</label>
        <select selected={data||''}  className="select-input form-control mt-2" id={name} name={name} onSelect={handleSelect}>
            <option value='single_room'>Single Room</option>
            <option value='studio'>Studio</option>
            <option value='apartment'>Apartment</option>
            <option value='villa'>Villa</option>
            <option value='hotel'>Hotel</option>
        </select>
    </div>
  )
}

export default SelectInput;
