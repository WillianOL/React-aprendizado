import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';
import Checkbox from './Form/Checkbox';

function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [fruta, setFruta] = React.useState('');
  const [gosto, setGosto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [tipo, setTipo] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <form>
      <Input label="Nome" id="nome" value={nome} setValue={setNome} />
      <Input label="Email" id="email" value={email} setValue={setEmail} />
      <Select
        options={['Maçã', 'Uva', 'Manga']}
        setValue={setFruta}
        value={fruta}
      />
      <h2>Gosto</h2>
      <Radio
        options={['Gosto de fruta', 'Não gosto de fruta']}
        value={gosto}
        setValue={setGosto}
      />
      <h2>Cores de frutas</h2>
      <Radio
        options={['Azul', 'Vermelho', 'laranja']}
        value={cor}
        setValue={setCor}
      />
      <h2>Tipos de frutas</h2>
      <Checkbox options={['Citricas', 'amargas', 'doces']} value={tipo} setValue={setTipo}/>
      <h2>Termos</h2>
      <Checkbox options={['Li e aceito os termos']} value={termos} setValue={setTermos}/>
    </form>
  );
}

export default App;
