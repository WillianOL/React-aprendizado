import React, { useEffect } from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [titulo, setTitulo] = React.useState('');
  const location = useLocation();
  const {matches} = window.matchMedia('(max-width: 40rem)')

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/estatisticas':
        setTitulo('Estatísticas');
        break;
      case '/conta/postar':
        setTitulo('Poste sua foto');
        break;
      default:
        setTitulo('Minha conta');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{titulo}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
