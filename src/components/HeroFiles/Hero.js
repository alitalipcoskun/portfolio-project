
import React from 'react'
import Photo from '../UI/Photo'
import InfoText from './InfoText'




const Hero = ({isLoading}) => {

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-center mt-2 sm:mt-0 space-y-4 sm:space-y-0 sm:space-x-4 w-full h-[100vh]">
            <Photo src={'/me.jpg'} size = "small" key = "hero" loadingState={isLoading} isHeroImage = {true}/>
            <InfoText loadingState={isLoading} />
        </div>
    )
}
export default Hero
