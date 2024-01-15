import React from 'react';

// Primeiro criar o contexto para usarmos para passarmos o provider e utilizarmos o contexto
// em outros componentes juntamente com o .useContext(contexto)
export const GlobalContext = React.createContext();

// Com isso podemos criar um contexto global onde todos os elementos que estiverem
// envolvidos terão acesso aos dados passados.
export const GlobalStorage = ({ children }) => {
  const [ativo, setAtivo] = React.useState(false);
  // Pode-se passar qualquer valor, por exemplo as funções já criadas
  function trocarEstado() {
    setAtivo(!ativo)
  }

  // No return, passase o contexto global com o provider, colacando o que vai ser passado
  // para acesso dos valores
  return (
    <GlobalContext.Provider value={{ ativo, trocarEstado }}>
      {children}
    </GlobalContext.Provider>
  );
};
