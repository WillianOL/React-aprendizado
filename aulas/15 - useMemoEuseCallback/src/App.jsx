import React from 'react';

function operacaoLenta() {
  let contador;
  for (let i = 0; i < 10000000; i++) {
    contador = i + i / 10 - 1;
  }
  return contador;
}

function App() {
  const [cont, setCont] = React.useState(0);
  // O useMemo serve para operações muito lentas, porque o que ele executa é armazenado na mémoria
  // e é executado apenas uma vez(na renderização). Recebe um callback e uma array de dependencias.
  const value = React.useMemo(() => {
    const localValue = localStorage.getItem('produto');
    console.log('O memo funcionou');
    return localValue;
  }, []);

  // Por exemplo em uma operação lenta, a primeira renderização continua sendo lenta, porem as proximas nao são pois o valor ja foi armazendo!
  const tempo1 = performance.now();
  const operacao = React.useMemo(() => operacaoLenta(), []);
  console.log(operacao);
  console.log(performance.now() - tempo1);

  // useCallback - serve para quando tivermos um callback ele ser criado somente uma unica vez
  // sem precizar recria-lo toda vez que o componente for atualizado.
  const cliqueAleatorio = React.useCallback(() => {
    setCont((contar) => contar + 1);
  }, []);

  return (
    <div>
      <button onClick={cliqueAleatorio}>Contar {cont}</button>
    </div>
  );
}

export default App;
