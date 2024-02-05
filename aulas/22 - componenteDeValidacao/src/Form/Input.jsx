import React from 'react';

const Input = ({ label, id, onChange, type, value, onBlur, placeholder, error }) => {
  return (
    <>
      <label htmlFor={id}>
        {label}
        <input
          type={type}
          value={value}
          id={id}
          name={id}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={onBlur}
        />
        {error && <p>{error}</p>}
      </label>
    </>
  );
};

export default Input;
