import React, { Component } from 'react';
import Header from './Header';
import Container from './Container';
import MissionLinks from './MissionLinks'
import Footer from '../Footer'
import '../../styles/details/LaunchDetails.css'

class LaunchDetails extends Component {
  render() {
    return (
      <div className="launchDetails">
        <Header onBackClick={this.props.onBackClick}/>
        <Container
          launch={this.props.launch}
          launchSite={this.props.launchSite}
          rocket={this.props.rocket}/>
        <MissionLinks />
        <Footer />
      </div>
    );
  }
}

export default LaunchDetails
