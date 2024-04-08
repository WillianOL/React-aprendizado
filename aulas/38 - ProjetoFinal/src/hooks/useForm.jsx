import React from 'react';

const validacao = {
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    mensagem: 'Preencha um email válido',
  },
};

const useForm = (tipo) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validar(value) {
    if (tipo === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if (validacao[tipo] && !validacao[tipo].regex.test(value)) {
      setError(validacao[tipo].mensagem);
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
    validar: () => validar(value),
    onBlur: () => validar(value),
    error,
  };
};

export default useForm;
