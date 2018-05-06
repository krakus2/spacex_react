import React, { Component } from 'react';
import '../styles/MissionLinks.css'

class MissionLinks extends Component {

  render() {
    return (
      <div className="missionLinks">
        <span className="missionLinks__text">
          MISSION LINKS
        </span>
        <div className="missionLinks__buttonRow">
          <button className="missionLinks__buttonRow__button">REDDIT CAMPAIGN</button>
          <button className="missionLinks__buttonRow__button">PRESSKIT</button>
          <button className="missionLinks__buttonRow__button">MISSION VIDEO</button>
        </div>
      </div>
    );
  }

}

export default MissionLinks;
