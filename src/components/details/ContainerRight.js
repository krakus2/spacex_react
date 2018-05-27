import React, { Component } from 'react';
import '../../styles/details/ContainerRight.css'
import Title from './Title'
import Text from './Text'
import Container3 from './Container3'
import { observer, inject } from 'mobx-react';
import { HashLoader } from 'react-spinners';


@inject('SpaceXStore')
@observer
class ContainerRight extends Component {
  state = {}

  static getDerivedStateFromProps(nextProps, prevState){
    return {
      items1: {
        NAME: nextProps.rocket.name, COMPANY: nextProps.rocket.company, HEIGHT: nextProps.rocket.height.meters,
        DIAMETER: nextProps.rocket.diameter.meters, MASS: nextProps.rocket.mass.kg},
      items2: {
        "FIRST FLIGHT": nextProps.rocket.first_flight, COUNTRY: nextProps.rocket.country, "SUCCESS RATE": nextProps.rocket.success_rate_pct,
        "COST PER LAUNCH": nextProps.rocket.cost_per_launch
        },
      items3: {
        NAME: nextProps.launchSite.full_name
      },
      items4: {
        LOCATION: `${nextProps.launchSite.location.name}, ${nextProps.launchSite.location.region}`
      }
    }
  }

  componentDidMount(){

    const { SpaceXStore } = this.props
    SpaceXStore.fetchLaunchSite()
    console.log("ehjka", SpaceXStore.myLaunchSite)
  }

  render() {
    const { SpaceXStore } = this.props
    const { rocketToRender, loadingDetails, items1, items2, items3, items4 } = this.props.SpaceXStore
    return (
      <div className="containerRight">
        <Title title={"DETAILS"} />
        <Text text={rocketToRender.details ? rocketToRender.details : "No details provided by SpaceX"} />
        {loadingDetails &&
          <div className="containerRight__detailsLoading">
            <HashLoader
              color={'#a7a9ac'}
              loading={loadingDetails}
              size={150}
            />
          </div>
        }
        { (!!Object.keys(SpaceXStore.myLaunchSite).length &&
           !!Object.keys(SpaceXStore.myLaunchSite).length &&
           !loadingDetails) && (
             <div>
               <Title title={"ROCKET"} />
               <div className="container2">
                 <Container3 names={items1} />
                 <Container3 names={items2} />
               </div>
               <Text text={SpaceXStore.rocket ? SpaceXStore.rocket.description : "No rocket description provided by SpaceX"} />
               <Title title={"LAUNCH PAD"} />
               <div className="container2">
                 <Container3 names={items3} />
                 <Container3 names={SpaceXStore.items4} />
               </div>
               <Text text={SpaceXStore.myLaunchSite.details} />
             </div>
          )
        }


      </div>
    );
  }

}

export default ContainerRight;
