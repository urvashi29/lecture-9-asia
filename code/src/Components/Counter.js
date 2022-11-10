import React from 'react'

const Counter = () => {
    // local state
    const [counter, setCounter] = React.useState(0)

    return (
        <>
            <h1 data-testid="counter">{counter}</h1>
            <button data-testid="button-up" onClick={() => setCounter(counter + 1)}>Up</button>
            <button data-testid="button-down" onClick={() => setCounter(counter - 1)}>Down</button>
        </>
    )
}

export default Counter;

//test
// all the events(onchange, onclick)
// get api(called or not)
// post api(): check content displayed in UI