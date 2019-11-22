import React from 'react'

function FunctionClick() {

    function clikcHandler(){
        console.log('Button Clicked')
    }
    return (
        <div>
            <button onClick={clikcHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
