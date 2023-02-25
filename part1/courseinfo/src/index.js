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
      <Part part = {props.part1.name} exercise = {props.part1.exercises}/>
      <Part part = {props.part2.name} exercise = {props.part2.exercises}/>
      <Part part = {props.part3.name} exercise = {props.part3.exercises}/>
    </div>
  )
}
  
const Total = props => 
  <p>Total: 
    {props.value1.exercises + props.value2.exercises + props.value3.exercises}
  </p>

const App = () => {
 const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course}/>

      <Content 
        part1 = {part1} exercise1 = {part1} 
        part2 = {part2} exercise2 = {part2} 
        part3 = {part3} exercise3 = {part3} />
      
      <Total value1 = {part1} value2 = {part2} value3 = {part3}/>
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
