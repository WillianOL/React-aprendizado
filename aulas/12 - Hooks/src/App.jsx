// Podemos desestruturar a importação para pegar os hooks que precisamos(prática comum)
import React, {useState} from 'react';
import BotaoModal from './BotaoModal';
import Modal from './Modal';

// Estado - é a caracteristica da aplicação em determinado momento. Por exemplo,
// o estado do botão abaixo é ativo(true)
function App() {
  // Hooks - funções que permitem a manipulação de estado dos componentes
  const [ativo, setAtivo] = useState(true);
  const [userDado, setUserDado] = useState({ nome: 'Pedro', idade: 19 });

  const atualizar = () => {
    setAtivo(!ativo);
    setUserDado({ ...userDado, emprego: 'Programador' });
  };
  // Podemos passar a variável de estado e a função como props dos componentes
  // Podemos também passar um callback no valor inical do estado, no caso pegando um valor
  // do localStorage
  const [modal, setModal] = useState(() => {
    const modalAtivo = window.localStorage.getItem('modalAtivo')
    return modalAtivo
  })

  // Reatividade - sempre usar as funções atualizadoras de estado(hooks) para
  // modificar o estado.
  const [item, setItem] = useState("item1")
  const handleClick = () => {
    setItem("Outro item")
  }

  const [contar, setContar] = useState(1);
  const [list, setList] = useState(["item 1"]);

  // O StrictMode invoca a função duas vezes, sendo possível identificar
  // funções com efeitos colaterais(side effects).
  // Funções com efeitos coláterais são aquelas que 
  // modificam estados que estão fora das mesmas.
  function cliqueAleatorio() {
    setContar(contar => contar + 1)
    setList(list => [...list, "item " + (contar + 1)])
  }

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <BotaoModal setModal={setModal}/>
      <p>{userDado.nome}</p>
      <p>{userDado.idade}</p>
      <p>{userDado.emprego}</p>
      <p>{item}</p>
      <button onClick={atualizar} onMouseEnter={handleClick} >
        {ativo ? 'Botão ativo' : 'Botão inativo'}
      </button>

      {list.map(itemList => <li key={itemList} >{itemList}</li>)}

      <button onClick={cliqueAleatorio} style={{display:"block", marginTop: "20px"}}>
        {contar}
      </button>
    </div>
  );
}

export default App;
