// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const Counter = () => {
  const [counter,setCounter]=useState(0);

    // let counter=0;
    const increment = ()=>{
       setCounter((prev)=>prev +1)
       console.log(counter);
};
const decrement = ()=>{
  if (counter === 0) {
    alert("Counter is already at 0");
    return;
  }
  setCounter((prev)=>prev - 1)
  console.log(counter);
};
      
  return (
    <div className='flex  justify-center items-center gap-2  '>
    <h2 className='text-3xl text-center'> Count:{counter}</h2>
    <button onClick={increment} className='border-2 border-black p-2 mt-5 hover:bg-blue-500 ' >Increment</button>
    <button onClick={decrement} className='border-2 border-black p-2 mt-5 hover:bg-blue-500 ' >Decrement</button>
    </div>
  )
};

export default Counter