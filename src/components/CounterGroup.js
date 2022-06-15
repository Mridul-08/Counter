//rfce
import React from 'react'
import './CounterGroup.css'
import Counter from './Counter'

function CounterGroup(props) {
  let {globalCounterNum,globalCounterVal} = props;
  return (
    <div>
      <h2>Counter Group</h2>
      <div className='counter-group'>
        <Counter number ={1} globalCounterNum={globalCounterNum} globalCounterVal={globalCounterVal}></Counter>
        <Counter number ={2} globalCounterNum={globalCounterNum} globalCounterVal={globalCounterVal}></Counter>
        <Counter number ={3} globalCounterNum={globalCounterNum} globalCounterVal={globalCounterVal}></Counter>
      </div>
        
    </div>
  )
}

export default CounterGroup