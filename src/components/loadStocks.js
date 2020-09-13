import React, {Component}  from 'react';
import ShowStock from './showStock.js';
import axios from 'axios';

class LoadStocks extends Component{
  constructor(props) {
    super(props);
    this.state = {
      topList: [],
      symbols: [],
      quotes: [],
      isLoading: true
    };
  }
  loadSymbols = () => {
    var sym = [];
    Promise.all(this.state.topList.map(u=>
      fetch(u.slice(25))
    )).then(responses =>
      Promise.all(responses.map(res => res.json()))
    ).then(json => {
      for(let i=0; i < json.length; i++){
        sym.push(json[i].symbol);
      }
      if (sym.length === 100){
        this.setState({ symbols: sym });
        this.setState({isLoading: false});
      }
    });
  }
  loadTopListURLs = () => {
    const url = "midlands/tags/tag/100-most-popular/";
    var lst = [];
    axios(url)
    .then((response) => {
      response.data.instruments.map((instPath) => {
        lst.push(instPath);
      });
      this.setState({topList: lst});
      this.loadSymbols();
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  componentDidMount(){
    //this.finnhubConfig();
    this.loadTopListURLs();
  }
  render (){
    return (
      <div>
        <div className="container">
          <ShowStock isLoading={this.state.isLoading} symbols={this.state.symbols} quotes={this.state.quotes}></ShowStock>
        </div>
      </div>
    )
  }
};
export default LoadStocks;
