import React from 'react';

function App() {
  // useRef - retorna um objeto com o current. Pode-se atribuir um valor de referencia que
  // existirá por todo o ciclo de vida do elemento. Geralmente utilizado para selecionar elementos
  // DOM sem usar o querySelector.
  const titulo = React.useRef();
  React.useEffect(() => {
    console.log(titulo.current);
  }, []);

  // Exemplo de colocar o focus em um input utilizando em conjunto o useRef para pegar o input
  const [itemList, setItemList] = React.useState(['item01', 'item02']);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  function setarItemLista() {
    setItemList([...itemList, input]);
    setInput('');
    inputElement.current.focus();
  }

  // Não só elementos DOM, qualquer valor pode ser guardado como referencia do useRef
  // Por exemplo um setTimeout, que pode ser armazenado como referencia do mesmo assim
  // pode-mos excluir o setTimeout a partir da referencia.
  const [itemCart, setItemCart] = React.useState(0)
  const [notificacao, setNotificacao] = React.useState(null)
  const referencia = React.useRef(null)

  function addToCart() {
    setItemCart(itemCart + 1)
    setNotificacao("Item adicionada ao carrinho")
    clearTimeout(referencia.current)
    referencia.current = setTimeout(() => {
      setNotificacao(null)
    }, 1000)
  }

  // ref - define a referencia do elemento DOM para o objeto de useRef. Assim, o elemento
  // será armazenado dentro da variável atribuida ao useRef, sem precisar usar o querySelector
  return (
    <>
      <div>
        <h1 ref={titulo}>Titulo</h1>
        {itemList.map((item) => {
          return <li key={item}>{item}</li>;
        })}
        <input
          type="text"
          value={input}
          onChange={({ target }) => setInput(target.value)}
          ref={inputElement}
        />
        <button onClick={setarItemLista} style={{ marginTop: '10px' }}>
          Adicionar
        </button>
      </div>
      <div className="carrinho" style={{marginTop:"20px"}}>
        <p>{notificacao}</p>
        <button onClick={addToCart}>Add to cart {itemCart}</button>
      </div>
    </>
  );
}

export default App;
