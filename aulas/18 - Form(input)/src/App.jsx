import React from 'react';

// Para criar-se a reatividade dentro dos furmulários, devemos passar o estado no value do input e a função atualizadora no onChange.
function App() {
  // Forma de definir multiplos campos no form, criando um estado para cada campo.
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [form, setForm] = React.useState({
    nome: '',
    email: ''
  })


  // Pode-se adicionar o evento de onSubmit no formulário, assim toda vez que o botão
  // for clicado o submit do formulário será ativado.
  function enviarForm(event) {
    event.preventDefault();
  }

  function mudancaAleatoria({target}) {
    const {id, value} = target
    setForm({...form, [id]: value})
  }

  return (
    <form onSubmit={enviarForm}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        value={form.nome}
        onChange={mudancaAleatoria}
        id="nome"
        name="nome"
      />
      {form.nome}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={form.email}
        onChange={mudancaAleatoria}
        id="email"
        name="email"
        required
      />
      {form.email}
      <button>Enviar</button>
    </form>
  );
}

export default App;
