import React, { Component } from 'react';
import '../../styles/list/ListContainerColumn.css'
import ListBrick from './ListBrick'

class ListContainerColumn extends Component {
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
    const { mirrored } = this.props
    return (
      <div className={`listContainerColumn ${mirrored ? 'listContainerColumn--right' : 'listContainerColumn--left'}`}>
        {launches.map( (elem, i) => (
          <ListBrick launch={launches[i]} key={elem.launch_date_unix} onLaunchClick={this.props.onLaunchClick} mirrored={mirrored}/>
        ))}
      </div>
    );
  }

}

export default ListContainerColumn;
