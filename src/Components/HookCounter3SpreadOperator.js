import React, {useState} from 'react'

function HookCounter3SpreadOperator() {

    const [name, setName] = useState({firstName: '', lastName: ''})

    return (
        <div>
            <h1>Hook Counter 3: Spread Operator</h1>
            <form>
                <input type="text" 
                value={name.firstName} 
                onChange={event => setName({...name, firstName: event.target.value})}/> 
                {/* "...name" Copy everything from the name value, and change firstName. useState does not merge data like setState did!  */}

                <input type="text" 
                value={name.lastName} 
                onChange={event => setName({...name, lastName: event.target.value})}/>

                <h2>Your first name is: {name.firstName}</h2>
                <h2>Your last name is: {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookCounter3SpreadOperator