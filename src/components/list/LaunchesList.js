import React, { Component } from 'react';
import Header from './ListHeader';
import ListContainer from './ListContainer.js'
import Footer from '../Footer'
import '../../styles/list/LaunchesList.css'

class LaunchesList extends Component {
  state = {
    launches: []
  }

  static getDerivedStateFromProps(nextProps, prevState){
    return{
      launches: nextProps.launches
    }
  }

  sieve = (data) => {
    //console.log(data)
    //console.log(this.state.launches[0].rocket.rocket_name.toLowerCase())
    const launches = [...this.props.launches]
    if(data !== 'all rockets'){
      const newResults = launches.filter(elem => elem.rocket.rocket_name.toLowerCase() === data)
      this.setState({ launches: newResults})
    } else {
      this.setState({ launches })
    }
  }

  render() {
    const { launches } = this.state
    return (
      <div className="listView">
        <Header sieve={this.sieve}/>
        <ListContainer
          launches={launches} onLaunchClick={this.props.onLaunchClick}/>
        <Footer />
      </div>
    );
  }
}

export default LaunchesList