import React, {Component}  from 'react';
import LoadFundamentals from "./loadFundamentals";
import axios from 'axios';
import finnhub from 'finnhub';

class StockCard extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){

  }

  render (){
    return (
      <div className="card">
        <div className="container" style={{padding: "5px"}}>
          <div style={{display: "inline-block", position: "absolute", marginLeft: "75px"}}>
            <h2>{this.props.stock}</h2>
          </div>
          <div style={{display: "inline-block", marginLeft: "150px", marginTop: "7px", width: "700px" }}>
            <LoadFundamentals stock={this.props.stock}/>
          </div>
        </div>
      </div>
    )
  }
};
export default StockCard;
