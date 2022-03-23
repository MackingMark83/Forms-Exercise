import React from "react";

function Box({
  id,
  handleRemove,
  width = 8,
  height = 8,
  backgroundColor = "blue"
}) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        style={{ height: `${height}em`, width: `${width}em`, backgroundColor}}
      />
      <button onClick={remove}> X </button>
    </div>
  );
}

export default Box;
