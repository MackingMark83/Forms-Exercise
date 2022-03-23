import React, { useState } from "react";
import {v1 as uuid} from 'uuid';

function NewTodoForm({ createTodo }) {
  const [work, setWork] = useState("");

  const handleChange = evt => {
    setWork(evt.target.value);
  };

  const getData = evt => {
    evt.preventDefault();
    createTodo({ work, id: uuid() });
    setWork("");
  };

  return (
    <div>
      <form onSubmit={getData}>
        <label htmlFor="work">Work:</label>
        <input
          id="work"
          name="work"
          type="text"
          onChange={handleChange}
          value={work}
        />
        <button>New todo </button>
      </form>
    </div>
  );
}

export default NewTodoForm;
