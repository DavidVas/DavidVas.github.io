import bomb from './bomb.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bomb} className="App-logo" alt="bomb" />
        <a
          className="App-link"
          href="https://vgw.co/careers"
          target="_blank"
          rel="noopener noreferrer"
        >
            join us
        </a>
      </header>
    </div>
  );
}

export default App;
