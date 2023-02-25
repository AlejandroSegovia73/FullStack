import React from "react";
import ReactDOM from "react-dom";

const Hello = (props) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  )
}

const App = () => {

  const now = new Date();
  const a = 10;
  const b = 20;

  return (
    <div>
      <Hello name = "Alejandro"/>
      <p>Hello world, it's {now.toDateString()}</p>
      <p>{a} plus {b} is {a + b}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
