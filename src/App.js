import logo from './logo.svg';
import './App.css';
import Sanna from './Sanna';
import AppBar from './AppBar';
import BasicGrid from './Grid';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicGrid></BasicGrid>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Sanna />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
