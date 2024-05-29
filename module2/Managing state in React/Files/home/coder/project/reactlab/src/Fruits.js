import React from "react";

function Fruits({ fruits }) {
  return (
    <div>
      {fruits.map(fruit => (
        <div key={fruit.id}>{fruit.fruitName}</div>
      ))}
    </div>
  );
}

export default Fruits;
