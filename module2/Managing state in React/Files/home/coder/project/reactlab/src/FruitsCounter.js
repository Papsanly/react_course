import React from "react";

function FruitsCounter({ fruits }) {
  return (
    <div>
      Total fruits: {fruits.length}
    </div>
  );
}

export default FruitsCounter;
