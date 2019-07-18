import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>
    {props.text}
    </h1>
  )
}

const Content = (props) => {
    return(
    <div>
      <p>{props.courses1} {props.points1}</p>
      <p>{props.courses2} {props.points2}</p>
      <p>{props.courses3} {props.points3}</p>
    </div>
    )
}

const Total = (props) =>{
  return(
    <p>In total {props.exercises1 + props.exercises2 + props.exercises3} tasks done</p>
  )
}

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
      <Header text={course}/>
      <Content courses1={parts[0].name} points1={parts[0].exercises}/>
      <Content courses2={parts[1].name} points2={parts[1].exercises}/>
      <Content courses3={parts[2].name} points3={parts[2].exercises}/>
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}/>
    </div>
  )

  }

ReactDOM.render(<App />, document.getElementById('root'))