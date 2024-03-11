import React from 'react';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Login from './Login';
import Produto from './Produto';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCostumizar from './ProdutoCostumizar';

function App() {
  // Para criarmos rotas aninhadas, coloca-se no path do Route a aninhamento,
  // como produto/:id(sub-rota) e depois coloca-se o /* para continuar o aninhamento das rotas.
  // Pode-se utilizar o produto/* vai funcionar da mesma forma porém não vai possuir o parâmetro id

  // Outra forma de fazer é abrindo o componente Route e colocando as sub-rotas, ou seja, os Route dentro do Route
  // da rota pai
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="login" element={<Login />} />
          <Route path="produto/:id/*" element={<Produto />}>
            <Route path="" element={<ProdutoDescricao />} />
            <Route path="avaliacao" element={<ProdutoAvaliacao />} />
            <Route path="costumizado" element={<ProdutoCostumizar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
