import React, { useEffect, useState } from 'react';
import Links from '../Components/links/links'

import './Timer.css'

function Timer() {
    const [colck, setColck] = useState();

useEffect(() => {
    function myTimer() {
        var Time = new Date();
        setColck(Time.toLocaleTimeString())
      }
      setInterval(myTimer, 1000);
}, []);

    return (
        <div className="Timer text-primary">
            <Links/>

            <h1>TIME</h1>
            <h1>{colck}</h1>
        </div>
    )
}

export default Timer
