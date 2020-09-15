import React, {Component}  from 'react';

class Fundamentals extends Component{

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render (){
    return (
      <div style={{marginTop: "10px"}}>
        <div className="row">
          <a href={this.props.url} style={{color:"#FAEBD7"}}>
            <h2 style={{display: "inline", marginRight: "10px"}} >{this.props.name}</h2>
            <i style={{color: "#FAEBD7", float: "right"}} className="fas fa-external-link-alt"></i>
          </a>
        </div>
        <div className="row">
          <h4>{this.props.industry}</h4>
        </div>
        <div style={{marginTop: "10px"}}>
        <div className="row">
            <div style={{marginLeft: "35px", display: "inline"}}>
              <h4>Cost: </h4><p>{this.props.cost}</p>
            </div>
            <div style={{marginLeft: "35px", display: "inline"}}>
              <h4>High: </h4><p>{this.props.high}</p>
            </div>
            <div style={{marginLeft: "35px", display: "inline"}}>
              <h4>Low: </h4><p>{this.props.low}</p>
            </div>
            <div style={{marginLeft: "35px", display: "inline"}}>
              <h4>Open: </h4><p>{this.props.open}</p>
            </div>
            <div style={{marginLeft: "35px", display: "inline"}}>
              <h4>Last Close: </h4><p>{this.props.prev_close}</p>
            </div>
        </div>
        </div>
      </div>
    )
  }
};
export default Fundamentals;
