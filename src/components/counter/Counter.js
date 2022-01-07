import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div className='Counter'>
            <button onClick={() => setCount(count+1)}>Increase Count</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count-1)}>Decrease Count</button>
        </div>
    )
}
export default Counter;