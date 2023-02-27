import React, { useState } from "react";

function App() {
  const [item, setitem] = useState("");
  const [values, setValues] = useState([]);

  function handleChange(event) {
    const inputItem = event.target.value;
    setitem(inputItem);
  }

  function clicked() {
    setValues((prev) => {
      return [...prev, item];
    });
    setitem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={clicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {values.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
