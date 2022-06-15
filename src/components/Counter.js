import React from 'react'
import { useState } from 'react';

function Counter(props) {

    let [count,changeCount] = React.useState(0);
    let {globalCounterNum,globalCounterVal} = props;

    let number = props.number;
    if(number==globalCounterNum&&globalCounterVal!=count){
        changeCount(globalCounterVal);
    }
    const increament =() =>{
        changeCount(Number(count)+1);
    }
    const decreament =() =>{
        changeCount(Number(count)-1);
    }
  return (
    <div className='counter'>
        <h3>Counter Number : {number}</h3>
        <button onClick = {increament}>+</button>
        <p>Count : {count}</p>
        <button onClick = {decreament}>-</button>
    </div>
  )
}

export default Counter