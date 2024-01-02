import React from 'react';

const Modal = ({ modal, setModal }) => {
  if (modal === true) {
    return (
      <div style={{ display: modal ? 'block' : 'none' }}>
        <h2>Modal</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, beatae.</p>
        <button
          onClick={() => setModal(false)}
          style={{ backgroundColor: 'red', marginBottom: '20px' }}
        >
          Fechar
        </button>
      </div>
    );
  }
  return null;
};

export default Modal;
