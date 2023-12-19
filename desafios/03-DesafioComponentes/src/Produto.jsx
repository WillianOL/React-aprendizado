import React from 'react';

const Produto = ({ nome, propriedades }) => {
  return (
    <div style={{ border: '1px solid', padding: '10px', margin: '10px' }}>
      <h3>{nome}</h3>
      <ul>
        {propriedades.map((prop) => (
          <li key={prop}>{prop}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
