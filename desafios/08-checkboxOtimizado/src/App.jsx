// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

import React from 'react';

function App() {
  const [cor, setCor] = React.useState([]);

  function selecionarCor({ target }) {
    if (target.checked) {
      setCor([...cor, target.value]);
    } else {
      setCor(cor.filter((item) => item !== target.value));
    }
  }

  return (
    <form>
      {coresArray.map((cor) => {
        return (
          <label key={cor} style={{textTransform:"capitalize"}}>
            <input type="checkbox" value={cor} onChange={selecionarCor} />
            {cor}
          </label>
        );
      })}
    </form>
  );
}

export default App;
