// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((r) => r.json())
      .then((dado) => setProduto(dado));
  }, []);

  function limparDados() {
    setProduto(null);
  }

  return (
    <GlobalContext.Provider value={{ produto, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
