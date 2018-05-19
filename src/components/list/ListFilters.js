import React, { Component } from 'react';
import '../../styles/list/ListFilters.css'

class ListFilters extends Component {
  state = {
    rockets: ["falcon 1", "falcon 9", "falcon 10", "falcon heavy"]
  }

  sieve = (e) => {
    this.props.sieve(e.target.name)
  }

  /*static getDerivedStateFromProps(nextProps, prevState){
    return{
      rockets: nextProps.data
    }
  }*/

  render(){
    const { rockets } = this.state
    return(
        <div className="list__header__filters">
          <button className="buttonRound" name="all rockets" onClick={this.sieve}>ALL ROCKETS</button>
          {rockets.map(elem => (
            <button className="buttonRound" key={elem} name={elem.toLowerCase().replace(" ", "")} onClick={this.sieve}>{elem.toUpperCase()}</button>
          ))}
        </div>
    )
  }
};

export default ListFilters;
