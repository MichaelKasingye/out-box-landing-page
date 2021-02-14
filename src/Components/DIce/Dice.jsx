import React, { useState } from "react";
import "./dice.css";
function Dice() {
  const [dice, setDice] = useState();

  function shake() {
    let nos2six = Math.ceil(Math.random() * 6);

    setDice(nos2six);
  }

  return (
    <div className="Dice ">
      <h3 className="alert alert-primary">The Dice</h3>
      <div className="dice_box container-xl">
        {" "}
        {dice ? (
          <p className="dice ">{dice}</p>
        ) : (
          <p className="dice">Roll Dice</p>
        )}
      </div>

      <button className="btn btn-primary" onClick={shake}>
        Roll Dice
      </button>
    </div>
  );
}

export default Dice;
