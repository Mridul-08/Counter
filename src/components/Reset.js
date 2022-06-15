//rfce
import React from 'react'
import './Reset.css'
import { useState } from 'react';

function Reset(props){
  const [countNumberVal, setcountNumberVal] = React.useState(0);
  const [countVal, setCountVal] = React.useState(0);

  const setInput1 = (e) =>{
    setcountNumberVal(e.target.value);
  }
  const setInput2 = (e) =>{
    setCountVal(e.target.value);
  }
  const resetCounter = () =>{
    console.log("Counter Numer : " + countNumberVal);
    console.log("counter Value : " + countVal);
    props.getResetData(countNumberVal,countVal);
  }
  return (
    <div className='reset'>
      <h2>Reset Counter</h2>
      <div className='counter-num'>
        <span>Counter Number:</span>
        <input type='text' value={countNumberVal} onChange={setInput1}></input>
      </div>
      <div className='counter-val'>
        <span>Counter Value:</span>
        <input type='text' value={countVal} onChange={setInput2}></input>
      </div>
      <button onClick={resetCounter}>Reset Counter</button>
    </div>
  )
}

export default Reset