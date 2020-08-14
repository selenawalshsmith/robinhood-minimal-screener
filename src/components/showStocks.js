import React, {Component}  from 'react';
import axios from 'axios';
//import getTopList  from '../utils/getList.js';

class ShowStocks extends Component{
  constructor(props) {
    super(props);
    this.state = {
      topList: [],
      symbols: [],
      //isLoading: true;
    };
    //this.setState = this.setState.bind(this);
  }

  loadStock = (url) => {
    axios(url)
    .then((response) => {
      const lst = [];
      for(let i=0; i < response.data.length-1; i++){
        lst.push(response.data.symbol);
      }
      this.setState({symbols: lst});
    }).catch(err => {console.log(err);});
    //return stock object.
  };
  getStocks = () => {
    if (this.state.topList.length > 0 ){
      const lst = this.state.topList;
      for(let i=0; i < lst.length-1; i++){
        let path = lst[i].slice(25);
        this.loadStock(path);
      }
    }
  }
/*
  const fetchList = () => {
    new Promise((resolve, reject) => {
      resolve(() => { const topList = getTopList(); })

    }
  }
  */
  /*
  fetchList = () => {
    getTopList();
    new Promise((resolve, reject) => {
      if (Array.isArray && lst.length > 0){
        this.setState({topList: lst});
        resolve(console.log(this.state.topList));
      } else {
        reject(console.log("LOADING RESOURCES...."));
      }
    })
  }
  */
  getTopList = () => {
    const url = "midlands/tags/tag/100-most-popular/";
    axios(url)
    .then((response) => {
      //console.log(response.data.instruments[0]);
      //const lst = [];
      const lst = [...response.data.instruments];
      /*
      for(let i=0; i <= response.data.instruments.length -1; i++){
        lst.push(response.data.instruments[i]);
        console.log(lst);
        //console.log(response.data.instruments[i]);
        //this.setState({topList: lst})
        //this.loadStock(response.data.instruments[i]);

      }
      */

      //currentComponent.setState({topList: lst})
      //console.log(lst);
      //return lst;
      //return response.data.instruments;
      this.setState({topList: lst})
      this.getStocks();
      /*
      new Promise((resolve, reject) => {
        console.log("hello?");
        //if (Array.isArray && lst.length > 0){
          if (lst.length > 0){
          resolve(()=>{console.log(this.state.topList); this.setState({topList: lst}); });
        } else {
          reject(console.log("LOADING RESOURCES...."));
        }
      })
      */
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount(){
    //const topList = getTopList();
    //xo().then(console.log(topList));
    /*
    this.getTopList.then(() => {
      for(let i=0; i<= this.state.topList.length; i++){
        console.log(this.state.topList[i])
      }
    });
    */
    //const list = this.getTopList();
    this.getTopList();

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
        </div>
      </div>
    )
  }
};
export default ShowStocks;
