import React from 'react';

const Checkbox = ({ options, value, setValue }) => {
  // No caso do checkbox, exige uma função separada para fazer a varificação
  // Se o item clicado estiver marcado, coloca ele no estado(array)
  // Se não, passa um filter no estado retornando o item que for diferente
  // do target.value(item clicado)
  function modificarTipo({target}) {
    if(target.checked) {
      setValue([...value, target.value])
    } else {
      setValue(value.filter(itemValue => itemValue !== target.value))
    }
  }

  return (
    <>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              type="checkbox"
              checked={value.includes(option)}
              value={option}
              onChange={modificarTipo}
            />
            {option}
          </label>
        );
      })}
    </>
  );
};

export default Checkbox;
