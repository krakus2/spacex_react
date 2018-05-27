import React, { Component } from 'react';
import '../../styles/details/ContainerLeft.css'
import format from 'date-fns/format'
import compareAsc from 'date-fns/compare_asc'
import Timer from './Timer'
import { observer, inject } from 'mobx-react';

@inject('SpaceXStore')
@observer
class ContainerLeft extends Component {

  state = {
    dateNow: '',
    milsecToLaunch: '',
    dateFormat: ''
  }

  componentDidMount(){
    const { rocketToRender } = this.props.SpaceXStore
    const dateNow = new Date()
    const launchDate = rocketToRender.launch_date_unix
    const dateNowMilsec = dateNow.getTime();
    let milsecToLaunch = launchDate*1000 - dateNowMilsec;
    console.log(launchDate, dateNowMilsec)
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
    const { rocketToRender } = this.props.SpaceXStore
    return (
      <div className="containerLeft">
        <div className="containerLeft__date">
          {this.state.dateFormat}
        </div>
        <div className="containerLeft__title">
          {rocketToRender.rocket.rocket_name.toUpperCase()} LAUNCH
        </div>
        <div className="containerLeft__timer">
          {milsecToLaunch <= 0 ? "Rocket has been already launched" :
            <Timer
              from={Math.round(this.state.milsecToLaunch/1000)}
              to={0} />
            }
            {milsecToLaunch > 0 && <span> TO START</span> }
        </div>
        <div className="containerLeft__mission_patch">
          {rocketToRender.links.mission_patch_small ?
            <img className="mission_patch"
              src={rocketToRender.links.mission_patch_small}
              alt="falcon_sign"/> :
              <img className="mission_patch--nasa"
                src="https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png"
                alt="falcon_sign"/>
          }
        </div>
      </div>
    );
  }

}

export default ContainerLeft;
