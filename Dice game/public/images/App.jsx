import { useState } from 'react'
import './App.css'
import Start from './components/StartGame'
import GamePlay from './components/GamePlay'

function App() {

  const [gameStarted, setGamestarted] = useState(false)

  const toggleStart = () => {
    setGamestarted((prev) => !prev)
  }

  return (
    <>

      {gameStarted ? <GamePlay /> : <Start toggle={toggleStart} />}

    </>
  )
}

export default App
