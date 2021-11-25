import React from "react";
import { Component } from "react";
import ButtonsPannel from "./ButtonsPannel";
import './Counter.css';
import Display from "./Display";
import Step from "./Step";


class Counter extends Component {


    constructor(props) {
        super(props)



        this.state = ({

            counterValue: this.props.initValue,
            stepValue: 1
        })
    }




    buttonHandleChange = (action) => {


        this.setState((prevState, prevProps) => {


            let currentCounterValue = prevState.counterValue

            if (action === 'add-1') {
                currentCounterValue += 1
    
            } else if (action === 'reset') {
                currentCounterValue = 0
            } else {
                currentCounterValue = prevProps.initValue
    
            }



            return ({
                counterValue: currentCounterValue
            })
    
        })
          
    }







    render() {





        
        return (
            <div>

            <Display valueToDisplay={this.state.counterValue}/>
            <ButtonsPannel buttonMethod={this.buttonHandleChange}/>
            <Step />
                
            </div>
        )

    }

        


}




export default Counter;