import React, {Component}  from 'react';
import StockCard from "./stockCard.js"

function ShowStock(props){
  const isLoading = props.isLoading;

  if (!isLoading){
    const sortedList = [];
    for(let i=0; i < props.symbols.length; i++){
      //console.log(props.symbols[i]);
    }
    return <div>
            {
              props.symbols.map((stock, i) => (
                <StockCard key={i} stock={stock}/>
              ))
            }
          </div>
  }else {
    return <div>
            <div className="spinner">
              <div className="rect1" style={{marginRight: "3px"}}></div>
              <div className="rect2" style={{marginRight: "3px"}}></div>
              <div className="rect3" style={{marginRight: "3px"}}></div>
              <div className="rect4" style={{marginRight: "3px"}}></div>
              <div className="rect5" style={{marginRight: "3px"}}></div>
            </div>
           </div>
  }
}
export default ShowStock;
