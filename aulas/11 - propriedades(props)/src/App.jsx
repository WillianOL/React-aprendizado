import React from 'react';
import Form from './Formulario/Form';

// Os argumentos dos componentes são passados em forma de objeto(props), e
// cada propriedade desse objeto é passado como parâmetro na execução do
// componente, no caso do Titulo o texto=""
const Titulo = ({ cor, texto }) => {
  return <h1 style={{ backgroundColor: cor }}>{texto}</h1>;
};

// Usar a propriedade children(que é uma array) para exibir os elementos passados dentro
// do componente
const Header = ({ children }) => {
  return <header>{children}</header>
}
// Pode-se passar qualquer tipo de dado para as propriedades dos componentes.(até mesmo outros componentes)
const LoginVerific = ({logado, nome}) => {
  if(logado) {
    return <p>Olá, {nome}. Bem vindo de volta!</p>
  } else {
    return <p>Bem vindo! Crie sua conta.</p>
  }
}

// Os componentes podem ser abertos e fechados, podendo colocar outros elementos
// ou componentes como seus filhos(children)
function App() {
  const userLog = true;
  const userName = 'Zé do grau';
  return (
    <>
      <Header>
        <Titulo texto="Titulo principal" cor="#35F" />
        <Titulo texto="Titulo Secundario" cor="#F35" />
      </Header>
      <Form titulo="Login" />
      <LoginVerific logado={userLog} nome={userName}/>
    </>
  );
}

export default App;
