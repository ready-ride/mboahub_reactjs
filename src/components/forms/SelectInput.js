/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import './SelectInput.css';

function SelectInput({
  name, options, data, label, handleSelect,
}) {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={name} className="text-small text-dark-blue">
          {label}
        </label>
      )}
      <select value={data} className="select-input form-control" id={name} name={name} onChange={handleSelect}>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
