import './App.css';
import Description from './components/Description';
import DescriptionG from './components/Description/DescriptionG';
import DescriptionW from './components/Description/DescriptionW';
import Footer from './components/Footer';
import Google from './components/Google';
import Photo from './components/Photo';
import Presentacion from './components/Presentacion';
import Terminal from './components/Terminal';
import TickCopy from './components/TickCopy/TickCopy';
import Ticker from './components/Ticker';
import Title from './components/Title'
import Web3 from './components/Web3.';

function App() {
  return (
    <div className="App">
      <Title />
      <Photo/>
      <Terminal />
      <Presentacion />
      <Ticker message=" Copia de Tick Tock - React"/>
     <TickCopy/>
     <Description/>
     <Ticker message="Copia de Google - HTML - React"/>
     <Google/>
      <DescriptionG />
      <Ticker message="Web3 y JavaScript " />
      <Web3/>
      <DescriptionW />
      <Footer/>
    </div>
  );
}

export default App;
