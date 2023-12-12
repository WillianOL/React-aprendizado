import React from 'react';

// No JSX pode-se armazenar os elementos HTML
const titulo = <h1>Numero</h1>;

// Podemos adicionar atributos ao React, porém alguns foram mudados por causa de conflitos.
// Um deles são as class, que agora é className
const App = () => {
  // Com o JSX podemos colocar expressões juntamente com o HTML
  const nome = 'Willian';
  const randomNumber = Math.random();
  const classAtivo = false;
  // Pode-se usar funções ou expressões para exibir um resultado em tela
  function mostrarPalavra(palavra) {
    return palavra;
  }
  // Pode-se exibir as propriedades e executar os métodos de objetos, porém
  // Não pode colocar o objeto diretemente
  const pessoa = {
    nome: 'Willian',
    idade: 19,
  };
  // Pode-se passar os estilos diretamente no código. Porém as propriedades
  // são escritas em camelCase. (usar para estilos especificos)
  const estiloData = {
    color: 'white',
    backgroundColor: '#333',
    padding: '10px',
    textAlign: 'center',
    borderRadius: "20px"
  };

  const situacao = false;

  return (
    // Com o React.Fragment evitamos a criação de várias divs ou conteiners para colocar os elementos. Também pode ser só os <>...</>
    <>
      <h2 className="titulo">Formulário</h2>
      <label htmlFor="nomeUsuario">Nome:</label>
      <input type="text" id="nomeUsuario" />
      {titulo}
      <p>
        {situacao ? 'Verdadeiro' : 'Falso'} - {mostrarPalavra('Essa é a palavra')}
      </p>
      <p className={classAtivo ? 'ativo' : 'inativo'}>
        {Math.floor(randomNumber * 1000)}
      </p>
      <p style={estiloData}>{new Date().getFullYear()}</p>
      <p>{pessoa.nome}</p>
    </>
  );
};
export default App;
