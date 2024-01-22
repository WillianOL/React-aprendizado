// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

import React from "react"
import Input from "./Input";


function App() {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  })

  const [response, setResponse] = React.useState("")

  function enviarForm(event) {
    event.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then(response => {
      setResponse(response)
    })
  }

  return (
    <>
      <form onSubmit={enviarForm}>
        <Input nome="Nome" id="nome" form={form} setForm={setForm}/>
        <Input nome="Email" id="email" form={form} setForm={setForm}/>
        <Input nome="Senha" id="senha" tipo="password" form={form} setForm={setForm}/>
        <Input nome="Cep" id="cep" tipo="number" form={form} setForm={setForm}/>
        <Input nome="Rua" id="rua" form={form} setForm={setForm}/>
        <Input nome="Numero" id="numero"tipo="number" form={form} setForm={setForm}/>
        <Input nome="Bairro" id="bairro" form={form} setForm={setForm}/>
        <Input nome="Cidade" id="cidade" form={form} setForm={setForm}/>
        <Input nome="Estado" id="estado" form={form} setForm={setForm}/>
        <button style={{marginTop: "20px"}} >Enviar</button>
      </form>
      {response && response.ok && <p>Usuário Criado</p>}
    </>

  );
}

export default App;
