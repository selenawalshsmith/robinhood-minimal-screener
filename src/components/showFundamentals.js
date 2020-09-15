import React, {Component}  from 'react';
import Fundamentals from "./fundamentals.js"

function ShowFundamentals(props){

  var isLoading = props.isLoading;
  if (props.prev_close > 0){
    isLoading = false;
  }

  if (!isLoading){
    //Show the fundamentals
     //const {cost, prev_close, high} = props;
    return <div>
            <Fundamentals
              cost={props.cost} high={props.high} low={props.low} open={props.open} prev_close={props.prev_close}
              name={props.name} url={props.url} industry={props.industry}
            />
           </div>
  } else {
    return <div className="spinner">
            <div className="rect1" style={{marginRight: "3px"}}></div>
            <div className="rect2" style={{marginRight: "3px"}}></div>
            <div className="rect3" style={{marginRight: "3px"}}></div>
            <div className="rect4" style={{marginRight: "3px"}}></div>
            <div className="rect5" style={{marginRight: "3px"}}></div>
          </div>
  }
}
export default ShowFundamentals;
