import React from "react";



function ButtonsPannel(props) {




    return (
        <div>
            <button className="add-1" onClick={() = props.buttonMethod('add-1')}>Add 1</>button>
            <button className="reset" onClick={() = props.buttonMethod('reset')}>Reset</button>
            <button className="reset" onClick={() = props.buttonMethod('reinit')}>Reinit</button>
        </div>
    )
}





export default ButtonsPannel;