import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Apicomponent from './Components/Api-component';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Example to show call an API based on a search text entered
        </header>

        <Apicomponent />
      </div>
    );
  }
}

export default App;
