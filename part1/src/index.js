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

const App = ({counter}) => {
  return (
    <div>
      <Hello name = "Alejandro" age = {21}/>
      <Hello name = "Firu" age = {2} />
      {counter}
    </div>
  );
};

let counter = 1;

const refresh = () => {  
  ReactDOM.render(<App 
    counter={counter}/>,
    document.getElementById("root")
  );
}
setInterval(() => {
  refresh();
  counter += 1;

}, 2000)