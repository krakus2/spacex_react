import { observable, action, computed, autorun, set } from 'mobx';
import React from 'react';
import launch from '../assets/launch.json'
import launchSite from '../assets/launch_site.json'
import rocket from '../assets/rocket.json'
import LaunchDetails from '../components/details/LaunchDetails';
import LaunchesList from '../components/list/LaunchesList';

class SpaceXStore {
  @observable starts = [];
  @observable rocketToRender //dane rakiety, przeznaczone do details
  @observable rocket //ogolne dane rakiety, ktora byla uzywana do danego lotu
  @observable myLaunchSite = {} //ogolne dane miejsca startu
  @observable view // komponent do wyrenderowania
  @observable filters
  @observable loading
  @observable loadingDetails //loading do szczegolow rakiety i ladowania
  @observable errors = {}
  @observable items1 = {}
  @observable items2 = {}
  @observable items3 = {}
  @observable items4 = {}

  constructor(){
      this.changeViewComponent("list") //byl na autorunie, ale usunalem
      this.loadingLaunchSite = false;
      autorun( () => {
        console.log(this.loadingLaunchSite)
        //this.fetchLaunchSite()
      }) //trzeba uzyc reaction
      this.loading = true;

      fetch(`https://api.spacexdata.com/v2/launches/all`, {
        method: 'get'
      })
      .then(response => response.json())
      .then(data => {
        this.errors = {}
        this.loading = false;
        this.addStarts(data)
      })
      .catch(err => {
        if(String(err) !== "TypeError: SpaceXStore.addStart is not a function"){
          set(this.errors, { "text" : String(err)})
          this.loading = false;
        }
      })
  }

  /*reaction(
    () => Object.keys(this.rocketToRender).map(elem => elem), expense => console.log(expense)
  )*/

  @action addStarts = start => {
    this.starts = []
    this.starts.push(...start);
  }

  @action
  setRocketToRender = number => {
    this.rocketToRender =  this.starts.find( elem => (elem.flight_number === number))
  }

  @action
  changeViewComponent = (data) => {
    if(data === "list"){
      this.view = <LaunchesList />
    } else if(data === "details"){
      this.view = <LaunchDetails
      />
    }
}

  @action
  cleanStarts = () => {
    this.starts = []
  }

  @action handleLaunchClick = () => {
    this.viewName = 'details'

  }

  @action handleBackClick = () => {
    this.viewName = 'list'
  }

  @action filter = (data) => {
    this.loading = true;
    this.cleanStarts()

    if(data !== "all rockets"){
      fetch(`https://api.spacexdata.com/v2/launches/all?rocket_id=${data}`, {
      	method: 'get'
      })
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        this.errors = {}
        this.loading = false;
        this.addStarts(data)
      })
      .catch(err => {
        if(String(err) !== "TypeError: SpaceXStore.addStart is not a function"){
          set(this.errors, { "text" : String(err)})
          this.loading = false;
        }
      })
    } else {
      fetch(`https://api.spacexdata.com/v2/launches/all`, {
      	method: 'get'
      })
      .then(response => response.json())
      .then(data => {
        this.errors = {}
        this.loading = false;
        this.addStarts(data)
      })
      .catch(err => {
        if(String(err) !== "TypeError: SpaceXStore.addStart is not a function"){
          set(this.errors, { "text" : String(err)})
          this.loading = false;
        }
      })
    }
  }
  @action
  fetchLaunchSite = () => {
    this.loadingDetails = true;
    const apiRequest1 = fetch(`https://api.spacexdata.com/v2/launchpads/${this.rocketToRender.launch_site.site_id}`).then(response => {
         return response.json()
    });
    const apiRequest2 = fetch(`https://api.spacexdata.com/v2/rockets/${this.rocketToRender.rocket.rocket_id}`).then(response => {
         return response.json()
    });
    if(this.rocketToRender){
      Promise.all( [apiRequest1, apiRequest2] )
      .then(values => {
        //console.log(values)
        this.myLaunchSite = values[0]
        this.rocket = values[1]
        this.items1["NAME"] = this.rocket.name
        this.items1["COMPANY"] = this.rocket.name
        this.items1["HEIGHT"] = this.rocket.height.meters
        this.items1["DIAMETER"] = this.rocket.diameter.meters
        this.items1["MASS"] = this.rocket.mass.kg
        this.items2["FIRST FLIGHT"] = this.rocket.first_flight
        this.items2["COUNTRY"] = this.rocket.country
        this.items2["SUCCESS RATE"] = this.rocket.success_rate_pct
        this.items2["COST PER LAUNCH"] = this.rocket.cost_per_launch
        this.items3["NAME"] = this.myLaunchSite.full_name
        this.items4["LOCATION"] = `${this.myLaunchSite.location.name}, ${this.myLaunchSite.location.region}`
        this.loadingDetails = false;
      })
      .catch(err => {
        console.log(String(err))
      })
    }
  }

  @computed
  get evenStarts() {
    return this.starts.filter((elem, i) => i % 2 === 0)
  }

   @computed
   get oddStarts() {
     return this.starts.filter((elem, i) => i % 2 !== 0)
   }


}

const store = window.store = new SpaceXStore();
export default store;

/*autorun(() => {
  if(store.rocketToRender){
    fetch(`https://api.spacexdata.com/v2/launchpads/${store.rocketToRender.launch_site.site_id}`, {
      method: 'get'
    })
    .then(response => response.json())
    .then(data => {
      //console.log(data)
      store.myLaunchSite = data
      //this.errors = {}
      //this.loading = false;
      //this.addStarts(data)
    })
    .catch(err => {
      console.log(String(err))

      })
  }

})*/ //przepisz to na autorun w konstruktorze, ktory przywoluje osobny action do tego fetcha

//eksportuje instancje klasy, a nie sama klase, żeby to zawsze była ta sama instancja i wszyscy uzywali tych samych danych
