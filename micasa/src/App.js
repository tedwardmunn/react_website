import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import {Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="d-grid gap-2">
          <Link to="/login">
          <Button variant="secondary" size="lg">
            Go To Login
          </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;
