import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Score from './components/Score'
import Cards from './components/Cards'

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  function changeScore(x) {
    if (x == 1) {
      setCurrentScore(currentScore + 1);
    }
    else {
      setCurrentScore(0);
    }
    console.log(currentScore)
  }

  return <>
      <div className="header">
        <Title />
        <Score score={currentScore} />
      </div>
      <Cards
      changeScore={changeScore}
      currentScore={currentScore}
      />
    </>
}

export default App
