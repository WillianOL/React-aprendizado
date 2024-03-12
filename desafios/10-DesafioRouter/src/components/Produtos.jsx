import React from 'react';
import style from './Produtos.module.css';
import { Link, useLocation } from 'react-router-dom';
import Head from '../Head';

const Produtos = () => {
  const local = useLocation();
  const [produtos, setProdutos] = React.useState([]);
  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, [local]);

  if (produtos === null) return null;
  return (
    <section className={style.conteinerProdutos + ' animeEsquerda'}>
      <Head title="Produtos" description="Todos os produtos" />
      <nav>
        {produtos.map((produto) => {
          return (
            <Link to={`produto/${produto.id}`} key={produto.id} className={style.produto}>
              <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
              <h2>{produto.nome}</h2>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Produtos;
