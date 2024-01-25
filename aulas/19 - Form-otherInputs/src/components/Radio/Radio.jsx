import React from 'react';

const Radio = () => {
  // RADIO
  // Com o radio os valores(value) são estáticos, porém com o useState podemos manipular esses valores
  // Ao mudar o item selecionado, executa a função e muda o estado para o value do target.
  // no CHECKED utiliza-se o estado e verifica se é igual ao valor do radio, mudando para checked
  const [fruta, setFruta] = React.useState('');
  function mudarFruta({ target }) {
    setFruta(target.value);
  }

  return (
    <>
      <label>
        <input
          type="radio"
          value="Goiaba"
          onChange={mudarFruta}
          checked={fruta === 'Goiaba'}
        />
        Goiaba
      </label>
      <label>
        <input
          type="radio"
          value="Pêra"
          onChange={mudarFruta}
          checked={fruta === 'Pêra'}
        />
        Pêra
      </label>
      <label>
        <input
          type="radio"
          value="Uva"
          onChange={mudarFruta}
          checked={fruta === 'Uva'}
        />
        Uva
      </label>
      {fruta}
    </>
  );
};

export default Radio;
