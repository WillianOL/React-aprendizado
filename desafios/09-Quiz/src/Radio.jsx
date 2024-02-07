import React from 'react';

const Radio = ({ options, pergunta, onChange, value, id, active }) => {
  if (active === false) return null;
  return (
    <fieldset style={{ padding: '2rem', marginBottom: '1rem' }}>
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option) => {
        return (
          <label
            key={option}
            style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
          >
            <input
              type="radio"
              value={option}
              onChange={onChange}
              checked={value === option}
              id={id}
            />
            {option}
          </label>
        );
      })}
    </fieldset>
  );
};

export default Radio;
