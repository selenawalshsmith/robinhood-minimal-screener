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
          <div className="footer">
              <a href="selenawalshsmith.github.io">
                <p style={{display: "inline-block", paddingRight: "10px", color: "#FAEBD7"}} >Portfolio</p>
                <div style={{display: "inline-block", paddingRight: "10px", color: "#FAEBD7"}}>
                  <i className="far fa-user-circle fa-2x"></i>
                </div>
              </a>
              <div style={{display: "inline-block"}}>
                <a href="https://github.com/selenawalshsmith"><i style={{color: "#FAEBD7"}} className="fab fa-github fa-2x"></i></a>
              </div>
          </div>
        </div>
    )
  }
}

export default App;
