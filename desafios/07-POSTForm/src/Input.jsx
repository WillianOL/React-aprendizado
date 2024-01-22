import React from 'react'

const Input = ({ nome, tipo="text", id, form ,setForm}) => {
  function colocarDados({ target }) {
    const {id, value} = target
    setForm({...form, [id]: value})
  }


  return (
    <>
      <label htmlFor={id}>{nome}</label>
      <input type={tipo} placeholder={nome} id={id} onChange={colocarDados}/>
    </>

    
  )
}

export default Input