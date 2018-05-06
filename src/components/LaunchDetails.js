import React, { Component } from 'react';
import Header from './Header';
import Container from './Container';
import MissionLinks from './MissionLinks'
import Footer from './Footer'
import '../styles/LaunchDetails.css'

class LaunchDetails extends Component {
  render() {
    return (
      <div className="launchDetails">
        <Header />
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
