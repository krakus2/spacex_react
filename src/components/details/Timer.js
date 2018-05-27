import { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: 0,
      to: 0,
      clock: 0,
      isRunning: false,
    }
  }

    timer = () => {
      let {from, to, isRunning } = this.state
      from = from - 1
      let clock = from - to;
      if(clock == 0){
        isRunning = false;
        clearInterval(this.interval)
      }
      this.setState({ from, clock, isRunning })
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

    componentDidMount() {
          clearInterval(this.interval)
          this.interval = setInterval(
            () => this.timer(),
            1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval)
      let isRunning = this.state.isRunning
      isRunning = false;
      this.setState({ isRunning })
    }

    static getDerivedStateFromProps(nextProps, prevState){
      console.log("getDerivedStateFromProps: ", nextProps, prevState)
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
