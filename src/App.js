import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

//times: lol, apex, mine, 

function App() {

  const times = [
    {
      nome: 'Apex Legends',
      corDestaque: '#A4373D',
      corFundo: '#eeb6b9',
    },
    {
      nome: 'Minecraft',
      corDestaque: '#687737',
      corFundo: '#e6f0c5',
    },
    {
      nome: 'League of Legends',
      corDestaque: '#5c0585',
      corFundo: '#e2caec',
    },
    {
      nome: 'Mudae',
      corDestaque: '#26486b',
      corFundo: '#bacfe7',
    },
    {
      nome: 'Call of Duty',
      corDestaque: '#96D33E',
      corFundo: '#F0F8E2',
    },
    {
      nome: 'Point Blank',
      corDestaque: '#177CD6',
      corFundo: '#dde9f3',
    },
    {
      nome: 'Gartic',
      corDestaque: '#f0bf3b',
      corFundo: '#f8ecca',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corDestaque={time.corDestaque} 
      corFundo={time.corFundo}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      <Rodape />

    </div>

  );
}

export default App;
