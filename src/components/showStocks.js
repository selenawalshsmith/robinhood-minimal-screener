import React, {Component}  from 'react';
import axios from 'axios';
const finnhub = require('finnhub');
//import getTopList  from '../utils/getList.js';

class ShowStocks extends Component{
  constructor(props) {
    super(props);
    this.state = {
      topList: [],
      symbols: [],
      quotes: [],
      count: 0
      //isLoading: true;
    };
  }

  finnhubConfig = () => {
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "bsre93v48v6tucpg3cpg" // Replace this
    const finnhubClient = new finnhub.DefaultApi();
    console.dir(finnhubClient);
  }
  //var count = 0;
  loadQuotes = (symbol) => {
    //console.log(symbol);
    //console.log(symbols);
    const token = "bsre93v48v6tucpg3cpg"
    const url = "https://finnhub.io/api/v1/quote?symbol="+symbol+"&token="+token;
    axios(url)
    .then((response) => {
      console.log(response);
    }).catch(err => {console.log(err);});
  }
  //setInterval(function(){
  //  this.loadQuotes()}, 500)
  loadStocks = (url) => {
    axios(url)
    .then((response) => {
      //const lst = [];
      //console.log(response.data.symbol);
      //for(let i=0; i < response.data.length-1; i++){
        //console.log(response.data.symbol);
        //lst.push(response.data.symbol);
      this.setState({ symbols: [...this.state.symbols, response.data.symbol] });
      //}
      //console.log(lst);
      //this.setState({symbols: lst});
      //console.log(this.state.symbols);
      //this.loadQuotes(this.state.symbols);
      //console.log(this.state.symbols);
    }).catch(err => {console.log(err);});
    //return stock object.
    //console.log(this.state.symbols);
  };

  loadStockURLs = () => {
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "bsre93v48v6tucpg3cpg" // Replace this
    const finnhubClient = new finnhub.DefaultApi();
    console.dir(finnhubClient);
    if (this.state.topList.length > 0 ){
      const lst = this.state.topList;
      //console.log(this.state.topList);
      const sym = [];
      for(let i=0; i < lst.length-1; i++){
        //console.log(response.data.symbol);
        let path = lst[i].slice(25);
        axios(path)
        .then((response) => {
          console.log(response.data.symbol);
          /*
          finnhubClient.quote(response.data.symbol, (error, data, response) => {
            console.log(data)
          });
          */
        }).catch(err => {console.log(err);});

      }
      /*
      setInterval(() => {
        for(let i=0; i < lst.length-1; i++){
          let path = lst[i].slice(25);
          //this.loadStocks(path);
          axios(path)
          .then((response) => {
            //setInterval(this.loadQuotes(response.data.symbol), 9000000);
            this.loadQuotes(response.data.symbol);
          }).catch(err => {console.log(err);});
          //console.log(this.state.count);
          this.state.count++;
        }
      }, 50000);
      /*
      for(let i=0; i < lst.length-1; i++){
        let path = lst[i].slice(25);
        //this.loadStocks(path);
        axios(path)
        .then((response) => {
          //setInterval(this.loadQuotes(response.data.symbol), 9000000);
          this.loadQuotes(response.data.symbol);
        }).catch(err => {console.log(err);});
        //console.log(this.state.count);
        this.state.count++;
      }
      */
      //console.dir(sym);
      //console.dir(sym[0]);
      //this.setState({symbols: sym});
      //console.log(this.state.symbols.length);
      //console.log(Object.keys(this.state.symbols));

    }
  }
  loadTopList = () => {
    const url = "midlands/tags/tag/100-most-popular/";
    axios(url)
    .then((response) => {
      //console.log(response.data.instruments[0]);
      //const lst = [];
      const lst = [...response.data.instruments];
      this.setState({topList: lst});
      this.loadStockURLs();
      //setInterval(this.loadStockURLs,90000);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  componentDidMount(){
    //this.finnhubConfig();
    this.loadTopList();

    if(this.state.symbols.length > 0){

    }
  }

  render (){
    return (
      <div>
        <div className="container">
          <div className= "card">
            <div className="card-header">
              <h2>Symbol</h2>
            </div>
          </div>
          <button onClick={}>Show More</button>
        </div>
      </div>
    )
  }
};
export default ShowStocks;
