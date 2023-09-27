import React, { useState } from 'react'
import './counter.css';

export default function Counter() {

        const [count, setCount] = useState(0);
        const inc = () =>{
            setCount(count + 1);
        };
        const dec = () =>{
            setCount(count - 1);
        }
        const reset = ()=>{
            setCount(0);
        }

  return (
    <div className='container'>
      <h1>Counter</h1>
      <p>Count : {count} </p>
      <button class="btn btn-primary mx-2" onClick={inc}>Increase</button> 
      <button class="btn btn-danger mx-2" onClick={dec}>Decrease</button>
      <button class="btn btn-success mx-2" onClick={reset}>Reset</button>
    </div>
  )
}
