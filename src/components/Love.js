import React, { useState, useEffect } from 'react';


function GiveLove(props) {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }
   const handleClick = () => {
        props.shuffleFn()
            handleIncrement()
    }
    return(
        <div>
            <button className='btn btn-info my-3 mx-3' onClick={handleClick}  > 🐶 💙 🐶  </button>
            <h3>You have sent {count} doggos love!</h3>
        </div>
    )
}

export default GiveLove;