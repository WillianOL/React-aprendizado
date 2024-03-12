import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, width }) => {
  return (
    <button style={{ width: `${width}px`, height: `${width / 4}px` }}>
      {children}
    </button>
  );
};

// Serve para termos mais controle dos valores que forem passados
// Dando mais controle sobre os dados. Por exemplo, dizendo que uma propriedade
// só pode ser do tipo number, string, boolean, array, object e etc.
// É necessário instalar o prop-types para ter acesso ao objeto PropTypes
Button.propTypes = {
  // utilizar o objeto ProTypes para definir qual é o tipo de dado da propriedade.
  // e se ela é obrigatória. com o isRequired.
  width: PropTypes.number.isRequired,
};

export default Button;
