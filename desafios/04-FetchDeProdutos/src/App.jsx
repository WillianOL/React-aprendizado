import React from "react"
import Produto from "./Produto"
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

function App() {
  const [dado, setDado] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  async function cliqueAleatorio({target}) {
    setLoading(true)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`)
    const json = await response.json()
    setDado(json)
    setLoading(false)
  }

  return (
    <div>
      <button onClick={cliqueAleatorio} style={{margin: ".5rem"}}>Tablet</button>
      <button onClick={cliqueAleatorio} style={{margin: ".5rem"}}>Smartphone</button>
      <button onClick={cliqueAleatorio} style={{margin: ".5rem"}}>Notebook</button>
      {loading && <p>Carregando...</p>}
      {!loading && dado && <Produto dado={dado} />}
    </div>
  )
}

export default App
