import React from 'react';

const AutoInput = ({ label, name }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input name={name} id={label} type="text" required />
    </div>
  );
};

export default AutoInput;
