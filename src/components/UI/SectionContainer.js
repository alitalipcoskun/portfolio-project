import React from 'react'

const SectionContainer = ({ children, className}) => {
    return (
        <div className={`container ${className} w-full h-full`}>{children}</div>
    )
}

export default SectionContainer