import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const History = ({ allClicks }) => 
  (allClicks.length === 0) 
    ? <h4> La app se utiliza pulsando los botones</h4>
    : <h4>Historial de clicks: {allClicks}</h4>

const Button = ({text, onClick}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat("L"));
    setLeft(left + 1);
  };
  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'));
    setRight(right + 1);
  };
  //console.log(allClicks);

  return (
    <div>
      <div>
        {left}
        <Button text="Left" onClick={handleLeftClick}/>
        <Button text="Right" onClick={handleRightClick}/>
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  );
};

//Nueva manera de renderizar desde react 18
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
