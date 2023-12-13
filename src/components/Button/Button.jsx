import React from 'react'
import './Button.css'
const Button = ({label}) => {
    return (
        <div className='btn-grad font-semibold'>
            {label}
        </div>
    )
}

export default Button