import React from 'react';
// Para usar o styled components é preciso instalar - npm install styled-components
import styled from 'styled-components';

// É a mesma coisa de criar um componente, colocando como uma variável e utilizando a importação do
// styled components para acessarmos as tags(isso retorna a tag) e com as crases `` colocamos os
// estilos
// em resumo, é como utilizar css juntamente com javascript
const Title = styled.h1`
  font-size: 2.5rem;
  font-family: monospace;
  color: tomato;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 1rem;
`;

const ConteinerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Podemos utilizar um callback para definir as propriedades dos estilos
// O callback ira puxar os parâmetros que o componente receber
// no caso, o parâmetro "cor"
const Button = styled.button`
  background-color: pink;
  color: ${({ cor }) => cor};
  transform: ${({ estado }) => (estado ? 'scale(1.5) translateX(40px)' : '')};
  transition: all .2s ease;
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  width: fit-content;
  &:hover {
    background-color: yellow;
  }
`;

function App() {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <ConteinerPrincipal>
      <Title>Titulo principal</Title>
      <Input />
      <Button cor="#2256ff" estado={ativo} onClick={() => setAtivo(!ativo)}>
        Comprar
      </Button>
    </ConteinerPrincipal>
  );
}

export default App;
