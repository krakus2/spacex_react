import React from 'react';
import '../styles/Container.css'
import ContainerRight from './ContainerRight'
import ContainerLeft from './ContainerLeft'

const Container = (props) => (
  <div className="container">
    <ContainerLeft
       launch={props.launch}
       launchSite={props.launchSite}
       rocket={props.rocket}
    />
    <ContainerRight
       launch={props.launch}
       launchSite={props.launchSite}
       rocket={props.rocket}
    />
  </div>
);

export default Container;
