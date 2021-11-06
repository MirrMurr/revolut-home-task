import React from 'react'
import { arrayUtils } from '../../utils/array'

interface IDebugProps {
    children?: React.ReactElement | React.ReactElement[]
}

const COLORS = [
    'red',
    'green',
    'blue',
    'purple',
    'yellow',
    'orange',
    'cyan'
]

const Debug: React.FC<IDebugProps> = ({ children }) => {
    const color = arrayUtils.randomElement(COLORS)
    return (
        <div style={{ border: `3px solid ${color}` }}>
            {children}
        </div>
    )
}

export default Debug
