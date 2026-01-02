import React from "react";

function RadioOption({ onChange, label, value, name, selectedValue,className=""}) {
  const id = `${name}-${value}`;

  return (
    <div className={`form-check-inline ${className}`}>
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={selectedValue === value}
        onChange={() => onChange(value)}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default RadioOption;
