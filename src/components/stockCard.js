import React, {Component}  from 'react';

function StockCard(props){
  const isLoading = props.isLoading;

  if (!isLoading){
    const sortedList = [];
    /*
    props.symbols.map((symbol, i) => (
      props.quotes.map((propItem, j) => (
        if(symbols[i] === quotes[j].sym){
          sortedList.push(quotes[j]);
        }
      ))
      //props.quote.filter()
    )
    */
    for(let i=0; i < props.symbols.length; i++){
      for(let j=0; j < props.quotes.length; j++){
        //var obj = quotes[j];
        //console.log(obj);
        if(props.symbols[i] === props.quotes[j].sym){
          sortedList.push(props.quotes[j]);
        }
      }
    }
    return <div>
            <h1>{}</h1>
            {
              sortedList.map((stock, i) => (
                <div><h3>stock.sym</h3></div>
              ))
            }
          </div>
  }else {
    return <div>
            <h1>Loading...</h1>
          </div>
  }
}
/*
class StockCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    console.log(this.props);
  }
  render (){
    return (
      <div>
        <div className="card">

        </div>
      </div>
    )
  }
};
*/
export default StockCard;
