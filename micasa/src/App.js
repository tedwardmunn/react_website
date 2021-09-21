import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import Login from "./containers/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="d-grid gap-2">
          <Button variant="secondary" size="lg">
            Block level button
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
