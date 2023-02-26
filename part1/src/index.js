import React, { useState } from "react";
import ReactDOM from "react-dom";

const Hello = ({ name, age }) => {
  const bornYear = () => {
    const now = new Date();
    const yearNow = now.getFullYear();
    return yearNow - age;
  };

  return (
    <div>
      <h2>
        Hello {name}, u are {age} years old.
      </h2>
      <p>You were born in {bornYear()}</p>
    </div>
  );
};

const Display = ({counter}) =>{
  return(
    <div>
      {counter}
    </div>
  )
}

const Button = ({handleClick, text}) =>{
  return(
    <div>
      <button onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0);
  const plus = () => setCounter(counter + 1);
  const reset = () => setCounter(0)
  const minus = () => setCounter(counter - 1);
  return (
    <div>
      <Hello name="Alejandro" age={21} />
      <Hello name="Firu" age={2} />
      <Display counter = {counter}/>
      <Button handleClick = {plus} text = '+'/>
      <Button handleClick = {reset} text =' Reset'/>
      <Button handleClick={minus} text = '-'/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
