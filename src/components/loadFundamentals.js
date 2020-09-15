import React, {Component}  from 'react';
import axios from 'axios';
import finnhub from 'finnhub';
import ShowFundamentals from './showFundamentals.js';


class LoadFundamentals extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      collapse: false,
      cost: 0,
      high: 0,
      low:  0,
      open: 0,
      prev_close: 0,
      name: "n/a",
      url: "url",
      industry: "n/a"
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle = () => {
    if (!this.state.collapse){
      this.setState({collapse: true});
    } else {
      this.setState({collapse: false});
    }
  }
  fetchCompanyProfile = () => {
    const token = "bsre93v48v6tucpg3cpg"
    axios("https://finnhub.io/api/v1/stock/profile2?symbol="+this.props.stock+"&token="+token)
      .then(response => {
        this.setState({name: response.data.name});
        this.setState({url: response.data.weburl});
        this.setState({industry: response.data.finnhubIndustry});
        this.toggle();
      });
  }
  loadFundamentals = () => {
    const symbol = this.props.stock;
    const token = "bsre93v48v6tucpg3cpg"
    let url = "https://finnhub.io/api/v1/quote?symbol="+symbol+"&token="+token;
    axios(url)
    .then((response) => {
      this.setState({high: response.data.h});
      this.setState({low: response.data.l});
      this.setState({open: response.data.o});
      this.setState({prev_close: response.data.pc});
      this.setState({cost: response.data.c});
    }).catch(err => {console.log(err);});
  }
  handleClick = (e) => {
    e.preventDefault();
    if (this.state.collapse === false){
      this.loadFundamentals();
      this.fetchCompanyProfile();
      //this.toggle();
    } else {
      this.toggle();
    }
  }
  render (){
    var isLoading = this.state.isLoading;
    return (
      <div>
        <div><i onClick={this.handleClick} className="fas fa-caret-square-down  fa-lg collapsible caret"></i></div>
        {this.state.collapse ? (
            <div>
              <ShowFundamentals
                isLoading={this.state.isLoading} cost={this.state.cost} high={this.state.high}
                low={this.state.low} open={this.state.open} prev_close={this.state.prev_close}
                name={this.state.name} url={this.state.url} industry={this.state.industry}
              />
            </div>
        ) : null}
      </div>
    );
  }
};
export default LoadFundamentals;
