import React, {useState} from 'react'

function HookCounter2ArrowFunction() {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i = 0; i<5; i++) {
            setCount(prevCount => prevCount +1)
        }
    }

    return (
        <div>
            <h1>Hook Counter 2: Arrow Function</h1>
            Count: {count}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount1 => prevCount1 - 1)}>Decrement</button>
            <button onClick={() => incrementFive()}>Increment 5</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
        </div>
    )
}

export default HookCounter2ArrowFunction