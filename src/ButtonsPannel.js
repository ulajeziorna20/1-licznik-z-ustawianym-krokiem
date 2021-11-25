import React from "react";



function ButtonsPannel(props) {




    return (
        <div>
            <button className="add-x" onClick={() => props.buttonMethod('add-x')}>Zwiększ o: <span>{props.stateValueToDisplay}</span></button>
            <button className="reset" onClick={() => props.buttonMethod('reset')}>Reset</button>
            <button className="reset" onClick={() => props.buttonMethod('reinit')}>Reinit</button>
        </div>
    )
}





export default ButtonsPannel;