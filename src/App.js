import React, { Component } from 'react';
import './App.css';
import launch from './assets/launch.json';
import launchSite from './assets/launch_site.json';
import rocket from './assets/rocket.json';
import launches from './assets/launches.json';
import LaunchDetails from './components/details/LaunchDetails';
import LaunchesList from './components/list/LaunchesList';
//import { Transition } from 'react-spring'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewName: 'list',
    };
  }

    get activeViewComponent() {
    const { viewName } = this.state;

    switch (viewName) {
      case 'list':
        return (
          <LaunchesList
            launches={launches}
            onLaunchClick={this.handleLaunchClick}
          />
        );

      case 'details':
        return (
          <LaunchDetails
            launch={launch}
            launchSite={launchSite}
            rocket={rocket}
            onBackClick={this.handleBackClick}
          />
        );

      default: return null;
    }
  }

  handleLaunchClick = () => {
    //console.log("switch")
    this.setState({ viewName: 'details' });
  }

  handleBackClick = () => {
    //console.log("switch")
    this.setState({ viewName: 'list' });
  }


  render() {
    return (
      <div className="App">
          {this.activeViewComponent}
      </div>
    );
  }
}

export default App;
