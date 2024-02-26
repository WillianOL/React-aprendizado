import React from 'react';
// Importar para a utilização do react-route
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import Page404 from './Page404';

function App() {
  // Os elementos que serão renderizados de acordo com a rota/caminho do path é colocado
  // no element
  // o que ficar fora do Routes não será alterado, permanecerá o mesmo
  // * para caso a página não seja encontrada, normalmente para a página 404 ser carregada
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
