import React from 'react'
import { useDispatch } from 'react-redux'
import { increment,decrement } from './utils/counterSlice'

const Counter = () => {
   const dispatch = useDispatch()
   
  return (
    <div className=''>
        <h2>Counter</h2>
        <button onClick={()=> dispatch(increment())}>+</button>
        <button onClick={()=> dispatch(decrement())}>-</button>
        
    </div>
  )
}

export default Counter