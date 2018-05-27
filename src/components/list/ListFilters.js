import React, { Component } from 'react';
import '../../styles/list/ListFilters.css'
import { observer, inject } from 'mobx-react';


@inject("SpaceXStore")
@observer
class ListFilters extends Component {
  state = {
    rockets: ["falcon 1", "falcon 9", "falcon 10", "falcon heavy"]
  }

  sieve = e => {
    const { SpaceXStore } = this.props
    SpaceXStore.filter(e.target.name)
  }

  formatName = data => {
    const reg = /[0-9]+/;
    if (reg.test(data.split(" ")[1])){
      return data.toUpperCase().replace(" ", "")
    } else {
      return data.toUpperCase()
    }
  }

  render(){
    const { rockets } = this.state
    return(
        <div className="filters">
          <button className="buttonRound buttonRound--filters" name="all rockets" onClick={this.sieve}>ALL ROCKETS</button>
          {rockets.map(elem => (
            <button className="buttonRound buttonRound--filters" key={elem} name={elem.toLowerCase().replace(" ", "")} onClick={this.sieve}>{this.formatName(elem)}</button>
          ))}
        </div>
    )
  }
};

export default ListFilters;
