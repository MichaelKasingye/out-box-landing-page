import React from 'react'
import Dice from '../Components/DIce/Dice'
import Links from '../Components/links/links';
function DIceGame() {

    return (
        <div className="DIceGame">
             <Links/>
            <div className="dicer">

            <Dice/>   
            </div>
            
        </div>
    )
}

export default DIceGame
