import React, { Component } from 'react';
import '../../styles/list/ListContainer.css'
import ListContainerLeft from './ListContainerLeft'
import ListContainerRight from './ListContainerRight'

class ListContainer extends Component {
  state = {
    evenLaunches: [],
    oddLaunches: []
  }

  static getDerivedStateFromProps(nextProps, prevState){
    return {
      evenLaunches: nextProps.launches.filter((elem, i) => i % 2 === 0),
      oddLaunches: nextProps.launches.filter((elem, i) => i % 2 !== 0)
    }
  }

  render() {
    const { evenLaunches, oddLaunches} = this.state
    return (
      <div className="list__container">
        <ListContainerLeft launches={evenLaunches} onLaunchClick={this.props.onLaunchClick}/>
        <ListContainerRight launches={oddLaunches} onLaunchClick={this.props.onLaunchClick}/>
      </div>
    );
  }

}

export default ListContainer;
