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

const App = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => {
    setCounter(counter + 1);
  }, 1000);

  console.log("rendering...", counter);

  return (
    <div>
      <Hello name="Alejandro" age={21} />
      <Hello name="Firu" age={2} />
      {counter}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
