import React from 'react'
import { useSelector } from 'react-redux'
// import { selectCount } from './utils/counterSlice'

const Header = () => {
    const count = useSelector((store)=> store.counter.count)
    return (
        <div className='header'>
            <ul>
                <li>HOME</li>
                <li>SECTION</li>
                <li>COUNT {count}</li>
            </ul>
        </div>
    )
}

export default Header