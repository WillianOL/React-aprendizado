import React from "react";

// Os Hooks personalizados retornam valores(normalmente o estado) em sua utilização
// Servem para criar funcionalidades para evitar a repetição de código.
// Definir os custom hooks sempre com o  'use' na frente
const useLocalStorage = (key, inicial) => {
  const [estado, setEstado] = React.useState(() => {
    const local = window.localStorage.getItem(key)
    return local ? local : inicial
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, estado)
  }, [key, estado])

  return [estado, setEstado]
}

export default useLocalStorage