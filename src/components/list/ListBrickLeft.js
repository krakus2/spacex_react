import React, { Component } from 'react';
import '../../styles/list/ListBrickLeft.css'
import format from 'date-fns/format'
import arrow_pointer from '../../assets/arrow_pointer.svg';

class ListBrickLeft extends Component {
  state = {
    launch: {}
  }

  static getDerivedStateFromProps(nextProps, prevState){
    return{
      launch: nextProps.launch
    }
  }

  formatDate = (date) => {
    return format(
      date*1000,
      'DD MMMM YYYY'
    )
  }

  shortName = (data) => {
    //console.log(data, data.charAt(25) !== ' ')
    if(data.length > 35 && data.charAt(31) !== ' '){
      return `${data.slice(0, 32)}...`
    } else if(data.length > 32) {
        return `${data.slice(0, 31)}...`
    } else {
        return data
    }
  }

  render() {
    const { launch } = this.state
    return (
      <div className="listBrickLeft" onClick={this.props.onLaunchClick}>
        <div className="listBrickLeft__date">
          {this.formatDate(launch.launch_date_unix)}
        </div>
        <img  className="listBrickLeft__backButton__img" src={arrow_pointer} alt="spacex"/>
        <div className="arrow__rectangle"></div>
        <div className="circleLeft"></div>
        <div className="listBrickLeft__data">
          <span className="listBrickLeft__data__rocket">
            ROCKET:
          </span>{launch.rocket.rocket_name}
          <span className="listBrickLeft__data__line">
            |
          </span>
          <span className="listBrickLeft__data__launchSite">
            LAUNCH SITE:
          </span>{this.shortName(launch.launch_site.site_name_long)}

        </div>
      </div>
    );
  }

}

export default ListBrickLeft;
