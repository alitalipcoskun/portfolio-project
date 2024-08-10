import React from 'react'
import Photo from '../../UI/Photo/Photo'
import Text from '../Text/Text'

const Hero = (props) => {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-center mt-2 sm:mt-0 space-y-4 sm:space-y-0 sm:space-x-4">
            <Photo src={'/me.jpg'} size = "small" key = "hero"/>
            <Text />
        </div>
    )
}
export default Hero
