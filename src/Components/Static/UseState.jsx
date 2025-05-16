import React, { useState, } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const reduceCount = () => {
    setCount(prev => prev - 1)
    if (count <= 0) {
      setCount(0)
    }
  }
  const addCount = () => {
    // setCount(count + 1)
    setCount(prev => prev + 1)
  }
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button style={{cursor: "pointer", backgroundColor: 'blue', color: 'white'}} onClick={reduceCount}>Reduce</button>
      <p>{count}</p>
      <button style={{cursor: "pointer", backgroundColor: 'blue', color: 'white'}}  onClick={addCount}>Add</button>
    </div>
  )
}

export default App
