import React { Component } from 'react';
import '../../styles/list/ListFilters.css'

class ListFilters extends Component {

  sieve = (e) => {
    this.props.sieve(e.target.name)
  }

  render(){
    return(
        <div className="list__header__filters">
          <button className="buttonRound" name="all rockets" onClick={this.sieve}>ALL ROCKETS</button>
          <button className="buttonRound" name="falcon 9" onClick={this.sieve}>FALCON 9</button>
          <button className="buttonRound" name="falcon 1" onClick={this.sieve}>FALCON 1</button>
          <button className="buttonRound" name="dragon" onClick={this.sieve}>DRAGON</button>
        </div>
    )
  }

};

export default ListFilters;
