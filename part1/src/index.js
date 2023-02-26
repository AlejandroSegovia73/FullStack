import React from "react";
import ReactDOM from "react-dom";

const Hello = ({name, age}) => {
  const bornYear = () => {
    const now = new Date()
    const yearNow = now.getFullYear();
    return yearNow - age 
  }

  return (
    <div>
      <h2>Hello {name}, u are {age} years old.</h2>
      <p>You were born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Hello name = "Alejandro" age = {21}/>
      <Hello name = "Firu" age = {2} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
