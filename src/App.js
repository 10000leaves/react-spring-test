import logo from './logo.svg';
import './App.css';

import FadeText from './components/FadeText';
import ToNumber from './components/ToNumber';
import ScrollingList from './components/ScrollingList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          以下 react-spring のテストです
          <br />
          MIT licenseなので好きに使えます
        </p>
        <div className="animation-item">
          <FadeText text={"hello"}/>
          <br />
          <ToNumber toNum={1} fromNum={0}/>
          <br />
          <ScrollingList words={['We', 'came.', 'We', 'saw.', 'We', 'kicked', 'its', 'ass.']}/>
        </div>
      </header>
    </div>
  );
}

export default App;
