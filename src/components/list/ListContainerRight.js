import React, { Component } from 'react';
import '../../styles/list/ListContainerRight.css'
import ListBrickRight from './ListBrickRight'

class ListContainerRight extends Component {
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
      <div className="listContainerRight">
        {launches.map( (elem, i) => (
          <ListBrickRight launch={launches[i]} key={elem.launch_date_unix} onLaunchClick={this.props.onLaunchClick}/>
        ))}
      </div>
    );
  }

}

export default ListContainerRight;
