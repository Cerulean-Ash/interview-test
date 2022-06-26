import React, { useState } from "react";

const PlayerForm = ({ symbol, onChange }) => {
  const [playerName, setPlayerName] = useState("");

  const handleChange = (event) => {
    setPlayerName(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="form">
      <div className="field">
        <label className="form-label">Player {symbol}:</label>
        <input
          value={playerName}
          onChange={handleChange}
          className="input form-control"
        />
      </div>
    </div>
  );
};

export default PlayerForm;
