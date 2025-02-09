import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Add the count value
  const handleAdd = () => {
    setCount(count + 1);
  };

  // Reduce the count value
  const reduce = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h3>Counter : {count} </h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={reduce}>Reduce</button>
    </>
  );
}

export default Counter;
