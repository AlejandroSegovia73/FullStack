import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    setLeft(left + 1)
  }
  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setRight(right + 1)
   
  }
  console.log(allClicks);
  //Usando un objeto
  // const [clicks, setClicks] = useState({ left2: 0, right2: 0 });

  // const handleLeftClick = () => {
  //   setClicks({
  //     ...clicks,
  //     left2: clicks.left2 + 1,
  //   });
  // };
  // const handleRightClick = () => {
  //   setClicks({
  //     ...clicks,
  //     right2: clicks.right2 + 1,
  //   });
  // };

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}>Left</button>

        <button onClick={handleRightClick}>Right</button>
        {right}
        <p>{allClicks}</p>
      </div>

      {/* <div>
        {clicks.left2}
        <button onClick={handleLeftClick}>Left2</button>
        <button onClick={handleRightClick}>Right2</button>
        {clicks.right2}
      </div> */}
    </div>
  );
};

//Nueva manera de renderizar desde react 18
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
