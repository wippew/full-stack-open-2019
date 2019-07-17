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
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14


  return (
    <div>
      <Header text={course}/>
      <Content courses1={part1} points1={exercises1}/>
      <Content courses2={part2} points2={exercises2}/>
      <Content courses3={part3} points3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )

  }

ReactDOM.render(<App />, document.getElementById('root'))