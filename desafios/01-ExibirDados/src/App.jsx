import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const totalGasto = dados.compras
    .map(dado => +dado.preco.replace('R$ ', ''))
    .reduce((acumulador, dado) => {
      return acumulador + dado;
    }, 0);

  return (
    <ul style={{ listStyle: 'none' }}>
      <li>Nome: {dados.cliente}</li>
      <li>Idade: {dados.idade}</li>
      <li>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </li>
      <li>Total de gasto: R${totalGasto}</li>
      {totalGasto > 10000 && <p>Gasto passou do limite</p>}
    </ul>
  );
};

export default App;
