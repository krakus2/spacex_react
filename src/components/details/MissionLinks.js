import React, { Component } from 'react';
import '../../styles/details/MissionLinks.css'

class MissionLinks extends Component {

  render() {
    return (
      <div className="missionLinks">
        <span className="missionLinks__text">
          MISSION LINKS
        </span>
        <div className="missionLinks__buttonRow">
          <button className="buttonRound buttonRound--missionLinks">REDDIT CAMPAIGN</button>
          <button className="buttonRound buttonRound--missionLinks">PRESSKIT</button>
          <button className="buttonRound buttonRound--missionLinks">MISSION VIDEO</button>
        </div>
      </div>
    );
  }

}

export default MissionLinks;
