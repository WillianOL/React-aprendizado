import React from 'react'
import Input from './Input'
import Button from './Button'

const Form = ({titulo}) => {
  return (
    <form>
      <h2>{titulo}</h2>
      <Input id="inputEmail" label="Email" placeholder="Email" />
      <Input id="inputSenha" type="password" label="Senha" placeholder="Senha" required />
      <Button />
    </form>
  )
}

export default Form
