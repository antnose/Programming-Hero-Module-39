import { useState } from "react";

function Team() {
  const [count, setCount] = useState(0);

  // Add player in team
  const addPlayer = () => {
    setCount(count + 1);
  };

  // Remove player from team
  const removePlayer = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };

  return (
    <div style={teamStyle}>
      <h3>Players : {count} </h3>
      <button onClick={addPlayer}>Add Player</button>
      <button onClick={removePlayer}>Remove Player</button>
    </div>
  );
}

export default Team;
