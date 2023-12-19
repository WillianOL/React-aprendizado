import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Produtos from './Produtos.jsx';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

// Ao invés de renderizar o componente direto, podemos
// Colocar em uma variável para exibilo com uma lógica.
function App() {
  let Pagina = Home;
  const { pathname } = window.location;
  if (pathname == '/') {
    Pagina = Home;
  } else {
    Pagina = Produtos;
  }

  return (
    <>
      <Header />
      <Pagina />
    </>
  );
}

export default App;
