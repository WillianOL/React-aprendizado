import React from "react"
import Produto from "./Produto";


// useEffect serve para manipularmos o ciclo de vida do componente. renderização, atualização e destruição
// podemos definir um callback que irá ser executado 
// durante certos momentos do ciclo de vida do componente.
function App() {
  const [contador, setContador] = React.useState(0)
  // Uma Array vazia indica que o efeito não possui nenhum dependência,
  // assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado)
  React.useEffect(() => {
    console.log("FOI");
  }, [])
  
  // Um exemplo do uso dos efeitos, são em requisições de dados. Que no caso armazena a resposata no dados
  // atualizando o estado com o setDados. No caso, é obrigatório passar a dependencia para evitar um loop
  const [dados, setDados] = React.useState(null)
  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then(r => r.json())
      .then(json => setDados(json))
  }, [])

  // Nesse caso, como temos uma variável de estado dentro do callback, ela se torna a dependencia
  // pois ele será executado quando a variável tiver o estado atualizado.
  // --- Se tivermos um hook ou pripriedade dentro do efeito, 
  // ele será uma dependência obrigatória. ---
  const titulo = "Contando: "
  React.useEffect(() => {
    document.title = titulo + contador
  }, [contador])

  const [ativo, setAtivo] = React.useState(false)

  return (
    <div>
      <button onClick={() => setContador(contador + 1)}>{contador}</button>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contador}</p>
          <p>{dados.descricao}</p>
        </div>
      )}
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  )
}

export default App
