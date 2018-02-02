import React, {Component} from 'react';
import {Welcome} from './components/index'
import './App.css';
import Game from "./components/Game/Game";

class App extends Component {

  render() {
    const user = {name: 'haha', age: '22'}
    const welcomeProps = {
      user
    }
    return (
      <div className="App">
        <Welcome {...welcomeProps}/>
        <Game text="First Demo"/>
      </div>
    );
  }
}

export default App;
