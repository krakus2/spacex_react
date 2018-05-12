import { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: 0,//this.props.from - tak sie nie robi
      to: 0,//this.props.to,
      clock: 0,
      isRunning: false,
      counter: 0
    }
  }

    timer = () => {
      let {from, to, isRunning, counter} = this.state
      counter = counter + 0.1;
      from = from - 0.1;
      let clock = from - to;
      clock = clock.toFixed(1)
      if(clock == 0){
        //this.props.onSuccess();
        isRunning = false;
        console.log("jestem zerem", clock)
        clearInterval(this.interval)
      }
      this.setState({ from, clock, isRunning, counter })
    }

    timerLook = (time) => {
      let days, hours, min;
      days = Math.floor(time / 86400)
      if(days < 10){
        days = `0${days}`
      }
      time = time - days*86400;
      hours = Math.floor(time / 3600)
      if(hours < 10){
        hours = `0${hours}`
      }
      time = time - hours*3600;
      min = Math.floor(time / 60)
      if(min < 10){
        min = `0${min}`
      }
        return `${days} DAYS ${hours} HOURS ${min} MINS`
    }

    componentDidUpdate() {
      let { counter, from, to } = this.state;
      if(from){
        var x = from - to;
        if(x === counter){
          //console.log("ze srodka ", counter)
          clearInterval(this.interval)
          this.interval = setInterval(
            () => this.timer(),
            1000);
        }
      }
    }

    componentWillUnmount() {
      clearInterval(this.interval)
      let isRunning = this.state.isRunning
      isRunning = false;
      this.setState({ isRunning })
    }

    static getDerivedStateFromProps(nextProps, prevState){
      //console.log("getDerivedStateFromProps: ", nextProps, prevState)
      return {
        from: nextProps.from,
        to: nextProps.to,
        isRunning: true,
        counter: nextProps.from - nextProps.to
      }
    }


  render() {
    return (
      this.timerLook(this.state.clock)
    );
  }
}

Timer.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  onSuccess: PropTypes.func
}

export default Timer;
