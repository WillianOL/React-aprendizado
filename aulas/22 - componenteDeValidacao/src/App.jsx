import React from 'react';
import Input from './Form/Input';
import useForm from './Hooks/useForm';

function App() {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  function enviarForm(event) {
    event.preventDefault();
    if (cep.validar() && email.validar() && nome.validar()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <>
      <form onSubmit={enviarForm}>
        <Input label="Nome" id="nome" type="text" {...nome} />
        <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
        <Input
          label="Cep"
          id="cep"
          type="text"
          placeholder="00000-000"
          {...cep}
        />
        <Input label="Email" id="email" type="email" {...email} />
        <button>Enviar</button>
      </form>
    </>
  );
}

export default App;
