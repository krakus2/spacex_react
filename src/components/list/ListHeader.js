import React, { Component } from 'react';
import space_x_logo from '../../assets/space_x_logo_bw_centered.svg';
import '../../styles/list/ListHeader.css'
import ListFilters from './ListFilters'

class ListHeader extends Component {
  render(){
    return(
      <div className="listHeader">
        <img  className="listHeader__img" src={space_x_logo} alt="spacex"/>
        <span className="listHeader__text">
          LAUNCHES 2018
        </span>
        <ListFilters sieve={this.props.sieve} data={this.props.data}/>
      </div>
    )
  }

};

export default ListHeader;
