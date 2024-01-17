import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  // Uso perfeito do useCallback pois a função só vai ser criada uma unica vez.
  const requisicao = React.useCallback(async (url, options) => {
    // response e json armazenam o response e o json do fetch para expor esses valores
    // para que o osuário(programador) tenha acesso
    let response;
    let json;
    try {
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (erro) {
      json = null;
      setError('Error');
    } finally {
      // Como o finally sempre é executado podemos retornar o reponse e o json que será armazenado
      // na função.
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, error, loading, requisicao };
};

export default useFetch;
