import React from "react";




function Step(props) {


    return (
        <div>
            <form action="">
                <label for="quantity">Krok: </label>
                <input type="number" id="quantity" name="quantity" min="0" max="100" step="10" value="30" />
            </form>

        </div>
    )
}


export default Step;