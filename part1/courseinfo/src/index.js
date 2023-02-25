import React from "react";
import ReactDOM from "react-dom";

const Header = props => <h1>{props.course}</h1>

const Part = props => {
  return(
    <div>
       {props.part} {props.exercise}
    </div>
  )
}

const Content = props => {
  return(
    <div>
      <Part part = {props.parts[0].name} exercise = {props.parts[0].exercises}/>
      <Part part = {props.parts[1].name} exercise = {props.parts[1].exercises}/>
      <Part part = {props.parts[2].name} exercise = {props.parts[2].exercises}/>
    </div>
  )
}
  
const Total = props => 
  <p>Total: 
    {props.value[0].exercises + props.value[1].exercises + props.value[2].exercises}
  </p>

const App = () => {
 const course = 'Half Stack application development'

 const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

  return (
    <div>
      <Header course = {course}/>

      <Content parts = {parts}/>

      <Total value = {parts}/>
   
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
