import React from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const Produto = () => {
  // pega o parametro passado na rota, no caso o id do produto
  const param = useParams();
  console.log(param);
  // pega a localização da rota, como o pathname, search, key e etc.
  const location = useLocation();
  // pega a parte da busca definida antes, normalmente quando se tem o "?" e logo após os dados
  const search = new URLSearchParams(location.search);
  console.log(search.get("q"));
  // Ou usar esse
  // const [search, SetSearch] = useSearchParams()

  return (
    <div>
      <h1>Produto: {param.id}</h1>
    </div>
  );
};

export default Produto;
