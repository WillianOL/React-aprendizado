// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import React from "react"
import Produto from "./Produto"

function App() {
  const [produto, setProduto] = React.useState(null)

  React.useEffect(() => {
    const preferencia = localStorage.getItem("produto")
    if(preferencia != null) {
      setProduto(preferencia)
    }
  }, [])

  React.useEffect(() => {
    if(produto != null) {
      localStorage.setItem("produto", produto)
    }
  }, [produto])

  function definirPreferencia({ target }) {
    setProduto(target.innerText)
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={definirPreferencia} style={{marginRight:"20px"}}>notebook</button>
      <button onClick={definirPreferencia}>smartphone</button>
      <Produto produto={produto}/>
    </div>
  )
}

export default App
