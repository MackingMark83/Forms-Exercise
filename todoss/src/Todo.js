import React, { useState } from "react";

function Todo({ work = "default work", id = "1", remove, update }) {
  const [editWork, setEditWork] = useState(work);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(edit => !edit);
  };

  const handleChange = evt => {
    setEditWork(evt.target.value);
  };

  const handleDelete = () => remove(id);

  const handleUpdate = evt => {
    evt.preventDefault();
    update(id, editWork);
    setIsEditing(false);
  };

  
  let jsx = (
    <div>
      <li>{work}</li>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={handleDelete}>X</button>
    </div>
  );

 
  if (isEditing) {
    jsx = (
      <div>
        <form onSubmit={handleUpdate}>
          <input type="text" value={editWork} onChange={handleChange} />
          <button>Update!</button>
        </form>
      </div>
    );
  }

  return jsx;
}

export default Todo;
