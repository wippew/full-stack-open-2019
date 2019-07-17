import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>
    {props.text}
    </h1>
  )
}

const Part = (props) => {
    return (
        <p>{props.part}{props.points}</p>
    )
}

const Content = (props) => {
    return(
    <div>
      <Part part={props.parts[0]} points = {props.points[0]}/>
      <Part part={props.parts[1]} points = {props.points[2]}/>
      <Part part={props.parts[3]} points = {props.points[3]}/>
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
      <Content parts={[part1,part2,part3]} points= {[exercises1,exercises2,exercises3]}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )

  }

ReactDOM.render(<App />, document.getElementById('root'))