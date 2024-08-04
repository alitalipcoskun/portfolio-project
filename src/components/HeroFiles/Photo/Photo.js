import Image from 'next/image'
import React from 'react'

const Photo = () => {
    return (
        <div className="container sm:h-96 sm:w-96 h-64 w-64  relative"> 
            <Image
                src="/me.jpg"
                alt="Picture"
                layout="fill" // required
                objectFit="cover"
                className="rounded-full" 
            />
        </div>
    )
}

export default Photo