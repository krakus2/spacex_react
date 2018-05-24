import React, { Component } from 'react';
import ListHeader from './ListHeader';
import ListContainer from './ListContainer.js'
import Footer from '../Footer'
import '../../styles/list/LaunchesList.css'
import Message from './Message'
import { HashLoader } from 'react-spinners';

class LaunchesList extends Component {
  state = {
    launches: [],
    //rockets: [],
    loading: false,
    errors: {}
  }

  /*static getDerivedStateFromProps(nextProps, prevState){
    return{
      launches: nextProps.launches,
      rockets: nextProps.launches.reduce( (rockets, elem) => {
        rockets.indexOf(elem.rocket.rocket_name) === -1 && rockets.push(elem.rocket.rocket_name)
        return rockets
      }, [])
    }
  }*/

  sieve = (data) => {
    console.log(data, `https://api.spacexdata.com/v2/launches/all?rocket_id=${data}`)
    this.setState({ loading: true, launches: [] })

    if(data !== "all rockets"){
      fetch(`https://api.spacexdata.com/v2/launches/all?rocket_id=${data}`, {
      	method: 'get'
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ launches: [...data], loading: false, errors: {} })
      })
      .catch(err => this.setState({errors: { text: String(err)}, loading: false})  )
    } else {
      fetch(`https://api.spacexdata.com/v2/launches/all`, {
      	method: 'get'
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ launches: [...data], loading: false, errors: {} })
      })
      .catch(err => this.setState({errors: { text: String(err)}, loading: false}) )
    }
  }

  componentDidMount(){
    this.setState({ loading: true, launches: [] })

    fetch(`https://api.spacexdata.com/v2/launches/upcoming`, {
      method: 'get'
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ launches: [...data], loading: false, errors: {} })
    })
    .catch(err => this.setState({errors: { text: String(err)}, loading: false}) )
  }

  render() {
    const { launches, rockets, errors, loading } = this.state
    return (
      <div className="listView">
        <ListHeader sieve={this.sieve} data={rockets} />
        {
          !!launches.length  && //!! to konwersja do boolean
          <ListContainer
            launches={launches}
            onLaunchClick={this.props.onLaunchClick} />
        }
        {loading &&
          <div className="list__loading">
            <HashLoader
              color={'#a7a9ac'}
              loading={loading}
              size={75}
            />
          </div>
        }
        {
          (!!!launches.length && !Object.keys(errors).length && !loading) && <Message text={"Sorry, no launches found"} />
        }
        {
          !!Object.keys(errors).length && <Message text={errors.text} />
        }

        <Footer />
      </div>
    );
  }
}

export default LaunchesList
