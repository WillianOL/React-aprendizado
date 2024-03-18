import React from "react"
import Header from "./Header"

function App() {
  const [contar, setContar] = React.useState(0)
  return (
    <>
      <Header />
      <p>Texto aqui</p>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  )
}

export default App
