import Image from 'next/image'
import React from 'react'

const Photo = () => {
    return (
        <div className="relative h-64 w-64 sm:h-96 sm:w-96 rounded-full overflow-hidden"> 
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