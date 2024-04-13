import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MinhasFotos from '../../assets/feed.svg?react';
import Estatisticas from '../../assets/estatisticas.svg?react';
import AdicionarFoto from '../../assets/adicionar.svg?react';
import Sair from '../../assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [menuMobile, setMenuMobile] = React.useState(false);

  const {pathname} = useLocation();
  useEffect(() => {
    setMenuMobile(false)
  }, [pathname])

  const navigate = useNavigate();
  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            menuMobile && styles.mobileButtonActive
          }`}
          onClick={() => setMenuMobile(!menuMobile)}
        ></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${menuMobile && styles.navMobileActive}`}>
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
