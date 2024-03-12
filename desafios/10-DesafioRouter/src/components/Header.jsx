import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={style.link}>Produtos</NavLink>
          </li>
          <li>
            <NavLink to="contato" className={style.link}>Contato</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
