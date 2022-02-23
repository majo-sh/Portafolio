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
      <div className="containert">
        <Title />
        <Photo />
        <Terminal />
        <Presentacion />
        </div>
        <Ticker message=" Copia de Tick Tock - React" />
        <TickCopy /> 
        <Description />
        <div className="containert">
        </div>
        <Ticker message="Copia de Google - HTML - React" />
        <div className="containert">
        <Google />
        <DescriptionG />
        </div>
        <Ticker message="Web3 y JavaScript " />
        <div className="containert">
        <Web3 />
        <DescriptionW />
      </div>
        <Footer />
    </div>
  );
}

export default App;
