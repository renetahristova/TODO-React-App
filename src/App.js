import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Create React App",
    "Go for a walk",
    "I dont know",
  ]);
  const [input, setInput] = useState("");
  const addTodo = (event) => {
    //take previous & add new input
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>My ToDo s List</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add Ye
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
