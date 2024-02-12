import React from 'react'
// Usar o css module é bem mais vantajoso pois as classes são geradas automatimamente são unicas
// Isso previne possiveis comflitos entre as classes durante o desenvolvimento da aplicação.
// Ficar atento as regras de declaração de classes em forma de objetos
// Nunca usar o "-" nas propriedades css por causa de conflitos e sempre usar o camelCase.
import estilo from "./Produto.module.css"

const Produto = () => {
  // Importamos um objeto e colocamos os estilos passando o className com o objeto e a
  // classe especifica como uma propriedade.
  return (
    <div className={estilo.conteiner}>
      <h1 className={estilo.titulo}>Titulo produto</h1>
      <p>R$ 3.400,00</p>
      <button>Comprar</button>
    </div>
  )
}

export default Produto
