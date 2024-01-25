import React from 'react';

const Select = () => {
  // SELECT
  // Forma de forçar o usuário a escolher um valor. Passando uma opção desabilitada e com
  // valor vazio. Assim não pode selecionar ela mas o usuário terá que entrar para
  // selecionar um valor.
  const [select, setSelect] = React.useState('');

  return (
    <>
      <select value={select} onChange={({target}) => setSelect(target.value)} id='frutas'>
        <option disabled value="">Selecionar</option>
        <option value="banana">Banana</option>
        <option value="jabuticaba">Jabuticaba</option>
        <option value="siriguela">Siriguela</option>
      </select>
      {select}
    </>
  )
}

export default Select