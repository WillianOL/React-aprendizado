import React from 'react';

const Input = ({ label, id, onChange, ...props }) => {
  // Usar o rest para receber as propriedades "adicionais" que não foram desestruturadas.
  // e usar o spread para espalhar e colocar essas propriedades no input
  return (
    <>
      <label htmlFor={id}>
        {label}
        <input
          type="text"
          id={id}
          name={id}
          onChange={onChange}
          {...props}
        />
      </label>
    </>
  );
};

export default Input;
