import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import DogMarca from '../assets/dogs.svg?react';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} conteiner`}>
        <Link to="/" aria-label="Dogs - Home" className={styles.logo}>
          <DogMarca />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
