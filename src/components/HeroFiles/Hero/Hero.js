import React from 'react'
import Photo from '../Photo/Photo'
import DetailedInfo from '../DetailedInfo/DetailedInfo'
import Name from '../Name/Name'

const Hero = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-center mt-2 sm:mt-0 space-y-4 sm:space-y-0 sm:space-x-4">
            <Photo />
            <div className="flex flex-col items-center sm:items-start justify-center">
                <Name />
                <DetailedInfo />
            </div>
        </div>
    )
}
export default Hero
