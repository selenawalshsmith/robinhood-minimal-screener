import React, {Component} from 'react';
import './App.css';
import LoadStocks from './components/loadStocks';
class App extends Component {
  render(){
    return (
      <div className="App">
      <h1 className="heading">Top 100 Most Popular Stocks in Robinhood</h1>
        <div className="wrapper">
          <div className="content">
            <LoadStocks/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
