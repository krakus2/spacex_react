import React, { Component } from 'react';
import '../../styles/details/ContainerRight.css'
import Title from './Title'
import Text from './Text'
import Container3 from './Container3'

class ContainerRight extends Component {
  state = {}

  static getDerivedStateFromProps(nextProps, prevState){
    return {
      items1: {
        NAME: nextProps.rocket.name, COMPANY: nextProps.rocket.company, HEIGHT: nextProps.rocket.height.meters,
        DIAMETER: nextProps.rocket.diameter.meters, MASS: nextProps.rocket.mass.kg},
      items2: {
        "FIRST FLIGHT": nextProps.rocket.first_flight, COUNTRY: nextProps.rocket.country, "SUCCESS RATE": nextProps.rocket.success_rate_pct,
        "COST PER LAUNCH": nextProps.rocket.cost_per_launch
        },
      items3: {
        NAME: nextProps.launchSite.full_name
      },
      items4: {
        LOCATION: `${nextProps.launchSite.location.name}, ${nextProps.launchSite.location.region}`
      }
    }
  }

  render() {
    return (
      <div className="containerRight">
        <Title title={"DETAILS"} />
        <Text text={this.props.launch.details} />
        <Title title={"ROCKET"} />
        <div className="container2">
          <Container3 names={this.state.items1} />
          <Container3 names={this.state.items2} />
        </div>
        <Text text={this.props.rocket.description} />
        <Title title={"LAUNCH PAD"} />
        <div className="container2">
          <Container3 names={this.state.items3} />
          <Container3 names={this.state.items4} />
        </div>
        <Text text={this.props.launchSite.details} />
      </div>
    );
  }

}

export default ContainerRight;
