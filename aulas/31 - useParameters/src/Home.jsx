import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Utilizando o Link podemos criar rotas dinâmicas. O produto o parâmetro id(rota) que
  // podemos manipular de acordo com a rota clicada
  return (
    <div>
      <h1>Essa é a home</h1>
      <Link to="produto/celular">Celular</Link>{" "}
      <Link to="produto/tv">TV</Link>
    </div>
  );
};

export default Home;
