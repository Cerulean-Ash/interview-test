import React, { useState } from "react";

const PlayerForm = ({ symbol, onChange }) => {
  const [playerName, setPlayerName] = useState("");

  const handleChange = (event) => {
    setPlayerName(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Player {symbol}:</label>
          <input value={playerName} onChange={handleChange} className="input" />
        </div>
      </div>
    </div>
  );
};

export default PlayerForm;
