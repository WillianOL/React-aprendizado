import React from 'react'

const BotaoModal = ({ setModal }) => {
  // Pode-se passar um callback na função modificadora de estado
  // Dessa forma o valor anteriror(parâmetro) vai permanecer o mesmo.
  // Serve para pegar o valor do parâmetro sem passar diretamente ele como prop.
  const modalReativo = () => {
    setModal(ativo => !ativo)
  }

  return (
    <button onClick={modalReativo} style={{backgroundColor: "orange"}}>
      Abrir modal
    </button>
  )
}

export default BotaoModal
