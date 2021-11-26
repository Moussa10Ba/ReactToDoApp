import React, {useState}from 'react'

const Counter = (props) => {

    
    const handleClick = () => {
        setCpt(cpt + 1);
    }
const [cpt, setCpt] = useState(2);
    return (
        <div>
            {cpt} <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Counter;
