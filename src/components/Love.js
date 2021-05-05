import React, { useState, useEffect } from 'react';

function GiveLove() {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }
    return(
        <div>
            <h3>You have sent {count} doggos love!</h3>
            <button className='btn btn-info my-3 mx-3' onClick={handleIncrement}>💝 ❣ ❤  💕 💙  </button>
        </div>
    )
}

export default GiveLove;