import React from 'react'

const Button = () => {
  function enviarForm(event) {
    event.preventDefault();
    console.log("Formulário enviado!");
  }

  return (
    <button type='submit'onClick={enviarForm}>Enviar</button>
  )
}

export default Button
