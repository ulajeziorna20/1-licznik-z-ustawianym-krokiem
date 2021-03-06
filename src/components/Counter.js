import React from "react"
import { Component } from "react"
import ButtonsPannel from "./ButtonsPannel"
import "./css/Counter.css"
import Display from "./Display"
import Step from "./Step"

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counterValue: this.props.initValue,
      stepValue: 1,
    }
  }

  stepValueChange = (e) => {
    // console.log(e.target.value);
    // console.log(+e.target.value);

    this.setState({
      stepValue: +e.target.value,
    })
  }

  buttonHandleChange = (action) => {
    this.setState((prevState, prevProps) => {
      let currentCounterValue = prevState.counterValue
      let currentStepValue = prevState.stepValue
      console.log(currentStepValue)
      let arr = currentCounterValue + currentStepValue
      console.log(arr)

      if (action === "add-x") {
        currentCounterValue += currentStepValue
      } else if (action === "reset") {
        currentCounterValue = 0
      } else {
        currentCounterValue = prevProps.initValue
      }

      return {
        counterValue: currentCounterValue,
      }
    })
  }

  render() {
    return (
      <div>
        <Display counterValueToDisplay={this.state.counterValue} />
        <ButtonsPannel
          buttonMethod={this.buttonHandleChange}
          stepToDisplay={this.state.stepValue}
        />
        <Step stepMethod={this.stepValueChange} />
      </div>
    )
  }
}

export default Counter
