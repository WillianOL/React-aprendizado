import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import useFetch from './hooks/useFetch';

function App() {
  const [produto, setProduto] = useLocalStorage('produto', '');
  function trocarProduto({ target }) {
    setProduto(target.innerText);
  }

  const { data, error, loading, requisicao } = useFetch();
  // forma de pagar valores retornados do fetch(response e json) lá do retorno da funcao
  // do componente.
  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await requisicao(
        'https://ranekapi.origamid.dev/json/api/produto/'
      );
    }
    fetchData();
  }, [requisicao]);
  console.log(data);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        <p>Produto preferido: {produto}</p>
        <button onClick={trocarProduto}>Celular</button>
        <button onClick={trocarProduto}>Carro 0KM</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
}

export default App;
