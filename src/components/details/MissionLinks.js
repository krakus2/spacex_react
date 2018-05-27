import React, { Component } from 'react';
import '../../styles/details/MissionLinks.css'
import { observer, inject } from 'mobx-react';

@inject('SpaceXStore')
@observer
class MissionLinks extends Component {

  render() {
    const { rocketToRender } = this.props.SpaceXStore
    return (
      <div className="missionLinks">
        <span className="missionLinks__text">
          MISSION LINKS
        </span>
        {!!Object.keys(rocketToRender).length &&
          <div className="missionLinks__buttonRow">
            <a href={`${(Object.keys(rocketToRender.links).length && rocketToRender.links.reddit_campaign)  ? rocketToRender.links.reddit_campaign : "https://www.reddit.com/"}`}
              target="_blank" className="buttonRound buttonRound--missionLinks">REDDIT CAMPAIGN</a>
            <a href={`${(Object.keys(rocketToRender.links).length && rocketToRender.links.article_link) ? rocketToRender.links.article_link : "http://www.spacex.com/"}`}
              target="_blank" className="buttonRound buttonRound--missionLinks">PRESSKIT</a>
            <a href={`${(Object.keys(rocketToRender.links).length && rocketToRender.links.video_link)? rocketToRender.links.video_link : "https://www.youtube.com/"}`}
              target="_blank" className="buttonRound buttonRound--missionLinks">MISSION VIDEO</a>
          </div>
        }

      </div>
    );
  }

}

export default MissionLinks;
