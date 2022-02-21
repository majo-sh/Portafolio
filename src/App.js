import './App.css';
import Description from './components/Description';
import Presentacion from './components/Presentacion';
import Terminal from './components/Terminal';
import TickCopy from './components/TickCopy/TickCopy';
import Ticker from './components/Ticker';
import Title from './components/Title'

function App() {
  return (
    <div className="App">
     <Title/> 
     <Terminal/>
     <Presentacion/>
     <Ticker message=" Copia de Tick Tock "/>
     <TickCopy/>
     <Description/>
     <Ticker message=" Copia de Tick Tock "/>
     <Description/>
     <Ticker message=" Copia de Tick Tock "/>
     <Description/>
    </div>
  );
}

export default App;
