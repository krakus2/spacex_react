import React, { Component } from 'react';
import space_x_logo from '../../assets/space_x_logo_bw_centered.svg';
import '../../styles/list/ListHeader.css'

class ListHeader extends Component {

  sieve = (e) => {
    this.props.sieve(e.target.name)
  }
  render(){
    return(
      <div className="list__header">
        <img  className="list__header__img" src={space_x_logo} alt="spacex"/>
        <span className="list__header__text">
          LAUNCHES 2018
        </span>
        <div className="list__header__buttonRow">
          <button className="buttonRound" name="all rockets" onClick={this.sieve}>ALL ROCKETS</button>
          <button className="buttonRound" name="falcon 9" onClick={this.sieve}>FALCON 9</button>
          <button className="buttonRound" name="falcon 1" onClick={this.sieve}>FALCON 1</button>
          <button className="buttonRound" name="dragon" onClick={this.sieve}>DRAGON</button>
        </div>
      </div>
    )
  }

};

export default ListHeader;
