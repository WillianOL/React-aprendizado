import React from 'react';

const Checkbox = () => {
  // CHECKBOX
  // Novamente o value é estático e trabalhamos em cima do checked do input, passando como estado no
  // checked como true ou false. Quando clicar o estado passa a ser o valor do checked.
  const [aceitar, setAceitar] = React.useState(false);

  // O checked para vários checkbox é feito com uma array. Ao clicar, varifica se o target
  // está checado, se sim os valores anteriores e ele.
  // Se não, faz um filter para deixar na array os valores que forem diferentes do clicado.
  const [cor, setCor] = React.useState([]);
  function mudarCor({ target }) {
    if (target.checked) {
      setCor([...cor, target.value]);
    } else {
      setCor(cor.filter((cor) => cor !== target.value));
    }
  }

  return (
    <>
      <div>
        {aceitar && <p>Aceitou os termos</p>}
        <label>
          <input
            type="checkbox"
            value="termos"
            onChange={({ target }) => setAceitar(target.checked)}
            checked={aceitar}
          />
          Aceito os termos
        </label>
      </div>
      <label>
        <input
          type="checkbox"
          value="preto"
          onChange={mudarCor}
          checked={cor.includes('preto')}
        />
        Preto
      </label>
      <label>
        <input
          type="checkbox"
          value="roxo"
          onChange={mudarCor}
          checked={cor.includes('roxo')}
        />
        Roxo
      </label>
      <label>
        <input
          type="checkbox"
          value="azul"
          onChange={mudarCor}
          checked={cor.includes('azul')}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="marrom"
          onChange={mudarCor}
          checked={cor.includes('marrom')}
        />
        Marrom
      </label>
    </>
  );
};

export default Checkbox;
