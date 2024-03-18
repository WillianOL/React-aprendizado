import React from 'react'

const Header = () => {
  console.log("Renderizar");
  // React.memo serve para memorizar componentes estáticos. Ou seja, se um estado do componente pai for
  // modificado, o componenete que estiver com o React.memo em sua exportação não será renderizado novamente.
  // com isso, caso tenhamos um componente pai com vários componentes filhos, podemos dizer quais
  // vão ser renderizados novamente(normalmente os componentes que dependem do estado modificado.)
  return (
    <header>
      <h1>Header aqui</h1>
    </header>
  )
}

// Utilizar no export do componente
export default React.memo(Header);
