import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";

function App() {
  function handleClick() {
    alert("I am Clicked");
  }

  const handleClick3 = () => {
    alert("Clicked 3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h2>Vite + React</h2>

      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <br />
      <br />
      <button
        onClick={function handleClick2() {
          alert("I am Clicked2");
        }}
      >
        Click me2
      </button>
      <br />
      <br />
      <button onClick={handleClick3}>Click me3</button>
      <br />
      <br />
      <button onClick={() => alert("Clicked 4")}>Click me4</button>
      <br />
      <br />
      <button onClick={() => handleAdd5(10)}>Click me5 </button>
    </>
  );
}

export default App;
