import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import dockerLogo from './assets/docker.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="http://docker.com/" target="_blank">
          <img src={dockerLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Docker</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          This is a Docker Application
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React and Docker logos to learn more
      </p>
    </>
  )
}

export default App
