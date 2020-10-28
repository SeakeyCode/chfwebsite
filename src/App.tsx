import logo from './logo.svg';
import './App.css';
import * as React from 'react';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p><a href="https://github.com/LucaslEliane/ts-react">ts-react-demo</a></p>
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
    )
  }
}

export default App;
