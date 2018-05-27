import React, { Component } from 'react';
import '../../styles/list/ListContainerColumn.css'
import ListBrick from './ListBrick'

class ListContainerColumn extends Component {
  render() {
    
    const { launches, mirrored } = this.props

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
