import React from 'react'

const Input = ({id, label, placeholder, ...props}) => {
  return (
    <div style={{marginBottom:"15px"}}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} placeholder={placeholder} {...props} />
    </div>
  );
}

export default Input
