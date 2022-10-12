import './App.css';
import Questao1 from './components/questao1/questao1';
import Questao1A from './components/questao1/questao1A';
import Questao1B from './components/questao1/questao1B';
import Calculadora from './components/questao2/Questao02';
import Pokemon from './components/questao3/Pokemon';
import Paises from './components/questao4/paisesAfrica';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Francisco Jerferson Martins da Silva, 521439 - Desenvolvimento WEB
      </header >
      <div className='questao1'>
        <Questao1 >
          <Questao1A
            nome="Francisco Jerferson "
            sobrenome="Martins da Silva"
            curso="ES"
          />
          <Questao1B/>
        </Questao1>
      </div>
      <hr></hr>
      <div className='questao2'>
        <Calculadora/>
      </div>
      <hr></hr>
      
      <div className='questao3'>
        <Pokemon />
      </div>
      <hr></hr>
      
      <div className='questao4'>
        <Paises />
      </div>
      
    </div>
  );
}

export default App;
