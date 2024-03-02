import React from 'react'

const Header = ({count}) => {
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