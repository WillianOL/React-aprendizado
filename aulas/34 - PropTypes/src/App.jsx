import React from 'react';
import Button from './Button';

function App() {
  // Nesse caso com o PropTypes o tipo de dado da propriedade do componente é um number,
  // se for passado outro tipo de dado nesse propriedade retorna um erro.
  return (
    <>
      <div>
        <Button width={200}>Clique aqui</Button>
      </div>
    </>
  );
}

export default App;
