import React, { Component } from 'react';
import '../../styles/list/ListBrick.css'
import format from 'date-fns/format'
import arrow_pointer from '../../assets/arrow_pointer.svg';

class ListBrick extends Component {
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

  formatName = data => {
    const reg = /[0-9]+/;
    if (reg.test(data.split(" ")[1])){
      return data.toUpperCase().replace(" ", "")
    } else {
      return data.toUpperCase()
    }
  }

  render() {
    const { launch } = this.state
    const { mirrored } = this.props
    return (
      <div className={`listBrick ${mirrored ? 'listBrick--right' : 'listBrick--left'}`} onClick={this.props.onLaunchClick}> {/*modyfikator*/}
        <div className={`listBrick__date ${mirrored ? 'listBrick__date--right' : 'listBrick__date--left'}`}>
          {this.formatDate(launch.launch_date_unix)}
        </div>
        <img  className={`listBrick__img ${mirrored ? 'listBrick__img--right' : 'listBrick__img--left'}`} src={arrow_pointer} alt="spacex"/>{/*modyfikator*/}
        <div className={`listBrick__arrowRectangle ${mirrored ? 'listBrick__arrowRectangle--right' : 'listBrick__arrowRectangle--left'}`}></div>{/*modyfikator*/}
        <div className={`listBrick__circle ${mirrored ? 'listBrick__circle--right' : 'listBrick__circle--left'}`}></div>{/*modyfikator*/}
        <div className={`listBrick__data ${mirrored ? 'listBrick__data--right' : 'listBrick__data--left'}`}>
          <div className="listBrick__data__rocket">
            ROCKET:
          </div>
          <div className="listBrick__data-rocket2">
            {this.formatName(launch.rocket.rocket_name)}
          </div>
          <div className="listBrick__data-line">
            |
          </div>
          <div className="listBrick__data-launchSite">
            LAUNCH SITE:
          </div>
          <div className="listBrick__data-launchSite2">
            {launch.launch_site.site_name_long}
          </div>

        </div>
      </div>
    );
  }

}

export default ListBrick;
