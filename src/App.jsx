import "./App.css";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h2> React Core Concepts Part 2 </h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => addToFive(5)}>Add to Five</button>
    </>
  );
}

export default App;
