import React, {Component}  from 'react';
import StockCard from './stockCard.js';
import axios from 'axios';
import finnhub from 'finnhub';

//import getTopList  from '../utils/getList.js';

class ShowStocks extends Component{
  constructor(props) {
    super(props);
    this.state = {
      topList: [],
      symbols: [],
      quotes: [],
      count: 0,
      isLoading: true
    };
  }
  //var count = 0;
  sortQuoteItems = () => {
    //this.state.quotes.map((quotesItem, i) => ()
    //var obj = this.state.quotes;
    console.dir(this.state.quotes);
    console.log("madeithere");
    //if(this.state.quotes.length > 27){
      console.log("madeithere");
      const symbols = this.state.symbols;
      const quotes = this.state.quotes;
      const sortedList = [];
      //for(let i=0; i < symbols.length; i++){
        for(let j=0; j < quotes.length; j++){
          //var obj = quotes[j];
          //console.log(obj);
          /*if(symbols[i] === quotes[j].sym){
            sortedList.push(quotes[j]);
          }*/
        }
      //}
      console.log(sortedList);
    //}
  }
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
        //new Promise(function(resolve, reject){
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
        //}).then(function(result){
        //  console.log(result);
        //});
        //console.log(quotelst);
        //this.setState({quotes: quotelst});
      }
      //console.log(quotelst.forEach((x) => {console.log(x)}));
      //console.log(JSON.stringify(quotelst));
      //console.log(quotelst);
      //const deepcopy = [...quotelst];
      //const deepcopy = quotelst.slice();
      //this.setState({quotes: deepcopy});
      console.log(this.state.quotes);

      //const symbols = this.state.symbols;
      //const quotes = this.state.quotes;
      //const sortedList = [];
      //quotelst.map(x => console.log(x));
      //this.setState({ quotes: [...this.state.quotes, quoteItem] });
      //this.setState({quotes: quotelst});
      this.setState({isLoading: false});
      //this.sortQuoteItems();

      //console.log(sortedList);
      //this.sortQuoteItems(quotelst);
      //this.setState({quotes: quotelst});

    //}
  }
  loadFirstStocks = () => {
    if (this.state.symbols.length === 100){
      var arr = this.state.symbols.slice(0, 30);
      this.loadQuotes(arr);
    }
  };

  loadSymbols = () => {
    if (this.state.topList.length === 100 ){
      const lst = this.state.topList;
      const sym = [];
      for(let i=0; i < lst.length; i++){
        let path = lst[i].slice(25);
        axios(path)
        .then((response) => {
          this.setState({ symbols: [...this.state.symbols, response.data.symbol] });
          this.loadFirstStocks();
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

    if(this.state.symbols.length > 0){

    }
  }

  render (){
    return (
      <div>
        <div className="container">
          <StockCard isLoading={this.state.isLoading} symbols={this.state.symbols} quotes={this.state.quotes}></StockCard>
          <button onClick={this.handleClick}>Show More</button>
        </div>
      </div>
    )
  }
};
export default ShowStocks;
