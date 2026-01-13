import { useState } from 'react';
import './App.css';

function App() {
  const [countUp, setCountUp] = useState(0)
  const [countDown, setCountDown] = useState(0)

  function handleCountUp(){
    setCountUp(countUp + 1);
  }

  function handleCountDown(){
    setCountDown(countDown - 1)
  }
  return (
    <>
      <button onClick={handleCountUp} style={{ border: '1px solid #1f8cbeff' }}>
        Count Up: {countUp}
      </button>

      <button onClick={handleCountDown} style={{ border: '1px solid #1f8cbeff', marginLeft: '20px' }}>
        Count Down: {countDown}
      </button>
    </>
  )
}

export default App
