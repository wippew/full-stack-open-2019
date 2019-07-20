import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { totalmem } from 'os';
 



const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Stat = ({ res, text }) => (
    <tr>
        <td>{text}</td>
        <td>{res}</td>
    </tr>
)


const Statistics = ({good, neutral, bad}) => {
    const tot = good + neutral + bad

    if (tot=== 0) {
        return (
        <div>
            <p>No feedback has been given</p>
        </div>
        )
    } else {
        return (
            <div>
                <table>                    
                    <Stat text="Good" res={good} />
                    <Stat text="Neutral" res={neutral} />
                    <Stat text="Bad" res={bad} />                    
                </table>
                
            </div>
        )
    }
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, addGood] = useState(0)
  const [neutral, addNeutral] = useState(0)
  const [bad, addBad] = useState(0)


const incGood = () => addGood(good + 1)
const incNeutral= () => addNeutral(neutral + 1)
const incBad = () => addBad(bad + 1)

  return (
    
    <div>
    <h1>Give feedback</h1>
    <Button handleClick={incGood}
    text = "Good" />
    <Button handleClick={incNeutral}
    text = "Neutral" />
    <Button handleClick={incBad}
    text = "Bad" />
    <h2>Statistics</h2>
    <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)