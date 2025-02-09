import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Post from "./Post";

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
      {/* <button onClick={handleClick}>Click Me</button> */}
      {/* <button onClick={() => addToFive(5)}>Add to Five</button> */}
      {/* <Counter /> */}
      {/* <Team /> */}
      {/* <Users /> */}
      <Post />
    </>
  );
}

export default App;
