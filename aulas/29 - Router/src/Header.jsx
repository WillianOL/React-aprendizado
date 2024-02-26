import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <h2>Marca</h2>
      <nav>
        <ul>
          <li>LINK 01</li>
          <li>LINK 02</li>
          <li>LINK 03</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
