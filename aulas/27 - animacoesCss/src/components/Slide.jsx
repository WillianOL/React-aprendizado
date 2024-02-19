import React from 'react';
import estilo from '../estilo.module.css';

const Slide = ({ slides }) => {
  const [ativo, setAtivo] = React.useState(0);
  // A funcionalidade é feita através do translate
  const [posicao, setPosicao] = React.useState(-0);
  const conteudoRef = React.useRef();

  React.useEffect(() => {
    const { width } = conteudoRef.current.getBoundingClientRect();
    setPosicao(-(ativo * width));
  }, [ativo]);

  function proximoSlide() {
    if (ativo < (slides.length - 1)) {
      setAtivo(ativo + 1);
    }
  }

  function anteriorSlide() {
    if (ativo > 0) {
      setAtivo(ativo - 1);
    }
  }

  return (
    <section className={estilo.conteiner}>
      <div
        className={estilo.conteudo}
        style={{ transform: `translate(${posicao}px)` }}
        ref={conteudoRef}
      >
        {slides.map((slide) => {
          return (
            <div key={slide.id} className={estilo.item}>
              {slide.text}
            </div>
          );
        })}
      </div>
      <nav className={estilo.nav}>
        <button onClick={anteriorSlide}>Anterior</button>
        <button onClick={proximoSlide}>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide;
