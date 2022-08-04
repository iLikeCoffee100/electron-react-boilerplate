import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
// const { ipcRenderer } = require('electron')

function App() {
  // console.log(window.electron.ipcRenderer);
  // window.electron.ipcRenderer.send("anything-asynchronous", "ping");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Click button for robotjs function through icpRenderer to icpMain set through from and exposed in preload.js's contextbridge</p>
        <button style={{width: 200, height: 200, backgroundColor: 'green'}} onClick={() => window.electron.ipcRenderer.send('anything-asynchronous', 'running mouse movement...')}/>
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
