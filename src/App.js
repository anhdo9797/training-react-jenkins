import logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Seminar Jenkins with ReactJs
        </p>
        <a
          className="App-link"
          href="https://tenomad.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow
        </a>
      </header>
    </div>
  );
}

export default App;
