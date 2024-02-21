import React from 'react';
// importar a imagem ao invés de colocar a url diretamente
import imagem from './img/imagem.png';
import svg from './img/svg.svg';
// Pode-se adicionar as imagens utilizando 100% CSS, o webpack ficará responsável por pegar essas imagens
// a partir do caminho indicado
import './style.css';
// Utilizando o plugin viteSvg basta instalar ele e importar normalmente, porem
// precisamos colocar o "?react" ao final do import
// Ele injeta o código do svg ao invés de colocar ele como imagem.
import Atomo from './img/svg.svg?react';
import AtomoSvg from './AtomoSvg';

function App() {
  return (
    <>
      <AtomoSvg color={"#77f700"}/>
      <p className="imgFundo"></p>
      <Atomo />
      <img src={imagem} alt="" style={{ width: '100%' }} />
      <img src={svg} alt=""/>
    </>
  );
}

export default App;
