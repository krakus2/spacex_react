import React, { Component } from 'react';
import '../styles/ContainerLeft.css'
import format from 'date-fns/format'
import compareAsc from 'date-fns/compare_asc'
import Timer from './Timer'

class ContainerLeft extends Component {

  state = {
    dateNow: '',
    milsecToLaunch: '',
    dateFormat: ''
  }

  componentDidMount(){
    const dateNow = new Date()
    const launchDate = this.props.launch.launch_date_unix
    const dateNowMilsec = dateNow.getTime();
    let milsecToLaunch = launchDate - dateNowMilsec;
    if(milsecToLaunch <= 0 ){
      milsecToLaunch = 0;
    }
    const dateFormat = format(
      dateNow,
      'DD MMMM YYYY'
    )
    this.setState({ dateNow, dateFormat, milsecToLaunch })

    clearInterval(this.interval)
    this.interval = setInterval(
      () => this.checkDate(),
      1000);
  }

  checkDate = () => {
    const date = format(
      new Date(),
      'DD MMMM YYYY'
    )
    const result = compareAsc(date, this.state.dateFormat)
    if(result === 1){
      this.setState({ dateFormat: date })
    }

  }

  render() {
    const { milsecToLaunch } = this.state
    return (
      <div className="containerLeft">
        <div className="containerLeft__date">
          {this.state.dateFormat}
        </div>
        <div className="containerLeft__title">
          {this.props.rocket.name.toUpperCase()} LAUNCH
        </div>
        <div className="containerLeft__timer">
          {milsecToLaunch === 0 ? "Rocket has been already launched" :
            <Timer
              from={Math.round(this.state.milsecToLaunch/1000)}
              to={0} />
            }
        </div>
        <div className="containerLeft__img">
          <img src={this.props.launch.links.mission_patch_small} />
        </div>
      </div>
    );
  }

}

export default ContainerLeft;
