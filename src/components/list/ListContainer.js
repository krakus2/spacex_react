import React, { Component } from 'react';
import '../../styles/list/ListContainer.css'
import ListContainerColumn from './ListContainerColumn'
import ListContainerBorder from './ListContainerBorder'

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
        <ListContainerColumn launches={evenLaunches} onLaunchClick={this.props.onLaunchClick} mirrored={false}/>
        <ListContainerBorder />
        <ListContainerColumn launches={oddLaunches} onLaunchClick={this.props.onLaunchClick} mirrored={true}/>
      </div>
    );
  }

}

export default ListContainer;
