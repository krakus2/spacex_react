import React, { Component } from 'react';
import '../../styles/list/ListContainerLeft.css'
import ListBrickLeft from './ListBrickLeft'

class ListContainerLeft extends Component {
  state = {
      launches: []
  }

  static getDerivedStateFromProps(nextProps, prevState){
    return{
      launches: nextProps.launches
    }
  }

  render() {
    const { launches } = this.state
    return (
      <div className="listContainerLeft">
        {launches.map( (elem, i) => (
          <ListBrickLeft launch={launches[i]} key={elem.launch_date_unix} onLaunchClick={this.props.onLaunchClick}/>
        ))}
      </div>
    );
  }

}

export default ListContainerLeft;
