import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';


@inject('SpaceXStore')
@observer
class App extends Component {
  render() {
    const { SpaceXStore } = this.props
    return (
      <div className="App">
        {SpaceXStore.view}
      </div>
    );
  }
}

export default App;
