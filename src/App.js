import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <button onClick={() => setOpen(!open)} data-testid="main-nav-toggle">
            Show / Hide Nav
          </button>
          <ul
            data-testid="main-nav"
            style={{
              display: open ? 'block' : 'none',
            }}
          >
            <li>
              <a href="/" data-testid="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="https://www.learnwithjason.dev">Learn With Jason</a>
            </li>
            <li>
              <a href="https://testingaccessibility.com/">
                Testing Accessibility
              </a>
            </li>
          </ul>
        </nav>

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
      </header>
    </div>
  );
}

export default App;
