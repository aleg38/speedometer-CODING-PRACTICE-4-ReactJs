// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevCount => ({speed: prevCount.speed - 10}))
    }
  }

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevCount => ({speed: prevCount.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="speedometer-bg-container">
        <div className="container">
          <h1 className="speedometer-main-heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="speedometer-img"
            alt="speedometer"
          />
          <h1 className="speed-count-text">Speed is {speed}mph</h1>
          <p className="speed-description">
            Min limit is 0mph, Max limit is 200mph
          </p>
          <div>
            <button
              onClick={this.onAccelerate}
              className="accelerate-btn"
              type="button"
            >
              Accelerate
            </button>
            <button
              onClick={this.onBreak}
              className="apply-brake-btn"
              type="button"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
