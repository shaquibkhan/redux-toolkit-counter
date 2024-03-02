import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,selectCount } from './utils/counterSlice'
import Header from './Header';
const Counter = () => {
   const dispatch = useDispatch()
   const count = useSelector(selectCount)
  return (
    <div className=''>
        <Header count={count}/>
        <h2>Counter</h2>
        <button onClick={()=> dispatch(increment())}>+</button>
        <button onClick={()=> dispatch(decrement())}>-</button>
        
    </div>
  )
}

export default Counter