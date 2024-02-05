import React from 'react';

const typeValidation = {
  // Objeto com os dados que vão ser validados, com os regex especificos
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    errorMessage: 'Cep invalido',
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    errorMessage: 'Email inválido',
  },
};

const useForm = (dataType) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  // Validação do valor digitado no campo
  function validar(value) {
    if(dataType === false) return true
    if (value.length === 0) {
      setError('Preencha este campo');
      return false;
      // Acessa o objeto através do "[]" e selecionando a propriedade regex e testando.
    } else if (
      typeValidation[dataType] &&
      !typeValidation[dataType].regex.test(value)
    ) {
      setError(typeValidation[dataType].errorMessage);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validar(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    onBlur: () => validar(value),
    validar: () => validar(value),
  };
};

export default useForm;
