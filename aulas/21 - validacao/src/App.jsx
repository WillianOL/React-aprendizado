import React from 'react';
import Input from './Form/Input';

function App() {
  // Definir um estado para a validação do elemento, no caso o cep
  const [cep, setCep] = React.useState('');
  // Estado de erro que vai ser modificado de acordo com cada erro de validação.
  const [error, setError] = React.useState(null);

  // Função separada para fazer a validação com o valor do input
  function validarCep(value) {
    if (value.length === 0) {
      setError('Preencha este campo');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um Cep valido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  // executa a função de validação passando o valor do input como argumento.
  function verificarBlur({ target }) {
    validarCep(target.value);
  }

  // Valida caro tenha um erro
  function handleChange({ target }) {
    if (error) validarCep(target.value);
    setCep(target.value);
  }

  // Valida na hora de enviar o form
  function enviarForm(event) {
    event.preventDefault()
    if(validarCep(cep)) {
      console.log("Enviar");
    } else {
      console.log("Não enviar");
    }
  }

  return (
    <>
      <form onSubmit={enviarForm}>
        <Input
          label="Cep"
          id="cep"
          type="text"
          placeholder="00000-000"
          onChange={handleChange}
          onBlur={verificarBlur}
          value={cep}
        />
        {error && <p>{error}</p>}
        <button>Enviar</button>
      </form>
    </>
  );
}

export default App;
