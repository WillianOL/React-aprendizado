import React from 'react'

const Produto = () => {
  // Dessa maneira, podemos adicionar eventos a elementos e remove-los para não gerar lentidão
  // Passando uma callback como retorno do efeito e removendo o evento.
  React.useEffect(() => {
    function scroll(event) {
      console.log(event);
    }
    window.addEventListener("scroll", scroll)
    return () => {
      window.removeEventListener("scroll", scroll)
    }
  }, [])

  return (
    <div style={{height: "200vh"}}>
      <p>Produto</p>
    </div>
  )
}

export default Produto
