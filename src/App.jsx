import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import "./App.css";
import { Suspense } from "react";
import Posts from "./Posts";
import Players from "./Players";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// const fetchPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

function App() {
  // const postPromise = fetchPosts();

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

      {/* <Suspense fallback={<h4>Post are coming.......</h4>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Loading....</h3>}>
      <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
      <Players></Players>
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
