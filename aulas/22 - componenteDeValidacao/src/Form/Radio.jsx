import React from 'react';

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((item) => {
        return (
          <label key={item}>
            <input
              type="radio"
              onChange={({ target }) => setValue(target.value)}
              value={item}
              checked={value === item}
              {...props}
            />
            {item}
          </label>
        );
      })}
    </>
  );
};

export default Radio;
