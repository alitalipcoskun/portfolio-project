import React from 'react'
import Photo from '../Photo/Photo'
import DetailedInfo from '../DetailedInfo/DetailedInfo'
import Name from '../Name/Name'

const Hero = () => {
    return (
        <div clasName="container flex flex-col">
            <Photo />
            <div className = "container flex flex-col mt-2 sm:mt-0">
                <Name />
                <DetailedInfo />
            </div>
        </div>
    )
}

export default Hero
