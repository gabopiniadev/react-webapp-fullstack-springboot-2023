import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Prueba de Botton Count</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </>
  )
}

export default App
