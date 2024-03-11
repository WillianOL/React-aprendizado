import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>{" "}
      <Link to="sobre">Sobre</Link>{" "}
      <Link to="login">Login</Link>
    </header>
  );
};

export default Header;
