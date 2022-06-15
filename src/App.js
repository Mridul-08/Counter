import React from 'react'
import './App.css';
import Reset from './components/Reset';
import CounterGroup from './components/CounterGroup';
import { useState } from 'react';

function App() {
  let [globalCounterNum,setglobalCounterNum] = React.useState(0);
  let [globalCounterVal,setglobalCounterVal] = React.useState(0);

  const getResetData = (counterNum, counterVal) =>{
    console.log("Parent "+counterNum +": "+counterVal);
    setglobalCounterNum(counterNum);
    setglobalCounterVal(counterVal);
  }
  return (
    <>
      <Reset getResetData={getResetData}></Reset>
      <CounterGroup
        globalCounterNum={globalCounterNum}
        globalCounterVal={globalCounterVal}
      ></CounterGroup>
    </>
  );
}

export default App;
