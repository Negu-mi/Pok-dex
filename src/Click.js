import React, { useState } from 'react';

function Click(props) {

    const [ count, setCount ] = useState(0);
    
    return (
        <div>
            <p>{props.message}</p>
            <button onClick={() => setCount(count+1)}>Increase</button>
            &nbsp; &nbsp; 
            <button onClick={() => setCount(count-1)}>Decrease</button>
            <p>Count : {count}</p>

        </div>
    );
}

export default Click;