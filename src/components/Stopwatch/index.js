// Write your code here
import './index.css'
import {Component} from 'react'

class StopWatch extends Component {
  state = {
    timeElapsedInSeconds: 0,
    isRunning: false,
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  startTimer = () => {
    if (!this.state.isRunning) {
      this.setState({isRunning: true})
      this.timerId = setInterval(() => {
        this.setState(prevState => ({
          timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
        }))
      }, 1000)
    }

    // console.log('Started')
  }

  stopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isRunning: false})
    // console.log('Stopped')
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({timeElapsedInSeconds: 0, isRunning: false})
    // console.log('Reset')
  }

  formatTimer = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
      .toString()
      .padStart(2, '0')
    const seconds = Math.floor(timeElapsedInSeconds % 60)
      .toString()
      .padStart(2, '0')
    return `${minutes}:${seconds}`
    // console.log(`${minutes}:${seconds}`)
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch"
            />
            <p className="timer">Timer</p>
          </div>
          <h1 className="counter">{this.formatTimer()}</h1>
          <div className="action-container">
            <button
              type="button"
              className="button start"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="button stop"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button reset"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
