import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
const Produto = () => {
  const param = useParams();

  // O Outlet serve para dizer onde os componentes da rota vão ser rendezidados.(Caso seja utilizado a forma
  // de Route dentro de Route)
  return (
    <div>
      <h1>Produto: {param.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>{' '}
        <NavLink to="avaliacao">Avaliacao</NavLink>{' '}
        <NavLink to="costumizado">Costumizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Produto;
