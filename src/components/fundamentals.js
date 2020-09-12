import React, {Component}  from 'react';
import axios from 'axios';
import finnhub from 'finnhub';


class Fundamentals extends Component{
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      cost: null,
      high: null,
      low:  null,
      open: null,
      prev_close: null
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle = () => {
    if (!this.state.collapse){
      this.setState({collapse: true});
    }
  }
  loadFundamentals = () => {
    console.log(this.props.stock);
    const symbol = this.props.stock;
    const token = "bsre93v48v6tucpg3cpg"
    let url = "https://finnhub.io/api/v1/quote?symbol="+symbol+"&token="+token;
    axios(url)
    .then((response) => {
      console.log(response);
      this.setState({cost: response.data.c});
      this.setState({high: response.data.h});
      this.setState({low: response.data.l});
      this.setState({open: response.data.o});
      this.setState({prev_close: response.data.pc});
      this.setState({cost: response.data.c});
      console.log("open");
      //this.setState({open: !this.state.open});
      this.toggle();

            }).catch(err => {console.log(err);});
  }
  handleClick = (e) => {
    e.preventDefault();
    this.loadFundamentals();
    //this.toggle();
  }
  render (){
    return (
      <div>
        <div style={{display: "inline-block"}}><i style={{display: "inline-block"}} onClick={this.handleClick} className="fas fa-caret-square-down collapsible"></i></div>
        {this.state.open ? (
          <div>
            <p>Lorem ipsum...</p>
          </div>
        ) : null}
      </div>
    );
  }
};
export default Fundamentals;
