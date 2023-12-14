import React from "react"

  // Os eventos são sintaticos, ou seja, são do próprio React.
  // Suas vantagens é que gera maior compatibilidade entre os browsers
function App() {
  function cliqueAleatorio(event) {
    console.log(event);
  }

  function scroll() {
    console.log("teste");
  }

  window.addEventListener("scroll", scroll)

  return (
    <div>
      <button onMouseEnter={cliqueAleatorio} style={{marginBottom:"20px"}}>Passe por mim</button>
      <button onClick={(event) => console.log(event)}>Comprar</button>
    </div>
  )
}

export default App
