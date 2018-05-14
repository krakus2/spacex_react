import React, { Component } from 'react';
import '../../styles/list/ListFilters.css'

class ListFilters extends Component {
  state = {
    rockets: []
  }

  sieve = (e) => {
    this.props.sieve(e.target.name)
  }

  static getDerivedStateFromProps(nextProps, prevState){
    return{
      rockets: nextProps.data
    }
  }

  render(){
    const { rockets } = this.state
    return(
        <div className="list__header__filters">
          <button className="buttonRound" name="all rockets" onClick={this.sieve}>ALL ROCKETS</button>
          {rockets.map(elem => (
            <button className="buttonRound" key={elem} name={elem.toLowerCase()} onClick={this.sieve}>{elem.toUpperCase()}</button>
          ))}
        </div>
    )
  }
};

export default ListFilters;
