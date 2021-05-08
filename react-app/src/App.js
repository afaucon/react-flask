import logo from './logo.svg';
import './App.css';

import TestMaterialUI from './components/TestMaterialUI';
import Tictactoe from './components/Tictactoe';
import TestUseStateHook from './components/TestUseStateHook';
import TestUseEffectHook from './components/TestUseEffectHook';
import TestAsynchronousDataLoading from './components/TestAsynchronousDataLoading'
import TestApiCall from './components/TestApiCall'
import TestLogin from './components/TestLogin';

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
      </header>

      <TestMaterialUI />
      <Tictactoe />
      <TestUseStateHook />
      <TestUseEffectHook />
      <TestAsynchronousDataLoading />
      <TestApiCall />
      <TestLogin />
    </div>
  );
}

export default App;
