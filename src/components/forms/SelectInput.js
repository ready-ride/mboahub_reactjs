import React from 'react'

function SelectInput({name, label}) {
  return (
    <div className="form-group">
        <label for={name}>{label}</label>
        <select className="form-control mt-2" id={name}>
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