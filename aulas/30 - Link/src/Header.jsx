import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  // O Link faz a mudança de rota sem atualizar a página, assim ficando reativa e sem precisar de
  // recarregamento. Esse é um dos motivo pelo qual o React é utilizado.
  // O navLink vai espeficicar qual componente está ativo(renderizado) no momento, colocando a classe active no botão do navLink. Assim, podemos estilizar o botão para quando ficar ativo ter um estilo diferente.
  return (
    <header className="header">
      <h2>Header</h2>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>{' '}
        |{' '}
        <NavLink to="contato">
          Contato
        </NavLink>{' '}
        |{' '}
        <NavLink to="login">
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
