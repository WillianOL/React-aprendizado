import React from "react"

// Podemos colocar a array diretamente, porem os itens são distribuidos um
// ao lado do outro
function App() {
  // O jeito certo é fazer um map exebindo exibindo os valores. O que pode ser feito
  // juntamente de um elemento JSX
  const arrayPessoas = ["Willian", "Eduardo", "João", "Maria"]
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];
  return (
    <>
      <ul>
        {arrayPessoas.map(pessoa => 
          <li key={pessoa}>{pessoa}</li>
        )}
      </ul>
      <ul>
        {livros
        .filter(({ano}) => ano >= 1998)
        .map(({nome, ano}) => 
          <li key={nome}>
            {nome}, do ano {ano}
          </li>
        )}
      </ul>
    </>
  );
}

export default App
