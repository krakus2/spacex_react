import React, { Component } from 'react';
import '../../styles/list/ListBrickRight.css'
import format from 'date-fns/format'
import arrow_pointer from '../../assets/arrow_pointer.svg';

class ListBrickRight extends Component {
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
    if(data.length > 29 && data.charAt(25) !== ' '){
      return `${data.slice(0, 26)}...`
    } else if(data.length > 29) {
        return `${data.slice(0, 25)}...`
    } else {
        return data
    }
  }

  render() {
    const { launch } = this.state
    return (
      <div className="listBrickRight" onClick={this.props.onLaunchClick}>
        <div className="listBrickRight__date">
          {this.formatDate(launch.launch_date_unix)}
        </div>
        <img  className="listBrickRight__backButton__img" src={arrow_pointer} alt="spacex"/>
        <div className="arrow__rectangleRight"></div>
        <div className="circleRight"></div>
        <div className="listBrickRight__data">
          <span className="listBrickRight__data__rocket">
            ROCKET:
          </span>{launch.rocket.rocket_name}
          <span className="listBrickRight__data__line">
            |
          </span>
          <span className="listBrickRight__data__launchSite">
            LAUNCH SITE:
          </span>{this.shortName(launch.launch_site.site_name_long)}

        </div>
      </div>
    );
  }

}

export default ListBrickRight;
