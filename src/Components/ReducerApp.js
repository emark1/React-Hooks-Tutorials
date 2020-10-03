import React, { useState, useReducer }  from 'react';
import ReducerComponentA from './ReducerComponentA'
import ReducerComponentB from './ReducerComponentB'
import ReducerComponentC from './ReducerComponentC'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function ReducerApp () {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            <div>
                Count: {count}
                <div>
                    ReducerComponentA: 
                </div>
                <ReducerComponentA />
                <div>ReducerComponentB:</div>
                <ReducerComponentB />
                <div>ReducerComponentC:</div>
                <ReducerComponentC />
            </div>
        </CountContext.Provider>

    )
}

export default ReducerApp

