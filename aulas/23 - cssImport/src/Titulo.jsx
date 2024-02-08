import React from 'react'
// Os estilos deifinos em componentes vão ser aplicamos mesmo depois de importar em outros componentes.
import "./Titulo.css"

const Titulo = () => {
  return (
    <h1 className='tituloPrincipal'>
      Titulo principal
    </h1>
  )
}

export default Titulo
