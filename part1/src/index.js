import React, { useState } from "react";
import {createRoot} from "react-dom/client";

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  //Usando un objeto
  const [clicks, setClicks] = useState({ left2: 0, right2: 0 });

  const handleLeftClick = () => {
    setClicks({
      ...clicks,
      left2: clicks.left2 + 1,
    });
  };
  const handleRightClick = () => {
    setClicks({
      ...clicks,
      right2: clicks.right2 + 1,
    });
  };

  return (
    <div>
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>Left</button>

        <button onClick={() => setRight(right + 1)}>Right</button>
        {right}
      </div>

      <div>
        {clicks.left2}
        <button onClick={handleLeftClick}>Left2</button>
        <button onClick={handleRightClick}>Right2</button>
        {clicks.right2}
      </div>
    </div>
  );
};

//Nueva manera de renderizar desde react 18
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
