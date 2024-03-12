import React from 'react';
import style from './Contato.module.css';
import contatoImg from '../img/contato.jpg';
import Head from '../Head';

const Contato = () => {
  return (
    <section className={style.contato + ' animeEsquerda'}>
      <Head title="Contato" description="Entre em contato" />
      <img src={contatoImg} alt="Imagem de contato" />
      <div>
        <h2>Entre em contato</h2>
        <ul>
          <li>andre@origamid.com</li>
          <li>00000-0000</li>
          <li>Rua Indo Ali, 345</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
