import React, {Component}  from 'react';
import Fundamentals from "./fundamentals";
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
        <div className="container">
          <div>
            <h2 style={{display: "inline-block"}}>{this.props.stock}</h2>
            <Fundamentals stock={this.props.stock} />
          </div>
        </div>
      </div>
    )
  }
};
export default StockCard;
