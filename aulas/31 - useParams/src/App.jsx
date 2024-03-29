import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Contato from './Contato';
import Login from './Login';
import Produto from './Produto';
import Page404 from './Page404';

function App() {
  // O uso do useParams serve para criarmos rotas dinâmicas, ou seja,
  // cria-se uma variável que vai controlar qual página vai ser carregada.
  // desse modo - produto/notebook; produto/celular; pruduto/tv
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contato" element={<Contato />} />
          <Route path="login" element={<Login />} />
          <Route path="produto/:id" element={<Produto />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
