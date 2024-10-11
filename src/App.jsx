import React from 'react'
import {useState, useRef} from 'react'
import './App.css'

const App = () => {

  const [time,setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let timeRef = useRef(null);
  
  function startTimer(){
    if(!isRunning){
      timeRef.current = setInterval(()=>{
        setTime(time=>time+10);
      },10);
      setIsRunning(true);
    }
   
  }
  function stopTimer(){
    clearInterval(timeRef.current)
    timeRef.current= null;
    setIsRunning(false);
  }
  function resetTimer(){
    stopTimer();
    setTime(0);
  }

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    // Return the formatted time with leading zeros
    return (
      `${hours.toString().padStart(2, '0')}:` +
      `${minutes.toString().padStart(2, '0')}:` +
      `${seconds.toString().padStart(2, '0')}:` +
      `${milliseconds.toString().padStart(2, '0')}`
    );
  };

  return (
    <div className="container">
      <p id='name'>STOP WATCH</p>
      <p id='timer'>{formatTime(time)}</p>

      <div className='buttons'>
        <button onClick={startTimer} disabled = {isRunning}>Start</button>
        <button onClick={stopTimer} disabled = {!isRunning}>Stop</button>
        <button onClick={resetTimer} disabled = {!isRunning && time===0}>Reset</button>
      </div>
    </div>
  )
}

export default App
