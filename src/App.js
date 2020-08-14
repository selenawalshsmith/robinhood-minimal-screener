import React, {Component} from 'react';
import './App.css';
import ShowStocks from './components/showStocks';
class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>App</h1>
        <ShowStocks/>
      </div>
    )
  }
}

export default App;
