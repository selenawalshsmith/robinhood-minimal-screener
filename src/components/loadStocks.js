import React, {Component}  from 'react';
import ShowStock from './showStock.js';
import axios from 'axios';
import finnhub from 'finnhub';

//import getTopList  from '../utils/getList.js';

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
  /*
  loadQuotes = (arr) => {
    //console.log(symbol);
    //console.log(symbols);
    //console.log(arr); still in order here
    const quotelst = [];
    //if (arr.length === 25){
      const token = "bsre93v48v6tucpg3cpg"
      for (let i=0; i < arr.length; i++){
        let symbol = arr[i];
        let url = "https://finnhub.io/api/v1/quote?symbol="+symbol+"&token="+token;
          axios(url)
          .then((response) => {
            //console.log(response);
            //console.log(i);
            const quoteItem = {
              sym:        symbol,
              cost:       response.data.c,
              high:       response.data.h,
              low:        response.data.l,
              open:       response.data.o,
              prev_close: response.data.pc,
            }
            //console.log(quoteItem);
            quotelst.push(quoteItem);
            this.setState({ quotes: [...this.state.quotes, quotelst] });
            //quotelst[quotelst.length] = quoteItem;
          }).catch(err => {console.log(err);});
      }
      console.log(this.state.quotes);
      this.setState({isLoading: false});
  }
  */
  /*
  loadFirstStocks = () => {
    if (this.state.symbols.length === 100){
      var arr = this.state.symbols.slice(0, 30);
      this.loadQuotes(arr);
    }
  };
  */

  loadSymbols = () => {
    if (this.state.topList.length === 100 ){
      const lst = this.state.topList;
      const sym = [];
      for(let i=0; i < lst.length; i++){
        let path = lst[i].slice(25);
        axios(path)
        .then((response) => {
          this.setState({ symbols: [...this.state.symbols, response.data.symbol] });
          //this.loadFirstStocks();
          //console.log(this.state.symbols.length);
          if(this.state.symbols.length === 100){
            console.log(this.state.symbols);
            this.setState({isLoading: false});
          }
        }).catch(err => {console.log(err);});
      }
      //this.loadFirstStocks();
    }
  }
  loadTopListURLs = () => {
    const url = "midlands/tags/tag/100-most-popular/";
    axios(url)
    .then((response) => {
      //Log statement below is list of robinhood urls for each top stock
      //console.log(response.data.instruments[5]);
      //const lst = [];
      const lst = [...response.data.instruments];
      this.setState({topList: lst});
      this.loadSymbols();
      //this.loadStockURLs();
      //setInterval(this.loadStockURLs,90000);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  handleClick = () => {
    console.log("clicked");
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
