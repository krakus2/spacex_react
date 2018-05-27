import React, { Component } from 'react';
import '../../styles/list/ListContainer.css'
import ListContainerColumn from './ListContainerColumn'
import ListContainerBorder from './ListContainerBorder'
import { observer, inject } from 'mobx-react';


@inject('SpaceXStore')
@observer
class ListContainer extends Component {
  render() {
    const { SpaceXStore } = this.props
    return (
      <div className="listContainer">
        <ListContainerColumn launches={SpaceXStore.evenStarts} mirrored={false}/>
        <ListContainerBorder />
        <ListContainerColumn launches={SpaceXStore.oddStarts} mirrored={true}/>
      </div>
    );
  }

}

export default ListContainer;
